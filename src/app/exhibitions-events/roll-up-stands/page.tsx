import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import {
    Layers,
    ArrowLeft,
    Package,
    Ruler,
    Phone,
    Check,
    Clock,
    Star,
    Zap,
    Shield,
    Truck,
} from "lucide-react";

export const metadata: Metadata = {
    title: "رول أب ستاند للمعارض والفعاليات في جدة | بانر ستاند | بوابة الرواج",
    description: "رول أب ستاند Roll-up Stand بأحجام متعددة (85×200, 100×200, 120×200 سم) للمعارض والمؤتمرات في جدة. طباعة 1440 DPI، هيكل ألمنيوم متين، حقيبة حمل، ضمان سنة. التسليم خلال 24 ساعة.",
    keywords: [
        "رول أب جدة",
        "roll up stand",
        "ستاند معرض",
        "بانر ستاند",
        "roll up banner jeddah",
        "ستاند قابل للطي",
        "لوحات معارض",
    ],
    openGraph: {
        title: "رول أب ستاند للمعارض في جدة | بوابة الرواج",
        description: "رول أب بجودة عالية 1440 DPI + هيكل ألمنيوم + حقيبة حمل. تسليم 24 ساعة.",
        images: ["/images/roll-up-stand-banner-85x200.webp"],
        locale: "ar_SA",
    },
};

const STAND_SIZES = [
    {
        name: "رول أب 85 × 200 سم",
        nameEn: "Standard Roll-up",
        width: "85 سم",
        height: "200 سم",
        price: "اطلب عرضك",
        popular: true,
        description: "الحجم الأكثر شيوعاً والأنسب لمعظم الاستخدامات. سهل النقل ومثالي للمعارض والمؤتمرات.",
    },
    {
        name: "رول أب 100 × 200 سم",
        nameEn: "Wide Roll-up",
        width: "100 سم",
        height: "200 سم",
        price: "سعر مميز",
        popular: false,
        description: "عرض أكبر للتصاميم التفصيلية. مثالي عند وجود نصوص كثيرة أو صور متعددة.",
    },
    {
        name: "رول أب 120 × 200 سم",
        nameEn: "Extra Wide Roll-up",
        width: "120 سم",
        height: "200 سم",
        price: "عرض تنافسي",
        popular: false,
        description: "الحجم الكبير للتأثير البصري القوي. مناسب للممرات الواسعة واستقبال الشركات.",
    },
    {
        name: "رول أب 150 × 200 سم",
        nameEn: "Premium Wide",
        width: "150 سم",
        height: "200 سم",
        price: "تواصل معنا",
        popular: false,
        description: "أعرض حجم متوفر. مثالي للخلفيات وكبديل اقتصادي للميديا وول.",
    },
];

const TECH_SPECS = [
    { spec: "دقة الطباعة", value: "1440 DPI" },
    { spec: "نوع الحبر", value: "Eco-Solvent مقاوم UV" },
    { spec: "خامة البانر", value: "فينيل 440 جرام" },
    { spec: "الهيكل", value: "ألمنيوم مؤكسد" },
    { spec: "الوزن", value: "3-5 كجم" },
    { spec: "وقت التركيب", value: "30 ثانية" },
];

const FAQS = [
    {
        question: "كيف أحصل على أفضل سعر لرول أب ستاند في جدة؟",
        answer: "نقدم أسعاراً تنافسية لجميع الأحجام شاملة الطباعة والهيكل وحقيبة الحمل. تواصل معنا للحصول على عرض سعر مخصص! خصومات مميزة للكميات الكبيرة.",
    },
    {
        question: "كم تستغرق طباعة الرول أب؟",
        answer: "الطباعة تستغرق 4-6 ساعات. للطلبات العاجلة، نوفر خدمة التسليم في نفس اليوم داخل جدة. للكميات الكبيرة (+10 قطع) يُحسب يوم عمل إضافي.",
    },
    {
        question: "هل يمكن تغيير البانر مع الاحتفاظ بالهيكل؟",
        answer: "نعم! هياكلنا مصممة لإعادة الاستخدام. يمكنك طلب طباعة بانر بديل فقط بسعر منافس مع الاحتفاظ بالهيكل نفسه. تواصل معنا للتفاصيل!",
    },
    {
        question: "ما الفرق بين رول أب ورول أب ديلوكس؟",
        answer: "رول أب ديلوكس يأتي بهيكل أعرض وأثقل (ألمنيوم مزدوج)، قاعدة معدنية أثقل للثبات، وحقيبة حمل صلبة. مثالي للاستخدام المتكرر والمعارض طويلة المدة.",
    },
    {
        question: "هل الرول أب مناسب للاستخدام الخارجي؟",
        answer: "الهيكل العادي مناسب للداخل فقط. للاستخدام الخارجي، نوفر رول أب خارجي بقاعدة ثقيلة قابلة للتعبئة بالماء، ومقاومة للرياح الخفيفة.",
    },
];

export default function RollUpStandsPage() {
    const schemas = [
        generateServiceSchema({
            name: "Roll-up Stands Jeddah",
            nameAr: "رول أب ستاند للمعارض",
            description: "رول أب ستاند بأحجام متعددة للمعارض والمؤتمرات في جدة. طباعة عالية الجودة وتسليم سريع.",
            url: "https://rawajgate.com/exhibitions-events/roll-up-stands",
            image: "https://rawajgate.com/images/roll-up-stand-banner-85x200.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "معارض وفعاليات", url: "https://rawajgate.com/exhibitions-events" },
            { name: "رول أب ستاند", url: "https://rawajgate.com/exhibitions-events/roll-up-stands" },
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
                                <Link href="/exhibitions-events" className="hover:text-white">معارض وفعاليات</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">رول أب ستاند</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
                                <Zap className="w-4 h-4 text-amber-400" />
                                <span className="text-amber-300 text-sm font-medium">تسليم خلال 24 ساعة</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                <span className="text-gradient">رول أب ستاند</span> سهل الحمل والتركيب
                            </h1>

                            {/* AI Snippet */}
                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                رول أب ستاند Roll-up Stand هو الحل الأمثل للمعارض والمؤتمرات والفعاليات. ستاند
                                قابل للطي يركب في 30 ثانية بدون أدوات، خفيف الوزن (3 كجم)، ويأتي مع حقيبة حمل
                                أنيقة. طباعة بدقة 1440 DPI بألوان ثابتة.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                سواء كنت في معرض سوبر دوم، مؤتمر في هيلتون جدة، أو حدث افتتاحي لمتجرك - رول أب
                                يمنحك حضوراً احترافياً بميزانية معقولة. ولتعزيز تجربتك، ننصح بإضافة <Link href="/exhibitions-events/promo-counters" className="text-amber-200 underline">كاونتر ترويجي</Link> لاستقبال الزوار. التسليم خلال 24 ساعة داخل جدة.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href="/quote" className="btn-primary text-center">
                                    اطلب الآن
                                    <ArrowLeft className="inline-block mr-2 w-5 h-5" />
                                </Link>
                                <a href="tel:+966548923300" className="btn-secondary text-center">
                                    <Phone className="w-5 h-5 ml-2" />
                                    اتصل للطوارئ
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">4</div>
                                    <div className="text-xs text-white/60">أحجام مختلفة</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">24</div>
                                    <div className="text-xs text-white/60">ساعة تسليم</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">سنة</div>
                                    <div className="text-xs text-white/60">ضمان الهيكل</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <GeoImage
                                src="/images/roll-up-stand-banner-85x200.webp"
                                alt="رول أب ستاند 85×200 سم للمعارض - بوابة الرواج جدة"
                                
                                
                                
                                className="rounded-2xl shadow-2xl"
                                priority
                            />
                            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-green-600" />
                                    <div>
                                        <span className="font-bold text-gray-900 block">تركيب فوري</span>
                                        <span className="text-sm text-gray-500">30 ثانية بدون أدوات</span>
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
                            ما هو رول أب ستاند ومتى تحتاجه؟
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p>
                                <strong>رول أب ستاند</strong> (Roll-up Banner Stand) هو لوحة إعلانية قابلة للطي
                                تتكون من بانر مطبوع يُلف داخل قاعدة معدنية. عند الحاجة، تسحب البانر للأعلى ويثبت
                                بعمود ألمنيوم - العملية تستغرق 30 ثانية فقط بدون أي أدوات!
                            </p>

                            <p>
                                الاسم "Roll-up" يأتي من آلية اللف: البانر يُخزن ملفوفاً داخل القاعدة، مما يحميه
                                من الخدوش والأوساخ أثناء النقل. هذا التصميم الذكي جعله <strong>الخيار الأول
                                    للشركات السعودية</strong> في المعارض والمؤتمرات.
                            </p>

                            <p>
                                في <strong>بوابة الرواج</strong>، نطبع على فينيل 440 جرام عالي الكثافة بأحبار
                                Eco-Solvent المقاومة للأشعة فوق البنفسجية. الألوان تبقى زاهية حتى مع الاستخدام
                                المتكرر. نوفر جميع الأحجام من 85 سم حتى 150 سم عرض.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sizes & Pricing */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            الأحجام المتوفرة
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            جميع الباقات تشمل: الطباعة + الهيكل الألمنيوم + حقيبة الحمل
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {STAND_SIZES.map((size) => (
                            <div key={size.name} className={`card p-6 card-hover text-center relative ${size.popular ? 'ring-2 ring-amber-400' : ''}`}>
                                {size.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                                        <Star className="w-3 h-3" />
                                        الأكثر طلباً
                                    </div>
                                )}
                                <Ruler className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-1">{size.name}</h3>
                                <p className="text-sm text-gray-500 mb-3">{size.nameEn}</p>
                                <div className="text-3xl font-bold text-emerald-600 mb-3">{size.price}</div>
                                <p className="text-gray-600 text-sm mb-4">{size.description}</p>
                                <div className="flex justify-center gap-4 text-xs text-gray-500">
                                    <span>العرض: {size.width}</span>
                                    <span>الارتفاع: {size.height}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            🎁 <strong>خصم 15%</strong> عند طلب 3 قطع فأكثر |
                            🎁 <strong>خصم 25%</strong> عند طلب 10 قطع فأكثر
                        </p>
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
                                نستخدم أفضل الخامات لضمان جودة الطباعة ومتانة الهيكل
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
                            alt="طابعات رول أب عالية الدقة في بوابة الرواج"
                            
                            
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        مميزات رول أب بوابة الرواج
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Layers, title: "طباعة 1440 DPI", desc: "أعلى دقة متوفرة، ألوان حية وتفاصيل واضحة" },
                            { icon: Shield, title: "هيكل ألمنيوم", desc: "متين وخفيف، مقاوم للصدأ، ضمان سنة" },
                            { icon: Package, title: "حقيبة حمل", desc: "حقيبة أنيقة للتخزين والنقل الآمن" },
                            { icon: Zap, title: "تركيب 30 ثانية", desc: "بدون أدوات، سحب وتثبيت فقط" },
                            { icon: Truck, title: "تسليم سريع", desc: "خلال 24 ساعة داخل جدة" },
                            { icon: Check, title: "بديل قابل للتغيير", desc: "غيّر البانر واحتفظ بالهيكل" },
                        ].map((feature) => (
                            <div key={feature.title} className="card p-6 text-center">
                                <feature.icon className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                        استخدامات رول أب ستاند
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "معارض تجارية", "مؤتمرات", "حفلات افتتاح", "استقبال شركات",
                            "معارض توظيف", "فعاليات خاصة", "ندوات", "معارض جامعية",
                            "افتتاح فروع", "عروض المنتجات", "حملات دعائية", "معارض سيارات"
                        ].map((use) => (
                            <span key={use} className="bg-gray-100 px-4 py-2 rounded-full text-gray-700 hover:bg-amber-100 transition-colors">
                                {use}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 text-center">
                            الأسئلة الشائعة
                        </h2>
                        <p className="text-gray-600 text-center mb-12">
                            كل ما تريد معرفته عن رول أب ستاند
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
            <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        جاهز لمعرضك؟
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        اطلب الآن واحصل على رول أب احترافي خلال 24 ساعة.
                        <strong> خصم 15% عند طلب 3 قطع فأكثر!</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/quote"
                            className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            اطلب الآن
                            <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/966548923300?text=أريد طلب رول أب ستاند"
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
