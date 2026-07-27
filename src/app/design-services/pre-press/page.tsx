import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { DesignServicesFaqs } from "@/lib/faqs/design-services";
import {
    Settings,
    ArrowLeft,
    FileCheck,
    Palette,
    Ruler,
    Printer,
    Image,
    BookOpen,
    Package,
} from "lucide-react";

export const metadata: Metadata = {
    openGraph: {
        title: "خدمات ما قبل الطباعة (Pre-Press) في جدة | بوابة الرواج",
        description: "خدمات ما قبل الطباعة (Pre-Press) في جدة: تحويل ألوان CMYK، فحص ملفات PDF، تجهيز Bleed، تصحيح الصور. ضمان طباعة مثالية بدون أخطاء.",
        url: "https://rawajgate.com/design-services/pre-press",
        images: [{ url: "/images/printing-machines-digital-offset-equipment.webp", width: 1200, height: 630, alt: "خدمات ما قبل الطباعة (Pre-Press) في جدة" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "خدمات ما قبل الطباعة (Pre-Press) في جدة",
        description: "خدمات ما قبل الطباعة (Pre-Press) في جدة: تحويل ألوان CMYK، فحص ملفات PDF، تجهيز Bleed، تصحيح الصور. ضمان طباعة مثالية بدون أخطاء.",
        images: ["/images/printing-machines-digital-offset-equipment.webp"],
    },
    alternates: { canonical: "/design-services/pre-press" },
    title: "خدمات ما قبل الطباعة (Pre-Press) في جدة",
    description: "خدمات ما قبل الطباعة (Pre-Press) في جدة: تحويل ألوان CMYK، فحص ملفات PDF، تجهيز Bleed، تصحيح الصور. ضمان طباعة مثالية بدون أخطاء.",
    keywords: ["ما قبل الطباعة", "pre-press jeddah", "تجهيز ملفات طباعة", "CMYK", "تصحيح ألوان"],
};

const SERVICES = [
    { name: "تحويل ألوان CMYK", desc: "ضبط الألوان من RGB لـ CMYK لنتائج دقيقة", icon: Palette },
    { name: "فحص ملفات PDF/X", desc: "التأكد من صلاحية الملف للطباعة", icon: FileCheck },
    { name: "إضافة Bleed", desc: "هوامش قص لتجنب الحواف البيضاء", icon: Ruler },
    { name: "تصحيح الصور", desc: "تحسين الحدة والتباين للطباعة", icon: Settings },
];

const TECH_SPECS = [
    { spec: "دقة الصور", value: "300 DPI مينيمم" },
    { spec: "صيغ الملفات", value: "PDF/X-1a, AI, PSD" },
    { spec: "نظام الألوان", value: "CMYK" },
    { spec: "هامش القص", value: "3-5 مم Bleed" },
    { spec: "وقت الفحص", value: "1-2 ساعة" },
    { spec: "البرامج", value: "Adobe CC" },
];

const USE_CASES = [
    { icon: Printer, title: "الطباعة التجارية", desc: "بروشورات وملفات" },
    { icon: Image, title: "الطباعة الكبيرة", desc: "لافتات وبنرات" },
    { icon: BookOpen, title: "المجلات", desc: "كتالوجات وكتب" },
    { icon: Package, title: "التغليف", desc: "علب وأكياس" },
];

const FAQS = DesignServicesFaqs["design-services/pre-press"];

export default function PrePressPage() {
    const schemas = [
        generateServiceSchema({
            name: "Pre-Press Services Jeddah",
            nameAr: "خدمات ما قبل الطباعة",
            description: "خدمات ما قبل الطباعة: تحويل ألوان، فحص ملفات، تجهيز للطباعة في جدة",
            url: "https://rawajgate.com/design-services/pre-press",
            image: "https://rawajgate.com/images/printing-machines-digital-offset-equipment.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "خدمات التصميم", url: "https://rawajgate.com/design-services" },
            { name: "ما قبل الطباعة", url: "https://rawajgate.com/design-services/pre-press" },
        ]),
        generateFAQSchema(FAQS),
    ];

    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}

            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <nav className="text-sm text-white/60 mb-4">
                                <Link href="/" className="hover:text-white">الرئيسية</Link>
                                <span className="mx-2">/</span>
                                <Link href="/design-services" className="hover:text-white">خدمات التصميم</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">ما قبل الطباعة</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">Pre-Press</span> لطباعة مثالية
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                خدمات ما قبل الطباعة (Pre-Press) هي الخطوة الحاسمة بين التصميم والنتيجة
                                النهائية لضمان جودة <Link href="/commercial-printing/flyers-brochures" className="text-sky-200 underline">البروشورات والمطبوعات</Link>. نفحص ملفاتك، نصحح الألوان، نضيف هوامش القص، ونضمن أن الطباعة
                                ستكون مطابقة لتوقعاتك.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                فريق متخصص بخبرة +15 سنة في إعداد الملفات للطباعة. نستخدم أحدث برامج
                                Adobe ومعايير PDF/X الدولية.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                أرسل ملفك للفحص <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/printing-machines-digital-offset-equipment.webp"
                            alt="خدمات ما قبل الطباعة في جدة"
                            
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        الخدمات المقدمة
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {SERVICES.map((service) => (
                            <div key={service.name} className="card p-6 text-center">
                                <service.icon className="w-10 h-10 text-sky-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                                <p className="text-gray-600 text-sm">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
                        لماذا Pre-Press مهم؟
                    </h2>
                    <div className="prose prose-lg text-gray-700 mx-auto">
                        <p>
                            الشاشات تعرض الألوان بنظام <strong>RGB</strong> (أحمر، أخضر، أزرق)، بينما
                            المطابع تستخدم <strong>CMYK</strong> (سماوي، ماجنتا، أصفر، أسود). هذا الفرق
                            يعني أن الألوان الزاهية على الشاشة قد تظهر باهتة عند الطباعة!
                        </p>
                        <p>
                            خدمة Pre-Press تضبط الألوان لتكون <strong>أقرب ما يمكن للمتوقع</strong>،
                            وتتأكد أن الخطوط محملة، والصور بدقة كافية (300 DPI)، والملف بصيغة صحيحة.
                        </p>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        أين تُستخدم خدمة Pre-Press؟
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {USE_CASES.map((useCase) => (
                            <div key={useCase.title} className="card p-6 text-center card-hover">
                                <useCase.icon className="w-10 h-10 text-sky-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{useCase.title}</h3>
                                <p className="text-gray-600 text-sm">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Specs */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <GeoImage
                            src="/images/printing-machines-digital-offset-equipment.webp"
                            alt="معدات الطباعة وخدمات Pre-Press"
                            
                            
                            className="rounded-2xl shadow-xl"
                        />
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية
                            </h2>
                            <p className="text-gray-600 mb-8">
                                معايير دولية لضمان جودة الطباعة
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {TECH_SPECS.map((item) => (
                                    <div key={item.spec} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-sm text-gray-500 mb-1">{item.spec}</div>
                                        <div className="font-bold text-gray-900">{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extended SEO Content */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                            دليلك الشامل لخدمات ما قبل الطباعة في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">ما هي خدمة Pre-Press؟</h3>
                            <p>
                                Pre-Press (ما قبل الطباعة) هي مجموعة العمليات التي تحول تصميمك الرقمي إلى ملف جاهز للطباعة.
                                تشمل فحص الملف، تحويل الألوان، إضافة هوامش القص، والتأكد من دقة الصور.
                                هذه الخطوة حاسمة لأن أي خطأ هنا سيظهر في آلاف النسخ المطبوعة!
                                في بوابة الرواج، فريق Pre-Press لدينا بخبرة +15 سنة يضمن نتائج مثالية.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا الألوان تختلف بين الشاشة والطباعة؟</h3>
                            <p>
                                الشاشات تستخدم نظام <strong>RGB</strong> (أحمر، أخضر، أزرق) الذي يعطي ملايين الألوان الزاهية.
                                المطابع تستخدم <strong>CMYK</strong> (سماوي، ماجنتا، أصفر، أسود) بنطاق ألوان أضيق.
                                بعض الألوان الزاهية (خاصة الأخضر الفاتح والبرتقالي) لا يمكن طباعتها بدقة.
                                خدمة Pre-Press تحول الألوان بطريقة ذكية للحصول على أقرب نتيجة ممكنة.
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/printing-machines-digital-offset-equipment.webp"
                                    alt="فريق تجهيز الملفات للطباعة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                    alt="مراجعة البروفة مع العميل"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أخطاء شائعة نصححها</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li><strong>صور بدقة منخفضة:</strong> صور الإنترنت (72 DPI) تظهر مشوشة عند الطباعة</li>
                                <li><strong>خطوط غير محملة:</strong> الخطوط المفقودة تُستبدل بخطوط أخرى</li>
                                <li><strong>ألوان RGB:</strong> تظهر باهتة أو مختلفة عند الطباعة</li>
                                <li><strong>بدون Bleed:</strong> حواف بيضاء عند القص</li>
                                <li><strong>نص على الحافة:</strong> قد يُقص جزء من النص</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج للـ Pre-Press؟</h3>
                            <p>
                                في بوابة الرواج، نستخدم أحدث برامج Adobe وCaldera وEFI.
                                فريق متخصص بخبرة +15 سنة في تجهيز ملفات الطباعة.
                                نتبع معايير PDF/X الدولية. فحص مجاني مع كل طلب طباعة.
                                نخدم المطابع والوكالات الإعلانية والشركات الكبرى في جدة.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 text-center">الأسئلة الشائعة</h2>
                    <p className="text-gray-600 text-center mb-12">
                        كل ما تريد معرفته عن خدمات ما قبل الطباعة
                    </p>
                    <div className="space-y-6">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="card p-6">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">جاهز لطباعة مثالية؟</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        أرسل ملفك ونحن نتكفل بتجهيزه للطباعة
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="px-8 py-4 bg-white text-sky-600 font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-100 transition-all">
                            أرسل ملفك <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/966548923300?text=أريد فحص ملف للطباعة"
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition-all"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        <RelatedServices currentPath="/design-services/pre-press" />
        </>
    );
}
