"use client";

import { Send } from "lucide-react";

export function QuoteForm() {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            const name = formData.get('name');
            const mobile = formData.get('mobile');
            const email = formData.get('email');
            const service = formData.get('service');
            const details = formData.get('details');

            const text = `*طلب عرض سعر جديد*%0a` +
                `------------------%0a` +
                `*الاسم:* ${name}%0a` +
                `*الجوال:* ${mobile}%0a` +
                `*البريد:* ${email}%0a` +
                `*الخدمة:* ${service}%0a` +
                `*التفاصيل:*%0a${details}`;

            window.open(`https://wa.me/966548923300?text=${text}`, '_blank');
        }} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل *
                    </label>
                    <input
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="أدخل اسمك"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        رقم الجوال *
                    </label>
                    <input
                        name="mobile"
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="05XXXXXXXX"
                        dir="ltr"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني
                    </label>
                    <input
                        name="email"
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                        placeholder="example@email.com"
                        dir="ltr"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        نوع الخدمة *
                    </label>
                    <select
                        name="service"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    >
                        <option value="">اختر الخدمة</option>
                        <option value="مطبوعات تجارية">مطبوعات تجارية</option>
                        <option value="لوحات وملصقات">لوحات وملصقات</option>
                        <option value="معارض وفعاليات">معارض وفعاليات</option>
                        <option value="هدايا دعائية">هدايا دعائية</option>
                        <option value="خدمات تصميم">خدمات تصميم</option>
                        <option value="أخرى">أخرى</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    تفاصيل الطلب *
                </label>
                <textarea
                    name="details"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
                    placeholder="اشرح طلبك بالتفصيل: الكمية، الأحجام، المواعيد..."
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    إرفاق ملف (اختياري)
                </label>
                <input
                    type="file"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    accept=".pdf,.jpg,.png,.ai,.psd"
                />
                <p className="text-xs text-gray-500 mt-1">
                    (للإرسال عبر واتساب، يفضل إرسال الملف مباشرة في المحادثة)
                </p>
            </div>

            <button
                type="submit"
                className="w-full py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
                <Send className="w-5 h-5" />
                إرسال الطلب عبر واتساب
            </button>
        </form>
    );
}
