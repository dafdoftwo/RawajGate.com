import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
    BlogCategoryView,
    categoryPosts,
} from "@/components/blog/blog-category-view";
import { BUSINESS } from "@/lib/business";
import { SLUG_TO_CATEGORY, ALL_CATEGORY_SLUGS } from "@/lib/articles/categories";
import { allPageParams, paginate } from "@/lib/articles/pagination";

/**
 * صفحات التصنيف المرقّمة — نظير `/blog/page/[page]` داخل تصنيف واحد.
 */

type Params = { slug: string; page: string };

/**
 * ⚠️ تُرجع التوليفة الكاملة `{ slug, page }` لا `{ page }` وحده.
 *
 * جرّبتُ النمط الآخر (إرجاع مقطع هذا المستوى فقط اعتماداً على params
 * الممرَّرة من الأب) ففشل البناء بـ «missing generateStaticParams».
 * Next 16 مع Turbopack يتوقّع هنا كل مقاطع المسار مجتمعة.
 */
export function generateStaticParams(): Params[] {
    return ALL_CATEGORY_SLUGS.flatMap((slug) => {
        const category = SLUG_TO_CATEGORY[slug];
        if (!category) return [];
        return allPageParams(categoryPosts(category).length).map((page) => ({
            slug,
            page,
        }));
    });
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { slug, page } = await params;
    const category = SLUG_TO_CATEGORY[slug];
    if (!category) return { title: "التصنيف غير موجود" };

    const n = Number(page);
    const { totalPages } = paginate(categoryPosts(category), n);

    // الصفحة ١ نسخة من صفحة التصنيف — canonical يوجّهها إلى الأصل
    if (n <= 1) {
        return {
            title: `مقالات ${category}`,
            alternates: { canonical: `/blog/category/${slug}` },
        };
    }

    return {
        title: `مقالات ${category} — صفحة ${n} من ${totalPages}`,
        description: `الصفحة ${n} من مقالات قسم «${category}» في مدونة بوابة الرواج.`,
        alternates: { canonical: `/blog/category/${slug}/page/${n}` },
        openGraph: {
            title: `مقالات ${category} — صفحة ${n}`,
            url: `${BUSINESS.url}/blog/category/${slug}/page/${n}`,
            locale: "ar_SA",
            type: "website",
        },
    };
}

export default async function BlogCategoryPaginatedPage({
    params,
}: {
    params: Promise<Params>;
}) {
    const { slug, page } = await params;
    const category = SLUG_TO_CATEGORY[slug];
    if (!category) notFound();

    const n = Number(page);
    const { totalPages } = paginate(categoryPosts(category), 1);
    if (!Number.isInteger(n) || n < 1 || n > totalPages) notFound();

    return <BlogCategoryView slug={slug} category={category} page={n} />;
}
