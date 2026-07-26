"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home, MessageCircle } from "lucide-react";
import { BUSINESS, whatsappLink } from "@/lib/business";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // TODO: اربطه بأداة مراقبة أخطاء (Sentry مثلاً) لرصد الأعطال في الإنتاج
        console.error("Application error:", error);
    }, [error]);

    return (
        <section className="min-h-[70vh] flex items-center py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center max-w-xl">
                <h1 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4">
                    حدث خطأ غير متوقع
                </h1>

                <p className="text-gray-600 mb-10 leading-relaxed">
                    نعتذر عن الإزعاج. يمكنك إعادة المحاولة، أو التواصل معنا مباشرة عبر
                    واتساب وسنخدمك فوراً.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors"
                    >
                        <RefreshCw className="w-5 h-5" />
                        إعادة المحاولة
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        العودة للرئيسية
                    </Link>
                    <a
                        href={whatsappLink("مرحباً، واجهت مشكلة في الموقع")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <MessageCircle className="w-5 h-5 text-green-600" />
                        واتساب
                    </a>
                </div>

                {error.digest && (
                    <p className="mt-8 text-xs text-gray-400" dir="ltr">
                        Error ID: {error.digest}
                    </p>
                )}

                <p className="mt-2 text-sm text-gray-500">
                    أو اتصل بنا: <span dir="ltr">{BUSINESS.phone.display}</span>
                </p>
            </div>
        </section>
    );
}
