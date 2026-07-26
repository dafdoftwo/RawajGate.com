"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { trackLead } from "@/components/analytics";

const SERVICES = [
    "مطبوعات تجارية",
    "لوحات وملصقات",
    "معارض وفعاليات",
    "هدايا دعائية",
    "خدمات تصميم",
    "أخرى",
];

export function QuoteForm() {
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const name = String(formData.get("name") ?? "");
        const mobile = String(formData.get("mobile") ?? "");
        const email = String(formData.get("email") ?? "");
        const service = String(formData.get("service") ?? "");
        const details = String(formData.get("details") ?? "");

        // قياس التحويل — كان مفقوداً تماماً رغم وجود حسابَي Google Ads نشطين
        trackLead(service);

        /**
         * ⚠️ الوضع الحالي: الطلب يُفتح في واتساب فقط ولا يُحفظ في أي مكان.
         * إن أغلق العميل واتساب قبل الإرسال، ضاع العميل المحتمل نهائياً.
         *
         * TODO (أولوية عالية): أنشئ app/api/quote/route.ts يحفظ الطلب
         * (قاعدة بيانات أو بريد إلكتروني) قبل فتح واتساب:
         *
         *   await fetch("/api/quote", {
         *     method: "POST",
         *     headers: { "Content-Type": "application/json" },
         *     body: JSON.stringify({ name, mobile, email, service, details }),
         *   });
         */

        const message = [
            "*طلب عرض سعر جديد*",
            "------------------",
            `*الاسم:* ${name}`,
            `*الجوال:* ${mobile}`,
            email ? `*البريد:* ${email}` : null,
            `*الخدمة:* ${service}`,
            "*التفاصيل:*",
            details,
        ]
            .filter(Boolean)
            .join("\n");

        /**
         * ✅ إصلاح: encodeURIComponent على النص كاملاً.
         * الكود السابق كان يكتب %0a يدوياً ويُدرج مدخلات المستخدم كما هي داخل
         * الرابط — أي حرف & أو # أو + يكتبه العميل كان يقطع الرسالة أو يكسر الرابط.
         */
        const url = `https://wa.me/${BUSINESS.phone.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank", "noopener,noreferrer");

        setSubmitting(false);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="qf-name" className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                        id="qf-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="أدخل اسمك"
                    />
                </div>
                <div>
                    <label htmlFor="qf-mobile" className="block text-sm font-medium text-gray-700 mb-2">
                        رقم الجوال <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                        id="qf-mobile"
                        name="mobile"
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        pattern="[0-9+\s]{9,15}"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="05XXXXXXXX"
                        dir="ltr"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="qf-email" className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني
                    </label>
                    <input
                        id="qf-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="example@email.com"
                        dir="ltr"
                    />
                </div>
                <div>
                    <label htmlFor="qf-service" className="block text-sm font-medium text-gray-700 mb-2">
                        نوع الخدمة <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                        id="qf-service"
                        name="service"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    >
                        <option value="" disabled>
                            اختر الخدمة
                        </option>
                        {SERVICES.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="qf-details" className="block text-sm font-medium text-gray-700 mb-2">
                    تفاصيل الطلب <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                    id="qf-details"
                    name="details"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
                    placeholder="اشرح طلبك بالتفصيل: الكمية، المقاسات، الخامة المطلوبة، والموعد النهائي..."
                />
            </div>

            {/*
              حُقل رفع الملف السابق كان معطّلاً — يظهر في الواجهة ولا يُرسَل مع
              الطلب، والنص أسفله يعتذر عن ذلك. عنصر واجهة يوهم بوظيفة غير موجودة
              يضرّ الثقة، فاستُبدل بإرشاد صريح.
            */}
            <p className="text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-lg p-4">
                لديك ملف تصميم؟ أرسله مباشرة في محادثة واتساب بعد الضغط على زر
                الإرسال — نستقبل ملفات PDF و AI و PSD والصور.
            </p>

            <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
                {submitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                ) : (
                    <Send className="w-5 h-5" aria-hidden="true" />
                )}
                إرسال الطلب عبر واتساب
            </button>
        </form>
    );
}
