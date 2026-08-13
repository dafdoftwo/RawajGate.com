#!/usr/bin/env node
/**
 * حارس بيانات التواصل المكتوبة يدوياً
 * =====================================
 *
 * ⚠️ العطل الذي يمنعه:
 *
 * كان رقم الهاتف مكرَّراً في خمسة وثلاثين موضعاً عبر خمسة وعشرين ملفاً —
 * روابط tel: وwa.me في كل صفحة خدمة. وحين طُلب تغيير الرقم، كان لا بد
 * من تتبّع كل موضع يدوياً.
 *
 * ولو فات موضع واحد، لما ظهر ذلك في أي بناء ولا فحص نوعي ولا اختبار.
 * يظهر عند عميل يضغط «اتصل» فيصل إلى رقم لم يعد يعمل — أي في المكالمة
 * التي لم تصل، وهي أسوأ مكان لاكتشاف العطل.
 *
 * لذلك: أي رقم هاتف أو بريد مكتوب مباشرة في src/app أو src/components
 * يُفشل البناء. المصدر الوحيد هو src/lib/business.ts.
 *
 * يُشغَّل ضمن prebuild تلقائياً.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
const SCAN_DIRS = ["src/app", "src/components"];

/** الملف الوحيد المسموح له بحمل القيم الحرفية */
const SOURCE_OF_TRUTH = "src/lib/business.ts";

const PATTERNS = [
    { re: /\+?9665\d{8}/g, what: "رقم جوال سعودي" },
    { re: /wa\.me\/\d{6,}/g, what: "رقم واتساب في رابط" },
    { re: /tel:\+?\d{6,}/g, what: "رقم في رابط tel:" },
    { re: /\+966\s?\d{2}\s?\d{3}\s?\d{4}/g, what: "رقم منسّق للعرض" },
    { re: /[a-z0-9._%-]+@rawajgate\.com/gi, what: "بريد إلكتروني" },
];

function walk(dir) {
    const out = [];
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) out.push(...walk(p));
        else if (/\.(tsx?|jsx?)$/.test(e.name)) out.push(p);
    }
    return out;
}

const hits = [];
for (const d of SCAN_DIRS) {
    const abs = path.join(ROOT, d);
    if (!fs.existsSync(abs)) continue;
    for (const file of walk(abs)) {
        const rel = path.relative(ROOT, file);
        if (rel === SOURCE_OF_TRUTH) continue;
        const src = fs.readFileSync(file, "utf8");
        src.split("\n").forEach((line, i) => {
            // تجاهل الأسطر التي تقرأ من المصدر الموحّد
            if (line.includes("BUSINESS.phone") || line.includes("BUSINESS.email")) return;
            for (const { re, what } of PATTERNS) {
                re.lastIndex = 0;
                const m = re.exec(line);
                if (m) hits.push({ rel, line: i + 1, what, text: m[0] });
            }
        });
    }
}

if (hits.length > 0) {
    console.error("\n❌ بيانات تواصل مكتوبة يدوياً — البناء متوقّف\n");
    for (const h of hits) {
        console.error(`   ${h.rel}:${h.line}`);
        console.error(`      ${h.what}: ${h.text}`);
    }
    console.error(`\n   المصدر الوحيد هو ${SOURCE_OF_TRUTH}. استورد منه:`);
    console.error('      import { BUSINESS } from "@/lib/business";');
    console.error("      href={`tel:${BUSINESS.phone.e164}`}");
    console.error("      href={`https://wa.me/${BUSINESS.phone.whatsapp}`}");
    console.error("      {BUSINESS.phone.display}\n");
    console.error("   السبب: رقم مكرَّر في عشرات المواضع يعني أن أي تغيير");
    console.error("   يخرج ناقصاً، والعطل يظهر عند عميل لا في بناء.\n");
    process.exit(1);
}

console.log("✓ الحارس    — لا بيانات تواصل مكتوبة يدوياً");
