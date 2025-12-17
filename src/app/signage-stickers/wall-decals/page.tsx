import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { Sticker, ArrowLeft, Phone, Home, Building, Palette } from "lucide-react";

export const metadata: Metadata = {
    title: "ملصقات جدارية وديكال في جدة | Wall Decals | بوابة الرواج",
    description: "ملصقات جدارية (Wall Decals) للمكاتب والمحلات في جدة. تصاميم مخصصة، سهلة التركيب والإزالة، لا تضر الدهان. مثالية للديكور الداخلي والشعارات.",
    keywords: ["ملصقات جدارية", "ديكال", "wall decals jeddah", "ستيكرات حائط", "ديكور مكاتب"],
};

const DECAL_TYPES = [
    { name: "ملصق مقصوص Cut Vinyl", desc: "حروف وأشكال منفصلة، مثالي للشعارات", price: "من 30 ريال/م²", icon: Sticker },
    { name: "ملصق مطبوع Printed", desc: "صور وتصاميم ملونة كاملة", price: "من 50 ريال/م²", icon: Palette },
    { name: "ورق حائط مطبوع", desc: "تغطية كاملة للجدار بتصميم موحد", price: "من 80 ريال/م²", icon: Home },
];

const APPLICATIONS = [
    "شعار الشركة في الاستقبال", "رسالة تحفيزية للموظفين", "ديكور المطاعم والكافيهات",
    "غرف الاجتماعات", "عيادات ومستشفيات", "صالونات التجميل"
];

const FAQS = [
    {
        question: "هل تضر الملصقات بالدهان؟",
        answer: "لا، نستخدم فينيل لاصق منخفض التلاصق (Low-Tack) مصمم للإزالة النظيفة. عند الإزالة بعد سنوات، لا يترك أثراً على الدهان العادي.",
    },
    {
        question: "هل يمكن تركيب الملصق بنفسي؟",
        answer: "نعم للأحجام الصغيرة (أقل من 1 متر). الملصقات الكبيرة تحتاج فني تركيب لضمان عدم وجود فقاعات. نوفر خدمة التركيب مقابل 50 ريال.",
    },
];

export default function WallDecalsPage() {
    const schemas = [
        generateServiceSchema({
            name: "Wall Decals Printing Jeddah",
            nameAr: "ملصقات جدارية",
            description: "ملصقات جدارية للمكاتب والمحلات في جدة",
            url: "https://rawajgate.com/signage-stickers/wall-decals",
            image: "https://rawajgate.com/images/glass-window-frosted-sticker-branding.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "لوحات وملصقات", url: "https://rawajgate.com/signage-stickers" },
            { name: "ملصقات جدارية", url: "https://rawajgate.com/signage-stickers/wall-decals" },
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
                                <span className="text-amber-400">ملصقات جدارية</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">ملصقات جدارية</span> تحوّل مكانك
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                الملصقات الجدارية (Wall Decals) طريقة سريعة واقتصادية لتحويل أي جدار فارغ
                                لدبكور مميز أو رسالة تسويقية. <Link href="/design-services/logo-design" className="text-white hover:text-amber-200 underline">شعار شركتك</Link> في الاستقبال، عبارة تحفيزية
                                للموظفين، أو تصميم ديكوري للمطعم - كلها ممكنة!
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                سهلة التركيب والإزالة، لا تضر بالدهان، وتدوم لسنوات. نوفر ملصقات
                                مقصوصة Cut Vinyl للشعارات، ومطبوعة كاملة للصور.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                اطلب تصميم مجاني <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/glass-window-frosted-sticker-branding.webp"
                            alt="ملصقات جدارية للمكاتب في جدة"
                            district="حي الأعمال"
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
                        {DECAL_TYPES.map((type) => (
                            <div key={type.name} className="card p-6 text-center">
                                <type.icon className="w-10 h-10 text-purple-600 mx-auto mb-4" />
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
                        أين تُستخدم؟
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {APPLICATIONS.map((app) => (
                            <span key={app} className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                                {app}
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

            <section className="py-20 bg-gradient-to-r from-purple-500 to-purple-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">حوّل جدرانك!</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg inline-flex items-center">
                        اطلب الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
