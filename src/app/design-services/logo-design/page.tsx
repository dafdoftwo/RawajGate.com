import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { Sparkles, ArrowLeft, Lightbulb, Layers, RefreshCcw, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "تصميم شعار احترافي في جدة | Logo Design | بوابة الرواج",
    description: "تصميم شعار احترافي للشركات والمشاريع في جدة. شعارات فريدة، ملفات مصدرية، تسليم خلال 5 أيام. باقات تبدأ من 800 ريال. +500 شعار تم تصميمه.",
    keywords: ["تصميم شعار", "logo design jeddah", "شعار شركة", "تصميم لوجو", "هوية بصرية"],
};

const PACKAGES = [
    { name: "الباقة الأساسية", concepts: "2 مفاهيم", revisions: "2 تعديلات", price: "800 ريال", files: "AI, PNG, PDF" },
    { name: "الباقة المتقدمة", concepts: "4 مفاهيم", revisions: "∞ تعديلات", price: "1,500 ريال", files: "AI, EPS, PNG, PDF, SVG" },
    { name: "الباقة الشاملة", concepts: "6 مفاهيم + هوية", revisions: "∞ تعديلات", price: "3,000 ريال", files: "كل الملفات + دليل" },
];

const PROCESS = [
    { icon: Lightbulb, title: "الاستكشاف", desc: "فهم نشاطك وجمهورك" },
    { icon: Layers, title: "التصميم", desc: "تقديم المفاهيم للاختيار" },
    { icon: RefreshCcw, title: "التعديلات", desc: "تطوير حتى الرضا" },
    { icon: Sparkles, title: "التسليم", desc: "ملفات جاهزة للاستخدام" },
];

const FAQS = [
    {
        question: "كم تستغرق عملية تصميم الشعار؟",
        answer: "الباقة الأساسية: 3-5 أيام. المتقدمة: 5-7 أيام. الشاملة: 10-14 يوم. هذا يشمل جولات التعديلات. نوفر خدمة عاجلة في 48 ساعة مقابل 50% إضافية.",
    },
    {
        question: "ما الملفات التي أحصل عليها؟",
        answer: "تحصل على: ملفات vector (AI, EPS, SVG) للطباعة بأي حجم، PNG شفاف للويب، PDF للعرض. في الباقات الأعلى تحصل على دليل استخدام الشعار.",
    },
];

export default function LogoDesignPage() {
    const schemas = [
        generateServiceSchema({
            name: "Logo Design Jeddah",
            nameAr: "تصميم شعار",
            description: "تصميم شعار احترافي للشركات والمشاريع في جدة",
            url: "https://rawajgate.com/design-services/logo-design",
            image: "https://rawajgate.com/images/client-meeting-office-al-rawaj-jeddah.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "خدمات التصميم", url: "https://rawajgate.com/design-services" },
            { name: "تصميم شعار", url: "https://rawajgate.com/design-services/logo-design" },
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
                                <span className="text-amber-400">تصميم شعار</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">شعار فريد</span> يميز علامتك
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                الشعار هو الرمز البصري الذي يعرّف علامتك في ثوانٍ. نضمن ظهوره بشكل مثالي سواء على <Link href="/signage-stickers/shop-signage-3d" className="text-rose-200 underline">لوحات المحلات</Link> أو في المطبوعات الصغيرة. في بوابة الرواج نصمم
                                شعارات فريدة، لا نستخدم قوالب جاهزة. كل شعار مصمم خصيصاً ليعكس قيم
                                ورسالة عملك.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                +500 شعار تم تصميمه لعملاء في جدة والمملكة. من المشاريع الناشئة
                                للشركات الكبرى. باقات تناسب جميع الميزانيات.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                ابدأ مشروعك <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                            alt="تصميم شعارات احترافية في جدة"
                            district="الروضة"
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        مراحل العمل
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {PROCESS.map((step, i) => (
                            <div key={step.title} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                                    <step.icon className="w-8 h-8 text-rose-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        الباقات
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {PACKAGES.map((pkg) => (
                            <div key={pkg.name} className="card p-6 text-center">
                                <h3 className="font-bold text-gray-900 mb-4">{pkg.name}</h3>
                                <div className="text-3xl font-bold text-rose-600 mb-4">{pkg.price}</div>
                                <ul className="text-gray-600 text-sm space-y-2 mb-4">
                                    <li>{pkg.concepts}</li>
                                    <li>{pkg.revisions}</li>
                                    <li>{pkg.files}</li>
                                </ul>
                                <Link href="/quote" className="btn-primary w-full block text-center">اختر الباقة</Link>
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

            <section className="py-20 bg-gradient-to-r from-rose-500 to-rose-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">مستعد لشعار جديد؟</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-rose-600 font-bold rounded-lg inline-flex items-center">
                        ابدأ الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
