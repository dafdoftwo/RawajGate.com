import { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, generateSpeakableWebPage } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { PromotionalGiftsFaqs } from "@/lib/faqs/promotional-gifts";
import {
    Shirt,
    ArrowLeft,
    HardHat,
    Building2,
    Users,
    Utensils,
    Wrench,
} from "lucide-react";

export const metadata: Metadata = {
    openGraph: {
        title: "ملابس دعائية وتيشرتات بالشعار في جدة | بوابة الرواج",
        description: "ملابس دعائية موحدة في جدة: تيشرتات، بولو، كابات، جاكيتات بشعار شركتك. تطريز وطباعة حرارية. زي موحد للموظفين وهدايا للفعاليات.",
        url: "https://rawajgate.com/promotional-gifts/wearables",
        images: [{ url: "/images/logo-printed-tshirts-embroidery-polo.webp", width: 1200, height: 630, alt: "ملابس دعائية وتيشرتات بالشعار في جدة" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ملابس دعائية وتيشرتات بالشعار في جدة",
        description: "ملابس دعائية موحدة في جدة: تيشرتات، بولو، كابات، جاكيتات بشعار شركتك. تطريز وطباعة حرارية. زي موحد للموظفين وهدايا للفعاليات.",
        images: ["/images/logo-printed-tshirts-embroidery-polo.webp"],
    },
    alternates: { canonical: "/promotional-gifts/wearables" },
    title: "ملابس دعائية وتيشرتات بالشعار في جدة",
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

const TECH_SPECS = [
    { spec: "الأقمشة", value: "قطن / بوليستر / مخلوط" },
    { spec: "الوزن", value: "160-220 جرام" },
    { spec: "المقاسات", value: "S - 4XL" },
    { spec: "التطريز", value: "حتى 15 سم" },
    { spec: "الحد الأدنى", value: "50 قطعة" },
    { spec: "وقت الإنتاج", value: "7-14 يوم" },
];

const USE_CASES = [
    { icon: Building2, title: "الشركات", desc: "زي موحد للموظفين" },
    { icon: Users, title: "الفعاليات", desc: "تيشيرتات للحضور" },
    { icon: Utensils, title: "المطاعم", desc: "زي للعاملين" },
    { icon: Wrench, title: "الصيانة", desc: "ملابس عمل متينة" },
];

const FAQS = PromotionalGiftsFaqs["promotional-gifts/wearables"];

export default function WearablesPage() {
    const schemas = [
        generateSpeakableWebPage({
            url: "https://rawajgate.com/promotional-gifts/wearables",
            name: "ملابس دعائية وتيشرتات بالشعار في جدة",
            description: "ملابس دعائية موحدة في جدة: تيشرتات، بولو، كابات، جاكيتات بشعار شركتك. تطريز وطباعة حرارية. زي موحد للموظفين وهدايا للفعاليات.",
        }),
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

                            <p data-speakable="answer" className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
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

            {/* Use Cases */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        من يحتاج ملابس موحدة؟
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {USE_CASES.map((useCase) => (
                            <div key={useCase.title} className="card p-6 text-center card-hover">
                                <useCase.icon className="w-10 h-10 text-violet-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{useCase.title}</h3>
                                <p className="text-gray-600 text-sm">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Specs */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <GeoImage
                            src="/images/logo-printed-tshirts-embroidery-polo.webp"
                            alt="تيشيرتات وبولو بالتطريز في جدة"
                            
                            
                            className="rounded-2xl shadow-xl"
                        />
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية
                            </h2>
                            <p className="text-gray-600 mb-8">
                                أقمشة مريحة وطباعة تدوم مع الغسيل المتكرر
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
                    </div>
                </div>
            </section>

            {/* Extended SEO Content */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                            دليلك الشامل للملابس الدعائية الموحدة في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا الزي الموحد مهم؟</h3>
                            <p>
                                الزي الموحد يخلق انطباعاً احترافياً فورياً ويعزز الثقة لدى العملاء.
                                موظفون بملابس موحدة يسهل التعرف عليهم ويظهرون كفريق منظم.
                                الدراسات تظهر أن الشركات ذات الزي الموحد تحظى بثقة أعلى بنسبة 40%.
                                في جدة، حيث المنافسة شديدة، الزي الموحد يميزك عن الآخرين.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أنواع الملابس الدعائية</h3>
                            <p>
                                <strong>تيشرت قطن:</strong> الأكثر شيوعاً، مريح للعمل اليومي، وزن 180-220 جرام.
                                <strong>بولو شيرت:</strong> مظهر أكثر رسمية بفضل الياقة، مثالي للاستقبال والمبيعات.
                                <strong>كابات:</strong> حماية من الشمس وإعلان متنقل، شائعة في المطاعم والتوصيل.
                                <strong>جاكيتات:</strong> للفرق الميدانية والصيانة، حماية ومظهر موحد.
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/logo-printed-tshirts-embroidery-polo.webp"
                                    alt="ملابس دعائية للشركات"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                    alt="اجتماع تسليم ملابس موحدة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">التطريز vs الطباعة الحرارية</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li><strong>التطريز:</strong> أفخم وأمتن، يدوم سنوات، مثالي للشعارات الصغيرة (حتى 15 سم)</li>
                                <li><strong>الطباعة الحرارية DTF:</strong> أرخص، تتيح تصاميم كبيرة ملونة، تدوم 50+ غسلة</li>
                                <li><strong>السبلميشن:</strong> للبوليستر فقط، ألوان كاملة على كامل القطعة</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج للملابس الموحدة؟</h3>
                            <p>
                                في بوابة الرواج، نجهز ملابس موحدة للشركات في جدة منذ أكثر من 15 عاماً.
                                تطريز بماكينات حديثة متعددة الرؤوس. أقمشة مستوردة مريحة.
                                مقاسات من S إلى 4XL. أسعار تنافسية للكميات.
                                نخدم المطاعم والفنادق والشركات الكبرى في جدة.
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
                        كل ما تريد معرفته عن الملابس الدعائية الموحدة
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

            <section className="py-20 bg-gradient-to-r from-violet-500 to-violet-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">وحّد فريقك بمظهر احترافي!</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        ملابس موحدة تعزز هوية شركتك وتخلق انطباعاً احترافياً
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="px-8 py-4 bg-white text-violet-600 font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-100 transition-all">
                            اطلب عرض سعر <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href={`https://wa.me/${BUSINESS.phone.whatsapp}?text=أريد ملابس موحدة بالشعار`}
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition-all"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        <RelatedServices currentPath="/promotional-gifts/wearables" />
        </>
    );
}
