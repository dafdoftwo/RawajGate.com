/**
 * بنك الأسئلة الشائعة — نقطة الدخول الموحّدة
 * ============================================
 *
 * ⚡ ملاحظة أداء مهمة:
 * هذا الملف (barrel) يجمع **كل** الأقسام، ولا يجب استيراده إلا من صفحة
 * /faq التي تعرض الـ130 سؤالاً فعلياً.
 *
 * صفحات الخدمات يجب أن تستورد ملف قسمها مباشرة:
 *
 *   ❌ import { getFAQs } from "@/lib/faqs";            // يجلب 52 KB
 *   ✅ import { CommercialPrintingFaqs } from "@/lib/faqs/commercial-printing";
 *
 * الدالة getFAQs() أدناه موجودة للتوافق ولصفحة /faq فقط.
 */

import type { FAQ } from "./types";
import { SILO_LABELS } from "./types";
import { CommercialPrintingFaqs } from "./commercial-printing";
import { SignageStickersFaqs } from "./signage-stickers";
import { ExhibitionsEventsFaqs } from "./exhibitions-events";
import { PromotionalGiftsFaqs } from "./promotional-gifts";
import { DesignServicesFaqs } from "./design-services";

export type { FAQ } from "./types";
export { SILO_LABELS } from "./types";

/** كل الأسئلة مدمجة — للاستخدام في /faq فقط */
export const SERVICE_FAQS: Record<string, FAQ[]> = {
    ...CommercialPrintingFaqs,
    ...SignageStickersFaqs,
    ...ExhibitionsEventsFaqs,
    ...PromotionalGiftsFaqs,
    ...DesignServicesFaqs,
};

export function getFAQs(route: string): FAQ[] {
    return SERVICE_FAQS[route] ?? [];
}

/** كل الأسئلة مجمّعة حسب القسم — تُستخدم في /faq */
export function getFAQsBySilo(): Array<{
    silo: string;
    label: string;
    groups: Array<{ route: string; faqs: FAQ[] }>;
}> {
    const bySilo = new Map<string, Array<{ route: string; faqs: FAQ[] }>>();

    for (const [route, faqs] of Object.entries(SERVICE_FAQS)) {
        const silo = route.split("/")[0];
        if (!bySilo.has(silo)) bySilo.set(silo, []);
        bySilo.get(silo)!.push({ route, faqs });
    }

    return [...bySilo.entries()]
        .filter(([silo]) => silo in SILO_LABELS)
        .map(([silo, groups]) => ({ silo, label: SILO_LABELS[silo], groups }));
}

export const TOTAL_FAQS = Object.values(SERVICE_FAQS).reduce(
    (n, f) => n + f.length,
    0
);
