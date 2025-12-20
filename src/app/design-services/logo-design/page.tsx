import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import {
    Sparkles,
    ArrowLeft,
    Lightbulb,
    Layers,
    RefreshCcw,
    Building2,
    Store,
    Utensils,
    Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
    title: "تصميم شعار احترافي في جدة | Logo Design | بوابة الرواج",
    description: "تصميم شعار احترافي للشركات والمشاريع في جدة. شعارات فريدة، ملفات مصدرية، تسليم خلال 5 أيام. +500 شعار تم تصميمه.",
    keywords: ["تصميم شعار", "logo design jeddah", "شعار شركة", "تصميم لوجو", "هوية بصرية"],
};

const PACKAGES = [
    { name: "الباقة الأساسية", concepts: "2 مفاهيم", revisions: "2 تعديلات", price: "اطلب عرضك", files: "AI, PNG, PDF" },
    { name: "الباقة المتقدمة", concepts: "4 مفاهيم", revisions: "∞ تعديلات", price: "سعر مميز", files: "AI, EPS, PNG, PDF, SVG" },
    { name: "الباقة الشاملة", concepts: "6 مفاهيم + هوية", revisions: "∞ تعديلات", price: "تواصل معنا", files: "كل الملفات + دليل" },
];

const PROCESS = [
    { icon: Lightbulb, title: "الاستكشاف", desc: "فهم نشاطك وجمهورك" },
    { icon: Layers, title: "التصميم", desc: "تقديم المفاهيم للاختيار" },
    { icon: RefreshCcw, title: "التعديلات", desc: "تطوير حتى الرضا" },
    { icon: Sparkles, title: "التسليم", desc: "ملفات جاهزة للاستخدام" },
];

const USE_CASES = [
    { icon: Building2, title: "الشركات", desc: "شعارات رسمية احترافية" },
    { icon: Store, title: "المحلات", desc: "شعارات تجارية جذابة" },
    { icon: Utensils, title: "المطاعم", desc: "شعارات مميزة للأطعمة" },
    { icon: Briefcase, title: "المشاريع الناشئة", desc: "شعارات عصرية" },
];

const FAQS = [
    {
        question: "كم تستغرق عملية تصميم الشعار؟",
        answer: "الباقة الأساسية: 3-5 أيام. المتقدمة: 5-7 أيام. الشاملة: 10-14 يوم. هذا يشمل جولات التعديلات. نوفر خدمة عاجلة في 48 ساعة.",
    },
    {
        question: "ما الملفات التي أحصل عليها؟",
        answer: "تحصل على: ملفات vector (AI, EPS, SVG) للطباعة بأي حجم، PNG شفاف للويب، PDF للعرض. في الباقات الأعلى تحصل على دليل استخدام الشعار.",
    },
    {
        question: "هل أملك حقوق الشعار بالكامل؟",
        answer: "نعم، بعد التسليم والدفع أنت تملك جميع حقوق الشعار. يمكنك استخدامه بأي طريقة تجارياً. نقدم شهادة نقل ملكية مع الباقة الشاملة.",
    },
    {
        question: "ماذا لو لم تعجبني التصاميم؟",
        answer: "نقدم عدة مفاهيم للاختيار. إذا لم تعجبك كلها، نستكشف اتجاهات جديدة معك. التعديلات غير محدودة في الباقات المتقدمة. هدفنا رضاك التام.",
    },
    {
        question: "هل تصممون الهوية الكاملة؟",
        answer: "نعم، الباقة الشاملة تتضمن الشعار + بطاقات عمل + ورق رسمي + أظرف + توقيع إيميل + دليل الهوية. كل ما تحتاجه للانطلاق.",
    },
    {
        question: "هل يمكن تعديل شعاري الحالي؟",
        answer: "نعم، نقدم خدمة تحديث الشعارات (Logo Refresh) للحفاظ على روح الشعار مع تحديثه للعصر. تواصل معنا للتفاصيل.",
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
                        {PROCESS.map((step) => (
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

            {/* Use Cases */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        نصمم شعارات لـ
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {USE_CASES.map((useCase) => (
                            <div key={useCase.title} className="card p-6 text-center card-hover">
                                <useCase.icon className="w-10 h-10 text-rose-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{useCase.title}</h3>
                                <p className="text-gray-600 text-sm">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Extended SEO Content */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                            دليلك الشامل لتصميم الشعارات في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا الشعار مهم لعملك؟</h3>
                            <p>
                                الشعار هو الرمز البصري الذي يعرّف علامتك التجارية في ثوانٍ.
                                في سوق جدة التنافسي، شعار مميز يفرقك عن المنافسين ويبني الثقة فوراً.
                                الدراسات تظهر أن العملاء يحتاجون 5-7 مرات رؤية للشعار لتذكره.
                                شعار احترافي يظهر أنك جاد في عملك ويجذب العملاء المناسبين.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">ما الذي يجعل الشعار ناجحاً؟</h3>
                            <p>
                                <strong>البساطة:</strong> أقوى الشعارات أبسطها (Apple, Nike, McDonald&apos;s).
                                <strong>التميز:</strong> يجب أن يكون فريداً لا يشبه غيره.
                                <strong>الملاءمة:</strong> يعكس طبيعة نشاطك وقيمك.
                                <strong>المرونة:</strong> يعمل على جميع الأحجام والخلفيات.
                                <strong>الخلود:</strong> يبقى حديثاً لسنوات طويلة.
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/design-team-creative-studio-jeddah.webp"
                                    alt="فريق تصميم الشعارات في جدة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                    alt="عرض تصاميم الشعار على العميل"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أنواع الشعارات</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li><strong>Wordmark:</strong> اسم العلامة بخط مميز (Google, Coca-Cola)</li>
                                <li><strong>Lettermark:</strong> حروف مختصرة (IBM, HBO)</li>
                                <li><strong>Symbol:</strong> رمز بصري (Apple, Twitter)</li>
                                <li><strong>Combination:</strong> نص + رمز (Burger King, Adidas)</li>
                                <li><strong>Emblem:</strong> شعار داخل إطار (Starbucks, Harley-Davidson)</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج لتصميم الشعارات؟</h3>
                            <p>
                                في بوابة الرواج، صممنا +500 شعار لعملاء في جدة والمملكة.
                                لا نستخدم قوالب جاهزة، كل شعار مصمم من الصفر خصيصاً لك.
                                فريق مبدع بخبرة +15 سنة في تصميم الهويات البصرية.
                                باقات تناسب جميع الميزانيات من المشاريع الناشئة للشركات الكبرى.
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
                        كل ما تريد معرفته عن تصميم الشعارات
                    </p>
                    <div className="space-y-6">
                        {FAQS.map((faq, idx) => (
                            <div key={idx} className="card p-6">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-rose-500 to-rose-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">مستعد لشعار جديد؟</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        شعار فريد يميز علامتك التجارية ويبني الثقة
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="px-8 py-4 bg-white text-rose-600 font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-100 transition-all">
                            ابدأ مشروعك <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/966548923300?text=أريد تصميم شعار"
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition-all"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
