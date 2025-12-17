import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { sectionMetadata } from "@/lib/seo";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import {
    Signpost,
    Tag,
    Car,
    Wallpaper,
    Flag,
    Box,
    ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = sectionMetadata.signageStickers;

const SUB_SERVICES = [
    {
        title: "ملصقات المنتجات",
        titleEn: "Product Labels",
        description: "ستيكرات رول مخصصة للمنتجات والتغليف بجودة عالية",
        href: "/signage-stickers/product-labels",
        icon: Tag,
        image: "/images/custom-product-labels-roll-stickers-jeddah.webp",
    },
    {
        title: "تغليف السيارات",
        titleEn: "Vehicle Branding",
        description: "تغليف كامل أو جزئي للسيارات والشاحنات التجارية",
        href: "/signage-stickers/vehicle-branding",
        icon: Car,
        image: "/images/commercial-vehicle-branding-car-wrapping-jeddah.webp",
    },
    {
        title: "ستيكرات الجدران",
        titleEn: "Wall Decals",
        description: "ملصقات ديكورية للجدران والمكاتب والمحلات",
        href: "/signage-stickers/wall-decals",
        icon: Wallpaper,
        image: "/images/glass-window-frosted-sticker-branding.webp",
    },
    {
        title: "بانرات خارجية",
        titleEn: "Outdoor Banners",
        description: "لافتات فلكس كبيرة مقاومة للعوامل الجوية",
        href: "/signage-stickers/outdoor-banners",
        icon: Flag,
        image: "/images/outdoor-flex-banner-printing-large-format.webp",
    },
    {
        title: "لافتات 3D",
        titleEn: "3D Shop Signage",
        description: "حروف بارزة ثلاثية الأبعاد مضيئة للمحلات",
        href: "/signage-stickers/shop-signage-3d",
        icon: Box,
        image: "/images/3d-shop-signage-letters-acrylic-jeddah.webp",
    },
];

export default function SignageStickersPage() {
    const serviceSchema = generateServiceSchema({
        name: "Signage & Stickers Services",
        nameAr: "خدمات اللوحات والملصقات",
        description: "تصميم وتنفيذ لافتات المحلات 3D، تغليف السيارات، ملصقات المنتجات، وبانرات خارجية في جدة",
        url: "https://rawajgate.com/signage-stickers",
        image: "https://rawajgate.com/images/3d-shop-signage-letters-acrylic-jeddah.webp",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: "https://rawajgate.com" },
        { name: "لوحات وملصقات", url: "https://rawajgate.com/signage-stickers" },
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
                            <span className="text-amber-400">لوحات وملصقات</span>
                        </nav>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                <Signpost className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
                                    لوحات وملصقات
                                </h1>
                                <p className="text-white/70">Signage & Stickers Services</p>
                            </div>
                        </div>
                        <p className="text-xl text-white/80 leading-relaxed">
                            خدمات احترافية لتصميم وتنفيذ اللافتات والملصقات: <Link href="/signage-stickers/shop-signage-3d" className="text-purple-200 hover:text-white underline decoration-1 underline-offset-4">لافتات 3D للمحلات</Link>،
                            <Link href="/signage-stickers/vehicle-branding" className="text-purple-200 hover:text-white underline decoration-1 underline-offset-4">تغليف السيارات</Link>،
                            و <Link href="/signage-stickers/product-labels" className="text-purple-200 hover:text-white underline decoration-1 underline-offset-4">ملصقات المنتجات</Link>.
                            نستخدم أحدث التقنيات لضمان الجودة والمتانة. كما نقدم <Link href="/design-services/branding-identity" className="text-purple-200 hover:text-white underline decoration-1 underline-offset-4">خدمات تصميم الهوية</Link> لضمان ظهور علامتك بأفضل صورة.
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

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        تحتاج لافتة أو ملصقات مخصصة؟
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        تواصل معنا للحصول على عرض سعر مجاني ومعاينة موقع التركيب
                    </p>
                    <Link href="/quote" className="btn-primary inline-flex">
                        اطلب عرض سعر مجاني
                        <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
