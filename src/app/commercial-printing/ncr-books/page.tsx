import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { BookCopy, ArrowLeft, Layers, Receipt, FileCheck, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "طباعة دفاتر NCR كربونية في جدة | فواتير وإيصالات | بوابة الرواج",
    description: "طباعة دفاتر NCR كربونية (نسخ ذاتية) في جدة: فواتير، إيصالات، طلبات، وسندات قبض. 2-4 نسخ بألوان مختلفة. ترقيم وتثقيب.",
    keywords: ["دفاتر NCR", "فواتير كربونية", "إيصالات", "سندات قبض", "NCR books jeddah", "طباعة نسخ ذاتية"],
};

const NCR_TYPES = [
    { name: "دفتر نسختين (أبيض + أصفر)", copies: "2 نسخ", price: "اطلب عرضك", icon: BookCopy },
    { name: "دفتر 3 نسخ (أبيض + أصفر + وردي)", copies: "3 نسخ", price: "سعر مميز", icon: Layers },
    { name: "دفتر 4 نسخ (أبيض + أصفر + وردي + أخضر)", copies: "4 نسخ", price: "تواصل معنا", icon: Receipt },
];

const USE_CASES = [
    "فواتير مبيعات", "إيصالات استلام", "سندات قبض", "أوامر توريد",
    "طلبات صيانة", "عقود إيجار", "محاضر استلام", "كشوفات جرد"
];

const FAQS = [
    {
        question: "ما هي دفاتر NCR؟",
        answer: "NCR (No Carbon Required) هي دفاتر نسخ ذاتية بدون كربون. عند الكتابة على الورقة الأولى، تنتقل الكتابة تلقائياً للنسخ التالية. تُستخدم للفواتير والإيصالات حيث تحتاج نسخة للعميل وأخرى للملف.",
    },
    {
        question: "كيف أحصل على عرض لدفاتر NCR؟",
        answer: "تواصل معنا للحصول على عرض سعر مخصص حسب عدد النسخ والكمية. السعر يشمل الطباعة والترقيم والتثقيب والغلاف الكرتوني. أسعار تنافسية!",
    },
    {
        question: "هل تطبعون دفاتر بحجم مخصص؟",
        answer: "نعم، نطبع جميع الأحجام: A4, A5, A6، أو حسب الطلب. الأحجام المخصصة بحد أدنى 200 دفتر.",
    },
];

export default function NCRBooksPage() {
    const schemas = [
        generateServiceSchema({
            name: "NCR Books Printing Jeddah",
            nameAr: "طباعة دفاتر NCR",
            description: "طباعة دفاتر NCR كربونية (نسخ ذاتية) في جدة للفواتير والإيصالات",
            url: "https://rawajgate.com/commercial-printing/ncr-books",
            image: "https://rawajgate.com/images/luxury-business-cards-printing-jeddah.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "مطبوعات تجارية", url: "https://rawajgate.com/commercial-printing" },
            { name: "دفاتر NCR", url: "https://rawajgate.com/commercial-printing/ncr-books" },
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
                                <Link href="/commercial-printing" className="hover:text-white">مطبوعات تجارية</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">دفاتر NCR</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">دفاتر NCR</span> للفواتير والإيصالات
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                دفاتر NCR (النسخ الذاتية) هي الحل المثالي للفواتير والإيصالات. بدون كربون،
                                بدون فوضى - اكتب على الورقة الأولى وتنتقل الكتابة تلقائياً للنسخ التالية.
                                في بوابة الرواج نطبع دفاتر 2-4 نسخ بترقيم وتثقيب.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                تُستخدم في: <Link href="/commercial-printing/menus" className="text-white hover:text-amber-200 underline">المطاعم</Link>، المحلات، ورش الصيانة، شركات النقل، المقاولات.
                                كل دفتر بغلاف كرتوني وظهر كربوني للكتابة المريحة.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                اطلب عرض سعر <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/luxury-business-cards-printing-jeddah.webp"
                            alt="دفاتر NCR كربونية للفواتير في جدة"
                            district="المنطقة الصناعية"
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                        كيف تعمل دفاتر NCR؟
                    </h2>
                    <div className="prose prose-lg text-gray-700">
                        <p>
                            تقنية <strong>NCR (No Carbon Required)</strong> تستخدم أوراقاً مطلية بمواد كيميائية
                            خاصة. عند الضغط بالقلم، تتفاعل المواد وتنتقل الكتابة للورقة التالية.
                            <strong>لا كربون، لا اتساخ، لا تلطيخ للأيدي!</strong>
                        </p>
                        <p>
                            كل نسخة بلون مختلف للتمييز: الأبيض للعميل، الأصفر للحسابات، الوردي للملف.
                            الترقيم التسلسلي يمنع التلاعب ويسهل المراجعة.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        أنواع الدفاتر
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {NCR_TYPES.map((type) => (
                            <div key={type.name} className="card p-6 text-center">
                                <type.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{type.name}</h3>
                                <p className="text-gray-500 text-sm mb-3">{type.copies}</p>
                                <div className="text-amber-600 font-bold">{type.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                        الاستخدامات الشائعة
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {USE_CASES.map((use) => (
                            <span key={use} className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                                {use}
                            </span>
                        ))}
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

            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">احتاج دفاتر للمحل؟</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg inline-flex items-center">
                        اطلب الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
