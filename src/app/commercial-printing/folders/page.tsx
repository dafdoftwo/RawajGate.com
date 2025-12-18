import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { FolderOpen, ArrowLeft, Layers, Phone, Briefcase, FileCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "طباعة ملفات العروض والفولدرات في جدة | Presentation Folders | بوابة الرواج",
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

const FAQS = [
    {
        question: "كيف أحصل على عرض للفولدرات؟",
        answer: "تواصل معنا للحصول على عرض سعر مخصص حسب النوع والكمية والتشطيب. التصميم مجاني للكميات الكبيرة. أسعار تنافسية!",
    },
    {
        question: "ما الورق المستخدم؟",
        answer: "نستخدم كرتون كوشيه 350-400 جرام للمتانة. الجيوب من نفس الورق ملصقة بغراء صناعي قوي. التشطيب لامع، مطفي، أو مخملي Soft Touch.",
    },
    {
        question: "هل يمكن طباعة من الداخل أيضاً؟",
        answer: "نعم، طباعة الداخل (خريطة، خدمات، معلومات) متاحة بسعر إضافي بسيط. ننصح بها للشركات الكبرى لتعزيز الاحترافية.",
    },
];

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
                            caption="ملفات عروض بتشطيب مخملي - بوابة الرواج"
                            district="الروضة"
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                        لماذا ملف العرض مهم؟
                    </h2>
                    <div className="prose prose-lg text-gray-700">
                        <p>
                            عندما تقدم عرضاً لعميل محتمل، الانطباع الأول يأتي من <strong>شكل المواد المقدمة</strong>.
                            أوراق مبعثرة أو ملف بلاستيكي رخيص يعطي رسالة سلبية. ملف احترافي بشعار شركتك،
                            بجيوب منظمة، يقول للعميل: "نحن نهتم بالتفاصيل".
                        </p>
                        <p>
                            الشركات الكبرى تستخدم ملفات العروض في كل اجتماع. المحامون، الاستشاريون،
                            شركات العقارات، شركات التقنية - الجميع يستفيد من هذه الأداة البسيطة لكن المؤثرة.
                        </p>
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

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">الأسئلة الشائعة</h2>
                    <div className="space-y-6">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="card p-6">
                                <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
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
        </>
    );
}
