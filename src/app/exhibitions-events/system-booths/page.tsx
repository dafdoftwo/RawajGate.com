import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { Grid3X3, ArrowLeft, Repeat, Clock, Coins, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "أجنحة أوكتانورم وشل سكيم في جدة | تأجير أجنحة نظامية | بوابة الرواج",
    description: "تأجير أجنحة نظامية (أوكتانورم / شل سكيم) للمعارض في جدة. تركيب وتفكيك سريع، تكلفة اقتصادية، أحجام من 9 إلى 36 م². مثالية للمعارض قصيرة المدة.",
    keywords: ["أوكتانورم", "شل سكيم", "shell scheme", "octanorm booth", "أجنحة نظامية جدة", "تأجير جناح معرض"],
};

const BOOTH_SIZES = [
    { name: "3 × 3 م", area: "9 م²", price: "اطلب عرضك", desc: "الحجم الأساسي" },
    { name: "3 × 4 م", area: "12 م²", price: "سعر مميز", desc: "مساحة أكبر قليلاً" },
    { name: "3 × 6 م", area: "18 م²", price: "عرض خاص", desc: "للشركات المتوسطة" },
    { name: "6 × 6 م", area: "36 م²", price: "تواصل معنا", desc: "جناح زاوية كبير" },
];

const INCLUDES = [
    "هيكل ألمنيوم أوكتانورم", "جدران بيضاء", "فاصيا (لوحة اسم)", "إضاءة سبوت",
    "سجادة", "طاولة + كرسيين", "كهرباء (مخرج واحد)"
];

const FAQS = [
    {
        question: "ما الفرق بين الجناح النظامي والمخصص؟",
        answer: "الجناح النظامي (Shell Scheme) هيكل جاهز معياري، تركيب سريع، تكلفة أقل، مناسب للمعارض قصيرة المدة. المخصص يُصمم من الصفر بالخشب حسب رؤيتك، تكلفة أعلى، تأثير بصري أقوى.",
    },
    {
        question: "هل يمكن تخصيص الجناح النظامي؟",
        answer: "نعم! نضيف: جرافيك مطبوع على الجدران، رفوف زجاجية، شاشات، كاونتر استقبال. هذه الإضافات تحوّل الجناح البسيط لمظهر احترافي.",
    },
];

export default function SystemBoothsPage() {
    const schemas = [
        generateServiceSchema({
            name: "System Booths Octanorm Jeddah",
            nameAr: "أجنحة نظامية أوكتانورم",
            description: "تأجير أجنحة نظامية جاهزة للمعارض في جدة",
            url: "https://rawajgate.com/exhibitions-events/system-booths",
            image: "https://rawajgate.com/images/octanorm-system-booth-shell-scheme.webp",
        }),
        generateBreadcrumbSchema([
            { name: "الرئيسية", url: "https://rawajgate.com" },
            { name: "معارض وفعاليات", url: "https://rawajgate.com/exhibitions-events" },
            { name: "أجنحة نظامية", url: "https://rawajgate.com/exhibitions-events/system-booths" },
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
                                <Link href="/exhibitions-events" className="hover:text-white">معارض وفعاليات</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">أجنحة نظامية</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                                <span className="text-gradient">أجنحة نظامية</span> سريعة واقتصادية
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
                                الأجنحة النظامية (Shell Scheme / Octanorm) هي الحل الأسرع والأوفر للمعارض.
                                هيكل ألمنيوم جاهز يُركب ويُفكك في ساعات. تكلفة أقل بكثير من الأجنحة المخصصة،
                                مثالية للمشاركات قصيرة المدة. أما إذا كنت تبحث عن تميز أكبر، يمكنك الاطلاع على <Link href="/exhibitions-events/custom-wood-booths" className="text-emerald-200 underline">الأجنحة الخشبية المخصصة</Link>.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                نوفر أحجاماً من 9 م² حتى 36 م². الباقة تشمل: الهيكل، الجدران، الإضاءة،
                                الكهرباء، السجاد، طاولة وكرسيين.
                            </p>

                            <Link href="/quote" className="btn-primary">
                                احجز جناحك <ArrowLeft className="inline mr-2 w-5 h-5" />
                            </Link>
                        </div>

                        <GeoImage
                            src="/images/octanorm-system-booth-shell-scheme.webp"
                            alt="جناح نظامي أوكتانورم للمعارض في جدة"
                            district="مركز المعارض"
                            className="rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: Clock, title: "تركيب سريع", desc: "في ساعات معدودة" },
                        { icon: Repeat, title: "قابل للتكرار", desc: "نفس النظام لمعارض متعددة" },
                        { icon: Coins, title: "تكلفة أقل", desc: "من الأجنحة المخصصة" },
                    ].map((f) => (
                        <div key={f.title} className="card p-6">
                            <f.icon className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
                            <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                            <p className="text-gray-600 text-sm">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        الأحجام المتوفرة
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {BOOTH_SIZES.map((booth) => (
                            <div key={booth.name} className="card p-6 text-center">
                                <Grid3X3 className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">{booth.name}</h3>
                                <p className="text-gray-500 text-sm mb-2">{booth.area}</p>
                                <div className="text-xl font-bold text-emerald-600 mb-2">{booth.price}</div>
                                <p className="text-gray-500 text-xs">{booth.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                        ماذا تشمل الباقة؟
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {INCLUDES.map((item) => (
                            <span key={item} className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                                ✓ {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
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
                    <h2 className="text-3xl font-bold text-white mb-6">جاهز لمعرضك؟</h2>
                    <Link href="/quote" className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg inline-flex items-center">
                        احجز الآن <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
