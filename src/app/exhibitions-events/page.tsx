import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { sectionMetadata } from "@/lib/seo";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import {
    CalendarDays,
    Layers,
    Maximize,
    Trees,
    Grid3X3,
    Store,
    ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = sectionMetadata.exhibitionsEvents;

const SUB_SERVICES = [
    {
        title: "رول أب ستاند",
        titleEn: "Roll-up Stands",
        description: "ستاندات قابلة للطي بأحجام متعددة للمعارض والفعاليات",
        href: "/exhibitions-events/roll-up-stands",
        icon: Layers,
        image: "/images/roll-up-stand-banner-85x200.webp",
    },
    {
        title: "بوب أب ديسبلاي",
        titleEn: "Pop-up Displays",
        description: "شاشات عرض كبيرة وخلفيات ميديا وول للمؤتمرات",
        href: "/exhibitions-events/pop-up-displays",
        icon: Maximize,
        image: "/images/pop-up-display-media-wall-background.webp",
    },
    {
        title: "أجنحة خشبية مخصصة",
        titleEn: "Custom Wood Booths",
        description: "تصميم وتنفيذ أجنحة معارض خشبية حسب الطلب",
        href: "/exhibitions-events/custom-wood-booths",
        icon: Trees,
        image: "/images/custom-wooden-stand-jeddah-super-dome.webp",
    },
    {
        title: "نظام أوكتانورم",
        titleEn: "System Booths",
        description: "أجنحة شل سكيم جاهزة للتركيب والتفكيك السريع",
        href: "/exhibitions-events/system-booths",
        icon: Grid3X3,
        image: "/images/octanorm-system-booth-shell-scheme.webp",
    },
    {
        title: "كاونترات ترويجية",
        titleEn: "Promo Counters",
        description: "طاولات عرض متنقلة للتسويق الميداني والمولات",
        href: "/exhibitions-events/promo-counters",
        icon: Store,
        image: "/images/promotion-counter-table-portable-kiosk.webp",
    },
];

export default function ExhibitionsEventsPage() {
    const serviceSchema = generateServiceSchema({
        name: "Exhibition & Events Services",
        nameAr: "خدمات المعارض والفعاليات",
        description: "تجهيز أجنحة معارض، رول أب، بوب أب، كاونترات ترويجية، وخلفيات مسرح في جدة والمملكة",
        url: "https://rawajgate.com/exhibitions-events",
        image: "https://rawajgate.com/images/exhibition-booth-fabrication-design-jeddah.webp",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: "https://rawajgate.com" },
        { name: "معارض وفعاليات", url: "https://rawajgate.com/exhibitions-events" },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Hero */}
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <nav className="text-sm text-white/60 mb-4">
                            <Link href="/" className="hover:text-white">الرئيسية</Link>
                            <span className="mx-2">/</span>
                            <span className="text-amber-400">معارض وفعاليات</span>
                        </nav>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                                <CalendarDays className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
                                    معارض وفعاليات
                                </h1>
                                <p className="text-white/70">Exhibitions & Events Services</p>
                            </div>
                        </div>
                        <p className="text-xl text-white/80 leading-relaxed">
                            خدمات متكاملة لتجهيز المعارض والفعاليات: <Link href="/exhibitions-events/custom-wood-booths" className="text-emerald-200 hover:text-white underline decoration-1 underline-offset-4">أجنحة مخصصة</Link>،
                            ستاندات، <Link href="/exhibitions-events/promo-counters" className="text-emerald-200 hover:text-white underline decoration-1 underline-offset-4">كاونترات ترويجية</Link>،
                            وخلفيات مسرح. لا تنسَ تجهيز <Link href="/promotional-gifts" className="text-emerald-200 hover:text-white underline decoration-1 underline-offset-4">الهدايا الدعائية</Link>
                            لتوزيعها على زوار جناحك.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SUB_SERVICES.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="group block card-hover"
                            >
                                <div className="card overflow-hidden">
                                    <div className="relative h-48 overflow-hidden">
                                        <GeoImage
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 right-4 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                                                <service.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-white font-bold">{service.title}</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 transition-all">
                                            <span>اطلب الآن</span>
                                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-[-4px] transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Work */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        من أعمالنا في المعارض
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <GeoImage
                            src="/images/exhibition-booth-fabrication-design-jeddah.webp"
                            alt="جناح معرض مخصص"
                            className="rounded-xl"
                        />
                        <GeoImage
                            src="/images/event-stage-backdrop-production-jeddah.webp"
                            alt="خلفية مسرح"
                            className="rounded-xl"
                        />
                        <GeoImage
                            src="/images/custom-wooden-stand-jeddah-super-dome.webp"
                            alt="ستاند خشبي"
                            className="rounded-xl"
                        />
                        <GeoImage
                            src="/images/print-shop-exhibition-services-saudi-arabia.webp"
                            alt="خدمات معارض"
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-amber-400 to-amber-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        لديك معرض قادم؟
                    </h2>
                    <p className="text-gray-800 mb-8 max-w-xl mx-auto">
                        تواصل معنا الآن للحصول على استشارة مجانية وتصميم ثلاثي الأبعاد لجناحك
                    </p>
                    <Link
                        href="/quote"
                        className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg inline-flex items-center"
                    >
                        اطلب استشارة مجانية
                        <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
