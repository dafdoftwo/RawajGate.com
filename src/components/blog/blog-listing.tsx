import Link from "next/link";
import { BookOpen } from "lucide-react";

import { ArticleGrid } from "@/components/blog/article-card";
import { PaginationNav } from "@/components/blog/pagination-nav";
import type { ArticleMeta } from "@/lib/articles/meta";
import type { Page } from "@/lib/articles/pagination";

/**
 * جسم قوائم المدونة — الفلترة + الشبكة + التنقّل + دعوة الإجراء.
 *
 * يستخدمه أربعة مسارات:
 *   /blog                          · /blog/page/[page]
 *   /blog/category/[slug]          · /blog/category/[slug]/page/[page]
 *
 * ⚠️ كان هذا الترميز مكرّراً بين /blog و/blog/category. توحيده هنا يعني
 * أن أي تعديل على شكل القائمة يسري على المسارات الأربعة معاً — ولا يمكن
 * أن ينسى أحدها.
 */

export interface CategoryLink {
    /** الاسم العربي كما يظهر */
    category: string;
    count: number;
    /** المقطع الإنجليزي في الرابط */
    slug: string;
}

interface BlogListingProps {
    page: Page<ArticleMeta>;
    /** المسار الأساس بلا رقم صفحة — "/blog" أو "/blog/category/prices" */
    base: string;
    /** روابط شريط التصنيفات */
    categories: CategoryLink[];
    /** التصنيف النشط — null يعني «الكل» */
    activeSlug: string | null;
    /** إجمالي المقالات المنشورة (لعدّاد «الكل») */
    totalAll: number;
    /** نص يظهر حين لا توجد مقالات */
    emptyText: string;
}

export function BlogListing({
    page,
    base,
    categories,
    activeSlug,
    totalAll,
    emptyText,
}: BlogListingProps) {
    const pill =
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors";

    return (
        <>
            {/* فلترة التصنيفات — روابط حقيقية تعمل بلا JavaScript */}
            {categories.length > 1 && (
                <section className="py-6 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
                    <div className="container mx-auto px-4">
                        <nav
                            aria-label="فلترة المقالات حسب التصنيف"
                            className="flex flex-wrap justify-center gap-2 md:gap-3"
                        >
                            <Link
                                href="/blog"
                                {...(activeSlug === null ? { "aria-current": "page" as const } : {})}
                                className={`${pill} ${
                                    activeSlug === null
                                        ? "bg-amber-500 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                <BookOpen className="w-4 h-4" aria-hidden="true" />
                                الكل ({totalAll})
                            </Link>

                            {categories.map((c) => (
                                <Link
                                    key={c.slug}
                                    href={`/blog/category/${c.slug}`}
                                    {...(activeSlug === c.slug
                                        ? { "aria-current": "page" as const }
                                        : {})}
                                    className={`${pill} ${
                                        activeSlug === c.slug
                                            ? "bg-amber-500 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {c.category} ({c.count})
                                </Link>
                            ))}
                        </nav>
                    </div>
                </section>
            )}

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    {page.items.length === 0 ? (
                        <p className="text-center text-gray-600 max-w-xl mx-auto">
                            {emptyText}{" "}
                            <Link href="/quote" className="text-amber-600 font-medium hover:underline">
                                اطلب عرض سعر
                            </Link>
                        </p>
                    ) : (
                        <>
                            {/*
                              eager فقط على الصفحة الأولى: صور الصفحات ٢+
                              لا تقع فوق الطيّة لأن الزائر وصلها بنقرة تنقّل،
                              ورفع أولويتها يزاحم المسار الحرج بلا فائدة.
                            */}
                            <ArticleGrid posts={page.items} eager={page.page === 1} />

                            <PaginationNav
                                page={page}
                                base={base}
                                label="تنقّل بين صفحات المقالات"
                            />

                            {page.totalPages > 1 && (
                                <p className="mt-6 text-center text-sm text-gray-500">
                                    صفحة {page.page} من {page.totalPages} · {page.total} مقالاً
                                </p>
                            )}
                        </>
                    )}
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                            عندك مشروع طباعة أو معرض؟
                        </h2>
                        <p className="text-gray-600 mb-8">
                            فريقنا في جدة جاهز لمناقشة تفاصيل مشروعك وتقديم عرض سعر مجاني.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/quote"
                                className="px-8 py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors"
                            >
                                اطلب عرض سعر
                            </Link>
                            <Link
                                href="/prices"
                                className="px-8 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                تصفّح الأسعار
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
