import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { sectionMetadata } from "@/lib/seo";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import {
    Printer,
    CreditCard,
    FileText,
    FolderOpen,
    Mail,
    Receipt,
    UtensilsCrossed,
    ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = sectionMetadata.commercialPrinting;

const SUB_SERVICES = [
    {
        title: "بطاقات العمل",
        titleEn: "Business Cards",
        description: "بطاقات عمل فاخرة بتشطيبات متنوعة: لامع، مطفي، مخملي، ذهبي",
        href: "/commercial-printing/business-cards",
        icon: CreditCard,
        image: "/images/luxury-business-cards-printing-jeddah.webp",
    },
    {
        title: "فلايرات وبروشورات",
        titleEn: "Flyers & Brochures",
        description: "منشورات إعلانية مطوية بأحجام وتصميمات متعددة",
        href: "/commercial-printing/flyers-brochures",
        icon: FileText,
        image: "/images/advertising-flyers-brochures-tri-fold.webp",
    },
    {
        title: "ملفات العروض",
        titleEn: "Presentation Folders",
        description: "فولدرات احترافية بجيوب داخلية لعروض الشركات",
        href: "/commercial-printing/folders",
        icon: FolderOpen,
        image: "/images/presentation-folder-files-holder.webp",
    },
    {
        title: "ورق رسمي وظروف",
        titleEn: "Letterheads & Envelopes",
        description: "مطبوعات رسمية متكاملة بهوية شركتك",
        href: "/commercial-printing/letterheads",
        icon: Mail,
        image: "/images/corporate-letterhead-envelope-branding.webp",
    },
    {
        title: "دفاتر فواتير NCR",
        titleEn: "NCR Invoice Books",
        description: "دفاتر فواتير وإيصالات بنسخ كربونية متعددة",
        href: "/commercial-printing/ncr-books",
        icon: Receipt,
        image: "/images/ncr-invoice-books-receipts-printing.webp",
    },
    {
        title: "قوائم الطعام",
        titleEn: "Restaurant Menus",
        description: "منيوهات فاخرة بتغليف جلدي للمطاعم والكافيهات",
        href: "/commercial-printing/menus",
        icon: UtensilsCrossed,
        image: "/images/restaurant-menu-design-leather-cover.webp",
    },
];

export default function CommercialPrintingPage() {
    const serviceSchema = generateServiceSchema({
        name: "Commercial Printing Services",
        nameAr: "خدمات الطباعة التجارية",
        description: "طباعة بطاقات عمل، فلايرات، بروشورات، ملفات عروض، ورق رسمي، وقوائم طعام بجودة عالية في جدة",
        url: "https://rawajgate.com/commercial-printing",
        image: "https://rawajgate.com/images/luxury-business-cards-printing-jeddah.webp",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: "https://rawajgate.com" },
        { name: "مطبوعات تجارية", url: "https://rawajgate.com/commercial-printing" },
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
                            <span className="text-amber-400">مطبوعات تجارية</span>
                        </nav>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
                                <Printer className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
                                    مطبوعات تجارية
                                </h1>
                                <p className="text-white/70">Commercial Printing Services</p>
                            </div>
                        </div>
                        <p className="text-xl text-white/80 leading-relaxed">
                            خدمات طباعة تجارية احترافية لجميع احتياجات شركتك: <Link href="/commercial-printing/business-cards" className="text-amber-200 hover:text-white underline decoration-1 underline-offset-4">بطاقات العمل</Link>،
                            البروشورات، الملفات، المطبوعات الرسمية، وقوائم الطعام. إذا كنت بحاجة لتصميمها أولاً،
                            فريقنا يقدم <Link href="/design-services" className="text-amber-200 hover:text-white underline decoration-1 underline-offset-4">خدمات تصميم</Link> متكاملة بجودة استثنائية
                            وتسليم سريع في جدة.
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
                        تحتاج مطبوعات مخصصة؟
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        تواصل معنا للحصول على عرض سعر مجاني واستشارة تصميم من فريقنا المتخصص
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
