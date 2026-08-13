import { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema, generateSpeakableWebPage } from "@/lib/schema";
import { RelatedServices } from "@/components/related-services";
import { ExhibitionsEventsFaqs } from "@/lib/faqs/exhibitions-events";
import {
    Grid3X3,
    ArrowLeft,
    Repeat,
    Clock,
    Coins,
    Building2,
    Briefcase,
    GraduationCap,
    Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
    openGraph: {
        title: "أجنحة أوكتانورم وشل سكيم في جدة | بوابة الرواج",
        description: "تأجير أجنحة نظامية (أوكتانورم / شل سكيم) للمعارض في جدة. تركيب وتفكيك سريع، تكلفة اقتصادية، أحجام من 9 إلى 36 م². مثالية للمعارض قصيرة المدة.",
        url: "https://rawajgate.com/exhibitions-events/system-booths",
        images: [{ url: "/images/octanorm-system-booth-shell-scheme.webp", width: 1200, height: 630, alt: "أجنحة أوكتانورم وشل سكيم في جدة" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "أجنحة أوكتانورم وشل سكيم في جدة",
        description: "تأجير أجنحة نظامية (أوكتانورم / شل سكيم) للمعارض في جدة. تركيب وتفكيك سريع، تكلفة اقتصادية، أحجام من 9 إلى 36 م². مثالية للمعارض قصيرة المدة.",
        images: ["/images/octanorm-system-booth-shell-scheme.webp"],
    },
    alternates: { canonical: "/exhibitions-events/system-booths" },
    title: "أجنحة أوكتانورم وشل سكيم في جدة",
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

const TECH_SPECS = [
    { spec: "الهيكل", value: "ألومنيوم أوكتانورم" },
    { spec: "الجدران", value: "بيضاء معيارية" },
    { spec: "الإضاءة", value: "سبوت لايت" },
    { spec: "الأرضية", value: "سجاد" },
    { spec: "الكهرباء", value: "مخرج واحد" },
    { spec: "الأثاث", value: "طاولة + كرسيين" },
];

const USE_CASES = [
    { icon: Building2, title: "المعارض التجارية", desc: "حل اقتصادي للمشاركة" },
    { icon: GraduationCap, title: "المعارض التعليمية", desc: "الجامعات والمدارس" },
    { icon: Stethoscope, title: "المعارض الطبية", desc: "المستشفيات والعيادات" },
    { icon: Briefcase, title: "معارض التوظيف", desc: "الشركات والباحثين" },
];

const FAQS = ExhibitionsEventsFaqs["exhibitions-events/system-booths"];

export default function SystemBoothsPage() {
    const schemas = [
        generateSpeakableWebPage({
            url: "https://rawajgate.com/exhibitions-events/system-booths",
            name: "أجنحة أوكتانورم وشل سكيم في جدة",
            description: "تأجير أجنحة نظامية (أوكتانورم / شل سكيم) للمعارض في جدة. تركيب وتفكيك سريع، تكلفة اقتصادية، أحجام من 9 إلى 36 م². مثالية للمعارض قصيرة المدة.",
        }),
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

                            <p data-speakable="answer" className="text-xl text-white/90 mb-6 leading-relaxed font-medium">
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

            {/* Use Cases */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        أنواع المعارض التي نخدمها
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

            {/* Tech Specs */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                المواصفات الفنية
                            </h2>
                            <p className="text-gray-600 mb-8">
                                أجنحة نظامية معيارية بمواصفات عالمية
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
                            src="/images/octanorm-system-booth-shell-scheme.webp"
                            alt="جناح نظامي أوكتانورم في معرض بجدة"
                            
                            
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
                            دليلك الشامل للأجنحة النظامية في جدة
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">ما هي الأجنحة النظامية (Shell Scheme)؟</h3>
                            <p>
                                الأجنحة النظامية (Shell Scheme أو Octanorm) هي نظام معياري لإنشاء أجنحة المعارض بسرعة واقتصادية.
                                تتكون من هيكل ألومنيوم خفيف وجدران بيضاء قياسية. في معارض جدة مثل معرض البناء السعودي ومعرض الغذاء،
                                ستجد أن غالبية الأجنحة الصغيرة والمتوسطة تستخدم هذا النظام. الميزة الرئيسية أنه يُركب ويُفكك في ساعات،
                                مما يوفر الوقت والتكلفة مقارنة بالأجنحة الخشبية المخصصة.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">مميزات الأجنحة النظامية</h3>
                            <p>
                                <strong>التكلفة الاقتصادية</strong> - أقل بـ 50-70% من الأجنحة المخصصة.
                                <strong>التركيب السريع</strong> - 2-4 ساعات فقط مقارنة بأيام للأجنحة الخشبية.
                                <strong>المعيارية</strong> - أحجام قياسية تناسب معظم مساحات المعارض.
                                <strong>إعادة الاستخدام</strong> - الهيكل يُستخدم مئات المرات.
                                <strong>الباقة الشاملة</strong> - السعر يشمل كل شيء (هيكل، جدران، إضاءة، سجاد، أثاث).
                            </p>

                            <div className="my-8 grid md:grid-cols-2 gap-6">
                                <GeoImage
                                    src="/images/octanorm-system-booth-shell-scheme.webp"
                                    alt="جناح نظامي مع جرافيك مخصص"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                                <GeoImage
                                    src="/images/pop-up-display-media-wall-background.webp"
                                    alt="تجهيز جناح معرض"
                                    
                                    
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">متى تختار الجناح النظامي؟</h3>
                            <p>
                                الجناح النظامي مثالي في الحالات التالية:
                                <strong>المعارض قصيرة المدة</strong> (3-5 أيام) حيث لا يستحق الاستثمار الكبير.
                                <strong>الميزانية المحدودة</strong> للشركات الصغيرة والمتوسطة.
                                <strong>المشاركة الأولى</strong> لاختبار السوق قبل الاستثمار أكثر.
                                <strong>المعارض المتكررة</strong> حيث تحتاج حلاً سريعاً ومتكرراً.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">كيف تحسّن مظهر الجناح النظامي؟</h3>
                            <ul className="list-disc pr-6 space-y-2">
                                <li>أضف جرافيك مطبوع على الجدران بألوان هويتك</li>
                                <li>استخدم رول أب ستاند أو Pop-up كخلفية إضافية</li>
                                <li>أضف رفوف زجاجية لعرض المنتجات</li>
                                <li>استخدم إضاءة إضافية لإبراز المنتجات</li>
                                <li>أضف كاونتر استقبال بتصميم احترافي</li>
                                <li>ضع شاشة عرض للفيديوهات والعروض</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">لماذا بوابة الرواج للأجنحة النظامية؟</h3>
                            <p>
                                في بوابة الرواج، نوفر أجنحة نظامية للشركات في جدة منذ أكثر من 15 عاماً.
                                نستخدم هياكل أوكتانورم عالية الجودة. الباقة تشمل كل شيء (هيكل، جدران، إضاءة، سجاد، أثاث، كهرباء).
                                فريقنا يتولى التركيب والتفكيك. نوفر إضافات لتحسين المظهر (جرافيك، رفوف، شاشات).
                                فريق التصميم لدينا يصمم الجرافيك المناسب. أسعار تنافسية وخدمة موثوقة.
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
                        كل ما تريد معرفته عن الأجنحة النظامية في جدة
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
                    <h2 className="text-3xl font-bold text-white mb-6">جاهز لمعرضك؟</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        احصل على جناح نظامي بسعر تنافسي. تركيب وتفكيك سريع وخدمة موثوقة.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/quote" className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-100 transition-all">
                            احجز جناحك <ArrowLeft className="mr-2 w-5 h-5" />
                        </Link>
                        <a
                            href={`https://wa.me/${BUSINESS.phone.whatsapp}?text=أريد حجز جناح نظامي للمعرض`}
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition-all"
                        >
                            واتساب الآن
                        </a>
                    </div>
                </div>
            </section>
        <RelatedServices currentPath="/exhibitions-events/system-booths" />
        </>
    );
}
