import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import {
    Box,
    ArrowLeft,
    Lightbulb,
    Layers,
    Zap,
    Phone,
    Check,
    Clock,
    Ruler,
    Sun,
    Shield,
    Wrench,
} from "lucide-react";

export const metadata: Metadata = {
    title: "لافتات محلات 3D وحروف بارزة مضيئة في جدة | بوابة الرواج",
    description: "تصميم وتنفيذ لافتات محلات ثلاثية الأبعاد وحروف بارزة مضيئة LED في جدة. أكريليك، ستانلس ستيل، نيون فلكس. ضمان 3 سنوات، تصميم 3D مجاني، تركيب احترافي. خبرة 15 عام.",
    keywords: [
        "لافتات محلات جدة",
        "حروف بارزة",
        "3D signage",
        "لوحات مضيئة LED",
        "حروف أكريليك",
        "shop signage jeddah",
        "حروف ستانلس ستيل",
    ],
    openGraph: {
        title: "لافتات محلات 3D وحروف بارزة في جدة | بوابة الرواج",
        description: "لافتات ثلاثية الأبعاد تميز محلك. حروف مضيئة LED، أكريليك، ستانلس. ضمان 3 سنوات.",
        images: ["/images/3d-shop-signage-letters-acrylic-jeddah.webp"],
        locale: "ar_SA",
    },
};

const SIGN_TYPES = [
    {
        name: "حروف أكريليك مضيئة",
        nameEn: "Illuminated Acrylic Letters",
        description: "حروف من الأكريليك الشفاف أو الملون بإضاءة LED داخلية. الأكثر شيوعاً للمحلات التجارية والمطاعم.",
        price: "اطلب عرضك",
        features: ["إضاءة LED موفرة", "ألوان متعددة", "سهلة الصيانة"],
        icon: Lightbulb,
    },
    {
        name: "حروف ستانلس ستيل",
        nameEn: "Stainless Steel Letters",
        description: "حروف معدنية فاخرة من الستانلس ستيل المصقول أو المطفي. الاختيار الأول للبنوك والفنادق والعلامات الفاخرة.",
        price: "سعر فاخر",
        features: ["متانة عالية", "مقاوم للصدأ", "مظهر فاخر"],
        icon: Layers,
    },
    {
        name: "نيون فلكس Neon Flex",
        nameEn: "LED Neon Flex",
        description: "تقنية LED حديثة بمظهر النيون الكلاسيكي الجذاب. مثالي للمطاعم والكافيهات والأماكن الترفيهية.",
        price: "عرض مميز",
        features: ["مظهر عصري", "استهلاك منخفض", "ألوان زاهية"],
        icon: Zap,
    },
    {
        name: "لوحة كومبوزيت كاملة",
        nameEn: "Complete Composite Board",
        description: "لوحة خلفية من الكومبوزيت الألمنيوم مع حروف بارزة أو طباعة. حل اقتصادي متكامل.",
        price: "تواصل معنا",
        features: ["تكلفة أقل", "تركيب سريع", "صيانة سهلة"],
        icon: Box,
    },
];

const TECH_SPECS = [
    { spec: "نوع LED", value: "SMD 2835 / 5050" },
    { spec: "إضاءة", value: "3000K / 4000K / 6500K" },
    { spec: "العمر الافتراضي", value: "50,000 ساعة" },
    { spec: "استهلاك الكهرباء", value: "12V DC موفر" },
    { spec: "سماكة الأكريليك", value: "3-10 مم" },
    { spec: "ستانلس ستيل", value: "304 Grade" },
];

const FAQS = [
    {
        question: "كيف أحصل على عرض للافتة محلي 3D في جدة؟",
        answer: "تواصل معنا للحصول على عرض سعر مخصص حسب نوع الخامة والحجم وعدد الحروف. التركيب والمحول مشمول. احصل على تصميم 3D مجاني!",
    },
    {
        question: "كم يستغرق تنفيذ اللافتة؟",
        answer: "التصميم والموافقة 3-5 أيام، التصنيع 5-10 أيام، والتركيب يوم واحد. إجمالي 2-3 أسابيع للطلبات العادية. نوفر خدمة عاجلة خلال أسبوع مقابل رسوم إضافية.",
    },
    {
        question: "هل تحتاج اللافتة المضيئة صيانة؟",
        answer: "اللافتات LED الحديثة لا تحتاج صيانة تقريباً. العمر الافتراضي 50,000 ساعة (حوالي 5+ سنوات تشغيل متواصل). نقدم ضمان 3 سنوات شامل الإضاءة والتركيب.",
    },
    {
        question: "هل تحتاج اللافتة لتصريح بلدي؟",
        answer: "نعم، اللافتات الخارجية تحتاج تصريح من بلدية جدة. نتولى إجراءات التصريح بالنيابة عنك ضمن خدماتنا. التصريح يستغرق عادة 5-7 أيام عمل.",
    },
    {
        question: "ما الفرق بين الأكريليك والستانلس ستيل؟",
        answer: "الأكريليك أخف وأرخص، يضيء بالكامل، مثالي للمحلات التجارية. الستانلس ستيل أثقل وأغلى، مظهر فاخر معدني، يضيء من الخلف فقط (Backlit)، مثالي للبنوك والشركات الكبرى.",
    },
];

export default function ShopSignage3DPage() {
    const schemas = [
        generateServiceSchema({
            name: "3D Shop Signage & LED Letters Jeddah",
            nameAr: "لافتات محلات 3D وحروف بارزة",
            description: "تصميم وتنفيذ لافتات محلات ثلاثية الأبعاد وحروف بارزة مضيئة في جدة",
            url: "https://rawajgate.com/signage-stickers/shop-signage-3d",
            image: "https://rawajgate.com/images/3d-shop-signage-letters-acrylic-jeddah.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "لوحات وملصقات", url: "https://rawajgate.com/signage-stickers" },
            { name: "لافتات 3D", url: "https://rawajgate.com/signage-stickers/shop-signage-3d" },
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
                                <Link href="/signage-stickers" className="hover:text-white">لوحات وملصقات</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">لافتات 3D</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
                                <Lightbulb className="w-4 h-4 text-amber-400" />
                                <span className="text-amber-300 text-sm font-medium">ضمان 3 سنوات • تصميم مجاني</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                <span className="text-gradient">لافتات محلات</span> تلفت الأنظار
                            </h1>

                            {/* AI Snippet */}
                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                لافتات المحلات ثلاثية الأبعاد (3D Signage) هي الطريقة الأقوى لجذب العملاء من الشارع.
                                حروف بارزة مضيئة بتقنية LED تعمل 24 ساعة، تبرز هوية محلك في الليل والنهار. في
                                بوابة الرواج ننفذ جميع الأنواع: أكريليك، ستانلس ستيل، ونيون فلكس.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                من مطاعم التحلية إلى محلات البلد، ومن فروع البنوك إلى الفنادق الفاخرة -
                                ننفذ لافتات بأعلى معايير الجودة مع ضمان 3 سنوات وخدمة تصريح بلدي مشمولة.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href="/quote" className="btn-primary text-center">
                                    احصل على تصميم 3D مجاني
                                    <ArrowLeft className="inline-block mr-2 w-5 h-5" />
                                </Link>
                                <a href="tel:+966548923300" className="btn-secondary text-center">
                                    <Phone className="w-5 h-5 ml-2" />
                                    استشارة مجانية
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">3</div>
                                    <div className="text-xs text-white/60">سنوات ضمان</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">3</div>
                                    <div className="text-xs text-white/60">سنوات ضمان</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">500+</div>
                                    <div className="text-xs text-white/60">لافتة تم تنفيذها</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <GeoImage
                                src="/images/3d-shop-signage-letters-acrylic-jeddah.webp"
                                alt="لافتة محل حروف بارزة مضيئة أكريليك في جدة - بوابة الرواج"
                                caption="لافتة حروف أكريليك مضيئة - مطعم في التحلية"
                                district="التحلية"
                                cameraModel="Nikon D850 (24mm)"
                                className="rounded-2xl shadow-2xl"
                                priority
                            />
                            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-green-600" />
                                    <div>
                                        <span className="font-bold text-gray-900 block">تصريح بلدي</span>
                                        <span className="text-sm text-gray-500">مشمول في الخدمة</span>
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
                            لماذا لافتة 3D مضيئة وليس لوحة عادية؟
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p>
                                في شارع تجاري مزدحم، لديك ثوانٍ فقط لجذب انتباه المارة. <strong>اللافتة المسطحة
                                    تختفي بين عشرات اللافتات</strong>، بينما الحروف البارزة ثلاثية الأبعاد تخلق عمقاً
                                بصرياً يستوقف العين. وعندما تضاف الإضاءة؟ تصبح واجهتك مرئية 24 ساعة!
                            </p>

                            <p>
                                الدراسات تؤكد أن <strong>70% من قرارات الشراء</strong> تُتخذ في الموقع. إذا لم يلاحظ
                                العميل محلك، لن يدخله. اللافتة المضيئة الجذابة ليست رفاهية - إنها استثمار في زيادة
                                المبيعات، ويمكنك تعزيزها بـ <Link href="/signage-stickers/wall-decals" className="text-amber-600 hover:text-amber-700 underline">ملصقات جدارية</Link> داخلية لخلق تجربة متكاملة.
                            </p>

                            <p>
                                في <strong>بوابة الرواج</strong>، نصنع لافتاتنا في ورشتنا المجهزة بالكامل. نستخدم
                                ماكينات CNC Router للقص الدقيق، وأجود خامات الأكريليك والستانلس. الإضاءة LED
                                موفرة وتدوم +50,000 ساعة. ونقدم ضمان 3 سنوات شامل.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sign Types */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            أنواع اللافتات المتوفرة
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            نوفر جميع أنواع اللافتات لتناسب هوية علامتك وميزانيتك
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {SIGN_TYPES.map((sign) => (
                            <div key={sign.name} className="card p-8 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shrink-0">
                                        <sign.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{sign.name}</h3>
                                        <p className="text-sm text-gray-500 mb-3">{sign.nameEn}</p>
                                        <p className="text-gray-600 mb-4">{sign.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {sign.features.map((f) => (
                                                <span key={f} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="text-amber-600 font-bold">{sign.price}</div>
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
                        <GeoImage
                            src="/images/printing-machines-digital-offset-equipment.webp"
                            alt="ماكينات تصنيع اللافتات في بوابة الرواج"
                            caption="ورشة تصنيع اللافتات - ماكينات CNC Router"
                            district="المنطقة الصناعية"
                            className="rounded-2xl shadow-xl"
                        />
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية
                            </h2>
                            <p className="text-gray-600 mb-8">
                                نستخدم أجود الخامات لضمان متانة اللافتة ووضوح الإضاءة
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

            {/* Weather Resistance */}
            <section className="py-16 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-heading font-bold mb-6">
                            مصممة لتحمل طقس جدة
                        </h2>
                        <p className="text-white/80 text-lg mb-8">
                            نعلم أن الرطوبة والملوحة والحرارة تمثل تحدياً. لذلك نستخدم خامات مقاومة للعوامل الجوية
                        </p>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { icon: Sun, title: "مقاوم للأشعة", desc: "UV Protected" },
                                { icon: Shield, title: "ضد الرطوبة", desc: "Waterproof" },
                                { icon: Wrench, title: "لا يصدأ", desc: "Rust-free" },
                                { icon: Clock, title: "50,000 ساعة", desc: "عمر LED" },
                            ].map((feature) => (
                                <div key={feature.title} className="bg-white/10 backdrop-blur rounded-xl p-4">
                                    <feature.icon className="w-8 h-8 mx-auto mb-2" />
                                    <h3 className="font-bold">{feature.title}</h3>
                                    <p className="text-white/60 text-sm">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        مراحل تنفيذ اللافتة
                    </h2>

                    <div className="grid md:grid-cols-5 gap-6">
                        {[
                            { step: "01", title: "المعاينة", desc: "زيارة موقع المحل وأخذ المقاسات" },
                            { step: "02", title: "التصميم 3D", desc: "تصميم واقعي للموافقة" },
                            { step: "03", title: "التصريح", desc: "استخراج التصريح البلدي" },
                            { step: "04", title: "التصنيع", desc: "تنفيذ في ورشتنا" },
                            { step: "05", title: "التركيب", desc: "تركيب احترافي في الموقع" },
                        ].map((phase) => (
                            <div key={phase.step} className="text-center">
                                <div className="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                    {phase.step}
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
                            كل ما تريد معرفته عن لافتات المحلات 3D
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
                        اجعل محلك يتألق!
                    </h2>
                    <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
                        تواصل معنا للحصول على معاينة مجانية وتصميم 3D واقعي للافتتك الجديدة.
                        <strong> ضمان 3 سنوات + تصريح بلدي مشمول.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/quote"
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            احصل على تصميم مجاني
                            <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/966548923300?text=أريد لافتة محل 3D"
                            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
