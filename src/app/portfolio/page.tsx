import { Metadata } from "next";
import Link from "next/link";
import { GeoImage } from "@/components/geo-image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "أعمالنا ومشاريعنا | بوابة الرواج للدعاية والإعلان",
    description: "استعرض مشاريعنا المنفذة: أجنحة معارض، لافتات محلات، هويات بصرية، ومطبوعات تجارية. +50,000 مشروع في جدة والمملكة.",
    keywords: ["أعمالنا", "معرض أعمال", "portfolio", "مشاريع منفذة", "بوابة الرواج"],
};

const CATEGORIES = [
    { id: "all", name: "الكل" },
    { id: "exhibitions", name: "معارض وفعاليات" },
    { id: "signage", name: "لافتات ولوحات" },
    { id: "branding", name: "هوية بصرية" },
    { id: "printing", name: "مطبوعات" },
];

const PROJECTS = [
    {
        id: 1,
        title: "جناح معرض جايتكس 2024",
        client: "شركة تقنية سعودية",
        category: "exhibitions",
        image: "/images/exhibition-booth-fabrication-design-jeddah.webp",
        description: "تصميم وتنفيذ جناح 36 م² بتصميم مستقبلي",
    },
    {
        id: 2,
        title: "لافتة مطعم 3D مضيئة",
        client: "مطعم في التحلية",
        category: "signage",
        image: "/images/3d-shop-signage-letters-acrylic-jeddah.webp",
        description: "حروف أكريليك مضيئة LED بارتفاع 60 سم",
    },
    {
        id: 3,
        title: "هوية بصرية متكاملة",
        client: "مكتب محاماة",
        category: "branding",
        image: "/images/client-meeting-office-al-rawaj-jeddah.webp",
        description: "شعار + دليل هوية + تطبيقات كاملة",
    },
    {
        id: 4,
        title: "تغليف سيارات أسطول",
        client: "شركة توصيل",
        category: "signage",
        image: "/images/commercial-vehicle-branding-car-wrapping-jeddah.webp",
        description: "تغليف 20 سيارة بتصميم موحد",
    },
    {
        id: 5,
        title: "مطبوعات شركة عقارية",
        client: "شركة عقارات",
        category: "printing",
        image: "/images/advertising-flyers-brochures-tri-fold.webp",
        description: "بروشورات + ملفات عروض + بطاقات عمل",
    },
    {
        id: 6,
        title: "ستاندات معرض أغذية",
        client: "شركة أغذية",
        category: "exhibitions",
        image: "/images/roll-up-stand-banner-85x200.webp",
        description: "20 رول أب + 5 بوب أب للمعرض السنوي",
    },
];

export default function PortfolioPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16 lg:py-20">
                <div className="container mx-auto px-4 text-center">
                    <nav className="text-sm text-white/60 mb-4 justify-center flex">
                        <Link href="/" className="hover:text-white">الرئيسية</Link>
                        <span className="mx-2">/</span>
                        <span className="text-amber-400">أعمالنا</span>
                    </nav>

                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                        <span className="text-gradient">أعمالنا</span> تتحدث عنّا
                    </h1>

                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        أكثر من 50,000 مشروع منفذ بنجاح. استعرض بعض أعمالنا المميزة في مختلف المجالات.
                    </p>
                </div>
            </section>

            {/* Filter */}
            <section className="py-8 bg-white border-b sticky top-0 z-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat.id === "all"
                                    ? "bg-amber-500 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map((project) => (
                            <div key={project.id} className="card overflow-hidden group">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <GeoImage
                                        src={project.image}
                                        alt={`${project.title} - ${project.client} - بوابة الرواج جدة`}
                                        district={project.category === "exhibitions" ? "سوبر دوم" : project.category === "signage" ? "الكورنيش" : project.category === "branding" ? "التحلية" : "الروضة"}
                                        caption={`${project.title} - ${project.description}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 !rounded-none"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 z-10">
                                        <div className="text-white">
                                            <div className="text-sm text-amber-400 mb-1">{project.client}</div>
                                            <div className="font-bold text-lg">{project.title}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs text-amber-600 font-medium mb-2 uppercase">
                                        {CATEGORIES.find(c => c.id === project.category)?.name}
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 text-sm">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
                        <div>
                            <div className="text-4xl font-bold text-amber-500">50,000+</div>
                            <div className="text-gray-600">مشروع منفذ</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-amber-500">5,000+</div>
                            <div className="text-gray-600">عميل</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-amber-500">15+</div>
                            <div className="text-gray-600">سنة خبرة</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-amber-500">100%</div>
                            <div className="text-gray-600">رضا العملاء</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-amber-400 to-amber-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                        هل تريد مشروعاً مميزاً مثل هذه؟
                    </h2>
                    <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
                        تواصل معنا وأخبرنا عن فكرتك. سنحولها لواقع!
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
