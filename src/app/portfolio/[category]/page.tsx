import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Layers } from "lucide-react";

import { GeoImage } from "@/components/geo-image";
import { BUSINESS } from "@/lib/business";
import {
    PORTFOLIO_CATEGORIES,
    getProjects,
    getCategoryCounts,
} from "@/lib/portfolio-data";
import { generateBreadcrumbSchema, generateItemListSchema } from "@/lib/schema";

/** مسارات ثابتة لتصنيفات الأعمال — بديل ?category= */
export function generateStaticParams() {
    return PORTFOLIO_CATEGORIES.filter((c) => c.id !== "all").map((c) => ({
        category: c.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ category: string }>;
}): Promise<Metadata> {
    const { category } = await params;
    const cat = PORTFOLIO_CATEGORIES.find((c) => c.id === category);
    if (!cat) return { title: "التصنيف غير موجود" };

    return {
        title: `أعمالنا في ${cat.label}`,
        description: `نماذج من مشاريع ${cat.label} التي نفّذناها في جدة والمنطقة الغربية.`,
        alternates: { canonical: `/portfolio/${category}` },
        openGraph: {
            title: `أعمالنا في ${cat.label} | بوابة الرواج`,
            description: `مشاريع ${cat.label} منفذة في جدة.`,
            url: `${BUSINESS.url}/portfolio/${category}`,
            images: [
                {
                    url: "/images/print-shop-exhibition-services-saudi-arabia.webp",
                    width: 1200,
                    height: 630,
                    alt: `أعمال ${cat.label}`,
                },
            ],
            locale: "ar_SA",
            type: "website",
        },
    };
}

export default async function PortfolioCategoryPage({
    params,
}: {
    params: Promise<{ category: string }>;
}) {
    const { category } = await params;
    const cat = PORTFOLIO_CATEGORIES.find((c) => c.id === category);
    if (!cat) notFound();

    const projects = getProjects(category);
    const counts = getCategoryCounts();

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: BUSINESS.url },
        { name: "أعمالنا", url: `${BUSINESS.url}/portfolio` },
        { name: cat.label, url: `${BUSINESS.url}/portfolio/${category}` },
    ]);

    const listSchema = generateItemListSchema(
        projects.map((p) => ({
            name: p.title,
            url: `/portfolio/${category}#${p.slug}`,
            description: p.summary,
            image: p.image,
        })),
        `أعمال ${cat.label}`
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
                            <li><Link href="/portfolio" className="hover:text-white">أعمالنا</Link></li>
                            <li aria-hidden="true" className="mx-2">/</li>
                            <li><span className="text-amber-400" aria-current="page">{cat.label}</span></li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                        أعمالنا في {cat.label}
                    </h1>
                    <p className="text-white/70">
                        {projects.length} {projects.length === 1 ? "مشروع" : "مشاريع"} منفذة في جدة
                    </p>
                </div>
            </section>

            <section className="py-6 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
                <div className="container mx-auto px-4">
                    <nav aria-label="فلترة الأعمال" className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {PORTFOLIO_CATEGORIES.filter(
                            (c) => c.id === "all" || (counts[c.id] ?? 0) > 0
                        ).map((c) => {
                            const active = c.id === category;
                            const href = c.id === "all" ? "/portfolio" : `/portfolio/${c.id}`;
                            return (
                                <Link
                                    key={c.id}
                                    href={href}
                                    aria-current={active ? "page" : undefined}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                        active
                                            ? "bg-amber-500 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {c.label}
                                    <span className={`text-xs ${active ? "text-white/80" : "text-gray-500"}`}>
                                        ({counts[c.id] ?? 0})
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {projects.map((project) => (
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
                                </Link>
                                <div className="p-6">
                                    <h2 className="font-bold text-gray-900 mb-2 text-lg leading-relaxed">
                                        <Link href={project.serviceUrl} className="hover:text-amber-600 transition-colors">
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
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-amber-400 to-amber-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                        مشروعك القادم يستحق نفس العناية
                    </h2>
                    <Link
                        href="/quote"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        اطلب عرض سعر مجاني
                        <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </>
    );
}
