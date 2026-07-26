import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { SignageStickersFaqs } from "@/lib/faqs/signage-stickers";
import {
    Car,
    ArrowLeft,
    Truck,
    Bus,
    Shield,
    Phone,
    Clock,
    Check,
    Award,
    Sun,
    Droplets,
    Wrench,
} from "lucide-react";

export const metadata: Metadata = {
    alternates: { canonical: "/signage-stickers/vehicle-branding" },
    title: "تغليف سيارات في جدة | فينيل 3M أصلي",
    description: "تغليف سيارات احترافي في جدة بفينيل 3M الأمريكي الأصلي. تغطية كاملة أو جزئية للسيارات والشاحنات وأساطيل الشركات. ضمان 3 سنوات، مقاوم لشمس جدة، تصميم 3D مجاني. خبرة 15 عام في براندينج المركبات.",
    keywords: [
        "تغليف سيارات جدة",
        "راب سيارات",
        "vehicle branding jeddah",
        "car wrapping saudi",
        "براندينج سيارات",
        "فينيل سيارات",
        "تغليف شاحنات",
        "أسطول سيارات",
        "3M wrap jeddah",
    ],
    openGraph: {
        title: "تغليف سيارات في جدة | فينيل 3M أصلي | بوابة الرواج",
        description: "تغليف سيارات احترافي في جدة بفينيل 3M الأمريكي الأصلي. تغطية كاملة أو جزئية للسيارات والشاحنات وأساطيل الشركات. ضمان 3 سنوات، مقاوم لشمس جدة، تصميم 3D مجاني. خبرة 15 عام في براندينج المركبات.",
        url: "https://rawajgate.com/signage-stickers/vehicle-branding",
        images: [{ url: "/images/commercial-vehicle-branding-car-wrapping-jeddah.webp", width: 1200, height: 630, alt: "تغليف سيارات في جدة | فينيل 3M أصلي" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "تغليف سيارات في جدة | فينيل 3M أصلي",
        description: "تغليف سيارات احترافي في جدة بفينيل 3M الأمريكي الأصلي. تغطية كاملة أو جزئية للسيارات والشاحنات وأساطيل الشركات. ضمان 3 سنوات، مقاوم لشمس جدة، تصميم 3D مجاني. خبرة 15 عام في براندينج المركبات.",
        images: ["/images/commercial-vehicle-branding-car-wrapping-jeddah.webp"],
    },
};

const WRAP_SERVICES = [
    {
        name: "تغليف كامل Full Wrap",
        description: "تغطية كاملة 100% للسيارة بتصميم موحد. الحل الأمثل للتحويل الكامل للمظهر أو البراندينج الشامل. يشمل جميع الأسطح والحواف.",
        price: "اطلب عرضك المخصص",
        duration: "3-5 أيام",
        icon: Car,
    },
    {
        name: "تغليف جزئي Partial Wrap",
        description: "تغطية أجزاء محددة: الأبواب، الغطاء، المؤخرة. مثالي للميزانيات المحدودة مع تأثير بصري قوي.",
        price: "سعر منافس",
        duration: "1-2 يوم",
        icon: Shield,
    },
    {
        name: "تغليف شاحنات Van Wrap",
        description: "شاحنات التوصيل والنقل الخفيف. حوّل أسطولك لإعلانات متحركة تجوب شوارع جدة يومياً.",
        price: "تواصل للسعر",
        duration: "5-7 أيام",
        icon: Truck,
    },
    {
        name: "أسطول كامل Fleet Branding",
        description: "حلول متكاملة لأساطيل الشركات. خصومات خاصة للعقود السنوية وأكثر من 5 مركبات.",
        price: "عرض خاص",
        duration: "حسب العدد",
        icon: Bus,
    },
];

const VINYL_TYPES = [
    {
        brand: "3M Wrap Film 1080",
        origin: "أمريكا",
        warranty: "5 سنوات",
        features: "الأفضل عالمياً، قابل للتمدد، سهل الإزالة، مقاوم للأشعة فوق البنفسجية",
    },
    {
        brand: "Avery Dennison SW900",
        origin: "أمريكا",
        warranty: "4 سنوات",
        features: "قناة تسريب هواء، ألوان متنوعة، سعر منافس",
    },
    {
        brand: "Oracal 970 Premium",
        origin: "ألمانيا",
        warranty: "3 سنوات",
        features: "اقتصادي، مثالي للتغليف الجزئي والشعارات",
    },
];

const FAQS = SignageStickersFaqs["signage-stickers/vehicle-branding"];

export default function VehicleBrandingPage() {
    const serviceSchema = generateServiceSchema({
        name: "Vehicle Branding & Car Wrapping Jeddah",
        nameAr: "تغليف وبراندينج السيارات في جدة",
        description: "تغليف سيارات احترافي بفينيل 3M في جدة. تغطية كاملة أو جزئية للسيارات والأساطيل التجارية. ضمان 3 سنوات.",
        url: "https://rawajgate.com/signage-stickers/vehicle-branding",
        image: "https://rawajgate.com/images/commercial-vehicle-branding-car-wrapping-jeddah.webp",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: "https://rawajgate.com" },
        { name: "لوحات وملصقات", url: "https://rawajgate.com/signage-stickers" },
        { name: "تغليف السيارات", url: "https://rawajgate.com/signage-stickers/vehicle-branding" },
    ]);

    const faqSchema = generateFAQSchema(FAQS);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero Section */}
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <nav className="text-sm text-white/60 mb-4">
                                <Link href="/" className="hover:text-white">الرئيسية</Link>
                                <span className="mx-2">/</span>
                                <Link href="/signage-stickers" className="hover:text-white">لوحات وملصقات</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">تغليف السيارات</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6">
                                <Shield className="w-4 h-4 text-blue-400" />
                                <span className="text-blue-300 text-sm font-medium">ضمان 3 سنوات • فينيل 3M أصلي</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                <span className="text-gradient">تغليف سيارات</span> احترافي في جدة
                            </h1>

                            {/* AI Snippet */}
                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                تغليف السيارات (Car Wrapping) هو فن تحويل مركبتك للوحة إعلانية متحركة أو تغيير لونها بالكامل
                                باستخدام فينيل عالي الجودة. في بوابة الرواج نستخدم حصرياً فينيل 3M الأمريكي الأصلي مع
                                ضمان 3 سنوات وتصميم 3D مجاني.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                تخيّل سيارتك تجوب شوارع جدة - من الكورنيش إلى طريق الملك - تحمل علامتك التجارية
                                أمام آلاف العيون يومياً. تكلفة الانطباع الواحد لا تتجاوز هللات! الإعلان الأذكى والأكثر فعالية.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href="/quote" className="btn-primary text-center">
                                    احصل على تصميم 3D مجاني
                                    <ArrowLeft className="inline-block mr-2 w-5 h-5" />
                                </Link>
                                <a href="tel:+966548923300" className="btn-secondary text-center">
                                    <Phone className="w-5 h-5 ml-2" />
                                    استشارة مجانية
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">500+</div>
                                    <div className="text-xs text-white/60">سيارة تم تغليفها</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">3</div>
                                    <div className="text-xs text-white/60">سنوات ضمان</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">500+</div>
                                    <div className="text-xs text-white/60">سيارة تم تغليفها</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <GeoImage
                                src="/images/commercial-vehicle-branding-car-wrapping-jeddah.webp"
                                alt="تغليف سيارة تجارية بالكامل بفينيل 3M في جدة - بوابة الرواج"
                                
                                
                                
                                className="rounded-2xl shadow-2xl"
                                priority
                            />
                            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <Award className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <span className="font-bold text-gray-900 block">فينيل 3M معتمد</span>
                                        <span className="text-sm text-gray-500">ضمان 5 سنوات من المصنع</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                            ما هو تغليف السيارات ولماذا تحتاجه؟
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p>
                                تغليف السيارات (Vehicle Wrapping) هو تقنية حديثة لتغطية سطح المركبة بطبقة رقيقة من
                                <strong> الفينيل عالي الأداء</strong>. الفينيل مادة بلاستيكية مرنة تلتصق بالسطح وتأخذ
                                شكله بالكامل، سواء كان مسطحاً أو منحنياً. تعتبر هذه الخدمة مكملاً مثالياً لـ <Link href="/signage-stickers/shop-signage-3d" className="text-blue-600 hover:text-blue-700 underline">لافتات متجرك</Link> لتعزيز هوية علامتك التجارية في كل مكان.
                            </p>

                            <p>
                                <strong>لماذا تختار التغليف بدلاً من الطلاء؟</strong> الفينيل يمنحك حرية لا نهائية
                                في التصميم - صور، جرافيك، تدرجات لونية - مستحيل تنفيذها بالطلاء التقليدي. كما أنه
                                <strong>قابل للإزالة</strong> بعد عدة سنوات دون أي ضرر للدهان الأصلي، مما يحافظ
                                على قيمة سيارتك عند البيع.
                            </p>

                            <p>
                                في <strong>بوابة الرواج</strong>، ننفذ تغليف السيارات منذ 15 عاماً. فريقنا مدرّب
                                على تقنيات التغليف الاحترافية بدون فقاعات أو تجاعيد. نخدم شركات كبرى ومؤسسات
                                حكومية في جدة - من شاحنات التوصيل في المنطقة الصناعية إلى سيارات VIP في حي الحمراء.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            خدمات تغليف السيارات
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            حلول متكاملة لجميع أنواع المركبات - من السيارات الصغيرة إلى الأساطيل التجارية
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {WRAP_SERVICES.map((service) => (
                            <div key={service.name} className="card p-8 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0">
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <div className="flex flex-wrap gap-3 text-sm">
                                            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                                                {service.price}
                                            </span>
                                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {service.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vinyl Types */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                        أنواع الفينيل المستخدمة
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        نستخدم حصرياً خامات عالمية معتمدة مع ضمان رسمي من المصنع
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {VINYL_TYPES.map((vinyl, index) => (
                            <div key={vinyl.brand} className={`card p-6 ${index === 0 ? 'ring-2 ring-blue-500' : ''}`}>
                                {index === 0 && (
                                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-4 inline-block">
                                        الاختيار الموصى به
                                    </span>
                                )}
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{vinyl.brand}</h3>
                                <div className="flex gap-4 text-sm text-gray-500 mb-3">
                                    <span>🌍 {vinyl.origin}</span>
                                    <span>🛡️ ضمان {vinyl.warranty}</span>
                                </div>
                                <p className="text-gray-600 text-sm">{vinyl.features}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Weather Resistance */}
            <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-heading font-bold mb-6">
                                مصمم لتحمل طقس جدة
                            </h2>
                            <p className="text-white/80 text-lg mb-8">
                                نعلم أن شمس جدة قوية! لذلك نستخدم حصرياً فينيل مقاوم للأشعة فوق البنفسجية
                                بتقنية UV Protection المصمم خصيصاً لطقس الخليج الحار.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Sun, title: "مقاوم للشمس", desc: "حتى 65 درجة مئوية" },
                                    { icon: Droplets, title: "مقاوم للماء", desc: "غسيل آمن 100%" },
                                    { icon: Shield, title: "حماية الدهان", desc: "من الخدوش والحصى" },
                                    { icon: Wrench, title: "إزالة نظيفة", desc: "بدون آثار لاصقة" },
                                ].map((feature) => (
                                    <div key={feature.title} className="flex items-start gap-3">
                                        <feature.icon className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold">{feature.title}</h3>
                                            <p className="text-white/60 text-sm">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <GeoImage
                            src="/images/printing-machines-digital-offset-equipment.webp"
                            alt="طباعة فينيل سيارات عالي الجودة في جدة"
                            
                            
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        مراحل تغليف السيارة
                    </h2>

                    <div className="grid md:grid-cols-5 gap-6">
                        {[
                            { step: "01", title: "الاستشارة", desc: "نفهم أهدافك وميزانيتك" },
                            { step: "02", title: "التصميم 3D", desc: "نموذج ثلاثي الأبعاد للموافقة" },
                            { step: "03", title: "التحضير", desc: "غسيل وتلميع السيارة" },
                            { step: "04", title: "التركيب", desc: "تغليف احترافي بدون فقاعات" },
                            { step: "05", title: "الفحص", desc: "ضمان الجودة والتسليم" },
                        ].map((phase) => (
                            <div key={phase.step} className="text-center">
                                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                    {phase.step}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{phase.title}</h3>
                                <p className="text-gray-600 text-sm">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                            لماذا بوابة الرواج لتغليف سيارتك؟
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "فينيل 3M الأمريكي الأصلي حصرياً",
                                "فريق مدرب على التقنيات الألمانية",
                                "ضمان 3 سنوات على العمل والخامة",
                                "تصميم 3D مجاني قبل التنفيذ",
                                "غرفة تركيب نظيفة ومكيفة",
                                "إزالة مجانية بعد انتهاء العمر الافتراضي",
                                "خصومات خاصة للأساطيل (+5 مركبات)",
                                "خدمة VIP في موقع العميل",
                            ].map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-600 shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 text-center">
                            الأسئلة الشائعة عن تغليف السيارات
                        </h2>
                        <p className="text-gray-600 text-center mb-12">
                            كل ما تريد معرفته قبل تغليف سيارتك في جدة
                        </p>

                        <div className="space-y-6">
                            {FAQS.map((faq, index) => (
                                <div key={index} className="card p-6">
                                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        حوّل سيارتك لإعلان متحرك!
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        احصل على تصميم 3D مجاني لسيارتك الآن وشاهد كيف ستبدو قبل التنفيذ.
                        <strong> ضمان 3 سنوات + فينيل 3M أصلي.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/quote"
                            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            احصل على تصميم 3D مجاني
                            <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/966548923300?text=أريد تغليف سيارة"
                            className="px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all shadow-lg inline-flex items-center justify-center"
                        >
                            واتساب الآن
                        </a>
                    </div>
                    <p className="text-white/60 mt-6 text-sm">
                        ورشتنا في المنطقة الصناعية - جدة | مفتوح السبت - الخميس 8 صباحاً - 6 مساءً
                    </p>
                </div>
            </section>
        <RelatedServices currentPath="/signage-stickers/vehicle-branding" />
        </>
    );
}
