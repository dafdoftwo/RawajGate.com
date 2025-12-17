import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { Settings, ArrowLeft, FileCheck, Palette, Ruler, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "خدمات ما قبل الطباعة في جدة | Pre-Press | بوابة الرواج",
    description: "خدمات ما قبل الطباعة (Pre-Press) في جدة: تحويل ألوان CMYK، فحص ملفات PDF، تجهيز Bleed، تصحيح الصور. ضمان طباعة مثالية بدون أخطاء.",
    keywords: ["ما قبل الطباعة", "pre-press jeddah", "تجهيز ملفات طباعة", "CMYK", "تصحيح ألوان"],
};

const SERVICES = [
    { name: "تحويل ألوان CMYK", desc: "ضبط الألوان من RGB لـ CMYK لنتائج دقيقة", icon: Palette },
    { name: "فحص ملفات PDF/X", desc: "التأكد من صلاحية الملف للطباعة", icon: FileCheck },
    { name: "إضافة Bleed", desc: "هوامش قص لتجنب الحواف البيضاء", icon: Ruler },
    { name: "تصحيح الصور", desc: "تحسين الحدة والتباين للطباعة", icon: Settings },
];

const FAQS = [
    {
        question: "لماذا أحتاج خدمة Pre-Press؟",
        answer: "الملفات المصممة للشاشة (RGB) تظهر مختلفة عند الطباعة (CMYK). خدمة Pre-Press تضمن أن ألوانك ستطبع كما تتوقع، وأن الملف خالي من الأخطاء التقنية.",
    },
    {
        question: "هل الخدمة مشمولة في سعر الطباعة؟",
        answer: "نعم، الفحص الأساسي مجاني مع أي طلب طباعة. التصحيحات المتقدمة (تحرير الصور، إعادة تصميم) تُسعّر حسب الوقت المطلوب.",
    },
];

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
                            district="المنطقة الصناعية"
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

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">الأسئلة الشائعة</h2>
                    <div className="space-y-6">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="card p-6">
                                <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">جاهز لطباعة مثالية؟</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-sky-600 font-bold rounded-lg inline-flex items-center">
                        أرسل ملفك <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
