import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { PromotionalGiftsFaqs } from "@/lib/faqs/promotional-gifts";
import {
    Briefcase,
    ArrowLeft,
    PenLine,
    BookOpen,
    Calendar,
    Phone,
    Check,
    Gift,
    Award,
    Users,
    Percent,
} from "lucide-react";

export const metadata: Metadata = {
    alternates: { canonical: "/promotional-gifts/office-gifts" },
    title: "هدايا مكتبية للشركات في جدة",
    description: "هدايا مكتبية فاخرة للشركات في جدة: أقلام معدنية، دفاتر جلدية، أجندات، ومجموعات هدايا بشعار شركتك. طباعة ليزر وتطريز. خصومات الكميات.",
    keywords: [
        "هدايا مكتبية",
        "أقلام دعائية جدة",
        "دفاتر شركات",
        "أجندات مخصصة",
        "office gifts jeddah",
        "corporate stationery",
        "طباعة أقلام",
    ],
    openGraph: {
        title: "هدايا مكتبية للشركات في جدة | بوابة الرواج",
        description: "هدايا مكتبية فاخرة للشركات في جدة: أقلام معدنية، دفاتر جلدية، أجندات، ومجموعات هدايا بشعار شركتك. طباعة ليزر وتطريز. خصومات الكميات.",
        url: "https://rawajgate.com/promotional-gifts/office-gifts",
        images: [{ url: "/images/branded-notebooks-diaries-calendar-gift-sets.webp", width: 1200, height: 630, alt: "هدايا مكتبية للشركات في جدة" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "هدايا مكتبية للشركات في جدة",
        description: "هدايا مكتبية فاخرة للشركات في جدة: أقلام معدنية، دفاتر جلدية، أجندات، ومجموعات هدايا بشعار شركتك. طباعة ليزر وتطريز. خصومات الكميات.",
        images: ["/images/branded-notebooks-diaries-calendar-gift-sets.webp"],
    },
};

const PRODUCT_CATEGORIES = [
    {
        name: "أقلام دعائية",
        description: "أقلام بلاستيكية اقتصادية للتوزيع الواسع، وأقلام معدنية فاخرة للعملاء المميزين. طباعة ليزر أو حفر.",
        priceRange: "اطلب عرضك",
        minOrder: "100 قطعة",
        icon: PenLine,
        variants: ["بلاستيك عادي", "بلاستيك فاخر", "معدني", "مع علبة"],
    },
    {
        name: "دفاتر ومذكرات",
        description: "دفاتر A5 و A4 بغلاف جلدي أو كرتوني، طباعة الشعار بالختم الحراري Hot Stamping أو طباعة UV.",
        priceRange: "سعر مميز",
        minOrder: "50 قطعة",
        icon: BookOpen,
        variants: ["غلاف كرتوني", "غلاف جلدي", "سلك معدني", "خياطة"],
    },
    {
        name: "أجندات سنوية",
        description: "أجندات سنوية بتصميم داخلي عربي/إنجليزي، غلاف جلدي فاخر، جيب داخلي، شريط علّام.",
        priceRange: "عرض خاص",
        minOrder: "25 قطعة",
        icon: Calendar,
        variants: ["A5 يومية", "A4 أسبوعية", "صغيرة جيب", "فاخرة علبة"],
    },
    {
        name: "مجموعات هدايا",
        description: "علب هدايا متكاملة: قلم + دفتر + أجندة + USB. مثالية لكبار العملاء والمناسبات الخاصة.",
        priceRange: "تواصل معنا",
        minOrder: "20 مجموعة",
        icon: Gift,
        variants: ["علبة ثنائية", "علبة ثلاثية", "علبة فاخرة", "مخصصة"],
    },
];

const BRANDING_METHODS = [
    { method: "طباعة ليزر", desc: "للأقلام المعدنية والبلاستيك الداكن", best: "أقلام" },
    { method: "طباعة UV", desc: "ألوان كاملة على الأسطح الفاتحة", best: "دفاتر" },
    { method: "ختم حراري Foil", desc: "ذهبي/فضي فاخر على الجلد", best: "أجندات" },
    { method: "حفر ليزر", desc: "نقش دائم على المعدن", best: "أقلام فاخرة" },
];

const FAQS = PromotionalGiftsFaqs["promotional-gifts/office-gifts"];

export default function OfficeGiftsPage() {
    const schemas = [
        generateServiceSchema({
            name: "Corporate Office Gifts Jeddah",
            nameAr: "هدايا مكتبية للشركات",
            description: "هدايا مكتبية فاخرة للشركات في جدة: أقلام، دفاتر، أجندات بشعار شركتك",
            url: "https://rawajgate.com/promotional-gifts/office-gifts",
            image: "https://rawajgate.com/images/branded-notebooks-diaries-calendar-gift-sets.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "هدايا دعائية", url: "https://rawajgate.com/promotional-gifts" },
            { name: "هدايا مكتبية", url: "https://rawajgate.com/promotional-gifts/office-gifts" },
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
                                <Link href="/promotional-gifts" className="hover:text-white">هدايا دعائية</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">هدايا مكتبية</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
                                <Award className="w-4 h-4 text-amber-400" />
                                <span className="text-amber-300 text-sm font-medium">الهدية التي تبقى على المكتب</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                <span className="text-gradient">هدايا مكتبية</span> تحمل علامتك التجارية
                            </h1>

                            {/* AI Snippet */}
                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                الهدايا المكتبية هي إعلان يومي على مكتب عميلك! أقلام، دفاتر، أجندات تحمل شعار
                                شركتك وتراها العين كل يوم. ولتكتمل الهدية، يمكنك إرفاق <Link href="/promotional-gifts/tech-gadgets" className="text-amber-200 underline">فلاش ميموري</Link> يحمل ملف تعريف شركتك. في بوابة الرواج نوفر مئات الخيارات بأسعار تنافسية،
                                مع طباعة ليزر عالية الجودة.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                من الأقلام الاقتصادية للتوزيع الواسع إلى مجموعات الهدايا الفاخرة لكبار العملاء -
                                نوفر حلول لجميع الميزانيات. خصومات كبيرة للكميات، وتوصيل مجاني داخل جدة.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href="/quote" className="btn-primary text-center">
                                    اطلب كتالوج مجاني
                                    <ArrowLeft className="inline-block mr-2 w-5 h-5" />
                                </Link>
                                <a href="tel:+966548923300" className="btn-secondary text-center">
                                    <Phone className="w-5 h-5 ml-2" />
                                    استشارة مجانية
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">500+</div>
                                    <div className="text-xs text-white/60">منتج متوفر</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">500+</div>
                                    <div className="text-xs text-white/60">منتج متوفر</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">20%</div>
                                    <div className="text-xs text-white/60">خصم الكميات</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <GeoImage
                                src="/images/branded-notebooks-diaries-calendar-gift-sets.webp"
                                alt="هدايا مكتبية للشركات - دفاتر وأجندات ومجموعات هدايا في جدة"
                                
                                
                                
                                className="rounded-2xl shadow-2xl"
                                priority
                            />
                            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <Percent className="w-5 h-5 text-amber-600" />
                                    <div>
                                        <span className="font-bold text-gray-900 block">خصم 20%</span>
                                        <span className="text-sm text-gray-500">للطلبات +5000 قطعة</span>
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
                            لماذا الهدايا المكتبية من أذكى أنواع التسويق؟
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p>
                                فكّر في المعادلة: قلم بـ 5 ريال يستخدمه عميلك <strong>كل يوم لمدة سنة</strong>،
                                يراه زملاؤه وزواره. هذا يعني أن كل انطباع يكلفك أقل من <strong>هللة واحدة!</strong>
                                لا يوجد نوع إعلان آخر يقدم هذه القيمة.
                            </p>

                            <p>
                                الهدايا المكتبية تحقق 3 أهداف في آن واحد: <strong>تذكير مستمر</strong> بعلامتك
                                عند الاستخدام اليومي، <strong>انطباع إيجابي</strong> لأنك أهديت شيئاً مفيداً،
                                <strong>وانتشار</strong> لأن الهدية تُرى من الآخرين.
                            </p>

                            <p>
                                في <strong>بوابة الرواج</strong>، نوفر أكثر من 500 منتج مكتبي جاهز للطباعة.
                                من أقلام 2 ريال للتوزيع في المعارض، إلى مجموعات هدايا 200 ريال لرئيس مجلس
                                الإدارة. نحن شريكك في اختيار الهدية المناسبة لكل مناسبة.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            تشكيلتنا من الهدايا المكتبية
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            مئات المنتجات بجميع الأسعار والجودات
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {PRODUCT_CATEGORIES.map((product) => (
                            <div key={product.name} className="card p-8 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shrink-0">
                                        <product.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                                        <p className="text-gray-600 mb-4">{product.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {product.variants.map((v) => (
                                                <span key={v} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                                    {v}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-3 text-sm">
                                            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                                                {product.priceRange}
                                            </span>
                                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                                الحد الأدنى: {product.minOrder}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Branding Methods */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                        طرق طباعة الشعار
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        {BRANDING_METHODS.map((method) => (
                            <div key={method.method} className="card p-6 text-center">
                                <h3 className="font-bold text-gray-900 mb-2">{method.method}</h3>
                                <p className="text-gray-600 text-sm mb-3">{method.desc}</p>
                                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs">
                                    الأفضل لـ: {method.best}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Volume Discounts */}
            <section className="py-16 bg-gradient-to-br from-amber-400 to-amber-500">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                            خصومات الكميات
                        </h2>

                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                { qty: "100-499", discount: "السعر الأساسي" },
                                { qty: "500-999", discount: "خصم 10%" },
                                { qty: "1000-4999", discount: "خصم 15%" },
                                { qty: "5000+", discount: "خصم 20%" },
                            ].map((tier) => (
                                <div key={tier.qty} className="bg-white/90 rounded-xl p-4">
                                    <div className="font-bold text-gray-900">{tier.qty}</div>
                                    <div className="text-amber-700">{tier.discount}</div>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-800 mt-6">
                            * الشركات بعقود سنوية تحصل على أسعار خاصة إضافية
                        </p>
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
                            كل ما تريد معرفته عن الهدايا المكتبية الدعائية
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
                        جهّز هدايا شركتك الآن!
                    </h2>
                    <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
                        احصل على كتالوج مجاني + عرض سعر مخصص. <strong>عينات متوفرة للشركات.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/quote"
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            اطلب كتالوج مجاني
                            <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/966548923300?text=أريد هدايا مكتبية للشركة"
                            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        <RelatedServices currentPath="/promotional-gifts/office-gifts" />
        </>
    );
}
