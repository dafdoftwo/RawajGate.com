import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, telLink } from "@/lib/business";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "سياسة الخصوصية",
    description:
        "سياسة الخصوصية في بوابة الرواج: كيف نجمع بياناتك ونستخدمها ونحميها، وحقوقك وفق نظام حماية البيانات الشخصية في المملكة العربية السعودية.",
    alternates: { canonical: "/privacy" },
    robots: { index: true, follow: true },
};

/**
 * ⚠️ مراجعة قانونية مطلوبة
 * هذه صياغة أولية تغطي المتطلبات الأساسية لنظام حماية البيانات الشخصية (PDPL)
 * السعودي ومتطلبات Google Ads. اعرضها على مستشار قانوني قبل الاعتماد النهائي،
 * وحدّث الأقسام المعلّمة بـ TODO ببيانات نشاطك الفعلية.
 */
const LAST_UPDATED = "26 يوليو 2026";

export default function PrivacyPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: BUSINESS.url },
        { name: "سياسة الخصوصية", url: `${BUSINESS.url}/privacy` },
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
                            <li><span className="text-amber-400" aria-current="page">سياسة الخصوصية</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-3">
                        سياسة الخصوصية
                    </h1>
                    <p className="text-white/70">آخر تحديث: {LAST_UPDATED}</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto space-y-10 text-gray-700 leading-8">
                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">مقدمة</h2>
                            <p>
                                في {BUSINESS.nameAr} نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.
                                توضّح هذه السياسة أنواع البيانات التي نجمعها عند استخدامك لموقعنا
                                أو طلب خدماتنا، وكيفية استخدامها وحمايتها، وحقوقك تجاهها وفقاً
                                لنظام حماية البيانات الشخصية في المملكة العربية السعودية.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                البيانات التي نجمعها
                            </h2>
                            <ul className="list-disc list-outside mr-6 space-y-2">
                                <li>
                                    <strong className="text-gray-900">بيانات تقدّمها أنت:</strong> الاسم،
                                    رقم الجوال، البريد الإلكتروني، وتفاصيل الطلب عند تعبئة نموذج طلب عرض
                                    السعر أو التواصل معنا.
                                </li>
                                <li>
                                    <strong className="text-gray-900">ملفات التصميم:</strong> الملفات التي
                                    ترسلها لتنفيذ مشروعك (شعارات، تصاميم، صور).
                                </li>
                                <li>
                                    <strong className="text-gray-900">بيانات تقنية تلقائية:</strong> عنوان
                                    IP، نوع المتصفح والجهاز، الصفحات التي زرتها، ومدة الزيارة — تُجمع عبر
                                    أدوات التحليلات.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                كيف نستخدم بياناتك
                            </h2>
                            <ul className="list-disc list-outside mr-6 space-y-2">
                                <li>الرد على استفساراتك وإعداد عروض الأسعار.</li>
                                <li>تنفيذ الخدمات المتفق عليها وتسليم الطلبات.</li>
                                <li>التواصل معك بخصوص طلبك عبر الهاتف أو واتساب أو البريد الإلكتروني.</li>
                                <li>تحسين موقعنا وخدماتنا بناءً على تحليل سلوك الزوار.</li>
                                <li>الالتزام بالمتطلبات النظامية والمحاسبية في المملكة.</li>
                            </ul>
                            <p className="mt-4">
                                <strong className="text-gray-900">لا نبيع بياناتك الشخصية</strong> لأي طرف
                                ثالث، ولا نستخدمها لأغراض تسويقية دون موافقتك.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                ملفات تعريف الارتباط (Cookies) وأدوات التحليل
                            </h2>
                            <p>
                                يستخدم موقعنا ملفات تعريف الارتباط وأدوات تحليل من طرف ثالث لفهم كيفية
                                استخدام الزوار للموقع وتحسين تجربتهم، من بينها:
                            </p>
                            <ul className="list-disc list-outside mr-6 space-y-2 mt-4">
                                <li>
                                    <strong className="text-gray-900">Google Analytics:</strong> لقياس عدد
                                    الزيارات وسلوك التصفح بشكل مجمّع.
                                </li>
                                <li>
                                    <strong className="text-gray-900">Google Ads:</strong> لقياس فعالية
                                    حملاتنا الإعلانية.
                                </li>
                            </ul>
                            <p className="mt-4">
                                يمكنك تعطيل ملفات تعريف الارتباط من إعدادات متصفحك، مع العلم أن ذلك قد
                                يؤثر على بعض وظائف الموقع.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                حماية ملفات التصميم وسرّيتها
                            </h2>
                            <p>
                                نتعامل مع ملفات وتصاميم عملائنا بسرّية تامة. لا نستخدم أعمالك في معرض
                                أعمالنا أو موادنا التسويقية إلا بعد الحصول على موافقتك الصريحة.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                مدة الاحتفاظ بالبيانات
                            </h2>
                            <p>
                                نحتفظ ببياناتك للمدة اللازمة لتنفيذ الخدمة والوفاء بالالتزامات النظامية
                                والمحاسبية. بعد انتهاء هذه المدة تُحذف البيانات أو تُجعل مجهولة الهوية.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">حقوقك</h2>
                            <p>وفقاً لنظام حماية البيانات الشخصية السعودي، يحق لك:</p>
                            <ul className="list-disc list-outside mr-6 space-y-2 mt-4">
                                <li>معرفة البيانات التي نحتفظ بها عنك.</li>
                                <li>طلب الوصول إلى بياناتك أو الحصول على نسخة منها.</li>
                                <li>طلب تصحيح البيانات غير الدقيقة.</li>
                                <li>طلب حذف بياناتك متى انتفت الحاجة إليها.</li>
                                <li>سحب موافقتك على معالجة البيانات في أي وقت.</li>
                            </ul>
                            <p className="mt-4">
                                لممارسة أي من هذه الحقوق، تواصل معنا على{" "}
                                <a
                                    href={`mailto:${BUSINESS.email}`}
                                    className="text-amber-600 font-medium hover:underline"
                                >
                                    {BUSINESS.email}
                                </a>
                                .
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                                التعديلات على هذه السياسة
                            </h2>
                            <p>
                                قد نحدّث هذه السياسة من وقت لآخر. سيظهر تاريخ آخر تحديث في أعلى الصفحة،
                                وننصحك بمراجعتها دورياً.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">
                                للتواصل بخصوص الخصوصية
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
                                <li>العنوان: {BUSINESS.address.full}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
