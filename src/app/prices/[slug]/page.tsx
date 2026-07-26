import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";

import { BUSINESS, whatsappLink } from "@/lib/business";
import { PRICING_BLOCKS, getPricingBlock } from "@/lib/pricing";
import { PricingTable } from "@/components/pricing-table";
import {
    generateBreadcrumbSchema,
    generateFAQSchema,
    generateServiceSchema,
} from "@/lib/schema";

/**
 * قالب صفحات الأسعار الفرعية.
 * ملف واحد يخدم /prices/business-cards، /prices/roll-up-stands،
 * /prices/exhibition-booths، /prices/vehicle-wrapping، /prices/shop-signage.
 * البيانات كلها من lib/pricing.ts — لا تكرار.
 */

export function generateStaticParams() {
    return PRICING_BLOCKS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const block = getPricingBlock(slug);
    if (!block) return { title: "الصفحة غير موجودة" };

    return {
        title: `أسعار ${block.serviceName} في جدة`,
        description: block.directAnswer,
        alternates: { canonical: `/prices/${slug}` },
        keywords: [
            `أسعار ${block.serviceName}`,
            `سعر ${block.serviceName} جدة`,
            `تكلفة ${block.serviceName}`,
            `${block.serviceName} جدة`,
        ],
        openGraph: {
            title: `أسعار ${block.serviceName} في جدة | بوابة الرواج`,
            description: block.directAnswer,
            url: `${BUSINESS.url}/prices/${slug}`,
            images: [
                {
                    url: "/images/rawaj-gate-printing-workshop-team-at-work.webp",
                    width: 1200,
                    height: 630,
                    alt: `أسعار ${block.serviceName} في جدة`,
                },
            ],
            locale: "ar_SA",
            type: "website",
        },
    };
}

export default async function PriceDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const block = getPricingBlock(slug);
    if (!block) notFound();

    const url = `${BUSINESS.url}/prices/${slug}`;

    // FAQ مبنيّ من بيانات التسعير نفسها — يعمل تلقائياً لكل الصفحات
    const priceFaqs = [
        {
            question: `كم سعر ${block.serviceName} في جدة؟`,
            answer: block.directAnswer,
        },
        {
            question: `ما الذي يشمله سعر ${block.serviceName}؟`,
            answer: block.included.join("، ") + ".",
        },
        {
            question: `ما الذي لا يشمله السعر؟`,
            answer: block.excluded.join("، ") + ".",
        },
        {
            question: `ما العوامل التي تُغيّر السعر النهائي؟`,
            answer: block.factors.join("، ") + ".",
        },
        {
            question: `كيف أحصل على عرض سعر دقيق؟`,
            answer:
                "أرسل تفاصيل مشروعك (المواصفات، الكمية، الموعد) عبر نموذج طلب عرض السعر أو واتساب، ونرد بعرض مكتوب خلال ساعة عمل واحدة داخل ساعات الدوام.",
        },
    ];

    const schemas = [
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: BUSINESS.url },
            { name: "الأسعار", url: `${BUSINESS.url}/prices` },
            { name: `أسعار ${block.serviceName}`, url },
        ]),
        generateServiceSchema({
            name: `${block.serviceName} pricing`,
            nameAr: `أسعار ${block.serviceName} في جدة`,
            description: block.directAnswer,
            url,
            priceFrom: Math.min(...block.tiers.map((t) => t.priceFrom)),
            priceTo: Math.max(...block.tiers.map((t) => t.priceTo)),
        }),
        generateFAQSchema(priceFaqs, url),
    ];

    // spokes أخرى للتنقل داخل /prices
    const otherBlocks = PRICING_BLOCKS.filter((b) => b.slug !== slug);

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
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <nav aria-label="مسار التنقل" className="text-sm text-white/60 mb-4">
                        <ol className="flex items-center">
                            <li>
                                <Link href="/" className="hover:text-white">
                                    الرئيسية
                                </Link>
                            </li>
                            <li aria-hidden="true" className="mx-2">/</li>
                            <li>
                                <Link href="/prices" className="hover:text-white">
                                    الأسعار
                                </Link>
                            </li>
                            <li aria-hidden="true" className="mx-2">/</li>
                            <li>
                                <span className="text-amber-400" aria-current="page">
                                    {block.serviceName}
                                </span>
                            </li>
                        </ol>
                    </nav>

                    <div className="max-w-4xl">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                            أسعار {block.serviceName} في جدة
                        </h1>

                        {/*
                          الإجابة المباشرة — أول 60 كلمة مصوغة للاقتباس في
                          Featured Snippets وChatGPT وPerplexity.
                        */}
                        <div className="bg-white/5 backdrop-blur-sm border-r-4 border-amber-500 rounded-lg p-6 mb-8">
                            <p className="text-lg md:text-xl text-white leading-relaxed">
                                {block.directAnswer}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/quote"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-gray-900 font-bold rounded-lg hover:bg-amber-400 transition-colors"
                            >
                                احصل على عرض سعر مخصص
                                <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                            </Link>
                            <a
                                href={whatsappLink(
                                    `مرحباً، أريد عرض سعر لـ ${block.serviceName}`
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-colors"
                            >
                                <MessageCircle
                                    className="w-5 h-5 text-green-400"
                                    aria-hidden="true"
                                />
                                واتساب
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* الجدول الرئيسي */}
            <PricingTable block={block} />

            {/* الرابط إلى صفحة الخدمة الأصلية */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                            تريد معرفة تفاصيل الخدمة الكاملة؟
                        </h2>
                        <p className="text-gray-600 mb-6">
                            صفحة {block.serviceName} تشرح المواصفات الفنية والخامات وحالات
                            الاستخدام والأسئلة المتخصصة.
                        </p>
                        <Link
                            href={block.serviceUrl}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            تصفّح صفحة {block.serviceName}
                            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* الأسئلة الشائعة عن السعر */}
            <section className="py-16 bg-gray-50" aria-labelledby="price-faq">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2
                            id="price-faq"
                            className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8 text-center"
                        >
                            أسئلة شائعة عن سعر {block.serviceName}
                        </h2>

                        <div className="space-y-3">
                            {priceFaqs.map((faq, i) => (
                                <details
                                    key={faq.question}
                                    open={i === 0}
                                    className="group bg-white rounded-xl border border-gray-100 overflow-hidden"
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
                    </div>
                </div>
            </section>

            {/* أسعار خدمات أخرى — روابط داخلية */}
            <section
                className="py-16 bg-white border-t border-gray-100"
                aria-labelledby="other-prices"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2
                            id="other-prices"
                            className="text-2xl font-heading font-bold text-gray-900 mb-8"
                        >
                            أسعار خدمات أخرى قد تحتاجها
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {otherBlocks.map((other) => (
                                <Link
                                    key={other.slug}
                                    href={`/prices/${other.slug}`}
                                    className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-amber-400 hover:bg-white hover:shadow-md transition-all"
                                >
                                    <span className="block font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                                        أسعار {other.serviceName}
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                        {other.tiers.length} فئات سعرية
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
