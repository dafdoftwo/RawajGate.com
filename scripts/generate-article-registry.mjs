#!/usr/bin/env node
/**
 * مولّد سجل المقالات
 * ===================
 *
 * يفحص src/lib/articles/posts/ ويُعيد توليد:
 *   • meta.ts   — الفهرس الخفيف (عناوين وتواريخ، بلا محتوى)
 *   • loader.ts — خريطة الاستيراد الديناميكي
 *
 * الاستخدام بعد إضافة أي مقال جديد:
 *   node scripts/generate-article-registry.mjs
 *
 * لماذا سكربت بدل الربط اليدوي؟
 * لأن الربط اليدوي في ثلاثة أماكن (الملف + meta + loader) يعني نسيان
 * أحدها عاجلاً أو آجلاً. مع 90 مقالاً هذا يصبح مصدر أخطاء مؤكداً.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
const POSTS_DIR = path.join(ROOT, "src/lib/articles/posts");
const META_FILE = path.join(ROOT, "src/lib/articles/meta.ts");
const LOADER_FILE = path.join(ROOT, "src/lib/articles/loader.ts");
/** شظايا الفهرس، ملف لكل شهر نشر */
const INDEX_DIR = path.join(ROOT, "src/lib/articles/index");

/** الحقول الخفيفة التي تدخل meta.ts */
const META_FIELDS = [
    "slug", "title", "seoTitle", "excerpt", "category", "intent",
    "publishAt", "dateModified", "author", "authorRole",
    "image", "imageAlt", "readTime",
];

/** يستخرج قيمة نصية لحقل من مصدر TypeScript */
function extractString(src, field) {
    const re = new RegExp(`^    ${field}:\\s*\\n?\\s*("(?:[^"\\\\]|\\\\.)*"),`, "m");
    const m = src.match(re);
    return m ? m[1] : null;
}

/** يستخرج اسم الـ export من الملف */
function extractExportName(src) {
    const m = src.match(/export const (\w+): Article =/);
    return m ? m[1] : null;
}

const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".ts"))
    .sort();

/**
 * زمن القراءة محسوباً من المحتوى الفعلي.
 *
 * ⚠️ كان هذا الحقل يُكتب يدوياً في كل مقال، فانحرف عن الواقع: أربعة
 * وعشرون مقالاً من تسعين كانت تُعلن زمناً يزيد ٣ دقائق أو أكثر عن
 * الحقيقي — أحدها يقول «١٢ دقيقة» لنص يُقرأ في أربع. ورقم كهذا لا
 * يبقى في الصفحة وحدها؛ يدخل بيانات BlogPosting المنظّمة، فيصير
 * ادّعاءً غير صحيح تقرؤه محركات البحث ووكلاء الذكاء الاصطناعي.
 *
 * ١٨٠ كلمة/دقيقة — المعدّل المتعارف عليه للنثر العربي.
 */
const WPM = 180;

function readingTime(content) {
    const plain = content
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // روابط ماركداون → نصّها
        .replace(/[#*|>`_-]/g, " ");
    const words = plain.split(/\s+/).filter((w) => w.length > 1).length;
    const mins = Math.max(1, Math.round(words / WPM));

    // تصريف العدد في العربية: ١ مفرد · ٢ مثنى · ٣-١٠ جمع · ١١+ مفرد
    if (mins === 1) return "دقيقة واحدة";
    if (mins === 2) return "دقيقتان";
    if (mins <= 10) return `${mins} دقائق`;
    return `${mins} دقيقة`;
}

/** يستخرج جسم حقل content المحاط بعلامات backtick */
function extractContent(src) {
    const m =
        src.match(/content:\s*`([\s\S]*?)`\s*,?\s*\n\};/) ||
        src.match(/content:\s*`([\s\S]*?)`/);
    return m ? m[1] : "";
}

const articles = [];
let retimed = 0;

for (const file of files) {
    let src = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const exportName = extractExportName(src);
    const slug = extractString(src, "slug");

    /*
      يُصحَّح readTime في ملف المقال نفسه لا في الفهرس فقط.
      السبب: صفحة المقال تقرأ الكائن الكامل عبر loader.ts، بينما القوائم
      تقرأ الفهرس. تصحيح أحدهما دون الآخر يُنتج رقمين مختلفين للمقال
      الواحد حسب مكان عرضه.
    */
    const computed = readingTime(extractContent(src));
    const currentRT = extractString(src, "readTime");
    if (currentRT && JSON.parse(currentRT) !== computed) {
        src = src.replace(/^    readTime:\s*"[^"]*",$/m, `    readTime: "${computed}",`);
        fs.writeFileSync(path.join(POSTS_DIR, file), src, "utf8");
        retimed++;
    }

    if (!exportName || !slug) {
        console.warn(`⚠️  تخطّي ${file} — لا يحتوي export أو slug صالح`);
        continue;
    }

    const meta = {};
    for (const f of META_FIELDS) {
        const v = extractString(src, f);
        if (v) meta[f] = v;
    }

    // primaryKeyword من كتلة keywords
    const pk = src.match(/primary:\s*("(?:[^"\\]|\\.)*")/);
    meta.primaryKeyword = pk ? pk[1] : '""';

    articles.push({
        file: file.replace(/\.ts$/, ""),
        exportName,
        slug: JSON.parse(slug),
        meta,
    });
}

// رتّب حسب تاريخ النشر (الأحدث أولاً) لسهولة القراءة
articles.sort(
    (a, b) =>
        new Date(JSON.parse(b.meta.publishAt)).getTime() -
        new Date(JSON.parse(a.meta.publishAt)).getTime()
);

/* ── 1) توليد شظايا الفهرس + meta.ts ──────────────────────── */

/*
  ⚠️ لماذا تُشظّى البيانات بدل ملف واحد؟

  كان meta.ts ملفاً واحداً بلغ ١٠٥ KB عند تسعين مقالاً — أي ~٨٦٢ بايت
  لكل مقال. بثلاثمئة مقال يصير ٢٥٣ KB، وبخمسمئة ٤٢٠ KB. ملف مصدر واحد
  بهذا الحجم يُبطئ المحرّر والفحص النوعي، ويجعل كل commit يلمس ملفاً
  ضخماً فتصير مراجعة الفروق شبه مستحيلة.

  التشظية حسب **شهر النشر**: إضافة مقال جديد تلمس شظية شهره وحدها،
  وشظايا الشهور الماضية لا تتغيّر أبداً بعد انقضائها. بمعدّل مقال كل
  يومين تبقى كل شظية ~١٥ KB مهما بلغ عمر المدونة.

  الأهم: meta.ts يبقى الواجهة الوحيدة. كل من يستورده — الصفحات،
  الـ sitemap، المكوّنات — لا يعلم بوجود الشظايا ولا يحتاج تعديلاً.
*/
const byMonth = new Map();
for (const a of articles) {
    const month = JSON.parse(a.meta.publishAt).slice(0, 7).replace("-", "_");
    if (!byMonth.has(month)) byMonth.set(month, []);
    byMonth.get(month).push(a);
}
const months = [...byMonth.keys()].sort();

const renderEntry = (a) => {
    const lines = META_FIELDS.filter((f) => a.meta[f]).map(
        (f) => `        ${f}: ${a.meta[f]},`
    );
    lines.push(`        primaryKeyword: ${a.meta.primaryKeyword},`);
    return `    {\n${lines.join("\n")}\n    },`;
};

fs.mkdirSync(INDEX_DIR, { recursive: true });

// احذف شظايا شهور لم يعد لها مقالات (بعد إعادة جدولة مثلاً)
for (const f of fs.readdirSync(INDEX_DIR)) {
    const y = f.replace(/\.ts$/, "");
    if (/^\d{4}_\d{2}$/.test(y) && !byMonth.has(y)) {
        fs.unlinkSync(path.join(INDEX_DIR, f));
    }
}

for (const month of months) {
    const entries = byMonth.get(month).map(renderEntry).join("\n");
    const src =
        `/* ⚠️ ملف مولَّد — لا تُعدّله يدوياً.\n` +
        `   المصدر: src/lib/articles/posts/*.ts\n` +
        `   التوليد: node scripts/generate-article-registry.mjs\n` +
        `   يضمّ مقالات ${month.replace("_", "-")} فقط — انظر meta.ts للسبب. */\n\n` +
        `import type { ArticleMeta } from "../meta";\n\n` +
        `export const META_${month}: ArticleMeta[] = [\n${entries}\n];\n`;
    fs.writeFileSync(path.join(INDEX_DIR, `${month}.ts`), src, "utf8");
}

const imports = months
    .map((m) => `import { META_${m} } from "./index/${m}";`)
    .join("\n");
const concat = months.map((m) => `    ...META_${m},`).join("\n");

let metaSrc = fs.readFileSync(META_FILE, "utf8");
metaSrc = metaSrc.replace(
    /\/\* ⬇️ AUTO-GENERATED — start \*\/[\s\S]*?\/\* ⬆️ AUTO-GENERATED — end \*\//,
    `/* ⬇️ AUTO-GENERATED — start */\n${imports}\n\n` +
        `/**\n * كل المقالات، مرتّبة من الأحدث إلى الأقدم.\n` +
        ` * مجمَّعة من شظايا index/ — راجع رأس هذا الملف.\n */\n` +
        `export const ARTICLE_META: ArticleMeta[] = [\n${concat}\n]\n` +
        `    .slice()\n` +
        `    .sort((a, b) => +new Date(b.publishAt) - +new Date(a.publishAt));\n` +
        `/* ⬆️ AUTO-GENERATED — end */`
);
fs.writeFileSync(META_FILE, metaSrc, "utf8");

/* ── 2) توليد loader.ts ───────────────────────────────────── */
const loaderEntries = articles
    .map(
        (a) =>
            `    ${JSON.stringify(a.slug)}: () =>\n        import("./posts/${a.file}").then((m) => m.${a.exportName}),`
    )
    .join("\n");

let loaderSrc = fs.readFileSync(LOADER_FILE, "utf8");
loaderSrc = loaderSrc.replace(
    /const LOADERS: Record<string, \(\) => Promise<Article>> = \{[\s\S]*?\n\};/,
    `const LOADERS: Record<string, () => Promise<Article>> = {\n${loaderEntries}\n};`
);
fs.writeFileSync(LOADER_FILE, loaderSrc, "utf8");

/* ── تقرير ────────────────────────────────────────────────── */
const now = new Date();
const published = articles.filter(
    (a) => new Date(JSON.parse(a.meta.publishAt)) <= now
);

if (retimed) console.log(`✓ readTime  — صُحِّح في ${retimed} مقالاً`);
console.log(`✓ meta.ts   — ${articles.length} مقالاً`);
console.log(`✓ loader.ts — ${articles.length} محمّلاً`);
console.log(`\n📊 منشور الآن: ${published.length} · مجدول: ${articles.length - published.length}`);

const next = articles
    .filter((a) => new Date(JSON.parse(a.meta.publishAt)) > now)
    .sort(
        (a, b) =>
            new Date(JSON.parse(a.meta.publishAt)).getTime() -
            new Date(JSON.parse(b.meta.publishAt)).getTime()
    )[0];

if (next) {
    console.log(`📅 النشر القادم: ${JSON.parse(next.meta.publishAt)}`);
    console.log(`   ${JSON.parse(next.meta.title)}`);
}
