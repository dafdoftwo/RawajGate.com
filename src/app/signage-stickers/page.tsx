import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { sectionMetadata } from "@/lib/seo";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import {
    Signpost,
    Tag,
    Car,
    Wallpaper,
    Flag,
    Box,
    ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = sectionMetadata.signageStickers;

const SUB_SERVICES = [
    {
        title: "ملصقات المنتجات",
        titleEn: "Product Labels",
        description: "ستيكرات رول مخصصة للمنتجات والتغليف بجودة عالية",
        href: "/signage-stickers/product-labels",
        icon: Tag,
        image: "/images/custom-product-labels-roll-stickers-jeddah.webp",
    },
    {
        title: "تغليف السيارات",
        titleEn: "Vehicle Branding",
        description: "تغليف كامل أو جزئي للسيارات والشاحنات التجارية",
        href: "/signage-stickers/vehicle-branding",
        icon: Car,
        image: "/images/commercial-vehicle-branding-car-wrapping-jeddah.webp",
    },
    {
        title: "ستيكرات الجدران",
        titleEn: "Wall Decals",
        description: "ملصقات ديكورية للجدران والمكاتب والمحلات",
        href: "/signage-stickers/wall-decals",
        icon: Wallpaper,
        image: "/images/glass-window-frosted-sticker-branding.webp",
    },
    {
        title: "بانرات خارجية",
        titleEn: "Outdoor Banners",
        description: "لافتات فلكس كبيرة مقاومة للعوامل الجوية",
        href: "/signage-stickers/outdoor-banners",
        icon: Flag,
        image: "/images/outdoor-flex-banner-printing-large-format.webp",
    },
    {
        title: "لافتات 3D",
        titleEn: "3D Shop Signage",
        description: "حروف بارزة ثلاثية الأبعاد مضيئة للمحلات",
        href: "/signage-stickers/shop-signage-3d",
        icon: Box,
        image: "/images/3d-shop-signage-letters-acrylic-jeddah.webp",
    },
];

export default function SignageStickersPage() {
    const serviceSchema = generateServiceSchema({
        name: "Signage & Stickers Services",
        nameAr: "خدمات اللوحات والملصقات",
        description: "تصميم وتنفيذ لافتات المحلات 3D، تغليف السيارات، ملصقات المنتجات، وبانرات خارجية في جدة",
        url: "https://rawajgate.com/signage-stickers",
        image: "https://rawajgate.com/images/3d-shop-signage-letters-acrylic-jeddah.webp",
    });

    const faqSchema = generateFAQSchema([
        {
            question: "كم يستغرق تنفيذ لافتة محل أو تركيبها داخل جدة؟",
            answer:
                "يعتمد على نوع اللافتة (حروف بارزة، مضيئة، فلكس، أو لوحة أكريليك) وعلى جاهزية التصميم والمقاس. عادةً نحدد جدولاً واضحاً بعد المعاينة واعتماد المقاس، مع إمكانية التسليم والتركيب داخل جدة حسب أولوية الطلب.",
        },
        {
            question: "ما الفرق بين الحروف البارزة (3D) والحروف المضيئة؟",
            answer:
                "الحروف البارزة هي حروف ثلاثية الأبعاد تُصنع من خامات مثل الأكريليك أو الستانلس وتُركّب على واجهة المحل لإبراز الاسم. الحروف المضيئة تكون مزودة بإضاءة داخلية (LED) لرفع وضوح العلامة ليلاً وتحسين جذب الانتباه.",
        },
        {
            question: "هل تغليف السيارات مناسب لجميع أنواع السيارات التجارية؟",
            answer:
                "نعم، يمكن تنفيذ تغليف جزئي أو كامل لمعظم أنواع السيارات والشاحنات. نختار خامة فينيل مناسبة ونعتمد تصميم يراعي انحناءات الهيكل حتى تظهر الهوية بشكل احترافي وتعيش لفترة أطول.",
        },
        {
            question: "هل تقدمون ملصقات منتجات رول ضد الماء؟",
            answer:
                "نعم، نوفر ستيكر رول بخيارات متعددة، منها خامات مقاومة للماء والرطوبة، وتناسب منتجات الأغذية والمشروبات ومستحضرات التجميل. نساعدك أيضاً في اختيار لاصق مناسب لطبيعة سطح العبوة.",
        },
    ]);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: "https://rawajgate.com" },
        { name: "لوحات وملصقات", url: "https://rawajgate.com/signage-stickers" },
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero */}
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <nav className="text-sm text-white/60 mb-4">
                            <Link href="/" className="hover:text-white">الرئيسية</Link>
                            <span className="mx-2">/</span>
                            <span className="text-amber-400">لوحات وملصقات</span>
                        </nav>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                <Signpost className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
                                    لوحات وملصقات
                                </h1>
                                <p className="text-white/70">Signage & Stickers Services</p>
                            </div>
                        </div>
                        <p className="text-xl text-white/80 leading-relaxed">
                            خدمات احترافية لتصميم وتنفيذ اللافتات والملصقات: <Link href="/signage-stickers/shop-signage-3d" className="text-purple-200 hover:text-white underline decoration-1 underline-offset-4">لافتات 3D للمحلات</Link>،
                            <Link href="/signage-stickers/vehicle-branding" className="text-purple-200 hover:text-white underline decoration-1 underline-offset-4">تغليف السيارات</Link>،
                            و <Link href="/signage-stickers/product-labels" className="text-purple-200 hover:text-white underline decoration-1 underline-offset-4">ملصقات المنتجات</Link>.
                            نستخدم أحدث التقنيات لضمان الجودة والمتانة. كما نقدم <Link href="/design-services/branding-identity" className="text-purple-200 hover:text-white underline decoration-1 underline-offset-4">خدمات تصميم الهوية</Link> لضمان ظهور علامتك بأفضل صورة.
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
                            لوحات وملصقات في جدة: كيف تحول واجهة محلك وعبوات منتجاتك إلى إعلان يعمل طوال اليوم
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            نجاح أي نشاط تجاري في جدة يبدأ من “الظهور الصحيح”: واجهة محل واضحة ومميزة، شعار قابل للتمييز من بعيد،
                            وملصقات منتجات تحمل معلومات دقيقة وتُشعر العميل أن العلامة موثوقة. خدمات اللوحات والملصقات ليست مجرد
                            طباعة على مادة لاصقة أو لوحة تُعلّق على واجهة؛ بل هي جزء أساسي من الهوية البصرية وتجربة العميل. عندما
                            يمر العميل أمام واجهتك في حي الروضة أو السلامة أو التحلية أو طريق الملك، فإن ثوانٍ قليلة تحدد إن كان
                            سيدخل أو يتجاوز. كذلك، عندما يمسك عبوة منتج في متجر أو سوبرماركت، فإن جودة الملصق، وضوح النص العربي،
                            وترتيب المعلومات والتغليف البصري قد تكون سبباً مباشراً لقرار الشراء. لهذا نركز في بوابة الرواج على
                            تنفيذ لوحات وملصقات في جدة بجودة عالية، بتقنيات مناسبة للاستخدام الفعلي، وبمخرجات تقاوم الشمس والرطوبة
                            والاستخدام اليومي.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <div className="card overflow-hidden">
                                <div className="relative h-56">
                                    <GeoImage
                                        src="/images/3d-shop-signage-letters-acrylic-jeddah.webp"
                                        alt="لافتات 3D للمحلات في جدة بحروف بارزة وأكريليك"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">لافتات المحلات 3D: حضور قوي من أول نظرة</h3>
                                    <p className="text-gray-600">
                                        الحروف البارزة تعطي عمقاً وفخامة وتزيد وضوح اسم المحل، خصوصاً عند اختيار خامة مناسبة وإضاءة
                                        متوازنة.
                                    </p>
                                </div>
                            </div>
                            <div className="card overflow-hidden">
                                <div className="relative h-56">
                                    <GeoImage
                                        src="/images/custom-product-labels-roll-stickers-jeddah.webp"
                                        alt="طباعة ملصقات منتجات رول في جدة بجودة عالية"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">ملصقات المنتجات: ثقة على رف البيع</h3>
                                    <p className="text-gray-600">
                                        ملصق مرتب، مقاوم، وبألوان ثابتة يرفع قيمة المنتج ويقلل المرتجعات ويزيد ثقة العميل في المعلومات.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3>ما الذي يدخل ضمن خدمات اللوحات والملصقات في جدة؟</h3>
                            <p>
                                عندما نقول “لوحات وملصقات” فنحن نتحدث عن منظومة كاملة: لافتات واجهات المحلات (حروف بارزة أو مضيئة
                                أو لوحات أكريليك)، بانرات خارجية للفروع أو الحملات الموسمية، ملصقات زجاج (فروستد/شفاف) للمكاتب
                                والعيادات، ستيكرات جدران للمساحات الداخلية، تغليف سيارات للشركات وخدمة التوصيل، بالإضافة إلى ملصقات
                                المنتجات رول بمقاسات متنوعة لمصانع الأغذية والمشروبات ومشاريع التجارة الإلكترونية. كل عنصر له وظيفة
                                مختلفة، لذلك اختيار الخامة والطباعة والتشطيب ليس أمراً عشوائياً.
                            </p>

                            <h3>لماذا تحتاج واجهة متجر قوية في جدة تحديداً؟</h3>
                            <p>
                                جدة مدينة حركة وكثافة مرورية وتنوع كبير في الأنشطة التجارية. المنافسة لا تكون فقط بين متجرين في نفس
                                الشارع، بل بين عشرات الخيارات التي يراها العميل يومياً. واجهة قوية تساعدك أن تكون “الخيار الواضح”:
                                اسم مقروء من مسافة مناسبة، ألوان متناسقة مع الهوية، وإضاءة محسوبة لا تزعج العين وتظهر العلامة ليلاً.
                                هذا مهم للمطاعم والكافيهات والصيدليات والعيادات ومحلات التجزئة ومراكز الخدمات.
                            </p>

                            <h3>كيف تختار نوع اللافتة المناسبة؟</h3>
                            <p>
                                الاختيار يعتمد على موقع المحل، نوع النشاط، والميزانية. الحروف البارزة تعطي فخامة وتناسب الأنشطة التي
                                تريد مظهراً راقياً. الحروف المضيئة ممتازة للواجهات التي تحتاج وضوحاً ليلاً. البانرات الخارجية مناسبة
                                للحملات المؤقتة أو الإعلان عن عروض موسمية. وفي بعض الحالات يكون الأفضل الجمع بين لوحة رئيسية ثابتة
                                وبانر جانبي للحملات المتغيرة. نحن نساعدك في تحديد الأفضل بعد فهم مساحة الواجهة وزاوية الرؤية.
                            </p>

                            <h3>تغليف السيارات في جدة: إعلان متحرك يزيد الوصول</h3>
                            <p>
                                سيارات الشركات والتوصيل تتحرك في أحياء جدة طوال اليوم. إذا كانت السيارة تحمل هوية واضحة، فإن كل رحلة
                                تصبح إعلاناً مستمراً. المهم ليس “لصق التصميم” فقط؛ بل أن يكون التصميم بسيطاً وقابلاً للقراءة السريعة،
                                وأن تكون خامة الفينيل مناسبة للحرارة، وأن يتم التركيب بدون فقاعات أو قص سيئ حول الحواف. نقدم تغليفاً
                                جزئياً أو كاملاً حسب الهدف، ونراعي أن يظهر رقم التواصل والخدمة بوضوح.
                            </p>

                            <h3>ملصقات المنتجات: تفاصيل صغيرة تصنع فرقاً كبيراً</h3>
                            <p>
                                في ملصقات المنتجات، الجودة لا تُقاس فقط بجمال التصميم، بل بالمتانة والالتزام بالمعلومات: مكونات، وزن،
                                باركود، تاريخ، وتعليمات الاستخدام. كما أن نوع اللاصق مهم حسب سطح العبوة (زجاج، بلاستيك، معدن، أو
                                ورق). نوفر خيارات مقاومة للماء والرطوبة عند الحاجة، ونساعدك في ترتيب المعلومات بشكل واضح ومتوافق مع
                                طبيعة السوق.
                            </p>

                            <h3>الفرق بين طباعة “شكل حلو” وطباعة “تشتغل”</h3>
                            <p>
                                بعض الأعمال تبدو جميلة في الصورة لكنها لا تعيش في الواقع: ألوان تتغير تحت الشمس، لاصق يضعف، لوحة لا
                                تتحمل الهواء والرطوبة، أو نصوص عربية غير واضحة. نحن نركز على التنفيذ الذي يخدم الهدف: لوحة تُرى من
                                بعيد، ملصق لا يتلف بسهولة، تغليف سيارة لا يتقشر سريعاً، وبانر يتحمل العوامل الخارجية. لذلك نختار
                                الخامات والتشطيبات المناسبة ونراجع الملفات قبل التنفيذ.
                            </p>

                            <h3>أسئلة شائعة عن اللوحات والملصقات في جدة</h3>
                            <p>
                                كثير من العملاء يسأل: هل الأفضل حروف ستانلس أم أكريليك؟ هل الإضاءة LED مناسبة لكل واجهة؟ هل ملصقات
                                الزجاج (فروستد) تعطي خصوصية بدون تقليل الإضاءة؟ هل يمكن طباعة ستيكر رول بكميات صغيرة كبداية؟ الإجابة
                                تعتمد على الاستخدام. هدفنا أن تحصل على حل عملي وليس مجرد خيار عام، لذلك نطرح عليك أسئلة بسيطة ونصل
                                معاً للنتيجة الأنسب.
                            </p>
                        </div>

                        <div className="card p-6 md:p-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">FAQ</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="font-bold text-gray-900">كم يستغرق تنفيذ لافتة محل أو تركيبها داخل جدة؟</div>
                                    <div className="text-gray-600">
                                        يعتمد على نوع اللافتة وعلى جاهزية التصميم والمقاسات، ونحدد جدولاً واضحاً بعد المعاينة واعتماد
                                        المقاس مع إمكانية التسليم والتركيب داخل جدة.
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">ما الفرق بين الحروف البارزة (3D) والحروف المضيئة؟</div>
                                    <div className="text-gray-600">
                                        الحروف البارزة تعطي عمقاً وفخامة للواجهة، بينما الحروف المضيئة تضيف وضوحاً إضافياً ليلاً عبر LED
                                        وتزيد جذب الانتباه.
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">هل تغليف السيارات مناسب لجميع أنواع السيارات التجارية؟</div>
                                    <div className="text-gray-600">
                                        يمكن تنفيذ تغليف جزئي أو كامل لمعظم الأنواع، مع خامة فينيل مناسبة وتركيب احترافي يراعي الانحناءات
                                        حتى تظهر الهوية بشكل متناسق.
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">هل تقدمون ملصقات منتجات رول ضد الماء؟</div>
                                    <div className="text-gray-600">
                                        نوفر خيارات مقاومة للماء والرطوبة تناسب منتجات الأغذية والمشروبات ومستحضرات التجميل، مع اختيار
                                        لاصق مناسب لطبيعة سطح العبوة.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        تحتاج لافتة أو ملصقات مخصصة؟
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        تواصل معنا للحصول على عرض سعر مجاني ومعاينة موقع التركيب
                    </p>
                    <Link href="/quote" className="btn-primary inline-flex">
                        اطلب عرض سعر مجاني
                        <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
