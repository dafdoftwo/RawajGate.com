import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { sectionMetadata } from "@/lib/seo";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { AllSilosLinks } from "@/components/related-services";
import {
    Printer,
    CreditCard,
    FileText,
    FolderOpen,
    Mail,
    Receipt,
    UtensilsCrossed,
    ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = sectionMetadata.commercialPrinting;

const SUB_SERVICES = [
    {
        title: "بطاقات العمل",
        titleEn: "Business Cards",
        description: "بطاقات عمل فاخرة بتشطيبات متنوعة: لامع، مطفي، مخملي، ذهبي",
        href: "/commercial-printing/business-cards",
        icon: CreditCard,
        image: "/images/luxury-business-cards-printing-jeddah.webp",
    },
    {
        title: "فلايرات وبروشورات",
        titleEn: "Flyers & Brochures",
        description: "منشورات إعلانية مطوية بأحجام وتصميمات متعددة",
        href: "/commercial-printing/flyers-brochures",
        icon: FileText,
        image: "/images/advertising-flyers-brochures-tri-fold.webp",
    },
    {
        title: "ملفات العروض",
        titleEn: "Presentation Folders",
        description: "فولدرات احترافية بجيوب داخلية لعروض الشركات",
        href: "/commercial-printing/folders",
        icon: FolderOpen,
        image: "/images/presentation-folder-files-holder.webp",
    },
    {
        title: "ورق رسمي وظروف",
        titleEn: "Letterheads & Envelopes",
        description: "مطبوعات رسمية متكاملة بهوية شركتك",
        href: "/commercial-printing/letterheads",
        icon: Mail,
        image: "/images/corporate-letterhead-envelope-branding.webp",
    },
    {
        title: "دفاتر فواتير NCR",
        titleEn: "NCR Invoice Books",
        description: "دفاتر فواتير وإيصالات بنسخ كربونية متعددة",
        href: "/commercial-printing/ncr-books",
        icon: Receipt,
        image: "/images/ncr-invoice-books-receipts-printing.webp",
    },
    {
        title: "قوائم الطعام",
        titleEn: "Restaurant Menus",
        description: "منيوهات فاخرة بتغليف جلدي للمطاعم والكافيهات",
        href: "/commercial-printing/menus",
        icon: UtensilsCrossed,
        image: "/images/restaurant-menu-design-leather-cover.webp",
    },
];

export default function CommercialPrintingPage() {
    const serviceSchema = generateServiceSchema({
        name: "Commercial Printing Services",
        nameAr: "خدمات الطباعة التجارية",
        description: "طباعة بطاقات عمل، فلايرات، بروشورات، ملفات عروض، ورق رسمي، وقوائم طعام بجودة عالية في جدة",
        url: "https://rawajgate.com/commercial-printing",
        image: "https://rawajgate.com/images/luxury-business-cards-printing-jeddah.webp",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: "https://rawajgate.com" },
        { name: "مطبوعات تجارية", url: "https://rawajgate.com/commercial-printing" },
    ]);

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

            {/* Hero */}
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <nav className="text-sm text-white/60 mb-4">
                            <Link href="/" className="hover:text-white">الرئيسية</Link>
                            <span className="mx-2">/</span>
                            <span className="text-amber-400">مطبوعات تجارية</span>
                        </nav>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
                                <Printer className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
                                    مطبوعات تجارية
                                </h1>
                                <p className="text-white/70">Commercial Printing Services</p>
                            </div>
                        </div>
                        <p className="text-xl text-white/80 leading-relaxed">
                            خدمات طباعة تجارية احترافية لجميع احتياجات شركتك: <Link href="/commercial-printing/business-cards" className="text-amber-200 hover:text-white underline decoration-1 underline-offset-4">بطاقات العمل</Link>،
                            البروشورات، الملفات، المطبوعات الرسمية، وقوائم الطعام. إذا كنت بحاجة لتصميمها أولاً،
                            فريقنا يقدم <Link href="/design-services" className="text-amber-200 hover:text-white underline decoration-1 underline-offset-4">خدمات تصميم</Link> متكاملة بجودة استثنائية
                            وتسليم سريع في جدة.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SUB_SERVICES.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="group block card-hover"
                            >
                                <div className="card overflow-hidden">
                                    <div className="relative h-48 overflow-hidden">
                                        <GeoImage
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 right-4 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                                                <service.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-white font-bold">{service.title}</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 transition-all">
                                            <span>اطلب الآن</span>
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
                            الطباعة التجارية في جدة: دليل عملي لاختيار مطبعة ترفع مظهر علامتك وتزيد المبيعات
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            إذا كنت تدير شركة، متجر، مطعم، أو علامة ناشئة في جدة، فالمطبوعات التجارية ليست “تفاصيل” بل
                            هي واجهة علامتك أمام العميل: من بطاقة العمل التي تُقدَّم في أول لقاء، إلى بروشور يشرح خدماتك،
                            إلى ورق رسمي يرافق عروض الأسعار والعقود، وصولاً إلى منيو المطعم أو ملف العرض الذي يرافق اجتماعاً
                            مع جهة حكومية أو عميل مؤسسي. في بوابة الرواج نُدرك أن المنافسة في جدة عالية، وأن العميل يتخذ قراراً
                            سريعاً بناءً على الانطباع الأول، لذلك نركز على طباعة تجارية احترافية تجمع بين التصميم الصحيح، اختيار
                            الخامة المناسبة، ودقة التنفيذ، مع تسليم سريع داخل جدة.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <div className="card overflow-hidden">
                                <div className="relative h-56">
                                    <GeoImage
                                        src="/images/luxury-business-cards-printing-jeddah.webp"
                                        alt="طباعة بطاقات عمل فاخرة في جدة بجودة عالية"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">بطاقات العمل: الانطباع الأول</h3>
                                    <p className="text-gray-600">
                                        اختيار ورق مناسب وتشطيب احترافي (مطفي، مخملي، أو طباعة بارزة) يصنع فرقاً واضحاً في
                                        اجتماعات الأعمال داخل جدة.
                                    </p>
                                </div>
                            </div>
                            <div className="card overflow-hidden">
                                <div className="relative h-56">
                                    <GeoImage
                                        src="/images/advertising-flyers-brochures-tri-fold.webp"
                                        alt="طباعة بروشورات وفلايرات إعلانية في جدة لتسويق الشركات"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">البروشورات: توضيح القيمة بسرعة</h3>
                                    <p className="text-gray-600">
                                        بروشور مصمم بعناية يساعد العميل أن يفهم خدماتك خلال دقيقة، وهذا يرفع احتمالية التواصل
                                        والطلب بشكل مباشر.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3>متى تحتاج فعلياً مطبوعات تجارية؟</h3>
                            <p>
                                كثير من الشركات في جدة تبدأ بالحملات الرقمية ثم تكتشف أن العميل يطلب “ملف تعريفي” أو “بروفايل”
                                أو ورق رسمي قبل توقيع عقد أو طلب توريد. المطبوعة هنا تتحول من عنصر ترويجي إلى وثيقة ثقة. إذا كنت
                                تقدم خدمات (مقاولات، عيادات، مكاتب محاماة، مراكز تدريب، شركات تقنية، أو مطاعم)، فوجود مطبوعات
                                متسقة مع الهوية البصرية يجعل علامتك أكثر احترافاً ويقلل التردد عند العميل.
                            </p>

                            <h3>كيف تختار مطبعة في جدة بدون أن تخسر وقتك وميزانيتك؟</h3>
                            <p>
                                اختيار مطبعة مناسبة لا يعتمد على السعر فقط. اسأل عن نوع الطباعة (رقمية أو أوفست)، وجودة الألوان،
                                خيارات الورق، دقة القص، ووضوح الخطوط العربية. اسأل أيضاً عن القدرة على الالتزام بموعد التسليم داخل
                                جدة، خصوصاً إذا كان لديك فعالية أو افتتاح أو اجتماع مهم. في بوابة الرواج نعمل بمنهج واضح: نبدأ
                                بتحديد الهدف من المطبوعة، ثم نقترح الخامة والتشطيب المناسب، ثم نراجع الملف قبل الطباعة لضمان
                                خلوه من مشاكل الدقة أو الهوامش أو اختلاف الألوان.
                            </p>

                            <h3>أنواع الطباعة التجارية التي ننفذها لعملاء جدة</h3>
                            <p>
                                نقدم باقة واسعة من المطبوعات التي تغطي معظم احتياجات الشركات في جدة. بطاقات العمل بأحجام متعددة
                                وتشطيبات فاخرة، فلايرات وبروشورات مطوية أو ثلاثية الطي، ملفات عروض (Presentation Folders) بجيوب
                                داخلية لتسليم العروض بشكل راقٍ، ورق رسمي وظروف متناسقة مع الهوية، دفاتر فواتير NCR للشركات ومحلات
                                التجزئة، بالإضافة إلى قوائم الطعام للمطاعم والكافيهات بخامات مناسبة للاستخدام اليومي.
                            </p>

                            <h3>لماذا جودة الخامة والتشطيب مهمة في السوق الجداوي؟</h3>
                            <p>
                                جدة مدينة أعمال وسياحة، وفيها معارض وفعاليات واجتماعات مؤسسية بشكل مستمر. العميل هنا يرى عشرات
                                البطاقات والبروشورات يومياً، لذلك أي تفصيل صغير يصنع تميّزاً: سماكة الورق، ملمس المخملي، طباعة
                                ذهبية أو فضية، أو حتى طريقة طي البروشور. هذه التفاصيل لا تُشاهد فقط، بل تُحَسّ باليد، وهذا يرفع قيمة
                                علامتك في ذهن العميل. بالنسبة للمطاعم، منيو جيد بخامة مقاومة وبطباعة ألوان ثابتة يعكس نظافة وجودة
                                الخدمة، ويؤثر على تجربة الزائر.
                            </p>

                            <h3>ما الذي يميز بوابة الرواج في الطباعة التجارية داخل جدة؟</h3>
                            <p>
                                نركز على ثلاثة محاور: الوضوح، الثبات، والالتزام. الوضوح يعني نصوص عربية مقروءة بدون تكسير أو نزيف
                                ألوان، والثبات يعني أن اللون الذي اعتمدته للهوية يظهر بنفس الدرجة في كل دفعة طباعة، والالتزام يعني أن
                                طلبك يصل في الوقت المتفق عليه. كما نساعدك في اختيار المقاسات المناسبة حسب استخدامك: بطاقة عمل
                                للاجتماعات الرسمية تختلف عن بطاقة لمحل تجزئة، وبروشور لعيادة يختلف عن بروشور لمكتب خدمات أعمال.
                            </p>

                            <h3>خطوات تنفيذ طلب الطباعة من البداية حتى الاستلام</h3>
                            <p>
                                نبدأ باستقبال تفاصيل طلبك (النوع، الكمية، المقاس، الهدف). بعدها نقترح خيارات ورق وتشطيب مناسبة، ثم
                                نراجع ملفاتك أو ننفذ التصميم إن احتجت. قبل الطباعة نعتمد نموذجاً واضحاً للمراجعة (الألوان، الهوامش،
                                اتجاه الطي، وترتيب الصفحات). بعد ذلك تتم الطباعة والتشطيب (قص، تغليف، سلوفان، طباعة بارزة أو طباعة
                                ذهبية حسب الطلب)، ثم التغليف والتسليم داخل جدة.
                            </p>

                            <h3>أسئلة شائعة قبل طلب الطباعة التجارية في جدة</h3>
                            <p>
                                من أكثر الأسئلة التي نسمعها: ما أفضل نوع ورق لبطاقات العمل؟ هل الطباعة الرقمية مناسبة للكميات الكبيرة؟
                                كيف أضمن أن الألوان ستظهر كما أراها على الشاشة؟ ما الفرق بين سلوفان مطفي ولمّاع؟ وهل منيو المطعم
                                يحتاج تغليفاً جلدياً أم تغليفاً مقاوماً للماء؟ الإجابة تعتمد على هدف الاستخدام وميزانية المشروع، لذلك
                                نقدم لك توصية عملية بدل توصية عامة. إذا كان هدفك إظهار فخامة العلامة في اجتماع مهم، فالتشطيبات
                                الفاخرة مناسبة. وإذا كان هدفك توزيع فلايرات بكميات كبيرة، فالأهم أن يكون التصميم واضحاً والطباعة
                                ثابتة والتسليم سريع.
                            </p>

                            <h3>جاهز لرفع جودة مطبوعاتك؟</h3>
                            <p>
                                إذا كنت تبحث عن مطبعة في جدة تجمع بين الخبرة، جودة التنفيذ، وسرعة التسليم، ابدأ معنا بخطوة بسيطة:
                                اطلب عرض سعر وحدد نوع المطبوعات والكمية، وسنقترح عليك أفضل خيار عملي لميزانيتك. ويمكنك دائماً
                                ربط المطبوعات بخدماتنا الأخرى مثل تجهيز المعارض والفعاليات أو الهدايا الدعائية لتخرج بحملة متكاملة
                                تعكس قوة علامتك في السوق الجداوي.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        تحتاج مطبوعات مخصصة؟
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        تواصل معنا للحصول على عرض سعر مجاني واستشارة تصميم من فريقنا المتخصص
                    </p>
                    <Link href="/quote" className="btn-primary inline-flex">
                        اطلب عرض سعر مجاني
                        <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        <AllSilosLinks currentSilo="commercial-printing" />
        </>
    );
}
