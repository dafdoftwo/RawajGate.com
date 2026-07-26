import Link from "next/link";
import { Check, X, Info, Sparkles, ArrowLeft } from "lucide-react";
import {
    formatRange,
    PRICING_LAST_REVIEWED,
    type PricingBlock,
} from "@/lib/pricing";

/**
 * جدول الأسعار الاسترشادي.
 *
 * لماذا الشفافية هنا ميزة تنافسية:
 * منافسو بوابة الرواج في جدة (محاور، أثر، بي إيفنت، ناب...) يخفون الأسعار
 * كلياً. البحث السعودي مشبع بنية «كم سعر…»، وChatGPT وPerplexity يقتبسان
 * أرقاماً محددة — المصدر الوحيد الذي ينشرها يفوز بالاقتباس.
 *
 * الحماية القانونية:
 * كل صف يعرض نطاقاً (من – إلى)، والنص يذكر صراحة أن السعر «استرشادي» وأن
 * السعر النهائي بعرض. لا التزام قانوني بسعر محدد لمواصفة محددة.
 */
export function PricingTable({ block }: { block: PricingBlock }) {
    const arReviewed = new Date(PRICING_LAST_REVIEWED).toLocaleDateString(
        "ar-SA-u-ca-gregory",
        { year: "numeric", month: "long", day: "numeric" }
    );

    return (
        <section className="py-16 bg-gray-50" aria-labelledby={`pricing-${block.slug}`}>
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2
                            id={`pricing-${block.slug}`}
                            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4"
                        >
                            أسعار {block.serviceName} في جدة
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            نطاقات سعرية استرشادية للسوق السعودي في {arReviewed}. السعر
                            النهائي بعرض مخصص حسب المواصفات النهائية والكمية.
                        </p>
                    </div>

                    {/* الجدول — سطح مكتب: جدول HTML؛ جوال: بطاقات */}
                    <div className="hidden md:block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-right">
                                <caption className="sr-only">
                                    جدول أسعار {block.serviceName} الاسترشادية — بوابة الرواج جدة
                                </caption>
                                <thead>
                                    <tr className="bg-gray-900 text-white text-sm">
                                        <th scope="col" className="px-6 py-4 font-bold">الفئة</th>
                                        <th scope="col" className="px-6 py-4 font-bold">المواصفات</th>
                                        <th scope="col" className="px-6 py-4 font-bold">الكمية</th>
                                        <th scope="col" className="px-6 py-4 font-bold">النطاق السعري</th>
                                        <th scope="col" className="px-6 py-4 font-bold">مدة التنفيذ</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {block.tiers.map((tier) => (
                                        <tr
                                            key={tier.tier}
                                            className={tier.popular ? "bg-amber-50/50" : ""}
                                        >
                                            <td className="px-6 py-5 font-bold text-gray-900 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    {tier.popular && (
                                                        <Sparkles
                                                            className="w-4 h-4 text-amber-500"
                                                            aria-label="الأكثر طلباً"
                                                        />
                                                    )}
                                                    {tier.tier}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-gray-700 text-sm leading-relaxed">
                                                {tier.spec}
                                            </td>
                                            <td className="px-6 py-5 text-gray-600 text-sm whitespace-nowrap">
                                                {tier.unit}
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                <span className="font-bold text-amber-600">
                                                    {formatRange(tier.priceFrom, tier.priceTo)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-gray-600 text-sm whitespace-nowrap">
                                                {tier.turnaround}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* بطاقات الجوال */}
                    <div className="md:hidden space-y-4">
                        {block.tiers.map((tier) => (
                            <article
                                key={tier.tier}
                                className={`bg-white rounded-xl border p-5 ${
                                    tier.popular
                                        ? "border-amber-400 shadow-md"
                                        : "border-gray-200"
                                }`}
                            >
                                <div className="flex items-center justify-between gap-3 mb-3">
                                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                        {tier.popular && (
                                            <Sparkles className="w-4 h-4 text-amber-500" aria-label="الأكثر طلباً" />
                                        )}
                                        {tier.tier}
                                    </h3>
                                    <span className="text-xs text-gray-500 shrink-0">{tier.unit}</span>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    {tier.spec}
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                    <div>
                                        <span className="block text-xs text-gray-500 mb-0.5">النطاق</span>
                                        <span className="font-bold text-amber-600 text-sm">
                                            {formatRange(tier.priceFrom, tier.priceTo)}
                                        </span>
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-xs text-gray-500 mb-0.5">التنفيذ</span>
                                        <span className="text-sm text-gray-800 font-medium">
                                            {tier.turnaround}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* شفافية: ما يشمله السعر وما لا يشمله */}
                    <div className="grid md:grid-cols-2 gap-6 mt-10">
                        <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-600" aria-hidden="true" />
                                يشمل السعر
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {block.included.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1 shrink-0" aria-hidden="true">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <X className="w-5 h-5 text-gray-500" aria-hidden="true" />
                                لا يشمل
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {block.excluded.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="text-gray-400 mt-1 shrink-0" aria-hidden="true">—</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ملاحظات وعوامل السعر */}
                    <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Info className="w-5 h-5 text-amber-500" aria-hidden="true" />
                            ما الذي يُغيّر السعر النهائي؟
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700 mb-6">
                            {block.factors.map((factor) => (
                                <li key={factor} className="flex items-start gap-2">
                                    <span className="text-amber-500 mt-1 shrink-0" aria-hidden="true">•</span>
                                    <span>{factor}</span>
                                </li>
                            ))}
                        </ul>

                        {block.notes && block.notes.length > 0 && (
                            <div className="pt-6 border-t border-gray-100">
                                <p className="text-sm font-bold text-gray-900 mb-3">ملاحظات مهمة:</p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {block.notes.map((note) => (
                                        <li key={note} className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1 shrink-0" aria-hidden="true">›</span>
                                            <span>{note}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                        <Link
                            href="/quote"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors"
                        >
                            احصل على عرض سعر مخصص
                            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                        </Link>
                        <Link
                            href={block.serviceUrl}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-white transition-colors"
                        >
                            تفاصيل الخدمة الكاملة
                        </Link>
                    </div>

                    <p className="text-xs text-center text-gray-500 mt-8">
                        الأسعار بالريال السعودي، غير شاملة لضريبة القيمة المضافة 15٪. آخر
                        مراجعة للنطاقات: {arReviewed}.
                    </p>
                </div>
            </div>
        </section>
    );
}
