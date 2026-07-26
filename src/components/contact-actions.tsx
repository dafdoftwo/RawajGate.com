"use client";

import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS, telLink, whatsappLink } from "@/lib/business";
import { trackWhatsApp, trackCall } from "@/components/analytics";

/**
 * أزرار التواصل المتتبَّعة.
 * واتساب والهاتف هما قناتا التحويل الأساسيتان في السوق السعودي — قياسهما
 * ضروري لمعرفة أي صفحة تُنتج عملاء فعليين.
 */

/** زر واتساب العائم — يظهر في كل الصفحات عبر الفوتر */
export function WhatsAppFab() {
    return (
        <a
            href={whatsappLink("مرحباً، أرغب في الاستفسار عن خدماتكم")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp("floating_button")}
            className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all"
            aria-label="تواصل معنا عبر واتساب"
        >
            <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
        </a>
    );
}

/** رابط واتساب مضمَّن مع تتبع */
export function WhatsAppLink({
    message,
    source,
    className,
    children,
}: {
    message?: string;
    source: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp(source)}
            className={className}
        >
            {children}
        </a>
    );
}

/** رابط اتصال مع تتبع */
export function CallLink({
    source,
    className,
    children,
}: {
    source: string;
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <a href={telLink} onClick={() => trackCall(source)} className={className}>
            {children ?? (
                <>
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    <span dir="ltr">{BUSINESS.phone.display}</span>
                </>
            )}
        </a>
    );
}
