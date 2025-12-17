import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { Tag, ArrowLeft, Package, Droplets, Barcode, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "طباعة ملصقات منتجات ولصق عبوات في جدة | بوابة الرواج",
    description: "طباعة ملصقات منتجات (Product Labels) في جدة. ملصقات غذائية، تجميلية، دوائية. مقاومة للماء، باركود، معلومات غذائية. أحجام وأشكال مخصصة.",
    keywords: ["ملصقات منتجات", "لصق عبوات", "product labels jeddah", "ستيكرات غذائية", "طباعة باركود"],
};

const LABEL_TYPES = [
    { name: "ملصقات ورقية", desc: "للمنتجات الجافة والتغليف الداخلي", price: "من 0.10 ريال/ملصق", icon: Tag },
    { name: "ملصقات مقاومة للماء", desc: "للمشروبات والمنظفات ومستحضرات التجميل", price: "من 0.20 ريال/ملصق", icon: Droplets },
    { name: "ملصقات شفافة", desc: "تظهر لون المنتج تحتها، مظهر فاخر", price: "من 0.25 ريال/ملصق", icon: Package },
]

const INDUSTRIES = [
    "أغذية ومشروبات", "مستحضرات تجميل", "منتجات تنظيف", "أدوية ومكملات",
    "عسل وزيوت", "عطور", "صابون يدوي"
];

const FAQS = [
    {
        question: "كم سعر 1000 ملصق منتج؟",
        answer: "يعتمد على الحجم والخامة. ملصق 5×5 سم ورقي: من 100 ريال. مقاوم للماء: من 200 ريال. شفاف: من 250 ريال. السعر يشمل الطباعة والقص، التصميم إضافي أو مجاني للطلبات الكبيرة.",
    },
    {
        question: "هل تطبعون ملصقات غذائية مع جدول القيم الغذائية؟",
        answer: "نعم، نصمم ونطبع ملصقات غذائية متوافقة مع اشتراطات هيئة الغذاء والدواء السعودية. نضيف جدول القيم الغذائية، المكونات، تاريخ الإنتاج/الانتهاء، والباركود.",
    },
];

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
                            district="المنطقة الصناعية"
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

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                        القطاعات التي نخدمها
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {INDUSTRIES.map((ind) => (
                            <span key={ind} className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                                {ind}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">الأسئلة الشائعة</h2>
                    <div className="space-y-6">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="card p-6">
                                <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">جاهز لملصقات منتجك؟</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-teal-600 font-bold rounded-lg inline-flex items-center">
                        اطلب الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
