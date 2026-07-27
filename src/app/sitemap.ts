import type { MetadataRoute } from "next";

/**
 * مطلوب مع output:"export" — يُخبر Next.js أن يولّد هذا المسار كملف ثابت
 * وقت البناء بدل محاولة تصييره عند الطلب (لا خادم في النشر الثابت).
 */
export const dynamic = "force-static";
import { BUSINESS } from "@/lib/business";
import { SILOS, STANDALONE_ROUTES } from "@/lib/routes";
import { getPublishedMeta } from "@/lib/articles/meta";
import { extraPageParams } from "@/lib/articles/pagination";
import { ALL_CATEGORY_SLUGS, SLUG_TO_CATEGORY } from "@/lib/articles/categories";
import { PRICING_BLOCKS } from "@/lib/pricing";

const BASE = BUSINESS.url;

/**
 * يبني رابطاً بشرطة مائلة في نهايته — **إلزامي**.
 *
 * ⚠️ السبب (خلل حقيقي رُصد على الإنتاج):
 * `next.config.ts` يضبط `trailingSlash: true`، فالمسار الحقيقي هو
 * `/commercial-printing/` بشرطة. الـ sitemap كان يبني `${BASE}/${slug}`
 * بلا شرطة، فكانت **٤٥ من ٤٦ رابطاً تُرجع 308 redirect**.
 *
 * الأثر: جوجل يُبلّغ عن «Sitemap contains URLs that redirect»، ويُهدر
 * ميزانية الزحف على قفزة لكل صفحة، والأسوأ أن رابط الـ sitemap يخالف
 * وسم canonical في الصفحة نفسها (الذي يحمل الشرطة) — إشارتان متناقضتان.
 *
 * كل رابط هنا يمرّ عبر هذه الدالة. لا استثناء.
 */
function url(path = ""): string {
    const clean = path.replace(/^\/+|\/+$/g, "");
    return clean ? `${BASE}/${clean}/` : `${BASE}/`;
}


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
            url: url(),
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1.0,
        },
    ];

    // صفحات الأقسام (Pillar) — أولوية عالية
    const pillars: MetadataRoute.Sitemap = SILOS.map((silo) => ({
        url: url(silo.slug),
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    // صفحات الخدمات (Spokes) — صفحات المال
    const spokes: MetadataRoute.Sitemap = SILOS.flatMap((silo) =>
        silo.spokes.map((spoke) => ({
            url: url(`${silo.slug}/${spoke.slug}`),
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        }))
    );

    // الصفحات المستقلة
    const standalone: MetadataRoute.Sitemap = STANDALONE_ROUTES.map((route) => ({
        url: url(route.slug),
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
        url: url(`blog/${post.slug}`),
        lastModified: new Date(post.dateModified),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    // صفحات الأسعار الفرعية — نية بحث تجارية عالية
    const pricePages: MetadataRoute.Sitemap = PRICING_BLOCKS.map((block) => ({
        url: url(`prices/${block.slug}`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.85,
    }));

    /*
      صفحات المدونة المقسّمة (٢..N) وصفحات التصنيفات.

      ⚠️ إدراجها ليس ترفاً.
      بعد التقسيم، المقال الحادي عشر فصاعداً لم يعد مرتبطاً من /blog
      مباشرة — طريقه الوحيد صفحة ٢ أو ٣ أو تصنيفه. لو غابت هذه الصفحات
      عن الـ sitemap لصار اكتشاف المقالات القديمة معتمداً على تتبّع
      الزاحف لسلسلة روابط «التالي»، وهو أبطأ وأقل موثوقية بكثير.

      الأولوية ٠.٤ — أقل من المقالات نفسها: هذه صفحات تنقّل لا وجهات.
    */
    const publishedMeta = getPublishedMeta();

    const blogPages: MetadataRoute.Sitemap = extraPageParams(
        publishedMeta.length
    ).map((p) => ({
        url: url(`blog/page/${p}`),
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.4,
    }));

    const categoryPages: MetadataRoute.Sitemap = ALL_CATEGORY_SLUGS.flatMap(
        (slug) => {
            const category = SLUG_TO_CATEGORY[slug];
            const count = publishedMeta.filter((p) => p.category === category).length;
            // تصنيف بلا مقالات منشورة لا يدخل الـ sitemap — صفحته فارغة
            if (count === 0) return [];

            const first: MetadataRoute.Sitemap[number] = {
                url: url(`blog/category/${slug}`),
                lastModified: now,
                changeFrequency: "weekly",
                priority: 0.5,
            };
            const rest: MetadataRoute.Sitemap = extraPageParams(count).map((p) => ({
                url: url(`blog/category/${slug}/page/${p}`),
                lastModified: now,
                changeFrequency: "weekly" as const,
                priority: 0.4,
            }));
            return [first, ...rest];
        }
    );

    return [
        ...home,
        ...pillars,
        ...spokes,
        ...standalone,
        ...pricePages,
        ...blogPosts,
        ...categoryPages,
        ...blogPages,
    ];
}
