import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Layers, MessageCircle } from "lucide-react";
import { GeoImage } from "@/components/geo-image";
import { BUSINESS, whatsappLink } from "@/lib/business";
import {
    PORTFOLIO_PROJECTS,
    PORTFOLIO_CATEGORIES,
    getProjects,
    getCategoryCounts,
} from "@/lib/portfolio-data";
import {
    generateBreadcrumbSchema,
    generateItemListSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
    title: "معرض أعمالنا في جدة والمنطقة الغربية",
    description:
        "نماذج من مشاريعنا المنفذة في جدة: تجهيز أجنحة المعارض، لافتات المحلات ثلاثية الأبعاد، تغليف السيارات، ملصقات المنتجات، والهدايا الدعائية.",
    alternates: { canonical: "/portfolio" },
    keywords: [
        "معرض أعمال بوابة الرواج",
        "مشاريع طباعة جدة",
        "أجنحة معارض منفذة",
        "لافتات محلات جدة",
    ],
    openGraph: {
        title: "معرض أعمالنا في جدة والمنطقة الغربية | بوابة الرواج",
        description:
            "نماذج من مشاريعنا: أجنحة معارض، لافتات محلات 3D، تغليف سيارات، ومطبوعات — كلها منفذة في ورشتنا بحي الروضة.",
        url: `${BUSINESS.url}/portfolio`,
        images: [
            {
                url: "/images/print-shop-exhibition-services-saudi-arabia.webp",
                width: 1200,
                height: 630,
                alt: "معرض أعمال بوابة الرواج في جدة",
            },
        ],
        locale: "ar_SA",
        type: "website",
    },
};

export default async function PortfolioPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>;
}) {
    const { category } = await searchParams;
    const activeCategory = category ?? "all";
    const projects = getProjects(activeCategory);
    const counts = getCategoryCounts();

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: BUSINESS.url },
        { name: "أعمالنا", url: `${BUSINESS.url}/portfolio` },
    ]);

    // ItemList schema — تُعرّف Google أن هذه صفحة معرض أعمال
    const listSchema = generateItemListSchema(
        PORTFOLIO_PROJECTS.map((p) => ({
            name: p.title,
            url: `/portfolio#${p.slug}`,
            description: p.summary,
            image: p.image,
        })),
        "أعمال بوابة الرواج في جدة"
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

            {/* البطل */}
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
                                    أعمالنا
                                </span>
                            </li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                        معرض أعمالنا في جدة
                    </h1>

                    <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
                        نماذج من مشاريع نفّذناها لعملاء في جدة والمنطقة الغربية —
                        من تجهيز أجنحة المعارض إلى لافتات المحلات وتغليف الأساطيل
                        والمطبوعات التجارية.
                    </p>

                    {/*
                      تنبيه شفافية — أهم من الادعاء بأرقام مضخّمة.
                      محركات الذكاء الاصطناعي وGoogle تكافئ الصدق: "بعض
                      المشاريع" أقوى إشارة من "50,000 مشروع" غير موثّق.
                    */}
                    <p className="text-white/50 text-sm mt-4">
                        الصور معروضة بموافقة العملاء أو بأسماء مجهّلة حفاظاً على الخصوصية.
                    </p>
                </div>
            </section>

            {/* شريط الفلترة — يعمل عبر ?category= (بدون JavaScript) */}
            <section className="py-6 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
                <div className="container mx-auto px-4">
                    <nav
                        aria-label="فلترة أعمالنا حسب القسم"
                        className="flex flex-wrap justify-center gap-2 md:gap-3"
                    >
                        {PORTFOLIO_CATEGORIES
                            // أخفِ التصنيفات الفارغة (تظهر "0" يقلل من الثقة)
                            .filter((cat) => cat.id === "all" || (counts[cat.id] ?? 0) > 0)
                            .map((cat) => {
                            const isActive = activeCategory === cat.id;
                            const href = cat.id === "all" ? "/portfolio" : `/portfolio?category=${cat.id}`;
                            const count = counts[cat.id] ?? 0;
                            return (
                                <Link
                                    key={cat.id}
                                    href={href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                        isActive
                                            ? "bg-amber-500 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    <span>{cat.label}</span>
                                    <span
                                        className={`text-xs ${
                                            isActive ? "text-white/80" : "text-gray-500"
                                        }`}
                                    >
                                        ({count})
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </section>

            {/* شبكة المشاريع */}
            <section className="py-16 bg-gray-50" aria-label="قائمة المشاريع">
                <div className="container mx-auto px-4">
                    {projects.length === 0 ? (
                        <p className="text-center text-gray-500 py-12">
                            لا توجد مشاريع في هذا التصنيف حالياً.{" "}
                            <Link href="/portfolio" className="text-amber-600 hover:underline">
                                عرض كل الأعمال
                            </Link>
                        </p>
                    ) : (
                        <>
                            <p className="text-sm text-gray-500 mb-6 text-center">
                                عرض <strong className="text-gray-900">{projects.length}</strong>{" "}
                                {projects.length === 1 ? "مشروع" : "مشاريع"}
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {projects.map((project) => {
                                    const catLabel =
                                        PORTFOLIO_CATEGORIES.find((c) => c.id === project.category)?.label ??
                                        project.category;
                                    return (
                                        <article
                                            key={project.slug}
                                            id={project.slug}
                                            className="scroll-mt-40 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
                                        >
                                            <Link
                                                href={project.serviceUrl}
                                                className="block relative aspect-[4/3] overflow-hidden"
                                            >
                                                <GeoImage
                                                    src={project.image}
                                                    alt={`${project.title} — ${project.clientAnonymized}`}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 !rounded-none"
                                                />
                                                <div className="absolute top-3 right-3">
                                                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                                                        {catLabel}
                                                    </span>
                                                </div>
                                            </Link>

                                            <div className="p-6">
                                                <h2 className="font-bold text-gray-900 mb-2 text-lg leading-relaxed">
                                                    <Link
                                                        href={project.serviceUrl}
                                                        className="hover:text-amber-600 transition-colors"
                                                    >
                                                        {project.title}
                                                    </Link>
                                                </h2>

                                                <p className="text-sm text-amber-600 mb-3 font-medium">
                                                    العميل: {project.clientAnonymized}
                                                </p>

                                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                                    {project.summary}
                                                </p>

                                                <dl className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                                                    <div className="flex items-center gap-1">
                                                        <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                                                        <dt className="sr-only">النطاق:</dt>
                                                        <dd>{project.scope}</dd>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                                                        <dt className="sr-only">السنة:</dt>
                                                        <dd>{project.year}</dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-amber-400 to-amber-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                        مشروعك القادم يستحق نفس العناية
                    </h2>
                    <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
                        سواء كان جناح معرض متكامل أو 500 بطاقة عمل، عملية العمل واحدة:
                        عرض واضح، تصميم معتمد، تنفيذ في الموعد.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/quote"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
                        >
                            اطلب عرض سعر مجاني
                            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                        </Link>
                        <a
                            href={whatsappLink("مرحباً، شفت أعمالكم وأود مناقشة مشروع")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            <MessageCircle
                                className="w-5 h-5 text-green-600"
                                aria-hidden="true"
                            />
                            محادثة واتساب
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
