import { Metadata } from "next";
import { BUSINESS } from "./business";

interface SEOProps {
    /**
     * عنوان الصفحة **بدون** اسم البراند.
     * قالب الـ layout يضيف "| بوابة الرواج" تلقائياً.
     * الطول المستهدف: ≤ 45 حرفاً ليبقى العنوان الكامل تحت حد الاقتطاع (~60 حرفاً).
     */
    title: string;
    description: string;
    /** المسار بدءاً من / — يُستخدم للـ canonical والـ OG url */
    path?: string;
    image?: string;
    /** كلمات مفتاحية خاصة بالصفحة (Bing يستخدمها، Google يتجاهلها) */
    keywords?: string[];
    noIndex?: boolean;
}

const BASE_URL = BUSINESS.url;
const SITE_NAME = BUSINESS.nameAr;
const DEFAULT_IMAGE = BUSINESS.ogImage;

export function generateMetadata({
    title,
    description,
    path = "",
    image = DEFAULT_IMAGE,
    keywords,
    noIndex = false,
}: SEOProps): Metadata {
    const url = `${BASE_URL}${path}`;
    const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

    return {
        // ✅ نص فقط — قالب الـ layout يضيف البراند مرة واحدة.
        //    (سابقاً كان البراند يُضاف هنا وفي القالب = تكرار مزدوج)
        title,
        description,
        ...(keywords && keywords.length > 0 && { keywords }),
        metadataBase: new URL(BASE_URL),

        // ✅ canonical صريح لكل صفحة — يمنع وراثة canonical الـ layout
        alternates: {
            canonical: url,
        },

        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: "ar_SA",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
        robots: noIndex
            ? { index: false, follow: true }
            : {
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
    };
}

/**
 * Metadata جاهزة لصفحات الأقسام (Pillar).
 * العناوين قصيرة ومركّزة على الكلمة المفتاحية + المدينة.
 */
export const sectionMetadata = {
    commercialPrinting: generateMetadata({
        title: "مطبوعات تجارية في جدة",
        description:
            "طباعة بطاقات عمل، فلايرات، بروشورات، ملفات عروض، ورق رسمي، دفاتر NCR، وقوائم طعام في جدة. جودة عالية، تسليم سريع، وأسعار منافسة.",
        path: "/commercial-printing",
        image: "/images/luxury-business-cards-printing-jeddah.webp",
        keywords: [
            "مطبوعات تجارية جدة",
            "مطبعة جدة",
            "طباعة بطاقات عمل",
            "طباعة بروشورات جدة",
        ],
    }),
    signageStickers: generateMetadata({
        title: "لافتات وملصقات إعلانية في جدة",
        description:
            "تصميم وتنفيذ لافتات المحلات 3D، تغليف السيارات، ملصقات المنتجات، وبانرات خارجية في جدة. خامات مقاومة لمناخ جدة وتركيب احترافي.",
        path: "/signage-stickers",
        image: "/images/3d-shop-signage-letters-acrylic-jeddah.webp",
        keywords: [
            "لافتات محلات جدة",
            "لوحات إعلانية جدة",
            "تغليف سيارات جدة",
            "ستيكرات جدة",
        ],
    }),
    exhibitionsEvents: generateMetadata({
        title: "تجهيز معارض وفعاليات في جدة",
        description:
            "تجهيز أجنحة معارض مخصصة، أوكتانورم، رول أب، بوب أب، وكاونترات ترويجية في جدة والمملكة. تصميم 3D مجاني وتركيب وإشراف في الموقع.",
        path: "/exhibitions-events",
        image: "/images/exhibition-booth-fabrication-design-jeddah.webp",
        keywords: [
            "تجهيز معارض جدة",
            "أجنحة معارض",
            "ستاندات معارض جدة",
            "رول اب جدة",
        ],
    }),
    promotionalGifts: generateMetadata({
        title: "هدايا دعائية للشركات في جدة",
        description:
            "أقلام، دفاتر، أجندات، هدايا تقنية، أكياس، وملابس مطبوعة بشعار شركتك في جدة. كميات بالجملة وأسعار خاصة للشركات.",
        path: "/promotional-gifts",
        image: "/images/corporate-promotional-gifts-jeddah-items.webp",
        keywords: [
            "هدايا دعائية جدة",
            "هدايا شركات",
            "أقلام دعائية",
            "هدايا ترويجية جدة",
        ],
    }),
    designServices: generateMetadata({
        title: "خدمات تصميم جرافيكي في جدة",
        description:
            "تصميم هوية بصرية، شعارات، وتجهيز ملفات الطباعة بأيدي مصممين محترفين في جدة. استشارة تصميم مجانية مع كل مشروع.",
        path: "/design-services",
        image: "/images/client-meeting-office-al-rawaj-jeddah.webp",
        keywords: [
            "تصميم جرافيك جدة",
            "تصميم شعار جدة",
            "هوية بصرية جدة",
            "مصمم جرافيك جدة",
        ],
    }),
};
