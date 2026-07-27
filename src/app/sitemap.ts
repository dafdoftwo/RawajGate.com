import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";
import { SILOS, STANDALONE_ROUTES } from "@/lib/routes";
import { getPublishedMeta } from "@/lib/articles/meta";
import { PRICING_BLOCKS } from "@/lib/pricing";

const BASE = BUSINESS.url;

/**
 * ⏰ إعادة التحقق كل ساعة — ضرورية للنشر المجدول.
 *
 * بدونها يُولَّد sitemap.xml مرة واحدة وقت البناء ويتجمّد. النتيجة: مقال
 * يُنشر في موعده ويظهر في /blog، لكن Google لا يعرف بوجوده لأن الـ sitemap
 * ما زال يعرض القائمة القديمة — حتى إعادة البناء التالية.
 *
 * مع revalidate يُعاد توليده كل ساعة، فيلتقط كل مقال حان موعده.
 */
export const revalidate = 3600;

/**
 * خريطة الموقع الديناميكية.
 * تُولَّد من src/lib/routes.ts و src/lib/blog-data.ts — أي صفحة جديدة تُضاف
 * هناك تدخل الـ sitemap تلقائياً بدون تعديل هذا الملف.
 *
 * تُقدَّم على https://rawajgate.com/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // الصفحة الرئيسية
    const home: MetadataRoute.Sitemap = [
        {
            url: BASE,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1.0,
        },
    ];

    // صفحات الأقسام (Pillar) — أولوية عالية
    const pillars: MetadataRoute.Sitemap = SILOS.map((silo) => ({
        url: `${BASE}/${silo.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    // صفحات الخدمات (Spokes) — صفحات المال
    const spokes: MetadataRoute.Sitemap = SILOS.flatMap((silo) =>
        silo.spokes.map((spoke) => ({
            url: `${BASE}/${silo.slug}/${spoke.slug}`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        }))
    );

    // الصفحات المستقلة
    const standalone: MetadataRoute.Sitemap = STANDALONE_ROUTES.map((route) => ({
        url: `${BASE}/${route.slug}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    /*
      مقالات المدونة — **المنشورة فقط**.
      المقال المجدول للمستقبل لا يدخل الـ sitemap قبل موعده، وإلا أرسلنا
      Google إلى صفحة تُرجع 404.
    */
    const blogPosts: MetadataRoute.Sitemap = getPublishedMeta().map((post) => ({
        url: `${BASE}/blog/${post.slug}`,
        lastModified: new Date(post.dateModified),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    // صفحات الأسعار الفرعية — نية بحث تجارية عالية
    const pricePages: MetadataRoute.Sitemap = PRICING_BLOCKS.map((block) => ({
        url: `${BASE}/prices/${block.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.85,
    }));

    return [
        ...home,
        ...pillars,
        ...spokes,
        ...standalone,
        ...pricePages,
        ...blogPosts,
    ];
}
