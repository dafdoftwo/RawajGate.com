import {
    Printer,
    Signpost,
    CalendarDays,
    Gift,
    Palette,
    type LucideIcon,
} from "lucide-react";

export interface NavItem {
    title: string;
    titleEn: string;
    href: string;
    icon: LucideIcon;
    description: string;
    items: { title: string; href: string }[];
}

/** بنية التنقل — تطابق الـ silo architecture في lib/routes.ts */
export const NAVIGATION: NavItem[] = [
    {
        title: "مطبوعات تجارية",
        titleEn: "Commercial Printing",
        href: "/commercial-printing",
        icon: Printer,
        description: "بطاقات العمل، البروشورات، والمطبوعات الرسمية",
        items: [
            { title: "بطاقات العمل", href: "/commercial-printing/business-cards" },
            { title: "فلايرات وبروشورات", href: "/commercial-printing/flyers-brochures" },
            { title: "ملفات العروض", href: "/commercial-printing/folders" },
            { title: "ورق رسمي وظروف", href: "/commercial-printing/letterheads" },
            { title: "دفاتر فواتير NCR", href: "/commercial-printing/ncr-books" },
            { title: "قوائم الطعام", href: "/commercial-printing/menus" },
        ],
    },
    {
        title: "لوحات وملصقات",
        titleEn: "Signage & Stickers",
        href: "/signage-stickers",
        icon: Signpost,
        description: "لافتات المحلات، الملصقات، وتغليف السيارات",
        items: [
            { title: "ملصقات المنتجات", href: "/signage-stickers/product-labels" },
            { title: "تغليف السيارات", href: "/signage-stickers/vehicle-branding" },
            { title: "ستيكرات الجدران", href: "/signage-stickers/wall-decals" },
            { title: "بانرات خارجية", href: "/signage-stickers/outdoor-banners" },
            { title: "لافتات 3D", href: "/signage-stickers/shop-signage-3d" },
        ],
    },
    {
        title: "معارض وفعاليات",
        titleEn: "Exhibitions & Events",
        href: "/exhibitions-events",
        icon: CalendarDays,
        description: "أجنحة المعارض، الستاندات، والخلفيات",
        items: [
            { title: "رول أب ستاند", href: "/exhibitions-events/roll-up-stands" },
            { title: "بوب أب ديسبلاي", href: "/exhibitions-events/pop-up-displays" },
            { title: "أجنحة خشبية مخصصة", href: "/exhibitions-events/custom-wood-booths" },
            { title: "نظام أوكتانورم", href: "/exhibitions-events/system-booths" },
            { title: "كاونترات ترويجية", href: "/exhibitions-events/promo-counters" },
        ],
    },
    {
        title: "هدايا دعائية",
        titleEn: "Promotional Gifts",
        href: "/promotional-gifts",
        icon: Gift,
        description: "أقلام، دفاتر، هدايا تقنية، وملابس مطبوعة",
        items: [
            { title: "هدايا مكتبية", href: "/promotional-gifts/office-gifts" },
            { title: "هدايا تقنية", href: "/promotional-gifts/tech-gadgets" },
            { title: "ملابس مطبوعة", href: "/promotional-gifts/wearables" },
            { title: "أكياس وتغليف", href: "/promotional-gifts/bags-packaging" },
        ],
    },
    {
        title: "خدمات التصميم",
        titleEn: "Design Services",
        href: "/design-services",
        icon: Palette,
        description: "تصميم الهوية البصرية والشعارات",
        items: [
            { title: "هوية بصرية", href: "/design-services/branding-identity" },
            { title: "تصميم شعارات", href: "/design-services/logo-design" },
            { title: "تجهيز ملفات الطباعة", href: "/design-services/pre-press" },
        ],
    },
];
