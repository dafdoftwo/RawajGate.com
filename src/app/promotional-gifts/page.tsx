import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { sectionMetadata } from "@/lib/seo";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, generateSpeakableWebPage } from "@/lib/schema";
import { AllSilosLinks } from "@/components/related-services";
import {
    Gift,
    Briefcase,
    Cpu,
    Shirt,
    ShoppingBag,
    ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = sectionMetadata.promotionalGifts;

const SUB_SERVICES = [
    {
        title: "هدايا مكتبية",
        titleEn: "Office Gifts",
        description: "أقلام، دفاتر، أجندات، ومجموعات هدايا مكتبية فاخرة",
        href: "/promotional-gifts/office-gifts",
        icon: Briefcase,
        image: "/images/branded-notebooks-diaries-calendar-gift-sets.webp",
    },
    {
        title: "هدايا تقنية",
        titleEn: "Tech Gadgets",
        description: "باور بانك، فلاشات USB، سماعات، وإكسسوارات تقنية",
        href: "/promotional-gifts/tech-gadgets",
        icon: Cpu,
        image: "/images/tech-gifts-powerbank-usb-branding.webp",
    },
    {
        title: "ملابس مطبوعة",
        titleEn: "Wearables",
        description: "تيشيرتات، بولو، كابات، وملابس موظفين بالشعار",
        href: "/promotional-gifts/wearables",
        icon: Shirt,
        image: "/images/logo-printed-tshirts-embroidery-polo.webp",
    },
    {
        title: "أكياس وتغليف",
        titleEn: "Bags & Packaging",
        description: "أكياس ورقية، قماشية، وصناديق هدايا مخصصة",
        href: "/promotional-gifts/bags-packaging",
        icon: ShoppingBag,
        image: "/images/custom-paper-bags-shopping-packaging.webp",
    },
];

export default function PromotionalGiftsPage() {
    const serviceSchema = generateServiceSchema({
        name: "Promotional Gifts Services",
        nameAr: "خدمات الهدايا الدعائية",
        description: "أقلام، دفاتر، هدايا تقنية، ملابس مطبوعة، وأكياس هدايا بشعار شركتك في جدة",
        url: "https://rawajgate.com/promotional-gifts",
        image: "https://rawajgate.com/images/corporate-promotional-gifts-jeddah-items.webp",
    });

    const faqSchema = generateFAQSchema([
        {
            question: "ما أفضل هدية دعائية للشركات في جدة؟",
            answer:
                "الأفضل يعتمد على جمهورك والميزانية. للأعمال اليومية عادةً الأقلام والدفاتر خيار عملي يضمن استخداماً متكرراً. للهدايا المميزة، الهدايا التقنية مثل باور بانك أو USB تعطي قيمة أعلى وتزيد تذكر العلامة.",
        },
        {
            question: "هل يمكن تنفيذ الهدايا الدعائية بكميات قليلة أم يشترط جملة؟",
            answer:
                "نخدم الشركات حسب طبيعة المنتج. بعض الأصناف تتوفر بكميات مناسبة للبدء، بينما أصناف أخرى تكون أسعارها أفضل عند الكميات الكبيرة. نساعدك في اختيار بدائل تحقق الهدف دون رفع التكلفة.",
        },
        {
            question: "هل يمكن طباعة الشعار بأكثر من طريقة (طباعة، ليزر، تطريز)؟",
            answer:
                "نعم، حسب نوع الخامة: الطباعة مناسبة لمنتجات كثيرة، الليزر يعطي مظهراً فاخراً على المعدن، والتطريز مثالي للملابس مثل البولو والقبعات.",
        },
        {
            question: "كيف أضمن أن الشعار سيظهر بوضوح على المنتج؟",
            answer:
                "نراجع الملف قبل التنفيذ ونقترح مقاساً مناسباً ومكان وضع الشعار حسب مساحة المنتج ولونه، مع مراعاة قابلية القراءة من مسافة قريبة.",
        },
    ]);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: "https://rawajgate.com" },
        { name: "هدايا دعائية", url: "https://rawajgate.com/promotional-gifts" },
    ]);

    const speakableSchema = generateSpeakableWebPage({
        url: "https://rawajgate.com/promotional-gifts",
        name: "هدايا دعائية للشركات في جدة",
        description: "أقلام، دفاتر، أجندات، هدايا تقنية، أكياس، وملابس مطبوعة بشعار شركتك في جدة. كميات بالجملة وأسعار خاصة للشركات.",
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
                            <span className="text-amber-400">هدايا دعائية</span>
                        </nav>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                                <Gift className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
                                    هدايا دعائية
                                </h1>
                                <p data-speakable="answer" className="text-white/70">Promotional Gifts</p>
                            </div>
                        </div>
                        <p className="text-xl text-white/80 leading-relaxed">
                            هدايا دعائية مميزة للشركات والمؤسسات: أقلام، دفاتر، <Link href="/promotional-gifts/tech-gadgets" className="text-amber-200 hover:text-white underline decoration-1 underline-offset-4">هدايا تقنية</Link>،
                            ملابس، و <Link href="/promotional-gifts/bags-packaging" className="text-amber-200 hover:text-white underline decoration-1 underline-offset-4">أكياس مطبوعة</Link> بشعار شركتك.
                            يمكننا أيضاً طباعة <Link href="/commercial-printing/flyers-brochures" className="text-amber-200 hover:text-white underline decoration-1 underline-offset-4">بروشورات تعريفية</Link>
                            لتوزع مع الهدايا.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {SUB_SERVICES.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="group block card-hover"
                            >
                                <div className="card overflow-hidden">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="relative w-full md:w-1/2 h-48 md:h-auto overflow-hidden">
                                            <GeoImage
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full"
                                            />
                                        </div>
                                        <div className="p-6 flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                                                    <service.icon className="w-5 h-5 text-amber-600" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900">{service.title}</h3>
                                                    <p className="text-xs text-gray-500">{service.titleEn}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                            <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 transition-all">
                                                <span>استعرض المنتجات</span>
                                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-[-4px] transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        الأكثر طلباً
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <GeoImage
                            src="/images/custom-printed-metal-plastic-pens.webp"
                            alt="أقلام مطبوعة"
                            className="rounded-xl"
                        />
                        <GeoImage
                            src="/images/corporate-promotional-gifts-jeddah-items.webp"
                            alt="هدايا شركات"
                            className="rounded-xl"
                        />
                        <GeoImage
                            src="/images/tech-gifts-powerbank-usb-branding.webp"
                            alt="هدايا تقنية"
                            className="rounded-xl"
                        />
                        <GeoImage
                            src="/images/branded-notebooks-diaries-calendar-gift-sets.webp"
                            alt="دفاتر وأجندات"
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                            هدايا دعائية في جدة: كيف تختار هدية ترفع تذكر العلامة وتزيد الإحالات والمبيعات
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            الهدايا الدعائية ليست “مجاملة” تُسلَّم وتنتهي. في جدة، حيث المنافسة عالية والعميل يتلقى عشرات العروض،
                            الهدية الدعائية الجيدة تعمل كإعلان يومي صامت: تُستخدم في المكتب، تُحمل في الاجتماعات، وترافق العميل في
                            تفاصيل حياته. عندما تختار هدية مناسبة وتنفذها بخامة محترمة وطباعة دقيقة للشعار، فأنت لا توزع منتجات
                            فقط، بل تبني تذكراً وتخلق انطباعاً بأن شركتك منظمة وتهتم بالتفاصيل. لهذا نركز في بوابة الرواج على تقديم
                            هدايا دعائية للشركات في جدة تجمع بين الفكرة العملية، جودة الخامة، وطباعة احترافية متناسقة مع الهوية.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <div className="card overflow-hidden">
                                <div className="relative h-56">
                                    <GeoImage
                                        src="/images/corporate-promotional-gifts-jeddah-items.webp"
                                        alt="هدايا دعائية للشركات في جدة بتصميم وطباعة شعار احترافية"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">هدايا مؤسسية: انطباع راقٍ عند التسليم</h3>
                                    <p className="text-gray-600">
                                        مناسبة للاجتماعات، العملاء المهمين، والفعاليات، وتساعدك أن تترك أثراً محترفاً بعد اللقاء.
                                    </p>
                                </div>
                            </div>
                            <div className="card overflow-hidden">
                                <div className="relative h-56">
                                    <GeoImage
                                        src="/images/tech-gifts-powerbank-usb-branding.webp"
                                        alt="هدايا تقنية دعائية في جدة مثل باور بانك وUSB بطباعة شعار"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">هدايا تقنية: استخدام متكرر وتذكر أعلى</h3>
                                    <p className="text-gray-600">
                                        الهدايا التقنية عادةً لا تُترك على الرف؛ تُستخدم يومياً وهذا يجعل شعارك حاضراً باستمرار.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3>لماذا الهدايا الدعائية مهمة تحديداً في سوق جدة؟</h3>
                            <p>
                                جدة مدينة شركات ومؤتمرات ومعارض وفعاليات موسمية. كثير من العملاء يتعاملون مع أكثر من مزود خدمة،
                                والقرار النهائي قد يتأثر بعناصر صغيرة مثل سرعة الرد، وضوح العرض، والانطباع العام عن احترافية الشركة.
                                الهدية الدعائية ترفع هذا الانطباع لأنها تظهر أنك تستثمر في تجربة العميل وليس في البيع فقط. كما أن
                                هدايا الموظفين (مثل الملابس الموحدة والدفاتر) تعزز الانتماء وترفع مظهر الفريق أمام الجمهور.
                            </p>

                            <h3>كيف تختار الهدية المناسبة؟ (قاعدة بسيطة)</h3>
                            <p>
                                قبل اختيار المنتج اسأل: من هو المستلم؟ وما المناسبة؟ وما مدة الاستخدام المتوقعة؟
                                هدية تُوزع في معرض تختلف عن هدية تُقدم لعميل VIP. في المعارض، الأفضل منتجات خفيفة وسهلة الحمل مع
                                شعار واضح (أقلام، دفتر صغير، أو هدايا تقنية بسيطة). للعميل المهم، تكون الهدايا أكثر فخامة مثل
                                طقم هدية مكتبي أو أجندة جلدية أو هدية تقنية بقيمة أعلى. أما للموظفين، فتكون الملابس الموحدة أو
                                أدوات المكتب خياراً عملياً وذا أثر يومي.
                            </p>

                            <h3>أنواع الهدايا الدعائية التي ننفذها في جدة</h3>
                            <p>
                                نقدم مجموعة مختارة تلائم مختلف القطاعات: هدايا مكتبية (أقلام، دفاتر، أجندات، مجموعات هدايا)، هدايا
                                تقنية (باور بانك، USB، سماعات)، ملابس مطبوعة أو مطرزة (تيشيرت، بولو، قبعات، زي موظفين)، وأكياس
                                وتغليف (أكياس ورقية أو قماشية وصناديق هدايا). نساعدك أيضاً في تنسيق التغليف ليكون مناسباً للتسليم
                                في الاجتماعات أو داخل الفروع.
                            </p>

                            <h3>طرق طباعة الشعار: ما الأفضل؟</h3>
                            <p>
                                اختيار طريقة وضع الشعار يؤثر مباشرة على المظهر النهائي. الطباعة مناسبة للكثير من المنتجات وتسمح
                                بألوان متعددة. الليزر يعطي مظهراً أنيقاً على المعدن ويكون مناسباً للأقلام الفاخرة. التطريز هو خيار
                                مثالي للملابس لأنه يدوم ويعطي إحساساً بالجودة. نحن نوصيك بالطريقة المناسبة بناءً على الخامة وحجم
                                الشعار وتفاصيله.
                            </p>

                            <h3>الهدايا الدعائية مع الطباعة التجارية: حملة متكاملة</h3>
                            <p>
                                أفضل نتيجة تحصل عليها عندما تربط الهدية بمادة تعريفية: بروشور مختصر، بطاقة عمل، أو كود QR يقود إلى
                                صفحة عرض سعر أو واتساب. بهذا يتحول التسليم إلى “مسار” واضح للعميل. في بوابة الرواج نستطيع تجهيز
                                المطبوعات التجارية المصاحبة للهدايا بحيث تكون الألوان والخطوط متناسقة مع الهوية في كل نقطة اتصال.
                            </p>

                            <h3>أسئلة شائعة قبل طلب هدايا دعائية في جدة</h3>
                            <p>
                                من الأسئلة المتكررة: هل أبدأ بكميات صغيرة أم كبيرة؟ هل الأفضل هدايا عملية أم فاخرة؟ كيف أضمن أن
                                المنتج لن يبدو رخيصاً؟ الإجابة تكون دائماً مرتبطة بالهدف. إذا كان هدفك انتشاراً سريعاً، اختر منتجات
                                عملية مع شعار واضح. إذا كان هدفك إقناع عميل كبير، اختر هدية بجودة أعلى وتغليف مناسب. المهم أن لا
                                تنفذ هدية فقط لأن الجميع يفعل ذلك، بل لأن لديك رسالة تريد إيصالها.
                            </p>
                        </div>

                        <div className="card p-6 md:p-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">FAQ</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="font-bold text-gray-900">ما أفضل هدية دعائية للشركات في جدة؟</div>
                                    <div className="text-gray-600">
                                        الأقلام والدفاتر عملية للاستخدام اليومي، والهدايا التقنية تعطي قيمة أعلى وتزيد التذكر. الأفضل يعتمد على جمهورك.
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">هل يمكن تنفيذ الهدايا الدعائية بكميات قليلة؟</div>
                                    <div className="text-gray-600">
                                        بعض الأصناف متاحة للبداية بكميات مناسبة، بينما تصبح بعض الخيارات أفضل سعراً مع الكميات الكبيرة.
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">هل يمكن طباعة الشعار بأكثر من طريقة؟</div>
                                    <div className="text-gray-600">
                                        نعم، طباعة أو ليزر أو تطريز حسب نوع الخامة، لنخرج بنتيجة واضحة وفاخرة.
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">كيف أضمن وضوح الشعار على المنتج؟</div>
                                    <div className="text-gray-600">
                                        نراجع الملف قبل التنفيذ ونقترح مقاساً ومكاناً مناسبين للشعار مع مراعاة لون المنتج ومساحة الطباعة.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-amber-400 to-amber-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        تبحث عن هدايا لشركتك؟
                    </h2>
                    <p className="text-gray-800 mb-8 max-w-xl mx-auto">
                        نقدم خصومات خاصة للكميات الكبيرة - تواصل معنا للحصول على أفضل الأسعار
                    </p>
                    <Link
                        href="/quote"
                        className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg inline-flex items-center"
                    >
                        اطلب عرض سعر بالجملة
                        <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        <AllSilosLinks currentSilo="promotional-gifts" />
        </>
    );}
