import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { Flag, ArrowLeft, Ruler, Sun, Wind, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "طباعة بنرات خارجية وفلكس في جدة | لوحات إعلانية | بوابة الرواج",
    description: "طباعة بنرات خارجية وفلكس في جدة. مقاومة للشمس والرياح، ألوان ثابتة، أحجام حتى 5 متر. مثالية للمحلات والفعاليات والإعلانات الخارجية.",
    keywords: ["بنرات خارجية", "طباعة فلكس", "outdoor banners jeddah", "لوحات إعلانية", "بانر مقاوم"],
};

const BANNER_SIZES = [
    { size: "1 × 2 متر", price: "50 ريال", use: "واجهات المحلات الصغيرة" },
    { size: "1 × 3 متر", price: "75 ريال", use: "الأكثر شيوعاً للمحلات" },
    { size: "2 × 3 متر", price: "150 ريال", use: "الفعاليات والمعارض" },
    { size: "3 × 5 متر", price: "375 ريال", use: "الإعلانات الكبيرة" },
];

const FAQS = [
    {
        question: "كم تدوم البنرات الخارجية؟",
        answer: "البنرات المطبوعة بأحبار Eco-Solvent المقاومة للأشعة UV تدوم 2-3 سنوات في الخارج. للاستخدام طويل المدة (+5 سنوات) نوفر طباعة بأحبار UV Ink على فلكس Front-lit.",
    },
    {
        question: "هل البنر يتحمل الرياح؟",
        answer: "نعم، نطبع على فلكس 440-550 جرام المتين. للمناطق شديدة الرياح، نضيف ثقوب تهوية (Eyelets) وتقوية الحواف بشريط لحام.",
    },
];

export default function OutdoorBannersPage() {
    const schemas = [
        generateServiceSchema({
            name: "Outdoor Banners Printing Jeddah",
            nameAr: "طباعة بنرات خارجية",
            description: "طباعة بنرات خارجية وفلكس مقاومة للشمس في جدة",
            url: "https://rawajgate.com/signage-stickers/outdoor-banners",
            image: "https://rawajgate.com/images/outdoor-flex-banner-printing-large-format.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "لوحات وملصقات", url: "https://rawajgate.com/signage-stickers" },
            { name: "بنرات خارجية", url: "https://rawajgate.com/signage-stickers/outdoor-banners" },
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
                                <span className="text-amber-400">بنرات خارجية</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full mb-6">
                                <Sun className="w-4 h-4 text-orange-400" />
                                <span className="text-orange-300 text-sm font-medium">مقاوم لشمس جدة</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">بنرات خارجية</span> تتحدى الطقس
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                البنرات الخارجية (Outdoor Banners) هي أقوى وسيلة إعلانية للمحلات و <Link href="/exhibitions-events" className="text-white hover:text-orange-200 underline">الفعاليات والمعارض</Link>.
                                في بوابة الرواج نطبع على فلكس عالي الجودة بأحبار مقاومة للأشعة UV،
                                تدوم لسنوات تحت شمس جدة الحارة.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                أحجام من 1 متر حتى 5 أمتار. تركيب حلقات معدنية (Eyelets) للتعليق.
                                ألوان زاهية وثابتة. تسليم خلال 24-48 ساعة.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                اطلب عرض سعر <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/outdoor-flex-banner-printing-large-format.webp"
                            alt="بنرات خارجية مطبوعة في جدة"
                            district="الكورنيش"
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { icon: Sun, title: "مقاوم للشمس", desc: "أحبار UV ثابتة" },
                            { icon: Wind, title: "مقاوم للرياح", desc: "فلكس متين + ثقوب" },
                            { icon: Ruler, title: "أحجام كبيرة", desc: "حتى 5 متر عرض" },
                        ].map((f) => (
                            <div key={f.title} className="card p-6">
                                <f.icon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                                <p className="text-gray-600 text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        الأحجام والأسعار
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {BANNER_SIZES.map((banner) => (
                            <div key={banner.size} className="card p-6 text-center">
                                <Flag className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">{banner.size}</h3>
                                <div className="text-2xl font-bold text-orange-600 mb-2">{banner.price}</div>
                                <p className="text-gray-500 text-xs">{banner.use}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 mt-6">* السعر يشمل الطباعة والحلقات المعدنية</p>
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

            <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">أعلن بقوة!</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-orange-600 font-bold rounded-lg inline-flex items-center">
                        اطلب الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
