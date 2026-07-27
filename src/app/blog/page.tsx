import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";

import { GeoImage } from "@/components/geo-image";
import { BUSINESS } from "@/lib/business";
import {
    getPublishedMeta,
    getActiveCategories,
    getBlogStats,
} from "@/lib/articles/meta";
import { generateBreadcrumbSchema, generateItemListSchema } from "@/lib/schema";
import { CATEGORY_SLUGS } from "./category/[slug]/page";

/**
 * ⚡ هذه الصفحة تستورد meta.ts فقط — بيانات خفيفة بلا أي محتوى مقالات.
 * حتى مع 90 مقالاً، الحمل هنا يبقى بضعة كيلوبايتات.
 *
 * revalidate كل ساعة حتى تظهر المقالات المجدولة في موعدها.
 */

export const metadata: Metadata = {
    title: "مدونة الطباعة والتصميم وتجهيز المعارض",
    description:
        "أدلة عملية بأرقام حقيقية في الطباعة التجارية، أسعار الخدمات، لافتات المحلات، تجهيز أجنحة المعارض، والتصميم — من واقع عملنا في سوق جدة.",
    alternates: { canonical: "/blog" },
    keywords: [
        "مدونة طباعة",
        "أسعار الطباعة جدة",
        "دليل تجهيز معارض",
        "نصائح تصميم",
        "اشتراطات لوحات المحلات",
    ],
    openGraph: {
        title: "مدونة بوابة الرواج | أدلة الطباعة وتجهيز المعارض",
        description:
            "أدلة عملية بأرقام حقيقية من واقع سوق جدة — الأسعار، الخامات، الاشتراطات، والمقارنات.",
        url: `${BUSINESS.url}/blog`,
        images: [
            {
                url: "/images/luxury-business-cards-printing-jeddah.webp",
                width: 1200,
                height: 630,
                alt: "مدونة بوابة الرواج",
            },
        ],
        locale: "ar_SA",
        type: "website",
    },
};

const arDate = (iso: string) =>
    new Date(iso).toLocaleDateString("ar-SA-u-ca-gregory", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

export default function BlogPage() {
    const all = getPublishedMeta();
    const categories = getActiveCategories();
    const stats = getBlogStats();
    const posts = all;

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: BUSINESS.url },
        { name: "المدونة", url: `${BUSINESS.url}/blog` },
    ]);

    const listSchema = generateItemListSchema(
        all.map((p) => ({
            name: p.title,
            url: `/blog/${p.slug}`,
            description: p.excerpt,
            image: p.image,
        })),
        "مقالات مدونة بوابة الرواج"
    );

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
            />

            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16 lg:py-20">
                <div className="container mx-auto px-4 text-center">
                    <nav aria-label="مسار التنقل" className="text-sm text-white/60 mb-4">
                        <ol className="flex items-center justify-center">
                            <li><Link href="/" className="hover:text-white">الرئيسية</Link></li>
                            <li aria-hidden="true" className="mx-2">/</li>
                            <li><span className="text-amber-400" aria-current="page">المدونة</span></li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                        مدونة الطباعة وتجهيز المعارض
                    </h1>

                    <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
                        أدلة عملية بأرقام حقيقية: أسعار الخدمات في السوق السعودي، مقارنات
                        الخامات، اشتراطات البلدية، وتجهيز ملفات الطباعة — من واقع عملنا
                        في جدة منذ 2009.
                    </p>

                    <p className="text-white/50 text-sm mt-6">
                        {stats.published} {stats.published === 1 ? "مقال منشور" : "مقالاً منشوراً"}
                        {stats.upcoming > 0 && ` · ${stats.upcoming} قيد الجدولة`}
                    </p>
                </div>
            </section>

            {/* فلترة التصنيفات — تعمل عبر URL بلا JavaScript */}
            {categories.length > 1 && (
                <section className="py-6 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
                    <div className="container mx-auto px-4">
                        <nav
                            aria-label="فلترة المقالات حسب التصنيف"
                            className="flex flex-wrap justify-center gap-2 md:gap-3"
                        >
                            <Link
                                href="/blog"
                                aria-current="page"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-amber-500 text-white"
                            >
                                <BookOpen className="w-4 h-4" aria-hidden="true" />
                                الكل ({all.length})
                            </Link>
                            {categories.map((c) => {
                                const slug = CATEGORY_SLUGS[c.category];
                                if (!slug) return null;
                                return (
                                    <Link
                                        key={c.category}
                                        href={`/blog/category/${slug}`}
                                        className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                    >
                                        {c.category} ({c.count})
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </section>
            )}

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {posts.length === 0 ? (
                            <p className="text-center text-gray-500 py-12">
                                لا توجد مقالات في هذا التصنيف بعد.{" "}
                                <Link href="/blog" className="text-amber-600 hover:underline">
                                    عرض كل المقالات
                                </Link>
                            </p>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post, i) => (
                                    <article
                                        key={post.slug}
                                        className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group flex flex-col"
                                    >
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="block relative aspect-[16/9] overflow-hidden"
                                        >
                                            <GeoImage
                                                src={post.image}
                                                alt={post.imageAlt}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                                                priority={i < 3}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 !rounded-none"
                                            />
                                            <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                                {post.category}
                                            </span>
                                        </Link>

                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" aria-hidden="true" />
                                                    <time dateTime={post.publishAt}>
                                                        {arDate(post.publishAt)}
                                                    </time>
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" aria-hidden="true" />
                                                    {post.readTime}
                                                </span>
                                            </div>

                                            <h2 className="font-bold text-gray-900 text-lg mb-3 leading-relaxed">
                                                <Link
                                                    href={`/blog/${post.slug}`}
                                                    className="group-hover:text-amber-600 transition-colors"
                                                >
                                                    {post.title}
                                                </Link>
                                            </h2>

                                            <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
                                                {post.excerpt}
                                            </p>

                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="text-amber-600 font-medium text-sm inline-flex items-center hover:text-amber-700"
                                                aria-label={`اقرأ المقال: ${post.title}`}
                                            >
                                                اقرأ المقال
                                                <ArrowLeft className="mr-1 w-4 h-4" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
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
