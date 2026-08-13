/**
 * مصدر الحقيقة الواحد لبيانات النشاط التجاري (NAP)
 * ================================================
 * كل مكان في الموقع يعرض اسم الشركة أو عنوانها أو هاتفها يجب أن يستورد من هنا.
 *
 * ⚠️ تحذير Local SEO حرج:
 * الاسم والعنوان والهاتف (NAP) يجب أن تطابق **حرفياً** ما هو مسجّل في
 * Google Business Profile. أي اختلاف — حتى "شارع" مقابل "ش." — يُضعف
 * إشارة التطابق ويؤثر على الترتيب في Local Pack.
 *
 * الحقول المعلّمة بـ TODO تحتاج تأكيداً منك قبل الإطلاق.
 */

export const BUSINESS = {
    // ── الهوية ──────────────────────────────────────────────
    nameAr: "بوابة الرواج",
    nameEn: "Rawaj Gate",
    fullNameAr: "بوابة الرواج - Rawaj Gate",

    /** TODO: ضع الاسم كما هو في السجل التجاري */
    legalName: "مؤسسة بوابة الرواج للدعاية والإعلان",
    /** TODO: رقم السجل التجاري — إشارة ثقة قوية في السوق السعودي */
    crNumber: "",
    /** TODO: الرقم الضريبي (15 رقماً) */
    vatNumber: "",

    foundingDate: "2009",
    url: "https://rawajgate.com",

    // ── العنوان ─────────────────────────────────────────────
    /**
     * ⚠️ كان الموقع يعرض 3 عناوين مختلفة قبل التوحيد:
     *   - schema.ts        → "شارع التحلية"
     *   - footer + الرئيسية → "شارع التحلية، حي الروضة"
     *   - quote/page.tsx   → "حي الروضة، شارع الأمير سلطان"
     * اعتمدنا الصيغة الأكثر تكراراً. TODO: أكّد الشارع الصحيح وطابقه مع GBP.
     */
    address: {
        street: "شارع التحلية",
        district: "حي الروضة",
        city: "جدة",
        region: "منطقة مكة المكرمة",
        /** TODO: أكّد الرمز البريدي */
        postalCode: "21432",
        country: "SA",
        countryName: "المملكة العربية السعودية",
        /** السطر الكامل للعرض في الواجهة */
        full: "شارع التحلية، حي الروضة، جدة، المملكة العربية السعودية",
    },

    /** TODO: خذ الإحداثيات الدقيقة من Google Business Profile */
    geo: { lat: 21.5234, lng: 39.1876 },

    // ── التواصل ─────────────────────────────────────────────
    /*
      ⚠️ هذا هو المصدر الوحيد لرقم الهاتف. لا تكتب الرقم في أي صفحة.

      كان مكرَّراً يدوياً في خمسة وثلاثين موضعاً عبر خمسة وعشرين ملفاً
      (روابط tel: وwa.me في كل صفحة خدمة). ومعنى ذلك أن أي تغيير للرقم
      يخرج ناقصاً حتماً: تُحدَّث بعض الصفحات ويبقى غيرها يوجّه العملاء
      إلى رقم لم يعد يعمل — وهذا عطل لا يظهر في أي بناء ولا اختبار،
      بل في مكالمة لا تصل.

      يحرس هذا الآن scripts/check-hardcoded-contact.mjs ضمن prebuild:
      أي رقم مكتوب مباشرة في صفحة يُفشل البناء.
    */
    phone: {
        /** صيغة E.164 — للـ schema و tel: */
        e164: "+966564612017",
        /** للعرض للمستخدم */
        display: "+966 56 461 2017",
        /** بدون + للـ wa.me */
        whatsapp: "966564612017",
    },
    email: "info@rawajgate.com",

    // ── ساعات العمل ─────────────────────────────────────────
    hours: {
        daysAr: "السبت - الخميس",
        daysSchema: [
            "Saturday", "Sunday", "Monday",
            "Tuesday", "Wednesday", "Thursday",
        ] as const,
        opens: "09:00",
        closes: "21:00",
        displayAr: "السبت - الخميس: 9:00 ص - 9:00 م",
    },

    // ── الأصول ──────────────────────────────────────────────
    logo: "/images/logo-rg.png",
    ogImage: "/images/rawaj-gate-printing-workshop-team-at-work.webp",

    // ── الحسابات الاجتماعية ─────────────────────────────────
    /**
     * ⚠️ يُستخدم في schema.sameAs وفي روابط الفوتر.
     * لا تضع إلا الحسابات **الموجودة فعلاً**. رابط sameAs لحساب غير موجود
     * إشارة سلبية لدى Google ومحركات الذكاء الاصطناعي.
     * اترك القيمة فارغة "" ليختفي الرابط تلقائياً من الواجهة ومن الـ schema.
     */
    social: {
        instagram: "",
        x: "",
        linkedin: "",
        /** رابط ملف Google Business Profile — أهم رابط في القائمة */
        googleBusiness: "",
    } as Record<"instagram" | "x" | "linkedin" | "googleBusiness", string>,
} as const;

/** روابط sameAs الصالحة فقط (تتجاهل الفارغة تلقائياً) */
export const SAME_AS: string[] = Object.values(BUSINESS.social).filter(
    (v) => v.length > 0
);

/** رابط واتساب مع رسالة مبدئية اختيارية */
export function whatsappLink(message?: string): string {
    const base = `https://wa.me/${BUSINESS.phone.whatsapp}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** رابط الاتصال */
export const telLink = `tel:${BUSINESS.phone.e164}`;

/** السنة الحالية — لحقوق النشر (يُحسب وقت البناء، لا يتقادم) */
export const currentYear = new Date().getFullYear();
