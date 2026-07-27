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
    "sustainable-printing": () =>
        import("./posts/sustainable-printing").then((m) => m.sustainablePrinting),
    "print-troubleshooting": () =>
        import("./posts/print-troubleshooting").then((m) => m.printTroubleshooting),
    "cmyk-vs-rgb-deep": () =>
        import("./posts/cmyk-vs-rgb-deep").then((m) => m.cmykVsRgbDeep),
    "graduation-printing": () =>
        import("./posts/graduation-printing").then((m) => m.graduationPrinting),
    "winter-events-printing": () =>
        import("./posts/winter-events-printing").then((m) => m.winterEventsPrinting),
    "summer-outdoor-signage": () =>
        import("./posts/summer-outdoor-signage").then((m) => m.summerOutdoorSignage),
    "eid-corporate-gifts": () =>
        import("./posts/eid-corporate-gifts").then((m) => m.eidCorporateGifts),
    "back-to-school-printing": () =>
        import("./posts/back-to-school-printing").then((m) => m.backToSchoolPrinting),
    "ecommerce-packaging": () =>
        import("./posts/ecommerce-packaging").then((m) => m.ecommercePackaging),
    "startup-branding-kit": () =>
        import("./posts/startup-branding-kit").then((m) => m.startupBrandingKit),
    "hotel-hospitality-printing": () =>
        import("./posts/hotel-hospitality-printing").then((m) => m.hotelHospitalityPrinting),
    "logistics-printing": () =>
        import("./posts/logistics-printing").then((m) => m.logisticsPrinting),
    "contracting-company-printing": () =>
        import("./posts/contracting-company-printing").then((m) => m.contractingCompanyPrinting),
    "retail-store-printing": () =>
        import("./posts/retail-store-printing").then((m) => m.retailStorePrinting),
    "law-firm-printing": () =>
        import("./posts/law-firm-printing").then((m) => m.lawFirmPrinting),
    "salon-spa-printing": () =>
        import("./posts/salon-spa-printing").then((m) => m.salonSpaPrinting),
    "gym-fitness-printing": () =>
        import("./posts/gym-fitness-printing").then((m) => m.gymFitnessPrinting),
    "business-card-styles": () =>
        import("./posts/business-card-styles").then((m) => m.businessCardStyles),
    "banner-sizes-guide": () =>
        import("./posts/banner-sizes-guide").then((m) => m.bannerSizesGuide),
    "file-formats-guide": () =>
        import("./posts/file-formats-guide").then((m) => m.fileFormatsGuide),
    "uniform-fabrics-guide": () =>
        import("./posts/uniform-fabrics-guide").then((m) => m.uniformFabricsGuide),
    "promotional-gifts-catalog": () =>
        import("./posts/promotional-gifts-catalog").then((m) => m.promotionalGiftsCatalog),
    "packaging-materials-guide": () =>
        import("./posts/packaging-materials-guide").then((m) => m.packagingMaterialsGuide),
    "jeddah-districts-guide": () =>
        import("./posts/jeddah-districts-guide").then((m) => m.jeddahDistrictsGuide),
    "stage-backdrop-guide": () =>
        import("./posts/stage-backdrop-guide").then((m) => m.stageBackdropGuide),
    "print-budget-planning": () =>
        import("./posts/print-budget-planning").then((m) => m.printBudgetPlanning),
    "arabic-typography-guide": () =>
        import("./posts/arabic-typography-guide").then((m) => m.arabicTypographyGuide),
    "color-psychology-branding": () =>
        import("./posts/color-psychology-branding").then((m) => m.colorPsychologyBranding),
    "booth-staff-training": () =>
        import("./posts/booth-staff-training").then((m) => m.boothStaffTraining),
    "product-label-compliance": () =>
        import("./posts/product-label-compliance").then((m) => m.productLabelCompliance),
    "brochure-design-guide": () =>
        import("./posts/brochure-design-guide").then((m) => m.brochureDesignGuide),
    "choose-booth-location": () =>
        import("./posts/choose-booth-location").then((m) => m.chooseBoothLocation),
    "inhouse-vs-outsource-design": () =>
        import("./posts/inhouse-vs-outsource-design").then((m) => m.inhouseVsOutsourceDesign),
    "roll-vs-sheet-labels": () =>
        import("./posts/roll-vs-sheet-labels").then((m) => m.rollVsSheetLabels),
    "full-vs-partial-wrap": () =>
        import("./posts/full-vs-partial-wrap").then((m) => m.fullVsPartialWrap),
    "led-vs-neon-signage": () =>
        import("./posts/led-vs-neon-signage").then((m) => m.ledVsNeonSignage),
    "glossy-vs-matte-lamination": () =>
        import("./posts/glossy-vs-matte-lamination").then((m) => m.glossyVsMatteLamination),
    "laser-vs-print-gifts": () =>
        import("./posts/laser-vs-print-gifts").then((m) => m.laserVsPrintGifts),
    "rollup-vs-xbanner": () =>
        import("./posts/rollup-vs-xbanner").then((m) => m.rollupVsXbanner),
    "wall-decals-price-jeddah": () =>
        import("./posts/wall-decals-price-jeddah").then((m) => m.wallDecalsPriceJeddah),
    "paper-bags-price-jeddah": () =>
        import("./posts/paper-bags-price-jeddah").then((m) => m.paperBagsPriceJeddah),
    "menu-price-jeddah": () =>
        import("./posts/menu-price-jeddah").then((m) => m.menuPriceJeddah),
    "letterhead-price-jeddah": () =>
        import("./posts/letterhead-price-jeddah").then((m) => m.letterheadPriceJeddah),
    "folders-price-jeddah": () =>
        import("./posts/folders-price-jeddah").then((m) => m.foldersPriceJeddah),
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
