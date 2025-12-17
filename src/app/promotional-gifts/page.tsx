import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { sectionMetadata } from "@/lib/seo";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import {
    Gift,
    Briefcase,
    Cpu,
    Shirt,
    ShoppingBag,
    ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = sectionMetadata.promotionalGifts;

const SUB_SERVICES = [
    {
        title: "هدايا مكتبية",
        titleEn: "Office Gifts",
        description: "أقلام، دفاتر، أجندات، ومجموعات هدايا مكتبية فاخرة",
        href: "/promotional-gifts/office-gifts",
        icon: Briefcase,
        image: "/images/branded-notebooks-diaries-calendar-gift-sets.webp",
    },
    {
        title: "هدايا تقنية",
        titleEn: "Tech Gadgets",
        description: "باور بانك، فلاشات USB، سماعات، وإكسسوارات تقنية",
        href: "/promotional-gifts/tech-gadgets",
        icon: Cpu,
        image: "/images/tech-gifts-powerbank-usb-branding.webp",
    },
    {
        title: "ملابس مطبوعة",
        titleEn: "Wearables",
        description: "تيشيرتات، بولو، كابات، وملابس موظفين بالشعار",
        href: "/promotional-gifts/wearables",
        icon: Shirt,
        image: "/images/logo-printed-tshirts-embroidery-polo.webp",
    },
    {
        title: "أكياس وتغليف",
        titleEn: "Bags & Packaging",
        description: "أكياس ورقية، قماشية، وصناديق هدايا مخصصة",
        href: "/promotional-gifts/bags-packaging",
        icon: ShoppingBag,
        image: "/images/custom-paper-bags-shopping-packaging.webp",
    },
];

export default function PromotionalGiftsPage() {
    const serviceSchema = generateServiceSchema({
        name: "Promotional Gifts Services",
        nameAr: "خدمات الهدايا الدعائية",
        description: "أقلام، دفاتر، هدايا تقنية، ملابس مطبوعة، وأكياس هدايا بشعار شركتك في جدة",
        url: "https://rawajgate.com/promotional-gifts",
        image: "https://rawajgate.com/images/corporate-promotional-gifts-jeddah-items.webp",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: "https://rawajgate.com" },
        { name: "هدايا دعائية", url: "https://rawajgate.com/promotional-gifts" },
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
                            <span className="text-amber-400">هدايا دعائية</span>
                        </nav>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                                <Gift className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
                                    هدايا دعائية
                                </h1>
                                <p className="text-white/70">Promotional Gifts</p>
                            </div>
                        </div>
                        <p className="text-xl text-white/80 leading-relaxed">
                            هدايا دعائية مميزة للشركات والمؤسسات: أقلام، دفاتر، <Link href="/promotional-gifts/tech-gadgets" className="text-amber-200 hover:text-white underline decoration-1 underline-offset-4">هدايا تقنية</Link>،
                            ملابس، و <Link href="/promotional-gifts/bags-packaging" className="text-amber-200 hover:text-white underline decoration-1 underline-offset-4">أكياس مطبوعة</Link> بشعار شركتك.
                            يمكننا أيضاً طباعة <Link href="/commercial-printing/flyers-brochures" className="text-amber-200 hover:text-white underline decoration-1 underline-offset-4">بروشورات تعريفية</Link>
                            لتوزع مع الهدايا.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {SUB_SERVICES.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="group block card-hover"
                            >
                                <div className="card overflow-hidden">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="relative w-full md:w-1/2 h-48 md:h-auto overflow-hidden">
                                            <GeoImage
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full"
                                            />
                                        </div>
                                        <div className="p-6 flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                                                    <service.icon className="w-5 h-5 text-amber-600" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900">{service.title}</h3>
                                                    <p className="text-xs text-gray-500">{service.titleEn}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                            <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 transition-all">
                                                <span>استعرض المنتجات</span>
                                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-[-4px] transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        الأكثر طلباً
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <GeoImage
                            src="/images/custom-printed-metal-plastic-pens.webp"
                            alt="أقلام مطبوعة"
                            className="rounded-xl"
                        />
                        <GeoImage
                            src="/images/corporate-promotional-gifts-jeddah-items.webp"
                            alt="هدايا شركات"
                            className="rounded-xl"
                        />
                        <GeoImage
                            src="/images/tech-gifts-powerbank-usb-branding.webp"
                            alt="هدايا تقنية"
                            className="rounded-xl"
                        />
                        <GeoImage
                            src="/images/branded-notebooks-diaries-calendar-gift-sets.webp"
                            alt="دفاتر وأجندات"
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-amber-400 to-amber-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        تبحث عن هدايا لشركتك؟
                    </h2>
                    <p className="text-gray-800 mb-8 max-w-xl mx-auto">
                        نقدم خصومات خاصة للكميات الكبيرة - تواصل معنا للحصول على أفضل الأسعار
                    </p>
                    <Link
                        href="/quote"
                        className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg inline-flex items-center"
                    >
                        اطلب عرض سعر بالجملة
                        <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
