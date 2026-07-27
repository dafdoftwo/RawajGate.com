import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { SignageStickersFaqs } from "@/lib/faqs/signage-stickers";
import {
    Flag,
    ArrowLeft,
    Ruler,
    Sun,
    Wind,
    Zap,
    MapPin,
    Building2,
} from "lucide-react";

export const metadata: Metadata = {
    openGraph: {
        title: "طباعة بنرات خارجية وفلكس في جدة | بوابة الرواج",
        description: "طباعة بنرات خارجية وفلكس في جدة. مقاومة للشمس والرياح، ألوان ثابتة، أحجام حتى 5 متر. مثالية للمحلات والفعاليات والإعلانات الخارجية.",
        url: "https://rawajgate.com/signage-stickers/outdoor-banners",
        images: [{ url: "/images/outdoor-flex-banner-printing-large-format.webp", width: 1200, height: 630, alt: "طباعة بنرات خارجية وفلكس في جدة" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "طباعة بنرات خارجية وفلكس في جدة",
        description: "طباعة بنرات خارجية وفلكس في جدة. مقاومة للشمس والرياح، ألوان ثابتة، أحجام حتى 5 متر. مثالية للمحلات والفعاليات والإعلانات الخارجية.",
        images: ["/images/outdoor-flex-banner-printing-large-format.webp"],
    },
    alternates: { canonical: "/signage-stickers/outdoor-banners" },
    title: "طباعة بنرات خارجية وفلكس في جدة",
    description: "طباعة بنرات خارجية وفلكس في جدة. مقاومة للشمس والرياح، ألوان ثابتة، أحجام حتى 5 متر. مثالية للمحلات والفعاليات والإعلانات الخارجية.",
    keywords: ["بنرات خارجية", "طباعة فلكس", "outdoor banners jeddah", "لوحات إعلانية", "بانر مقاوم"],
};

const BANNER_SIZES = [
    { size: "1 × 2 متر", price: "اطلب عرضك", use: "واجهات المحلات الصغيرة" },
    { size: "1 × 3 متر", price: "سعر مميز", use: "الأكثر شيوعاً للمحلات" },
    { size: "2 × 3 متر", price: "عرض خاص", use: "الفعاليات والمعارض" },
    { size: "3 × 5 متر", price: "تواصل معنا", use: "الإعلانات الكبيرة" },
];

const TECH_SPECS = [
    { spec: "دقة الطباعة", value: "1440 DPI" },
    { spec: "نوع الحبر", value: "Eco-Solvent / UV" },
    { spec: "خامة الفلكس", value: "440-550 جرام" },
    { spec: "مقاومة الشمس", value: "3-5 سنوات" },
    { spec: "الحد الأقصى للعرض", value: "5 متر" },
    { spec: "وقت الإنتاج", value: "24-48 ساعة" },
];

const USE_CASES = [
    { icon: Building2, title: "واجهات المحلات", desc: "إعلانات ترويجية وعروض موسمية" },
    { icon: MapPin, title: "الفعاليات والمعارض", desc: "لافتات مؤقتة للمناسبات" },
    { icon: Flag, title: "المباني والمشاريع", desc: "لافتات إنشائية وإعلانية" },
    { icon: Zap, title: "الافتتاحات", desc: "بنرات الترحيب والتهنئة" },
];

const FAQS = SignageStickersFaqs["signage-stickers/outdoor-banners"];

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

            {/* Use Cases Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        استخدامات البنرات الخارجية
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {USE_CASES.map((useCase) => (
                            <div key={useCase.title} className="card p-6 text-center card-hover">
                                <useCase.icon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{useCase.title}</h3>
                                <p className="text-gray-600 text-sm">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        الأحجام المتوفرة
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {BANNER_SIZES.map((banner) => (
                            <div key={banner.size} className="card p-6 text-center card-hover">
                                <Flag className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">{banner.size}</h3>
                                <div className="text-2xl font-bold text-orange-600 mb-2">{banner.price}</div>
                                <p className="text-gray-500 text-xs">{banner.use}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 mt-6">* الباقة تشمل الطباعة والحلقات المعدنية</p>
                </div>
            </section>

            {/* Tech Specs */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية
                            </h2>
                            <p className="text-gray-600 mb-8">
                                نستخدم أفضل الخامات والتقنيات لضمان بنرات متينة وألوان ثابتة
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
                        <GeoImage
                            src="/images/printing-machines-digital-offset-equipment.webp"
                            alt="ماكينات طباعة البنرات الخارجية في بوابة الرواج جدة"
                            
                            
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Extended SEO Content */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                            دليلك الشامل للبنرات الخارجية في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">ما هي البنرات الخارجية ولماذا تحتاجها؟</h3>
                            <p>
                                البنرات الخارجية (Outdoor Banners) هي لوحات إعلانية مطبوعة على خامة الفلكس (Flex) أو الفينيل (Vinyl) المصممة
                                لتتحمل الظروف الجوية القاسية. في جدة، حيث الشمس الحارقة والرطوبة العالية، تحتاج لبنرات بمواصفات خاصة تدوم طويلاً
                                وتحافظ على ألوانها الزاهية. سواء كنت تريد الإعلان عن افتتاح محلك في حي السلامة، أو تروّج لعروض موسمية في التحلية،
                                أو تضع لافتة مشروع في الكورنيش - البنر الخارجي هو الحل الأمثل.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا البنرات الخارجية من أفضل وسائل الإعلان؟</h3>
                            <p>
                                البنرات الخارجية تجمع بين <strong>التكلفة المنخفضة</strong> و<strong>التأثير العالي</strong>. مقارنة بالإعلانات الرقمية
                                التي تختفي بمجرد انتهاء الميزانية، البنر يبقى أمام العملاء 24 ساعة يومياً لسنوات. دراسات التسويق تظهر أن الإعلانات الخارجية
                                تحقق <strong>أعلى معدل تذكر</strong> بين جميع أنواع الإعلانات. في شوارع جدة المزدحمة، بنر واحد قد يراه آلاف الأشخاص يومياً.
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/outdoor-flex-banner-printing-large-format.webp"
                                    alt="بنرات خارجية مطبوعة لمحلات في جدة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/outdoor-flex-banner-printing-large-format.webp"
                                    alt="بنرات للفعاليات والمعارض في جدة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أنواع خامات البنرات الخارجية</h3>
                            <p>
                                نوفر في بوابة الرواج عدة أنواع من الخامات لتناسب مختلف الاحتياجات. <strong>فلكس Front-lit (440 جرام)</strong>
                                هو الخيار الأكثر شيوعاً واقتصادية، مناسب للاستخدام العادي حيث يكون الضوء من الأمام.
                                <strong>فلكس Back-lit (550 جرام)</strong> للوحات المضيئة من الخلف (Light Boxes)، يسمح بمرور الضوء ويعطي
                                إضاءة متوهجة جميلة ليلاً. <strong>فلكس Mesh (المثقب)</strong> للبنرات الكبيرة جداً على واجهات المباني،
                                به ثقوب صغيرة تسمح بمرور الهواء وتقلل مقاومة الرياح.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">تقنيات الطباعة المستخدمة</h3>
                            <p>
                                نستخدم طابعات Large Format بتقنيتين رئيسيتين. <strong>أحبار Eco-Solvent</strong> هي الأكثر شيوعاً،
                                تعطي ألواناً زاهية وتدوم 2-3 سنوات في الخارج. <strong>أحبار UV</strong> الأحدث والأقوى، تجف فوراً
                                بالأشعة فوق البنفسجية وتدوم 5+ سنوات، مثالية للبنرات الدائمة والمكلفة. دقة الطباعة 1440 DPI
                                تضمن وضوح النصوص والصور حتى من مسافة قريبة.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">نصائح لتصميم بنر خارجي فعّال</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li>استخدم خطوطاً كبيرة وواضحة - البنر يُقرأ من مسافة</li>
                                <li>قلل من النصوص - رسالة واحدة واضحة أفضل من عشر رسائل</li>
                                <li>استخدم ألواناً متباينة لجذب الانتباه</li>
                                <li>أضف معلومات الاتصال الأساسية فقط (رقم أو موقع)</li>
                                <li>تجنب التفاصيل الصغيرة التي لا تُرى من بعيد</li>
                                <li>راعِ موقع التعليق وزاوية الرؤية عند التصميم</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج للبنرات الخارجية؟</h3>
                            <p>
                                في بوابة الرواج، نملك خبرة 15+ عاماً في طباعة البنرات الخارجية لشوارع ومحلات جدة. نفهم تحديات المناخ المحلي
                                ونختار الخامات والأحبار المناسبة. طابعاتنا الحديثة تضمن دقة عالية وألواناً ثابتة. نوفر جميع الأحجام
                                من 1 متر حتى 5 أمتار، مع خدمة التركيب داخل جدة. التسليم خلال 24-48 ساعة للطلبات العاجلة.
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
                        كل ما تريد معرفته عن طباعة البنرات الخارجية في جدة
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

            <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">أعلن بقوة في شوارع جدة!</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        احصل على بنر خارجي بجودة عالية وألوان ثابتة. تسليم خلال 24 ساعة.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="px-8 py-4 bg-white text-orange-600 font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-100 transition-all">
                            اطلب عرض سعر <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/966548923300?text=أريد طباعة بنر خارجي"
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition-all"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        <RelatedServices currentPath="/signage-stickers/outdoor-banners" />
        </>
    );
}
