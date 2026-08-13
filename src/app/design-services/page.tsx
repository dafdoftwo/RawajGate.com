import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { sectionMetadata } from "@/lib/seo";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, generateSpeakableWebPage } from "@/lib/schema";
import { AllSilosLinks } from "@/components/related-services";
import {
    Palette,
    Fingerprint,
    PenTool,
    FileCheck,
    ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = sectionMetadata.designServices;

const SUB_SERVICES = [
    {
        title: "هوية بصرية",
        titleEn: "Branding Identity",
        description: "تصميم هوية بصرية متكاملة تعكس قيم ورسالة شركتك",
        href: "/design-services/branding-identity",
        icon: Fingerprint,
        image: "/images/client-meeting-office-al-rawaj-jeddah.webp",
    },
    {
        title: "تصميم شعارات",
        titleEn: "Logo Design",
        description: "شعارات مبتكرة ومميزة تبقى في الأذهان",
        href: "/design-services/logo-design",
        icon: PenTool,
        image: "/images/presentation-folder-files-holder.webp",
    },
    {
        title: "تجهيز ملفات الطباعة",
        titleEn: "Pre-Press",
        description: "إعداد وتجهيز الملفات للطباعة بأعلى جودة",
        href: "/design-services/pre-press",
        icon: FileCheck,
        image: "/images/printing-machines-digital-offset-equipment.webp",
    },
];

export default function DesignServicesPage() {
    const serviceSchema = generateServiceSchema({
        name: "Design Services",
        nameAr: "خدمات التصميم",
        description: "تصميم هوية بصرية، شعارات، وتجهيز ملفات الطباعة بأيدي مصممين محترفين في جدة",
        url: "https://rawajgate.com/design-services",
        image: "https://rawajgate.com/images/client-meeting-office-al-rawaj-jeddah.webp",
    });

    const faqSchema = generateFAQSchema([
        {
            question: "هل تقدمون تصميم هوية بصرية كاملة للشركات في جدة؟",
            answer:
                "نعم، نقدم تصميم هوية بصرية متكاملة تشمل الشعار، الألوان والخطوط، التطبيقات الأساسية مثل بطاقة العمل والورق الرسمي، مع دليل استخدام يساعدك على الحفاظ على اتساق العلامة.",
        },
        {
            question: "هل يمكن تنفيذ التصميم ثم طباعته وتجهيزه عندكم؟",
            answer:
                "نعم، ميزة بوابة الرواج أننا نربط التصميم بالتنفيذ. بعد اعتماد التصميم نجهز ملفات الطباعة بشكل صحيح وننفذ المطبوعات داخل قسم الطباعة التجارية لضمان تطابق الألوان والجودة.",
        },
        {
            question: "ما الفرق بين تصميم شعار فقط وبين هوية بصرية؟",
            answer:
                "الشعار عنصر واحد من العلامة، بينما الهوية البصرية تشمل نظاماً كاملاً للألوان والخطوط وأساليب استخدام الشعار وتطبيقاته على المطبوعات والواجهات والوسائط الرقمية.",
        },
        {
            question: "هل تجهزون ملفات الطباعة بحيث تكون جاهزة بدون مشاكل؟",
            answer:
                "نعم، نجهز الملفات بدقة (هوامش، دقة الصور، ألوان مناسبة للطباعة، bleed) لتفادي اختلافات الألوان أو قص غير صحيح.",
        },
    ]);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: "https://rawajgate.com" },
        { name: "خدمات التصميم", url: "https://rawajgate.com/design-services" },
    ]);

    const speakableSchema = generateSpeakableWebPage({
        url: "https://rawajgate.com/design-services",
        name: "خدمات تصميم جرافيكي في جدة",
        description: "تصميم هوية بصرية، شعارات، وتجهيز ملفات الطباعة بأيدي مصممين محترفين في جدة. استشارة تصميم مجانية مع كل مشروع.",
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
            />

            {/* Hero */}
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <nav className="text-sm text-white/60 mb-4">
                            <Link href="/" className="hover:text-white">الرئيسية</Link>
                            <span className="mx-2">/</span>
                            <span className="text-amber-400">خدمات التصميم</span>
                        </nav>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                                <Palette className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
                                    خدمات التصميم
                                </h1>
                                <p data-speakable="answer" className="text-white/70">Design Services</p>
                            </div>
                        </div>
                        <p className="text-xl text-white/80 leading-relaxed">
                            فريق مصممين محترفين لخدمتك في تصميم <Link href="/design-services/branding-identity" className="text-rose-200 hover:text-white underline decoration-1 underline-offset-4">الهوية البصرية</Link>،
                            <Link href="/design-services/logo-design" className="text-rose-200 hover:text-white underline decoration-1 underline-offset-4">الشعارات</Link>،
                            و <Link href="/design-services/pre-press" className="text-rose-200 hover:text-white underline decoration-1 underline-offset-4">تجهيز ملفات الطباعة</Link>.
                            تصاميمنا جاهزة للتنفيذ فوراً في قسم <Link href="/commercial-printing" className="text-rose-200 hover:text-white underline decoration-1 underline-offset-4">المطبوعات التجارية</Link> لدينا.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {SUB_SERVICES.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="group block card-hover"
                            >
                                <div className="card overflow-hidden h-full">
                                    <div className="relative h-56 overflow-hidden">
                                        <GeoImage
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 to-transparent" />
                                        <div className="absolute bottom-4 right-4 left-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                                                    <service.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                                    <p className="text-white/70 text-sm">{service.titleEn}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <div className="flex items-center text-rose-600 font-medium text-sm group-hover:gap-3 transition-all">
                                            <span>اكتشف المزيد</span>
                                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-[-4px] transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                            خدمات تصميم في جدة: كيف تبني هوية بصرية تُقنع العميل قبل أن يتحدث معك
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            كثير من المشاريع في جدة تبدأ بفكرة قوية ومنتج جيد، لكنها تتعثر في التسويق لأن “المظهر” لا يعكس الجودة.
                            التصميم ليس زخرفة، بل لغة تواصل: يوصل رسالتك بسرعة، يوضح الفرق بينك وبين المنافسين، ويجعل العميل يثق أن
                            لديك نظاماً واحترافية. من أول ثانية يرى فيها العميل شعارك أو بطاقة العمل أو واجهة الحسابات الرقمية، يبدأ
                            بتكوين حكم. لذلك نقدم في بوابة الرواج خدمات تصميم احترافية في جدة تركز على بناء هوية بصرية متسقة وقابلة
                            للتنفيذ مباشرة على المطبوعات واللوحات والهدايا الدعائية.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <div className="card overflow-hidden">
                                <div className="relative h-56">
                                    <GeoImage
                                        src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                        alt="اجتماع تصميم هوية بصرية في جدة مع فريق بوابة الرواج"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">هوية بصرية: اتساق يرفع الثقة</h3>
                                    <p className="text-gray-600">
                                        الهوية البصرية ليست شعاراً فقط؛ هي نظام يجعل كل نقطة اتصال مع العميل تبدو من نفس العلامة وبنفس الجودة.
                                    </p>
                                </div>
                            </div>
                            <div className="card overflow-hidden">
                                <div className="relative h-56">
                                    <GeoImage
                                        src="/images/printing-machines-digital-offset-equipment.webp"
                                        alt="تجهيز ملفات الطباعة باحتراف في جدة لضمان جودة الألوان"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pre-Press: تصميم جاهز للطباعة فعلاً</h3>
                                    <p className="text-gray-600">
                                        كثير من مشاكل الطباعة تأتي من ملفات غير مجهزة. نجهز ملفاتك بشكل صحيح لتخرج النتيجة كما تتوقع.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3>لماذا تحتاج الهوية البصرية إذا كنت تعمل داخل جدة؟</h3>
                            <p>
                                جدة سوق كبير ومتعدد الفئات. العميل يتعرض لإعلانات كثيرة يومياً، لذلك العلامات التي تملك هوية واضحة
                                تُفهم بسرعة وتُحفظ أسرع. الهوية تساعدك في توحيد شكل اللوحات والملصقات والمطبوعات والهدايا، وهذا
                                يجعل حملاتك التسويقية متماسكة ويزيد تذكر العلامة. كذلك في القطاعات التي تعتمد على الثقة مثل الخدمات
                                المهنية والعيادات والمقاولات، الانطباع البصري الجيد يقلل التردد ويسرّع القرار.
                            </p>

                            <h3>متى تختار تصميم شعار فقط ومتى تختار هوية كاملة؟</h3>
                            <p>
                                إذا كنت في بداية الطريق وتحتاج خطوة سريعة، يمكن البدء بتصميم شعار أساسي مع نظام ألوان وخطوط مبسط.
                                أما إذا كان لديك فريق، فروع، أو خطة نمو، فالهوية الكاملة توفر عليك وقتاً وتمنع العشوائية: كل مرة
                                تطبع بطاقة أو لافتة أو منشور، ستكون هناك قواعد واضحة. الهوية أيضاً تسهّل العمل مع أي جهة لاحقاً
                                (مطابع، مصممين، مسوقين) لأنها تحدد شكل العلامة ومعاييرها.
                            </p>

                            <h3>تصميم قابل للتنفيذ: الفرق الذي نصنعه</h3>
                            <p>
                                التصميم قد يبدو رائعاً على الشاشة لكنه يفشل في الواقع إذا لم يُبنى على مقاسات ومواد فعلية. نحن نربط
                                التصميم بالتنفيذ لأننا ننفذ الطباعة واللوحات والهدايا. هذا يجعل قرارات التصميم أكثر واقعية: نراعي
                                حجم النص في البروشور، وضوح الشعار على المنتجات الصغيرة، وكيف تظهر الألوان في الطباعة. كذلك نساعدك أن
                                تختار صوراً ورسائل تناسب جمهور جدة وتخاطبه بطريقة مباشرة.
                            </p>

                            <h3>تجهيز ملفات الطباعة (Pre-Press): نقطة لا يراها العميل لكنها تصنع الجودة</h3>
                            <p>
                                التجهيز الصحيح للملفات يعني: دقة عالية للصور، إعداد الهوامش والـ bleed، اختيار نظام ألوان مناسب،
                                وتأكد أن الخطوط تعمل بدون مشاكل. هذه التفاصيل تمنع اختلاف ألوان، أو قص غير دقيق، أو ظهور حواف بيضاء
                                في الطباعة. في بوابة الرواج نراجع الملفات قبل الإنتاج ونقترح تعديلات فنية إذا لزم حتى تحصل على نتيجة
                                ثابتة من أول مرة.
                            </p>

                            <h3>كيف تربط التصميم بنتائج ملموسة؟</h3>
                            <p>
                                الهدف النهائي ليس “تصميم جميل” فقط، بل تصميم يحقق نتائج: يزيد الاستفسارات، يرفع الثقة، ويجعل العرض
                                أو الخدمة أسهل للفهم. لذلك نهتم ببنية الرسالة: ماذا تقدم؟ لمن؟ وما الذي يجعلك مختلفاً؟ ثم نترجم هذا
                                إلى عناصر بصرية واضحة، ونقترح تطبيقات مباشرة مثل بطاقة عمل احترافية، بروشور مختصر، أو لوحة واجهة
                                مناسبة لطبيعة المكان.
                            </p>
                        </div>

                        <div className="card p-6 md:p-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">FAQ</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="font-bold text-gray-900">هل تقدمون تصميم هوية بصرية كاملة للشركات في جدة؟</div>
                                    <div className="text-gray-600">
                                        نعم، مع تطبيقات أساسية ودليل استخدام يساعد على اتساق العلامة.
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">هل يمكن تنفيذ التصميم ثم طباعته وتجهيزه عندكم؟</div>
                                    <div className="text-gray-600">
                                        نعم، بعد اعتماد التصميم نجهز ملفات الطباعة وننفذ المطبوعات لضمان تطابق الألوان والجودة.
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">ما الفرق بين تصميم شعار فقط وبين هوية بصرية؟</div>
                                    <div className="text-gray-600">
                                        الشعار عنصر واحد، بينما الهوية نظام كامل للألوان والخطوط وتطبيقات الاستخدام.
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">هل تجهزون ملفات الطباعة لتفادي المشاكل؟</div>
                                    <div className="text-gray-600">
                                        نعم، نجهز الملفات بدقة لتفادي اختلاف الألوان أو مشاكل القص.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
                        كيف نعمل
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "الاستشارة", desc: "نفهم احتياجاتك ورؤيتك" },
                            { step: "02", title: "التصميم", desc: "نقدم مقترحات متعددة" },
                            { step: "03", title: "التعديل", desc: "نطور التصميم حتى الكمال" },
                            { step: "04", title: "التسليم", desc: "ملفات جاهزة للطباعة" },
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-rose-600">{item.step}</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-rose-500 to-rose-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        تحتاج مساعدة في التصميم؟
                    </h2>
                    <p className="text-white/90 mb-8 max-w-xl mx-auto">
                        احجز استشارة تصميم مجانية مع فريقنا المحترف
                    </p>
                    <Link
                        href="/quote"
                        className="px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center"
                    >
                        احجز استشارة مجانية
                        <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        <AllSilosLinks currentSilo="design-services" />
        </>
    );}
