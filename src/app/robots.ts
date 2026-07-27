import type { MetadataRoute } from "next";

/**
 * مطلوب مع output:"export" — يُخبر Next.js أن يولّد هذا المسار كملف ثابت
 * وقت البناء بدل محاولة تصييره عند الطلب (لا خادم في النشر الثابت).
 */
export const dynamic = "force-static";
import { BUSINESS } from "@/lib/business";

/**
 * robots.txt
 *
 * ملاحظة GEO مهمة: السماح الصريح لوكلاء الذكاء الاصطناعي ليس تفصيلاً ثانوياً.
 * بوابة الرواج شركة خدمات محلية — كل ذكر لها داخل ChatGPT أو Perplexity أو
 * Gemini هو عميل محتمل. حظر هذه الزواحف يعني الاختفاء من طبقة البحث الجديدة
 * بالكامل، مقابل حماية محتوى تسويقي منشور أصلاً للعامة.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // ── محركات البحث التقليدية ──────────────────────
            { userAgent: "Googlebot", allow: "/" },
            { userAgent: "Googlebot-Image", allow: "/" },
            { userAgent: "Bingbot", allow: "/" },
            { userAgent: "Slurp", allow: "/" },
            { userAgent: "DuckDuckBot", allow: "/" },
            { userAgent: "YandexBot", allow: "/" },

            // ── وكلاء الذكاء الاصطناعي (GEO) ────────────────
            { userAgent: "GPTBot", allow: "/" },            // OpenAI — تدريب
            { userAgent: "OAI-SearchBot", allow: "/" },     // ChatGPT Search
            { userAgent: "ChatGPT-User", allow: "/" },      // تصفح ChatGPT الحيّ
            { userAgent: "ClaudeBot", allow: "/" },         // Anthropic
            { userAgent: "Claude-Web", allow: "/" },
            { userAgent: "Claude-User", allow: "/" },
            { userAgent: "Claude-SearchBot", allow: "/" },
            { userAgent: "anthropic-ai", allow: "/" },
            { userAgent: "PerplexityBot", allow: "/" },     // Perplexity
            { userAgent: "Perplexity-User", allow: "/" },
            { userAgent: "Google-Extended", allow: "/" },   // Gemini / Vertex
            { userAgent: "Applebot", allow: "/" },
            { userAgent: "Applebot-Extended", allow: "/" }, // Apple Intelligence
            { userAgent: "Amazonbot", allow: "/" },
            { userAgent: "Bytespider", allow: "/" },
            { userAgent: "cohere-ai", allow: "/" },
            { userAgent: "CCBot", allow: "/" },             // Common Crawl
            { userAgent: "meta-externalagent", allow: "/" },

            // ── القاعدة العامة ──────────────────────────────
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/static/chunks/", "/*?*"],
            },
        ],
        sitemap: `${BUSINESS.url}/sitemap.xml`,
        host: BUSINESS.url,
    };
}
