import { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { SignageStickersFaqs } from "@/lib/faqs/signage-stickers";
import {
    Sticker,
    ArrowLeft,
    Home,
    Building,
    Palette,
    Sparkles,
    Paintbrush,
    Store,
} from "lucide-react";

export const metadata: Metadata = {
    openGraph: {
        title: "ملصقات جدارية وستيكرات ديكور في جدة | بوابة الرواج",
        description: "ملصقات جدارية (Wall Decals) للمكاتب والمحلات في جدة. تصاميم مخصصة، سهلة التركيب والإزالة، لا تضر الدهان. مثالية للديكور الداخلي والشعارات.",
        url: "https://rawajgate.com/signage-stickers/wall-decals",
        images: [{ url: "/images/die-cut-vinyl-stickers-waterproof.webp", width: 1200, height: 630, alt: "ملصقات جدارية وستيكرات ديكور في جدة" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ملصقات جدارية وستيكرات ديكور في جدة",
        description: "ملصقات جدارية (Wall Decals) للمكاتب والمحلات في جدة. تصاميم مخصصة، سهلة التركيب والإزالة، لا تضر الدهان. مثالية للديكور الداخلي والشعارات.",
        images: ["/images/die-cut-vinyl-stickers-waterproof.webp"],
    },
    alternates: { canonical: "/signage-stickers/wall-decals" },
    title: "ملصقات جدارية وستيكرات ديكور في جدة",
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

const TECH_SPECS = [
    { spec: "نوع الفينيل", value: "مقصوص / مطبوع" },
    { spec: "دقة الطباعة", value: "1440 DPI" },
    { spec: "اللاصق", value: "Low-Tack / دائم" },
    { spec: "العمر الافتراضي", value: "5-7 سنوات" },
    { spec: "الحد الأقصى للعرض", value: "3 متر" },
    { spec: "وقت الإنتاج", value: "24-72 ساعة" },
];

const USE_CASES_DETAILED = [
    { icon: Building, title: "شعار الشركة", desc: "شعارك في منطقة الاستقبال يعطي انطباعاً احترافياً" },
    { icon: Sparkles, title: "عبارات تحفيزية", desc: "رسائل ملهمة للموظفين والزوار" },
    { icon: Store, title: "ديكور المحلات", desc: "تصاميم جذابة للكافيهات والمطاعم" },
    { icon: Paintbrush, title: "التصميم الداخلي", desc: "لمسات جمالية للمساحات المختلفة" },
];

const FAQS = SignageStickersFaqs["signage-stickers/wall-decals"];

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

            {/* Use Cases Detailed */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        استخدامات الملصقات الجدارية
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {USE_CASES_DETAILED.map((useCase) => (
                            <div key={useCase.title} className="card p-6 text-center card-hover">
                                <useCase.icon className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{useCase.title}</h3>
                                <p className="text-gray-600 text-sm">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                        أين تُستخدم؟
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {APPLICATIONS.map((app) => (
                            <span key={app} className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm hover:bg-purple-100 transition-colors">
                                {app}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Specs */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <GeoImage
                            src="/images/glass-window-frosted-sticker-branding.webp"
                            alt="ملصقات جدارية للمكاتب والشركات في جدة"
                            
                            
                            className="rounded-2xl shadow-xl"
                        />
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية
                            </h2>
                            <p className="text-gray-600 mb-8">
                                نستخدم أفضل الخامات والتقنيات لضمان ملصقات جميلة وطويلة العمر
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
                            دليلك الشامل للملصقات الجدارية في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">ما هي الملصقات الجدارية ولماذا تحتاجها؟</h3>
                            <p>
                                الملصقات الجدارية (Wall Decals) هي طريقة سريعة واقتصادية لتحويل أي مساحة فارغة إلى تجربة بصرية مميزة.
                                سواء كنت تريد إضافة شعار شركتك في منطقة الاستقبال بالتحلية، أو كتابة عبارة تحفيزية في مكتبك بحي الأندلس،
                                أو تزيين جدار مطعمك في البلد - الملصقات الجدارية تحقق ذلك بسهولة وبتكلفة أقل بكثير من الطلاء أو ورق الحائط.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">مميزات الملصقات الجدارية</h3>
                            <p>
                                الملصقات الجدارية تتفوق على البدائل الأخرى بعدة مميزات. <strong>سهولة التركيب</strong> - يمكن تركيبها في ساعات
                                بدلاً من أيام. <strong>سهولة الإزالة</strong> - عند الرغبة في التغيير، تُزال بدون إتلاف الدهان.
                                <strong>التخصيص الكامل</strong> - أي تصميم، أي حجم، أي لون. <strong>التكلفة المعقولة</strong> - أرخص من
                                ورق الحائط أو الطلاء الخاص. <strong>المتانة</strong> - تدوم 5-7 سنوات داخلياً.
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                    alt="ملصقات جدارية في مكاتب الشركات بجدة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/printing-machines-digital-offset-equipment.webp"
                                    alt="طباعة ملصقات جدارية عالية الدقة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أنواع الملصقات الجدارية</h3>
                            <p>
                                نوفر في بوابة الرواج نوعين رئيسيين من الملصقات الجدارية. <strong>الملصق المقصوص (Cut Vinyl)</strong>
                                عبارة عن حروف أو أشكال مقصوصة من فينيل ملون، كل حرف أو شكل منفصل. هذا النوع مثالي للشعارات والنصوص
                                ويعطي مظهراً أنيقاً وكأنها مطلية على الجدار. <strong>الملصق المطبوع (Printed Vinyl)</strong> يسمح
                                بطباعة أي تصميم بألوان متعددة وصور فوتوغرافية، مناسب للجداريات الكبيرة والتصاميم المعقدة.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">تطبيقات الملصقات الجدارية</h3>
                            <p>
                                الملصقات الجدارية لها استخدامات متعددة في بيئة الأعمال والمساحات التجارية. <strong>مناطق الاستقبال</strong>:
                                شعار الشركة الكبير خلف موظف الاستقبال يعطي انطباعاً احترافياً للزوار. <strong>غرف الاجتماعات</strong>:
                                عبارات تحفيزية أو قيم الشركة. <strong>المطاعم والكافيهات</strong>: ديكورات جذابة وقوائم مصورة على الجدران.
                                <strong>العيادات والمستشفيات</strong>: رسومات هادئة ومعلومات صحية. <strong>صالونات التجميل</strong>:
                                تصاميم أنيقة تعكس أجواء الجمال والأناقة.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">نصائح لاختيار الملصق المناسب</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li>للشعارات والنصوص البسيطة: اختر الملصق المقصوص (Cut Vinyl)</li>
                                <li>للصور والتصاميم الملونة: اختر الملصق المطبوع (Printed)</li>
                                <li>تأكد من جفاف الدهان تماماً قبل التركيب (30 يوم على الأقل)</li>
                                <li>اختر لوناً متبايناً مع لون الجدار لضمان الوضوح</li>
                                <li>قس المساحة بدقة قبل الطلب لتجنب المفاجآت</li>
                                <li>للجدران الخشنة، استشرنا عن البدائل المناسبة</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج للملصقات الجدارية؟</h3>
                            <p>
                                في بوابة الرواج، نتميز بخبرة 15+ عاماً في تصميم وتنفيذ الملصقات الجدارية للشركات والمحلات في جدة.
                                نستخدم فينيل عالي الجودة بلاصق Low-Tack آمن على الدهان. طباعتنا بدقة 1440 DPI تضمن وضوح التفاصيل.
                                فريق التصميم لدينا يساعدك في تصور الملصق على جدارك قبل التنفيذ. ونوفر خدمة التركيب الاحترافي داخل جدة
                                لضمان نتيجة مثالية بدون فقاعات أو تجاعيد.
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
                        كل ما تريد معرفته عن الملصقات الجدارية في جدة
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

            <section className="py-20 bg-gradient-to-r from-purple-500 to-purple-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">حوّل جدرانك إلى تحفة فنية!</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        احصل على تصميم مجاني وعرض سعر لملصقك الجداري. تركيب احترافي داخل جدة.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-100 transition-all">
                            اطلب تصميم مجاني <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href={`https://wa.me/${BUSINESS.phone.whatsapp}?text=أريد ملصق جداري`}
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition-all"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        <RelatedServices currentPath="/signage-stickers/wall-decals" />
        </>
    );
}
