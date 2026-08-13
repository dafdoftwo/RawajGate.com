import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowLeft, Phone, CheckCircle, Truck, Users } from "lucide-react";
import { GeoImage } from "@/components/geo-image";
import { BUSINESS, telLink } from "@/lib/business";
import { generateBreadcrumbSchema, generateSpeakableWebPage } from "@/lib/schema";
import {
    COVERAGE_DISTRICTS, NEARBY_CITIES, SECTORS, CAPABILITIES,
    PROCESS_STEPS, GUARANTEES, MILESTONES, CORE_VALUES,
} from "@/lib/about-data";

export const metadata: Metadata = {
    alternates: { canonical: "/about" },
    title: "من نحن — مطبعة في جدة منذ 2009",
    description:
        "بوابة الرواج مطبعة وشركة خدمات دعاية وإعلان في جدة منذ عام 2009. تعرّف على قصتنا، فريقنا، ورشتنا، عمليتنا في تنفيذ المشاريع، والقطاعات التي نخدمها في المنطقة الغربية.",
    keywords: [
        "بوابة الرواج",
        "شركة طباعة جدة",
        "مطبعة جدة موثوقة",
        "دعاية وإعلان جدة",
        "عن الشركة",
    ],
    openGraph: {
        title: "من نحن — بوابة الرواج | مطبعة في جدة منذ 2009",
        description:
            "خبرة منذ 2009 في الطباعة التجارية وتجهيز المعارض ولافتات المحلات والتصميم في جدة والمنطقة الغربية.",
        url: `${BUSINESS.url}/about`,
        images: [
            {
                url: "/images/rawaj-gate-printing-workshop-team-at-work.webp",
                width: 1200,
                height: 630,
                alt: "فريق ورشة بوابة الرواج في جدة",
            },
        ],
        locale: "ar_SA",
        type: "website",
    },
};

export default function AboutPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: BUSINESS.url },
        { name: "من نحن", url: `${BUSINESS.url}/about` },
    ]);
    const speakableSchema = generateSpeakableWebPage({
        url: "https://rawajgate.com/about",
        name: "من نحن — مطبعة في جدة منذ 2009",
        description: "بوابة الرواج مطبعة وشركة خدمات دعاية وإعلان في جدة منذ عام 2009. تعرّف على قصتنا، فريقنا، ورشتنا، عمليتنا في تنفيذ المشاريع، والقطاعات التي نخدمها في المنطقة الغربية.",
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <nav aria-label="مسار التنقل" className="text-sm text-white/60 mb-4">
                                <ol className="flex items-center">
                                    <li><Link href="/" className="hover:text-white">الرئيسية</Link></li>
                                    <li aria-hidden="true" className="mx-2">/</li>
                                    <li><span className="text-amber-400" aria-current="page">من نحن</span></li>
                                </ol>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                مطبعة وشركة دعاية في جدة منذ عام 2009
                            </h1>

                            <p data-speakable="answer" className="text-xl text-white/90 mb-6 leading-relaxed">
                                <strong className="text-white">بوابة الرواج</strong> شركة متخصصة في الطباعة التجارية، تجهيز أجنحة المعارض، لافتات المحلات، الهدايا الدعائية، والتصميم الجرافيكي — بمنظومة إنتاج متكاملة تحت سقف واحد في حي الروضة بجدة.
                            </p>

                            <p className="text-lg text-white/70 mb-8 leading-relaxed">
                                من ورشة صغيرة تخدم محلات الحي إلى شريك تنفيذ للشركات والمؤسسات في جدة والمنطقة الغربية — قصتنا هي قصة التزام بجودة النتيجة والمهنية في التعامل.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/quote" className="btn-primary text-center">
                                    تواصل معنا
                                    <ArrowLeft className="inline-block mr-2 w-5 h-5" aria-hidden="true" />
                                </Link>
                                <a href={telLink} className="btn-secondary text-center">
                                    <Phone className="w-5 h-5 ml-2" aria-hidden="true" />
                                    اتصل الآن
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <GeoImage
                                src="/images/rawaj-gate-printing-workshop-team-at-work.webp"
                                alt="فريق ورشة بوابة الرواج في جدة"
                                width={800}
                                height={600}
                                sizes="(max-width: 1024px) 100vw, 500px"
                                className="rounded-2xl shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { number: "2009", label: "سنة التأسيس" },
                            { number: "5", label: "أقسام متخصصة" },
                            { number: "24", label: "ساعة للتنفيذ العاجل" },
                            { number: "3", label: "سنوات ضمان اللافتات" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-4xl font-bold text-amber-500 mb-2">{stat.number}</div>
                                <div className="text-gray-600 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50" aria-labelledby="story-heading">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 id="story-heading" className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">قصتنا</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-8">
                            <p>بدأت <strong>بوابة الرواج</strong> عام 2009 كورشة صغيرة في حي الروضة بجدة، بفكرة بسيطة: الشركات السعودية تحتاج مطبعة تفهم متطلبات السوق المحلي، تلتزم بمواعيدها، وتتعامل باحترافية بغض النظر عن حجم الطلب.</p>
                            <p>خلال السنوات الأولى، ركّزنا على المطبوعات التجارية — بطاقات العمل، الفلايرات، الفواتير، والمنيوهات — لعملاء من مطاعم وعيادات ومكاتب في محيط جدة. كل عميل جديد فرصة لاختبار معاييرنا: هل سلّمنا في الموعد؟ هل جودة الطباعة كما وُعد؟ هل الفاتورة النهائية طابقت العرض؟</p>
                            <p>مع الوقت، بدأ العملاء يطلبون منّا خدمات أوسع: لافتة للمحل الجديد، جناح للمعرض القادم، أو هدايا دعائية للفعالية السنوية. كل توسّع جاء استجابة لطلب حقيقي من عملاء موجودين، لا محاولة لتقديم كل شيء لكل أحد.</p>
                            <p>اليوم، منظومتنا تضم خمسة أقسام متخصصة — المطبوعات التجارية، لافتات المحلات والتغليف، تجهيز أجنحة المعارض، الهدايا الدعائية، والتصميم الجرافيكي — يعمل فيها فريق فني متخصص داخل ورشتنا في حي الروضة، ونخدم عملاء في جدة والمنطقة الغربية وأحياناً تصل مشاريعنا إلى الرياض والمنطقة الشرقية عندما يتعلق الأمر بتجهيز جناح معرض.</p>
                            <p>الالتزام واحد لم يتغيّر منذ 2009: مشروعك يستحق نفس العناية، سواء كان 500 بطاقة عمل أو جناح معرض بمساحة 100 م².</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white" aria-labelledby="coverage-heading">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 id="coverage-heading" className="text-3xl font-heading font-bold text-gray-900 mb-4 text-center">نطاق التغطية الجغرافية</h2>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">من حي الروضة في جدة نغطي بالتوصيل والتركيب جميع أحياء المدينة، ونمتدّ لخدمة المنطقة الغربية.</p>

                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-amber-600" aria-hidden="true" />
                                    داخل جدة — تغطية مباشرة
                                </h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">تسليم يومي لجميع الأحياء التجارية، وتنفيذ في الموقع لللافتات وتغليف السيارات:</p>
                                <div className="flex flex-wrap gap-2">
                                    {COVERAGE_DISTRICTS.map((d) => (
                                        <span key={d} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-amber-200">{d}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Truck className="w-5 h-5 text-gray-600" aria-hidden="true" />
                                    خارج جدة — تنفيذ ومشاريع خاصة
                                </h3>
                                <ul className="space-y-4">
                                    {NEARBY_CITIES.map((city) => (
                                        <li key={city.name} className="flex items-start justify-between gap-3 pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                                            <span className="font-medium text-gray-900">{city.name}</span>
                                            <span className="text-sm text-gray-500">{city.note}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-gray-500 mt-6 leading-relaxed">
                                    ننفّذ أجنحة المعارض في جدة سوبر دوم، مركز جدة للمعارض والمؤتمرات، مركز الملك عبدالله الحضاري، واجهة الرياض، ومركز الظهران إكسبو.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50" aria-labelledby="capabilities-heading">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 id="capabilities-heading" className="text-3xl font-heading font-bold text-gray-900 mb-4">قدراتنا الإنتاجية في الورشة</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">خطوط إنتاج داخلية متخصصة تعني تحكماً كاملاً في الجودة والموعد — بدون الاعتماد على مقاولين خارجيين في الأساسيات.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {CAPABILITIES.map((cap) => (
                                <div key={cap.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                                        <cap.icon className="w-6 h-6" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{cap.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{cap.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white" aria-labelledby="process-heading">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 id="process-heading" className="text-3xl font-heading font-bold text-gray-900 mb-4">كيف ننفّذ مشروعك؟</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">عملية واضحة من 6 خطوات — كل خطوة معتمدة كتابياً قبل الانتقال للتالية.</p>
                        </div>
                        <ol className="relative border-r-2 border-amber-200 pr-6 space-y-8">
                            {PROCESS_STEPS.map((step) => (
                                <li key={step.step} className="relative">
                                    <span className="absolute -right-[38px] top-0 w-12 h-12 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center shadow-md">{step.step}</span>
                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                        <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-700 leading-relaxed">{step.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50" aria-labelledby="guarantees-heading">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 id="guarantees-heading" className="text-3xl font-heading font-bold text-gray-900 mb-4">ما نلتزم به تحديداً</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">وعود مكتوبة، لا شعارات. كل نقطة قابلة للتحقق في عقد المشروع.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {GUARANTEES.map((g) => (
                                <div key={g.title} className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <g.icon className="w-6 h-6" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">{g.title}</h3>
                                        <p className="text-gray-700 leading-relaxed text-sm">{g.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white" aria-labelledby="sectors-heading">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 id="sectors-heading" className="text-3xl font-heading font-bold text-gray-900 mb-4">القطاعات التي نخدمها</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">خبرة تراكمية في احتياجات كل قطاع — من الاشتراطات الرسمية للقطاع الطبي إلى المتطلبات البصرية لسلاسل المطاعم.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {SECTORS.map((sector) => (
                                <div key={sector.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-amber-300 transition-colors">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-amber-600">
                                            <sector.icon className="w-5 h-5" aria-hidden="true" />
                                        </div>
                                        <h3 className="font-bold text-gray-900">{sector.name}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{sector.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50" aria-labelledby="timeline-heading">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 id="timeline-heading" className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">محطات في مسيرتنا</h2>
                        <div className="relative">
                            <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-amber-200" />
                            <div className="space-y-8">
                                {MILESTONES.map((m) => (
                                    <div key={m.title} className="relative pr-16">
                                        <div className="absolute right-3 top-1 w-6 h-6 rounded-full bg-amber-500 border-4 border-white shadow" />
                                        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                                            <span className="text-amber-600 font-bold text-sm block mb-1">{m.year}</span>
                                            <h3 className="font-bold text-gray-900 mb-1">{m.title}</h3>
                                            <p className="text-gray-600 text-sm">{m.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white" aria-labelledby="values-heading">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 id="values-heading" className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">القيم التي نعمل بها</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {CORE_VALUES.map((value) => (
                                <div key={value.title} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <div className="w-14 h-14 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                                        <value.icon className="w-7 h-7" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/*
              فريق الشركة — placeholder E-E-A-T.
              محركات البحث ووكلاء الذكاء الاصطناعي يفضّلون أسماء بشرية قابلة
              للتحقق. حين تكون جاهزاً لعرض فريقك، استبدل هذه الكتلة بأسماء
              وصور ومناصب حقيقية — لا نُدرج أسماء مخترعة.
            */}
            <section className="py-20 bg-gray-50" aria-labelledby="team-heading">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6">
                            <Users className="w-4 h-4 text-amber-600" aria-hidden="true" />
                            <span className="text-sm text-gray-600 font-medium">فريقنا</span>
                        </div>
                        <h2 id="team-heading" className="text-3xl font-heading font-bold text-gray-900 mb-6">خلف كل مشروع، فريق متخصص</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            كل قسم في بوابة الرواج يديره متخصص بخبرة طويلة في مجاله: مصممون جرافيكيون، فنيو طباعة أوفست ورقمية، نجارو تنفيذ أجنحة المعارض، ومركّبو لافتات ولوحات معتمدون. فريق خدمة العملاء مسؤول عن التواصل معك من أول استفسار حتى تسليم المشروع وضمانات ما بعد البيع.
                        </p>
                        <p className="text-gray-500 text-sm">صور وأسماء الفريق ستُضاف قريباً على هذه الصفحة.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">جاهزون لخدمة مشروعك القادم</h2>
                        <p className="text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                            سواء كان طلبك بطاقة عمل واحدة أو تجهيز جناح معرض متكامل، تعامل معنا يبدأ بمحادثة مفتوحة ونصيحة صادقة قبل أي التزام.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/quote" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-gray-900 font-bold rounded-lg hover:bg-amber-400 transition-colors">
                                اطلب عرض سعر
                                <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                            </Link>
                            <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-colors">
                                تصفّح أعمالنا
                            </Link>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 text-sm text-white/60">
                            <div>
                                <div className="text-white font-bold mb-1">
                                    <CheckCircle className="w-4 h-4 inline-block ml-1 text-green-400" aria-hidden="true" />
                                    شركة سعودية مسجّلة
                                </div>
                                <p className="text-xs">منذ عام {BUSINESS.foundingDate}</p>
                            </div>
                            <div>
                                <div className="text-white font-bold mb-1">
                                    <CheckCircle className="w-4 h-4 inline-block ml-1 text-green-400" aria-hidden="true" />
                                    فاتورة ضريبية
                                </div>
                                <p className="text-xs">مع كل مشروع</p>
                            </div>
                            <div>
                                <div className="text-white font-bold mb-1">
                                    <CheckCircle className="w-4 h-4 inline-block ml-1 text-green-400" aria-hidden="true" />
                                    ضمان مكتوب
                                </div>
                                <p className="text-xs">على المشاريع المؤهلة</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
