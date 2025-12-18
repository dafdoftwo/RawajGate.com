import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import {
    UtensilsCrossed,
    ArrowLeft,
    BookOpen,
    Sparkles,
    Phone,
    Check,
    Palette,
    Zap,
    Shield,
} from "lucide-react";

export const metadata: Metadata = {
    title: "طباعة منيوهات مطاعم فاخرة في جدة | تصميم قوائم طعام | بوابة الرواج",
    description: "تصميم وطباعة منيوهات مطاعم احترافية في جدة. ورق مقاوم للماء، تغليف حراري، تصميم مجاني. منيوهات جلدية فاخرة وأخرى اقتصادية. تسليم خلال 48 ساعة.",
    keywords: [
        "منيو مطعم جدة",
        "طباعة قوائم طعام",
        "menu design jeddah",
        "منيوهات فاخرة",
        "تصميم منيو كافيه",
    ],
    openGraph: {
        title: "طباعة منيوهات مطاعم في جدة | بوابة الرواج",
        description: "منيوهات احترافية تعكس جودة مطعمك. تصميم مجاني + ورق مقاوم للبقع.",
        images: ["/images/restaurant-menu-design-leather-cover.webp"],
        locale: "ar_SA",
    },
};

const MENU_TYPES = [
    {
        name: "منيو جلدي فاخر",
        description: "غلاف جلد صناعي مع صفحات داخلية قابلة للاستبدال. الأفخم للمطاعم الفاخرة والفنادق.",
        price: "اطلب عرضك",
        icon: BookOpen,
        features: ["جلد صناعي", "صفحات قابلة للتبديل", "ختم ذهبي"],
    },
    {
        name: "منيو مغلف حرارياً",
        description: "تغليف حراري Lamination على الوجهين. مقاوم للماء والبقع، سهل التنظيف.",
        price: "سعر مميز",
        icon: Shield,
        features: ["مقاوم للماء", "سهل التنظيف", "شفاف لامع/مطفي"],
    },
    {
        name: "منيو طاولة (Table Tent)",
        description: "منيو صغير يوضع على الطاولة لعرض العروض الخاصة أو الأطباق المميزة.",
        price: "عرض خاص",
        icon: UtensilsCrossed,
        features: ["حجم صغير", "مثالي للعروض", "طباعة وجهين"],
    },
    {
        name: "منيو رقمي QR",
        description: "تصميم منيو رقمي + طباعة ملصقات QR Code للطاولات. حل ذكي واقتصادي.",
        price: "تواصل معنا",
        icon: Sparkles,
        features: ["بدون طباعة", "تحديث سهل", "صديق للبيئة"],
    },
];

const FAQS = [
    {
        question: "كيف أحصل على عرض لطباعة المنيوهات؟",
        answer: "تواصل معنا للحصول على عرض سعر مخصص حسب النوع والكمية. السعر يشمل الطباعة والتغليف. التصميم مجاني للكميات الكبيرة!",
    },
    {
        question: "هل المنيو يتحمل السوائل والزيوت؟",
        answer: "نعم، التغليف الحراري Lamination يحمي الورق من السوائل والزيوت. يمكن مسحه بمنديل مبلل. للحماية القصوى، نستخدم ورق Synthetic مقاوم للماء 100%.",
    },
    {
        question: "كم تستغرق طباعة المنيوهات؟",
        answer: "المنيوهات المغلفة: 24-48 ساعة. المنيوهات الجلدية: 5-7 أيام. التصميم يستغرق 2-3 أيام إضافية حسب عدد الأصناف.",
    },
    {
        question: "هل تصممون المنيو أم نرسل التصميم؟",
        answer: "نقدم كلا الخيارين! فريقنا يصمم منيوهات احترافية بتصوير أطباقكم (خدمة إضافية) أو بصور Stock. يمكنك أيضاً إرسال ملفك الجاهز للطباعة مباشرة.",
    },
    {
        question: "هل تطبعون منيوهات كبيرة للحائط؟",
        answer: "نعم، نطبع لوحات منيو كبيرة (A3, A2, A1) على فوم بورد أو أكريليك للتعليق خلف الكاشير. أيضاً منيوهات LED مضيئة للمطاعم السريعة.",
    },
];

export default function MenusPage() {
    const schemas = [
        generateServiceSchema({
            name: "Restaurant Menu Printing Jeddah",
            nameAr: "طباعة منيوهات مطاعم",
            description: "تصميم وطباعة منيوهات مطاعم احترافية في جدة. ورق مقاوم للماء وتصميم جذاب.",
            url: "https://rawajgate.com/commercial-printing/menus",
            image: "https://rawajgate.com/images/restaurant-menu-design-leather-cover.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "مطبوعات تجارية", url: "https://rawajgate.com/commercial-printing" },
            { name: "منيوهات مطاعم", url: "https://rawajgate.com/commercial-printing/menus" },
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
                                <span className="text-amber-400">منيوهات مطاعم</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/20 rounded-full mb-6">
                                <UtensilsCrossed className="w-4 h-4 text-rose-400" />
                                <span className="text-rose-300 text-sm font-medium">مقاوم للماء والبقع</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                <span className="text-gradient">منيوهات مطاعم</span> تفتح الشهية
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                المنيو هو أول ما يراه ضيفك! منيو احترافي بصور شهية وترتيب ذكي يزيد مبيعاتك.
                                كما أن استخدام <Link href="/commercial-printing/flyers-brochures" className="text-white hover:text-amber-200 underline">فلايرات العروض</Link> يساعد في جذب المزيد من الزوار.
                                في بوابة الرواج نصمم ونطبع منيوهات مقاومة للماء والبقع، من الكافيهات الصغيرة
                                إلى الفنادق الفاخرة.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                خبرة في تصميم منيوهات لأشهر مطاعم جدة. نفهم فن ترتيب الأصناف وتسعيرها
                                لتحقيق أعلى متوسط فاتورة. التصميم ليس مجرد جمالي - إنه أداة مبيعات!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href="/quote" className="btn-primary text-center">
                                    اطلب تصميم منيو
                                    <ArrowLeft className="inline-block mr-2 w-5 h-5" />
                                </Link>
                                <a href="tel:+966548923300" className="btn-secondary text-center">
                                    <Phone className="w-5 h-5 ml-2" />
                                    استشارة مجانية
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">48</div>
                                    <div className="text-xs text-white/60">ساعة تسليم</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">48</div>
                                    <div className="text-xs text-white/60">ساعة تسليم</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">مجاني</div>
                                    <div className="text-xs text-white/60">تصميم +100 منيو</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <GeoImage
                                src="/images/restaurant-menu-design-leather-cover.webp"
                                alt="منيوهات مطاعم مغلفة مقاومة للماء في جدة"
                                caption="منيوهات مغلفة لمطعم في التحلية - جدة"
                                district="التحلية"
                                cameraModel="Canon EOS R5 (35mm)"
                                className="rounded-2xl shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                            المنيو الجيد يزيد مبيعاتك 15%!
                        </h2>
                        <p>
                            الدراسات تثبت أن <strong>تصميم المنيو الذكي</strong> يرفع متوسط الفاتورة بنسبة
                            10-15%. الترتيب الصحيح للأصناف، استخدام الصور الشهية، وتقنيات eye tracking -
                            كلها علوم نطبقها في تصميم منيوهاتنا.
                        </p>
                        <p>
                            في <strong>بوابة الرواج</strong>، لا نطبع فقط - نصمم بذكاء. نضع الأطباق ذات
                            الهامش الأعلى في "المنطقة الذهبية"، نستخدم الألوان التي تفتح الشهية، ونرتب
                            الأسعار بطريقة تشجع على الطلب.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        أنواع المنيوهات
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {MENU_TYPES.map((menu) => (
                            <div key={menu.name} className="card p-8 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center shrink-0">
                                        <menu.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{menu.name}</h3>
                                        <p className="text-gray-600 mb-4">{menu.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {menu.features.map((f) => (
                                                <span key={f} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="text-rose-600 font-bold">{menu.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                            الأسئلة الشائعة
                        </h2>
                        <div className="space-y-6">
                            {FAQS.map((faq, i) => (
                                <div key={i} className="card p-6">
                                    <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-rose-500 to-rose-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">جاهز لمنيو يفتح الشهية؟</h2>
                    <p className="text-xl text-white/90 mb-8">تصميم احترافي + طباعة عالية الجودة + تسليم سريع</p>
                    <Link href="/quote" className="px-8 py-4 bg-white text-rose-600 font-bold rounded-lg inline-flex items-center">
                        اطلب الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
