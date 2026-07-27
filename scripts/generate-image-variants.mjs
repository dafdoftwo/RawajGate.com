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
let generated = 0;
let skipped = 0;
let totalBytes = 0;

console.log(`🖼️  معالجة ${images.length} صورة × ${WIDTHS.length} مقاسات...\n`);

for (const { abs, rel } of images) {
    const meta = await sharp(abs).metadata();
    const srcWidth = meta.width ?? 0;
    const baseName = rel.replace(/\.[^.]+$/, "").replace(/[\\/]/g, "__");

    for (const w of WIDTHS) {
        // لا تُكبّر الصورة فوق حجمها الأصلي — تكبير بلا فائدة يزيد الحجم فقط
        if (srcWidth && w > srcWidth) continue;

        const outPath = path.join(OUT_DIR, `${baseName}-${w}.webp`);

        // تخطَّ إن كان الملف موجوداً وأحدث من المصدر (بناء تدريجي)
        if (fs.existsSync(outPath)) {
            const srcTime = fs.statSync(abs).mtimeMs;
            const outTime = fs.statSync(outPath).mtimeMs;
            if (outTime >= srcTime) {
                skipped++;
                totalBytes += fs.statSync(outPath).size;
                continue;
            }
        }

        await sharp(abs)
            .resize(w, null, { withoutEnlargement: true })
            .webp({ quality: QUALITY, effort: 5 })
            .toFile(outPath);

        generated++;
        totalBytes += fs.statSync(outPath).size;
    }
}

console.log(`✓ وُلّد: ${generated} · مُتخطّى (محدّث): ${skipped}`);
console.log(`✓ الحجم الكلي للمقاسات: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
console.log(`✓ المسار: public/images/_variants/`);
