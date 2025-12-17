import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import {
    FileText,
    ArrowLeft,
    Layers,
    Printer,
    CheckCircle,
    Phone,
    Check,
    Clock,
    Zap,
    Star,
    Ruler,
} from "lucide-react";

export const metadata: Metadata = {
    title: "طباعة فلايرات وبروشورات في جدة | تصميم ورقي احترافي | بوابة الرواج",
    description: "طباعة فلايرات وبروشورات احترافية في جدة. ورق كوشيه 130-200 جرام، طباعة أوفست ورقمية، تشطيب لامع ومطفي. تصميم مجاني، تسليم خلال 48 ساعة. أسعار تبدأ من 200 ريال لـ 1000 فلاير.",
    keywords: [
        "طباعة فلايرات جدة",
        "بروشورات دعائية",
        "flyers printing jeddah",
        "مطويات",
        "brochure printing",
        "طباعة أوفست",
    ],
    openGraph: {
        title: "طباعة فلايرات وبروشورات في جدة | بوابة الرواج",
        description: "فلايرات وبروشورات بجودة عالية. تصميم مجاني + تسليم سريع في جدة.",
        images: ["/images/advertising-flyers-brochures-tri-fold.webp"],
        locale: "ar_SA",
    },
};

const PRINT_TYPES = [
    {
        name: "فلاير A5 (14.8 × 21 سم)",
        description: "الحجم الأكثر شيوعاً للتوزيع اليدوي في المراكز التجارية والفعاليات.",
        price: "من 200 ريال / 1000 نسخة",
        paper: "كوشيه 130 جرام",
        icon: FileText,
    },
    {
        name: "فلاير A4 (21 × 29.7 سم)",
        description: "حجم أكبر للمعلومات التفصيلية والعروض الشاملة.",
        price: "من 350 ريال / 1000 نسخة",
        paper: "كوشيه 150 جرام",
        icon: Layers,
    },
    {
        name: "بروشور مطوي (A4 → ثلاثي)",
        description: "بروشور كلاسيكي بـ 6 أوجه للمعلومات المفصلة عن الشركة والخدمات.",
        price: "من 450 ريال / 1000 نسخة",
        paper: "كوشيه 170 جرام",
        icon: Ruler,
    },
    {
        name: "بروشور A3 مطوي",
        description: "بروشور كبير 4 أوجه للكتالوجات الصغيرة والعروض الخاصة.",
        price: "من 600 ريال / 1000 نسخة",
        paper: "كوشيه 200 جرام",
        icon: Star,
    },
];

const TECH_SPECS = [
    { spec: "دقة الطباعة", value: "300 DPI" },
    { spec: "الألوان", value: "CMYK 4 ألوان" },
    { spec: "وزن الورق", value: "130 - 200 جرام" },
    { spec: "التشطيب", value: "لامع / مطفي / UV" },
    { spec: "الحد الأدنى", value: "500 نسخة" },
    { spec: "وقت الإنتاج", value: "24-72 ساعة" },
];

const FAQS = [
    {
        question: "كم سعر طباعة 1000 فلاير A5 في جدة؟",
        answer: "فلاير A5 وجه واحد على ورق كوشيه 130 جرام يبدأ من 200 ريال لـ 1000 نسخة. الوجهين من 280 ريال. يشمل السعر الطباعة فقط، التصميم مجاني مع الطلبات +2000 نسخة.",
    },
    {
        question: "هل تقدمون خدمة التصميم؟",
        answer: "نعم، نوفر تصميم احترافي مجاني مع الطلبات +2000 نسخة. للطلبات الأقل، رسوم التصميم 100-200 ريال حسب التعقيد. يمكنك أيضاً إرسال ملفك الجاهز.",
    },
    {
        question: "ما الفرق بين الطباعة الرقمية والأوفست؟",
        answer: "الطباعة الرقمية سريعة ومناسبة للكميات الصغيرة (حتى 1000 نسخة). الأوفست أجود وأرخص للكميات الكبيرة (+3000 نسخة). ننصح بالأوفست للفلايرات الدورية والبروشورات الرسمية.",
    },
    {
        question: "متى يتم تسليم الطلب؟",
        answer: "الطباعة الرقمية: 24-48 ساعة. الأوفست: 3-5 أيام عمل. نوفر خدمة عاجلة في نفس اليوم للطباعة الرقمية مقابل رسوم إضافية.",
    },
    {
        question: "ما نوع الورق الأفضل للفلايرات؟",
        answer: "للتوزيع العادي: كوشيه 130 جرام (اقتصادي). للمظهر الاحترافي: كوشيه 170 جرام. للبروشورات الفاخرة: كوشيه 200 جرام مع تشطيب مطفي أو UV موضعي.",
    },
];

export default function FlyersBrochuresPage() {
    const schemas = [
        generateServiceSchema({
            name: "Flyers & Brochures Printing Jeddah",
            nameAr: "طباعة فلايرات وبروشورات",
            description: "طباعة فلايرات وبروشورات احترافية في جدة. جودة عالية وأسعار منافسة.",
            url: "https://rawajgate.com/commercial-printing/flyers-brochures",
            image: "https://rawajgate.com/images/advertising-flyers-brochures-tri-fold.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "مطبوعات تجارية", url: "https://rawajgate.com/commercial-printing" },
            { name: "فلايرات وبروشورات", url: "https://rawajgate.com/commercial-printing/flyers-brochures" },
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
                                <Link href="/commercial-printing" className="hover:text-white">مطبوعات تجارية</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">فلايرات وبروشورات</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
                                <Zap className="w-4 h-4 text-green-400" />
                                <span className="text-green-300 text-sm font-medium">تسليم خلال 48 ساعة</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                <span className="text-gradient">فلايرات وبروشورات</span> توصل رسالتك
                            </h1>

                            {/* AI Snippet */}
                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                الفلايرات والبروشورات هي أدوات التسويق المباشر الأكثر فعالية وتكلفة معقولة.
                                في بوابة الرواج نطبع فلايراتك على ورق كوشيه عالي الجودة (130-200 جرام)
                                بألوان CMYK حية، مع تصميم مجاني وتسليم خلال 48 ساعة في جدة.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                من عروض المطاعم إلى كتالوجات المنتجات، ومن منشورات الفعاليات إلى بروشورات
                                الشركات - نطبع بجودة أوفست أو رقمية حسب احتياجك. خبرة 15 عام في خدمة سوق جدة.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href="/quote" className="btn-primary text-center">
                                    اطلب عرض سعر
                                    <ArrowLeft className="inline-block mr-2 w-5 h-5" />
                                </Link>
                                <a href="tel:+966548923300" className="btn-secondary text-center">
                                    <Phone className="w-5 h-5 ml-2" />
                                    اتصل الآن
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">200</div>
                                    <div className="text-xs text-white/60">ريال / 1000 فلاير</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">48</div>
                                    <div className="text-xs text-white/60">ساعة تسليم</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">مجاني</div>
                                    <div className="text-xs text-white/60">التصميم</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <GeoImage
                                src="/images/advertising-flyers-brochures-tri-fold.webp"
                                alt="طباعة فلايرات وبروشورات احترافية في جدة - بوابة الرواج"
                                caption="بروشورات وفلايرات مطبوعة لشركات في جدة"
                                district="الروضة"
                                cameraModel="Canon EOS R5 (50mm)"
                                className="rounded-2xl shadow-2xl"
                                priority
                            />
                            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <Printer className="w-5 h-5 text-green-600" />
                                    <div>
                                        <span className="font-bold text-gray-900 block">أوفست + رقمية</span>
                                        <span className="text-sm text-gray-500">حسب الكمية</span>
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
                            لماذا لا زالت الفلايرات فعّالة في 2024؟
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p>
                                في عصر الإعلانات الرقمية، قد تتساءل: هل الفلايرات لا زالت فعالة؟ <strong>الإجابة نعم!</strong>
                                الدراسات تظهر أن المواد المطبوعة تحقق معدل قراءة <strong>79%</strong> مقارنة
                                بـ 20% للإيميلات الدعائية. السبب بسيط: الورق ملموس، يبقى في اليد، ولا يختفي بضغطة زر.
                            </p>

                            <p>
                                <strong>الفلايرات</strong> مثالية للتوزيع في المراكز التجارية والفعاليات و <Link href="/exhibitions-events" className="text-amber-600 hover:text-amber-700 underline">المعارض</Link>.
                                <strong>البروشورات</strong> أفضل للمعلومات التفصيلية: كتالوجات الخدمات، قوائم الأسعار،
                                ملفات الشركات. الاثنان يكملان استراتيجيتك التسويقية.
                            </p>

                            <p>
                                في <strong>بوابة الرواج</strong>، نطبع بتقنيتين: <strong>الرقمية</strong> للكميات الصغيرة
                                والطلبات العاجلة، <strong>والأوفست</strong> للكميات الكبيرة بجودة استثنائية.
                                ورقنا مستورد من أوروبا، وماكيناتنا من أحدث ما توصلت إليه صناعة الطباعة.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Print Types */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            الأنواع والأحجام المتوفرة
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            مجموعة متنوعة تناسب جميع الاحتياجات التسويقية
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {PRINT_TYPES.map((type) => (
                            <div key={type.name} className="card p-8 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shrink-0">
                                        <type.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                                        <p className="text-gray-600 mb-4">{type.description}</p>
                                        <div className="flex flex-wrap gap-3 text-sm">
                                            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                                                {type.price}
                                            </span>
                                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                                {type.paper}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Specs */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية
                            </h2>
                            <p className="text-gray-600 mb-8">
                                نستخدم أفضل الخامات والتقنيات لضمان طباعة عالية الجودة
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

                        <GeoImage
                            src="/images/printing-machines-digital-offset-equipment.webp"
                            alt="ماكينات طباعة أوفست ورقمية في بوابة الرواج جدة"
                            caption="ماكينات طباعة Heidelberg الألمانية"
                            district="المنطقة الصناعية"
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                        استخدامات الفلايرات والبروشورات
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "عروض المطاعم", "كتالوج منتجات", "منشورات فعاليات", "بروشور شركة",
                            "قائمة أسعار", "دعاية معرض", "توزيع في المولات", "افتتاح فرع",
                            "عروض موسمية", "خدمات طبية", "عقارات", "دورات تدريبية"
                        ].map((use) => (
                            <span key={use} className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm border border-gray-200">
                                {use}
                            </span>
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
                            كل ما تريد معرفته عن طباعة الفلايرات والبروشورات
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
            <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        جاهز لطباعة فلايراتك؟
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        احصل على عرض سعر مجاني الآن. <strong>تصميم مجاني + تسليم سريع.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/quote"
                            className="px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            اطلب عرض سعر
                            <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/966548923300?text=أريد طباعة فلايرات"
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
