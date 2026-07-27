/**
 * خريطة تصنيفات المدونة: الاسم العربي ↔ المقطع الإنجليزي في الرابط
 * ================================================================
 *
 * ⚠️ كانت هذه الخريطة معرّفة داخل `src/app/blog/category/[slug]/page.tsx`،
 * وكانت `src/app/blog/page.tsx` تستوردها من هناك — أي أن صفحة تستورد من
 * صفحة أخرى. ذلك يسحب كامل شجرة الصفحة الثانية (ومنها مكوّناتها وبياناتها)
 * إلى حزمة الأولى، ويفتح باب دورات الاستيراد عند أول توسّع.
 *
 * الآن وحدة بيانات محايدة لا تستورد شيئاً، فتستطيع كل الصفحات أخذها بأمان.
 *
 * ⚠️ عند إضافة تصنيف جديد: أضِفه هنا **وفي** حقل category داخل ملف المقال.
 * التصنيف الذي لا يملك مقطعاً هنا يُسقَط بصمت من شريط الفلترة.
 */
export const CATEGORY_SLUGS: Record<string, string> = {
    "أسعار": "prices",
    "مقارنات": "comparisons",
    "أدلة إرشادية": "guides",
    "مرجعي": "reference",
    "مطبوعات": "printing",
    "لافتات": "signage",
    "معارض": "exhibitions",
    "هدايا": "gifts",
    "تصميم": "design",
    "موسمي": "seasonal",
};

/** المقطع الإنجليزي ← الاسم العربي */
export const SLUG_TO_CATEGORY: Record<string, string> = Object.fromEntries(
    Object.entries(CATEGORY_SLUGS).map(([ar, en]) => [en, ar])
);

/** كل المقاطع — لتوليد المسارات الثابتة */
export const ALL_CATEGORY_SLUGS: string[] = Object.values(CATEGORY_SLUGS);
