#!/usr/bin/env node
/**
 * مولّد مقاسات الصور المتجاوبة
 * ==============================
 *
 * ⚡ لماذا نحتاجه على Cloudflare؟
 *
 * `next/image` يعتمد على مُحسِّن Next.js الذي يعمل على خادم Node. عند النشر
 * الثابت على Cloudflare Pages لا يوجد هذا الخادم، والبدائل (Cloudflare Images
 * أو Image Resizing) **ليست مجانية**.
 *
 * الحل ضمن الحد المجاني: نولّد المقاسات **وقت البناء** ونخدمها كملفات ثابتة.
 * النتيجة:
 *   • srcset كامل يعمل تماماً كما مع Vercel
 *   • صفر تكلفة تشغيل — ملفات ثابتة من الـ CDN
 *   • أسرع فعلياً من التحسين وقت الطلب (لا انتظار أول معالجة)
 *
 * الاستخدام:
 *   node scripts/generate-image-variants.mjs
 *
 * يُشغَّل تلقائياً قبل البناء عبر سكربت prebuild في package.json.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
const SRC_DIR = path.join(ROOT, "public/images");
const OUT_DIR = path.join(ROOT, "public/images/_variants");

/** المقاسات المولَّدة — تغطي الجوال والتابلت والديسكتوب و2x */
const WIDTHS = [640, 828, 1200, 1920];

/** جودة WebP — 80 توازن ممتاز بين الحجم والوضوح */
const QUALITY = 80;

let sharp;
try {
    sharp = (await import("sharp")).default;
} catch {
    console.error(
        "❌ حزمة sharp غير مثبّتة.\n" +
        "   ثبّتها بـ: npm i -D sharp\n" +
        "   (مطلوبة فقط وقت البناء، لا تُشحن للمتصفح)"
    );
    process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

/** اجمع كل الصور، بما فيها المجلدات الفرعية */
function collectImages(dir, base = "") {
    const out = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith("_") || entry.name.startsWith(".")) continue;
        const rel = path.join(base, entry.name);
        const abs = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            out.push(...collectImages(abs, rel));
        } else if (/\.(webp|png|jpe?g)$/i.test(entry.name)) {
            out.push({ abs, rel });
        }
    }
    return out;
}

const images = collectImages(SRC_DIR);
let encoded = 0;
let copied = 0;
let skipped = 0;
let totalBytes = 0;

console.log(`🖼️  معالجة ${images.length} صورة × ${WIDTHS.length} مقاسات...\n`);

for (const { abs, rel } of images) {
    const meta = await sharp(abs).metadata();
    const srcWidth = meta.width || WIDTHS[WIDTHS.length - 1];
    const baseName = rel.replace(/\.[^.]+$/, "").replace(/[\\/]/g, "__");
    const srcTime = fs.statSync(abs).mtimeMs;

    /*
      ⚠️ قاعدة حاسمة: **كل مقاس في WIDTHS يجب أن يُنتج ملفاً**، بلا استثناء.

      السبب: المحمّل (src/lib/image-loader.ts) لا يعرف أبعاد المصدر — يبني
      اسم الملف من العرض المطلوب وحده. و`next/image` يضع كل المقاسات في
      srcset. فلو تخطّينا مقاساً لأن المصدر أصغر منه، طلبه المتصفح ورجع 404.

      هذا بالضبط ما كسر اللوجو (512px) وصور المحتوى (≤800px) في أول نشر:
      srcset كان يشير إلى -828 و-1200 و-1920 وهي غير موجودة.

      الحل: نُرمّز فعلياً حتى عرض المصدر، ثم نَنسخ أكبر ملف حقيقي إلى
      أسماء المقاسات الأكبر. البكسلات نفسها (لا تكبير مصطنع)، لكن كل اسم
      يطلبه المتصفح موجود. تكلفة النسخ: كيلوبايتات معدودة.
    */
    let largestReal = null; // أكبر ملف رُمِّز فعلياً حتى الآن
    let nativeEmitted = false; // هل أخرجنا نسخة بعرض المصدر الكامل؟

    for (const w of WIDTHS) {
        const outPath = path.join(OUT_DIR, `${baseName}-${w}.webp`);

        // نُرمّز ما دام المقاس ضمن حدود المصدر، وأيضاً أول مقاس يتجاوزه
        // (فينتج نسخة بعرض المصدر الكامل بفضل withoutEnlargement)
        const needsRealEncode = w <= srcWidth || !nativeEmitted;

        // بناء تدريجي: تخطَّ الملف الموجود الأحدث من المصدر
        const upToDate =
            fs.existsSync(outPath) && fs.statSync(outPath).mtimeMs >= srcTime;

        if (upToDate) {
            skipped++;
        } else if (needsRealEncode) {
            await sharp(abs)
                .resize(w, null, { withoutEnlargement: true })
                .webp({ quality: QUALITY, effort: 5 })
                .toFile(outPath);
            encoded++;
        } else {
            fs.copyFileSync(largestReal, outPath);
            copied++;
        }

        if (needsRealEncode) {
            largestReal = outPath;
            if (w >= srcWidth) nativeEmitted = true;
        }

        totalBytes += fs.statSync(outPath).size;
    }
}

const expected = images.length * WIDTHS.length;
const actual = fs.readdirSync(OUT_DIR).filter((f) => f.endsWith(".webp")).length;

console.log(`✓ رُمِّز: ${encoded} · نُسخ: ${copied} · مُتخطّى: ${skipped}`);
console.log(`✓ الحجم الكلي: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
console.log(`✓ المسار: public/images/_variants/`);

// حارس: أي نقص هنا يعني صوراً مكسورة في الإنتاج — أوقف البناء
if (actual < expected) {
    console.error(
        `\n❌ نقص في المقاسات: متوقّع ${expected} · موجود ${actual}\n` +
        `   كل صورة يجب أن تملك المقاسات الأربعة وإلا كسر srcset.`
    );
    process.exit(1);
}
console.log(`✓ الحارس: ${actual}/${expected} مقاساً — لا صور مكسورة`);
