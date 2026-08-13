import { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, generateSpeakableWebPage } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { PromotionalGiftsFaqs } from "@/lib/faqs/promotional-gifts";
import {
    Smartphone,
    ArrowLeft,
    Headphones,
    Battery,
    Usb,
    Building2,
    Users,
    GraduationCap,
    Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
    openGraph: {
        title: "هدايا تقنية دعائية بالشعار في جدة | بوابة الرواج",
        description: "هدايا تقنية دعائية في جدة: فلاشات USB، باور بانك، سماعات، حوامل جوال بشعار شركتك. طباعة ليزر وحفر. هدايا عملية تبقى مستخدمة يومياً.",
        url: "https://rawajgate.com/promotional-gifts/tech-gadgets",
        images: [{ url: "/images/tech-gifts-powerbank-usb-branding.webp", width: 1200, height: 630, alt: "هدايا تقنية دعائية بالشعار في جدة" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "هدايا تقنية دعائية بالشعار في جدة",
        description: "هدايا تقنية دعائية في جدة: فلاشات USB، باور بانك، سماعات، حوامل جوال بشعار شركتك. طباعة ليزر وحفر. هدايا عملية تبقى مستخدمة يومياً.",
        images: ["/images/tech-gifts-powerbank-usb-branding.webp"],
    },
    alternates: { canonical: "/promotional-gifts/tech-gadgets" },
    title: "هدايا تقنية دعائية بالشعار في جدة",
    description: "هدايا تقنية دعائية في جدة: فلاشات USB، باور بانك، سماعات، حوامل جوال بشعار شركتك. طباعة ليزر وحفر. هدايا عملية تبقى مستخدمة يومياً.",
    keywords: ["هدايا تقنية", "USB دعائي", "باور بانك شعار", "tech gadgets branded", "gadget promotional jeddah"],
};

const GADGET_TYPES = [
    { name: "فلاش USB", sizes: "4GB - 64GB", price: "اطلب عرضك", icon: Usb },
    { name: "باور بانك", sizes: "5000 - 20000 mAh", price: "سعر مميز", icon: Battery },
    { name: "سماعات لاسلكية", sizes: "Bluetooth 5.0", price: "عرض خاص", icon: Headphones },
    { name: "حوامل جوال", sizes: "متعددة الأشكال", price: "تواصل معنا", icon: Smartphone },
];

const TECH_SPECS = [
    { spec: "الطباعة", value: "ليزر / حفر / UV" },
    { spec: "الضمان", value: "6 أشهر - سنة" },
    { spec: "الشهادات", value: "CE / FCC" },
    { spec: "USB السعة", value: "4GB - 64GB" },
    { spec: "باور بانك", value: "5000 - 20000 mAh" },
    { spec: "وقت الإنتاج", value: "10-14 يوم" },
];

const USE_CASES = [
    { icon: Building2, title: "الشركات", desc: "هدايا للموظفين والعملاء" },
    { icon: Users, title: "المؤتمرات", desc: "هدايا للمتحدثين والحضور" },
    { icon: GraduationCap, title: "الجامعات", desc: "هدايا للخريجين" },
    { icon: Briefcase, title: "البنوك", desc: "هدايا للعملاء VIP" },
];

const FAQS = PromotionalGiftsFaqs["promotional-gifts/tech-gadgets"];

export default function TechGadgetsPage() {
    const schemas = [
        generateSpeakableWebPage({
            url: "https://rawajgate.com/promotional-gifts/tech-gadgets",
            name: "هدايا تقنية دعائية بالشعار في جدة",
            description: "هدايا تقنية دعائية في جدة: فلاشات USB، باور بانك، سماعات، حوامل جوال بشعار شركتك. طباعة ليزر وحفر. هدايا عملية تبقى مستخدمة يومياً.",
        }),
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

                            <p data-speakable="answer" className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
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

            {/* Use Cases */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        من يستخدم الهدايا التقنية؟
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {USE_CASES.map((useCase) => (
                            <div key={useCase.title} className="card p-6 text-center card-hover">
                                <useCase.icon className="w-10 h-10 text-cyan-600 mx-auto mb-4" />
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
                            src="/images/tech-gifts-powerbank-usb-branding.webp"
                            alt="هدايا تقنية بالشعار في جدة"
                            
                            
                            className="rounded-2xl shadow-xl"
                        />
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية
                            </h2>
                            <p className="text-gray-600 mb-8">
                                منتجات أصلية بشهادات جودة وضمان
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
                            دليلك الشامل للهدايا التقنية الدعائية في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا الهدايا التقنية أذكى خيار؟</h3>
                            <p>
                                الهدايا التقنية من أكثر الهدايا الترويجية فعالية لأنها تُستخدم يومياً!
                                USB يحمله العميل معه دائماً، باور بانك ينقذه عند نفاد البطارية، سماعات ترافقه في التمارين.
                                كل استخدام يعني رؤية شعارك. دراسات التسويق تظهر أن الهدايا التقنية تحقق أعلى نسبة احتفاظ
                                وأطول فترة استخدام بين جميع أنواع الهدايا الترويجية.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أنواع الهدايا التقنية</h3>
                            <p>
                                <strong>فلاش USB:</strong> الكلاسيكية التي لا تموت، بسعات من 4GB إلى 64GB، أشكال متنوعة (معدني، جلد، بلاستيك).
                                <strong>باور بانك:</strong> الأكثر طلباً حالياً، بسعات من 5000 إلى 20000 mAh، نوفر ماركات أصلية أو جنريك.
                                <strong>سماعات لاسلكية:</strong> Bluetooth 5.0، علبة شحن، جودة صوت ممتازة.
                                <strong>حوامل جوال:</strong> للمكتب أو السيارة، عملية ومفيدة يومياً.
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/tech-gifts-powerbank-usb-branding.webp"
                                    alt="هدايا دعائية للشركات"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                    alt="اجتماع تسليم هدايا"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">نصائح اختيار الهدية المناسبة</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li><strong>للموظفين:</strong> باور بانك 10000mAh أو سماعات، هدايا عملية يستخدمونها يومياً</li>
                                <li><strong>للعملاء VIP:</strong> باور بانك ماركة + علبة فاخرة، انطباع قوي ودائم</li>
                                <li><strong>للمؤتمرات:</strong> USB 8GB أو 16GB، سعر اقتصادي للكميات الكبيرة</li>
                                <li><strong>للخريجين:</strong> حامل جوال أو USB بتصميم أنيق</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج للهدايا التقنية؟</h3>
                            <p>
                                في بوابة الرواج، نوفر هدايا تقنية للشركات في جدة منذ أكثر من 15 عاماً.
                                نختار منتجات بجودة مضمونة وضمان حقيقي. طباعة بالحفر أو الليزر تدوم سنوات.
                                أسعار تنافسية للكميات. نخدم البنوك والشركات الكبرى والجامعات في جدة.
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
                        كل ما تريد معرفته عن الهدايا التقنية الدعائية
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

            <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">هدايا تبقى مستخدمة!</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        هدايا تقنية بشعارك ترافق عميلك أينما ذهب
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-100 transition-all">
                            اطلب عرض سعر <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href={`https://wa.me/${BUSINESS.phone.whatsapp}?text=أريد هدايا تقنية بالشعار`}
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition-all"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        <RelatedServices currentPath="/promotional-gifts/tech-gadgets" />
        </>
    );
}
