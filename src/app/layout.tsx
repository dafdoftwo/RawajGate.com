import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Cairo } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/mega-menu";
import { Footer } from "@/components/footer";
import { generateLocalBusinessSchema, generateFAQSchema, DEFAULT_FAQS } from "@/lib/schema";
import "./globals.css";

// Arabic fonts optimized for performance
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "بوابة الرواج | شريكك الاستراتيجي في الطباعة وتجهيز المعارض بجدة",
    template: "%s | بوابة الرواج - Rawaj Gate",
  },
  description:
    "بوابة الرواج - خدمات طباعة احترافية، تجهيز معارض، لافتات، وهدايا دعائية في جدة. تسليم خلال 24 ساعة. اطلب عرض سعر الآن!",
  keywords: [
    "طباعة جدة",
    "مطبعة جدة",
    "أجنحة معارض",
    "هدايا دعائية",
    "لافتات محلات",
    "تغليف سيارات",
    "بطاقات عمل",
    "طباعة تجارية",
    "Jeddah printing",
    "exhibition booth",
    "corporate gifts",
  ],
  authors: [{ name: "Rawaj Gate", url: "https://rawajgate.com" }],
  creator: "Rawaj Gate",
  metadataBase: new URL("https://rawajgate.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://rawajgate.com",
    siteName: "بوابة الرواج - Rawaj Gate",
    title: "بوابة الرواج | شريكك الاستراتيجي في الطباعة وتجهيز المعارض بجدة",
    description:
      "خدمات طباعة احترافية، تجهيز معارض، لافتات، وهدايا دعائية في جدة. تسليم خلال 24 ساعة.",
    images: [
      {
        url: "/images/rawaj-gate-printing-workshop-team-at-work.webp",
        width: 1200,
        height: 630,
        alt: "بوابة الرواج - مطبعة وخدمات معارض في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "بوابة الرواج | طباعة ومعارض جدة",
    description: "خدمات طباعة احترافية وتجهيز معارض في جدة",
    images: ["/images/rawaj-gate-printing-workshop-team-at-work.webp"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate JSON-LD schemas
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(DEFAULT_FAQS);

  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexArabic.variable} ${cairo.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-body antialiased bg-white text-gray-900">
        <Header />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />

        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-933899057"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-933899057');
            gtag('config', 'AW-862403831');
          `}
        </Script>
      </body>
    </html>
  );
}
