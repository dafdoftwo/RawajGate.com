import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import {
    Trees,
    ArrowLeft,
    Palette,
    Wrench,
    Lightbulb,
    Phone,
    Check,
    Clock,
    Ruler,
    Users,
    Award,
} from "lucide-react";

export const metadata: Metadata = {
    title: "تصميم وتنفيذ أجنحة معارض خشبية في جدة | ستاندات مخصصة | بوابة الرواج",
    description: "تصميم وتنفيذ أجنحة معارض خشبية مخصصة في جدة. ستاندات فاخرة للمعارض الكبرى في سوبر دوم ومركز جدة للمناسبات. تصميم 3D مجاني، تنفيذ متكامل، وضمان الجودة. خبرة 15 عام.",
    keywords: [
        "أجنحة معارض جدة",
        "ستاند معرض خشبي",
        "custom exhibition booth",
        "جناح معرض مخصص",
        "booth fabrication jeddah",
        "تجهيز معارض",
        "سوبر دوم جدة",
    ],
    openGraph: {
        title: "أجنحة معارض خشبية مخصصة في جدة | بوابة الرواج",
        description: "تصميم وتنفيذ أجنحة معارض تميزك عن المنافسين. تصميم 3D مجاني وتنفيذ متكامل.",
        images: ["/images/custom-wooden-stand-jeddah-super-dome.webp"],
        locale: "ar_SA",
    },
};

const BOOTH_SERVICES = [
    {
        name: "جناح خشبي مخصص بالكامل",
        description: "تصميم وتنفيذ جناح فريد من الصفر حسب رؤيتك. يشمل الهيكل الخشبي، الإضاءة، الجرافيك، والأثاث.",
        price: "اطلب عرضك المخصص",
        area: "من 9 م²",
        icon: Trees,
    },
    {
        name: "جناح زاوية Premium",
        description: "أجنحة بواجهتين أو ثلاث واجهات مفتوحة. الأكثر جذباً للزوار في المعارض الكبرى.",
        price: "عرض خاص للشركات",
        area: "من 18 م²",
        icon: Ruler,
    },
    {
        name: "جناح جزيرة Island Booth",
        description: "جناح مفتوح من الجهات الأربع، مثالي للعلامات الكبرى والرعاة الرسميين.",
        price: "تواصل للسعر",
        area: "من 36 م²",
        icon: Award,
    },
    {
        name: "تجديد وتطوير جناح قائم",
        description: "تحديث جناحك الحالي بتصميم جديد أو إضافة عناصر مميزة.",
        price: "حسب المشروع",
        area: "أي مساحة",
        icon: Wrench,
    },
];

const MATERIALS = [
    { name: "MDF المقاوم للرطوبة", use: "الهياكل والجدران", quality: "18 مم" },
    { name: "أكريليك شفاف", use: "الفواصل والعرض", quality: "5-10 مم" },
    { name: "ستانلس ستيل", use: "الحواف والديكور", quality: "مصقول/مطفي" },
    { name: "فينيل طباعة", use: "الجرافيك المطبوع", quality: "3M لامع/مطفي" },
    { name: "LED Strip", use: "الإضاءة المخفية", quality: "6500K/3000K" },
    { name: "موكيت معارض", use: "الأرضيات", quality: "4 مم مقاوم" },
];

const FAQS = [
    {
        question: "كيف أحصل على عرض سعر لجناح معرض مخصص؟",
        answer: "تواصل معنا لتحصل على عرض سعر مخصص يناسب احتياجاتك! نقدم أسعار تنافسية تعتمد على المساحة والتصميم المطلوب. السعر يشمل التصميم والتنفيذ والتركيب والتفكيك. احصل على استشارة مجانية الآن!",
    },
    {
        question: "كم يستغرق تنفيذ جناح المعرض؟",
        answer: "مرحلة التصميم 5-7 أيام، التصنيع 7-14 يوم حسب التعقيد، التركيب في الموقع 1-2 يوم. ننصح بالتواصل قبل المعرض بشهر على الأقل للمشاريع الكبيرة.",
    },
    {
        question: "هل تقدمون خدمة تأجير الأجنحة؟",
        answer: "نعم، نوفر أجنحة جاهزة للتأجير بتكلفة أقل. كما نقدم خيار 'التأجير مع التحديث' حيث يمكنك استئجار جناح قائم مع تغيير الجرافيك والألوان.",
    },
    {
        question: "هل تركبون في جميع قاعات المعارض في جدة؟",
        answer: "نعم، نركب في: سوبر دوم جدة، مركز جدة للمعارض والمناسبات، فندق هيلتون، انتركونتيننتال، الهيلتون، وجميع الفنادق والقاعات. لدينا تصاريح رسمية من جميع الجهات.",
    },
    {
        question: "ماذا يحدث للجناح بعد المعرض؟",
        answer: "نتولى التفكيك والتخزين. تستطيع إعادة استخدام الجناح في معرض آخر (بخصم 50% على التركيب)، بيعه لنا، أو الاحتفاظ به في مستودعاتنا مقابل رسوم تخزين شهرية.",
    },
];

export default function CustomWoodBoothsPage() {
    const schemas = [
        generateServiceSchema({
            name: "Custom Exhibition Booths Jeddah",
            nameAr: "أجنحة معارض خشبية مخصصة",
            description: "تصميم وتنفيذ أجنحة معارض خشبية مخصصة للمعارض الكبرى في جدة",
            url: "https://rawajgate.com/exhibitions-events/custom-wood-booths",
            image: "https://rawajgate.com/images/custom-wooden-stand-jeddah-super-dome.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "معارض وفعاليات", url: "https://rawajgate.com/exhibitions-events" },
            { name: "أجنحة خشبية مخصصة", url: "https://rawajgate.com/exhibitions-events/custom-wood-booths" },
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
                                <span className="text-amber-400">أجنحة خشبية مخصصة</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full mb-6">
                                <Award className="w-4 h-4 text-emerald-400" />
                                <span className="text-emerald-300 text-sm font-medium">خبرة 15 سنة في معارض جدة</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                <span className="text-gradient">أجنحة معارض</span> تميزك عن المنافسين
                            </h1>

                            {/* AI Snippet */}
                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                أجنحة المعارض الخشبية المخصصة هي الحل الأمثل للشركات التي تريد ترك انطباع لا يُنسى.
                                في بوابة الرواج نصمم وننفذ أجنحة فريدة بالكامل - من الرسم الأولي حتى التركيب في
                                سوبر دوم جدة ومراكز المعارض. ويمكننا أيضاً توفير <Link href="/exhibitions-events/roll-up-stands" className="text-emerald-200 underline">رول أب ستاند</Link> لإبراز العروض الخاصة داخل الجناح.
                                تصميم 3D مجاني.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                لا نؤمن بالأجنحة المكررة! كل مشروع نبدأه من الصفر بناءً على هوية علامتك ورسالتك
                                التسويقية. فريقنا من المصممين والنجارين المحترفين ينفذ رؤيتك بدقة متناهية.
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
                                    <div className="text-3xl font-bold text-amber-400">200+</div>
                                    <div className="text-xs text-white/60">جناح تم تنفيذه</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">15</div>
                                    <div className="text-xs text-white/60">سنة خبرة</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">مجاني</div>
                                    <div className="text-xs text-white/60">تصميم 3D</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <GeoImage
                                src="/images/custom-wooden-stand-jeddah-super-dome.webp"
                                alt="جناح معرض خشبي مخصص في سوبر دوم جدة - تصميم وتنفيذ بوابة الرواج"
                                caption="جناح 36 م² بتصميم مخصص - معرض البناء السعودي 2024"
                                district="سوبر دوم جدة"
                                cameraModel="Canon EOS R5 (16-35mm)"
                                className="rounded-2xl shadow-2xl"
                                priority
                            />
                            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-emerald-600" />
                                    <div>
                                        <span className="font-bold text-gray-900 block">فريق متكامل</span>
                                        <span className="text-sm text-gray-500">تصميم + تنفيذ + تركيب</span>
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
                            لماذا جناح مخصص وليس جاهز؟
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p>
                                في عالم المعارض، لديك ثوانٍ معدودة لجذب انتباه الزائر وسط عشرات الأجنحة المتنافسة.
                                الأجنحة الجاهزة (Shell Scheme) قد تؤدي الغرض الأساسي، لكنها لن تميزك أبداً.
                                <strong>الجناح المخصص هو استثمار في صورة علامتك التجارية</strong> - انطباع أولي
                                قوي يتحول لعلاقات عمل وصفقات.
                            </p>

                            <p>
                                تخيّل زائر معرض يسير في الممر... عشرات الأجنحة المتشابهة بيضاء رمادية، ثم يصل
                                لجناحك - تصميم فريد، إضاءة جذابة، زوايا مميزة، شاشات تفاعلية. <strong>أين سيتوقف؟</strong>
                            </p>

                            <p>
                                في <strong>بوابة الرواج</strong>، نفهم أن المعرض فرصة استثنائية للتواصل المباشر
                                مع العملاء المحتملين. لذلك نصمم أجنحة تخدم أهدافك التسويقية: منطقة استقبال جذابة،
                                غرفة اجتماعات خاصة، شاشات عرض، منطقة تجربة المنتج. كل تفصيلة لها غرض.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            أنواع أجنحة المعارض
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            حلول متكاملة تناسب جميع الميزانيات والأهداف التسويقية
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {BOOTH_SERVICES.map((service) => (
                            <div key={service.name} className="card p-8 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shrink-0">
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <div className="flex flex-wrap gap-3 text-sm">
                                            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                                                {service.price}
                                            </span>
                                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full flex items-center gap-1">
                                                <Ruler className="w-3 h-3" />
                                                {service.area}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        مراحل تنفيذ جناح المعرض
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "الاستشارة الأولى", desc: "نفهم متطلباتك، هوية علامتك، أهداف المعرض، والميزانية المتوقعة", icon: Users },
                            { step: "02", title: "التصميم ثلاثي الأبعاد", desc: "نقدم 2-3 مقترحات تصميم 3D واقعية للاختيار والتعديل حتى الموافقة", icon: Palette },
                            { step: "03", title: "التصنيع والإنتاج", desc: "تصنيع في ورشتنا المجهزة: نجارة، دهان، جرافيك، كهرباء، LED", icon: Wrench },
                            { step: "04", title: "التركيب والتسليم", desc: "التركيب في موقع المعرض من فريقنا المتخصص مع ضمان الجودة", icon: Check },
                        ].map((phase) => (
                            <div key={phase.step} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                                    <phase.icon className="w-7 h-7 text-emerald-600" />
                                </div>
                                <div className="text-sm text-emerald-600 font-bold mb-2">الخطوة {phase.step}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{phase.title}</h3>
                                <p className="text-gray-600 text-sm">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Materials */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                        الخامات المستخدمة
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        نستخدم خامات عالية الجودة لضمان متانة الجناح ومظهره الاحترافي
                    </p>

                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {MATERIALS.map((material) => (
                            <div key={material.name} className="card p-4 text-center">
                                <h3 className="font-bold text-gray-900 mb-1 text-sm">{material.name}</h3>
                                <p className="text-xs text-gray-500 mb-2">{material.use}</p>
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{material.quality}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <GeoImage
                            src="/images/exhibition-booth-fabrication-design-jeddah.webp"
                            alt="ورشة تصنيع أجنحة المعارض في جدة - بوابة الرواج"
                            caption="ورشة التصنيع الخاصة بنا في المنطقة الصناعية"
                            district="المنطقة الصناعية"
                            cameraModel="Sony A7R IV (24mm)"
                            className="rounded-2xl shadow-xl"
                        />
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                لماذا بوابة الرواج؟
                            </h2>

                            <ul className="space-y-4">
                                {[
                                    { icon: Palette, text: "تصميم 3D مجاني قبل التنفيذ" },
                                    { icon: Trees, text: "ورشة تصنيع مجهزة بالكامل" },
                                    { icon: Lightbulb, text: "فريق كهرباء وإضاءة متخصص" },
                                    { icon: Wrench, text: "تركيب وتفكيك من فريقنا" },
                                    { icon: Clock, text: "التزام صارم بمواعيد التسليم" },
                                    { icon: Award, text: "تصاريح رسمية من جميع القاعات" },
                                ].map((item) => (
                                    <li key={item.text} className="flex items-center gap-3">
                                        <item.icon className="w-5 h-5 text-emerald-600 shrink-0" />
                                        <span className="text-gray-700">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Venues */}
            <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-6">
                        نركب في جميع قاعات جدة
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        لدينا تصاريح رسمية وخبرة تركيب في جميع مراكز المعارض والفنادق الكبرى
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "سوبر دوم جدة", "مركز جدة للمعارض", "هيلتون جدة",
                            "انتركونتيننتال جدة", "فيرمونت الكورنيش", "كراون بلازا"
                        ].map((venue) => (
                            <span key={venue} className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white/90">
                                {venue}
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
                            إجابات على أهم الأسئلة حول أجنحة المعارض المخصصة
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
                        معرضك القادم يستحق جناحاً استثنائياً
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        تواصل معنا الآن للحصول على تصميم 3D مجاني واستشارة بدون التزام.
                        <strong> نساعدك من الفكرة حتى التركيب.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/quote"
                            className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            احصل على تصميم 3D مجاني
                            <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/966548923300?text=أريد تصميم جناح معرض"
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
