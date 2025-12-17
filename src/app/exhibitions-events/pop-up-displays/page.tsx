import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { LayoutGrid, ArrowLeft, Phone, Maximize, Package, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "ستاند بوب أب للمعارض في جدة | Pop-up Display | بوابة الرواج",
    description: "ستاندات بوب أب (Pop-up Displays) للمعارض والفعاليات في جدة. خلفيات 3×3 و4×3 متر، تركيب سريع، جرافيك قابل للتغيير. مثالي للمؤتمرات والتصوير.",
    keywords: ["بوب أب ستاند", "pop up display jeddah", "خلفية معرض", "backdrop", "جدار تصوير"],
};

const POPUP_SIZES = [
    { name: "2.5 × 2.5 متر", panels: "3 panels", price: "من 1,800 ريال", use: "للمساحات الصغيرة" },
    { name: "3 × 2.5 متر", panels: "4 panels", price: "من 2,200 ريال", use: "الأكثر شيوعاً" },
    { name: "4 × 2.5 متر", panels: "5 panels", price: "من 2,800 ريال", use: "للعلامات الكبرى" },
];

const FAQS = [
    {
        question: "ما الفرق بين Pop-up و Roll-up؟",
        answer: "Roll-up ستاند منفرد 85-150 سم عرض، يُستخدم كلوحة منفصلة. Pop-up عبارة عن جدار كامل 2.5-4 متر، يُستخدم كخلفية للجناح أو منطقة تصوير.",
    },
    {
        question: "هل يمكن تغيير الجرافيك فقط؟",
        answer: "نعم! الهيكل المعدني يُعاد استخدامه. يمكنك طلب طباعة جرافيك جديد فقط بسعر 800-1200 ريال حسب الحجم.",
    },
];

export default function PopUpDisplaysPage() {
    const schemas = [
        generateServiceSchema({
            name: "Pop-up Displays Jeddah",
            nameAr: "ستاندات بوب أب",
            description: "ستاندات بوب أب للمعارض والفعاليات في جدة",
            url: "https://rawajgate.com/exhibitions-events/pop-up-displays",
            image: "https://rawajgate.com/images/pop-up-display-media-wall-background.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "معارض وفعاليات", url: "https://rawajgate.com/exhibitions-events" },
            { name: "بوب أب", url: "https://rawajgate.com/exhibitions-events/pop-up-displays" },
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
                                <span className="text-amber-400">بوب أب</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">ستاند بوب أب</span> خلفية مؤثرة
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                ستاندات بوب أب (Pop-up Displays) هي خلفيات كبيرة قابلة للطي للمعارض والمؤتمرات.
                                تركيب في دقائق بدون أدوات، جرافيك عالي الجودة، هيكل خفيف قابل لإعادة الاستخدام.
                                الحل المثالي للخلفيات المؤقتة والتصوير. تُستخدم غالباً مع <Link href="/exhibitions-events/roll-up-stands" className="text-indigo-200 underline">رول أب ستاند</Link> لتشكيل جناح متكامل وسهل النقل.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                تأتي مع حقيبة حمل بعجلات وأضواء LED اختيارية.
                                أحجام من 2.5 متر حتى 4 متر عرض.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                اطلب عرض سعر <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/pop-up-display-media-wall-background.webp"
                            alt="ستاند بوب أب للمعارض في جدة"
                            district="مركز المعارض"
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: Zap, title: "تركيب 10 دقائق", desc: "بدون أدوات" },
                        { icon: Package, title: "حقيبة بعجلات", desc: "سهل النقل" },
                        { icon: Maximize, title: "حتى 4 متر", desc: "عرض كبير" },
                    ].map((f) => (
                        <div key={f.title} className="card p-6">
                            <f.icon className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
                            <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                            <p className="text-gray-600 text-sm">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        الأحجام والأسعار
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {POPUP_SIZES.map((size) => (
                            <div key={size.name} className="card p-6 text-center">
                                <LayoutGrid className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">{size.name}</h3>
                                <p className="text-gray-500 text-sm mb-2">{size.panels}</p>
                                <div className="text-2xl font-bold text-indigo-600 mb-2">{size.price}</div>
                                <p className="text-gray-500 text-xs">{size.use}</p>
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

            <section className="py-20 bg-gradient-to-r from-indigo-500 to-indigo-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">خلفية مؤثرة لمعرضك!</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg inline-flex items-center">
                        اطلب الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
