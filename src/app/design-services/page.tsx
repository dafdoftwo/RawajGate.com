import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { sectionMetadata } from "@/lib/seo";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import {
    Palette,
    Fingerprint,
    PenTool,
    FileCheck,
    ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = sectionMetadata.designServices;

const SUB_SERVICES = [
    {
        title: "هوية بصرية",
        titleEn: "Branding Identity",
        description: "تصميم هوية بصرية متكاملة تعكس قيم ورسالة شركتك",
        href: "/design-services/branding-identity",
        icon: Fingerprint,
        image: "/images/client-meeting-office-al-rawaj-jeddah.webp",
    },
    {
        title: "تصميم شعارات",
        titleEn: "Logo Design",
        description: "شعارات مبتكرة ومميزة تبقى في الأذهان",
        href: "/design-services/logo-design",
        icon: PenTool,
        image: "/images/presentation-folder-files-holder.webp",
    },
    {
        title: "تجهيز ملفات الطباعة",
        titleEn: "Pre-Press",
        description: "إعداد وتجهيز الملفات للطباعة بأعلى جودة",
        href: "/design-services/pre-press",
        icon: FileCheck,
        image: "/images/printing-machines-digital-offset-equipment.webp",
    },
];

export default function DesignServicesPage() {
    const serviceSchema = generateServiceSchema({
        name: "Design Services",
        nameAr: "خدمات التصميم",
        description: "تصميم هوية بصرية، شعارات، وتجهيز ملفات الطباعة بأيدي مصممين محترفين في جدة",
        url: "https://rawajgate.com/design-services",
        image: "https://rawajgate.com/images/client-meeting-office-al-rawaj-jeddah.webp",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: "https://rawajgate.com" },
        { name: "خدمات التصميم", url: "https://rawajgate.com/design-services" },
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
                            <span className="text-amber-400">خدمات التصميم</span>
                        </nav>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                                <Palette className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
                                    خدمات التصميم
                                </h1>
                                <p className="text-white/70">Design Services</p>
                            </div>
                        </div>
                        <p className="text-xl text-white/80 leading-relaxed">
                            فريق مصممين محترفين لخدمتك في تصميم <Link href="/design-services/branding-identity" className="text-rose-200 hover:text-white underline decoration-1 underline-offset-4">الهوية البصرية</Link>،
                            <Link href="/design-services/logo-design" className="text-rose-200 hover:text-white underline decoration-1 underline-offset-4">الشعارات</Link>،
                            و <Link href="/design-services/pre-press" className="text-rose-200 hover:text-white underline decoration-1 underline-offset-4">تجهيز ملفات الطباعة</Link>.
                            تصاميمنا جاهزة للتنفيذ فوراً في قسم <Link href="/commercial-printing" className="text-rose-200 hover:text-white underline decoration-1 underline-offset-4">المطبوعات التجارية</Link> لدينا.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {SUB_SERVICES.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="group block card-hover"
                            >
                                <div className="card overflow-hidden h-full">
                                    <div className="relative h-56 overflow-hidden">
                                        <GeoImage
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 to-transparent" />
                                        <div className="absolute bottom-4 right-4 left-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                                                    <service.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                                    <p className="text-white/70 text-sm">{service.titleEn}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <div className="flex items-center text-rose-600 font-medium text-sm group-hover:gap-3 transition-all">
                                            <span>اكتشف المزيد</span>
                                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-[-4px] transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
                        كيف نعمل
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "الاستشارة", desc: "نفهم احتياجاتك ورؤيتك" },
                            { step: "02", title: "التصميم", desc: "نقدم مقترحات متعددة" },
                            { step: "03", title: "التعديل", desc: "نطور التصميم حتى الكمال" },
                            { step: "04", title: "التسليم", desc: "ملفات جاهزة للطباعة" },
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-rose-600">{item.step}</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-rose-500 to-rose-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        تحتاج مساعدة في التصميم؟
                    </h2>
                    <p className="text-white/90 mb-8 max-w-xl mx-auto">
                        احجز استشارة تصميم مجانية مع فريقنا المحترف
                    </p>
                    <Link
                        href="/quote"
                        className="px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center"
                    >
                        احجز استشارة مجانية
                        <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
