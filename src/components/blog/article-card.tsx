import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

import { GeoImage } from "@/components/geo-image";
import type { ArticleMeta } from "@/lib/articles/meta";

/**
 * بطاقة مقال + شبكة البطاقات
 * ============================
 *
 * ⚠️ كان هذا الترميز مكرّراً حرفياً في ملفين: /blog و/blog/category/[slug].
 * ستون سطراً متطابقة في موضعين تعني أن كل تعديل يجب أن يُنفَّذ مرتين —
 * وأن نسيان أحدهما لا يُكتشف إلا بالعين. وقد حدث فعلاً: صفحة الفئة كانت
 * تُمرّر priority لأول ثلاث بطاقات مثل /blog رغم أنها ليست الصفحة الأولى
 * التي يراها الزائر عادةً.
 *
 * الآن مصدر واحد. الملفان اللذان يستخدمانه صارا أقصر بـ~٦٠ سطراً لكل منهما.
 */

const arDate = (iso: string) =>
    new Date(iso).toLocaleDateString("ar-SA-u-ca-gregory", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

interface ArticleCardProps {
    post: ArticleMeta;
    /**
     * ترتيب البطاقة في الشبكة.
     * الثلاث الأولى فقط تُحمَّل بأولوية — وهي وحدها التي تقع فوق الطيّة.
     * تمرير priority لكل البطاقات يُلغي معناه ويؤخّر LCP.
     */
    index: number;
    /** الصفحة الأولى وحدها ترفع أولوية أول ثلاث صور */
    eager?: boolean;
}

export function ArticleCard({ post, index, eager = true }: ArticleCardProps) {
    return (
        <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group flex flex-col">
            <Link
                href={`/blog/${post.slug}`}
                className="block relative aspect-[16/9] overflow-hidden"
            >
                <GeoImage
                    src={post.image}
                    alt={post.imageAlt}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                    priority={eager && index < 3}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 !rounded-none"
                />
                <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                </span>
            </Link>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <time dateTime={post.publishAt}>{arDate(post.publishAt)}</time>
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        {post.readTime}
                    </span>
                </div>

                <h2 className="font-bold text-gray-900 text-lg mb-3 leading-relaxed">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="group-hover:text-amber-600 transition-colors"
                    >
                        {post.title}
                    </Link>
                </h2>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
                    {post.excerpt}
                </p>

                <Link
                    href={`/blog/${post.slug}`}
                    className="text-amber-600 font-medium text-sm inline-flex items-center hover:text-amber-700"
                    aria-label={`اقرأ المقال: ${post.title}`}
                >
                    اقرأ المقال
                    <ArrowLeft className="mr-1 w-4 h-4" aria-hidden="true" />
                </Link>
            </div>
        </article>
    );
}

/** شبكة البطاقات — نفس التخطيط في كل قوائم المدونة */
export function ArticleGrid({
    posts,
    eager = true,
}: {
    posts: ArticleMeta[];
    eager?: boolean;
}) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
                <ArticleCard key={post.slug} post={post} index={i} eager={eager} />
            ))}
        </div>
    );
}
