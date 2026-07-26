/**
 * أنواع بيانات التسعير + إعدادات عامة
 *
 * سياسة الأسعار (اقرأ قبل أي تعديل):
 * كل رقم هنا **نطاق** لا سعر ثابت، ومصحوب في الواجهة بجملة صريحة
 * «استرشادي — السعر النهائي بعرض». لا التزام قانوني بسعر محدد.
 * النطاقات مبنية على متوسطات السوق السعودي، ونطاق تغليف السيارات
 * مذكور حرفياً في مقال /blog/vehicle-branding-tips المنشور.
 */

export const PRICING_LAST_REVIEWED = "2026-07-26";
export const PRICING_CURRENCY = "SAR";
export const PRICING_CURRENCY_AR = "ريال";

export interface PriceTier {
    tier: string;
    spec: string;
    priceFrom: number;
    priceTo: number;
    unit: string;
    turnaround: string;
    popular?: boolean;
}

export interface PricingBlock {
    slug: string;
    serviceName: string;
    serviceUrl: string;
    /** جملة إجابة مباشرة بالسعر — للـ AEO/GEO */
    directAnswer: string;
    included: string[];
    excluded: string[];
    factors: string[];
    tiers: PriceTier[];
    notes?: string[];
}

/** تنسيق نطاق سعري للعرض */
export function formatRange(from: number, to: number): string {
    return `${from.toLocaleString("ar-EG")} – ${to.toLocaleString("ar-EG")} ${PRICING_CURRENCY_AR}`;
}

/** «يبدأ من X ريال» — للعناوين والـ AI snippets */
export function formatFrom(from: number): string {
    return `يبدأ من ${from.toLocaleString("ar-EG")} ${PRICING_CURRENCY_AR}`;
}
