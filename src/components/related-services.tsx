import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SILOS, findSilo } from "@/lib/routes";

/**
 * كتلة الروابط الداخلية ذات الصلة.
 *
 * المشكلة التي تعالجها: كانت كل صفحة خدمة تحتوي 3–4 روابط فقط (معظمها
 * إلى /quote والصفحة الأب). Google يميّز بوضوح بين رابط تنقل مكرر في القائمة
 * ورابط سياقي داخل المحتوى — والأخير هو ما ينقل السلطة الموضوعية بين الصفحات.
 *
 * البنية المستهدفة لكل صفحة spoke:
 *   ⬆️  رابط صاعد إلى الـ Pillar الأب
 *   ↔️  2–3 روابط جانبية إلى spokes شقيقة
 *   🔀  1–2 روابط عابرة إلى silo آخر ذي صلة تجارية حقيقية
 *   🏆  رابط إلى معرض الأعمال
 */

/**
 * خريطة الربط العابر بين الـ silos — مبنية على منطق تجاري حقيقي
 * (ما يحتاجه العميل فعلاً مع هذه الخدمة)، لا على تشابه لفظي.
 */
const CROSS_SILO_LINKS: Record<string, { href: string; label: string; reason: string }[]> = {
    "/commercial-printing/business-cards": [
        { href: "/design-services/logo-design", label: "تصميم شعار احترافي", reason: "تحتاج شعاراً قبل طباعة البطاقة" },
        { href: "/commercial-printing/letterheads", label: "الورق الرسمي المطابق", reason: "لاستكمال هوية المراسلات" },
    ],
    "/commercial-printing/flyers-brochures": [
        { href: "/exhibitions-events/roll-up-stands", label: "رول أب ستاند", reason: "للتوزيع داخل المعارض" },
        { href: "/design-services/pre-press", label: "تجهيز ملفات الطباعة", reason: "لضمان دقة الألوان" },
    ],
    "/commercial-printing/folders": [
        { href: "/commercial-printing/letterheads", label: "ورق رسمي", reason: "لمحتوى الملف" },
        { href: "/design-services/branding-identity", label: "هوية بصرية متكاملة", reason: "لتناسق كل المطبوعات" },
    ],
    "/commercial-printing/letterheads": [
        { href: "/commercial-printing/folders", label: "ملفات العروض", reason: "لتقديم المستندات" },
        { href: "/design-services/branding-identity", label: "هوية بصرية", reason: "لتوحيد شكل المراسلات" },
    ],
    "/commercial-printing/menus": [
        { href: "/signage-stickers/wall-decals", label: "ستيكرات جدارية", reason: "لديكور المطعم" },
        { href: "/signage-stickers/shop-signage-3d", label: "لافتة المطعم", reason: "لواجهة المحل" },
    ],
    "/commercial-printing/ncr-books": [
        { href: "/commercial-printing/letterheads", label: "ورق رسمي", reason: "لمراسلات الشركة" },
        { href: "/promotional-gifts/office-gifts", label: "هدايا مكتبية", reason: "لتجهيز المكتب" },
    ],
    "/signage-stickers/shop-signage-3d": [
        { href: "/design-services/branding-identity", label: "الهوية البصرية للمحل", reason: "قبل تنفيذ اللافتة" },
        { href: "/signage-stickers/wall-decals", label: "ستيكرات الواجهة الزجاجية", reason: "لاستكمال واجهة المحل" },
    ],
    "/signage-stickers/vehicle-branding": [
        { href: "/design-services/logo-design", label: "تصميم الشعار", reason: "أساس تصميم التغليف" },
        { href: "/signage-stickers/outdoor-banners", label: "بانرات خارجية", reason: "لحملة إعلانية متكاملة" },
    ],
    "/signage-stickers/wall-decals": [
        { href: "/signage-stickers/shop-signage-3d", label: "لافتات المحلات 3D", reason: "لواجهة المحل" },
        { href: "/design-services/logo-design", label: "تصميم شعار", reason: "قبل تنفيذ الستيكر" },
    ],
    "/signage-stickers/outdoor-banners": [
        { href: "/exhibitions-events/roll-up-stands", label: "رول أب ستاند", reason: "للفعاليات الداخلية" },
        { href: "/signage-stickers/vehicle-branding", label: "تغليف السيارات", reason: "لتوسيع مساحة الإعلان" },
    ],
    "/signage-stickers/product-labels": [
        { href: "/promotional-gifts/bags-packaging", label: "أكياس وتغليف", reason: "لاستكمال تغليف المنتج" },
        { href: "/design-services/pre-press", label: "تجهيز ملفات الطباعة", reason: "لدقة الألوان على العبوة" },
    ],
    "/exhibitions-events/custom-wood-booths": [
        { href: "/exhibitions-events/promo-counters", label: "كاونترات ترويجية", reason: "لتجهيز الجناح" },
        { href: "/promotional-gifts/office-gifts", label: "هدايا لزوار الجناح", reason: "لجذب الزوار وتذكيرهم" },
    ],
    "/exhibitions-events/roll-up-stands": [
        { href: "/commercial-printing/flyers-brochures", label: "فلايرات للتوزيع", reason: "لاستكمال التجهيز" },
        { href: "/exhibitions-events/promo-counters", label: "كاونتر ترويجي", reason: "لعرض المنتجات" },
    ],
    "/exhibitions-events/pop-up-displays": [
        { href: "/exhibitions-events/roll-up-stands", label: "رول أب ستاند", reason: "خيار أخف وأوفر" },
        { href: "/signage-stickers/outdoor-banners", label: "بانرات خارجية", reason: "للتغطية خارج القاعة" },
    ],
    "/exhibitions-events/system-booths": [
        { href: "/exhibitions-events/custom-wood-booths", label: "أجنحة خشبية مخصصة", reason: "للتميّز عن المنافسين" },
        { href: "/promotional-gifts/wearables", label: "زي موحد لفريق الجناح", reason: "لمظهر احترافي" },
    ],
    "/exhibitions-events/promo-counters": [
        { href: "/commercial-printing/flyers-brochures", label: "فلايرات وبروشورات", reason: "للتوزيع من الكاونتر" },
        { href: "/promotional-gifts/tech-gadgets", label: "هدايا تقنية", reason: "لتوزيعها على الزوار" },
    ],
    "/promotional-gifts/office-gifts": [
        { href: "/promotional-gifts/tech-gadgets", label: "هدايا تقنية", reason: "لخيارات أحدث" },
        { href: "/design-services/logo-design", label: "تصميم الشعار", reason: "قبل الطباعة على الهدايا" },
    ],
    "/promotional-gifts/tech-gadgets": [
        { href: "/promotional-gifts/bags-packaging", label: "أكياس التغليف", reason: "لتغليف الهدية" },
        { href: "/exhibitions-events/promo-counters", label: "كاونتر توزيع", reason: "للفعاليات والمعارض" },
    ],
    "/promotional-gifts/wearables": [
        { href: "/exhibitions-events/system-booths", label: "تجهيز جناح معرض", reason: "لفريق الجناح" },
        { href: "/design-services/branding-identity", label: "هوية بصرية", reason: "لتوحيد شكل الزي" },
    ],
    "/promotional-gifts/bags-packaging": [
        { href: "/signage-stickers/product-labels", label: "ملصقات المنتجات", reason: "لاستكمال التغليف" },
        { href: "/promotional-gifts/office-gifts", label: "هدايا مكتبية", reason: "لتعبئتها داخل الأكياس" },
    ],
    "/design-services/logo-design": [
        { href: "/design-services/branding-identity", label: "هوية بصرية متكاملة", reason: "الخطوة التالية بعد الشعار" },
        { href: "/commercial-printing/business-cards", label: "طباعة بطاقات العمل", reason: "أول تطبيق للشعار" },
    ],
    "/design-services/branding-identity": [
        { href: "/commercial-printing/folders", label: "ملفات العروض", reason: "من تطبيقات الهوية" },
        { href: "/signage-stickers/shop-signage-3d", label: "لافتة المحل", reason: "تطبيق الهوية على الواجهة" },
    ],
    "/design-services/pre-press": [
        { href: "/commercial-printing/flyers-brochures", label: "طباعة الفلايرات", reason: "بعد تجهيز الملف" },
        { href: "/signage-stickers/product-labels", label: "ملصقات المنتجات", reason: "تحتاج دقة لونية عالية" },
    ],
};

export function RelatedServices({ currentPath }: { currentPath: string }) {
    const [, siloSlug] = currentPath.split("/");
    const silo = findSilo(siloSlug);
    if (!silo) return null;

    const currentSlug = currentPath.split("/")[2];

    // روابط جانبية: 3 spokes شقيقة من نفس الـ silo
    const siblings = silo.spokes.filter((s) => s.slug !== currentSlug).slice(0, 3);

    // روابط عابرة إلى silos أخرى
    const crossLinks = CROSS_SILO_LINKS[currentPath] ?? [];

    return (
        <section className="py-16 bg-gray-50 border-t border-gray-100" aria-labelledby="related-heading">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 id="related-heading" className="text-2xl font-heading font-bold text-gray-900 mb-8">
                        خدمات مرتبطة قد تحتاجها
                    </h2>

                    {crossLinks.length > 0 && (
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {crossLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all"
                                >
                                    <div className="flex-1">
                                        <span className="block font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-1">
                                            {link.label}
                                        </span>
                                        <span className="block text-sm text-gray-500">{link.reason}</span>
                                    </div>
                                    <ArrowLeft
                                        className="w-5 h-5 text-amber-500 shrink-0 mt-1 group-hover:-translate-x-1 transition-transform"
                                        aria-hidden="true"
                                    />
                                </Link>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm text-gray-500 ml-2">
                            المزيد من قسم {silo.label}:
                        </span>
                        {siblings.map((sibling) => (
                            <Link
                                key={sibling.slug}
                                href={`/${silo.slug}/${sibling.slug}`}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-amber-400 hover:text-amber-600 transition-colors"
                            >
                                {sibling.label}
                            </Link>
                        ))}
                        <Link
                            href={`/${silo.slug}`}
                            className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                            كل خدمات {silo.label}
                        </Link>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
                        <Link href="/portfolio" className="text-amber-600 font-medium hover:underline">
                            شاهد نماذج من أعمالنا المنفذة في جدة
                        </Link>
                        <span className="text-gray-300" aria-hidden="true">·</span>
                        <Link href="/blog" className="text-amber-600 font-medium hover:underline">
                            اقرأ أدلتنا الفنية في المدونة
                        </Link>
                        <span className="text-gray-300" aria-hidden="true">·</span>
                        <Link href="/quote" className="text-amber-600 font-medium hover:underline">
                            اطلب عرض سعر مجاني
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

/** كل الـ silos — تُستخدم في صفحات الـ Pillar */
export function AllSilosLinks({ currentSilo }: { currentSilo?: string }) {
    const others = SILOS.filter((s) => s.slug !== currentSilo);

    return (
        <section className="py-16 bg-gray-50 border-t border-gray-100" aria-labelledby="other-silos-heading">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 id="other-silos-heading" className="text-2xl font-heading font-bold text-gray-900 mb-8">
                        أقسام أخرى في بوابة الرواج
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {others.map((silo) => (
                            <Link
                                key={silo.slug}
                                href={`/${silo.slug}`}
                                className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all"
                            >
                                <span className="block font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                                    {silo.label}
                                </span>
                                <span className="block text-sm text-gray-500">
                                    {silo.spokes.map((s) => s.label).join(" · ")}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
