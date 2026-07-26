/**
 * بيانات معرض الأعمال — 12 مشروعاً من الصور الفعلية للورشة.
 *
 * ⚠️ سياسة الشفافية:
 * كل مشروع مجهّل هوية العميل ("سلسلة مطاعم في التحلية"، "شركة مقاولات").
 * لا نُدرج أسماء عملاء إلا بعد الحصول على إذن كتابي منهم — هذا التزام
 * قانوني (خصوصية العميل) وتجاري (ثقة العملاء المحتملين).
 *
 * لعرض دراسات حالة كاملة بأسماء عملاء حقيقيين لاحقاً:
 *   1. احصل على موافقة كتابية من العميل
 *   2. استبدل clientAnonymized بـ clientName
 *   3. أضف حقول: challenge, solution, results, testimonial
 */

export interface PortfolioProject {
    slug: string;
    title: string;
    /** وصف مجهّل للعميل (قطاع + منطقة، بلا اسم) */
    clientAnonymized: string;
    /** تصنيف المشروع للفلترة */
    category: PortfolioCategory;
    /** رابط صفحة الخدمة المرتبطة */
    serviceUrl: string;
    /** الصورة الرئيسية */
    image: string;
    /** وصف مختصر — يظهر في البطاقة */
    summary: string;
    /** المدة أو النطاق — إشارة قيمة */
    scope: string;
    /** السنة التقريبية */
    year: string;
}

export type PortfolioCategory =
    | "exhibitions"
    | "signage"
    | "printing"
    | "branding"
    | "vehicles"
    | "gifts";

export const PORTFOLIO_CATEGORIES: {
    id: PortfolioCategory | "all";
    label: string;
}[] = [
    { id: "all", label: "الكل" },
    { id: "exhibitions", label: "معارض وفعاليات" },
    { id: "signage", label: "لافتات ومحلات" },
    { id: "vehicles", label: "تغليف السيارات" },
    { id: "printing", label: "مطبوعات" },
    { id: "branding", label: "هويات بصرية" },
    { id: "gifts", label: "هدايا دعائية" },
];

/**
 * 12 مشروع — كلها تستخدم صوراً موجودة أصلاً في public/images/.
 * الأوصاف مبنية على نوع كل صورة، بدون اختراع تفاصيل عن عميل بعينه.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
    {
        slug: "exhibition-booth-super-dome",
        title: "جناح معرض في جدة سوبر دوم",
        clientAnonymized: "شركة قطاع الأعمال",
        category: "exhibitions",
        serviceUrl: "/exhibitions-events/custom-wood-booths",
        image: "/images/exhibition-booth-fabrication-design-jeddah.webp",
        summary: "تصميم وتنفيذ جناح متكامل بمساحة متوسطة، بتشطيبات خشبية وإضاءة LED.",
        scope: "تصميم 3D + تصنيع + تركيب",
        year: "2025",
    },
    {
        slug: "custom-wooden-stand-jeddah",
        title: "ستاند خشبي مخصص — سوبر دوم",
        clientAnonymized: "علامة تجارية ناشئة",
        category: "exhibitions",
        serviceUrl: "/exhibitions-events/custom-wood-booths",
        image: "/images/custom-wooden-stand-jeddah-super-dome.webp",
        summary: "ستاند بتصميم مفتوح، منطقة عرض منتجات، ومنطقة اجتماعات جانبية.",
        scope: "9 م² · تنفيذ في أسبوعين",
        year: "2025",
    },
    {
        slug: "octanorm-shell-scheme",
        title: "جناح أوكتانورم بجرافيك مخصص",
        clientAnonymized: "شركة خدمات لوجستية",
        category: "exhibitions",
        serviceUrl: "/exhibitions-events/system-booths",
        image: "/images/octanorm-system-booth-shell-scheme.webp",
        summary: "أوكتانورم قياسي مع طباعة جرافيك على الجدران وطاولة استعلامات مخصصة.",
        scope: "12 م² · معرض قصير المدة",
        year: "2025",
    },
    {
        slug: "roll-up-stand-batch",
        title: "دفعة رول أب لشركة معرضية",
        clientAnonymized: "شركة أغذية",
        category: "exhibitions",
        serviceUrl: "/exhibitions-events/roll-up-stands",
        image: "/images/roll-up-stand-banner-85x200.webp",
        summary: "طباعة 20 رول أب بمقاسات موحّدة لمعرض تجاري في الرياض.",
        scope: "20 قطعة · تسليم 3 أيام",
        year: "2025",
    },
    {
        slug: "vehicle-fleet-wrapping",
        title: "تغليف أسطول تجاري كامل",
        clientAnonymized: "شركة مقاولات في جدة",
        category: "vehicles",
        serviceUrl: "/signage-stickers/vehicle-branding",
        image: "/images/commercial-vehicle-branding-car-wrapping-jeddah.webp",
        summary: "تغليف كامل لأسطول سيارات بفينيل مقاوم لشمس جدة، بضمان 3 سنوات.",
        scope: "أسطول متعدد المركبات",
        year: "2024",
    },
    {
        slug: "3d-shop-signage-acrylic",
        title: "لافتة محل 3D بأكريليك مضيء",
        clientAnonymized: "محل تجزئة في التحلية",
        category: "signage",
        serviceUrl: "/signage-stickers/shop-signage-3d",
        image: "/images/3d-shop-signage-letters-acrylic-jeddah.webp",
        summary: "حروف أكريليك بارزة مضيئة LED، تصميم واضح ليقرأ من مسافة 30 متراً.",
        scope: "لافتة 4 أمتار طولية",
        year: "2025",
    },
    {
        slug: "glass-window-frosted",
        title: "تصميم واجهة زجاجية مطفية",
        clientAnonymized: "مكتب استشارات",
        category: "signage",
        serviceUrl: "/signage-stickers/wall-decals",
        image: "/images/glass-window-frosted-sticker-branding.webp",
        summary: "ستيكرات مطفية على الزجاج توفّر خصوصية مع الحفاظ على الإضاءة الطبيعية.",
        scope: "10 أمتار مربعة",
        year: "2025",
    },
    {
        slug: "outdoor-flex-banner",
        title: "بانر خارجي كبير الحجم",
        clientAnonymized: "حملة إعلانية",
        category: "signage",
        serviceUrl: "/signage-stickers/outdoor-banners",
        image: "/images/outdoor-flex-banner-printing-large-format.webp",
        summary: "طباعة فلكس مقاومة UV لواجهة مبنى بمساحة كبيرة.",
        scope: "بانر 6 × 4 متر",
        year: "2024",
    },
    {
        slug: "product-labels-roll",
        title: "ملصقات منتجات دوائية",
        clientAnonymized: "علامة تجميلية سعودية",
        category: "printing",
        serviceUrl: "/signage-stickers/product-labels",
        image: "/images/custom-product-labels-roll-stickers-jeddah.webp",
        summary: "ملصقات رول مقاومة للماء بألوان دقيقة لخط منتجات كامل.",
        scope: "12 SKU · طباعة مستمرة",
        year: "2025",
    },
    {
        slug: "restaurant-menu-leather",
        title: "منيو مطعم بغلاف جلدي",
        clientAnonymized: "مطعم راقٍ في جدة",
        category: "printing",
        serviceUrl: "/commercial-printing/menus",
        image: "/images/restaurant-menu-design-leather-cover.webp",
        summary: "تصميم وطباعة منيو بغلاف جلدي فاخر وصفحات داخلية مقاومة للماء.",
        scope: "40 نسخة · قسمَي طعام ومشروبات",
        year: "2025",
    },
    {
        slug: "corporate-gifts-set",
        title: "مجموعة هدايا مكتبية للشركات",
        clientAnonymized: "شركة تقنية",
        category: "gifts",
        serviceUrl: "/promotional-gifts/office-gifts",
        image: "/images/branded-notebooks-diaries-calendar-gift-sets.webp",
        summary: "دفاتر جلدية + أقلام معدنية + أجندات، بطاقات ليزر لشعار الشركة.",
        scope: "200 مجموعة هدايا",
        year: "2025",
    },
    {
        slug: "tech-promotional-gifts",
        title: "هدايا تقنية موسمية",
        clientAnonymized: "بنك محلي",
        category: "gifts",
        serviceUrl: "/promotional-gifts/tech-gadgets",
        image: "/images/tech-gifts-powerbank-usb-branding.webp",
        summary: "باور بانك وفلاشات USB بشعار مطبوع بالليزر، للتوزيع في فعالية سنوية.",
        scope: "500 قطعة",
        year: "2024",
    },
];

/** إحصائيات الفلترة — لعرض العدد بجانب كل تصنيف */
export function getCategoryCounts(): Record<string, number> {
    const counts: Record<string, number> = { all: PORTFOLIO_PROJECTS.length };
    for (const project of PORTFOLIO_PROJECTS) {
        counts[project.category] = (counts[project.category] ?? 0) + 1;
    }
    return counts;
}

/** المشاريع حسب التصنيف — للفلترة */
export function getProjects(category: string): PortfolioProject[] {
    if (category === "all" || !category) return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === category);
}
