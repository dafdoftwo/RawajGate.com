import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { ShoppingBag, ArrowLeft, Package, Gift, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "أكياس وتغليف دعائي في جدة | شنط ورقية وقماشية بالشعار | بوابة الرواج",
    description: "أكياس ورقية وقماشية وعلب تغليف دعائية في جدة. طباعة شعار الشركة على الأكياس. مثالية للمحلات والهدايا والفعاليات. أحجام وخامات متنوعة.",
    keywords: ["أكياس ورقية", "شنط قماشية", "paper bags branded", "تغليف دعائي جدة", "علب هدايا"],
};

const BAG_TYPES = [
    { name: "أكياس ورقية", desc: "كرافت أو لامع، مقابض حبل أو مسطحة", price: "من 3 ريال/كيس", icon: ShoppingBag },
    { name: "شنط تسوق قماشية", desc: "قطن أو بوليستر، قابلة للغسل، صديقة للبيئة", price: "من 8 ريال/شنطة", icon: ShoppingBag },
    { name: "علب هدايا", desc: "كرتون مقوى، مغناطيسية أو ربطة ستان", price: "من 5 ريال/علبة", icon: Gift },
    { name: "تغليف منتجات", desc: "علب كرتون مخصصة للمنتجات", price: "حسب الحجم", icon: Package },
];

const FAQS = [
    {
        question: "كم سعر 500 كيس ورقي بالشعار؟",
        answer: "كيس ورقي كرافت متوسط (26×35 سم) بطباعة لون واحد: من 3.5 ريال/كيس = 1,750 ريال. أكياس لامعة ملونة: من 5 ريال/كيس. المقابض الحبل تضيف 1 ريال/كيس.",
    },
    {
        question: "ما الحد الأدنى للطلب؟",
        answer: "أكياس ورقية: 200 كيس. شنط قماشية: 100 شنطة. علب هدايا: 100 علبة. للكميات الأقل، نوفر موديلات جاهزة بدون طباعة.",
    },
];

export default function BagsPackagingPage() {
    const schemas = [
        generateServiceSchema({
            name: "Branded Bags & Packaging Jeddah",
            nameAr: "أكياس وتغليف دعائي",
            description: "أكياس ورقية وقماشية وتغليف دعائي بشعار شركتك في جدة",
            url: "https://rawajgate.com/promotional-gifts/bags-packaging",
            image: "https://rawajgate.com/images/custom-paper-bags-shopping-packaging.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "هدايا دعائية", url: "https://rawajgate.com/promotional-gifts" },
            { name: "أكياس وتغليف", url: "https://rawajgate.com/promotional-gifts/bags-packaging" },
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
                                <Link href="/promotional-gifts" className="hover:text-white">هدايا دعائية</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">أكياس وتغليف</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">أكياس وتغليف</span> يميز منتجاتك
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                التغليف هو أول انطباع يراه عميلك! كيس أنيق بشعارك يرفع قيمة المنتج ويبقى
                                معه كإعلان متنقل. نوفر أكياس ورقية فاخرة، شنط قماش صديقة للبيئة، وعلب
                                هدايا أنيقة بتصاميم مخصصة.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                مثالية للمحلات التجارية، البوتيكات، المطاعم، والفعاليات. ولا تنسى إضافة <Link href="/signage-stickers/product-labels" className="text-lime-200 underline">ستيكر شعار</Link> لإغلاق الأكياس بلمسة احترافية.
                                طباعة الشعار بألوان ثابتة، خامات عالية الجودة.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                اطلب عينة <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/custom-paper-bags-shopping-packaging.webp"
                            alt="أكياس ورقية وعلب تغليف دعائية في جدة"
                            district="التحلية"
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        المنتجات المتوفرة
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {BAG_TYPES.map((bag) => (
                            <div key={bag.name} className="card p-6 text-center">
                                <bag.icon className="w-10 h-10 text-lime-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{bag.name}</h3>
                                <p className="text-gray-600 text-sm mb-3">{bag.desc}</p>
                                <div className="text-amber-600 font-bold">{bag.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
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

            <section className="py-20 bg-gradient-to-r from-lime-500 to-lime-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">غلّف منتجاتك بأناقة!</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-lime-700 font-bold rounded-lg inline-flex items-center">
                        اطلب الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
