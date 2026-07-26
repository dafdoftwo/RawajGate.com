/**
 * خريطة مسارات الموقع — مصدر الحقيقة الواحد للبنية.
 * تستخدمها: sitemap.ts، مكوّنات الروابط ذات الصلة، والتنقل.
 *
 * ⚠️ عند إضافة صفحة جديدة تحت app/، أضِفها هنا أيضاً وإلا لن تدخل الـ sitemap.
 */

export interface SpokeRoute {
    slug: string;
    /** الاسم العربي المعروض في الروابط الداخلية */
    label: string;
}

export interface SiloRoute {
    slug: string;
    label: string;
    spokes: SpokeRoute[];
}

export const SILOS: SiloRoute[] = [
    {
        slug: "commercial-printing",
        label: "مطبوعات تجارية",
        spokes: [
            { slug: "business-cards", label: "بطاقات العمل" },
            { slug: "flyers-brochures", label: "فلايرات وبروشورات" },
            { slug: "folders", label: "ملفات العروض" },
            { slug: "letterheads", label: "الورق الرسمي" },
            { slug: "ncr-books", label: "دفاتر NCR" },
            { slug: "menus", label: "قوائم الطعام" },
        ],
    },
    {
        slug: "signage-stickers",
        label: "لوحات وملصقات",
        spokes: [
            { slug: "product-labels", label: "ملصقات المنتجات" },
            { slug: "vehicle-branding", label: "تغليف السيارات" },
            { slug: "wall-decals", label: "ستيكرات الجدران" },
            { slug: "outdoor-banners", label: "بانرات خارجية" },
            { slug: "shop-signage-3d", label: "لافتات 3D" },
        ],
    },
    {
        slug: "exhibitions-events",
        label: "معارض وفعاليات",
        spokes: [
            { slug: "roll-up-stands", label: "رول أب ستاند" },
            { slug: "pop-up-displays", label: "بوب أب ديسبلاي" },
            { slug: "custom-wood-booths", label: "أجنحة خشبية مخصصة" },
            { slug: "system-booths", label: "أجنحة أوكتانورم" },
            { slug: "promo-counters", label: "كاونترات ترويجية" },
        ],
    },
    {
        slug: "promotional-gifts",
        label: "هدايا دعائية",
        spokes: [
            { slug: "office-gifts", label: "هدايا مكتبية" },
            { slug: "tech-gadgets", label: "هدايا تقنية" },
            { slug: "wearables", label: "ملابس مطبوعة" },
            { slug: "bags-packaging", label: "أكياس وتغليف" },
        ],
    },
    {
        slug: "design-services",
        label: "خدمات التصميم",
        spokes: [
            { slug: "branding-identity", label: "هوية بصرية" },
            { slug: "logo-design", label: "تصميم شعارات" },
            { slug: "pre-press", label: "ما قبل الطباعة" },
        ],
    },
];

/** الصفحات المستقلة (غير التابعة لـ silo) */
export const STANDALONE_ROUTES = [
    { slug: "quote", label: "طلب عرض سعر", priority: 0.9, changeFrequency: "monthly" as const },
    { slug: "prices", label: "الأسعار", priority: 0.9, changeFrequency: "monthly" as const },
    { slug: "faq", label: "الأسئلة الشائعة", priority: 0.8, changeFrequency: "monthly" as const },
    { slug: "portfolio", label: "أعمالنا", priority: 0.8, changeFrequency: "weekly" as const },
    { slug: "blog", label: "المدونة", priority: 0.8, changeFrequency: "weekly" as const },
    { slug: "about", label: "من نحن", priority: 0.7, changeFrequency: "monthly" as const },
    { slug: "privacy", label: "سياسة الخصوصية", priority: 0.3, changeFrequency: "yearly" as const },
    { slug: "terms", label: "الشروط والأحكام", priority: 0.3, changeFrequency: "yearly" as const },
];

/** كل مسارات الخدمات مسطّحة — مفيدة للتحقق والروابط */
export const ALL_SERVICE_PATHS: string[] = SILOS.flatMap((silo) => [
    `/${silo.slug}`,
    ...silo.spokes.map((spoke) => `/${silo.slug}/${spoke.slug}`),
]);

/** ابحث عن silo يحتوي مساراً معيناً */
export function findSilo(siloSlug: string): SiloRoute | undefined {
    return SILOS.find((s) => s.slug === siloSlug);
}
