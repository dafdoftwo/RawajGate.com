import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import {
    CreditCard,
    Check,
    Clock,
    Palette,
    Layers,
    Sparkles,
    ArrowLeft,
    Phone,
    Star,
    Shield,
    Zap,
    Award,
} from "lucide-react";

export const metadata: Metadata = {
    title: "طباعة بطاقات عمل فاخرة في جدة | تشطيبات مخملية وذهبية | بوابة الرواج",
    description: "طباعة بطاقات عمل احترافية في جدة بتشطيبات فاخرة: مخملي Soft Touch، رقائق ذهبية وفضية، ورق 350 جرام. تصميم مجاني، تسليم خلال 24 ساعة، خبرة 15 عام.",
    keywords: [
        "بطاقات عمل جدة",
        "طباعة كروت شخصية",
        "business cards jeddah",
        "بطاقات فاخرة",
        "كروت مخملية",
        "طباعة كروت ذهبية",
        "مطبعة بطاقات جدة",
        "كروت عمل سريعة",
    ],
    openGraph: {
        title: "طباعة بطاقات عمل فاخرة في جدة | بوابة الرواج",
        description: "بطاقات عمل احترافية بتشطيبات مخملية وذهبية. تسليم خلال 24 ساعة في جدة.",
        images: ["/images/luxury-business-cards-printing-jeddah.webp"],
        locale: "ar_SA",
        type: "website",
    },
};

const CARD_FINISHES = [
    {
        name: "تشطيب لامع Glossy",
        nameEn: "Glossy Lamination",
        description: "طبقة لامعة تعكس الضوء بشكل أنيق، تبرز الألوان الزاهية والصور بوضوح استثنائي. مثالية للتصاميم الملونة والحيوية.",
        price: "اطلب عرضك",
        gsm: "350 جرام كوشيه",
        icon: Sparkles,
    },
    {
        name: "تشطيب مطفي Matte",
        nameEn: "Matte Lamination",
        description: "سطح ناعم بدون انعكاسات، يعطي إحساساً راقياً ومهنياً. الاختيار الأول للمحامين والأطباء والاستشاريين.",
        price: "سعر مميز",
        gsm: "350 جرام كوشيه",
        icon: Layers,
    },
    {
        name: "تشطيب مخملي Soft Touch",
        nameEn: "Soft Touch Velvet",
        description: "ملمس حريري كالمخمل يترك انطباعاً لا يُنسى. التشطيب الأفخم للعلامات التجارية الراقية والفنادق.",
        price: "عرض خاص",
        gsm: "400 جرام آرت كارد",
        icon: Palette,
    },
    {
        name: "رقائق ذهبية/فضية Foil",
        nameEn: "Gold/Silver Foil Stamping",
        description: "طباعة بالرقائق المعدنية الذهبية أو الفضية على الشعار أو النص. تميز استثنائي للبراندات الفاخرة.",
        price: "تواصل معنا",
        gsm: "400 جرام + Foil",
        icon: CreditCard,
    },
];

const TECH_SPECS = [
    { spec: "وزن الورق", value: "350-400 جرام/م²" },
    { spec: "نوع الورق", value: "كوشيه آرت كارد ألماني" },
    { spec: "دقة الطباعة", value: "2400 DPI" },
    { spec: "الألوان", value: "CMYK + Pantone Spot" },
    { spec: "التشطيبات", value: "لامع، مطفي، مخملي، UV موضعي" },
    { spec: "الأبعاد القياسية", value: "9 × 5.5 سم" },
    { spec: "وقت الإنتاج", value: "24-72 ساعة" },
    { spec: "الحد الأدنى", value: "100 بطاقة" },
];

const FAQS = [
    {
        question: "كيف أحصل على عرض لطباعة بطاقات العمل في جدة؟",
        answer: "تواصل معنا للحصول على عرض سعر مخصص حسب الكمية ونوع التشطيب (لامع/مخملي/ذهبي). التصميم مجاني والطباعة على الوجهين. خصومات مميزة للكميات الكبيرة!",
    },
    {
        question: "كم يستغرق تسليم بطاقات العمل؟",
        answer: "التسليم العادي خلال 3 أيام عمل. التسليم السريع خلال 24 ساعة متوفر للطلبات داخل جدة مقابل رسوم إضافية بسيطة. للمناطق القريبة من طريق الملك (حي الروضة، التحلية، الصفا) التوصيل في نفس اليوم.",
    },
    {
        question: "ما الفرق بين التشطيب اللامع والمخملي؟",
        answer: "التشطيب اللامع (Glossy) يعكس الضوء ويبرز الألوان الزاهية، مثالي للمطاعم والمصممين. التشطيب المخملي (Soft Touch) له ملمس حريري فاخر بدون انعكاسات، مفضل للمحامين والأطباء والعلامات الفاخرة. كلاهما يحمي البطاقة من الخدوش.",
    },
    {
        question: "هل تصممون البطاقات أم أحضر تصميمي؟",
        answer: "نقدم كلا الخيارين! خدمة التصميم مجانية مع الطلبات، أو يمكنك إرسال ملفك الجاهز (PDF, AI, PSD). فريقنا يراجع جميع الملفات ويضمن جاهزيتها للطباعة بدون أخطاء.",
    },
    {
        question: "ما أفضل نوع ورق لبطاقات العمل؟",
        answer: "ننصح بورق 350 جرام كوشيه للمتانة والمظهر الاحترافي. للبطاقات الفاخرة جداً، ورق 400 جرام مع تشطيب مخملي. للمشاريع الصديقة للبيئة، نوفر ورق معاد تدويره 300 جرام.",
    },
];

export default function BusinessCardsPage() {
    const serviceSchema = generateServiceSchema({
        name: "Business Cards Printing Jeddah",
        nameAr: "طباعة بطاقات العمل في جدة",
        description: "طباعة بطاقات عمل احترافية بتشطيبات فاخرة في جدة. تصميم مجاني وتسليم خلال 24 ساعة.",
        url: "https://rawajgate.com/commercial-printing/business-cards",
        image: "https://rawajgate.com/images/luxury-business-cards-printing-jeddah.webp",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: "https://rawajgate.com" },
        { name: "مطبوعات تجارية", url: "https://rawajgate.com/commercial-printing" },
        { name: "بطاقات العمل", url: "https://rawajgate.com/commercial-printing/business-cards" },
    ]);

    const faqSchema = generateFAQSchema(FAQS);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                                <span className="text-amber-400">بطاقات العمل</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/20 rounded-full mb-6">
                                <Star className="w-4 h-4 text-amber-400" />
                                <span className="text-amber-300 text-sm font-medium">الخدمة الأكثر طلباً في جدة</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                طباعة <span className="text-gradient">بطاقات عمل</span> فاخرة في جدة
                            </h1>

                            {/* AI Snippet - First 50 words for SGE */}
                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                بطاقات العمل هي سفير علامتك التجارية الصامت. في بوابة الرواج نطبع لك بطاقات
                                احترافية بتشطيبات فاخرة (مخملي، ذهبي، UV موضعي) على ورق 350 جرام ألماني.
                                تصميم مجاني، تسليم خلال 24 ساعة داخل جدة.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                خبرة 15 عاماً في خدمة أكثر من 5000 شركة سعودية. من المحلات الصغيرة في البلد
                                إلى الشركات الكبرى في حي الأعمال - نحن شريك نجاحك في الطباعة.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href="/quote" className="btn-primary text-center">
                                    اطلب عرض سعر مجاني
                                    <ArrowLeft className="inline-block mr-2 w-5 h-5" />
                                </Link>
                                <a href="tel:+966548923300" className="btn-secondary text-center">
                                    <Phone className="w-5 h-5 ml-2" />
                                    اتصل الآن
                                </a>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">24</div>
                                    <div className="text-xs text-white/60">ساعة للتسليم</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">24</div>
                                    <div className="text-xs text-white/60">ساعة للتسليم</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">مجاني</div>
                                    <div className="text-xs text-white/60">التصميم</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <GeoImage
                                src="/images/luxury-business-cards-printing-jeddah.webp"
                                alt="طباعة بطاقات عمل فاخرة بتشطيب مخملي وذهبي في جدة - بوابة الرواج"
                                
                                
                                
                                className="rounded-2xl shadow-2xl"
                                priority
                            />
                            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-green-600" />
                                    <div>
                                        <span className="font-bold text-gray-900 block">تسليم سريع</span>
                                        <span className="text-sm text-gray-500">24 ساعة داخل جدة</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                            لماذا تحتاج بطاقة عمل احترافية في 2024؟
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p>
                                في عصر التحول الرقمي، قد يظن البعض أن بطاقات العمل أصبحت من الماضي. لكن الواقع
                                يثبت العكس تماماً! فبحسب دراسة حديثة، <strong>72% من رجال الأعمال السعوديين</strong>
                                يحكمون على مهنية الشركة من جودة بطاقة العمل خلال أول 10 ثوانٍ من اللقاء.
                            </p>

                            <p>
                                بطاقة العمل ليست مجرد ورقة تحمل معلومات الاتصال - إنها <strong>تجربة لمسية</strong>
                                تخلق انطباعاً أولياً لا يُمحى. عندما تمد يدك ببطاقة ذات ملمس مخملي وحروف ذهبية
                                بارزة، فأنت تقول لمحدثك: "أنا أهتم بالتفاصيل، وأنا جاد في عملي."
                            </p>

                            <p>
                                في <strong>بوابة الرواج</strong>، نفهم هذا جيداً. بالإضافة إلى خدمة <Link href="/design-services" className="text-amber-600 hover:text-amber-700 underline">تصميم البطاقات</Link>، نستخدم أحدث ماكينات الطباعة
                                الألمانية Heidelberg لنضمن لك بطاقات بجودة استثنائية. سواء كنت محامياً في حي
                                الشرفية، أو صاحب مطعم في التحلية، أو مهندساً في شركة مقاولات - نصمم لك بطاقة
                                تليق بمكانتك.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Card Finishes */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            أنواع التشطيبات المتوفرة
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            نوفر مجموعة متنوعة من التشطيبات الفاخرة لتناسب هوية علامتك التجارية وميزانيتك
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {CARD_FINISHES.map((finish) => (
                            <div key={finish.name} className="card p-8 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] flex items-center justify-center shrink-0">
                                        <finish.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{finish.name}</h3>
                                        <p className="text-sm text-gray-500 mb-3">{finish.nameEn}</p>
                                        <p className="text-gray-600 mb-4">{finish.description}</p>
                                        <div className="flex flex-wrap gap-4 text-sm">
                                            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                                                {finish.price}
                                            </span>
                                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                                {finish.gsm}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية
                            </h2>
                            <p className="text-gray-600 mb-8">
                                نستخدم أفضل الخامات والتقنيات لضمان بطاقات عمل تدوم لسنوات وتحافظ على مظهرها الأنيق.
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
                            alt="ماكينات طباعة رقمية وأوفست حديثة في مطبعة بوابة الرواج - جدة"
                            
                            
                            
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Use Cases / Who Needs This */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        من يحتاج بطاقات عمل احترافية؟
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "الشركات والمؤسسات",
                                description: "من المكاتب القانونية في الشرفية إلى شركات التقنية في حي الأعمال. بطاقات موحدة للموظفين تعكس هوية العلامة.",
                                icon: Award,
                            },
                            {
                                title: "رواد الأعمال",
                                description: "أصحاب المشاريع الناشئة والمتاجر الإلكترونية. اترك انطباعاً احترافياً في المعارض واجتماعات المستثمرين.",
                                icon: Zap,
                            },
                            {
                                title: "المهنيون المستقلون",
                                description: "الأطباء، المحامون، المهندسون، المصممون. بطاقة فاخرة تعكس خبرتك ومكانتك في السوق السعودي.",
                                icon: Shield,
                            },
                        ].map((useCase) => (
                            <div key={useCase.title} className="card p-8 text-center">
                                <useCase.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                                <p className="text-gray-600">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Rawaj Gate */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                            لماذا تختار بوابة الرواج لطباعة بطاقاتك؟
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "ماكينات Heidelberg ألمانية بدقة 2400 DPI",
                                "ورق مستورد من أوروبا (ألمانيا، إيطاليا)",
                                "تصميم مجاني مع كل طلب",
                                "تسليم خلال 24 ساعة داخل جدة",
                                "ضمان جودة الطباعة 100%",
                                "خصم 15% للكميات الكبيرة",
                                "معاينة رقمية قبل الطباعة",
                                "توصيل مجاني للطلبات +500 ريال",
                            ].map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                        <Check className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Context - Jeddah Districts */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                            نخدم جميع أحياء جدة
                        </h2>
                        <p className="text-gray-600 mb-8">
                            موقعنا القريب من طريق الملك فهد يتيح لنا الوصول السريع لجميع الأحياء.
                            توصيل مجاني للمنطقة المركزية.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "التحلية", "الروضة", "الصفا", "الشرفية", "البلد", "الحمراء",
                                "المرسلات", "الأندلس", "النزهة", "السلامة", "الفيصلية", "حي الأعمال"
                            ].map((district) => (
                                <span key={district} className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm border border-gray-200">
                                    {district}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 text-center">
                            الأسئلة الشائعة عن طباعة بطاقات العمل
                        </h2>
                        <p className="text-gray-600 text-center mb-12">
                            إجابات على أكثر الأسئلة شيوعاً من عملائنا في جدة
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
            <section className="py-20 bg-gradient-to-r from-amber-400 to-amber-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                        جاهز لطباعة بطاقاتك الاحترافية؟
                    </h2>
                    <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
                        احصل على عرض سعر مجاني الآن واستفد من <strong>خصم 15%</strong> على طلبك الأول.
                        تصميم مجاني + توصيل سريع داخل جدة.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/quote"
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            اطلب عرض سعر الآن
                            <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/966548923300?text=أريد طباعة بطاقات عمل"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            واتساب مباشر
                        </a>
                    </div>
                    <p className="text-gray-700 mt-6 text-sm">
                        أو زُر معرضنا في حي الروضة، طريق الملك فهد - مفتوح من 9 صباحاً حتى 9 مساءً
                    </p>
                </div>
            </section>
        </>
    );
}
