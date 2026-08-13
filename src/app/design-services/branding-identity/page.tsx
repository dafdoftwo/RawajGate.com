import { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { DesignServicesFaqs } from "@/lib/faqs/design-services";
import {
    Fingerprint,
    ArrowLeft,
    Palette,
    FileText,
    Sparkles,
    Phone,
    Check,
    BookOpen,
    Layers,
    Target,
    Users,
    Award,
} from "lucide-react";

export const metadata: Metadata = {
    alternates: { canonical: "/design-services/branding-identity" },
    title: "تصميم هوية بصرية للشركات في جدة",
    description: "تصميم هوية بصرية متكاملة للشركات في جدة: شعار، ألوان، خطوط، دليل الهوية، وتطبيقات على جميع المطبوعات. خبرة 15 عام مع +300 علامة تجارية.",
    keywords: [
        "هوية بصرية",
        "براندينج",
        "branding jeddah",
        "تصميم هوية شركة",
        "visual identity",
        "دليل هوية تجارية",
        "تصميم علامة تجارية",
    ],
    openGraph: {
        title: "تصميم هوية بصرية للشركات في جدة | بوابة الرواج",
        description: "تصميم هوية بصرية متكاملة للشركات في جدة: شعار، ألوان، خطوط، دليل الهوية، وتطبيقات على جميع المطبوعات. خبرة 15 عام مع +300 علامة تجارية.",
        url: "https://rawajgate.com/design-services/branding-identity",
        images: [{ url: "/images/client-meeting-office-al-rawaj-jeddah.webp", width: 1200, height: 630, alt: "تصميم هوية بصرية للشركات في جدة" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "تصميم هوية بصرية للشركات في جدة",
        description: "تصميم هوية بصرية متكاملة للشركات في جدة: شعار، ألوان، خطوط، دليل الهوية، وتطبيقات على جميع المطبوعات. خبرة 15 عام مع +300 علامة تجارية.",
        images: ["/images/client-meeting-office-al-rawaj-jeddah.webp"],
    },
};

const BRANDING_PACKAGES = [
    {
        name: "الباقة الأساسية",
        nameEn: "Basic Package",
        price: "اطلب عرضك",
        description: "مثالية للمشاريع الناشئة والمحلات الصغيرة",
        deliverables: [
            "تصميم شعار رئيسي",
            "نسخة أحادية اللون",
            "ألوان رئيسية (2-3 ألوان)",
            "بطاقة عمل",
            "ورق رسمي",
            "ملفات مصدرية AI, PDF, PNG",
        ],
        popular: false,
    },
    {
        name: "الباقة المتقدمة",
        nameEn: "Advanced Package",
        price: "سعر مميز",
        description: "الأكثر طلباً للشركات المتوسطة",
        deliverables: [
            "كل ما في الباقة الأساسية",
            "شعار بديل (Horizontal/Vertical)",
            "أيقونة مختصرة Icon",
            "دليل هوية 10 صفحات",
            "ملف تعريف الشركة",
            "ظروف مراسلات",
            "توقيع إيميل",
            "قوالب سوشيال ميديا (5 قوالب)",
        ],
        popular: true,
    },
    {
        name: "الباقة الشاملة",
        nameEn: "Premium Package",
        price: "تواصل معنا",
        description: "للشركات الكبرى والعلامات الفاخرة",
        deliverables: [
            "كل ما في الباقة المتقدمة",
            "دليل هوية شامل +25 صفحة",
            "موشن جرافيك للشعار",
            "تصميم موقع (صفحة هبوط)",
            "قوالب PowerPoint",
            "لوحات داخلية للمكتب",
            "دعم فني 3 أشهر",
            "تعديلات مفتوحة",
        ],
        popular: false,
    },
];

const IDENTITY_ELEMENTS = [
    { icon: Sparkles, name: "الشعار", desc: "العلامة البصرية الأساسية" },
    { icon: Palette, name: "الألوان", desc: "لوحة ألوان موحدة" },
    { icon: FileText, name: "الخطوط", desc: "Typography متناسق" },
    { icon: BookOpen, name: "دليل الهوية", desc: "إرشادات الاستخدام" },
    { icon: Layers, name: "التطبيقات", desc: "المطبوعات والرقميات" },
    { icon: Target, name: "الرسالة", desc: "النبرة والشخصية" },
];

const FAQS = DesignServicesFaqs["design-services/branding-identity"];

export default function BrandingIdentityPage() {
    const schemas = [
        generateServiceSchema({
            name: "Brand Identity Design Jeddah",
            nameAr: "تصميم الهوية البصرية",
            description: "تصميم هوية بصرية متكاملة للشركات في جدة: شعار، ألوان، دليل هوية، وتطبيقات كاملة",
            url: "https://rawajgate.com/design-services/branding-identity",
            image: "https://rawajgate.com/images/client-meeting-office-al-rawaj-jeddah.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "خدمات التصميم", url: "https://rawajgate.com/design-services" },
            { name: "الهوية البصرية", url: "https://rawajgate.com/design-services/branding-identity" },
        ]),
        generateFAQSchema(FAQS),
    ];

    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}

            {/* Hero Section */}
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <nav className="text-sm text-white/60 mb-4">
                                <Link href="/" className="hover:text-white">الرئيسية</Link>
                                <span className="mx-2">/</span>
                                <Link href="/design-services" className="hover:text-white">خدمات التصميم</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">الهوية البصرية</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/20 rounded-full mb-6">
                                <Award className="w-4 h-4 text-rose-400" />
                                <span className="text-rose-300 text-sm font-medium">+300 علامة تجارية تم تصميمها</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                <span className="text-gradient">هوية بصرية</span> تميزك عن المنافسين
                            </h1>

                            {/* AI Snippet */}
                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                الهوية البصرية (Visual Identity) هي المنظومة الكاملة التي تجعل علامتك التجارية
                                مميزة ومتسقة: الشعار، الألوان، الخطوط، وأسلوب التواصل البصري الذي يظهر على <Link href="/commercial-printing/folders" className="text-amber-200 underline">الفولدرات والمطبوعات</Link>. في بوابة الرواج
                                نصمم هويات بصرية تحكي قصة علامتك وتبني ثقة عملائك.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                خبرة 15 عاماً في خدمة +300 علامة تجارية سعودية - من المشاريع الناشئة في جدة
                                إلى الشركات الكبرى في المملكة. نفهم السوق السعودي ونصمم هويات تنجح فيه.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href="/quote" className="btn-primary text-center">
                                    احجز استشارة مجانية
                                    <ArrowLeft className="inline-block mr-2 w-5 h-5" />
                                </Link>
                                <a href={`tel:${BUSINESS.phone.e164}`} className="btn-secondary text-center">
                                    <Phone className="w-5 h-5 ml-2" />
                                    اتصل الآن
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">15</div>
                                    <div className="text-xs text-white/60">سنة خبرة</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">300+</div>
                                    <div className="text-xs text-white/60">علامة تم تصميمها</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">15</div>
                                    <div className="text-xs text-white/60">سنة خبرة</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <GeoImage
                                src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                alt="جلسة تصميم هوية بصرية مع العميل في مكتب بوابة الرواج - جدة"
                                
                                
                                
                                className="rounded-2xl shadow-2xl"
                                priority
                            />
                            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-rose-600" />
                                    <div>
                                        <span className="font-bold text-gray-900 block">جلسة استكشاف</span>
                                        <span className="text-sm text-gray-500">نفهم رؤيتك أولاً</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                            لماذا تحتاج علامتك التجارية هوية بصرية متكاملة؟
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p>
                                في سوق مزدحم بالمنافسين، <strong>الانطباع الأول يُصنع في 7 ثوانٍ</strong>.
                                عميلك المحتمل يحكم على احترافيتك ومصداقيتك من خلال ما يراه: بطاقة عملك،
                                موقعك الإلكتروني، صفحتك على إنستقرام. هل كلها متسقة؟ هل تحكي نفس القصة؟
                            </p>

                            <p>
                                الهوية البصرية ليست مجرد «شكل جميل» — إنها <strong>أداة استراتيجية للعمل</strong>.
                                عندما تكون هويتك متسقة ومميزة، يتذكرك العملاء بسهولة، يثقون بك أسرع،
                                ويدفعون أكثر. الأبحاث تثبت أن العلامات ذات الهوية القوية تزيد إيراداتها بنسبة 23%.
                            </p>

                            <p>
                                في <strong>بوابة الرواج</strong>، لا نبدأ بالتصميم. نبدأ بفهم عملك: من هو عميلك؟
                                ما الذي يميزك؟ ما القيم التي تريد إيصالها؟ هذه المرحلة الاستكشافية هي أساس
                                هوية تنجح في السوق وليست مجرد رسومات جميلة.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Identity Elements */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        عناصر الهوية البصرية
                    </h2>

                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {IDENTITY_ELEMENTS.map((element) => (
                            <div key={element.name} className="card p-6 text-center">
                                <element.icon className="w-10 h-10 text-rose-500 mx-auto mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">{element.name}</h3>
                                <p className="text-gray-600 text-sm">{element.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            باقات الهوية البصرية
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            باقات مصممة لتناسب مختلف الاحتياجات والميزانيات
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {BRANDING_PACKAGES.map((pkg) => (
                            <div key={pkg.name} className={`card p-8 relative ${pkg.popular ? 'ring-2 ring-rose-400' : ''}`}>
                                {pkg.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                                        الأكثر طلباً
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">{pkg.nameEn}</p>
                                <div className="text-4xl font-bold text-rose-600 mb-4">{pkg.price}</div>
                                <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                                <ul className="space-y-3">
                                    {pkg.deliverables.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm">
                                            <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/quote"
                                    className={`block w-full mt-6 py-3 rounded-lg font-bold text-center transition-colors ${pkg.popular
                                        ? 'bg-rose-500 text-white hover:bg-rose-600'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                >
                                    اختر هذه الباقة
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        مراحل تصميم الهوية
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "الاستكشاف", desc: "جلسة Brand Discovery لفهم عملك وأهدافك وجمهورك المستهدف" },
                            { step: "02", title: "البحث والإلهام", desc: "دراسة المنافسين والسوق وجمع مراجع بصرية" },
                            { step: "03", title: "التصميم", desc: "تقديم 2-3 اتجاهات تصميمية للاختيار والتطوير" },
                            { step: "04", title: "التسليم", desc: "إعداد جميع الملفات ودليل الهوية والتطبيقات" },
                        ].map((phase) => (
                            <div key={phase.step} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-rose-600">{phase.step}</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{phase.title}</h3>
                                <p className="text-gray-600 text-sm">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 text-center">
                            الأسئلة الشائعة
                        </h2>
                        <p className="text-gray-600 text-center mb-12">
                            كل ما تريد معرفته عن تصميم الهوية البصرية
                        </p>

                        <div className="space-y-6">
                            {FAQS.map((faq, index) => (
                                <div key={index} className="card p-6">
                                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-rose-500 to-rose-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        ابدأ هويتك الجديدة اليوم!
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        احجز استشارة مجانية لمناقشة مشروعك واحتياجاتك.
                        <strong> نساعدك من الفكرة حتى التطبيق.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/quote"
                            className="px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            احجز استشارة مجانية
                            <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href={`https://wa.me/${BUSINESS.phone.whatsapp}?text=أريد تصميم هوية بصرية`}
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        <RelatedServices currentPath="/design-services/branding-identity" />
        </>
    );
}
