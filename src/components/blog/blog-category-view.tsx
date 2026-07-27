import Link from "next/link";

import { BlogListing, type CategoryLink } from "@/components/blog/blog-listing";
import { BUSINESS } from "@/lib/business";
import { getPublishedMeta, getActiveCategories } from "@/lib/articles/meta";
import { paginate, pageHref } from "@/lib/articles/pagination";
import { generateBreadcrumbSchema, generateItemListSchema } from "@/lib/schema";
import { CATEGORY_SLUGS } from "@/lib/articles/categories";

/**
 * صفحة تصنيف — الصفحة الأولى والصفحات التالية معاً.
 * نظير BlogIndexView تماماً، لكن على مقالات تصنيف واحد.
 */

/** مقالات تصنيف بعينه، مرتّبة كما في الفهرس العام */
export function categoryPosts(category: string) {
    return getPublishedMeta().filter((p) => p.category === category);
}

export function BlogCategoryView({
    slug,
    category,
    page: pageNum,
}: {
    slug: string;
    category: string;
    page: number;
}) {
    const posts = categoryPosts(category);
    const page = paginate(posts, pageNum);
    const base = `/blog/category/${slug}`;

    const categories: CategoryLink[] = getActiveCategories()
        .map((c) => ({ ...c, slug: CATEGORY_SLUGS[c.category] }))
        .filter((c): c is CategoryLink => Boolean(c.slug));

    const crumbs: { name: string; url: string }[] = [
        { name: "الرئيسية", url: BUSINESS.url },
        { name: "المدونة", url: `${BUSINESS.url}/blog` },
        { name: category, url: `${BUSINESS.url}${base}` },
    ];
    if (page.page > 1) {
        crumbs.push({
            name: `صفحة ${page.page}`,
            url: `${BUSINESS.url}${pageHref(base, page.page)}`,
        });
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbSchema(crumbs)),
                }}
            />
            {/* ItemList لعناصر هذه الصفحة فقط — لا لكل التصنيف */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateItemListSchema(
                            page.items.map((p) => ({
                                name: p.title,
                                url: `/blog/${p.slug}`,
                                description: p.excerpt,
                                image: p.image,
                            })),
                            `مقالات ${category}`
                        )
                    ),
                }}
            />

            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16 lg:py-20">
                <div className="container mx-auto px-4 text-center">
                    <nav aria-label="مسار التنقل" className="text-sm text-white/60 mb-4">
                        <ol className="flex items-center justify-center flex-wrap">
                            <li>
                                <Link href="/" className="hover:text-white">
                                    الرئيسية
                                </Link>
                            </li>
                            <li aria-hidden="true" className="mx-2">/</li>
                            <li>
                                <Link href="/blog" className="hover:text-white">
                                    المدونة
                                </Link>
                            </li>
                            <li aria-hidden="true" className="mx-2">/</li>
                            {page.page > 1 ? (
                                <>
                                    <li>
                                        <Link href={base} className="hover:text-white">
                                            {category}
                                        </Link>
                                    </li>
                                    <li aria-hidden="true" className="mx-2">/</li>
                                    <li>
                                        <span className="text-amber-400" aria-current="page">
                                            صفحة {page.page}
                                        </span>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <span className="text-amber-400" aria-current="page">
                                        {category}
                                    </span>
                                </li>
                            )}
                        </ol>
                    </nav>

                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                        مقالات {category}
                        {page.page > 1 && (
                            <span className="block text-2xl lg:text-3xl text-white/70 mt-2">
                                صفحة {page.page}
                            </span>
                        )}
                    </h1>

                    <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
                        أدلة ومقالات متخصصة في {category} — بأرقام وتجارب من واقع سوق جدة.
                    </p>

                    <p className="text-white/50 text-sm mt-6">
                        {page.total}{" "}
                        {page.total === 1 ? "مقال في هذا القسم" : "مقالاً في هذا القسم"}
                    </p>
                </div>
            </section>

            <BlogListing
                page={page}
                base={base}
                categories={categories}
                activeSlug={slug}
                totalAll={getPublishedMeta().length}
                emptyText={`لا توجد مقالات منشورة في قسم «${category}» بعد. عندك سؤال؟`}
            />
        </>
    );
}
