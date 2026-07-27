/**
 * تقسيم قوائم المقالات إلى صفحات
 * ================================
 *
 * ⚠️ لماذا هذا الملف موجود؟
 *
 * كانت /blog تعرض **كل** المقالات المنشورة في صفحة واحدة. بخمسة مقالات
 * كان حجمها ١٣٢ KB — مقبول. لكن المقالات تُنشر تلقائياً كل يومين، وبقياس
 * النمو الفعلي (~٢٢ KB لكل بطاقة مقال في HTML):
 *
 *      ٥٠ مقالاً منشوراً  →  ~١.١ MB
 *      ٩٠ مقالاً (فبراير ٢٠٢٧) →  ~٢ MB
 *     ٣٠٠ مقالاً  →  ~٦.٧ MB
 *
 * أي أن الصفحة كانت ستصير ميغابايتين **بلا أن يفعل أحد شيئاً** — يكفي
 * أن يمرّ الوقت. هذا النوع من الأعطال لا يظهر في أي اختبار اليوم.
 *
 * التقسيم يثبّت حجم الصفحة عند ١٢ بطاقة مهما بلغ عدد المقالات.
 */

/**
 * ١٢ بطاقة: مضاعف مشترك لشبكات ٢ و٣ أعمدة، فلا يبقى صف ناقص على أي مقاس.
 * تقديرياً ~٦٠ KB للصفحة — يبقى ثابتاً مع نمو المدونة.
 */
export const PER_PAGE = 12;

export interface Page<T> {
    /** عناصر هذه الصفحة فقط */
    items: T[];
    /** رقم الصفحة الحالي (يبدأ من ١) */
    page: number;
    /** إجمالي الصفحات — ١ على الأقل حتى لو كانت القائمة فارغة */
    totalPages: number;
    /** إجمالي العناصر قبل التقسيم */
    total: number;
    hasPrev: boolean;
    hasNext: boolean;
}

/** يقسّم مصفوفة إلى صفحة واحدة. `page` خارج المدى يُثبَّت داخله. */
export function paginate<T>(items: T[], page = 1, perPage = PER_PAGE): Page<T> {
    const total = items.length;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    const current = Math.min(Math.max(1, Math.floor(page) || 1), totalPages);
    const start = (current - 1) * perPage;

    return {
        items: items.slice(start, start + perPage),
        page: current,
        totalPages,
        total,
        hasPrev: current > 1,
        hasNext: current < totalPages,
    };
}

/**
 * رابط صفحة ضمن قائمة.
 *
 * ⚠️ الصفحة الأولى تُرجع المسار الأساس لا `/page/1`.
 * وجود عنوانين لنفس المحتوى (`/blog/` و`/blog/page/1/`) يعني محتوى
 * مكرراً في عين محرك البحث، ويشتّت قوة الروابط بين نسختين.
 *
 *   pageHref("/blog", 1) → "/blog"
 *   pageHref("/blog", 3) → "/blog/page/3"
 */
export function pageHref(base: string, page: number): string {
    const clean = base.replace(/\/+$/, "");
    return page <= 1 ? clean : `${clean}/page/${page}`;
}

/**
 * أرقام الصفحات المعروضة في شريط التنقّل، مع `null` مكان الاختصار «…».
 *
 * دائماً: الأولى · الأخيرة · الحالية وجارتاها.
 * فمع ٤٠ صفحة يبقى الشريط قصيراً بدل أن يمتد بأربعين رقماً:
 *   ١ … ١٧ [١٨] ١٩ … ٤٠
 */
export function pageNumbers(current: number, totalPages: number): (number | null)[] {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const shown = new Set<number>([1, totalPages, current]);
    if (current - 1 > 1) shown.add(current - 1);
    if (current + 1 < totalPages) shown.add(current + 1);

    const sorted = [...shown].sort((a, b) => a - b);
    const out: (number | null)[] = [];
    let prev = 0;
    for (const n of sorted) {
        if (prev && n - prev > 1) out.push(null);
        out.push(n);
        prev = n;
    }
    return out;
}

/**
 * أرقام الصفحات ٢..N — لما يحتاج الصفحات الإضافية فقط (الـ sitemap مثلاً).
 * تُرجع مصفوفة فارغة حين تكفي صفحة واحدة.
 */
export function extraPageParams(total: number, perPage = PER_PAGE): string[] {
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => String(i + 2));
}

/**
 * كل أرقام الصفحات ١..N — لتوليد المسارات الثابتة.
 *
 * ⚠️ لماذا تشمل الصفحة ١ رغم أن مسارها الحقيقي هو الأساس (`/blog`)؟
 *
 * لأن `output: "export"` يرفض أي مسار ديناميكي يُرجع
 * `generateStaticParams()` له مصفوفة فارغة، ويُفشل البناء برسالة
 * «missing generateStaticParams». وذلك يحدث كلما كفت صفحة واحدة —
 * أي طوال الأسابيع الأولى للمدونة، وأيضاً لأي تصنيف صغير مهما كبر
 * الموقع. عطل يظهر ويختفي حسب عدد المقالات المنشورة في لحظة البناء،
 * وهو أسوأ ما يمكن أن يُبنى عليه.
 *
 * فتُولَّد `/blog/page/1` دائماً، ويُعالَج تكرارها بثلاث طبقات:
 *   • canonical فيها يشير إلى المسار الأساس — الإشارة الحاسمة لجوجل
 *   • مستبعدة من الـ sitemap
 *   • `pageHref` لا يبني رابطاً إليها أبداً، فلا شيء في الموقع يقود إليها
 */
export function allPageParams(total: number, perPage = PER_PAGE): string[] {
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    return Array.from({ length: totalPages }, (_, i) => String(i + 1));
}
