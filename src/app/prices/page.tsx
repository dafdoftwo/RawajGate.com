import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, CheckCircle, Info } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import {
    PRICING_BLOCKS,
    PRICING_LAST_REVIEWED,
    formatRange,
} from "@/lib/pricing";
import {
    generateBreadcrumbSchema,
    generateItemListSchema,
} from "@/lib/schema";

/**
 * صفحة الأسعار الرئيسية (Pillar).
 *
 * الفرصة الاستراتيجية:
 *   • «كم سعر…» و«أسعار…» من أعلى استعلامات السوق السعودي في مجالك.
 *   • المنافسون في جدة (محاور، أثر، بي إيفنت، ناب…) يخفون الأسعار كلياً.
 *   • ChatGPT و Perplexity يقتبسان أرقاماً محددة — المصدر الوحيد الذي
 *     ينشرها يفوز بالاقتباس.
 * كل الأرقام في lib/pricing.ts هي **نطاقات** استرشادية من السوق السعودي،
 * ومصحوبة صراحة بجملة «السعر النهائي بعرض» — لا التزام قانوني بسعر محدد.
 */

export const metadata: Metadata = {
    title: "أسعار الطباعة وتجهيز المعارض في جدة",
    description:
        "أسعار استرشادية شفافة لخدمات الطباعة التجارية، تجهيز أجنحة المعارض، تغليف السيارات، لافتات المحلات، والهدايا الدعائية في جدة. مقارنة الفئات والنطاقات السعرية والمدد الزمنية.",
    alternates: { canonical: "/prices" },
    keywords: [
        "أسعار الطباعة جدة",
        "أسعار تجهيز معارض",
        "سعر تغليف سيارة",
        "سعر لافتة محل",
        "أسعار بطاقات عمل",
        "تكلفة رول أب",
    ],
    openGraph: {
        title: "أسعار الطباعة وتجهيز المعارض في جدة | بوابة الرواج",
        description:
            "نطاقات أسعار استرشادية لخدماتنا في جدة — بشفافية لا يوفّرها المنافسون.",
        url: `${BUSINESS.url}/prices`,
        images: [
            {
                url: "/images/rawaj-gate-printing-workshop-team-at-work.webp",
                width: 1200,
                height: 630,
                alt: "أسعار خدمات بوابة الرواج في جدة",
            },
        ],
        locale: "ar_SA",
        type: "website",
    },
};

const arReviewed = new Date(PRICING_LAST_REVIEWED).toLocaleDateString(
    "ar-SA-u-ca-gregory",
    { year: "numeric", month: "long" }
);

export default function PricesPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: BUSINESS.url },
        { name: "الأسعار", url: `${BUSINESS.url}/prices` },
    ]);

    const listSchema = generateItemListSchema(
        PRICING_BLOCKS.map((b) => ({
            name: `أسعار ${b.serviceName}`,
            url: `/prices/${b.slug}`,
            description: b.directAnswer,
        })),
        "أسعار خدمات بوابة الرواج في جدة"
    );

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
            />

            {/* البطل */}
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16 lg:py-20">
                <div className="container mx-auto px-4 text-center">
                    <nav aria-label="مسار التنقل" className="text-sm text-white/60 mb-4">
                        <ol className="flex items-center justify-center">
                            <li>
                                <Link href="/" className="hover:text-white">
                                    الرئيسية
                                </Link>
                            </li>
                            <li aria-hidden="true" className="mx-2">/</li>
                            <li>
                                <span className="text-amber-400" aria-current="page">
                                    الأسعار
                                </span>
                            </li>
                        </ol>
                    </nav>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-amber-400" aria-hidden="true" />
                        <span className="text-amber-300 text-sm font-medium">
                            شفافية لا يوفّرها المنافسون في جدة
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                        أسعار الطباعة وتجهيز المعارض في جدة
                    </h1>

                    {/* بلوك الإجابة المباشرة — الصيغة التي تقتبسها محركات AI */}
                    <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-4">
                        نطاقات أسعار استرشادية شفافة لخدماتنا في جدة، مبنية على متوسطات
                        السوق السعودي في {arReviewed}. لكل خدمة عدة فئات (قياسي، فاخر،
                        بريميوم) مع بيان صريح لما يشمله السعر وما لا يشمله، والعوامل التي
                        تُغيّر التكلفة النهائية.
                    </p>

                    <p className="text-white/60 text-sm">
                        السعر النهائي لطلبك يُقدَّم بعرض سعر مخصص خلال ساعة عمل واحدة.
                    </p>
                </div>
            </section>

            {/* شبكة الأسعار — بطاقة لكل خدمة */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {PRICING_BLOCKS.map((block) => {
                            const popular = block.tiers.find((t) => t.popular) ?? block.tiers[0];
                            return (
                                <Link
                                    key={block.slug}
                                    href={`/prices/${block.slug}`}
                                    className="group flex flex-col bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:border-amber-400 hover:shadow-lg transition-all"
                                >
                                    <h2 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                                        أسعار {block.serviceName}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-1">
                                        {block.directAnswer}
                                    </p>

                                    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs text-gray-500">الأكثر طلباً</span>
                                            <Sparkles
                                                className="w-4 h-4 text-amber-500"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <p className="text-sm font-medium text-gray-800 mb-2 leading-relaxed">
                                            {popular.tier}
                                        </p>
                                        <p className="text-lg font-bold text-amber-600 mb-1">
                                            {formatRange(popular.priceFrom, popular.priceTo)}
                                        </p>
                                        <p className="text-xs text-gray-500">{popular.unit}</p>
                                    </div>

                                    <span className="inline-flex items-center text-amber-600 font-bold text-sm">
                                        عرض كل الفئات
                                        <ArrowLeft
                                            className="mr-1 w-4 h-4 group-hover:-translate-x-1 transition-transform"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* لماذا ننشر الأسعار — إشارة ثقة */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                            لماذا ننشر الأسعار بينما المنافسون يُخفونها؟
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "لأن وقتك ثمين",
                                    text: "تعرف قبل التواصل ما إذا كانت خدمتنا ضمن ميزانيتك — لا وقت ضائع في محادثات تنتهي بالخيبة.",
                                },
                                {
                                    title: "لأن الثقة تُبنى بالشفافية",
                                    text: "كل رقم مرافق ببيان صريح لما يشمله وما لا يشمله. لا مفاجآت في الفاتورة النهائية.",
                                },
                                {
                                    title: "لأن الاختلاف في القيمة لا الرقم",
                                    text: "أسعارنا في متوسط السوق — لسنا الأرخص ولا الأغلى. القيمة في الجودة والمدة والضمان، وهو ما تراه في تفاصيل كل عرض.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-100"
                                >
                                    <CheckCircle
                                        className="w-6 h-6 text-green-500 shrink-0 mt-0.5"
                                        aria-hidden="true"
                                    />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* منهجية التسعير — للشفافية الكاملة */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-8">
                        <h2 className="text-xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Info className="w-6 h-6 text-amber-600" aria-hidden="true" />
                            كيف نحسب النطاقات السعرية؟
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            كل نطاق يمثّل الحد الأدنى والأعلى **للسوق السعودي** لتلك الخدمة
                            بمواصفة معيّنة، وليس مجرد أسعارنا الخاصة. الهدف أن تحصل على
                            مرجع واقعي لتخطيط ميزانيتك، سواء تعاملت معنا أو مع غيرنا.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong className="text-gray-900">السعر النهائي</strong> يعتمد
                            على المواصفات الدقيقة (خامة، مقاس، كمية، تشطيب، سرعة تنفيذ)،
                            ويُقدَّم في عرض سعر مكتوب — لا التزام حتى الاعتماد.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong className="text-gray-900">التحديث:</strong> نراجع
                            النطاقات كل ستة أشهر لتعكس تغيّرات أسعار الخامات (فينيل،
                            ألمنيوم، ورق) في السوق. آخر مراجعة: {arReviewed}.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-amber-400 to-amber-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                        احصل على عرض سعر مخصص خلال ساعة
                    </h2>
                    <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
                        شارك تفاصيل مشروعك (الخدمة، الكمية، المواصفات، الموعد) وسنُعدّ لك
                        عرضاً دقيقاً بأفضل سعر ممكن.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/quote"
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            اطلب عرض سعر
                        </Link>
                        <Link
                            href="/faq"
                            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            الأسئلة الشائعة
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
