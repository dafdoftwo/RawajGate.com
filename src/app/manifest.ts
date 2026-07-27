import type { MetadataRoute } from "next";

/**
 * مطلوب مع output:"export" — يُخبر Next.js أن يولّد هذا المسار كملف ثابت
 * وقت البناء بدل محاولة تصييره عند الطلب (لا خادم في النشر الثابت).
 */
export const dynamic = "force-static";
import { BUSINESS } from "@/lib/business";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "بوابة الرواج - الطباعة وتجهيز المعارض في جدة",
        short_name: BUSINESS.nameAr,
        description:
            "خدمات طباعة تجارية، تجهيز أجنحة معارض، لافتات محلات، وهدايا دعائية في جدة.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#1a365d",
        lang: "ar",
        dir: "rtl",
        orientation: "portrait-primary",
        categories: ["business", "shopping", "productivity"],
        icons: [
            {
                src: BUSINESS.logo,
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
            },
        ],
    };
}
