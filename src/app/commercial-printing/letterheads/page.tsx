import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { FileText, ArrowLeft, Layers, Phone, Award, Printer } from "lucide-react";

export const metadata: Metadata = {
    title: "طباعة ورق رسمي وليترهيد في جدة | Letterhead | بوابة الرواج",
    description: "طباعة ورق رسمي احترافي في جدة. ورق 100-120 جرام، ألوان زاهية، تصميم مجاني. ليترهيد للشركات والمؤسسات بأسعار منافسة وجودة عالية.",
    keywords: ["ورق رسمي", "ليترهيد", "letterhead jeddah", "طباعة ورق مراسلات", "corporate stationery"],
};

const PAPER_OPTIONS = [
    { name: "ورق 100 جرام", desc: "الأكثر شيوعاً للمراسلات العادية", price: "اطلب عرضك" },
    { name: "ورق 120 جرام", desc: "أثقل للعقود والمستندات الرسمية", price: "سعر مميز" },
    { name: "ورق كتان Linen", desc: "ملمس فاخر للشركات الراقية", price: "تواصل معنا" },
];

const FAQS = [
    {
        question: "كيف أحصل على عرض لليترهيد؟",
        answer: "تواصل معنا للحصول على عرض سعر مخصص حسب نوع الورق والكمية. السعر يشمل الطباعة وجه واحد ملون. التصميم مجاني!",
    },
    {
        question: "هل تطبعون على وجهين؟",
        answer: "نعم، طباعة الوجه الثاني (معلومات الاتصال، شروط، خريطة) متاحة بسعر إضافي بسيط. ننصح بها للعقود والفواتير.",
    },
];

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
                        أهمية الورق الرسمي
                    </h2>
                    <div className="prose prose-lg text-gray-700">
                        <p>
                            في عصر الإيميل، قد تظن أن الورق الرسمي غير ضروري. لكن <strong>العقود، الفواتير،
                                خطابات الضمان</strong> لا زالت تُطبع. عندما يستلم عميلك خطاباً على ورقك الرسمي،
                            يشعر بالاحترافية والثقة.
                        </p>
                        <p>
                            الورق الرسمي أيضاً <strong>متطلب قانوني</strong> لمعظم المعاملات الحكومية والمالية.
                            تأكد أن ورقك يتضمن: اسم الشركة، الشعار، السجل التجاري، الرقم الضريبي، والعنوان.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        خيارات الورق
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {PAPER_OPTIONS.map((paper) => (
                            <div key={paper.name} className="card p-6 text-center">
                                <FileText className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{paper.name}</h3>
                                <p className="text-gray-600 text-sm mb-3">{paper.desc}</p>
                                <div className="text-amber-600 font-bold">{paper.price}</div>
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
                    <h2 className="text-3xl font-bold text-white mb-6">اطبع ورقك الرسمي الآن!</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg inline-flex items-center">
                        اطلب الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
