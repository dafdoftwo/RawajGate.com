import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, telLink } from "@/lib/business";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "الشروط والأحكام",
    description:
        "شروط وأحكام التعامل مع بوابة الرواج: طلب الخدمات، اعتماد التصاميم، الأسعار والدفع، مواعيد التسليم، وسياسة الاسترجاع.",
    alternates: { canonical: "/terms" },
    robots: { index: true, follow: true },
};

/**
 * ⚠️ مراجعة قانونية مطلوبة
 * صياغة أولية تعكس الممارسات الشائعة في قطاع الطباعة بالسعودية.
 * راجعها مع مستشار قانوني وعدّل البنود لتطابق سياساتك الفعلية قبل الاعتماد.
 */
const LAST_UPDATED = "26 يوليو 2026";

export default function TermsPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: BUSINESS.url },
        { name: "الشروط والأحكام", url: `${BUSINESS.url}/terms` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16">
                <div className="container mx-auto px-4">
                    <nav aria-label="مسار التنقل" className="text-sm text-white/60 mb-4">
                        <ol className="flex items-center">
                            <li><Link href="/" className="hover:text-white">الرئيسية</Link></li>
                            <li aria-hidden="true" className="mx-2">/</li>
                            <li><span className="text-amber-400" aria-current="page">الشروط والأحكام</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-3">
                        الشروط والأحكام
                    </h1>
                    <p className="text-white/70">آخر تحديث: {LAST_UPDATED}</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto space-y-10 text-gray-700 leading-8">
                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                1. نطاق الخدمات
                            </h2>
                            <p>
                                تقدّم {BUSINESS.nameAr} خدمات الطباعة التجارية، وتجهيز أجنحة المعارض
                                والفعاليات، ولافتات المحلات والملصقات، والهدايا الدعائية، وخدمات التصميم
                                الجرافيكي، داخل مدينة جدة وفي أنحاء المملكة العربية السعودية حسب طبيعة
                                المشروع.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                2. طلب الخدمة وعرض السعر
                            </h2>
                            <ul className="list-disc list-outside mr-6 space-y-2">
                                <li>يُعدّ عرض السعر ساري المفعول للمدة المحددة فيه من تاريخ إصداره.</li>
                                <li>
                                    يبدأ تنفيذ الطلب بعد اعتماد العميل لعرض السعر والتصميم النهائي كتابياً.
                                </li>
                                <li>
                                    أي تعديل بعد اعتماد التصميم قد يترتب عليه رسوم إضافية وتأخير في موعد
                                    التسليم.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                3. اعتماد التصميم ومسؤولية العميل
                            </h2>
                            <p>
                                يتحمّل العميل مسؤولية مراجعة النسخة النهائية (البروفة) والتأكد من صحة
                                النصوص والأرقام وبيانات التواصل والشعارات قبل الاعتماد. بعد الاعتماد
                                الكتابي والبدء في الإنتاج، لا تتحمّل {BUSINESS.nameAr} مسؤولية الأخطاء
                                الواردة في المادة المعتمدة.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                4. الأسعار والدفع
                            </h2>
                            <ul className="list-disc list-outside mr-6 space-y-2">
                                <li>جميع الأسعار بالريال السعودي وغير شاملة لضريبة القيمة المضافة ما لم يُذكر خلاف ذلك.</li>
                                <li>يُطلب دفعة مقدمة لبدء التنفيذ في المشاريع التي تتجاوز قيمة معينة.</li>
                                <li>يُستحق سداد كامل المبلغ قبل التسليم النهائي ما لم يُتفق على غير ذلك كتابياً.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                5. مواعيد التسليم
                            </h2>
                            <p>
                                مواعيد التسليم المذكورة تقديرية وتُحسب من تاريخ اعتماد التصميم النهائي
                                واستلام الدفعة المقدمة. قد تتأثر المواعيد بعوامل خارجة عن إرادتنا مثل
                                توفّر الخامات، أو الظروف الجوية في أعمال التركيب الخارجي، أو تأخر العميل
                                في تسليم المواد أو الاعتماد.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                6. الجودة والألوان
                            </h2>
                            <p>
                                قد يوجد تفاوت طفيف في درجات الألوان بين ما يظهر على الشاشة وما يُطبع
                                فعلياً، وبين دفعات الطباعة المختلفة، وهو أمر معتاد في صناعة الطباعة.
                                للحصول على أعلى دقة لونية ننصح باعتماد نظام ألوان Pantone وطلب عيّنة
                                مطبوعة قبل تنفيذ الكميات الكبيرة.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                7. الإلغاء والاسترجاع
                            </h2>
                            <ul className="list-disc list-outside mr-6 space-y-2">
                                <li>
                                    المنتجات المخصصة والمطبوعة حسب طلب العميل غير قابلة للاسترجاع بعد بدء
                                    الإنتاج.
                                </li>
                                <li>
                                    في حال إلغاء الطلب بعد بدء التنفيذ، يتحمّل العميل تكاليف ما تم إنجازه
                                    من أعمال وخامات.
                                </li>
                                <li>
                                    نلتزم بإعادة التنفيذ أو التعويض في حال ثبوت عيب في الجودة يعود إلينا،
                                    بشرط الإبلاغ خلال مدة معقولة من الاستلام.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                8. الملكية الفكرية
                            </h2>
                            <p>
                                يقرّ العميل بأنه يملك حقوق استخدام جميع الشعارات والصور والنصوص التي
                                يزوّدنا بها، ويتحمّل كامل المسؤولية القانونية عن أي انتهاك لحقوق الغير.
                                تنتقل ملكية التصاميم المنفّذة خصيصاً للعميل إليه بعد سداد كامل المستحقات.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                9. القانون الواجب التطبيق
                            </h2>
                            <p>
                                تخضع هذه الشروط وتُفسَّر وفقاً لأنظمة المملكة العربية السعودية، وتختص
                                الجهات القضائية المختصة في مدينة جدة بالنظر في أي نزاع ينشأ عنها.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">
                                للاستفسار عن الشروط
                            </h2>
                            <ul className="space-y-2">
                                <li>
                                    البريد الإلكتروني:{" "}
                                    <a
                                        href={`mailto:${BUSINESS.email}`}
                                        className="text-amber-600 font-medium hover:underline"
                                    >
                                        {BUSINESS.email}
                                    </a>
                                </li>
                                <li>
                                    الهاتف:{" "}
                                    <a href={telLink} className="text-amber-600 font-medium hover:underline" dir="ltr">
                                        {BUSINESS.phone.display}
                                    </a>
                                </li>
                            </ul>
                            <Link
                                href="/quote"
                                className="inline-block mt-6 px-6 py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors"
                            >
                                اطلب عرض سعر
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
