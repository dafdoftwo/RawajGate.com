import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── تحسين الصور ───────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // سنة
  },

  // ⚡ tree-shake حزم كبيرة تُستورد جزئياً
  // lucide-react = 44MB على القرص، لكن نستخدم 46 أيقونة فقط.
  // هذا يستورد الأيقونات المطلوبة تلقائياً بدل الحزمة كاملة.
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  compress: true,
  poweredByHeader: false, // إخفاء X-Powered-By
  reactStrictMode: true,

  // ── ترويسات الأمان والكاش ─────────────────────────────────
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()",
          },
        ],
      },
      {
        // أصول ثابتة — كاش دائم
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/Digital-printing-video.mp4",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // ── إعادة التوجيه ─────────────────────────────────────────
  async redirects() {
    return [
      // /quote هي فعلياً صفحة "تواصل معنا" — الفوتر كان يشير إلى /contact (404)
      { source: "/contact", destination: "/quote", permanent: true },
      { source: "/contact-us", destination: "/quote", permanent: true },

      // مسارات شائعة قد ترد في backlinks قديمة أو يجربها الزوار
      { source: "/services", destination: "/commercial-printing", permanent: true },
      { source: "/printing", destination: "/commercial-printing", permanent: true },
      { source: "/exhibitions", destination: "/exhibitions-events", permanent: true },
      { source: "/gifts", destination: "/promotional-gifts", permanent: true },
      { source: "/signage", destination: "/signage-stickers", permanent: true },
      { source: "/design", destination: "/design-services", permanent: true },
    ];
  },
};

export default nextConfig;
