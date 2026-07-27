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
        /*
          ⚠️ لا تستخدم BUSINESS.logo هنا.

          BUSINESS.logo يشير إلى logo-rg.png الأصلي (٣٣٣ KB) — وهو مقصود
          لبيانات JSON-LD حيث يريد جوجل رابط الشعار الحقيقي بأعلى جودة،
          ولا يُنزّله متصفح الزائر إطلاقاً.

          لكن الـ manifest **يُنزّله المتصفح فعلاً**. حين كان يشير إلى الملف
          الأصلي كان اللوجو أثقل مورد في الصفحة كلها — ٣٣٣ KB لأيقونة
          تُعرض بحجم ٦٤px. رصدته Lighthouse كأكبر ملف على الجوال.

          النسخ أدناه مولَّدة بـ sharp (palette + ضغط أقصى) وتُغطي المقاسين
          اللذين تطلبهما مواصفة PWA.
        */
        icons: [
            {
                src: "/images/logo-rg-192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/images/logo-rg-512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
            },
        ],
    };
}
