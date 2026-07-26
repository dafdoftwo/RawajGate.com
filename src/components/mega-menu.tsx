"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { telLink } from "@/lib/business";
import { NAVIGATION } from "@/components/navigation-data";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

/**
 * ⚡ ملاحظة أداء:
 * تمّت إزالة framer-motion بالكامل من هذا المكوّن. framer-motion كانت تُضخّم
 * الـ bundle بحوالي 100 KB وتُحمَّل على كل صفحة في الموقع لأن Header جزء من
 * الـ layout. الأنيميشن مستبدلة بـ CSS transitions أخف بمئات المرات — نفس
 * التأثير البصري وزمن استجابة أفضل خصوصاً على الجوال.
 */



export function MegaMenu() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

    // منع تمرير الصفحة عند فتح قائمة الجوال
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    return (
        <nav className="relative z-50">
            {/* تنقل الديسكتوب */}
            <div className="hidden lg:flex items-center gap-1">
                {NAVIGATION.map((item) => {
                    const isOpen = activeMenu === item.href;
                    return (
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
                                    isOpen && "bg-white/10 text-white"
                                )}
                            >
                                <item.icon className="w-4 h-4" aria-hidden="true" />
                                <span>{item.title}</span>
                                <ChevronDown
                                    className={cn(
                                        "w-3 h-3 transition-transform",
                                        isOpen && "rotate-180"
                                    )}
                                    aria-hidden="true"
                                />
                            </Link>

                            {/*
                              القائمة المنسدلة — CSS-only بدل framer-motion.
                              التأثير: تلاشي وانزلاق 8px من الأعلى في 180ms.
                              حالة الإخفاء: pointer-events-none تمنع الالتقاط بينما الظهور مطفأ.
                            */}
                            <div
                                className={cn(
                                    "absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden",
                                    "transition-all duration-200 origin-top",
                                    isOpen
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 -translate-y-2 pointer-events-none"
                                )}
                            >
                                <div className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border-b">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">{item.title}</div>
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
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* زر قائمة الجوال */}
            <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
                aria-label="فتح القائمة"
                aria-expanded={mobileMenuOpen}
            >
                <Menu className="w-7 h-7" aria-hidden="true" />
            </button>

            {/*
              قائمة الجوال — CSS-only بدل framer-motion.
              الحاوية دائماً في الـ DOM لكن مخفية بـ pointer-events-none،
              فتنزلق الـ drawer عند التفعيل. لا JS إضافي، لا مكتبة أنيميشن.
            */}
            <div
                className={cn(
                    "fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden",
                    mobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
                aria-hidden={!mobileMenuOpen}
            >
                {/* الخلفية */}
                <button
                    type="button"
                    tabIndex={mobileMenuOpen ? 0 : -1}
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm w-full h-full"
                    aria-label="إغلاق القائمة"
                />

                {/* الدرج المنزلق */}
                <div
                    className={cn(
                        "absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl z-[70] flex flex-col",
                        "transition-transform duration-300 ease-out",
                        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}
                    dir="rtl"
                    role="dialog"
                    aria-modal="true"
                    aria-label="القائمة الرئيسية"
                >
                    <div className="flex items-center justify-between p-5 border-b border-gray-100">
                        <span className="text-lg font-bold text-gray-900">القائمة الرئيسية</span>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                            aria-label="إغلاق"
                        >
                            <X className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>

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
                                <div
                                    key={item.href}
                                    className="border border-gray-100 rounded-xl overflow-hidden mb-3"
                                >
                                    <button
                                        onClick={() =>
                                            setExpandedMobileItem(isExpanded ? null : item.href)
                                        }
                                        aria-expanded={isExpanded}
                                        className={cn(
                                            "w-full flex items-center justify-between p-4 transition-colors",
                                            isExpanded ? "bg-gray-50" : "bg-white hover:bg-gray-50"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon
                                                className={cn(
                                                    "w-5 h-5",
                                                    isExpanded ? "text-amber-500" : "text-gray-400"
                                                )}
                                                aria-hidden="true"
                                            />
                                            <span
                                                className={cn(
                                                    "font-medium",
                                                    isExpanded ? "text-amber-600" : "text-gray-700"
                                                )}
                                            >
                                                {item.title}
                                            </span>
                                        </div>
                                        <ChevronDown
                                            className={cn(
                                                "w-5 h-5 text-gray-400 transition-transform",
                                                isExpanded && "rotate-180"
                                            )}
                                            aria-hidden="true"
                                        />
                                    </button>

                                    {/*
                                      الأكورديون — grid rows technique بدل قياس ارتفاع.
                                      يعمل نظيفاً في CSS الحديث، وأخف من animate height.
                                    */}
                                    <div
                                        className={cn(
                                            "grid transition-all duration-300 ease-out bg-gray-50/50",
                                            isExpanded
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                        )}
                                    >
                                        <div className="overflow-hidden">
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
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <Link
                            href="/prices"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block p-4 rounded-xl font-bold text-gray-900 hover:bg-gray-50 mt-2"
                        >
                            الأسعار
                        </Link>
                        <Link
                            href="/portfolio"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block p-4 rounded-xl font-bold text-gray-900 hover:bg-gray-50"
                        >
                            معرض الأعمال
                        </Link>
                        <Link
                            href="/faq"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block p-4 rounded-xl font-bold text-gray-900 hover:bg-gray-50"
                        >
                            الأسئلة الشائعة
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block p-4 rounded-xl font-bold text-gray-900 hover:bg-gray-50"
                        >
                            عن الشركة
                        </Link>
                    </div>

                    <div className="p-5 border-t border-gray-100 bg-gray-50 space-y-3">
                        <Link
                            href="/quote"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-center w-full py-3.5 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg"
                        >
                            اطلب عرض سعر
                        </Link>
                        <a
                            href={telLink}
                            className="flex items-center justify-center w-full py-3.5 bg-white border border-gray-200 text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-colors"
                        >
                            <Phone className="w-5 h-5 ml-2 text-gray-400" aria-hidden="true" />
                            اتصل بنا
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        // passive listener للسرعة
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-gradient-to-l from-[#1a365d]/90 to-[#2d4a7c]/90 backdrop-blur-md shadow-lg"
                    : "bg-gradient-to-l from-[#1a365d] to-[#2d4a7c]"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <Link
                        href="/"
                        className="flex items-center gap-3"
                        aria-label="بوابة الرواج - الصفحة الرئيسية"
                    >
                        <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shadow-lg transition-transform hover:scale-105">
                            <Image
                                src="/images/logo-rg.png"
                                alt="شعار بوابة الرواج - مطبعة في جدة"
                                width={64}
                                height={64}
                                priority
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="block text-lg font-bold text-white">
                                بوابة الرواج
                            </span>
                            <span className="block text-xs text-white/70">Rawaj Gate</span>
                        </div>
                    </Link>

                    <MegaMenu />

                    <a
                        href={telLink}
                        className="md:hidden p-2 text-white hover:text-amber-400 transition-colors"
                        aria-label="اتصل بنا"
                    >
                        <Phone className="w-6 h-6" aria-hidden="true" />
                    </a>

                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href={telLink}
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
