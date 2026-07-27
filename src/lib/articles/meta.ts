/**
 * فهرس المقالات الخفيف (Metadata فقط)
 * =====================================
 *
 * ⚡ لماذا هذا الملف منفصل عن محتوى المقالات؟
 *
 * المعمارية السابقة كانت تستورد كل المقالات استاتيكياً في registry.ts.
 * مع 10 مقالات كان الحمل مقبولاً، لكن مع 90 مقالاً (الهدف) فإن أي صفحة
 * تعرض قائمة — /blog، sitemap، الروابط ذات الصلة — كانت ستُحمّل
 * ~500 KB من نصوص المقالات في الذاكرة لتعرض عناوين فقط.
 *
 * الحل: فصل الطبقتين
 *   • هذا الملف: بيانات خفيفة (عنوان، تاريخ، تصنيف) — بضعة كيلوبايتات
 *   • posts/*.ts: المحتوى الكامل — يُحمَّل ديناميكياً لمقال واحد فقط
 *
 * ⚠️ هذا الملف **مولَّد آلياً**. لا تعدّله يدوياً.
 *    شغّل: node scripts/generate-article-meta.mjs
 */

import type { ArticleCategory, ArticleIntent } from "./types";

export interface ArticleMeta {
    slug: string;
    title: string;
    seoTitle?: string;
    excerpt: string;
    category: ArticleCategory;
    intent: ArticleIntent;
    publishAt: string;
    dateModified: string;
    author: string;
    authorRole?: string;
    image: string;
    imageAlt: string;
    readTime: string;
    /** الكلمة المفتاحية الرئيسية — تُستخدم في الروابط ذات الصلة */
    primaryKeyword: string;
}

/* ⬇️ AUTO-GENERATED — start */
import { META_2026_07 } from "./index/2026_07";
import { META_2026_08 } from "./index/2026_08";
import { META_2026_09 } from "./index/2026_09";
import { META_2026_10 } from "./index/2026_10";
import { META_2026_11 } from "./index/2026_11";
import { META_2026_12 } from "./index/2026_12";
import { META_2027_01 } from "./index/2027_01";
import { META_2027_02 } from "./index/2027_02";

/**
 * كل المقالات، مرتّبة من الأحدث إلى الأقدم.
 * مجمَّعة من شظايا index/ — راجع رأس هذا الملف.
 */
export const ARTICLE_META: ArticleMeta[] = [
    ...META_2026_07,
    ...META_2026_08,
    ...META_2026_09,
    ...META_2026_10,
    ...META_2026_11,
    ...META_2026_12,
    ...META_2027_01,
    ...META_2027_02,
]
    .slice()
    .sort((a, b) => +new Date(b.publishAt) - +new Date(a.publishAt));
/* ⬆️ AUTO-GENERATED — end */

/* ══════════════════════════════════════════════════════════
   منطق النشر المجدول — يعمل على الـ metadata وحدها (خفيف)
   ══════════════════════════════════════════════════════════ */

export function isPublished(meta: ArticleMeta, now: Date = new Date()): boolean {
    return new Date(meta.publishAt).getTime() <= now.getTime();
}

/** المقالات المنشورة، الأحدث أولاً */
export function getPublishedMeta(now: Date = new Date()): ArticleMeta[] {
    return ARTICLE_META.filter((m) => isPublished(m, now)).sort(
        (a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime()
    );
}

export function getMeta(slug: string): ArticleMeta | undefined {
    return ARTICLE_META.find((m) => m.slug === slug);
}

/**
 * slugs المقالات **المنشورة فقط** — للتوليد الساكن.
 *
 * ⚠️ كانت تُرجع الـ90 كلها، فيُولَّد ملف HTML لكل مقال مجدول أيضاً.
 * وبما أن صفحة المقال تستدعي notFound() لما لم يحن موعده، كان الناتج
 * ٨٥ ملفاً يحوي صفحة «غير موجودة» — لكن الملف موجود، فتخدمه Cloudflare
 * بالرمز **200**.
 *
 * أي أن الموقع كان يُقدّم ٨٥ عنواناً تقول «٢٠٠ تمام» ومحتواها «غير
 * موجودة». هذا تعريف soft 404، وجوجل يرصده ويحتسبه على جودة الموقع
 * كلها لا على تلك الصفحات وحدها. ووسم noindex يمنع الفهرسة لكنه لا
 * يمنع الزحف ولا يُصلح تناقض الرمز مع المحتوى.
 *
 * بإرجاع المنشور فقط، لا يُولَّد ملف أصلاً، فتُرجع Cloudflare 404
 * حقيقياً — كما تفعل مع أي مسار غير موجود.
 *
 * وهذا لا يؤخّر نشر أي مقال: البناء التالي بعد حلول موعده يُولّده.
 * تلك هي آلية الجدولة نفسها (راجع scripts/check-due-articles.mjs).
 */
export function getAllSlugs(): string[] {
    return getPublishedMeta().map((m) => m.slug);
}

/** كل الـ slugs بما فيها المجدولة — للأدوات والتقارير لا للتوليد */
export function getEverySlug(): string[] {
    return ARTICLE_META.map((m) => m.slug);
}

/**
 * هل يصلح هذا المسار الداخلي لأن يكون رابطاً الآن؟
 *
 * ⚠️ المرجع الوحيد لهذا القرار — يستخدمه عارض الماركداون وصفحة المقال
 * معاً. تكرار المنطق في موضعين يعني أن أحدهما سيُنسى عند أول تعديل.
 *
 * المقالات تُنشر على مدى شهور، والمقال المنشور اليوم قد يشير إلى مقال
 * موعده سبتمبر — وصفحته لا تُولَّد قبل موعده، فالرابط إليها 404.
 * ما عدا مقالات المدونة (صفحات الخدمات والأسعار) دائم فيمرّ دائماً.
 */
export function canLinkTo(href: string, now: Date = new Date()): boolean {
    const m = href.match(/^\/blog\/([a-z0-9-]+)\/?$/);
    if (!m) return true;
    const meta = getMeta(m[1]);
    return Boolean(meta && isPublished(meta, now));
}

/** مقالات ذات صلة — يعمل على metadata فقط، بلا تحميل أي محتوى */
export function getRelatedMeta(
    slug: string,
    limit = 3,
    now: Date = new Date()
): ArticleMeta[] {
    const current = getMeta(slug);
    if (!current) return [];

    const published = getPublishedMeta(now).filter((m) => m.slug !== slug);
    const sameCategory = published.filter((m) => m.category === current.category);
    const sameIntent = published.filter(
        (m) => m.category !== current.category && m.intent === current.intent
    );

    return [...sameCategory, ...sameIntent, ...published]
        .filter((m, i, arr) => arr.findIndex((x) => x.slug === m.slug) === i)
        .slice(0, limit);
}

/** التصنيفات النشطة مع العدد */
export function getActiveCategories(now: Date = new Date()) {
    const counts = new Map<string, number>();
    for (const m of getPublishedMeta(now)) {
        counts.set(m.category, (counts.get(m.category) ?? 0) + 1);
    }
    return [...counts.entries()].map(([category, count]) => ({ category, count }));
}

export function getBlogStats(now: Date = new Date()) {
    const published = getPublishedMeta(now);
    return {
        published: published.length,
        upcoming: ARTICLE_META.length - published.length,
        total: ARTICLE_META.length,
        categories: getActiveCategories(now).length,
    };
}
