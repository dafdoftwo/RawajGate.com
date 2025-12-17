import { Metadata } from "next";

interface SEOProps {
    title: string;
    description: string;
    path?: string;
    image?: string;
    noIndex?: boolean;
}

const BASE_URL = "https://rawajgate.com";
const SITE_NAME = "بوابة الرواج";
const DEFAULT_IMAGE = "/images/rawaj-gate-printing-workshop-team-at-work.webp";

export function generateMetadata({
    title,
    description,
    path = "",
    image = DEFAULT_IMAGE,
    noIndex = false,
}: SEOProps): Metadata {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${BASE_URL}${path}`;
    const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

    return {
        title: fullTitle,
        description,
        keywords: [
            "طباعة جدة",
            "مطبعة جدة",
            "أجنحة معارض",
            "هدايا دعائية",
            "لافتات محلات",
            "تغليف سيارات",
            "بطاقات عمل",
            "طباعة تجارية",
            "Jeddah printing",
            "exhibition booth",
            "corporate gifts",
        ],
        authors: [{ name: "Rawaj Gate", url: BASE_URL }],
        creator: "Rawaj Gate",
        publisher: "Rawaj Gate",
        formatDetection: {
            telephone: true,
            address: true,
            email: true,
        },
        metadataBase: new URL(BASE_URL),
        alternates: {
            canonical: url,
            languages: {
                "ar-SA": url,
            },
        },
        openGraph: {
            title: fullTitle,
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
            title: fullTitle,
            description,
            images: [imageUrl],
            creator: "@rawajgate",
        },
        robots: noIndex
            ? { index: false, follow: false }
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
        verification: {
            // Add your verification codes here
            // google: "your-google-verification-code",
        },
    };
}

// Pre-configured metadata for main sections
export const sectionMetadata = {
    home: generateMetadata({
        title: "شريكك الاستراتيجي في الطباعة وتجهيز المعارض بجدة",
        description:
            "بوابة الرواج - خدمات طباعة احترافية، تجهيز معارض، لافتات، وهدايا دعائية في جدة. تسليم خلال 24 ساعة. اطلب عرض سعر الآن!",
        path: "",
    }),
    commercialPrinting: generateMetadata({
        title: "مطبوعات تجارية احترافية",
        description:
            "طباعة بطاقات عمل، فلايرات، بروشورات، ملفات عروض، ورق رسمي، وقوائم طعام بجودة عالية في جدة. تسليم سريع وأسعار منافسة.",
        path: "/commercial-printing",
        image: "/images/luxury-business-cards-printing-jeddah.webp",
    }),
    signageStickers: generateMetadata({
        title: "لوحات وملصقات إعلانية",
        description:
            "تصميم وتنفيذ لافتات المحلات 3D، تغليف السيارات، ملصقات المنتجات، وبانرات خارجية في جدة. جودة عالية وتركيب احترافي.",
        path: "/signage-stickers",
        image: "/images/3d-shop-signage-letters-acrylic-jeddah.webp",
    }),
    exhibitionsEvents: generateMetadata({
        title: "معارض وفعاليات",
        description:
            "تجهيز أجنحة معارض، رول أب، بوب أب، كاونترات ترويجية، وخلفيات مسرح احترافية في جدة والمملكة. خبرة 15+ سنة.",
        path: "/exhibitions-events",
        image: "/images/exhibition-booth-fabrication-design-jeddah.webp",
    }),
    promotionalGifts: generateMetadata({
        title: "هدايا دعائية للشركات",
        description:
            "أقلام، دفاتر، أجندات، هدايا تقنية، أكياس، وملابس مطبوعة بشعار شركتك في جدة. كميات بالجملة وأسعار خاصة للشركات.",
        path: "/promotional-gifts",
        image: "/images/corporate-promotional-gifts-jeddah-items.webp",
    }),
    designServices: generateMetadata({
        title: "خدمات التصميم الجرافيكي",
        description:
            "تصميم هوية بصرية، شعارات، وتجهيز ملفات الطباعة بأيدي مصممين محترفين في جدة. استشارات تصميم مجانية.",
        path: "/design-services",
        image: "/images/client-meeting-office-al-rawaj-jeddah.webp",
    }),
};
