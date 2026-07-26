import "server-only";

import type { Article } from "./types";
import { getMeta, isPublished } from "./meta";

/**
 * محمّل المحتوى الكسول
 * =====================
 *
 * ⚡ الفكرة الأساسية:
 * لا يُحمَّل محتوى المقال إلا حين تُصيَّر صفحته تحديداً. صفحة القائمة
 * وsitemap والروابط ذات الصلة تعمل كلها على meta.ts الخفيف.
 *
 * الفرق العملي مع 90 مقالاً:
 *   • قبل: كل استيراد من registry يجلب ~500 KB نصوص
 *   • بعد: صفحة القائمة تجلب ~8 KB، وصفحة المقال تجلب ~8 KB + مقالها فقط
 *
 * `server-only` يضمن أن هذا الملف لا يُستورد بالخطأ في مكوّن عميل.
 */

/**
 * خريطة الـ slug → دالة استيراد ديناميكي.
 *
 * ⚠️ عند إضافة مقال جديد:
 *   1. أنشئ الملف في posts/
 *   2. أضِف بياناته في meta.ts
 *   3. أضِف سطراً هنا
 *
 * لماذا خريطة صريحة بدل import(`./posts/${slug}`)؟
 * لأن الاستيراد الديناميكي بمسار متغيّر يجعل المُجمِّع يضمّن **كل** الملفات
 * في المجلد احتياطاً — فنفقد الفائدة كاملة. الخريطة الصريحة تسمح بتقسيم
 * حقيقي للحزم (code-splitting).
 */
const LOADERS: Record<string, () => Promise<Article>> = {
    "restaurant-menu-guide": () =>
        import("./posts/restaurant-menu-guide").then((m) => m.restaurantMenuGuide),
    "brand-identity-guide": () =>
        import("./posts/brand-identity-guide").then((m) => m.brandIdentityGuide),
    "promotional-gifts-guide": () =>
        import("./posts/promotional-gifts-guide").then((m) => m.promotionalGiftsGuide),
    "saudi-exhibitions-calendar": () =>
        import("./posts/saudi-exhibitions-calendar").then((m) => m.saudiExhibitionsCalendar),
    "choose-printing-company-jeddah": () =>
        import("./posts/choose-printing-company-jeddah").then((m) => m.choosePrintingCompanyJeddah),
    "octanorm-vs-custom-booth": () =>
        import("./posts/octanorm-vs-custom-booth").then((m) => m.octanormVsCustomBooth),
    "shop-signage-price-jeddah": () =>
        import("./posts/shop-signage-price-jeddah").then((m) => m.shopSignagePriceJeddah),
    "paper-weight-size-guide": () =>
        import("./posts/paper-weight-size-guide").then((m) => m.paperWeightSizeGuide),
    "coated-vs-linen-paper": () =>
        import("./posts/coated-vs-linen-paper").then((m) => m.coatedVsLinenPaper),
    "prepare-print-file-guide": () =>
        import("./posts/prepare-print-file-guide").then((m) => m.preparePrintFileGuide),
    "vehicle-wrapping-price-jeddah": () =>
        import("./posts/vehicle-wrapping-price-jeddah").then((m) => m.vehicleWrappingPriceJeddah),
    "exhibition-booth-cost-saudi": () =>
        import("./posts/exhibition-booth-cost-saudi").then((m) => m.exhibitionBoothCostSaudi),
    "offset-vs-digital-printing": () =>
        import("./posts/offset-vs-digital-printing").then((m) => m.offsetVsDigitalPrinting),
    "roll-up-stand-price-jeddah": () =>
        import("./posts/roll-up-stand-price-jeddah").then((m) => m.rollUpStandPriceJeddah),
    "shop-signage-municipality-rules-jeddah": () =>
        import("./posts/shop-signage-municipality-rules").then((m) => m.shopSignageMunicipalityRules),
    "business-cards-price-jeddah": () =>
        import("./posts/business-cards-price-jeddah").then((m) => m.businessCardsPriceJeddah),
};

/**
 * حمّل مقالاً كاملاً — يحترم موعد النشر.
 * يُرجع null إن كان المقال غير موجود أو لم يحن موعده بعد.
 */
export async function loadArticle(
    slug: string,
    now: Date = new Date()
): Promise<Article | null> {
    const meta = getMeta(slug);
    if (!meta || !isPublished(meta, now)) return null;

    const loader = LOADERS[slug];
    if (!loader) return null;

    return loader();
}

/** هل يوجد محمّل لهذا المقال؟ — للتحقق أثناء التطوير */
export function hasLoader(slug: string): boolean {
    return slug in LOADERS;
}

/** كل الـ slugs التي لها محمّل فعلي */
export function getLoadableSlugs(): string[] {
    return Object.keys(LOADERS);
}
