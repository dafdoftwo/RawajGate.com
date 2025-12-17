"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    Printer,
    Signpost,
    CalendarDays,
    Gift,
    Palette,
    Menu,
    X,
    Phone,
    ChevronDown,
} from "lucide-react";

// Navigation structure matching the silo architecture
const NAVIGATION = [
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

export function MegaMenu() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

    return (
        <nav className="relative z-50">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
                {NAVIGATION.map((item) => (
                    <div
                        key={item.href}
                        className="relative"
                        onMouseEnter={() => setActiveMenu(item.href)}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <Link
                            href={item.href}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                "hover:bg-white/10 text-white/90 hover:text-white",
                                activeMenu === item.href && "bg-white/10 text-white"
                            )}
                        >
                            <item.icon className="w-4 h-4" />
                            <span>{item.title}</span>
                            <ChevronDown
                                className={cn(
                                    "w-3 h-3 transition-transform",
                                    activeMenu === item.href && "rotate-180"
                                )}
                            />
                        </Link>

                        {/* Mega Menu Dropdown */}
                        <AnimatePresence>
                            {activeMenu === item.href && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                                >
                                    <div className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border-b">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-primary/10">
                                                <item.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">{item.title}</h3>
                                                <p className="text-xs text-gray-500">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        {item.items.map((subItem) => (
                                            <Link
                                                key={subItem.href}
                                                href={subItem.href}
                                                className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors text-sm"
                                            >
                                                {subItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="p-3 bg-gray-50 border-t">
                                        <Link
                                            href={item.href}
                                            className="text-xs text-primary font-medium hover:underline"
                                        >
                                            عرض جميع {item.title} ←
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
                aria-label="Open menu"
            >
                <Menu className="w-7 h-7" />
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-black/60 backdrop-blur-sm fixed inset-0 z-[60]"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl z-[70] overflow-hidden flex flex-col"
                            dir="rtl"
                        >
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between p-5 border-b border-gray-100">
                                <span className="text-lg font-bold text-gray-900">القائمة الرئيسية</span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                <Link
                                    href="/"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block p-4 rounded-xl font-bold text-gray-900 hover:bg-gray-50 mb-2"
                                >
                                    الرئيسية
                                </Link>

                                {NAVIGATION.map((item) => {
                                    const isExpanded = expandedMobileItem === item.href;
                                    return (
                                        <div key={item.href} className="border border-gray-100 rounded-xl overflow-hidden mb-3">
                                            {/* Accordion Header */}
                                            <button
                                                onClick={() => setExpandedMobileItem(isExpanded ? null : item.href)}
                                                className={cn(
                                                    "w-full flex items-center justify-between p-4 transition-colors",
                                                    isExpanded ? "bg-gray-50" : "bg-white hover:bg-gray-50"
                                                )}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <item.icon className={cn("w-5 h-5", isExpanded ? "text-amber-500" : "text-gray-400")} />
                                                    <span className={cn("font-medium", isExpanded ? "text-amber-600" : "text-gray-700")}>
                                                        {item.title}
                                                    </span>
                                                </div>
                                                <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform", isExpanded && "rotate-180")} />
                                            </button>

                                            {/* Accordion Body */}
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden bg-gray-50/50"
                                                    >
                                                        <div className="p-2 space-y-1">
                                                            {item.items.map((subItem) => (
                                                                <Link
                                                                    key={subItem.href}
                                                                    href={subItem.href}
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                    className="block p-3 rounded-lg text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-colors mr-4 border-r-2 border-transparent hover:border-amber-400"
                                                                >
                                                                    {subItem.title}
                                                                </Link>
                                                            ))}
                                                            <Link
                                                                href={item.href}
                                                                onClick={() => setMobileMenuOpen(false)}
                                                                className="block p-3 text-xs font-bold text-amber-600 text-center border-t border-gray-100 mt-2"
                                                            >
                                                                عرض كل خدمات {item.title}
                                                            </Link>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}

                                <Link
                                    href="/about"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block p-4 rounded-xl font-bold text-gray-900 hover:bg-gray-50 mt-2"
                                >
                                    عن الشركة
                                </Link>
                                <Link
                                    href="/portfolio"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block p-4 rounded-xl font-bold text-gray-900 hover:bg-gray-50"
                                >
                                    معرض الأعمال
                                </Link>
                            </div>

                            {/* Drawer Footer (CTAs) */}
                            <div className="p-5 border-t border-gray-100 bg-gray-50 space-y-3">
                                <Link
                                    href="/quote"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-center w-full py-3.5 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg"
                                >
                                    اطلب عرض سعر
                                </Link>
                                <a
                                    href="tel:+966548923300"
                                    className="flex items-center justify-center w-full py-3.5 bg-white border border-gray-200 text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-colors"
                                >
                                    <Phone className="w-5 h-5 ml-2 text-gray-400" />
                                    اتصل بنا
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-l from-[#1a365d] to-[#2d4a7c]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shadow-lg transition-transform hover:scale-105">
                            <img
                                src="/images/logo-rg.png"
                                alt="Rawaj Gate Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-lg font-bold text-white">بوابة الرواج</h1>
                            <p className="text-xs text-white/70">Rawaj Gate</p>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <MegaMenu />

                    {/* Mobile Call Icon */}
                    <a
                        href="tel:+966548923300"
                        className="md:hidden p-2 text-white hover:text-amber-400 transition-colors"
                        aria-label="Call Us"
                    >
                        <Phone className="w-6 h-6" />
                    </a>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="tel:+966548923300"
                            className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm transition-colors"
                        >
                            اتصل بنا
                        </a>
                        <Link
                            href="/quote"
                            className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 font-bold rounded-lg hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg hover:shadow-amber-500/25"
                        >
                            اطلب عرض سعر
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
