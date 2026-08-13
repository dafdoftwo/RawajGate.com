import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowLeft } from "lucide-react";
import { getFAQsBySilo, TOTAL_FAQS } from "@/lib/faqs";
import { SILOS } from "@/lib/routes";
import { generateBreadcrumbSchema, generateFAQSchema, generateSpeakableWebPage } from "@/lib/schema";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
    title: "الأسئلة الشائعة عن الطباعة وتجهيز المعارض",
    description:
        "إجابات على أكثر الأسئلة تكراراً عن الطباعة التجارية، لافتات المحلات، تجهيز أجنحة المعارض، الهدايا الدعائية، والتصميم في جدة: المدد، الخامات، المقاسات، وطريقة الطلب.",
    alternates: { canonical: "/faq" },
    keywords: [
        "أسئلة الطباعة",
        "كم يستغرق طباعة",
        "أنواع الورق",
        "تجهيز معارض جدة",
        "مطبعة جدة",
    ],
    openGraph: {
        title: "الأسئلة الشائعة | بوابة الرواج",
        description:
            "إجابات مباشرة على أسئلة الطباعة وتجهيز المعارض واللافتات والهدايا الدعائية في جدة.",
        url: `${BUSINESS.url}/faq`,
        images: [
            {
                url: "/images/rawaj-gate-printing-workshop-team-at-work.webp",
                width: 1200,
                height: 630,
                alt: "الأسئلة الشائعة - بوابة الرواج",
            },
        ],
        locale: "ar_SA",
        type: "website",
    },
};

/** خريطة المسار → التسمية العربية، مبنية من routes.ts */
const ROUTE_LABELS: Record<string, string> = Object.fromEntries(
    SILOS.flatMap((silo) =>
        silo.spokes.map((spoke) => [`${silo.slug}/${spoke.slug}`, spoke.label])
    )
);

export default function FAQPage() {
    const groups = getFAQsBySilo();
    const allFaqs = groups.flatMap((g) => g.groups.flatMap((x) => x.faqs));

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: BUSINESS.url },
        { name: "الأسئلة الشائعة", url: `${BUSINESS.url}/faq` },
    ]);

    // كل الأسئلة مرئية على هذه الصفحة — شرط Google للـ FAQPage schema
    const faqSchema = generateFAQSchema(allFaqs, `${BUSINESS.url}/faq`);
  const speakableSchema = generateSpeakableWebPage({
    url: "https://rawajgate.com/faq",
    name: "الأسئلة الشائعة | بوابة الرواج",
    description: "إجابات مباشرة عن الطباعة التجارية ولافتات المحلات وتجهيز المعارض والهدايا الدعائية والتصميم في جدة: المدد الزمنية والخامات والمقاسات وطريقة الطلب.",
  });


    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

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
                            <li>
                                <span className="text-amber-400" aria-current="page">
                                    الأسئلة الشائعة
                                </span>
                            </li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                        الأسئلة الشائعة
                    </h1>

                    {/* إجابة مباشرة أعلى الصفحة — الصيغة التي تقتبسها محركات الإجابة */}
                    <p data-speakable="answer" className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
                        {TOTAL_FAQS} إجابة مباشرة عن الطباعة التجارية، لافتات المحلات، تجهيز
                        أجنحة المعارض، الهدايا الدعائية، والتصميم في جدة — المدد الزمنية،
                        الخامات، المقاسات، وطريقة الطلب.
                    </p>
                </div>
            </section>

            {/* فهرس الأقسام */}
            <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-16 lg:top-20 z-30">
                <div className="container mx-auto px-4">
                    <nav aria-label="أقسام الأسئلة" className="flex flex-wrap justify-center gap-3">
                        {groups.map((g) => (
                            <a
                                key={g.silo}
                                href={`#${g.silo}`}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-amber-400 hover:text-amber-600 transition-colors"
                            >
                                {g.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-16">
                        {groups.map((group) => (
                            <div key={group.silo} id={group.silo} className="scroll-mt-40">
                                <div className="flex items-center gap-3 mb-8">
                                    <HelpCircle className="w-6 h-6 text-amber-500" aria-hidden="true" />
                                    <h2 className="text-2xl font-heading font-bold text-gray-900">
                                        {group.label}
                                    </h2>
                                    <Link
                                        href={`/${group.silo}`}
                                        className="text-sm text-amber-600 hover:underline mr-auto"
                                    >
                                        تصفّح الخدمات
                                    </Link>
                                </div>

                                <div className="space-y-8">
                                    {group.groups.map(({ route, faqs }) => (
                                        <div key={route}>
                                            <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                                                <Link
                                                    href={`/${route}`}
                                                    className="hover:text-amber-600 transition-colors"
                                                >
                                                    {ROUTE_LABELS[route] ?? route}
                                                </Link>
                                            </h3>

                                            <div className="space-y-3">
                                                {faqs.map((faq) => (
                                                    <details
                                                        key={faq.question}
                                                        className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
                                                    >
                                                        <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none">
                                                            {/*
                                                              h4 داخل details — يبقى النص في الـ DOM دائماً
                                                              حتى وهو مطوي، فتقرأه محركات البحث ووكلاء الذكاء
                                                              الاصطناعي كاملاً.
                                                            */}
                                                            <h4 className="font-bold text-gray-900 leading-relaxed">
                                                                {faq.question}
                                                            </h4>
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
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4 text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                        لم تجد إجابة سؤالك؟
                    </h2>
                    <p className="text-gray-600 mb-8">
                        فريقنا في جدة جاهز للرد على استفسارك خلال ساعة عمل واحدة.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/quote"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors"
                        >
                            اسأل فريقنا
                            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/blog"
                            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-white transition-colors"
                        >
                            اقرأ أدلتنا الفنية
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );}
