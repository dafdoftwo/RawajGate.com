import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * ☁️ النشر الثابت — Cloudflare Pages (الحد المجاني)
   *
   * كل الموقع يُولَّد كملفات HTML/CSS/JS ثابتة تُخدَم من CDN كلاود فلير
   * مباشرة. النتيجة:
   *   • استجابة لحظية — لا خادم ولا cold start
   *   • طلبات وباندويث غير محدودة على الخطة المجانية
   *   • صفر تكلفة تشغيل
   *
   * النشر المجدول للمقالات يتم عبر GitHub Actions (.github/workflows/deploy.yml)
   * الذي يفحص كل ساعتين ويعيد البناء **فقط** عند استحقاق مقال — فيبقى
   * الاستهلاك ~12 بناءً شهرياً من أصل 500 مسموحة.
   */
  output: "export",

  /**
   * ── الصور: محمّل مخصص بدل مُحسِّن Next.js ──
   *
   * مُحسِّن Next.js يحتاج خادم Node غير متاح في النشر الثابت،
   * وبدائل كلاود فلير (Images / Image Resizing) ليست ضمن الخطة المجانية.
   *
   * الحل: مقاسات مولَّدة وقت البناء + محمّل يختار الأنسب.
   * انظر: scripts/generate-image-variants.mjs · src/lib/image-loader.ts
   */
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
  },

  /**
   * شرطة مائلة في نهاية المسارات.
   * الاستضافة الثابتة تخدم /blog/ كملف /blog/index.html — بدون هذا
   * تحدث إعادة توجيهات غير متوقعة وأحياناً 404.
   */
  trailingSlash: true,

  /**
   * ⚠️ headers() و redirects() لا تعملان مع output:"export"
   * لأنهما تحتاجان خادماً. انتقلتا إلى:
   *   • public/_headers   — ترويسات الأمان والكاش
   *   • public/_redirects — إعادة التوجيه
   * وكلاهما تقرؤه Cloudflare Pages أصلاً بنفس النتيجة وبلا خادم.
   */

  // tree-shake: نستخدم 46 أيقونة فقط من lucide-react (44MB على القرص)
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
