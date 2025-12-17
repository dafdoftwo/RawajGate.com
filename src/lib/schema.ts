// JSON-LD Schema generators for Rawaj Gate SEO

export interface LocalBusinessSchema {
    name: string;
    description: string;
    image: string;
    telephone: string;
    address: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo: {
        latitude: number;
        longitude: number;
    };
    openingHours: string[];
    priceRange: string;
    url: string;
}

export function generateLocalBusinessSchema(data: Partial<LocalBusinessSchema> = {}) {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://rawajgate.com/#organization",
        name: data.name || "بوابة الرواج - Rawaj Gate",
        description: data.description || "شريكك الاستراتيجي في الطباعة التجارية وتجهيز المعارض في جدة - خدمات طباعة احترافية، أجنحة معارض، لافتات، وهدايا دعائية",
        image: data.image || "https://rawajgate.com/images/rawaj-gate-printing-workshop-team-at-work.webp",
        telephone: data.telephone || "+966-54-892-3300",
        address: {
            "@type": "PostalAddress",
            streetAddress: data.address?.streetAddress || "شارع التحلية",
            addressLocality: data.address?.addressLocality || "جدة",
            addressRegion: data.address?.addressRegion || "منطقة مكة المكرمة",
            postalCode: data.address?.postalCode || "21432",
            addressCountry: data.address?.addressCountry || "SA",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: data.geo?.latitude || 21.5234,
            longitude: data.geo?.longitude || 39.1876,
        },
        openingHours: data.openingHours || [
            "Sa-Th 09:00-21:00",
        ],
        priceRange: data.priceRange || "$$",
        url: data.url || "https://rawajgate.com",
        sameAs: [
            "https://www.instagram.com/rawajgate",
            "https://twitter.com/rawajgate",
        ],
        areaServed: {
            "@type": "City",
            name: "Jeddah",
            "@id": "https://www.wikidata.org/wiki/Q5765",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "خدمات بوابة الرواج",
            itemListElement: [
                {
                    "@type": "OfferCatalog",
                    name: "مطبوعات تجارية",
                    itemListElement: [
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "بطاقات العمل" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "فلايرات وبروشورات" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ملفات العروض" } },
                    ],
                },
                {
                    "@type": "OfferCatalog",
                    name: "لوحات وملصقات",
                    itemListElement: [
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "لافتات المحلات 3D" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "تغليف السيارات" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ملصقات المنتجات" } },
                    ],
                },
                {
                    "@type": "OfferCatalog",
                    name: "معارض وفعاليات",
                    itemListElement: [
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "أجنحة معارض مخصصة" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "رول أب وبوب أب" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "كاونترات ترويجية" } },
                    ],
                },
            ],
        },
    };
}

export function generateServiceSchema(service: {
    name: string;
    nameAr: string;
    description: string;
    url: string;
    image?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        alternateName: service.nameAr,
        description: service.description,
        url: service.url,
        image: service.image,
        provider: {
            "@type": "LocalBusiness",
            "@id": "https://rawajgate.com/#organization",
            name: "بوابة الرواج - Rawaj Gate",
        },
        areaServed: {
            "@type": "City",
            name: "Jeddah",
        },
        serviceType: service.name,
    };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
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

// Default FAQs for the website
export const DEFAULT_FAQS = [
    {
        question: "ما هي مدة التسليم لخدمات الطباعة في جدة؟",
        answer: "نقدم خدمة التسليم خلال 24 ساعة داخل جدة للطلبات العاجلة. للطلبات العادية، يتم التسليم خلال 3-5 أيام عمل حسب حجم الطلب ونوع الخدمة.",
    },
    {
        question: "هل تقدمون خدمات التصميم قبل الطباعة؟",
        answer: "نعم، لدينا فريق تصميم محترف يقدم خدمات تصميم الهوية البصرية والشعارات وجميع المطبوعات. نقدم أيضاً استشارات تصميم مجانية للمشاريع الكبيرة.",
    },
    {
        question: "ما هي أنواع المطبوعات التي تقدمونها؟",
        answer: "نقدم جميع أنواع المطبوعات التجارية: بطاقات العمل، الفلايرات، البروشورات، ملفات العروض، المطبوعات الرسمية، قوائم الطعام، دفاتر الفواتير، وغيرها الكثير.",
    },
    {
        question: "هل توفرون خدمات تجهيز المعارض خارج جدة؟",
        answer: "نعم، نقدم خدمات تجهيز المعارض والفعاليات في جميع أنحاء المملكة العربية السعودية، مع فريق متخصص للتركيب والإشراف في الموقع.",
    },
];

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
