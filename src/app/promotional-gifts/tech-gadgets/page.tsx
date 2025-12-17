import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { Smartphone, ArrowLeft, Headphones, Battery, Usb, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "هدايا تقنية دعائية في جدة | USB وباور بانك بالشعار | بوابة الرواج",
    description: "هدايا تقنية دعائية في جدة: فلاشات USB، باور بانك، سماعات، حوامل جوال بشعار شركتك. طباعة ليزر وحفر. هدايا عملية تبقى مستخدمة يومياً.",
    keywords: ["هدايا تقنية", "USB دعائي", "باور بانك شعار", "tech gadgets branded", "gadget promotional jeddah"],
};

const GADGET_TYPES = [
    { name: "فلاش USB", sizes: "4GB - 64GB", price: "من 15 ريال/قطعة", icon: Usb },
    { name: "باور بانك", sizes: "5000 - 20000 mAh", price: "من 35 ريال/قطعة", icon: Battery },
    { name: "سماعات لاسلكية", sizes: "Bluetooth 5.0", price: "من 40 ريال/قطعة", icon: Headphones },
    { name: "حوامل جوال", sizes: "متعددة الأشكال", price: "من 8 ريال/قطعة", icon: Smartphone },
];

const FAQS = [
    {
        question: "كم سعر 100 فلاش USB 8GB بالشعار؟",
        answer: "فلاش USB 8GB بطباعة ليزر على الوجه: من 20 ريال/قطعة = 2,000 ريال. سعة أعلى تزيد 5-10 ريال/قطعة. العلب الفردية اختيارية.",
    },
    {
        question: "هل الباور بانك أصلي؟",
        answer: "نوفر باور بانك من علامات موثوقة (Anker, Xiaomi) أو موديلات عامة بجودة جيدة. جميعها بشهادة CE/FCC والسعة الحقيقية مكتوبة.",
    },
];

export default function TechGadgetsPage() {
    const schemas = [
        generateServiceSchema({
            name: "Branded Tech Gadgets Jeddah",
            nameAr: "هدايا تقنية دعائية",
            description: "هدايا تقنية دعائية: USB، باور بانك، سماعات بشعار شركتك في جدة",
            url: "https://rawajgate.com/promotional-gifts/tech-gadgets",
            image: "https://rawajgate.com/images/tech-gifts-powerbank-usb-branding.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "هدايا دعائية", url: "https://rawajgate.com/promotional-gifts" },
            { name: "هدايا تقنية", url: "https://rawajgate.com/promotional-gifts/tech-gadgets" },
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
                                <span className="text-amber-400">هدايا تقنية</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">هدايا تقنية</span> عملية ومميزة
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                الهدايا التقنية من أذكى أنواع الهدايا الترويجية! USB يُستخدم يومياً،
                                باور بانك ينقذ البطارية، سماعات ترافق العميل أينما ذهب. كلها تحمل شعارك
                                وتبقى أمام عينه باستمرار.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                نوفر تشكيلة واسعة من الإلكترونيات الدعائية بجودة عالية وأسعار منافسة. نقدمها داخل <Link href="/promotional-gifts/bags-packaging" className="text-cyan-200 underline">علب هدايا فاخرة</Link> تليق بعملائك VIP.
                                طباعة ليزر أو حفر للمتانة الدائمة.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                اطلب كتالوج <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/tech-gifts-powerbank-usb-branding.webp"
                            alt="هدايا تقنية USB وباور بانك بالشعار في جدة"
                            district="الأندلس"
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        المنتجات التقنية
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {GADGET_TYPES.map((gadget) => (
                            <div key={gadget.name} className="card p-6 text-center">
                                <gadget.icon className="w-10 h-10 text-cyan-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-1">{gadget.name}</h3>
                                <p className="text-gray-500 text-xs mb-2">{gadget.sizes}</p>
                                <div className="text-amber-600 font-bold text-sm">{gadget.price}</div>
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

            <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">هدايا تبقى مستخدمة!</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg inline-flex items-center">
                        اطلب الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
