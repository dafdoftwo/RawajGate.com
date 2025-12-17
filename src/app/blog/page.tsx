import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";

export const metadata: Metadata = {
    title: "المدونة | نصائح الطباعة والتسويق | بوابة الرواج",
    description: "مقالات ونصائح في الطباعة، التصميم، التسويق، والعلامات التجارية. تعلم كيف تختار أفضل الخامات وتصمم هوية ناجحة لمشروعك.",
    keywords: ["مدونة طباعة", "نصائح تصميم", "تسويق", "علامة تجارية", "بوابة الرواج"],
};

const BLOG_POSTS = [
    {
        id: 1,
        slug: "how-to-choose-business-card-paper",
        title: "كيف تختار ورق بطاقة العمل المناسب؟",
        excerpt: "دليل شامل لأنواع الورق والتشطيبات المتوفرة لبطاقات العمل. تعرف على الفرق بين الكوشيه والكتان والمخمل.",
        category: "مطبوعات",
        date: "2024-12-10",
        readTime: "5 دقائق",
        image: "/images/luxury-business-cards-printing-jeddah.webp",
    },
    {
        id: 2,
        slug: "vehicle-branding-tips",
        title: "5 نصائح قبل تغليف سيارتك",
        excerpt: "ما يجب معرفته قبل تغليف سيارتك: اختيار الفينيل، التصميم الفعال، العناية والصيانة.",
        category: "لوحات",
        date: "2024-12-05",
        readTime: "4 دقائق",
        image: "/images/commercial-vehicle-branding-car-wrapping-jeddah.webp",
    },
    {
        id: 3,
        slug: "exhibition-booth-mistakes",
        title: "7 أخطاء شائعة في تصميم أجنحة المعارض",
        excerpt: "تجنب هذه الأخطاء لتحقيق أقصى استفادة من مشاركتك في المعارض والفعاليات.",
        category: "معارض",
        date: "2024-11-28",
        readTime: "6 دقائق",
        image: "/images/exhibition-booth-fabrication-design-jeddah.webp",
    },
    {
        id: 4,
        slug: "logo-design-process",
        title: "رحلة تصميم الشعار: من الفكرة للتنفيذ",
        excerpt: "كيف يعمل المصممون المحترفون على تصميم شعار ناجح؟ تعرف على المراحل والأدوات.",
        category: "تصميم",
        date: "2024-11-20",
        readTime: "7 دقائق",
        image: "/images/client-meeting-office-al-rawaj-jeddah.webp",
    },
    {
        id: 5,
        slug: "promotional-gifts-guide",
        title: "دليل اختيار الهدايا الدعائية للشركات",
        excerpt: "كيف تختار الهدية المناسبة لعملائك؟ معايير الاختيار والميزانية المناسبة.",
        category: "هدايا",
        date: "2024-11-15",
        readTime: "5 دقائق",
        image: "/images/branded-notebooks-diaries-calendar-gift-sets.webp",
    },
    {
        id: 6,
        slug: "print-file-preparation",
        title: "كيف تجهز ملفك للطباعة بشكل صحيح؟",
        excerpt: "دليل Pre-Press: الدقة، الألوان، الخطوط، وBleed. تجنب أخطاء الطباعة الشائعة.",
        category: "مطبوعات",
        date: "2024-11-08",
        readTime: "6 دقائق",
        image: "/images/printing-machines-digital-offset-equipment.webp",
    },
];

const CATEGORIES = [
    { name: "الكل", count: 6 },
    { name: "مطبوعات", count: 2 },
    { name: "لوحات", count: 1 },
    { name: "معارض", count: 1 },
    { name: "تصميم", count: 1 },
    { name: "هدايا", count: 1 },
];

export default function BlogPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16 lg:py-20">
                <div className="container mx-auto px-4 text-center">
                    <nav className="text-sm text-white/60 mb-4 justify-center flex">
                        <Link href="/" className="hover:text-white">الرئيسية</Link>
                        <span className="mx-2">/</span>
                        <span className="text-amber-400">المدونة</span>
                    </nav>

                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                        <span className="text-gradient">المدونة</span>
                    </h1>

                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        مقالات ونصائح من خبراء الطباعة والتصميم. تعلم واستفد من خبرتنا!
                    </p>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="card p-6 sticky top-24">
                                <h3 className="font-bold text-gray-900 mb-4">التصنيفات</h3>
                                <ul className="space-y-2">
                                    {CATEGORIES.map((cat) => (
                                        <li key={cat.name}>
                                            <button className="flex items-center justify-between w-full text-gray-600 hover:text-amber-600 transition-colors">
                                                <span>{cat.name}</span>
                                                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                                                    {cat.count}
                                                </span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>

                        {/* Posts Grid */}
                        <div className="lg:col-span-3">
                            <div className="grid md:grid-cols-2 gap-8">
                                {BLOG_POSTS.map((post) => (
                                    <article key={post.id} className="card overflow-hidden group">
                                        <div className="relative aspect-[16/9] overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4">
                                                <span className="bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {new Date(post.date).toLocaleDateString('ar-SA')}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <h2 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-amber-600 transition-colors">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="text-amber-600 font-medium text-sm inline-flex items-center hover:text-amber-700"
                                            >
                                                اقرأ المزيد
                                                <ArrowLeft className="mr-1 w-4 h-4" />
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Load More */}
                            <div className="text-center mt-12">
                                <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                    عرض المزيد
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                            اشترك في نشرتنا البريدية
                        </h2>
                        <p className="text-gray-600 mb-6">
                            احصل على آخر المقالات والنصائح مباشرة في بريدك الإلكتروني.
                        </p>
                        <form className="flex gap-3">
                            <input
                                type="email"
                                placeholder="بريدك الإلكتروني"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
                            >
                                اشترك
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
