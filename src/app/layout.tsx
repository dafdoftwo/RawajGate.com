import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Cairo } from "next/font/google";
import { Header } from "@/components/mega-menu";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";
import { generateSiteGraph } from "@/lib/schema";
import { BUSINESS } from "@/lib/business";
import "./globals.css";

/**
 * الخطوط العربية — أوزان مُقلَّصة حسب الاستخدام الفعلي في الكود.
 *
 * إحصاء الاستخدام (تحقّق فعلي عبر grep على كل ملفات tsx):
 *   font-bold   (700) × 709
 *   font-medium (500) ×  86
 *   font-normal (400) ×   0  ← لكنه وزن النص الافتراضي، فيبقى
 *   font-semibold/extrabold ×  0
 *   font-black  (900) ×   0  ← بعد نقل عنوان البطل إلى 700
 *
 * ⚠️ الوزن 900 محذوف عمداً.
 * كان مستخدماً في موضع واحد فقط — عنوان <h1> في الصفحة الرئيسية، أي
 * عنصر LCP نفسه — ويكلّف ملفَّي woff2 (~٤٦ KB) محمَّلين مسبقاً. قياس
 * Lighthouse بخنق شبكة حقيقي أظهر أن ملفات الخطوط تبدأ عند ٧٣١ms ولا
 * تنتهي قبل ٣٤٥٠ms؛ إزالة وزن كامل من هذا الطابور مكسب مباشر.
 *
 * القاعدة: لا تُضِف وزناً هنا قبل أن تعدّ استخداماته. الخطوط العربية
 * أثقل من اللاتينية بمرتين تقريباً لأن محرفها أكثر.
 */
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["700"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#1a365d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "مطبعة في جدة | طباعة تجارية وتجهيز معارض | بوابة الرواج",
    // قالب مختصر — البراند يُضاف مرة واحدة فقط.
    // (كان "%s | بوابة الرواج - Rawaj Gate" مع كتابة البراند داخل كل عنوان = تكرار مزدوج)
    template: "%s | بوابة الرواج",
  },
  description:
    "بوابة الرواج: مطبعة وخدمات دعاية في جدة. طباعة تجارية، تجهيز أجنحة معارض، لافتات محلات 3D، هدايا دعائية، وتصميم هوية بصرية. تسليم خلال 24 ساعة.",
  applicationName: BUSINESS.nameAr,
  authors: [{ name: BUSINESS.nameAr, url: BUSINESS.url }],
  creator: BUSINESS.nameAr,
  publisher: BUSINESS.nameAr,
  metadataBase: new URL(BUSINESS.url),

  /**
   * ⚠️ لا تُضِف `alternates.canonical` هنا مطلقاً.
   *
   * في Next.js App Router حقل `alternates` يُورَّث إلى كل صفحة لا تُعرِّفه.
   * وجود `canonical: "/"` هنا سابقاً جعل 25 صفحة تُصرِّح بأنها نسخة مكررة
   * من الصفحة الرئيسية — أي إلغاء فهرستها فعلياً.
   *
   * كل صفحة مسؤولة عن canonical الخاص بها عبر:
   *   alternates: { canonical: "/المسار" }
   */

  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: BUSINESS.url,
    siteName: BUSINESS.nameAr,
    title: "مطبعة في جدة | طباعة تجارية وتجهيز معارض | بوابة الرواج",
    description:
      "طباعة تجارية، تجهيز أجنحة معارض، لافتات، وهدايا دعائية في جدة. تسليم خلال 24 ساعة.",
    images: [
      {
        url: BUSINESS.ogImage,
        width: 1200,
        height: 630,
        alt: "بوابة الرواج - مطبعة وخدمات معارض في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مطبعة في جدة | بوابة الرواج",
    description: "طباعة تجارية وتجهيز معارض ولافتات وهدايا دعائية في جدة.",
    images: [BUSINESS.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: ألصق رمز التحقق من Google Search Console
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    other: {
      // TODO: رمز Bing Webmaster Tools — مهم لأن ChatGPT Search يعتمد فهرس Bing
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && {
        "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION,
      }),
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization + WebSite + LocalBusiness في @graph واحد.
  // ⚠️ لا FAQPage هنا — كان يُحقن على الـ42 صفحة كلها، ما أنتج FAQPage
  //    مكرراً على صفحات الخدمات (تُبطل الـ rich result) وFAQ غير ذي صلة
  //    على /about و/portfolio و/quote.
  const siteGraph = generateSiteGraph();

  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexArabic.variable} ${cairo.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
        />
      </head>
      <body className="font-body antialiased bg-white text-gray-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:bg-white focus:text-gray-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          تخطَّ إلى المحتوى الرئيسي
        </a>
        <Header />
        <main id="main-content" className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
