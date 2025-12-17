import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { Store, ArrowLeft, Package, Lightbulb, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "كاونترات ترويجية للمعارض في جدة | Promo Counters | بوابة الرواج",
    description: "كاونترات ترويجية (Promo Counters) للمعارض والتذوق في جدة. قابلة للطي، خفيفة، جرافيك قابل للتغيير. مثالية للتسويق المباشر وتوزيع العينات.",
    keywords: ["كاونتر ترويجي", "promo counter jeddah", "طاولة معرض", "عربة تذوق", "كاونتر توزيع"],
};

const COUNTER_TYPES = [
    { name: "كاونتر قابل للطي", desc: "خفيف جداً، ينطوي في حقيبة، للتنقل بين الفروع", price: "من 350 ريال", icon: Package },
    { name: "كاونتر مضيء LED", desc: "إضاءة داخلية، تأثير فاخر ليلاً", price: "من 800 ريال", icon: Lightbulb },
    { name: "كاونتر خشب MDF", desc: "ثابت ومتين، للاستخدام المتكرر في المحل", price: "من 600 ريال", icon: Store },
];

const FAQS = [
    {
        question: "ما وزن الكاونتر القابل للطي؟",
        answer: "كاونتر الفابريك أو الببلستيك يزن 5-8 كجم فقط، يأتي مع حقيبة حمل. سهل النقل لشخص واحد.",
    },
    {
        question: "هل يمكن تغيير الجرافيك لاحقاً؟",
        answer: "نعم للكاونترات القماشية (Fabric). طباعة جرافيك جديد تكلف 100-150 ريال فقط.",
    },
];

export default function PromoCountersPage() {
    const schemas = [
        generateServiceSchema({
            name: "Promo Counters Jeddah",
            nameAr: "كاونترات ترويجية",
            description: "كاونترات ترويجية للمعارض والتذوق في جدة",
            url: "https://rawajgate.com/exhibitions-events/promo-counters",
            image: "https://rawajgate.com/images/promotion-counter-table-portable-kiosk.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "معارض وفعاليات", url: "https://rawajgate.com/exhibitions-events" },
            { name: "كاونترات ترويجية", url: "https://rawajgate.com/exhibitions-events/promo-counters" },
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
                                <Link href="/exhibitions-events" className="hover:text-white">معارض وفعاليات</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">كاونترات ترويجية</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">كاونترات ترويجية</span> تجذب الزوار
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                الكاونترات الترويجية (Promo Counters) أداة أساسية للتسويق المباشر. توزيع
                                عينات في المولات، تذوق منتجات في السوبرماركت، استقبال في المعارض. لا تنسى تجهيز <Link href="/commercial-printing/flyers-brochures" className="text-white hover:text-amber-200 underline">فلايرات وبروشورات</Link> لتوزيعها مع العينات.
                                خفيفة، قابلة للطي، بتصميم جذاب يحمل شعارك.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                نوفر كاونترات بلاستيكية خفيفة، قماشية فاخرة، خشبية متينة، ومضيئة LED.
                                التركيب بدون أدوات في دقائق.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                اطلب عرض سعر <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/promotion-counter-table-portable-kiosk.webp"
                            alt="كاونتر ترويجي للتذوق في جدة"
                            district="رد سي مول"
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        أنواع الكاونترات
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {COUNTER_TYPES.map((type) => (
                            <div key={type.name} className="card p-6 text-center">
                                <type.icon className="w-10 h-10 text-pink-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{type.name}</h3>
                                <p className="text-gray-600 text-sm mb-3">{type.desc}</p>
                                <div className="text-amber-600 font-bold">{type.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
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

            <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">روّج منتجك بذكاء!</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-pink-600 font-bold rounded-lg inline-flex items-center">
                        اطلب الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
