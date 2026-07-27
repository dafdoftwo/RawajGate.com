/**
 * محمّل الصور المخصص — للنشر الثابت على Cloudflare
 * ==================================================
 *
 * يستبدل مُحسِّن Next.js (الذي يحتاج خادم Node) بملفات مقاسات مولَّدة
 * مسبقاً وقت البناء عبر scripts/generate-image-variants.mjs
 *
 * كيف يعمل:
 *   طلب: /images/logo.webp بعرض 750
 *   ← يختار أقرب مقاس متوفر أعلى أو مساوٍ (828)
 *   ← يُرجع: /images/_variants/logo-828.webp
 *
 * النتيجة: srcset كامل يعمل تماماً كما مع Vercel، بتكلفة تشغيل صفر.
 *
 * ⚠️ ملاحظة: هذا الملف يعمل على العميل والسيرفر معاً — أبقِه بلا تبعيات.
 */

/** يجب أن تطابق WIDTHS في scripts/generate-image-variants.mjs */
const VARIANT_WIDTHS = [640, 828, 1200, 1920];

/** الامتدادات التي يعالجها المولّد فعلاً — أي شيء آخر يمرّ كما هو */
const PROCESSED = /\.(webp|png|jpe?g)$/i;

export default function cloudflareImageLoader({
    src,
    width,
}: {
    src: string;
    width: number;
    quality?: number;
}): string {
    /*
      ⚠️ لا تُعِد كتابة أي مسار لسنا **متأكدين** أن له مقاساً مولَّداً.
      المحمّل لا يستطيع فحص القرص، فأي تخمين خاطئ يعني 404 صامتاً في
      srcset — لا يظهر في البناء ولا في الـ lint، بل عند الزائر فقط.

      لذلك: نعيد الكتابة **فقط** لما هو داخل /images/ وبامتداد يعالجه
      scripts/generate-image-variants.mjs. كل ما عداه يمرّ كما هو.
    */
    if (!src.startsWith("/images/") || !PROCESSED.test(src)) {
        return src;
    }

    // اختر أصغر مقاس يغطي العرض المطلوب
    const target =
        VARIANT_WIDTHS.find((w) => w >= width) ??
        VARIANT_WIDTHS[VARIANT_WIDTHS.length - 1];

    // /images/reviews/ahmed.webp → reviews__ahmed
    const baseName = src
        .replace(/^\/images\//, "")
        .replace(/\.[^.]+$/, "")
        .replace(/\//g, "__");

    return `/images/_variants/${baseName}-${target}.webp`;
}
