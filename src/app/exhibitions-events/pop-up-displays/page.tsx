import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { ExhibitionsEventsFaqs } from "@/lib/faqs/exhibitions-events";
import {
    LayoutGrid,
    ArrowLeft,
    Maximize,
    Package,
    Zap,
    Camera,
    Building2,
    Users,
    Presentation,
} from "lucide-react";

export const metadata: Metadata = {
    openGraph: {
        title: "ستاند بوب أب للمعارض في جدة | بوابة الرواج",
        description: "ستاندات بوب أب (Pop-up Displays) للمعارض والفعاليات في جدة. خلفيات 3×3 و4×3 متر، تركيب سريع، جرافيك قابل للتغيير. مثالي للمؤتمرات والتصوير.",
        url: "https://rawajgate.com/exhibitions-events/pop-up-displays",
        images: [{ url: "/images/pop-up-display-media-wall-background.webp", width: 1200, height: 630, alt: "ستاند بوب أب للمعارض في جدة" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ستاند بوب أب للمعارض في جدة",
        description: "ستاندات بوب أب (Pop-up Displays) للمعارض والفعاليات في جدة. خلفيات 3×3 و4×3 متر، تركيب سريع، جرافيك قابل للتغيير. مثالي للمؤتمرات والتصوير.",
        images: ["/images/pop-up-display-media-wall-background.webp"],
    },
    alternates: { canonical: "/exhibitions-events/pop-up-displays" },
    title: "ستاند بوب أب للمعارض في جدة",
    description: "ستاندات بوب أب (Pop-up Displays) للمعارض والفعاليات في جدة. خلفيات 3×3 و4×3 متر، تركيب سريع، جرافيك قابل للتغيير. مثالي للمؤتمرات والتصوير.",
    keywords: ["بوب أب ستاند", "pop up display jeddah", "خلفية معرض", "backdrop", "جدار تصوير"],
};

const POPUP_SIZES = [
    { name: "2.5 × 2.5 متر", panels: "3 panels", price: "اطلب عرضك", use: "للمساحات الصغيرة" },
    { name: "3 × 2.5 متر", panels: "4 panels", price: "الأكثر طلباً", use: "الأكثر شيوعاً" },
    { name: "4 × 2.5 متر", panels: "5 panels", price: "عرض مميز", use: "للعلامات الكبرى" },
];

const TECH_SPECS = [
    { spec: "الهيكل", value: "ألومنيوم خفيف" },
    { spec: "الجرافيك", value: "قماش أو PVC" },
    { spec: "وقت التركيب", value: "10-15 دقيقة" },
    { spec: "العرض", value: "2.5 - 4 متر" },
    { spec: "الإضاءة", value: "LED اختيارية" },
    { spec: "وقت الإنتاج", value: "5-7 أيام" },
];

const USE_CASES = [
    { icon: Presentation, title: "المعارض التجارية", desc: "خلفية احترافية للجناح" },
    { icon: Camera, title: "جدار التصوير", desc: "Media Wall للمؤتمرات" },
    { icon: Users, title: "الفعاليات", desc: "خلفية للمنصة والمسرح" },
    { icon: Building2, title: "الشركات", desc: "خلفية لمنطقة الاستقبال" },
];

const FAQS = ExhibitionsEventsFaqs["exhibitions-events/pop-up-displays"];

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
                        الأحجام المتوفرة
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

            {/* Use Cases */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        استخدامات Pop-up Display
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {USE_CASES.map((useCase) => (
                            <div key={useCase.title} className="card p-6 text-center card-hover">
                                <useCase.icon className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
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
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية
                            </h2>
                            <p className="text-gray-600 mb-8">
                                نستخدم أفضل الخامات لضمان Pop-up متين وسهل الاستخدام
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
                        <GeoImage
                            src="/images/pop-up-display-media-wall-background.webp"
                            alt="ستاند بوب أب للمعارض والفعاليات في جدة"
                            
                            
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Extended SEO Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                            دليلك الشامل لستاندات Pop-up في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">ما هو Pop-up Display ولماذا تحتاجه؟</h3>
                            <p>
                                Pop-up Display هو نظام عرض قابل للطي يُستخدم كخلفية كبيرة في المعارض والفعاليات والمؤتمرات.
                                يتكون من هيكل ألومنيوم خفيف ينفتح كالمظلة، وألواح جرافيك مطبوعة تُثبت بالمغناطيس.
                                في معارض جدة مثل معرض البناء السعودي ومعرض الغذاء، ستجد Pop-up في معظم الأجنحة الاحترافية.
                                يعطي انطباعاً قوياً ويجذب الزوار بتصميمه الكبير والمؤثر.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">مميزات Pop-up Display</h3>
                            <p>
                                <strong>التركيب السريع</strong> - شخص واحد يركبه في 10-15 دقيقة بدون أدوات.
                                <strong>خفيف الوزن</strong> - يأتي مع حقيبة بعجلات للنقل السهل.
                                <strong>قابل لإعادة الاستخدام</strong> - الهيكل يدوم سنوات، فقط تغير الجرافيك.
                                <strong>تأثير بصري كبير</strong> - خلفية 3-4 متر تجذب الانتباه من بعيد.
                                <strong>مرونة</strong> - يناسب المعارض والمؤتمرات والفعاليات ومناطق الاستقبال.
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/exhibition-booth-custom-wood-shell-scheme.webp"
                                    alt="Pop-up Display في معرض تجاري بجدة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                    alt="Media Wall للمؤتمرات والتصوير"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أنواع Pop-up Display</h3>
                            <p>
                                نوفر في بوابة الرواج عدة أنواع. <strong>Pop-up القماشي (Fabric)</strong> الأكثر شيوعاً،
                                جرافيك مطبوع على قماش مشدود يعطي مظهراً سلساً بدون فواصل.
                                <strong>Pop-up المغناطيسي (Magnetic)</strong> ألواح PVC منفصلة تثبت بالمغناطيس، أسهل في الاستبدال.
                                <strong>Pop-up المنحني (Curved)</strong> يعطي شكلاً مقوساً جميلاً.
                                <strong>Pop-up المستقيم (Straight)</strong> الشكل التقليدي المسطح.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">نصائح لتصميم جرافيك Pop-up فعّال</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li>استخدم صوراً عالية الدقة (300 DPI على الأقل)</li>
                                <li>اجعل الشعار كبيراً وواضحاً في المنتصف</li>
                                <li>قلل النصوص - Pop-up يُرى من بعيد</li>
                                <li>استخدم ألواناً متباينة وجذابة</li>
                                <li>أضف معلومات الاتصال في الأسفل</li>
                                <li>راعِ مواقع الوصلات والفواصل في التصميم</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج لـ Pop-up Display؟</h3>
                            <p>
                                في بوابة الرواج، نوفر Pop-up Display للشركات في جدة منذ أكثر من 15 عاماً.
                                نستخدم هياكل ألومنيوم عالية الجودة تدوم لسنوات. طباعة الجرافيك بدقة عالية وألوان زاهية.
                                نوفر جميع الأحجام من 2.5 متر حتى 4 متر. إضاءة LED اختيارية للمعارض المسائية.
                                فريق التصميم لدينا يصمم جرافيك احترافي يجذب الزوار. التسليم خلال 5-7 أيام.
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
                        كل ما تريد معرفته عن Pop-up Display في جدة
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

            <section className="py-20 bg-gradient-to-r from-indigo-500 to-indigo-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">خلفية مؤثرة لمعرضك!</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        احصل على Pop-up Display بتصميم احترافي. تركيب سهل وتسليم سريع.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-100 transition-all">
                            اطلب عرض سعر <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/966548923300?text=أريد Pop-up Display للمعرض"
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition-all"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        <RelatedServices currentPath="/exhibitions-events/pop-up-displays" />
        </>
    );
}
