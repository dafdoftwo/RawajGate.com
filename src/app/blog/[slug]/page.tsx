import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { canLinkTo } from "@/lib/articles/meta";
import { Calendar, Clock, User, ArrowLeft, List } from "lucide-react";

import { GeoImage } from "@/components/geo-image";
import { MarkdownRenderer, extractHeadings } from "@/components/markdown-renderer";
import { ArticleShare } from "@/components/article-share";
import { BUSINESS } from "@/lib/business";
import { getMeta, getAllSlugs, getRelatedMeta } from "@/lib/articles/meta";
import { loadArticle } from "@/lib/articles/loader";
import {
    generateBreadcrumbSchema,
    generateBlogPostingSchema,
    generateFAQSchema,
    generateHowToSchema,
} from "@/lib/schema";

/**
 * صفحة المقال — نحيفة عمداً.
 *
 * ⚡ ما تغيّر معمارياً:
 * كان هذا الملف 865 سطراً يحوي محتوى 6 مقالات كاملة + معالج markdown.
 * الآن: المحتوى في ملفات مستقلة تُحمَّل ديناميكياً (مقال واحد فقط لكل طلب)،
 * والمعالج مكوّن مشترك. النتيجة: قابلية التوسع إلى 90 مقالاً بلا تضخّم.
 *
 * إعادة التحقق كل ساعة (ISR) حتى تظهر المقالات المجدولة في موعدها.
 */

export function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const meta = getMeta(slug);
    if (!meta) return { title: "المقال غير موجود" };

    return {
        title: meta.seoTitle ?? meta.title,
        description: meta.excerpt,
        alternates: { canonical: `/blog/${slug}` },
        authors: [{ name: meta.author }],
        openGraph: {
            title: meta.title,
            description: meta.excerpt,
            url: `${BUSINESS.url}/blog/${slug}`,
            images: [
                { url: meta.image, width: 1200, height: 630, alt: meta.imageAlt },
            ],
            type: "article",
            locale: "ar_SA",
            publishedTime: meta.publishAt,
            modifiedTime: meta.dateModified,
            authors: [meta.author],
            section: meta.category,
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.excerpt,
            images: [meta.image],
        },
    };
}

const arDate = (iso: string) =>
    new Date(iso).toLocaleDateString("ar-SA-u-ca-gregory", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // ⏰ يُرجع null إن لم يحن موعد النشر بعد → 404
    const article = await loadArticle(slug);
    if (!article) notFound();

    /*
      ⚠️ تُفلتر روابط المقالات غير المنشورة.
      صفحة المقال المجدول لا تُولَّد قبل موعدها، فإدراج رابط إليها في
      كتلة «روابط مفيدة» يعني إرسال القارئ ومحرك البحث إلى 404.
      الرابط يظهر تلقائياً في أول بناء بعد نشر هدفه.
    */
    const linkableInternal = article.internalLinks.filter((l) => canLinkTo(l.href));

    const related = getRelatedMeta(slug, 3);
    const headings = extractHeadings(article.content);
    const url = `${BUSINESS.url}/blog/${slug}`;

    const wordCount = article.content.split(/\s+/).filter(Boolean).length;

    const schemas = [
        generateBlogPostingSchema({
            title: article.title,
            excerpt: article.excerpt,
            image: article.image,
            slug,
            datePublished: article.publishAt,
            dateModified: article.dateModified,
            category: article.category,
            authorName: article.author,
            authorRole: article.authorRole,
            wordCount,
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: BUSINESS.url },
            { name: "المدونة", url: `${BUSINESS.url}/blog` },
            { name: article.title, url },
        ]),
        generateFAQSchema(article.faqs, url),
        ...(article.howTo
            ? [
                  generateHowToSchema({
                      name: article.title,
                      description: article.excerpt,
                      image: article.image,
                      totalTime: article.howTo.totalTime,
                      steps: article.howTo.steps,
                  }),
              ]
            : []),
    ];

    return (
        <>
            {schemas.map((s, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
                />
            ))}

            {/* البطل */}
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-14 lg:py-16">
                <div className="container mx-auto px-4">
                    <nav aria-label="مسار التنقل" className="text-sm text-white/60 mb-6">
                        <ol className="flex flex-wrap items-center">
                            <li><Link href="/" className="hover:text-white">الرئيسية</Link></li>
                            <li aria-hidden="true" className="mx-2">/</li>
                            <li><Link href="/blog" className="hover:text-white">المدونة</Link></li>
                            <li aria-hidden="true" className="mx-2">/</li>
                            <li><span className="text-amber-400">{article.category}</span></li>
                        </ol>
                    </nav>

                    <div className="max-w-3xl">
                        <span className="inline-block bg-amber-500 text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
                            {article.category}
                        </span>

                        <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/70 text-sm">
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4" aria-hidden="true" />
                                {article.author}
                                {article.authorRole && (
                                    <span className="text-white/40">· {article.authorRole}</span>
                                )}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" aria-hidden="true" />
                                <time dateTime={article.dateModified}>
                                    {arDate(article.dateModified)}
                                </time>
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" aria-hidden="true" />
                                {article.readTime}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* صورة الغلاف */}
            <div className="container mx-auto px-4 -mt-6">
                <div className="max-w-4xl mx-auto">
                    <GeoImage
                        src={article.image}
                        alt={article.imageAlt}
                        width={1200}
                        height={675}
                        sizes="(max-width: 1024px) 100vw, 900px"
                        priority
                        className="w-full aspect-[16/9] object-cover rounded-2xl shadow-xl"
                    />
                </div>
            </div>

            <article className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        {/*
                          🎯 الإجابة المباشرة — أول ما تقرأه محركات الإجابة.
                          موضوعة قبل المحتوى عمداً لتكون أول فقرة نصية في الصفحة.
                        */}
                        <div className="bg-amber-50 border-r-4 border-amber-500 rounded-l-xl p-6 mb-10">
                            <p className="text-lg leading-8 text-gray-800">
                                {article.directAnswer}
                            </p>
                        </div>

                        {/* فهرس المحتويات */}
                        {headings.length > 3 && (
                            <nav
                                aria-label="محتويات المقال"
                                className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-6"
                            >
                                <h2 className="flex items-center gap-2 font-bold text-gray-900 mb-4 text-base">
                                    <List className="w-4 h-4 text-amber-500" aria-hidden="true" />
                                    محتويات المقال
                                </h2>
                                <ol className="space-y-2 list-decimal list-outside mr-5">
                                    {headings.map((h) => (
                                        <li key={h.id}>
                                            <a
                                                href={`#${h.id}`}
                                                className="text-gray-700 hover:text-amber-600 transition-colors"
                                            >
                                                {h.text}
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        )}

                        <MarkdownRenderer content={article.content} />

                        {/* الروابط الداخلية السياقية */}
                        {linkableInternal.length > 0 && (
                            <section className="mt-12 bg-gray-50 rounded-2xl border border-gray-200 p-6">
                                <h2 className="font-bold text-gray-900 mb-5 text-lg">
                                    روابط مفيدة ذات صلة
                                </h2>
                                <ul className="space-y-3">
                                    {linkableInternal.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 transition-colors"
                                            >
                                                <ArrowLeft
                                                    className="w-4 h-4 text-amber-500 shrink-0 mt-1 group-hover:-translate-x-1 transition-transform"
                                                    aria-hidden="true"
                                                />
                                                <span>
                                                    <span className="block font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                                                        {link.anchor}
                                                    </span>
                                                    <span className="block text-sm text-gray-500">
                                                        {link.context}
                                                    </span>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* الأسئلة الشائعة */}
                        {article.faqs.length > 0 && (
                            <section className="mt-12" aria-labelledby="article-faq">
                                <h2
                                    id="article-faq"
                                    className="text-2xl font-heading font-bold text-gray-900 mb-6"
                                >
                                    أسئلة شائعة
                                </h2>
                                <div className="space-y-3">
                                    {article.faqs.map((faq, i) => (
                                        <details
                                            key={faq.question}
                                            open={i === 0}
                                            className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
                                        >
                                            <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none">
                                                <h3 className="font-bold text-gray-900 leading-relaxed">
                                                    {faq.question}
                                                </h3>
                                                <span
                                                    className="text-amber-500 text-2xl leading-none shrink-0 group-open:rotate-45 transition-transform"
                                                    aria-hidden="true"
                                                >
                                                    +
                                                </span>
                                            </summary>
                                            <div className="px-5 pb-5 text-gray-700 leading-8">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </section>
                        )}

                        <ArticleShare slug={slug} title={article.title} />
                    </div>
                </div>
            </article>

            {/* مقالات ذات صلة */}
            {related.length > 0 && (
                <section className="py-12 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                                اقرأ أيضاً
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {related.map((r) => (
                                    <Link
                                        key={r.slug}
                                        href={`/blog/${r.slug}`}
                                        className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                                    >
                                        <div className="aspect-[16/9] overflow-hidden">
                                            <GeoImage
                                                src={r.image}
                                                alt={r.imageAlt}
                                                sizes="(max-width: 768px) 100vw, 320px"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform !rounded-none"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <span className="text-xs text-amber-600 font-medium">
                                                {r.category}
                                            </span>
                                            <h3 className="font-bold text-gray-900 mt-1 mb-2 group-hover:text-amber-600 transition-colors leading-relaxed">
                                                {r.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">{r.readTime}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-amber-400 to-amber-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                        تحتاج مساعدة في مشروعك؟
                    </h2>
                    <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
                        فريقنا في جدة جاهز لتقديم استشارة مجانية وعرض سعر خلال ساعة عمل.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/quote"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            اطلب عرض سعر
                            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/prices"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            تصفّح الأسعار
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
