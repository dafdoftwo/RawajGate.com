#!/usr/bin/env node
/**
 * فاحص المقالات المستحقة
 * ========================
 *
 * ⚡ المشكلة التي يحلّها:
 * النشر الثابت لا يعرف الوقت — الموقع يُبنى مرة ويتجمّد. لنشر 90 مقالاً
 * مجدولاً نحتاج إعادة بناء عند حلول موعد كل مقال.
 *
 * الحل الساذج: بناء كل ساعة = 720 بناءً شهرياً — يتجاوز حد Cloudflare
 * Pages المجاني (500 بناء/شهر).
 *
 * الحل الذكي: نفحص كل ساعتين، لكن **لا نبني إلا إن استحقّ مقال فعلاً**.
 * مع 90 مقالاً على 8 أشهر، هذا يعني ~12 بناءً شهرياً بدل 720.
 *
 * الاستخدام في CI:
 *   node scripts/check-due-articles.mjs --window 2
 *   exit 0 = يوجد مستحق (ابنِ)
 *   exit 1 = لا شيء (تخطَّ البناء)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
/**
 * ⚠️ يقرأ شظايا الفهرس لا meta.ts.
 *
 * كان يقرأ meta.ts مباشرة. حين شُظّي الفهرس إلى ملف لكل شهر لم يعد
 * meta.ts يحوي سطور publishAt، فصار السكربت يجد **صفر مقالات** ويخرج
 * بـ«لا مقال مستحق» — أي أن النشر التلقائي يتوقّف نهائياً بلا رسالة
 * خطأ ولا تشغيل فاشل. لهذا أُضيف حارس الصفر أدناه.
 */
const INDEX_DIR = path.join(ROOT, "src/lib/articles/index");

// نافذة الفحص بالساعات (يجب أن تطابق تكرار الـ cron)
const windowArg = process.argv.indexOf("--window");
const WINDOW_HOURS = windowArg > -1 ? Number(process.argv[windowArg + 1]) : 2;

if (!fs.existsSync(INDEX_DIR)) {
    console.error(`❌ مجلد الفهرس غير موجود: ${INDEX_DIR}`);
    console.error("   شغّل: node scripts/generate-article-registry.mjs");
    process.exit(2);
}

const articles = [];
for (const file of fs.readdirSync(INDEX_DIR).filter((f) => f.endsWith(".ts"))) {
    const src = fs.readFileSync(path.join(INDEX_DIR, file), "utf8");
    const slugs = [...src.matchAll(/^        slug: "([^"]+)",$/gm)].map((m) => m[1]);
    const dates = [...src.matchAll(/^        publishAt: "([^"]+)",$/gm)].map((m) => m[1]);
    for (let i = 0; i < Math.min(slugs.length, dates.length); i++) {
        articles.push({ slug: slugs[i], publishAt: dates[i] });
    }
}

/*
  حارس الصفر — لا يُحذف.

  صفر مقالات لا يعني «لا شيء مستحق»؛ يعني أن القراءة نفسها فشلت:
  تغيّر مسار أو صيغة أو لم يُشغَّل المولّد. الخروج بـ 1 هنا كان يبدو
  نجاحاً هادئاً بينما المدونة متوقّفة. الخروج بـ 2 يُفشل خطوة الـ
  workflow فيصل تنبيه فوراً.
*/
if (articles.length === 0) {
    console.error("❌ لم يُقرأ أي مقال من شظايا الفهرس.");
    console.error("   هذا خلل في القراءة لا غياب مقالات مستحقة.");
    console.error(`   افحص: ${INDEX_DIR}/*.ts وصيغة حقلَي slug و publishAt.`);
    process.exit(2);
}

const now = Date.now();

/*
  ══════════════════════════════════════════════════════════════
   العلامة المائية — بديل النافذة المنزلقة
  ══════════════════════════════════════════════════════════════

  ⚠️ الثغرة التي أُغلقت هنا:

  كان الفحص يسأل «هل استحقّ مقال في آخر ساعتين؟». وهذا يعمل ما دام
  كل تشغيل يتمّ في موعده. لكن تشغيل ٦ أغسطس ٢٠٢٦ **أُلغي** بعد خمس
  عشرة دقيقة (عطل بنية تحتية في GitHub، لا خطأ في الكود).

  لو كان ذلك اليوم يحمل مقالاً موعده ١٥:٣٠، لحدث الآتي:
      التشغيل ١٦:٠٠  ← أُلغي
      التشغيل ١٨:٠٠  ← يفحص [١٦:٠٠–١٨:٠٠] · و١٥:٣٠ خارجها
      النتيجة: المقال لا يُنشر، ولا رسالة خطأ، ولا تشغيل فاشل.

  أي أن المقال يبقى مخفياً حتى يستحق مقال آخر بعد يومين أو ثلاثة —
  ولا أحد يعلم. نجونا هذه المرة لأن ٦ أغسطس صادف يوماً بلا مقال.

  البديل: علامة مائية محفوظة في الملف أدناه. السؤال يصير:
      «هل استحقّ مقال **منذ آخر مرة أطلقنا فيها بناءً**؟»

  هذا السؤال لا يفقد شيئاً مهما طال الانقطاع: تشغيل واحد ناجح بعد
  أسبوع توقّف يلتقط كل ما فات دفعةً واحدة. والنافذة تبقى احتياطاً
  فقط حين لا توجد علامة (أول تشغيل بعد إضافة هذا الملف).
*/
const MARK_FILE = path.join(ROOT, ".github/last-publish-mark");

let since = now - WINDOW_HOURS * 60 * 60 * 1000;
let markSource = `النافذة الاحتياطية (${WINDOW_HOURS} ساعة)`;

if (fs.existsSync(MARK_FILE)) {
    const raw = fs.readFileSync(MARK_FILE, "utf8").trim();
    const t = new Date(raw).getTime();
    if (Number.isFinite(t)) {
        since = t;
        markSource = `العلامة المائية (${raw})`;
    } else {
        console.warn(`⚠️ علامة غير صالحة في ${MARK_FILE}: «${raw}» — سقوط للنافذة`);
    }
}

const due = articles.filter((a) => {
    const t = new Date(a.publishAt).getTime();
    return t > since && t <= now;
});

const published = articles.filter((a) => new Date(a.publishAt).getTime() <= now);
const upcoming = articles
    .filter((a) => new Date(a.publishAt).getTime() > now)
    .sort((a, b) => new Date(a.publishAt) - new Date(b.publishAt))[0];

console.log(`📚 إجمالي المقالات : ${articles.length}`);
console.log(`✅ منشور            : ${published.length}`);
console.log(`🕐 مجدول            : ${articles.length - published.length}`);
if (upcoming) {
    console.log(`📅 النشر القادم     : ${upcoming.publishAt}`);
    console.log(`                     ${upcoming.slug}`);
}
console.log(`\n🔍 مرجع الفحص: ${markSource}`);
console.log(`   يبحث عن مقالات بين ${new Date(since).toISOString()} و${new Date(now).toISOString()}`);

if (due.length > 0) {
    console.log(`\n🚀 استحقّ ${due.length} مقالاً — البناء مطلوب:`);
    due.forEach((a) => console.log(`   • ${a.slug} (${a.publishAt})`));

    // مخرَج لـ GitHub Actions
    if (process.env.GITHUB_OUTPUT) {
        fs.appendFileSync(process.env.GITHUB_OUTPUT, `should_build=true\n`);
        fs.appendFileSync(process.env.GITHUB_OUTPUT, `due_count=${due.length}\n`);
        fs.appendFileSync(
            process.env.GITHUB_OUTPUT,
            `due_slugs=${due.map((a) => a.slug).join(", ")}\n`
        );
    }
    /*
      حدِّث العلامة **قبل** الخروج. الـ workflow يضمّ هذا الملف إلى
      نفس الـ commit الذي يُطلق البناء، فتصير العلامة والبناء ذرّةً
      واحدة: إن فشل الدفع لم تتقدّم العلامة، فيلتقط التشغيلُ التالي
      نفسَ المقال بدل أن يتخطّاه.
    */
    fs.mkdirSync(path.dirname(MARK_FILE), { recursive: true });
    fs.writeFileSync(MARK_FILE, new Date(now).toISOString() + "\n", "utf8");
    console.log(`\n📌 حُدِّثت العلامة المائية → ${new Date(now).toISOString()}`);

    process.exit(0);
}

console.log(`\n💤 لا مقال مستحق — تخطّي البناء (توفير حصة Cloudflare)`);
if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `should_build=false\n`);
}
process.exit(1);
