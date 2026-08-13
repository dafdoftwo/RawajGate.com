import { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { PromotionalGiftsFaqs } from "@/lib/faqs/promotional-gifts";
import {
    ShoppingBag,
    ArrowLeft,
    Package,
    Gift,
    Store,
    Coffee,
    Shirt,
    Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
    openGraph: {
        title: "أكياس وتغليف دعائي بالشعار في جدة | بوابة الرواج",
        description: "أكياس ورقية وقماشية وعلب تغليف دعائية في جدة. طباعة شعار الشركة على الأكياس. مثالية للمحلات والهدايا والفعاليات. أحجام وخامات متنوعة.",
        url: "https://rawajgate.com/promotional-gifts/bags-packaging",
        images: [{ url: "/images/custom-paper-bags-shopping-packaging.webp", width: 1200, height: 630, alt: "أكياس وتغليف دعائي بالشعار في جدة" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "أكياس وتغليف دعائي بالشعار في جدة",
        description: "أكياس ورقية وقماشية وعلب تغليف دعائية في جدة. طباعة شعار الشركة على الأكياس. مثالية للمحلات والهدايا والفعاليات. أحجام وخامات متنوعة.",
        images: ["/images/custom-paper-bags-shopping-packaging.webp"],
    },
    alternates: { canonical: "/promotional-gifts/bags-packaging" },
    title: "أكياس وتغليف دعائي بالشعار في جدة",
    description: "أكياس ورقية وقماشية وعلب تغليف دعائية في جدة. طباعة شعار الشركة على الأكياس. مثالية للمحلات والهدايا والفعاليات. أحجام وخامات متنوعة.",
    keywords: ["أكياس ورقية", "شنط قماشية", "paper bags branded", "تغليف دعائي جدة", "علب هدايا"],
};

const BAG_TYPES = [
    { name: "أكياس ورقية", desc: "كرافت أو لامع، مقابض حبل أو مسطحة", price: "اطلب عرضك", icon: ShoppingBag },
    { name: "شنط تسوق قماشية", desc: "قطن أو بوليستر، قابلة للغسل، صديقة للبيئة", price: "سعر منافس", icon: ShoppingBag },
    { name: "علب هدايا", desc: "كرتون مقوى، مغناطيسية أو ربطة ستان", price: "تواصل معنا", icon: Gift },
    { name: "تغليف منتجات", desc: "علب كرتون مخصصة للمنتجات", price: "حسب الحجم", icon: Package },
];

const TECH_SPECS = [
    { spec: "الخامات", value: "كرافت / كوشيه / قماش" },
    { spec: "الأحجام", value: "صغير / وسط / كبير" },
    { spec: "الطباعة", value: "1-4 ألوان" },
    { spec: "المقابض", value: "حبل / مسطح / قماش" },
    { spec: "الحد الأدنى", value: "200 كيس" },
    { spec: "وقت الإنتاج", value: "7-10 أيام" },
];

const USE_CASES = [
    { icon: Store, title: "المحلات التجارية", desc: "أكياس بشعار المحل" },
    { icon: Coffee, title: "المطاعم والكافيهات", desc: "أكياس توصيل وتيك أواي" },
    { icon: Shirt, title: "البوتيكات", desc: "شنط فاخرة للملابس" },
    { icon: Sparkles, title: "الفعاليات", desc: "علب هدايا للمؤتمرات" },
];

const FAQS = PromotionalGiftsFaqs["promotional-gifts/bags-packaging"];

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

            {/* Use Cases */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        من يحتاج أكياس وتغليف بالشعار؟
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {USE_CASES.map((useCase) => (
                            <div key={useCase.title} className="card p-6 text-center card-hover">
                                <useCase.icon className="w-10 h-10 text-lime-600 mx-auto mb-4" />
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
                            src="/images/custom-paper-bags-shopping-packaging.webp"
                            alt="أكياس ورقية وقماشية بالشعار في جدة"
                            
                            
                            className="rounded-2xl shadow-xl"
                        />
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية
                            </h2>
                            <p className="text-gray-600 mb-8">
                                خامات عالية الجودة وطباعة احترافية تدوم
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
                            دليلك الشامل للأكياس والتغليف الدعائي في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا التغليف المميز مهم لعملك؟</h3>
                            <p>
                                التغليف هو أول ما يراه العميل ويلمسه! كيس أنيق بشعارك يحول كل عميل إلى إعلان متنقل.
                                في شوارع جدة ومولاتها، كم مرة لفت انتباهك كيس أنيق يحمله أحدهم؟ هذا بالضبط ما نصنعه لك.
                                الدراسات تظهر أن 52% من المستهلكين يعاودون الشراء من متجر يقدم تغليفاً مميزاً.
                                في بوابة الرواج، نفهم قوة التغليف ونقدم حلولاً تناسب جميع الميزانيات.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أنواع الأكياس والتغليف</h3>
                            <p>
                                <strong>الأكياس الورقية</strong> الأكثر شيوعاً، تتوفر بورق كرافت بني (مظهر طبيعي عصري)
                                أو كوشيه أبيض لامع (يبرز الألوان). مقابض متنوعة: حبل قطني، شريط ستان، أو مقبض مسطح.
                                <strong>الشنط القماشية</strong> صديقة للبيئة، قابلة للغسل وإعادة الاستخدام، تبقى مع العميل لسنوات.
                                <strong>علب الهدايا</strong> كرتون مقوى بتصميم أنيق، مغناطيسية أو بربطة ستان، للهدايا الفاخرة.
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/custom-paper-bags-shopping-packaging.webp"
                                    alt="هدايا دعائية وأكياس بالشعار"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                    alt="جلسة تصميم تغليف"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">نصائح لاختيار التغليف المناسب</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li><strong>المطاعم والكافيهات:</strong> أكياس كرافت بني للتوصيل، شكل عصري وصديق للبيئة</li>
                                <li><strong>البوتيكات والملابس:</strong> أكياس كوشيه لامع أو مطفي مع مقبض حبل قطني</li>
                                <li><strong>المجوهرات والساعات:</strong> علب مخملية أو كرتون مغناطيسي فاخر</li>
                                <li><strong>الفعاليات والمؤتمرات:</strong> شنط قماش قابلة لإعادة الاستخدام</li>
                                <li><strong>الهدايا الرمضانية:</strong> علب هدايا بتصميم خاص مع ربطة ستان</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج للأكياس والتغليف؟</h3>
                            <p>
                                في بوابة الرواج، نوفر أكياس وتغليف للشركات في جدة منذ أكثر من 15 عاماً.
                                نستخدم خامات عالية الجودة وطباعة تدوم. نوفر جميع الأنواع والأحجام.
                                فريق التصميم لدينا يصمم تغليفاً يعكس هويتك. أسعار تنافسية للكميات.
                                نخدم المحلات الصغيرة في البلد والماركات الكبرى في المولات.
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
                        كل ما تريد معرفته عن الأكياس والتغليف الدعائي في جدة
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

            <section className="py-20 bg-gradient-to-r from-lime-500 to-lime-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">غلّف منتجاتك بأناقة!</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        أكياس وتغليف بشعارك تحول كل عميل إلى إعلان متنقل
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="px-8 py-4 bg-white text-lime-700 font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-100 transition-all">
                            اطلب عرض سعر <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href={`https://wa.me/${BUSINESS.phone.whatsapp}?text=أريد أكياس بشعار شركتي`}
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition-all"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        <RelatedServices currentPath="/promotional-gifts/bags-packaging" />
        </>
    );
}
