import { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { CommercialPrintingFaqs } from "@/lib/faqs/commercial-printing";
import {
    FileText,
    ArrowLeft,
    Building2,
    Scale,
    Banknote,
    FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
    openGraph: {
        title: "طباعة ورق رسمي (ليترهيد) في جدة | بوابة الرواج",
        description: "طباعة ورق رسمي احترافي في جدة. ورق 100-120 جرام، ألوان زاهية، تصميم مجاني. ليترهيد للشركات والمؤسسات بأسعار منافسة وجودة عالية.",
        url: "https://rawajgate.com/commercial-printing/letterheads",
        images: [{ url: "/images/corporate-letterhead-envelope-branding.webp", width: 1200, height: 630, alt: "طباعة ورق رسمي (ليترهيد) في جدة" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "طباعة ورق رسمي (ليترهيد) في جدة",
        description: "طباعة ورق رسمي احترافي في جدة. ورق 100-120 جرام، ألوان زاهية، تصميم مجاني. ليترهيد للشركات والمؤسسات بأسعار منافسة وجودة عالية.",
        images: ["/images/corporate-letterhead-envelope-branding.webp"],
    },
    alternates: { canonical: "/commercial-printing/letterheads" },
    title: "طباعة ورق رسمي (ليترهيد) في جدة",
    description: "طباعة ورق رسمي احترافي في جدة. ورق 100-120 جرام، ألوان زاهية، تصميم مجاني. ليترهيد للشركات والمؤسسات بأسعار منافسة وجودة عالية.",
    keywords: ["ورق رسمي", "ليترهيد", "letterhead jeddah", "طباعة ورق مراسلات", "corporate stationery"],
};

const PAPER_OPTIONS = [
    { name: "ورق 100 جرام", desc: "الأكثر شيوعاً للمراسلات العادية", price: "اطلب عرضك" },
    { name: "ورق 120 جرام", desc: "أثقل للعقود والمستندات الرسمية", price: "سعر مميز" },
    { name: "ورق كتان Linen", desc: "ملمس فاخر للشركات الراقية", price: "تواصل معنا" },
];

const TECH_SPECS = [
    { spec: "وزن الورق", value: "100 - 120 جرام" },
    { spec: "نوع الورق", value: "أوفست / كتان / كونكرر" },
    { spec: "دقة الطباعة", value: "300 DPI" },
    { spec: "الألوان", value: "CMYK 4 ألوان" },
    { spec: "الحد الأدنى", value: "500 ورقة" },
    { spec: "وقت الإنتاج", value: "3-5 أيام عمل" },
];

const USE_CASES = [
    { icon: Building2, title: "المراسلات الرسمية", desc: "خطابات للجهات الحكومية والشركات" },
    { icon: Scale, title: "العقود والاتفاقيات", desc: "مستندات قانونية موثقة" },
    { icon: Banknote, title: "الفواتير وعروض الأسعار", desc: "مستندات مالية احترافية" },
    { icon: FileCheck, title: "شهادات وخطابات التوصية", desc: "مستندات رسمية للموظفين" },
];

const FAQS = CommercialPrintingFaqs["commercial-printing/letterheads"];

export default function LetterheadsPage() {
    const schemas = [
        generateServiceSchema({
            name: "Letterhead Printing Jeddah",
            nameAr: "طباعة ورق رسمي",
            description: "طباعة ورق رسمي وليترهيد احترافي في جدة",
            url: "https://rawajgate.com/commercial-printing/letterheads",
            image: "https://rawajgate.com/images/luxury-business-cards-printing-jeddah.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "مطبوعات تجارية", url: "https://rawajgate.com/commercial-printing" },
            { name: "ورق رسمي", url: "https://rawajgate.com/commercial-printing/letterheads" },
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
                                <span className="text-amber-400">ورق رسمي</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">ورق رسمي</span> يعكس احترافيتك
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                الورق الرسمي (Letterhead) هو أساس مراسلات شركتك. كل خطاب، عقد، أو فاتورة
                                على ورقك الرسمي يعكس هويتك، خاصة عند تقديمه داخل <Link href="/commercial-printing/folders" className="text-white hover:text-amber-200 underline">ملفات عروض</Link> فاخرة. في بوابة الرواج نطبع على ورق عالي الجودة
                                بألوان ثابتة لسنوات.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                الشعار في الأعلى، معلومات الاتصال في الأسفل، وتصميم نظيف واحترافي.
                                نوفر ورق 100 جرام للمراسلات العادية، و120 جرام للمستندات الرسمية والعقود.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                اطلب عرض سعر <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/luxury-business-cards-printing-jeddah.webp"
                            alt="ورق رسمي احترافي للشركات في جدة"
                            
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                        أهمية الورق الرسمي لشركتك في جدة
                    </h2>
                    <div className="prose prose-lg text-gray-700">
                        <p>
                            في عصر الإيميل والتواصل الرقمي، قد تظن أن الورق الرسمي غير ضروري. لكن الحقيقة أن <strong>العقود، الفواتير،
                            خطابات الضمان، وعروض الأسعار</strong> لا زالت تُطبع وتُوقع ورقياً في معظم المعاملات التجارية في جدة والمملكة.
                            عندما يستلم عميلك خطاباً على ورقك الرسمي المطبوع بجودة عالية، يشعر فوراً بالاحترافية والثقة.
                        </p>
                        <p>
                            الورق الرسمي أيضاً <strong>متطلب قانوني</strong> لمعظم المعاملات الحكومية والمالية في المملكة العربية السعودية.
                            هيئة الزكاة والضريبة والجمارك تشترط وجود معلومات محددة على المستندات الرسمية.
                            تأكد أن ورقك يتضمن: اسم الشركة بالعربية والإنجليزية، الشعار، السجل التجاري، الرقم الضريبي (VAT)، والعنوان الكامل.
                        </p>
                        <p>
                            في <strong>بوابة الرواج</strong>، نطبع الورق الرسمي للشركات في جدة منذ أكثر من 15 عاماً.
                            نفهم المتطلبات القانونية ونساعدك في تصميم ورق رسمي احترافي يلبي جميع الاشتراطات مع الحفاظ على جمالية التصميم.
                        </p>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        استخدامات الورق الرسمي
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

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        خيارات الورق
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {PAPER_OPTIONS.map((paper) => (
                            <div key={paper.name} className="card p-6 text-center card-hover">
                                <FileText className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{paper.name}</h3>
                                <p className="text-gray-600 text-sm mb-3">{paper.desc}</p>
                                <div className="text-amber-600 font-bold">{paper.price}</div>
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
                                نستخدم أفضل الخامات والتقنيات لضمان ورق رسمي بجودة عالية تدوم طويلاً
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
                            src="/images/printing-machines-digital-offset-equipment.webp"
                            alt="ماكينات طباعة الورق الرسمي في بوابة الرواج جدة"
                            
                            
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
                            دليلك الشامل للورق الرسمي الاحترافي في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">الورق الرسمي: أكثر من مجرد ورقة مطبوعة</h3>
                            <p>
                                الورق الرسمي (Letterhead) هو الواجهة المكتوبة لشركتك. كل خطاب يخرج من مكتبك يحمل رسالة عن هويتك واحترافيتك.
                                في بيئة الأعمال السعودية، حيث تحظى العلاقات الشخصية والثقة بأهمية كبيرة، الورق الرسمي الراقي يعزز مصداقيتك
                                ويترك انطباعاً إيجابياً لدى العملاء والشركاء والجهات الحكومية.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">المتطلبات القانونية للورق الرسمي في السعودية</h3>
                            <p>
                                وفقاً لأنظمة هيئة الزكاة والضريبة والجمارك، يجب أن تتضمن المستندات الرسمية والفواتير الضريبية عدة عناصر إلزامية:
                                <strong>اسم المنشأة</strong> كما هو مسجل، <strong>الرقم الضريبي</strong> (VAT Number) بوضوح،
                                <strong>عنوان المنشأة</strong> الكامل، و<strong>السجل التجاري</strong>. عدم وجود هذه المعلومات قد يعرضك لمخالفات.
                                في بوابة الرواج، نحرص على تضمين جميع هذه العناصر في تصميم الورق الرسمي مع الحفاظ على المظهر الجمالي.
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/luxury-business-cards-printing-jeddah.webp"
                                    alt="ورق رسمي فاخر للشركات في جدة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                    alt="استخدام الورق الرسمي في بيئة العمل بجدة"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">أنواع الورق المتوفرة</h3>
                            <p>
                                نوفر في بوابة الرواج ثلاثة أنواع رئيسية من الورق لتناسب مختلف الاحتياجات والميزانيات.
                                <strong>ورق الأوفست (100-120 جرام)</strong> هو الخيار الاقتصادي والعملي للمراسلات اليومية، يتميز بسطح أملس
                                وقابلية ممتازة للطباعة. <strong>ورق الكتان (Linen)</strong> يتميز بملمس محبب فاخر يشعر به المستلم فور لمسه،
                                وهو الاختيار المفضل للمحامين والاستشاريين والشركات الراقية. <strong>ورق الكونكرر (Conqueror)</strong> هو
                                الأفخم على الإطلاق، ورق قطني عالي الجودة يستخدمه كبار رجال الأعمال والبنوك والفنادق الخمس نجوم.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">عناصر تصميم الورق الرسمي الناجح</h3>
                            <p>
                                الورق الرسمي الاحترافي يجمع بين الجمال والوظيفية. يجب أن يكون <strong>الشعار</strong> واضحاً في الرأس
                                (عادة أعلى اليمين أو الوسط). <strong>معلومات الاتصال</strong> توضع في الذيل أو الجانب بشكل منظم.
                                <strong>المعلومات القانونية</strong> (السجل التجاري والرقم الضريبي) تكون بخط أصغر في الذيل.
                                التوازن بين هذه العناصر مع ترك مساحة كافية للمحتوى هو ما يميز التصميم الاحترافي.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">الورق الرسمي كجزء من الهوية البصرية</h3>
                            <p>
                                الورق الرسمي لا يعمل بمفرده. للحصول على صورة متكاملة واحترافية، يجب أن يتناسق مع
                                <Link href="/commercial-printing/business-cards" className="text-emerald-600 hover:text-emerald-700"> بطاقات العمل</Link> و
                                <Link href="/commercial-printing/folders" className="text-emerald-600 hover:text-emerald-700"> ملفات العروض</Link>.
                                الألوان والخطوط والأسلوب يجب أن تكون موحدة عبر جميع المطبوعات. في بوابة الرواج، نساعدك في تصميم
                                مجموعة مطبوعات متناسقة تعكس هوية علامتك التجارية بشكل احترافي.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">نصائح للاستخدام الأمثل</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li>احتفظ بكمية كافية من الورق الرسمي (ننصح بـ 1000 ورقة على الأقل)</li>
                                <li>خزّن الورق في مكان جاف بعيداً عن الرطوبة والشمس المباشرة</li>
                                <li>استخدم حبر طابعة عالي الجودة للحفاظ على مظهر احترافي</li>
                                <li>راجع المعلومات القانونية دورياً وحدّثها عند الحاجة</li>
                                <li>احتفظ بنسخة PDF للاستخدام في المراسلات الإلكترونية</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج لطباعة الورق الرسمي؟</h3>
                            <p>
                                في بوابة الرواج، نجمع بين الخبرة الطويلة والجودة العالية والأسعار المنافسة. طبعنا لآلاف الشركات في جدة
                                على مدار 15+ عاماً. نفهم المتطلبات القانونية السعودية ونصمم ورقاً رسمياً يلبيها بالكامل.
                                نستخدم ورقاً مستورداً عالي الجودة وماكينات طباعة ألمانية تضمن دقة الألوان.
                                فريق التصميم لدينا جاهز لمساعدتك في إخراج تصميم يعكس احترافية شركتك.
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
                        كل ما تريد معرفته عن طباعة الورق الرسمي في جدة
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
                    <h2 className="text-3xl font-bold text-white mb-6">اطبع ورقك الرسمي الآن!</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        احصل على عرض سعر مجاني وتصميم احترافي لورقك الرسمي
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-100 transition-all">
                            اطلب عرض سعر <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href={`https://wa.me/${BUSINESS.phone.whatsapp}?text=أريد طباعة ورق رسمي`}
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition-all"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        <RelatedServices currentPath="/commercial-printing/letterheads" />
        </>
    );
}
