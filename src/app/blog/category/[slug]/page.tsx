import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogCategoryView } from "@/components/blog/blog-category-view";
import { BUSINESS } from "@/lib/business";
import {
    CATEGORY_SLUGS,
    SLUG_TO_CATEGORY,
    ALL_CATEGORY_SLUGS,
} from "@/lib/articles/categories";

// إعادة تصدير: أي كود قديم يستورد CATEGORY_SLUGS من هنا يظل يعمل
export { CATEGORY_SLUGS };

/**
 * صفحات تصنيفات المدونة — مسارات ثابتة بدل ?category=
 *
 * ⚡ لماذا التحويل؟
 * الفلترة عبر searchParams تُجبر الصفحة على التصيير الديناميكي (خادم)،
 * ما يمنع النشر الثابت على Cloudflare Pages. المسار الثابت:
 *   • يُولَّد وقت البناء → أسرع استجابة ممكنة (ملف من الـ CDN مباشرة)
 *   • قابل للفهرسة → كل تصنيف صفحة مستقلة في Google
 *   • يدخل الـ sitemap → إشارة بنية موضوعية أوضح
 *
 * الصفحة الأولى هنا؛ الصفحات ٢+ في `page/[page]/page.tsx`. كلاهما يصيّر
 * `BlogCategoryView` نفسه فلا يتباعدان.
 */

export function generateStaticParams() {
    return ALL_CATEGORY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const category = SLUG_TO_CATEGORY[slug];
    if (!category) return { title: "التصنيف غير موجود" };

    return {
        title: `مقالات ${category}`,
        description: `كل مقالات قسم «${category}» في مدونة بوابة الرواج — أدلة عملية بأرقام حقيقية من سوق جدة.`,
        alternates: { canonical: `/blog/category/${slug}` },
        openGraph: {
            title: `مقالات ${category} | مدونة بوابة الرواج`,
            description: `أدلة ومقالات متخصصة في ${category} من واقع عملنا في جدة.`,
            url: `${BUSINESS.url}/blog/category/${slug}`,
            images: [
                {
                    url: "/images/luxury-business-cards-printing-jeddah.webp",
                    width: 1200,
                    height: 630,
                    alt: `مقالات ${category}`,
                },
            ],
            locale: "ar_SA",
            type: "website",
        },
    };
}

export default async function BlogCategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const category = SLUG_TO_CATEGORY[slug];
    if (!category) notFound();

    return <BlogCategoryView slug={slug} category={category} page={1} />;
}
