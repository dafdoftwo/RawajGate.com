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
    "year-end-print-planning": () =>
        import("./posts/year-end-print-planning").then((m) => m.yearEndPrintPlanning),
    "national-day-printing": () =>
        import("./posts/national-day-printing").then((m) => m.nationalDayPrinting),
    "ramadan-corporate-gifts": () =>
        import("./posts/ramadan-corporate-gifts").then((m) => m.ramadanCorporateGifts),
    "education-printing": () =>
        import("./posts/education-printing").then((m) => m.educationPrinting),
    "real-estate-printing": () =>
        import("./posts/real-estate-printing").then((m) => m.realEstatePrinting),
    "cafe-restaurant-printing": () =>
        import("./posts/cafe-restaurant-printing").then((m) => m.cafeRestaurantPrinting),
    "medical-clinic-printing": () =>
        import("./posts/medical-clinic-printing").then((m) => m.medicalClinicPrinting),
    "print-finishes-guide": () =>
        import("./posts/print-finishes-guide").then((m) => m.printFinishesGuide),
    "exhibition-stands-sizes": () =>
        import("./posts/exhibition-stands-sizes").then((m) => m.exhibitionStandsSizes),
    "pantone-colors-guide": () =>
        import("./posts/pantone-colors-guide").then((m) => m.pantoneColorsGuide),
    "printing-glossary-arabic": () =>
        import("./posts/printing-glossary-arabic").then((m) => m.printingGlossaryArabic),
    "signage-materials-reference": () =>
        import("./posts/signage-materials-reference").then((m) => m.signageMaterialsReference),
    "print-campaign-planning": () =>
        import("./posts/print-campaign-planning").then((m) => m.printCampaignPlanning),
    "signage-maintenance-guide": () =>
        import("./posts/signage-maintenance-guide").then((m) => m.signageMaintenanceGuide),
    "write-design-brief": () =>
        import("./posts/write-design-brief").then((m) => m.writeDesignBrief),
    "vehicle-wrap-design-guide": () =>
        import("./posts/vehicle-wrap-design-guide").then((m) => m.vehicleWrapDesignGuide),
    "gift-selection-by-occasion": () =>
        import("./posts/gift-selection-by-occasion").then((m) => m.giftSelectionByOccasion),
    "design-business-card-guide": () =>
        import("./posts/design-business-card-guide").then((m) => m.designBusinessCardGuide),
    "kraft-vs-coated-packaging": () =>
        import("./posts/kraft-vs-coated-packaging").then((m) => m.kraftVsCoatedPackaging),
    "rent-vs-buy-booth": () =>
        import("./posts/rent-vs-buy-booth").then((m) => m.rentVsBuyBooth),
    "vinyl-brands-comparison": () =>
        import("./posts/vinyl-brands-comparison").then((m) => m.vinylBrandsComparison),
    "signage-materials-comparison": () =>
        import("./posts/signage-materials-comparison").then((m) => m.signageMaterialsComparison),
    "embroidery-vs-heat-transfer": () =>
        import("./posts/embroidery-vs-heat-transfer").then((m) => m.embroideryVsHeatTransfer),
    "popup-vs-mediawall": () =>
        import("./posts/popup-vs-mediawall").then((m) => m.popupVsMediawall),
    "logo-design-price-saudi": () =>
        import("./posts/logo-design-price-saudi").then((m) => m.logoDesignPriceSaudi),
    "outdoor-banners-price-jeddah": () =>
        import("./posts/outdoor-banners-price-jeddah").then((m) => m.outdoorBannersPriceJeddah),
    "product-labels-price-jeddah": () =>
        import("./posts/product-labels-price-jeddah").then((m) => m.productLabelsPriceJeddah),
    "uniform-embroidery-price-jeddah": () =>
        import("./posts/uniform-embroidery-price-jeddah").then((m) => m.uniformEmbroideryPriceJeddah),
    "ncr-books-price-jeddah": () =>
        import("./posts/ncr-books-price-jeddah").then((m) => m.ncrBooksPriceJeddah),
    "flyers-brochures-price-jeddah": () =>
        import("./posts/flyers-brochures-price-jeddah").then((m) => m.flyersBrochuresPriceJeddah),
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
