import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { CommercialPrintingFaqs } from "@/lib/faqs/commercial-printing";
import {
    FolderOpen,
    ArrowLeft,
    Layers,
    Briefcase,
    Users,
    Building2,
    Handshake,
    Award,
} from "lucide-react";

export const metadata: Metadata = {
    openGraph: {
        title: "طباعة ملفات عروض وفولدرات في جدة | بوابة الرواج",
        description: "طباعة ملفات عروض وفولدرات احترافية في جدة. ورق 350 جرام، جيوب داخلية، تشطيب مخملي أو لامع. مثالية لاجتماعات العملاء والعروض التقديمية.",
        url: "https://rawajgate.com/commercial-printing/folders",
        images: [{ url: "/images/presentation-folder-files-holder.webp", width: 1200, height: 630, alt: "طباعة ملفات عروض وفولدرات في جدة" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "طباعة ملفات عروض وفولدرات في جدة",
        description: "طباعة ملفات عروض وفولدرات احترافية في جدة. ورق 350 جرام، جيوب داخلية، تشطيب مخملي أو لامع. مثالية لاجتماعات العملاء والعروض التقديمية.",
        images: ["/images/presentation-folder-files-holder.webp"],
    },
    alternates: { canonical: "/commercial-printing/folders" },
    title: "طباعة ملفات عروض وفولدرات في جدة",
    description: "طباعة ملفات عروض وفولدرات احترافية في جدة. ورق 350 جرام، جيوب داخلية، تشطيب مخملي أو لامع. مثالية لاجتماعات العملاء والعروض التقديمية.",
    keywords: ["ملف عروض", "فولدر", "presentation folder jeddah", "ملفات شركات", "corporate folders"],
};

const FOLDER_TYPES = [
    {
        name: "فولدر جيب واحد",
        description: "جيب داخلي على اليمين لحفظ المستندات. الأكثر شيوعاً واقتصادية.",
        price: "اطلب عرضك",
        icon: FolderOpen,
    },
    {
        name: "فولدر جيبين",
        description: "جيبان داخليان على اليمين واليسار. مثالي للملفات الكبيرة والعقود.",
        price: "سعر مميز",
        icon: Layers,
    },
    {
        name: "فولدر مع شق كروت",
        description: "جيب + شق لبطاقة العمل. الأنسب للاجتماعات والعروض.",
        price: "تواصل معنا",
        icon: Briefcase,
    },
];

const TECH_SPECS = [
    { spec: "وزن الورق", value: "350-400 جرام" },
    { spec: "نوع الورق", value: "كرتون كوشيه" },
    { spec: "دقة الطباعة", value: "300 DPI" },
    { spec: "الألوان", value: "CMYK 4 ألوان" },
    { spec: "التشطيب", value: "لامع / مطفي / مخملي" },
    { spec: "وقت الإنتاج", value: "5-7 أيام عمل" },
];

const USE_CASES = [
    { icon: Building2, title: "اجتماعات المبيعات", desc: "تقديم عروض الأسعار والخدمات للعملاء المحتملين" },
    { icon: Handshake, title: "توقيع العقود", desc: "تسليم العقود والاتفاقيات بشكل احترافي" },
    { icon: Users, title: "تعيين الموظفين", desc: "ملفات الترحيب بالموظفين الجدد" },
    { icon: Award, title: "المناقصات والعطاءات", desc: "تقديم عروض المشاريع الحكومية والخاصة" },
];

const FAQS = CommercialPrintingFaqs["commercial-printing/folders"];

export default function FoldersPage() {
    const schemas = [
        generateServiceSchema({
            name: "Presentation Folders Printing Jeddah",
            nameAr: "طباعة ملفات العروض",
            description: "طباعة ملفات عروض وفولدرات احترافية في جدة",
            url: "https://rawajgate.com/commercial-printing/folders",
            image: "https://rawajgate.com/images/presentation-folder-files-holder.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "مطبوعات تجارية", url: "https://rawajgate.com/commercial-printing" },
            { name: "ملفات العروض", url: "https://rawajgate.com/commercial-printing/folders" },
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
                                <Link href="/commercial-printing" className="hover:text-white">مطبوعات تجارية</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">ملفات العروض</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                <span className="text-gradient">ملفات عروض</span> تبهر عملاءك
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                ملف العرض (Presentation Folder) هو أول ما يفتحه عميلك في الاجتماع. ملف
                                احترافي بتصميم أنيق يعطي انطباعاً بالاحترافية والاهتمام بالتفاصيل.
                                في بوابة الرواج نطبع ملفات بأعلى جودة على ورق 350 جرام.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                مثالية لاجتماعات المبيعات، عروض المشاريع، العقود، وملفات الموظفين الجدد.
                                جيوب داخلية لحفظ <Link href="/commercial-printing/letterheads" className="text-white hover:text-amber-200 underline">الأوراق الرسمية</Link>، شق لـ <Link href="/commercial-printing/business-cards" className="text-white hover:text-amber-200 underline">بطاقة العمل</Link>، وتصميم يعكس هوية شركتك.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                اطلب عرض سعر <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/presentation-folder-files-holder.webp"
                            alt="ملفات عروض احترافية للشركات في جدة"
                            
                            
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                        لماذا ملف العرض مهم لنجاح أعمالك في جدة؟
                    </h2>
                    <div className="prose prose-lg text-gray-700">
                        <p>
                            عندما تقدم عرضاً لعميل محتمل، الانطباع الأول يأتي من <strong>شكل المواد المقدمة</strong>.
                            أوراق مبعثرة أو ملف بلاستيكي رخيص يعطي رسالة سلبية. ملف احترافي بشعار شركتك،
                            بجيوب منظمة، يقول للعميل: &quot;نحن نهتم بالتفاصيل&quot;. في سوق جدة التنافسي، كل تفصيلة تصنع فارقاً.
                        </p>
                        <p>
                            الشركات الكبرى في جدة تستخدم ملفات العروض في كل اجتماع. المحامون في حي الروضة، الاستشاريون في التحلية،
                            شركات العقارات في الكورنيش، شركات التقنية في مدينة المعرفة - الجميع يستفيد من هذه الأداة البسيطة لكن المؤثرة.
                            ملف العرض الاحترافي يرفع من قيمة عرضك التقديمي ويعكس احترافية شركتك.
                        </p>
                        <p>
                            في <strong>بوابة الرواج</strong>، نطبع ملفات عروض للشركات الرائدة في جدة منذ أكثر من 15 عاماً.
                            نفهم احتياجات السوق المحلي ونوفر حلولاً تناسب جميع الميزانيات والاستخدامات، من الملفات الاقتصادية
                            للتوزيع الواسع إلى الملفات الفاخرة بتشطيب مخملي لكبار العملاء.
                        </p>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        متى تحتاج ملفات العروض؟
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {USE_CASES.map((useCase) => (
                            <div key={useCase.title} className="card p-6 text-center card-hover">
                                <useCase.icon className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
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
                        أنواع الملفات
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {FOLDER_TYPES.map((folder) => (
                            <div key={folder.name} className="card p-8 card-hover text-center">
                                <folder.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{folder.name}</h3>
                                <p className="text-gray-600 mb-4">{folder.description}</p>
                                <div className="text-amber-600 font-bold">{folder.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Specs */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية لملفات العروض
                            </h2>
                            <p className="text-gray-600 mb-8">
                                نستخدم أفضل الخامات والتقنيات لضمان ملفات متينة وأنيقة تدوم طويلاً
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
                            alt="ماكينات طباعة ملفات العروض في بوابة الرواج جدة"
                            
                            
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
                            دليلك الشامل لملفات العروض الاحترافية في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أهمية ملف العرض في بيئة الأعمال السعودية</h3>
                            <p>
                                في المملكة العربية السعودية عموماً وجدة خصوصاً، تحظى الاجتماعات الشخصية والعروض التقديمية بأهمية كبيرة في عالم الأعمال.
                                الشركات السعودية تقدر الاحترافية في كل تفصيلة، وملف العرض الراقي يعكس اهتمامك بالجودة واحترامك للعميل.
                                سواء كنت تقدم عرضاً لمشروع حكومي في أمانة جدة، أو تعرض خدماتك على شركة في حي الأندلس، فإن الانطباع الأول يبدأ من شكل المواد التي تقدمها.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">ما الذي يجعل ملف العرض مميزاً؟</h3>
                            <p>
                                ملف العرض الاحترافي ليس مجرد غلاف للأوراق. إنه أداة تسويقية متكاملة تحمل هويتك البصرية وتنظم معلوماتك بشكل جذاب.
                                الملف الجيد يتميز بـ: ورق سميك (350 جرام على الأقل) لا ينثني بسهولة، تشطيب أنيق يحمي من البصمات والخدوش،
                                جيوب داخلية عملية تحفظ الأوراق في مكانها، وشق لبطاقة العمل يسهل على العميل التواصل معك لاحقاً.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أنواع التشطيبات المتوفرة</h3>
                            <p>
                                نوفر في بوابة الرواج ثلاثة أنواع رئيسية من التشطيبات لملفات العروض. <strong>التشطيب اللامع (Glossy)</strong> يبرز الألوان 
                                ويعطي مظهراً حيوياً، وهو مثالي للتصاميم الملونة والصور. <strong>التشطيب المطفي (Matt)</strong> أنيق وراقٍ، لا يعكس الضوء،
                                ومناسب للشركات الرسمية والمكاتب القانونية. <strong>التشطيب المخملي (Soft Touch)</strong> يعطي ملمساً ناعماً فاخراً
                                يشعر به العميل فور لمس الملف، وهو الاختيار الأول للعلامات التجارية الفاخرة والفنادق والشركات الكبرى.
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/luxury-business-cards-printing-jeddah.webp"
                                    alt="ملفات عروض فاخرة بتشطيب مخملي في جدة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                    alt="استخدام ملفات العروض في اجتماعات الأعمال بجدة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">محتويات ملف العرض المثالي</h3>
                            <p>
                                لتحقيق أقصى استفادة من ملف العرض، ننصح بترتيب المحتويات بشكل استراتيجي. في الجيب الأيمن ضع المستندات الأهم:
                                عرض السعر، ملخص الخدمات، أو العقد. في الجيب الأيسر ضع المواد الداعمة: ملف الشركة التعريفي، شهادات الجودة،
                                قائمة العملاء. لا تنسَ وضع <Link href="/commercial-printing/business-cards" className="text-emerald-600 hover:text-emerald-700">بطاقة العمل</Link> في 
                                الشق المخصص. يمكنك أيضاً إضافة <Link href="/commercial-printing/letterheads" className="text-emerald-600 hover:text-emerald-700">ورق رسمي</Link> فارغ
                                للملاحظات أثناء الاجتماع.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">القطاعات الأكثر استخداماً لملفات العروض في جدة</h3>
                            <p>
                                تستخدم ملفات العروض بشكل واسع في قطاعات متعددة بجدة. <strong>القطاع العقاري</strong> يستخدمها لعرض المشاريع والوحدات السكنية على العملاء.
                                <strong>القطاع القانوني</strong> يعتمد عليها لتسليم العقود والمستندات الرسمية. <strong>الاستشارات</strong> تقدم بها دراسات الجدوى والتقارير.
                                <strong>شركات التقنية</strong> تستخدمها في عروض المشاريع والمناقصات. <strong>قطاع الضيافة</strong> يوزعها على منظمي الفعاليات والشركات.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">نصائح لتصميم ملف عرض فعّال</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li>اجعل الشعار واضحاً وبارزاً على الغلاف الأمامي</li>
                                <li>استخدم ألوان هويتك البصرية بشكل متناسق</li>
                                <li>لا تكثر من النصوص على الغلاف - البساطة أفضل</li>
                                <li>أضف معلومات الاتصال على الغلاف الخلفي</li>
                                <li>فكر في طباعة محتوى مفيد داخل الملف (خريطة، خدمات)</li>
                                <li>اختر تشطيباً يتناسب مع طبيعة عملك وجمهورك</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج لطباعة ملفات العروض؟</h3>
                            <p>
                                في بوابة الرواج، نجمع بين الخبرة والجودة والسعر المنافس. خبرتنا الممتدة لأكثر من 15 عاماً في سوق جدة
                                تعني أننا نفهم احتياجاتك ونقدم حلولاً عملية. نستخدم ورق كوشيه مستورد عالي الجودة، وماكينات طباعة ألمانية
                                تضمن دقة الألوان. فريق التصميم لدينا يساعدك في إخراج ملف يعكس احترافية شركتك. والأهم: نلتزم بمواعيد التسليم
                                لأننا نعلم أن الوقت مهم في عالم الأعمال.
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
                        كل ما تريد معرفته عن طباعة ملفات العروض في جدة
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

            <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">اترك انطباعاً احترافياً!</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg inline-flex items-center">
                        اطلب الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        <RelatedServices currentPath="/commercial-printing/folders" />
        </>
    );
}
