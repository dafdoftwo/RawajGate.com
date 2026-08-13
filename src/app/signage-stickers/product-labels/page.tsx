import { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { SignageStickersFaqs } from "@/lib/faqs/signage-stickers";
import {
    Tag,
    ArrowLeft,
    Package,
    Droplets,
    Apple,
    Sparkles,
    Pill,
    Leaf,
} from "lucide-react";

export const metadata: Metadata = {
    openGraph: {
        title: "طباعة ملصقات منتجات في جدة | بوابة الرواج",
        description: "طباعة ملصقات منتجات (Product Labels) في جدة. ملصقات غذائية، تجميلية، دوائية. مقاومة للماء، باركود، معلومات غذائية. أحجام وأشكال مخصصة.",
        url: "https://rawajgate.com/signage-stickers/product-labels",
        images: [{ url: "/images/custom-product-labels-roll-stickers-jeddah.webp", width: 1200, height: 630, alt: "طباعة ملصقات منتجات في جدة" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "طباعة ملصقات منتجات في جدة",
        description: "طباعة ملصقات منتجات (Product Labels) في جدة. ملصقات غذائية، تجميلية، دوائية. مقاومة للماء، باركود، معلومات غذائية. أحجام وأشكال مخصصة.",
        images: ["/images/custom-product-labels-roll-stickers-jeddah.webp"],
    },
    alternates: { canonical: "/signage-stickers/product-labels" },
    title: "طباعة ملصقات منتجات في جدة",
    description: "طباعة ملصقات منتجات (Product Labels) في جدة. ملصقات غذائية، تجميلية، دوائية. مقاومة للماء، باركود، معلومات غذائية. أحجام وأشكال مخصصة.",
    keywords: ["ملصقات منتجات", "لصق عبوات", "product labels jeddah", "ستيكرات غذائية", "طباعة باركود"],
};

const LABEL_TYPES = [
    { name: "ملصقات ورقية", desc: "للمنتجات الجافة والتغليف الداخلي", price: "اطلب عرضك", icon: Tag },
    { name: "ملصقات مقاومة للماء", desc: "للمشروبات والمنظفات ومستحضرات التجميل", price: "سعر مميز", icon: Droplets },
    { name: "ملصقات شفافة", desc: "تظهر لون المنتج تحتها، مظهر فاخر", price: "تواصل معنا", icon: Package },
]

const INDUSTRIES = [
    "أغذية ومشروبات", "مستحضرات تجميل", "منتجات تنظيف", "أدوية ومكملات",
    "عسل وزيوت", "عطور", "صابون يدوي"
];

const TECH_SPECS = [
    { spec: "نوع الخامة", value: "ورقي / شفاف / مقاوم للماء" },
    { spec: "دقة الطباعة", value: "1200 DPI" },
    { spec: "الأشكال", value: "دائري / مستطيل / مخصص" },
    { spec: "التغليف", value: "لامع / مطفي" },
    { spec: "الحد الأدنى", value: "500 ملصق" },
    { spec: "وقت الإنتاج", value: "3-5 أيام" },
];

const USE_CASES_DETAILED = [
    { icon: Apple, title: "أغذية ومشروبات", desc: "ملصقات متوافقة مع اشتراطات SFDA" },
    { icon: Sparkles, title: "مستحضرات تجميل", desc: "تصاميم أنيقة مقاومة للماء" },
    { icon: Pill, title: "أدوية ومكملات", desc: "ملصقات طبية مع باركود" },
    { icon: Leaf, title: "منتجات عضوية", desc: "عسل، زيوت، منتجات محلية" },
];

const FAQS = SignageStickersFaqs["signage-stickers/product-labels"];

export default function ProductLabelsPage() {
    const schemas = [
        generateServiceSchema({
            name: "Product Labels Printing Jeddah",
            nameAr: "طباعة ملصقات منتجات",
            description: "طباعة ملصقات منتجات للأغذية ومستحضرات التجميل في جدة",
            url: "https://rawajgate.com/signage-stickers/product-labels",
            image: "https://rawajgate.com/images/custom-product-labels-roll-stickers-jeddah.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "لوحات وملصقات", url: "https://rawajgate.com/signage-stickers" },
            { name: "ملصقات منتجات", url: "https://rawajgate.com/signage-stickers/product-labels" },
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
                                <Link href="/signage-stickers" className="hover:text-white">لوحات وملصقات</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">ملصقات منتجات</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">ملصقات منتجات</span> احترافية
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                ملصق المنتج (Product Label) هو وجه منتجك على الرف! ملصق جذاب يبيع أكثر.
                                في بوابة الرواج نطبع ملصقات بجودة عالية. إذا احتجت مساعدة في التصميم، فريقنا يقدم <Link href="/design-services" className="text-white hover:text-amber-200 underline">خدمات تصميم</Link> احترافية.
                                خامات متنوعة: ورقية، مقاومة للماء، شفافة. مع باركود وجدول قيم غذائية.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                نخدم: مصانع أغذية، شركات تجميل، منتجين محليين، مشاريع منزلية.
                                أحجام وأشكال مخصصة (دائري، مستطيل، مخصص).
                            </p>

                            <Link href="/quote" className="btn-primary">
                                اطلب عينة مجانية <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/custom-product-labels-roll-stickers-jeddah.webp"
                            alt="ملصقات منتجات على عبوات في جدة"
                            
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        أنواع الملصقات
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {LABEL_TYPES.map((type) => (
                            <div key={type.name} className="card p-6 text-center">
                                <type.icon className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{type.name}</h3>
                                <p className="text-gray-600 text-sm mb-3">{type.desc}</p>
                                <div className="text-amber-600 font-bold">{type.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Detailed */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        القطاعات التي نخدمها
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {USE_CASES_DETAILED.map((useCase) => (
                            <div key={useCase.title} className="card p-6 text-center card-hover">
                                <useCase.icon className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{useCase.title}</h3>
                                <p className="text-gray-600 text-sm">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                        منتجات نخدمها
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {INDUSTRIES.map((ind) => (
                            <span key={ind} className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm hover:bg-teal-100 transition-colors">
                                {ind}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Specs */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <GeoImage
                            src="/images/custom-product-labels-roll-stickers-jeddah.webp"
                            alt="ملصقات منتجات على رول في جدة"
                            
                            
                            className="rounded-2xl shadow-xl"
                        />
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية
                            </h2>
                            <p className="text-gray-600 mb-8">
                                نستخدم أفضل الخامات والتقنيات لضمان ملصقات جميلة ومتينة
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
                            دليلك الشامل لملصقات المنتجات في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أهمية ملصق المنتج في نجاح مبيعاتك</h3>
                            <p>
                                ملصق المنتج (Product Label) هو أول ما يراه العميل على الرف! في سوق جدة التنافسي، الملصق الجذاب يصنع فارقاً كبيراً في قرار الشراء.
                                دراسات السلوك الاستهلاكي تظهر أن 70% من قرارات الشراء تُتخذ أمام الرف. ملصق احترافي بألوان جذابة ومعلومات واضحة
                                يميز منتجك عن المنافسين ويبني الثقة مع العميل.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">المتطلبات القانونية لملصقات المنتجات في السعودية</h3>
                            <p>
                                هيئة الغذاء والدواء السعودية (SFDA) تفرض اشتراطات صارمة على ملصقات المنتجات الغذائية والتجميلية.
                                يجب أن يتضمن الملصق: <strong>اسم المنتج</strong> بالعربية والإنجليزية، <strong>قائمة المكونات</strong> مرتبة تنازلياً،
                                <strong>جدول القيم الغذائية</strong> للمنتجات الغذائية، <strong>تاريخ الإنتاج والانتهاء</strong>،
                                <strong>اسم وعنوان المصنع/المستورد</strong>، <strong>الباركود</strong>، وتحذيرات الحساسية.
                                في بوابة الرواج، نساعدك في تصميم ملصقات متوافقة 100% مع هذه الاشتراطات.
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/luxury-business-cards-printing-jeddah.webp"
                                    alt="ملصقات منتجات غذائية في جدة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/printing-machines-digital-offset-equipment.webp"
                                    alt="طباعة ملصقات منتجات عالية الدقة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أنواع خامات ملصقات المنتجات</h3>
                            <p>
                                نوفر في بوابة الرواج ثلاثة أنواع رئيسية من الخامات. <strong>الملصقات الورقية</strong> اقتصادية ومناسبة
                                للمنتجات الجافة (بهارات، حبوب، مكسرات) والتغليف الداخلي. <strong>الملصقات الشفافة</strong> تظهر لون المنتج
                                تحتها وتعطي مظهراً فاخراً، مثالية للعسل والزيوت. <strong>الملصقات المقاومة للماء (BOPP/Vinyl)</strong>
                                ضرورية للمشروبات والعصائر والمنظفات ومستحضرات التجميل التي تتعرض للرطوبة.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">تطبيقات ملصقات المنتجات</h3>
                            <p>
                                <strong>الأغذية والمشروبات</strong>: ملصقات مع جدول قيم غذائية وباركود متوافقة مع SFDA.
                                <strong>مستحضرات التجميل</strong>: ملصقات أنيقة مقاومة للماء والزيوت.
                                <strong>الأدوية والمكملات</strong>: ملصقات طبية بمعلومات دوائية واضحة.
                                <strong>المنتجات المحلية</strong>: عسل، زيت زيتون، تمور - ملصقات تعكس جودة المنتج السعودي.
                                <strong>الصابون والعناية الشخصية</strong>: ملصقات تتحمل الرطوبة مع تصميم جذاب.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">نصائح لتصميم ملصق منتج ناجح</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li>اجعل اسم المنتج واضحاً وبارزاً</li>
                                <li>استخدم صورة عالية الجودة للمنتج إن أمكن</li>
                                <li>اختر ألواناً تتناسب مع طبيعة المنتج</li>
                                <li>تأكد من وضوح جميع المعلومات الإلزامية</li>
                                <li>اترك مساحة كافية للباركود</li>
                                <li>اختر خامة تناسب ظروف استخدام المنتج</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج لطباعة ملصقات المنتجات؟</h3>
                            <p>
                                في بوابة الرواج، نطبع ملصقات منتجات للمصانع والمنتجين في جدة منذ أكثر من 15 عاماً.
                                نفهم اشتراطات SFDA ونصمم ملصقات متوافقة معها. طباعتنا بدقة 1200 DPI تضمن وضوح النصوص والصور.
                                نوفر جميع الخامات (ورقية، شفافة، مقاومة للماء) وجميع الأشكال (دائري، مستطيل، مخصص).
                                فريق التصميم لدينا يساعدك في إخراج ملصق يعكس جودة منتجك ويجذب العملاء.
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
                        كل ما تريد معرفته عن طباعة ملصقات المنتجات في جدة
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

            <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">جاهز لملصقات منتجك؟</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        احصل على عينة مجانية وعرض سعر لملصقات منتجاتك. تصميم احترافي متوافق مع SFDA.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="px-8 py-4 bg-white text-teal-600 font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-100 transition-all">
                            اطلب عينة مجانية <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href={`https://wa.me/${BUSINESS.phone.whatsapp}?text=أريد طباعة ملصقات منتجات`}
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition-all"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        <RelatedServices currentPath="/signage-stickers/product-labels" />
        </>
    );
}
