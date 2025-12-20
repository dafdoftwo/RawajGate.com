import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import {
    BookCopy,
    ArrowLeft,
    Layers,
    Receipt,
    Truck,
    Wrench,
    Store,
    Building2,
} from "lucide-react";

export const metadata: Metadata = {
    title: "طباعة دفاتر NCR كربونية في جدة | فواتير وإيصالات | بوابة الرواج",
    description: "طباعة دفاتر NCR كربونية (نسخ ذاتية) في جدة: فواتير، إيصالات، طلبات، وسندات قبض. 2-4 نسخ بألوان مختلفة. ترقيم وتثقيب.",
    keywords: ["دفاتر NCR", "فواتير كربونية", "إيصالات", "سندات قبض", "NCR books jeddah", "طباعة نسخ ذاتية"],
};

const NCR_TYPES = [
    { name: "دفتر نسختين (أبيض + أصفر)", copies: "2 نسخ", price: "اطلب عرضك", icon: BookCopy },
    { name: "دفتر 3 نسخ (أبيض + أصفر + وردي)", copies: "3 نسخ", price: "سعر مميز", icon: Layers },
    { name: "دفتر 4 نسخ (أبيض + أصفر + وردي + أخضر)", copies: "4 نسخ", price: "تواصل معنا", icon: Receipt },
];

const USE_CASES = [
    "فواتير مبيعات", "إيصالات استلام", "سندات قبض", "أوامر توريد",
    "طلبات صيانة", "عقود إيجار", "محاضر استلام", "كشوفات جرد"
];

const TECH_SPECS = [
    { spec: "عدد النسخ", value: "2 - 4 نسخ" },
    { spec: "الأحجام", value: "A4, A5, A6, مخصص" },
    { spec: "الترقيم", value: "تسلسلي آلي" },
    { spec: "التثقيب", value: "مثقب للفصل السهل" },
    { spec: "الغلاف", value: "كرتون مقوى" },
    { spec: "وقت الإنتاج", value: "5-7 أيام" },
];

const USE_CASES_DETAILED = [
    { icon: Store, title: "المحلات التجارية", desc: "فواتير مبيعات وإيصالات" },
    { icon: Truck, title: "شركات النقل", desc: "سندات استلام وتسليم" },
    { icon: Wrench, title: "ورش الصيانة", desc: "طلبات صيانة وإصلاح" },
    { icon: Building2, title: "المقاولات", desc: "أوامر توريد ومحاضر" },
];

const FAQS = [
    {
        question: "ما هي دفاتر NCR وكيف تعمل؟",
        answer: "NCR (No Carbon Required) هي دفاتر نسخ ذاتية بدون ورق كربون. تستخدم أوراقاً مطلية بمواد كيميائية خاصة. عند الكتابة على الورقة الأولى، تتفاعل المواد وتنتقل الكتابة تلقائياً للنسخ التالية. تُستخدم للفواتير والإيصالات حيث تحتاج نسخة للعميل وأخرى للملف.",
    },
    {
        question: "كيف أحصل على عرض سعر لدفاتر NCR في جدة؟",
        answer: "تواصل معنا عبر الواتساب أو الهاتف للحصول على عرض سعر مخصص حسب عدد النسخ (2/3/4) والكمية والحجم المطلوب. السعر يشمل الطباعة والترقيم التسلسلي والتثقيب والغلاف الكرتوني. أسعار تنافسية للكميات!",
    },
    {
        question: "هل تطبعون دفاتر بحجم مخصص؟",
        answer: "نعم، نطبع جميع الأحجام القياسية: A4 (الأكبر)، A5 (المتوسط)، A6 (الصغير). ونوفر أيضاً أحجاماً مخصصة حسب احتياجك بحد أدنى 200 دفتر.",
    },
    {
        question: "ما الفرق بين دفتر نسختين وثلاث وأربع؟",
        answer: "دفتر نسختين (أبيض+أصفر): للاستخدام البسيط - نسخة للعميل ونسخة للملف. دفتر 3 نسخ (أبيض+أصفر+وردي): الأكثر شيوعاً - للعميل، للحسابات، للملف. دفتر 4 نسخ: للشركات الكبيرة التي تحتاج نسخة إضافية للمستودع أو المحاسبة.",
    },
    {
        question: "هل الترقيم التسلسلي متوفر؟",
        answer: "نعم، الترقيم التسلسلي متوفر ومشمول في السعر. يبدأ من أي رقم تختاره (0001، 1000، إلخ). الترقيم يمنع التلاعب ويسهل المراجعة المحاسبية.",
    },
    {
        question: "هل توفرون خدمة التصميم؟",
        answer: "نعم، فريق التصميم لدينا يصمم الدفتر بما يتوافق مع هويتك البصرية ويتضمن جميع المعلومات المطلوبة (الشعار، معلومات الاتصال، الرقم الضريبي). التصميم مجاني للكميات الكبيرة.",
    },
];

export default function NCRBooksPage() {
    const schemas = [
        generateServiceSchema({
            name: "NCR Books Printing Jeddah",
            nameAr: "طباعة دفاتر NCR",
            description: "طباعة دفاتر NCR كربونية (نسخ ذاتية) في جدة للفواتير والإيصالات",
            url: "https://rawajgate.com/commercial-printing/ncr-books",
            image: "https://rawajgate.com/images/luxury-business-cards-printing-jeddah.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "مطبوعات تجارية", url: "https://rawajgate.com/commercial-printing" },
            { name: "دفاتر NCR", url: "https://rawajgate.com/commercial-printing/ncr-books" },
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
                                <span className="text-amber-400">دفاتر NCR</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">دفاتر NCR</span> للفواتير والإيصالات
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                دفاتر NCR (النسخ الذاتية) هي الحل المثالي للفواتير والإيصالات. بدون كربون،
                                بدون فوضى - اكتب على الورقة الأولى وتنتقل الكتابة تلقائياً للنسخ التالية.
                                في بوابة الرواج نطبع دفاتر 2-4 نسخ بترقيم وتثقيب.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                تُستخدم في: <Link href="/commercial-printing/menus" className="text-white hover:text-amber-200 underline">المطاعم</Link>، المحلات، ورش الصيانة، شركات النقل، المقاولات.
                                كل دفتر بغلاف كرتوني وظهر كربوني للكتابة المريحة.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                اطلب عرض سعر <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/luxury-business-cards-printing-jeddah.webp"
                            alt="دفاتر NCR كربونية للفواتير في جدة"
                            district="المنطقة الصناعية"
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                        كيف تعمل دفاتر NCR؟
                    </h2>
                    <div className="prose prose-lg text-gray-700">
                        <p>
                            تقنية <strong>NCR (No Carbon Required)</strong> تستخدم أوراقاً مطلية بمواد كيميائية
                            خاصة. عند الضغط بالقلم، تتفاعل المواد وتنتقل الكتابة للورقة التالية.
                            <strong>لا كربون، لا اتساخ، لا تلطيخ للأيدي!</strong>
                        </p>
                        <p>
                            كل نسخة بلون مختلف للتمييز: الأبيض للعميل، الأصفر للحسابات، الوردي للملف.
                            الترقيم التسلسلي يمنع التلاعب ويسهل المراجعة.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        أنواع الدفاتر
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {NCR_TYPES.map((type) => (
                            <div key={type.name} className="card p-6 text-center">
                                <type.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{type.name}</h3>
                                <p className="text-gray-500 text-sm mb-3">{type.copies}</p>
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
                                <useCase.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
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
                        الاستخدامات الشائعة
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {USE_CASES.map((use) => (
                            <span key={use} className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm hover:bg-blue-100 transition-colors">
                                {use}
                            </span>
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
                                نستخدم أفضل الخامات والتقنيات لضمان دفاتر متينة وعملية
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
                            alt="ماكينات طباعة دفاتر NCR في بوابة الرواج جدة"
                            caption="طباعة دفاتر NCR بترقيم تسلسلي"
                            district="المنطقة الصناعية"
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Extended SEO Content */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                            دليلك الشامل لدفاتر NCR في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">ما هي دفاتر NCR ولماذا تحتاجها؟</h3>
                            <p>
                                دفاتر NCR (No Carbon Required) هي دفاتر نسخ ذاتية تعمل بدون ورق كربون تقليدي.
                                تستخدم تقنية الطلاء الكيميائي حيث تكون كل ورقة مطلية بمواد خاصة. عند الضغط بالقلم على الورقة الأولى،
                                تتفاعل المواد الكيميائية وتنتقل الكتابة للورقة التالية بدون اتساخ أو تلطيخ للأيدي.
                                هذه التقنية جعلت دفاتر NCR الخيار الأمثل للفواتير والإيصالات في المحلات والشركات.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا دفاتر NCR أفضل من الكربون التقليدي؟</h3>
                            <p>
                                دفاتر NCR تتفوق على ورق الكربون التقليدي بعدة مميزات. <strong>لا اتساخ</strong> - لا يوجد ورق كربون
                                يلوث الأيدي أو الملابس. <strong>نسخ أوضح</strong> - الكتابة تظهر بوضوح على جميع النسخ.
                                <strong>أكثر متانة</strong> - النسخ تدوم أطول ولا تبهت بسرعة. <strong>أنظف للتخزين</strong> -
                                لا توجد أوراق كربون إضافية تحتاج للتخلص منها.
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/luxury-business-cards-printing-jeddah.webp"
                                    alt="دفاتر NCR للفواتير والإيصالات في جدة"
                                    caption="دفاتر NCR بترقيم تسلسلي"
                                    district="المنطقة الصناعية"
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                    alt="استخدام دفاتر NCR في المحلات التجارية"
                                    caption="فاتورة NCR في محل تجاري"
                                    district="البلد"
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">استخدامات دفاتر NCR في الأعمال</h3>
                            <p>
                                دفاتر NCR لها استخدامات واسعة في مختلف القطاعات. <strong>المحلات التجارية</strong> تستخدمها لفواتير
                                المبيعات وإيصالات الاستلام. <strong>شركات النقل</strong> تحتاجها لسندات التسليم والاستلام.
                                <strong>ورش الصيانة</strong> تستخدمها لطلبات الإصلاح وتسليم المركبات. <strong>المقاولات</strong>
                                تحتاجها لأوامر التوريد ومحاضر الاستلام. <strong>المطاعم</strong> تستخدمها لطلبات المطبخ والفواتير.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">المتطلبات القانونية للفواتير في السعودية</h3>
                            <p>
                                وفقاً لأنظمة هيئة الزكاة والضريبة والجمارك، يجب أن تتضمن الفواتير عدة عناصر إلزامية:
                                <strong>اسم المنشأة</strong>، <strong>الرقم الضريبي</strong> (VAT Number)، <strong>تاريخ الفاتورة</strong>،
                                <strong>وصف السلعة أو الخدمة</strong>، <strong>المبلغ شاملاً الضريبة</strong>. في بوابة الرواج،
                                نصمم دفاتر NCR متوافقة مع جميع المتطلبات القانونية.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">نصائح لاختيار دفتر NCR المناسب</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li>للاستخدام البسيط (عميل + ملف): اختر دفتر نسختين</li>
                                <li>للمحاسبة المتكاملة: اختر دفتر 3 نسخ (عميل + حسابات + ملف)</li>
                                <li>للشركات الكبيرة: اختر دفتر 4 نسخ مع نسخة للمستودع</li>
                                <li>حجم A5 هو الأكثر عملية لمعظم الاستخدامات</li>
                                <li>احرص على وجود ترقيم تسلسلي لمنع التلاعب</li>
                                <li>تأكد من وجود الرقم الضريبي على الدفتر</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج لطباعة دفاتر NCR؟</h3>
                            <p>
                                في بوابة الرواج، نطبع دفاتر NCR للمحلات والشركات في جدة منذ أكثر من 15 عاماً.
                                نستخدم ورق NCR مستورد عالي الجودة يضمن وضوح النسخ. الترقيم التسلسلي آلي ودقيق.
                                التثقيب نظيف لسهولة الفصل. الغلاف كرتوني متين يحمي الدفتر. فريق التصميم لدينا
                                يصمم دفاترك بما يتوافق مع هويتك ومتطلبات الفوترة السعودية.
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
                        كل ما تريد معرفته عن طباعة دفاتر NCR في جدة
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

            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">احتاج دفاتر للمحل أو الشركة؟</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        احصل على عرض سعر مجاني لدفاتر NCR بترقيم تسلسلي وتصميم احترافي
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-100 transition-all">
                            اطلب عرض سعر <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/966548923300?text=أريد طباعة دفاتر NCR"
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
