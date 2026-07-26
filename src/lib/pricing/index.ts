/**
 * نقطة الدخول لبيانات التسعير.
 *
 * ⚡ الصفحات الفرعية (/prices/[slug]) تستورد من هنا لكن Next.js يقسّم
 * الحزم تلقائياً حسب ما تستخدمه كل صفحة فعلياً. الملفات مقسّمة لتسهيل
 * الصيانة ولتفادي ملف واحد بـ500 سطر.
 */

import type { PricingBlock } from "./types";
import { BUSINESS_CARDS_PRICING } from "./business-cards";
import { ROLL_UP_PRICING } from "./roll-up-stands";
import { EXHIBITION_BOOTHS_PRICING } from "./exhibition-booths";
import { VEHICLE_WRAPPING_PRICING } from "./vehicle-wrapping";
import { SHOP_SIGNAGE_PRICING } from "./shop-signage";

export type { PricingBlock, PriceTier } from "./types";
export {
    PRICING_LAST_REVIEWED,
    PRICING_CURRENCY,
    PRICING_CURRENCY_AR,
    formatRange,
    formatFrom,
} from "./types";

export {
    BUSINESS_CARDS_PRICING,
    ROLL_UP_PRICING,
    EXHIBITION_BOOTHS_PRICING,
    VEHICLE_WRAPPING_PRICING,
    SHOP_SIGNAGE_PRICING,
};

export const PRICING_BLOCKS: PricingBlock[] = [
    BUSINESS_CARDS_PRICING,
    ROLL_UP_PRICING,
    EXHIBITION_BOOTHS_PRICING,
    VEHICLE_WRAPPING_PRICING,
    SHOP_SIGNAGE_PRICING,
];

export function getPricingBlock(slug: string): PricingBlock | undefined {
    return PRICING_BLOCKS.find((b) => b.slug === slug);
}
