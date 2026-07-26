import Link from "next/link";
import type { Metadata } from "next";
import { Home, FileText, Phone } from "lucide-react";
import { SILOS } from "@/lib/routes";
import { BUSINESS, telLink } from "@/lib/business";

export const metadata: Metadata = {
    title: "الصفحة غير موجودة",
    description: "الصفحة المطلوبة غير متوفرة. تصفّح خدمات بوابة الرواج للطباعة وتجهيز المعارض في جدة.",
    // لا تُفهرس صفحة الخطأ، لكن تابع روابطها لتوزيع الـ PageRank
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <section className="min-h-[70vh] flex items-center py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <p className="text-7xl lg:text-8xl font-heading font-bold text-amber-500 mb-4">
                    404
                </p>

                <h1 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4">
                    عذراً، هذه الصفحة غير موجودة
                </h1>

                <p className="text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed">
                    ربما تم نقل الصفحة أو تغيير رابطها. يمكنك الانتقال إلى أحد أقسام
                    خدماتنا أو التواصل معنا مباشرة وسنساعدك فوراً.
                </p>

                {/* روابط الأقسام — تُبقي الزائر داخل الموقع وتوزّع سلطة الروابط */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
                    {SILOS.map((silo) => (
                        <Link
                            key={silo.slug}
                            href={`/${silo.slug}`}
                            className="p-5 rounded-xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all font-medium text-gray-800"
                        >
                            {silo.label}
                        </Link>
                    ))}
                    <Link
                        href="/blog"
                        className="p-5 rounded-xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all font-medium text-gray-800 flex items-center justify-center gap-2"
                    >
                        <FileText className="w-4 h-4 text-amber-500" />
                        المدونة
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        العودة للرئيسية
                    </Link>
                    <Link
                        href="/quote"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors"
                    >
                        اطلب عرض سعر
                    </Link>
                    <a
                        href={telLink}
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        <span dir="ltr">{BUSINESS.phone.display}</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
