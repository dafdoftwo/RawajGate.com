"use client";

import Script from "next/script";

/**
 * وسوم التحليلات والإعلانات.
 *
 * ⚠️ الوضع قبل هذا المكوّن: حسابا Google Ads فقط، بلا GA4 ولا تتبع تحويلات.
 *    أي إنفاق إعلاني بلا قياس عائد.
 *
 * تحويلات Google Ads (اختياري) تُضبط في .env.local أو في متغيّرات
 * بيئة مشروع Cloudflare Pages:
 *   NEXT_PUBLIC_ADS_CONVERSION_LABEL=AW-933899057/xxxxxxxxxxxx
 */

/**
 * مُعرِّف قياس GA4 — Property «RawajGate.com» على حساب senatorever@gmail.com
 * (Property ID 547263199 · Stream ID 15332858832 · توقيت الرياض · ريال سعودي)
 *
 * ⚠️ مكتوب في الكود عمداً لا في متغيّر بيئة.
 * السبب: الموقع يُبنى على Cloudflare Pages من مستودع Git. متغيّر بيئة ناقص
 * لا يُفشل البناء — بل يُنتج موقعاً بلا تتبّع إطلاقاً، ولا يُكتشف ذلك إلا
 * بعد أسابيع من فقدان البيانات. المُعرِّف ليس سرّاً؛ هو ظاهر في HTML كل
 * صفحة لأي زائر. فالمخاطرة كلها في نسيانه، لا في كشفه.
 */
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "G-4JSVDS7JSZ";

/** حسابات Google Ads القائمة */
export const ADS_IDS = ["AW-933899057", "AW-862403831"] as const;

/** أول مُعرِّف صالح لتحميل سكربت gtag */
const PRIMARY_ID = GA4_ID || ADS_IDS[0];

export function Analytics() {
  // لا تُحمِّل وسوم التتبع أثناء التطوير — تلوّث البيانات وتُبطئ الـ dev server
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      {/*
        ⚡ lazyOnload لا afterInteractive.

        القياس على الجوال (Lighthouse · 4G مُقيّد) أظهر أن gtag يُنزّل ثلاث
        حِزم منفصلة — واحدة لكل مُعرِّف (GA4 + حسابا Ads) — بمجموع ٤٥٧ KB
        و~٤١٠ms على الخيط الرئيسي. كانت أكبر كتلة طرف ثالث على الصفحة.

        الفرق بين الاستراتيجيتين:
          afterInteractive → يبدأ التحميل فور ترطيب الصفحة، فيزاحم عمل React
          lazyOnload       → ينتظر حدث load، أي بعد أن يصبح الموقع مستخدَماً

        ما لا نخسره: زيارات الصفحة والتحويلات تُسجَّل كاملة — التأخير جزء من
        الثانية ولا يفوت أي حدث، لأن dataLayer يتراكم قبل تحميل السكربت.
        ما نكسبه: TTI أسرع بوضوح، وهو ما يقيسه جوجل في تقييم الصفحة.
      */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${PRIMARY_ID}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA4_ID ? `gtag('config', '${GA4_ID}', { send_page_view: true });` : ""}
          ${ADS_IDS.map((id) => `gtag('config', '${id}');`).join("\n          ")}
        `}
      </Script>
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   مساعدات تتبع الأحداث — تُستدعى من مكوّنات العميل
   ────────────────────────────────────────────────────────── */

type GtagFn = (
  command: string,
  targetOrName: string,
  params?: Record<string, unknown>
) => void;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const g = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof g === "function" ? g : null;
}

/** حدث توليد عميل محتمل — يُستدعى عند إرسال نموذج طلب السعر */
export function trackLead(service: string) {
  const gtag = getGtag();
  if (!gtag) return;

  // حدث GA4 القياسي
  gtag("event", "generate_lead", {
    event_category: "quote",
    event_label: service,
    currency: "SAR",
    value: 1,
  });

  // تحويل Google Ads (يتطلب ضبط NEXT_PUBLIC_ADS_CONVERSION_LABEL)
  const conversionLabel = process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL;
  if (conversionLabel) {
    gtag("event", "conversion", { send_to: conversionLabel });
  }
}

/** حدث النقر على واتساب — قناة التحويل الأساسية في السوق السعودي */
export function trackWhatsApp(source: string) {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", "contact_whatsapp", {
    event_category: "contact",
    event_label: source,
  });
}

/** حدث النقر على رقم الهاتف */
export function trackCall(source: string) {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", "contact_phone", {
    event_category: "contact",
    event_label: source,
  });
}
