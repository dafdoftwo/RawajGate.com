/**
 * مولّدات JSON-LD Schema لموقع بوابة الرواج
 * ==========================================
 * معمارية الكيانات:
 *
 *   Organization (#organization)        ← الكيان الجذر
 *        ├── WebSite (#website)         ← publisher → Organization
 *        └── LocalBusiness (#localbusiness) ← parentOrganization → Organization
 *                 └── Service (لكل صفحة خدمة) ← provider → LocalBusiness
 *
 * الثلاثة الأولى تُحقن مرة واحدة في الـ layout داخل @graph.
 * الباقي يُحقن في صفحته فقط.
 */

import { BUSINESS, SAME_AS } from "./business";

const BASE = BUSINESS.url;
export const ORG_ID = `${BASE}/#organization`;
export const SITE_ID = `${BASE}/#website`;
export const LOCAL_ID = `${BASE}/#localbusiness`;
const LOGO_ID = `${BASE}/#logo`;
const LOGO_URL = `${BASE}${BUSINESS.logo}`;

/** عنوان بريدي مُعاد استخدامه في كل الكيانات — يضمن اتساق NAP */
const postalAddress = {
    "@type": "PostalAddress",
    streetAddress: `${BUSINESS.address.street}، ${BUSINESS.address.district}`,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
} as const;

/* ══════════════════════════════════════════════════════════
   1) Organization — الكيان الجذر
   ══════════════════════════════════════════════════════════ */
export function generateOrganizationSchema() {
    return {
        "@type": "Organization",
        "@id": ORG_ID,
        name: BUSINESS.nameAr,
        alternateName: [BUSINESS.nameEn, BUSINESS.legalName],
        legalName: BUSINESS.legalName,
        url: BASE,
        logo: {
            "@type": "ImageObject",
            "@id": LOGO_ID,
            url: LOGO_URL,
            caption: BUSINESS.nameAr,
        },
        image: { "@id": LOGO_ID },
        description:
            "شركة متخصصة في الطباعة التجارية وتجهيز أجنحة المعارض ولافتات المحلات والهدايا الدعائية وخدمات التصميم الجرافيكي في جدة، المملكة العربية السعودية.",
        foundingDate: BUSINESS.foundingDate,
        email: BUSINESS.email,
        telephone: BUSINESS.phone.e164,
        address: postalAddress,
        // يُحذف الحقل تلقائياً إذا لم تكن هناك حسابات مؤكدة
        ...(SAME_AS.length > 0 && { sameAs: SAME_AS }),
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: BUSINESS.phone.e164,
                contactType: "customer service",
                areaServed: "SA",
                availableLanguage: ["Arabic", "English"],
            },
        ],
    };
}

/* ══════════════════════════════════════════════════════════
   2) WebSite
   ══════════════════════════════════════════════════════════ */
export function generateWebSiteSchema() {
    return {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: BASE,
        name: BUSINESS.nameAr,
        alternateName: BUSINESS.nameEn,
        inLanguage: "ar-SA",
        publisher: { "@id": ORG_ID },
        // ملاحظة: potentialAction/SearchAction يُضاف فقط بعد إنشاء صفحة /search فعلية.
        // إعلانه بدون صفحة بحث حقيقية يُعتبر بيانات مضللة.
    };
}

/* ══════════════════════════════════════════════════════════
   3) LocalBusiness — الفرع الفعلي في جدة
   ══════════════════════════════════════════════════════════ */
export function generateLocalBusinessSchema() {
    return {
        "@type": ["LocalBusiness", "PrintingService"],
        "@id": LOCAL_ID,
        parentOrganization: { "@id": ORG_ID },
        name: BUSINESS.fullNameAr,
        description:
            "مطبعة وشركة دعاية وإعلان في جدة: طباعة تجارية، تجهيز أجنحة معارض، لافتات محلات 3D، هدايا دعائية، وتصميم هوية بصرية. خبرة منذ 2009.",
        image: LOGO_URL,
        logo: { "@id": LOGO_ID },
        url: BASE,
        telephone: BUSINESS.phone.e164,
        email: BUSINESS.email,

        /*
          ⚠️ إشارات الثقة على عقدة LocalBusiness تحديداً.

          كانت foundingDate والاسم النظامي على عقدة Organization وحدها.
          والعقدتان تخدمان قارئين مختلفين: Organization تصف الكيان
          الاعتباري، وLocalBusiness تصف المحل الذي تزوره — وهي التي
          تقرؤها الخرائط والوكلاء حين يسأل أحدهم «مطبعة موثوقة في جدة».

          «تعمل منذ ٢٠٠٩» هي أقوى إشارة تمييز متاحة لنشاط محلي في سوق
          مزدحم، وكانت غائبة عن العقدة التي تُقرأ فعلاً في هذا السياق.
        */
        legalName: BUSINESS.legalName,
        foundingDate: BUSINESS.foundingDate,
        ...(SAME_AS.length > 0 && { sameAs: SAME_AS }),

        /*
          السجل التجاري والرقم الضريبي — إشارة تحقّق قوية في السوق
          السعودي. تُدرَج فقط عند تعبئتها في business.ts؛ حقل فارغ في
          schema أسوأ من غيابه لأنه يُقرأ كبيانات ناقصة.
        */
        ...(BUSINESS.crNumber
            ? {
                  identifier: [
                      {
                          "@type": "PropertyValue",
                          name: "السجل التجاري",
                          value: BUSINESS.crNumber,
                      },
                  ],
              }
            : {}),
        ...(BUSINESS.vatNumber ? { vatID: BUSINESS.vatNumber } : {}),
        priceRange: "SAR 150 - SAR 50000",
        currenciesAccepted: "SAR",
        paymentAccepted: "نقداً، تحويل بنكي، مدى، فيزا، ماستركارد",
        address: postalAddress,
        geo: {
            "@type": "GeoCoordinates",
            latitude: BUSINESS.geo.lat,
            longitude: BUSINESS.geo.lng,
        },
        ...(BUSINESS.social.googleBusiness && {
            hasMap: BUSINESS.social.googleBusiness,
        }),
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [...BUSINESS.hours.daysSchema],
                opens: BUSINESS.hours.opens,
                closes: BUSINESS.hours.closes,
            },
        ],
        // نطاق الخدمة الجغرافي — عامل ترتيب مباشر في Local Pack
        areaServed: [
            { "@type": "City", name: "جدة", "@id": "https://www.wikidata.org/wiki/Q5765" },
            { "@type": "City", name: "مكة المكرمة", "@id": "https://www.wikidata.org/wiki/Q5806" },
            { "@type": "City", name: "الطائف", "@id": "https://www.wikidata.org/wiki/Q184183" },
            { "@type": "City", name: "رابغ" },
            {
                "@type": "Country",
                name: "المملكة العربية السعودية",
                "@id": "https://www.wikidata.org/wiki/Q851",
            },
        ],
        serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: BUSINESS.geo.lat,
                longitude: BUSINESS.geo.lng,
            },
            geoRadius: "80000",
        },
        // إشارة دلالية قوية: ما الذي تعرفه هذه الجهة؟
        knowsAbout: [
            "الطباعة التجارية",
            "الطباعة الرقمية",
            "طباعة الأوفست",
            "تجهيز المعارض",
            "أجنحة الأوكتانورم",
            "لافتات المحلات",
            "الحروف البارزة المضيئة",
            "تغليف السيارات",
            "الهدايا الدعائية",
            "تصميم الهوية البصرية",
            "خدمات ما قبل الطباعة",
        ],
        ...(SAME_AS.length > 0 && { sameAs: SAME_AS }),
        // ⚠️ لا تُضِف aggregateRating هنا إلا بتقييمات حقيقية معروضة على الصفحة
        //    ومطابقة تماماً للأرقام. تقييمات مُختلقة = إجراء يدوي من Google.
    };
}

/* ══════════════════════════════════════════════════════════
   4) الـ Graph الموحّد — يُحقن في الـ layout مرة واحدة
   ══════════════════════════════════════════════════════════ */
export function generateSiteGraph() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            generateOrganizationSchema(),
            generateWebSiteSchema(),
            generateLocalBusinessSchema(),
        ],
    };
}

/* ══════════════════════════════════════════════════════════
   5) Service — لكل صفحة خدمة
   ══════════════════════════════════════════════════════════ */
export function generateServiceSchema(service: {
    name: string;
    nameAr: string;
    description: string;
    url: string;
    image?: string;
    /** السعر الأدنى بالريال — يُفعِّل Offer في الـ schema */
    priceFrom?: number;
    priceTo?: number;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${service.url}#service`,
        name: service.nameAr,
        alternateName: service.name,
        description: service.description,
        url: service.url,
        ...(service.image && {
            image: service.image.startsWith("http")
                ? service.image
                : `${BASE}${service.image}`,
        }),
        provider: { "@id": LOCAL_ID },
        areaServed: {
            "@type": "City",
            name: "جدة",
            "@id": "https://www.wikidata.org/wiki/Q5765",
        },
        serviceType: service.nameAr,
        inLanguage: "ar-SA",
        ...(service.priceFrom && {
            offers: {
                "@type": "Offer",
                priceCurrency: "SAR",
                priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "SAR",
                    minPrice: service.priceFrom,
                    ...(service.priceTo && { maxPrice: service.priceTo }),
                },
                availability: "https://schema.org/InStock",
                seller: { "@id": LOCAL_ID },
            },
        }),
    };
}

/* ══════════════════════════════════════════════════════════
   6) FAQPage — لكل صفحة على حدة فقط
   ⚠️ لا تحقنه في الـ layout: التكرار على نفس الـ URL يُبطل الـ rich result،
      وشرط Google أن تكون الأسئلة **مرئية** على نفس الصفحة.
   ══════════════════════════════════════════════════════════ */
export function generateFAQSchema(
    faqs: Array<{ question: string; answer: string }>,
    pageUrl?: string
) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        ...(pageUrl && { "@id": `${pageUrl}#faq` }),
        inLanguage: "ar-SA",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

/* ══════════════════════════════════════════════════════════
   7) BreadcrumbList
   ══════════════════════════════════════════════════════════ */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

/* ══════════════════════════════════════════════════════════
   8) BlogPosting — للمدونة (أدق من Article للمحتوى التدويني)
   ══════════════════════════════════════════════════════════ */
export function generateBlogPostingSchema(post: {
    title: string;
    excerpt: string;
    image: string;
    slug: string;
    datePublished: string;
    dateModified?: string;
    category: string;
    authorName: string;
    authorRole?: string;
    wordCount?: number;
}) {
    const url = `${BASE}/blog/${post.slug}`;
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        // Google يقتطع headline بعد 110 حرفاً
        headline: post.title.slice(0, 110),
        description: post.excerpt,
        image: {
            "@type": "ImageObject",
            url: `${BASE}${post.image}`,
            width: 1200,
            height: 630,
        },
        datePublished: post.datePublished,
        dateModified: post.dateModified ?? post.datePublished,
        // شخص حقيقي — إشارة E-E-A-T أقوى بكثير من Organization
        author: {
            "@type": "Person",
            name: post.authorName,
            ...(post.authorRole && { jobTitle: post.authorRole }),
            worksFor: { "@id": ORG_ID },
        },
        publisher: { "@id": ORG_ID },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        articleSection: post.category,
        inLanguage: "ar-SA",
        ...(post.wordCount && { wordCount: post.wordCount }),
        isPartOf: { "@id": SITE_ID },

        /*
          🔊 speakable — الفقرة التي تُقرأ صوتياً.

          هذه هي الطريقة الوحيدة المعيارية لإخبار مساعد جوجل وغيره من
          واجهات القراءة الصوتية **أي جزء** من الصفحة يصلح للنطق. بدونها
          يقرأ المساعد ما يختاره هو — غالباً أول نص يجده، وقد يكون فتات
          التنقّل أو عنوان القسم.

          نُشير إلى العنوان والإجابة المباشرة تحديداً: العنوان يُعرّف
          الموضوع، والإجابة المباشرة مكتوبة أصلاً لتكون جواباً مكتفياً
          بذاته في ثلاثة أسطر — وهو بالضبط شكل الإجابة الصوتية الجيدة.

          ⚠️ المحدِّد [data-speakable="answer"] سمة دلالية لا صنف Tailwind.
          الربط بصنف لوني ينكسر صامتاً عند أول تغيير في التصميم.
        */
        speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", '[data-speakable="answer"]'],
        },
    };
}

/* ══════════════════════════════════════════════════════════
   9) ItemList — لصفحات الأقسام (Pillar) وقوائم الأعمال
   ══════════════════════════════════════════════════════════ */
export function generateItemListSchema(
    items: Array<{ name: string; url: string; description?: string; image?: string }>,
    listName: string
) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: listName,
        numberOfItems: items.length,
        inLanguage: "ar-SA",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            url: item.url.startsWith("http") ? item.url : `${BASE}${item.url}`,
            ...(item.description && { description: item.description }),
            ...(item.image && { image: `${BASE}${item.image}` }),
        })),
    };
}

/* ══════════════════════════════════════════════════════════
   10) VideoObject
   ══════════════════════════════════════════════════════════ */
export function generateVideoSchema(video: {
    name: string;
    description: string;
    thumbnailUrl: string;
    contentUrl: string;
    uploadDate: string;
    /** بصيغة ISO 8601، مثال: PT30S */
    duration?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: video.name,
        description: video.description,
        thumbnailUrl: [`${BASE}${video.thumbnailUrl}`],
        contentUrl: `${BASE}${video.contentUrl}`,
        uploadDate: video.uploadDate,
        ...(video.duration && { duration: video.duration }),
        publisher: { "@id": ORG_ID },
        inLanguage: "ar-SA",
    };
}

/* ══════════════════════════════════════════════════════════
   11) HowTo — للأدلة الإرشادية في المدونة
   ══════════════════════════════════════════════════════════ */
export function generateHowToSchema(howTo: {
    name: string;
    description: string;
    image?: string;
    /** ISO 8601، مثال: PT30M */
    totalTime?: string;
    steps: Array<{ name: string; text: string; image?: string }>;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: howTo.name,
        description: howTo.description,
        ...(howTo.image && { image: `${BASE}${howTo.image}` }),
        ...(howTo.totalTime && { totalTime: howTo.totalTime }),
        inLanguage: "ar-SA",
        step: howTo.steps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.name,
            text: step.text,
            ...(step.image && { image: `${BASE}${step.image}` }),
        })),
    };
}
