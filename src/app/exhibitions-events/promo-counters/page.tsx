import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import {
    Store,
    ArrowLeft,
    Package,
    Lightbulb,
    ShoppingBag,
    Coffee,
    Briefcase,
    Users,
} from "lucide-react";

export const metadata: Metadata = {
    title: "كاونترات ترويجية للمعارض في جدة | Promo Counters | بوابة الرواج",
    description: "كاونترات ترويجية (Promo Counters) للمعارض والتذوق في جدة. قابلة للطي، خفيفة، جرافيك قابل للتغيير. مثالية للتسويق المباشر وتوزيع العينات.",
    keywords: ["كاونتر ترويجي", "promo counter jeddah", "طاولة معرض", "عربة تذوق", "كاونتر توزيع"],
};

const COUNTER_TYPES = [
    { name: "كاونتر قابل للطي", desc: "خفيف جداً، ينطوي في حقيبة، للتنقل بين الفروع", price: "اطلب عرضك الآن", icon: Package },
    { name: "كاونتر مضيء LED", desc: "إضاءة داخلية، تأثير فاخر ليلاً", price: "سعر خاص", icon: Lightbulb },
    { name: "كاونتر خشب MDF", desc: "ثابت ومتين، للاستخدام المتكرر في المحل", price: "تواصل معنا", icon: Store },
];

const TECH_SPECS = [
    { spec: "الوزن", value: "5-15 كجم" },
    { spec: "الأبعاد", value: "90×40×100 سم" },
    { spec: "الجرافيك", value: "قماش / PVC" },
    { spec: "التركيب", value: "5 دقائق" },
    { spec: "التخزين", value: "حقيبة حمل" },
    { spec: "وقت الإنتاج", value: "5-7 أيام" },
];

const USE_CASES = [
    { icon: ShoppingBag, title: "توزيع العينات", desc: "في السوبرماركت والمولات" },
    { icon: Coffee, title: "تذوق المنتجات", desc: "الأغذية والمشروبات" },
    { icon: Briefcase, title: "المعارض", desc: "استقبال الزوار" },
    { icon: Users, title: "الفعاليات", desc: "التسجيل والاستقبال" },
];

const FAQS = [
    {
        question: "ما وزن الكاونتر القابل للطي؟",
        answer: "كاونتر الفابريك أو الببلستيك يزن 5-8 كجم فقط، يأتي مع حقيبة حمل سهلة النقل. شخص واحد يمكنه حمله وتركيبه بسهولة. الكاونتر الخشبي أثقل (15-20 كجم) لكنه أكثر متانة.",
    },
    {
        question: "هل يمكن تغيير الجرافيك لاحقاً؟",
        answer: "نعم للكاونترات القماشية (Fabric) والبلاستيكية. يمكنك طلب طباعة جرافيك جديد لكل حملة أو منتج جديد. السعر أقل بكثير من شراء كاونتر جديد - تواصل معنا للتفاصيل!",
    },
    {
        question: "كم يستغرق التركيب؟",
        answer: "التركيب سهل جداً ولا يحتاج أدوات. الكاونتر القابل للطي يركب في 3-5 دقائق. يفتح كالمظلة ثم تثبت الرفوف وتركب الجرافيك. نوفر فيديو تعليمي مع كل طلب.",
    },
    {
        question: "هل الكاونتر يتحمل الأوزان؟",
        answer: "نعم، السطح العلوي يتحمل 10-15 كجم للكاونتر القابل للطي، وحتى 30 كجم للكاونتر الخشبي. مناسب لوضع عينات المنتجات والأكواب والبروشورات.",
    },
    {
        question: "هل توفرون كاونتر مضيء LED؟",
        answer: "نعم، نوفر كاونترات مضيئة بإضاءة LED داخلية. تعطي تأثيراً فاخراً خاصة في الفعاليات المسائية والمعارض الداخلية. الإضاءة تعمل بالكهرباء (فيشة عادية).",
    },
    {
        question: "كم يستغرق الإنتاج؟",
        answer: "إنتاج كاونتر كامل (هيكل + جرافيك) يستغرق 5-7 أيام عمل. طباعة جرافيك فقط 3-4 أيام. التصميم 2-3 أيام إضافية إذا لزم.",
    },
];

export default function PromoCountersPage() {
    const schemas = [
        generateServiceSchema({
            name: "Promo Counters Jeddah",
            nameAr: "كاونترات ترويجية",
            description: "كاونترات ترويجية للمعارض والتذوق في جدة",
            url: "https://rawajgate.com/exhibitions-events/promo-counters",
            image: "https://rawajgate.com/images/promotion-counter-table-portable-kiosk.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "معارض وفعاليات", url: "https://rawajgate.com/exhibitions-events" },
            { name: "كاونترات ترويجية", url: "https://rawajgate.com/exhibitions-events/promo-counters" },
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
                                <Link href="/exhibitions-events" className="hover:text-white">معارض وفعاليات</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">كاونترات ترويجية</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">كاونترات ترويجية</span> تجذب الزوار
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                الكاونترات الترويجية (Promo Counters) أداة أساسية للتسويق المباشر. توزيع
                                عينات في المولات، تذوق منتجات في السوبرماركت، استقبال في المعارض. لا تنسى تجهيز <Link href="/commercial-printing/flyers-brochures" className="text-white hover:text-amber-200 underline">فلايرات وبروشورات</Link> لتوزيعها مع العينات.
                                خفيفة، قابلة للطي، بتصميم جذاب يحمل شعارك.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                نوفر كاونترات بلاستيكية خفيفة، قماشية فاخرة، خشبية متينة، ومضيئة LED.
                                التركيب بدون أدوات في دقائق.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                اطلب عرض سعر <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/promotion-counter-table-portable-kiosk.webp"
                            alt="كاونتر ترويجي للتذوق في جدة"
                            district="رد سي مول"
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        أنواع الكاونترات
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {COUNTER_TYPES.map((type) => (
                            <div key={type.name} className="card p-6 text-center">
                                <type.icon className="w-10 h-10 text-pink-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{type.name}</h3>
                                <p className="text-gray-600 text-sm mb-3">{type.desc}</p>
                                <div className="text-amber-600 font-bold">{type.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        استخدامات الكاونتر الترويجي
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {USE_CASES.map((useCase) => (
                            <div key={useCase.title} className="card p-6 text-center card-hover">
                                <useCase.icon className="w-10 h-10 text-pink-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{useCase.title}</h3>
                                <p className="text-gray-600 text-sm">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Specs */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <GeoImage
                            src="/images/promotion-counter-table-portable-kiosk.webp"
                            alt="كاونتر ترويجي للمعارض والتذوق في جدة"
                            caption="كاونتر قابل للطي مع جرافيك"
                            district="رد سي مول"
                            className="rounded-2xl shadow-xl"
                        />
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية
                            </h2>
                            <p className="text-gray-600 mb-8">
                                كاونترات خفيفة وعملية مصممة للتسويق المباشر
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {TECH_SPECS.map((item) => (
                                    <div key={item.spec} className="bg-white p-4 rounded-lg shadow-sm">
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
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                            دليلك الشامل للكاونترات الترويجية في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">ما هو الكاونتر الترويجي ولماذا تحتاجه؟</h3>
                            <p>
                                الكاونتر الترويجي (Promo Counter) هو طاولة عرض محمولة تُستخدم في التسويق المباشر والفعاليات.
                                في مولات جدة مثل رد سي مول ومول العرب، ستجد كاونترات التذوق والتوزيع في كل مكان.
                                الشركات الكبرى تستخدمها لعرض منتجاتها الجديدة وتوزيع العينات. الكاونتر يحمل شعارك ورسالتك
                                ويجذب انتباه المتسوقين. سهل النقل والتركيب، مما يجعله مثالياً للحملات المتنقلة بين الفروع.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أنواع الكاونترات الترويجية</h3>
                            <p>
                                نوفر في بوابة الرواج عدة أنواع لتناسب مختلف الاحتياجات.
                                <strong>الكاونتر القابل للطي</strong> الأخف وزناً (5-8 كجم)، ينطوي في حقيبة، مثالي للفرق التي تتنقل بين الفروع.
                                <strong>الكاونتر المضيء LED</strong> بإضاءة داخلية تعطي تأثيراً فاخراً، مثالي للفعاليات المسائية.
                                <strong>الكاونتر الخشبي MDF</strong> أكثر متانة للاستخدام الثابت في المحل أو المعرض الدائم.
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/exhibition-booth-custom-wood-shell-scheme.webp"
                                    alt="كاونتر ترويجي في معرض تجاري"
                                    caption="كاونتر استقبال في معرض"
                                    district="مركز جدة للمعارض"
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                    alt="تصميم كاونترات ترويجية"
                                    caption="جلسة تصميم كاونتر"
                                    district="الروضة"
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">استخدامات الكاونتر الترويجي</h3>
                            <p>
                                <strong>توزيع العينات</strong> في السوبرماركت والهايبرماركت - طريقة فعالة لتعريف العملاء بمنتجك.
                                <strong>التذوق</strong> للأغذية والمشروبات الجديدة - يرفع المبيعات بشكل ملحوظ.
                                <strong>المعارض التجارية</strong> كنقطة استقبال وتسجيل الزوار.
                                <strong>الفعاليات والمؤتمرات</strong> للتسجيل وتوزيع المواد.
                                <strong>إطلاق المنتجات</strong> في المولات والأماكن العامة.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">نصائح لاستخدام الكاونتر الترويجي بفعالية</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li>اختر موقعاً استراتيجياً في ممرات العملاء الرئيسية</li>
                                <li>صمم جرافيك جذاب بألوان واضحة وشعار كبير</li>
                                <li>درّب الموظفين على التعامل الاحترافي مع العملاء</li>
                                <li>وفر عينات كافية ومواد ترويجية (فلايرات، بروشورات)</li>
                                <li>اجمع بيانات العملاء المهتمين للمتابعة</li>
                                <li>استخدم إضاءة LED للفعاليات المسائية</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج للكاونترات الترويجية؟</h3>
                            <p>
                                في بوابة الرواج، نوفر كاونترات ترويجية للشركات في جدة منذ أكثر من 15 عاماً.
                                نفهم احتياجات التسويق المباشر ونقدم حلولاً عملية. كاونتراتنا خفيفة وسهلة النقل والتركيب.
                                الجرافيك مطبوع بجودة عالية وألوان زاهية. نوفر جميع الأنواع (قابل للطي، مضيء، خشبي).
                                فريق التصميم لدينا يصمم جرافيك يجذب انتباه العملاء. التسليم خلال 5-7 أيام.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 text-center">الأسئلة الشائعة</h2>
                    <p className="text-gray-600 text-center mb-12">
                        كل ما تريد معرفته عن الكاونترات الترويجية في جدة
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

            <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">روّج منتجك بذكاء!</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        احصل على كاونتر ترويجي بتصميم احترافي. خفيف الوزن وسهل التركيب.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="px-8 py-4 bg-white text-pink-600 font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-100 transition-all">
                            اطلب عرض سعر <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/966548923300?text=أريد كاونتر ترويجي"
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
