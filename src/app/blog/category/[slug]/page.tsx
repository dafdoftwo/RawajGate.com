import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";

import { GeoImage } from "@/components/geo-image";
import { BUSINESS } from "@/lib/business";
import { getPublishedMeta, getActiveCategories } from "@/lib/articles/meta";
import { generateBreadcrumbSchema, generateItemListSchema } from "@/lib/schema";

/**
 * صفحات تصنيفات المدونة — مسارات ثابتة بدل ?category=
 *
 * ⚡ لماذا التحويل؟
 * الفلترة عبر searchParams تُجبر الصفحة على التصيير الديناميكي (خادم)،
 * ما يمنع النشر الثابت على Cloudflare Pages. المسار الثابت:
 *   • يُولَّد وقت البناء → أسرع استجابة ممكنة (ملف من الـ CDN مباشرة)
 *   • قابل للفهرسة → كل تصنيف صفحة مستقلة في Google
 *   • يدخل الـ sitemap → إشارة بنية موضوعية أوضح
 */

/** خريطة الاسم العربي ← slug لاتيني (المسارات العربية تُرمَّز وتصبح قبيحة) */
export const CATEGORY_SLUGS: Record<string, string> = {
    "أسعار": "prices",
    "مقارنات": "comparisons",
    "أدلة إرشادية": "guides",
    "مرجعي": "reference",
    "مطبوعات": "printing",
    "لافتات": "signage",
    "معارض": "exhibitions",
    "هدايا": "gifts",
    "تصميم": "design",
    "موسمي": "seasonal",
};

/** العكس: slug ← الاسم العربي */
const SLUG_TO_CATEGORY: Record<string, string> = Object.fromEntries(
    Object.entries(CATEGORY_SLUGS).map(([ar, en]) => [en, ar])
);

export function generateStaticParams() {
    // ولّد فقط التصنيفات التي لها مقالات (منشورة أو مجدولة)
    return Object.values(CATEGORY_SLUGS).map((slug) => ({ slug }));
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

const arDate = (iso: string) =>
    new Date(iso).toLocaleDateString("ar-SA-u-ca-gregory", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

export default async function BlogCategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const category = SLUG_TO_CATEGORY[slug];
    if (!category) notFound();

    const posts = getPublishedMeta().filter((p) => p.category === category);
    const allCategories = getActiveCategories();

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: BUSINESS.url },
        { name: "المدونة", url: `${BUSINESS.url}/blog` },
        { name: category, url: `${BUSINESS.url}/blog/category/${slug}` },
    ]);

    const listSchema = generateItemListSchema(
        posts.map((p) => ({
            name: p.title,
            url: `/blog/${p.slug}`,
            description: p.excerpt,
            image: p.image,
        })),
        `مقالات ${category}`
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

            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16">
                <div className="container mx-auto px-4 text-center">
                    <nav aria-label="مسار التنقل" className="text-sm text-white/60 mb-4">
                        <ol className="flex items-center justify-center flex-wrap">
                            <li><Link href="/" className="hover:text-white">الرئيسية</Link></li>
                            <li aria-hidden="true" className="mx-2">/</li>
                            <li><Link href="/blog" className="hover:text-white">المدونة</Link></li>
                            <li aria-hidden="true" className="mx-2">/</li>
                            <li><span className="text-amber-400" aria-current="page">{category}</span></li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                        مقالات {category}
                    </h1>
                    <p className="text-white/70">
                        {posts.length} {posts.length === 1 ? "مقال" : "مقالاً"} في هذا القسم
                    </p>
                </div>
            </section>

            {/* شريط التصنيفات — روابط ثابتة */}
            <section className="py-6 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
                <div className="container mx-auto px-4">
                    <nav aria-label="تصنيفات المدونة" className="flex flex-wrap justify-center gap-2 md:gap-3">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                            <BookOpen className="w-4 h-4" aria-hidden="true" />
                            كل المقالات
                        </Link>
                        {allCategories.map((c) => {
                            const cSlug = CATEGORY_SLUGS[c.category];
                            if (!cSlug) return null;
                            const active = c.category === category;
                            return (
                                <Link
                                    key={c.category}
                                    href={`/blog/category/${cSlug}`}
                                    aria-current={active ? "page" : undefined}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                        active
                                            ? "bg-amber-500 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {c.category} ({c.count})
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {posts.length === 0 ? (
                            <p className="text-center text-gray-500 py-12">
                                لا توجد مقالات منشورة في هذا التصنيف بعد.{" "}
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
                                        </Link>
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" aria-hidden="true" />
                                                    <time dateTime={post.publishAt}>{arDate(post.publishAt)}</time>
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" aria-hidden="true" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <h2 className="font-bold text-gray-900 text-lg mb-3 leading-relaxed">
                                                <Link href={`/blog/${post.slug}`} className="group-hover:text-amber-600 transition-colors">
                                                    {post.title}
                                                </Link>
                                            </h2>
                                            <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
                                                {post.excerpt}
                                            </p>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="text-amber-600 font-medium text-sm inline-flex items-center hover:text-amber-700"
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
        </>
    );
}
