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

const articles = [];

for (const file of files) {
    const src = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const exportName = extractExportName(src);
    const slug = extractString(src, "slug");

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

/* ── 1) توليد meta.ts ─────────────────────────────────────── */
const metaEntries = articles
    .map((a) => {
        const lines = META_FIELDS.filter((f) => a.meta[f]).map(
            (f) => `        ${f}: ${a.meta[f]},`
        );
        lines.push(`        primaryKeyword: ${a.meta.primaryKeyword},`);
        return `    {\n${lines.join("\n")}\n    },`;
    })
    .join("\n");

let metaSrc = fs.readFileSync(META_FILE, "utf8");
metaSrc = metaSrc.replace(
    /\/\* ⬇️ AUTO-GENERATED — start \*\/[\s\S]*?\/\* ⬆️ AUTO-GENERATED — end \*\//,
    `/* ⬇️ AUTO-GENERATED — start */\nexport const ARTICLE_META: ArticleMeta[] = [\n${metaEntries}\n];\n/* ⬆️ AUTO-GENERATED — end */`
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
