import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { Shirt, ArrowLeft, HardHat, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "ملابس دعائية موحدة في جدة | تيشرتات وكابات بالشعار | بوابة الرواج",
    description: "ملابس دعائية موحدة في جدة: تيشرتات، بولو، كابات، جاكيتات بشعار شركتك. تطريز وطباعة حرارية. زي موحد للموظفين وهدايا للفعاليات.",
    keywords: ["ملابس دعائية", "تيشرتات شركات", "كابات بالشعار", "زي موحد جدة", "t-shirts branded jeddah"],
};

const WEARABLE_TYPES = [
    { name: "تيشرت قطن", desc: "180 جرام، مريح للموظفين", price: "اطلب عرضك", icon: Shirt },
    { name: "بولو شيرت", desc: "ياقة كلاسيكية، مظهر رسمي", price: "سعر خاص", icon: Shirt },
    { name: "كاب / قبعة", desc: "قطن أو بوليستر، أحجام متعددة", price: "تواصل معنا", icon: HardHat },
];

const BRANDING = [
    { method: "تطريز Embroidery", best: "للشعارات الصغيرة، مظهر فاخر، متانة عالية" },
    { method: "طباعة حرارية DTF", best: "للتصاميم الكبيرة والملونة، تكلفة أقل" },
    { method: "طباعة سبلميشن", best: "للأقمشة البوليستر، ألوان كاملة ممتدة" },
];

const FAQS = [
    {
        question: "كيف أحصل على عرض للتيشيرتات بالشعار؟",
        answer: "تواصل معنا للحصول على عرض سعر مخصص حسب الكمية ونوع القماش وطريقة الطباعة (تطريز أو طباعة حرارية). نقدم أسعار تنافسية للكميات الكبيرة!",
    },
    {
        question: "ما الأفضل: التطريز أم الطباعة؟",
        answer: "التطريز أفخم وأمتن (يدوم سنوات)، مثالي للشعارات الصغيرة. الطباعة أرخص وتتيح تصاميم ملونة كبيرة، لكنها تبهت مع الغسيل المتكرر.",
    },
];

export default function WearablesPage() {
    const schemas = [
        generateServiceSchema({
            name: "Branded Wearables Jeddah",
            nameAr: "ملابس دعائية",
            description: "ملابس دعائية موحدة: تيشرتات، كابات، جاكيتات بشعار شركتك في جدة",
            url: "https://rawajgate.com/promotional-gifts/wearables",
            image: "https://rawajgate.com/images/logo-printed-tshirts-embroidery-polo.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "هدايا دعائية", url: "https://rawajgate.com/promotional-gifts" },
            { name: "ملابس دعائية", url: "https://rawajgate.com/promotional-gifts/wearables" },
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
                                <span className="text-amber-400">ملابس دعائية</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">ملابس موحدة</span> تعزز هويتك
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                الملابس الموحدة تخلق انطباعاً احترافياً وتعزز روح الفريق. تيشرتات للموظفين،
                                كابات للفعاليات، جاكيتات للتوزيع - مثالية لفرق العمل في <Link href="/exhibitions-events/system-booths" className="text-violet-200 underline">أجنحة المعارض</Link> والفعاليات الخارجية.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                نوفر تطريز عالي الجودة للشعارات الصغيرة، وطباعة حرارية للتصاميم الكبيرة.
                                أقمشة مريحة تتحمل الغسيل المتكرر.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                اطلب عينة <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/logo-printed-tshirts-embroidery-polo.webp"
                            alt="تيشرتات وكابات بالشعار للشركات في جدة"
                            district="الروضة"
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
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {WEARABLE_TYPES.map((item) => (
                            <div key={item.name} className="card p-6 text-center">
                                <item.icon className="w-10 h-10 text-violet-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                                <div className="text-amber-600 font-bold">{item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                        طرق طباعة الشعار
                    </h2>
                    <div className="space-y-4">
                        {BRANDING.map((b) => (
                            <div key={b.method} className="card p-4 flex items-start gap-4">
                                <div className="font-bold text-violet-600 shrink-0">{b.method}</div>
                                <p className="text-gray-600 text-sm">{b.best}</p>
                            </div>
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

            <section className="py-20 bg-gradient-to-r from-violet-500 to-violet-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">وحّد فريقك بمظهر احترافي!</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-violet-600 font-bold rounded-lg inline-flex items-center">
                        اطلب الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
