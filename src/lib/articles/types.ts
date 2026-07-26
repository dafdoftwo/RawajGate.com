/**
 * نظام المقالات — الأنواع الأساسية
 * ==================================
 *
 * مصمَّم ليتوسّع إلى 90+ مقالاً بدون أن يصبح ملفاً واحداً عملاقاً.
 * كل مقال في ملف مستقل تحت src/lib/articles/posts/
 *
 * ما يميّز هذا النظام:
 *   • جدولة نشر حقيقية (publishAt) — المقال لا يظهر قبل موعده
 *   • بيانات SEO/AEO/GEO منظّمة لكل مقال (لا تخمين وقت التصيير)
 *   • روابط داخلية مُعرَّفة صراحة — تُصيَّر في كتلة موحّدة أسفل كل مقال
 *   • أسئلة FAQ لكل مقال — تُغذّي FAQPage schema وصفحة /faq
 */

export type ArticleCategory =
    | "أسعار"
    | "أدلة إرشادية"
    | "مقارنات"
    | "مطبوعات"
    | "لافتات"
    | "معارض"
    | "هدايا"
    | "تصميم"
    | "مرجعي"
    | "موسمي";

export type ArticleIntent =
    /** «كم سعر…» — نية تجارية عالية */
    | "transactional"
    /** «كيف…» «ما الفرق…» — نية تعليمية */
    | "informational"
    /** «أفضل…» «مقارنة…» — نية بحث تجاري */
    | "commercial"
    /** «اشتراطات…» «دليل…» — نية مرجعية (تجلب backlinks) */
    | "reference";

export interface ArticleKeywords {
    /** الكلمة المفتاحية الرئيسية — تظهر في H1 والفقرة الأولى */
    primary: string;
    /** كلمات ثانوية — تظهر في H2/H3 */
    secondary: string[];
    /**
     * كلمات long-tail — الأهم للسوق السعودي.
     * استعلامات 4+ كلمات بمنافسة أقل ونية أوضح.
     */
    longTail: string[];
    /** كيانات دلالية يجب ذكرها (Semantic SEO) */
    entities: string[];
}

export interface ArticleFAQ {
    question: string;
    answer: string;
}

export interface ArticleInternalLink {
    /** المسار الداخلي */
    href: string;
    /** نص الرابط — يجب أن يكون وصفياً لا «اضغط هنا» */
    anchor: string;
    /** لماذا هذا الرابط ذو صلة — يظهر للمستخدم */
    context: string;
}

export interface Article {
    slug: string;
    title: string;
    /** عنوان SEO إن اختلف عن العنوان المعروض (≤ 45 حرفاً) */
    seoTitle?: string;
    excerpt: string;
    category: ArticleCategory;
    intent: ArticleIntent;

    /**
     * ⏰ موعد النشر المجدول (ISO 8601 بتوقيت السعودية +03:00).
     * المقال **لا يظهر** في المدونة ولا في sitemap قبل هذا الوقت.
     * التوقيتات موزّعة عشوائياً خلال اليوم لمحاكاة نشر بشري طبيعي.
     */
    publishAt: string;

    /** آخر مراجعة حقيقية للمحتوى */
    dateModified: string;

    author: string;
    authorRole?: string;

    /** صورة الغلاف */
    image: string;
    imageAlt: string;

    readTime: string;

    keywords: ArticleKeywords;

    /**
     * 🎯 الإجابة المباشرة — أول 40-60 كلمة.
     * هذه الفقرة تحديداً هي ما تقتبسه Featured Snippets و ChatGPT و Perplexity.
     * قاعدة: ابدأ بإعادة صياغة السؤال، ثم رقم محدد، بلا تسويق.
     */
    directAnswer: string;

    /** الروابط الداخلية السياقية */
    internalLinks: ArticleInternalLink[];

    /** أسئلة شائعة — تُغذّي FAQPage schema */
    faqs: ArticleFAQ[];

    /** محتوى المقال بصيغة Markdown مبسّطة */
    content: string;

    /** إن كان دليلاً إرشادياً — يُفعّل HowTo schema */
    howTo?: {
        totalTime: string;
        steps: { name: string; text: string }[];
    };
}
