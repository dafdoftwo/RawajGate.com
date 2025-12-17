import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import {
    Award,
    Users,
    Clock,
    MapPin,
    Target,
    Heart,
    Briefcase,
    ArrowLeft,
    Phone,
    CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
    title: "من نحن | بوابة الرواج للدعاية والإعلان في جدة",
    description: "بوابة الرواج شركة متخصصة في الطباعة والدعاية والإعلان في جدة منذ 2009. خبرة +15 عام، فريق متخصص، وخدمة عملاء متميزة. شريك نجاحك في التسويق.",
    keywords: ["بوابة الرواج", "شركة طباعة جدة", "دعاية وإعلان", "عن الشركة", "rawaj gate"],
    openGraph: {
        title: "من نحن | بوابة الرواج",
        description: "شريكك في النجاح منذ 2009. طباعة، دعاية، وهدايا ترويجية في جدة.",
        images: ["/images/client-meeting-office-al-rawaj-jeddah.webp"],
        locale: "ar_SA",
    },
};

const MILESTONES = [
    { year: "2009", title: "التأسيس", desc: "بدأنا كمشروع صغير في حي الروضة" },
    { year: "2012", title: "التوسع", desc: "افتتاح ورشة الطباعة الخاصة" },
    { year: "2016", title: "المعارض", desc: "إضافة خدمات تجهيز المعارض" },
    { year: "2020", title: "التحول الرقمي", desc: "إطلاق المنصة الإلكترونية" },
    { year: "2024", title: "اليوم", desc: "+5000 عميل سعيد" },
];

const VALUES = [
    { icon: Award, title: "الجودة أولاً", desc: "نستخدم أفضل الخامات والتقنيات" },
    { icon: Clock, title: "الالتزام بالمواعيد", desc: "نسلّم في الوقت المحدد، دائماً" },
    { icon: Heart, title: "خدمة العميل", desc: "رضاكم هو هدفنا الأول" },
    { icon: Target, title: "الاحترافية", desc: "فريق متخصص ذو خبرة طويلة" },
];

const STATS = [
    { number: "15+", label: "سنة خبرة" },
    { number: "5000+", label: "عميل سعيد" },
    { number: "50,000+", label: "مشروع منفذ" },
    { number: "100%", label: "التزام بالجودة" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <nav className="text-sm text-white/60 mb-4">
                                <Link href="/" className="hover:text-white">الرئيسية</Link>
                                <span className="mx-2">/</span>
                                <span className="text-amber-400">من نحن</span>
                            </nav>

                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                <span className="text-gradient">بوابة الرواج</span>
                                <br />شريكك في النجاح
                            </h1>

                            <p className="text-xl text-white/90 mb-6 leading-relaxed">
                                منذ عام 2009 ونحن نساعد الشركات والمشاريع في جدة على النمو والازدهار
                                من خلال حلول الطباعة والدعاية المتكاملة. اسمنا "الرواج" يعكس رسالتنا:
                                نريد لعملائنا الرواج والنجاح.
                            </p>

                            <p className="text-lg text-white/70 mb-8">
                                من ورشة صغيرة في حي الروضة إلى واحدة من أبرز شركات الطباعة في جدة -
                                قصتنا هي قصة شغف بالجودة والتميز.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/quote" className="btn-primary text-center">
                                    تواصل معنا
                                    <ArrowLeft className="inline-block mr-2 w-5 h-5" />
                                </Link>
                                <a href="tel:+966548923300" className="btn-secondary text-center">
                                    <Phone className="w-5 h-5 ml-2" />
                                    اتصل الآن
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <GeoImage
                                src="/images/client-meeting-office-al-rawaj-jeddah.webp"
                                alt="مكتب بوابة الرواج في جدة"
                                caption="مقر بوابة الرواج - حي الروضة، جدة"
                                district="الروضة"
                                cameraModel="Sony A7 III"
                                className="rounded-2xl shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-4xl font-bold text-amber-500 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                            قصتنا
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p>
                                بدأت <strong>بوابة الرواج</strong> في عام 2009 كمشروع صغير بإمكانيات محدودة
                                وطموح كبير. مؤسسنا رأى فجوة في السوق السعودي: شركات كثيرة تحتاج خدمات طباعة
                                عالية الجودة بأسعار معقولة وخدمة عملاء ممتازة.
                            </p>

                            <p>
                                اليوم، بعد أكثر من <strong>15 عاماً</strong>، نفخر بخدمة أكثر من 5,000 عميل
                                وتنفيذ أكثر من 50,000 مشروع. من بطاقات العمل البسيطة إلى أجنحة المعارض الكبرى -
                                نقدم كل ما يحتاجه عملاؤنا تحت سقف واحد.
                            </p>

                            <p>
                                فريقنا يضم مصممين محترفين، فنيي طباعة ذوي خبرة، وفريق خدمة عملاء متميز.
                                نستخدم أحدث ماكينات الطباعة الرقمية والأوفست، ونلتزم بأعلى معايير الجودة العالمية.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        محطات في مسيرتنا
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-amber-200" />

                            {MILESTONES.map((milestone, index) => (
                                <div key={milestone.year} className="relative flex items-start gap-6 mb-8">
                                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shrink-0 z-10">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="card p-4 flex-1">
                                        <div className="text-amber-600 font-bold text-lg">{milestone.year}</div>
                                        <div className="font-bold text-gray-900">{milestone.title}</div>
                                        <div className="text-gray-600 text-sm">{milestone.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
                        قيمنا
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {VALUES.map((value) => (
                            <div key={value.title} className="card p-6 text-center">
                                <value.icon className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                موقعنا
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                                    <div>
                                        <div className="font-bold text-gray-900">العنوان</div>
                                        <div className="text-gray-600">حي الروضة، شارع الأمير سلطان، جدة</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                                    <div>
                                        <div className="font-bold text-gray-900">الهاتف</div>
                                        <div className="text-gray-600" dir="ltr">+966 54 892 3300</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                                    <div>
                                        <div className="font-bold text-gray-900">ساعات العمل</div>
                                        <div className="text-gray-600">السبت - الخميس: 9 صباحاً - 9 مساءً</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                            <GeoImage
                                src="/images/rawaj-gate-printing-workshop-team-at-work.webp"
                                alt="خريطة موقع بوابة الرواج في حي الروضة جدة"
                                className="w-full h-full object-cover"
                                district="الروضة"
                            />
                            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold shadow-sm">
                                <MapPin className="w-3 h-3 inline-block ml-1 text-amber-500" />
                                حي الروضة، جدة
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-amber-400 to-amber-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                        مستعد للعمل معنا؟
                    </h2>
                    <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
                        تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك.
                    </p>
                    <Link
                        href="/quote"
                        className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg inline-flex items-center"
                    >
                        ابدأ مشروعك
                        <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
