import Link from "next/link";

import { BlogListing, type CategoryLink } from "@/components/blog/blog-listing";
import { BUSINESS } from "@/lib/business";
import {
    getPublishedMeta,
    getActiveCategories,
    getBlogStats,
} from "@/lib/articles/meta";
import { paginate, pageHref } from "@/lib/articles/pagination";
import { generateBreadcrumbSchema, generateItemListSchema } from "@/lib/schema";
import { CATEGORY_SLUGS } from "@/lib/articles/categories";

/**
 * صفحة فهرس المدونة — الصفحة الأولى والصفحات التالية معاً.
 *
 * ⚠️ لماذا مكوّن مشترك بدل نسخ الصفحة؟
 * المسار /blog والمسار /blog/page/[page] يعرضان نفس الشيء تماماً عدا رقم
 * الصفحة. لو كُتبا منفصلين لتباعدا مع أول تعديل — وهو ما يحدث دائماً.
 */

const PAGE_TITLE = "مدونة الطباعة وتجهيز المعارض";

/** ItemList للصفحة الحالية فقط — لا لكل المدونة */
function buildListSchema(items: { title: string; slug: string; excerpt: string; image: string }[]) {
    return generateItemListSchema(
        items.map((p) => ({
            name: p.title,
            url: `/blog/${p.slug}`,
            description: p.excerpt,
            image: p.image,
        })),
        "مقالات مدونة بوابة الرواج"
    );
}

export function BlogIndexView({ page: pageNum }: { page: number }) {
    const all = getPublishedMeta();
    const stats = getBlogStats();
    const page = paginate(all, pageNum);

    const categories: CategoryLink[] = getActiveCategories()
        .map((c) => ({ ...c, slug: CATEGORY_SLUGS[c.category] }))
        .filter((c): c is CategoryLink => Boolean(c.slug));

    const crumbs: { name: string; url: string }[] = [
        { name: "الرئيسية", url: BUSINESS.url },
        { name: "المدونة", url: `${BUSINESS.url}/blog` },
    ];
    if (page.page > 1) {
        crumbs.push({
            name: `صفحة ${page.page}`,
            url: `${BUSINESS.url}${pageHref("/blog", page.page)}`,
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
            {/*
              ⚠️ ItemList يصف **عناصر هذه الصفحة** لا كل المدونة.
              وصف تسعين مقالاً في schema صفحة تعرض اثني عشر يجعل البيانات
              المنظّمة تخالف ما يراه الزائر — وهو ما تعتبره جوجل مخالفة.
            */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(buildListSchema(page.items)) }}
            />

            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16 lg:py-20">
                <div className="container mx-auto px-4 text-center">
                    <nav aria-label="مسار التنقل" className="text-sm text-white/60 mb-4">
                        <ol className="flex items-center justify-center">
                            <li>
                                <Link href="/" className="hover:text-white">
                                    الرئيسية
                                </Link>
                            </li>
                            <li aria-hidden="true" className="mx-2">/</li>
                            {page.page > 1 ? (
                                <>
                                    <li>
                                        <Link href="/blog" className="hover:text-white">
                                            المدونة
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
                                        المدونة
                                    </span>
                                </li>
                            )}
                        </ol>
                    </nav>

                    {/*
                      H1 واحد لكل صفحة. صفحات ٢+ تُضيف الرقم إلى العنوان نفسه
                      بدل تكرار عنوان متطابق على عشرين صفحة — وهو ما يجعل
                      جوجل يعتبرها محتوى مكرراً.
                    */}
                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                        {PAGE_TITLE}
                        {page.page > 1 && (
                            <span className="block text-2xl lg:text-3xl text-white/70 mt-2">
                                صفحة {page.page}
                            </span>
                        )}
                    </h1>

                    <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
                        أدلة عملية بأرقام حقيقية: أسعار الخدمات في السوق السعودي، مقارنات
                        الخامات، اشتراطات البلدية، وتجهيز ملفات الطباعة — من واقع عملنا
                        في جدة منذ 2009.
                    </p>

                    <p className="text-white/50 text-sm mt-6">
                        {stats.published}{" "}
                        {stats.published === 1 ? "مقال منشور" : "مقالاً منشوراً"}
                        {stats.upcoming > 0 && ` · ${stats.upcoming} قيد الجدولة`}
                    </p>
                </div>
            </section>

            <BlogListing
                page={page}
                base="/blog"
                categories={categories}
                activeSlug={null}
                totalAll={all.length}
                emptyText="لا توجد مقالات منشورة بعد. عندك سؤال عن الطباعة أو تجهيز المعارض؟"
            />
        </>
    );
}
