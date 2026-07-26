/**
 * فهرس المقالات الخفيف (Metadata فقط)
 * =====================================
 *
 * ⚡ لماذا هذا الملف منفصل عن محتوى المقالات؟
 *
 * المعمارية السابقة كانت تستورد كل المقالات استاتيكياً في registry.ts.
 * مع 10 مقالات كان الحمل مقبولاً، لكن مع 90 مقالاً (الهدف) فإن أي صفحة
 * تعرض قائمة — /blog، sitemap، الروابط ذات الصلة — كانت ستُحمّل
 * ~500 KB من نصوص المقالات في الذاكرة لتعرض عناوين فقط.
 *
 * الحل: فصل الطبقتين
 *   • هذا الملف: بيانات خفيفة (عنوان، تاريخ، تصنيف) — بضعة كيلوبايتات
 *   • posts/*.ts: المحتوى الكامل — يُحمَّل ديناميكياً لمقال واحد فقط
 *
 * ⚠️ هذا الملف **مولَّد آلياً**. لا تعدّله يدوياً.
 *    شغّل: node scripts/generate-article-meta.mjs
 */

import type { ArticleCategory, ArticleIntent } from "./types";

export interface ArticleMeta {
    slug: string;
    title: string;
    seoTitle?: string;
    excerpt: string;
    category: ArticleCategory;
    intent: ArticleIntent;
    publishAt: string;
    dateModified: string;
    author: string;
    authorRole?: string;
    image: string;
    imageAlt: string;
    readTime: string;
    /** الكلمة المفتاحية الرئيسية — تُستخدم في الروابط ذات الصلة */
    primaryKeyword: string;
}

/* ⬇️ AUTO-GENERATED — start */
export const ARTICLE_META: ArticleMeta[] = [
    {
        slug: "business-cards-price-jeddah",
        title: "كم سعر طباعة كروت شخصية في جدة؟ دليل الأسعار الكامل 2026",
        seoTitle: "سعر طباعة كروت شخصية في جدة 2026",
        excerpt:
            "الأسعار الفعلية لطباعة بطاقات العمل في جدة حسب الخامة والكمية والتشطيب، مع جدول مقارنة، وما الذي يجعل السعر يرتفع أو ينخفض.",
        category: "أسعار",
        intent: "transactional",
        publishAt: "2026-07-14T09:34:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم المطبوعات التجارية",
        image: "/images/luxury-business-cards-printing-jeddah.webp",
        imageAlt: "بطاقات عمل مطبوعة بتشطيبات مختلفة في جدة",
        readTime: "9 دقائق",
        primaryKeyword: "سعر طباعة كروت شخصية في جدة",
    },
    {
        slug: "shop-signage-municipality-rules-jeddah",
        title: "اشتراطات لوحات المحلات في أمانة جدة: الدليل الكامل 2026",
        seoTitle: "اشتراطات لوحات المحلات في جدة 2026",
        excerpt:
            "كل ما تحتاج معرفته قبل تركيب لافتة محلك في جدة: الاشتراطات النظامية، نسبة اللغة العربية، المقاسات المسموحة، خطوات التصريح، والمخالفات الشائعة.",
        category: "مرجعي",
        intent: "reference",
        publishAt: "2026-07-17T14:41:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم اللافتات والتركيب",
        image: "/images/3d-shop-signage-letters-acrylic-jeddah.webp",
        imageAlt: "لافتة محل ثلاثية الأبعاد مركّبة على واجهة في جدة",
        readTime: "11 دقيقة",
        primaryKeyword: "اشتراطات لوحات المحلات في جدة",
    },
    {
        slug: "roll-up-stand-price-jeddah",
        title: "أسعار رول أب ستاند في جدة 2026: المقاسات والخامات والتكلفة",
        seoTitle: "أسعار رول أب ستاند في جدة 2026",
        excerpt:
            "دليل كامل لأسعار الرول أب في جدة حسب المقاس ونوع الهيكل وخامة البانر، مع شرح الفرق بين الفئات ومتى تستحق الترقية.",
        category: "أسعار",
        intent: "transactional",
        publishAt: "2026-07-21T11:18:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم المعارض والفعاليات",
        image: "/images/roll-up-stand-banner-85x200.webp",
        imageAlt: "رول أب ستاند بمقاس 85×200 سم جاهز للمعرض",
        readTime: "8 دقائق",
        primaryKeyword: "أسعار رول أب ستاند في جدة",
    },
    {
        slug: "offset-vs-digital-printing",
        title: "طباعة أوفست أم رقمية؟ الفرق الحقيقي ومتى تختار كلاً منهما",
        seoTitle: "الفرق بين الطباعة الأوفست والرقمية",
        excerpt:
            "مقارنة عملية بين الطباعة الأوفست والرقمية من حيث التكلفة والجودة والكمية والسرعة، مع نقطة التعادل التي تحدد الخيار الأوفر.",
        category: "مقارنات",
        intent: "informational",
        publishAt: "2026-07-24T16:52:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم الإنتاج",
        image: "/images/printing-machines-digital-offset-equipment.webp",
        imageAlt: "ماكينات الطباعة الرقمية والأوفست في ورشة بجدة",
        readTime: "9 دقائق",
        primaryKeyword: "الفرق بين الطباعة الأوفست والرقمية",
    },
    {
        slug: "exhibition-booth-cost-saudi",
        title: "كم تكلفة تجهيز جناح معرض في السعودية؟ حساب المتر المربع 2026",
        seoTitle: "تكلفة تجهيز جناح معرض في السعودية",
        excerpt:
            "دليل تكلفة أجنحة المعارض بالمتر المربع: الفرق بين الأوكتانورم والمخصص، ما يشمله السعر، والبنود المخفية التي تفاجئ الشركات.",
        category: "أسعار",
        intent: "transactional",
        publishAt: "2026-08-06T10:27:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم المعارض والفعاليات",
        image: "/images/custom-wooden-stand-jeddah-super-dome.webp",
        imageAlt: "جناح معرض خشبي مخصص في جدة سوبر دوم",
        readTime: "12 دقيقة",
        primaryKeyword: "تكلفة تجهيز جناح معرض في السعودية",
    },
    {
        slug: "vehicle-wrapping-price-jeddah",
        title: "أسعار تغليف السيارات في جدة 2026: الفينيل والتكلفة والعمر الافتراضي",
        seoTitle: "أسعار تغليف السيارات في جدة 2026",
        excerpt:
            "تكلفة تغليف السيارات في جدة حسب نوع الفينيل ومساحة التغطية، وكيف يؤثر مناخ جدة على العمر الافتراضي للتغليف.",
        category: "أسعار",
        intent: "transactional",
        publishAt: "2026-08-09T19:03:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم اللافتات والتغليف",
        image: "/images/commercial-vehicle-branding-car-wrapping-jeddah.webp",
        imageAlt: "سيارة تجارية مغلّفة بالفينيل في جدة",
        readTime: "10 دقائق",
        primaryKeyword: "أسعار تغليف السيارات في جدة",
    },
    {
        slug: "prepare-print-file-guide",
        title: "كيف تجهّز ملفك للطباعة بشكل صحيح؟ دليل خطوة بخطوة",
        seoTitle: "دليل تجهيز ملفات الطباعة الصحيح",
        excerpt:
            "الدليل العملي لتجهيز ملف طباعة خالٍ من الأخطاء: الدقة، الألوان، البليد، الخطوط، وصيغة التصدير النهائية.",
        category: "أدلة إرشادية",
        intent: "informational",
        publishAt: "2026-08-11T13:46:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم ما قبل الطباعة",
        image: "/images/printing-machines-digital-offset-equipment.webp",
        imageAlt: "تجهيز ملفات الطباعة في قسم ما قبل الطباعة بجدة",
        readTime: "10 دقائق",
        primaryKeyword: "كيف أجهز ملف الطباعة",
    },
    {
        slug: "coated-vs-linen-paper",
        title: "ورق كوشيه أم كتان؟ دليل اختيار خامة بطاقة العمل",
        seoTitle: "ورق كوشيه أم كتان لبطاقات العمل؟",
        excerpt:
            "مقارنة تفصيلية بين أنواع ورق بطاقات العمل: الكوشيه، الكتان، القطني، والكرافت — الملمس والتكلفة والقطاع المناسب لكل نوع.",
        category: "مقارنات",
        intent: "commercial",
        publishAt: "2026-08-14T08:12:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم المطبوعات التجارية",
        image: "/images/luxury-business-cards-printing-jeddah.webp",
        imageAlt: "أنواع مختلفة من ورق بطاقات العمل",
        readTime: "8 دقائق",
        primaryKeyword: "ورق كوشيه أم كتان لبطاقات العمل",
    },
    {
        slug: "paper-weight-size-guide",
        title: "دليل أوزان ومقاسات الورق الشامل: من A0 إلى بطاقة العمل",
        seoTitle: "دليل أوزان ومقاسات الورق الشامل",
        excerpt: "مرجع كامل لمقاسات الورق القياسية (A، B، DL) وأوزان الجرامات واستخداماتها، مع جداول تحويل عملية لكل نوع مطبوعة.",
        category: "مرجعي",
        intent: "reference",
        publishAt: "2026-08-16T15:27:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم ما قبل الطباعة",
        image: "/images/printing-machines-digital-offset-equipment.webp",
        imageAlt: "أنواع وأوزان الورق في مطبعة بجدة",
        readTime: "11 دقيقة",
        primaryKeyword: "مقاسات الورق وأوزانه",
    },
    {
        slug: "shop-signage-price-jeddah",
        title: "كم سعر لافتة محل في جدة؟ دليل التكلفة حسب الخامة والمقاس",
        seoTitle: "سعر لافتة محل في جدة 2026",
        excerpt: "أسعار لافتات المحلات في جدة حسب الخامة (أكريليك، ستانلس، نيون) والمقاس ونوع الإضاءة، مع البنود المخفية وتكلفة التشغيل السنوية.",
        category: "أسعار",
        intent: "transactional",
        publishAt: "2026-08-19T10:52:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم اللافتات والتركيب",
        image: "/images/3d-shop-signage-letters-acrylic-jeddah.webp",
        imageAlt: "لافتة محل بحروف أكريليك مضيئة في جدة",
        readTime: "10 دقائق",
        primaryKeyword: "سعر لافتة محل في جدة",
    },
    {
        slug: "octanorm-vs-custom-booth",
        title: "جناح أوكتانورم أم مخصص؟ دليل الاختيار بالأرقام",
        seoTitle: "أوكتانورم أم جناح مخصص؟ المقارنة",
        excerpt: "مقارنة عملية بين الأجنحة النظامية والمخصصة: التكلفة، مدة التنفيذ، الأثر البصري، وإعادة الاستخدام — مع نقطة التعادل التي تحدد الأوفر.",
        category: "مقارنات",
        intent: "commercial",
        publishAt: "2026-08-21T17:34:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم المعارض والفعاليات",
        image: "/images/octanorm-system-booth-shell-scheme.webp",
        imageAlt: "جناح أوكتانورم نظامي في معرض بجدة",
        readTime: "10 دقائق",
        primaryKeyword: "أوكتانورم أم جناح مخصص",
    },
    {
        slug: "choose-printing-company-jeddah",
        title: "كيف تختار مطبعة موثوقة في جدة؟ 12 معياراً عملياً",
        seoTitle: "كيف تختار مطبعة موثوقة في جدة؟",
        excerpt: "معايير اختيار المطبعة المناسبة في جدة: الأسئلة التي تكشف الجودة، العلامات التحذيرية، وكيف تقارن العروض بذكاء بدل السعر وحده.",
        category: "أدلة إرشادية",
        intent: "commercial",
        publishAt: "2026-08-24T12:18:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم خدمة العملاء",
        image: "/images/rawaj-gate-printing-workshop-team-at-work.webp",
        imageAlt: "ورشة طباعة في جدة أثناء العمل",
        readTime: "11 دقيقة",
        primaryKeyword: "كيف تختار مطبعة في جدة",
    },
    {
        slug: "saudi-exhibitions-calendar",
        title: "دليل المعارض التجارية في السعودية: كيف تخطّط لمشاركتك",
        seoTitle: "دليل المعارض التجارية في السعودية",
        excerpt: "خريطة قاعات المعارض في السعودية، الجدول الزمني الواقعي للتحضير، حساب الميزانية الكاملة، وقياس العائد من المشاركة.",
        category: "معارض",
        intent: "reference",
        publishAt: "2026-08-27T09:07:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم المعارض والفعاليات",
        image: "/images/exhibition-booth-fabrication-design-jeddah.webp",
        imageAlt: "جناح معرض تجاري في السعودية",
        readTime: "12 دقيقة",
        primaryKeyword: "المعارض التجارية في السعودية",
    },
    {
        slug: "promotional-gifts-guide",
        title: "دليل اختيار الهدايا الدعائية للشركات: ما ينجح وما يُرمى",
        seoTitle: "دليل الهدايا الدعائية للشركات",
        excerpt: "كيف تختار هدية دعائية تبقى مستخدمة بدل أن تُرمى: معايير الاختيار، الميزانيات، المناسبات، وأخطاء تهدر ميزانيتك.",
        category: "هدايا",
        intent: "commercial",
        publishAt: "2026-08-30T18:23:00+03:00",
        dateModified: "2026-07-26",
        author: "فريق بوابة الرواج",
        authorRole: "قسم الهدايا الدعائية",
        image: "/images/corporate-promotional-gifts-jeddah-items.webp",
        imageAlt: "مجموعة هدايا دعائية للشركات في جدة",
        readTime: "10 دقائق",
        primaryKeyword: "اختيار الهدايا الدعائية للشركات",
    },
];
/* ⬆️ AUTO-GENERATED — end */

/* ══════════════════════════════════════════════════════════
   منطق النشر المجدول — يعمل على الـ metadata وحدها (خفيف)
   ══════════════════════════════════════════════════════════ */

export function isPublished(meta: ArticleMeta, now: Date = new Date()): boolean {
    return new Date(meta.publishAt).getTime() <= now.getTime();
}

/** المقالات المنشورة، الأحدث أولاً */
export function getPublishedMeta(now: Date = new Date()): ArticleMeta[] {
    return ARTICLE_META.filter((m) => isPublished(m, now)).sort(
        (a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime()
    );
}

export function getMeta(slug: string): ArticleMeta | undefined {
    return ARTICLE_META.find((m) => m.slug === slug);
}

/** كل الـ slugs — للتوليد الساكن */
export function getAllSlugs(): string[] {
    return ARTICLE_META.map((m) => m.slug);
}

/** مقالات ذات صلة — يعمل على metadata فقط، بلا تحميل أي محتوى */
export function getRelatedMeta(
    slug: string,
    limit = 3,
    now: Date = new Date()
): ArticleMeta[] {
    const current = getMeta(slug);
    if (!current) return [];

    const published = getPublishedMeta(now).filter((m) => m.slug !== slug);
    const sameCategory = published.filter((m) => m.category === current.category);
    const sameIntent = published.filter(
        (m) => m.category !== current.category && m.intent === current.intent
    );

    return [...sameCategory, ...sameIntent, ...published]
        .filter((m, i, arr) => arr.findIndex((x) => x.slug === m.slug) === i)
        .slice(0, limit);
}

/** التصنيفات النشطة مع العدد */
export function getActiveCategories(now: Date = new Date()) {
    const counts = new Map<string, number>();
    for (const m of getPublishedMeta(now)) {
        counts.set(m.category, (counts.get(m.category) ?? 0) + 1);
    }
    return [...counts.entries()].map(([category, count]) => ({ category, count }));
}

export function getBlogStats(now: Date = new Date()) {
    const published = getPublishedMeta(now);
    return {
        published: published.length,
        upcoming: ARTICLE_META.length - published.length,
        total: ARTICLE_META.length,
        categories: getActiveCategories(now).length,
    };
}
