import Image from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  /** استخدمه للصورة الأولى فوق الطية فقط (LCP) — لا تُكثر منه */
  priority?: boolean;
  /**
   * وصف أحجام العرض للمتصفح ليختار المقاس الصحيح من الـ srcset.
   * الافتراضي يناسب شبكة من عمود واحد على الجوال وعمودين/ثلاثة على الديسكتوب.
   */
  sizes?: string;
}

/**
 * مكوّن الصور المُحسَّن.
 *
 * كان يستخدم <img> خاماً — أي صفر srcset وصفر تحويل صيغ: كان جوال بعرض 375px
 * يُنزّل نفس ملف الديسكتوب. الآن عبر next/image نحصل على:
 *   • AVIF/WebP تلقائياً حسب دعم المتصفح
 *   • srcset متجاوب بمقاسات متعددة
 *   • أبعاد جوهرية تمنع Layout Shift (CLS)
 *   • lazy loading أصلي
 *
 * الواجهة (props) مطابقة للنسخة السابقة، لذا لا حاجة لتعديل أي من الـ 105
 * استدعاءات في الموقع.
 */
export function GeoImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      quality={82}
      className={cn("w-full h-auto object-cover rounded-xl", className)}
    />
  );
}

// أسماء بديلة للتوافق مع الاستدعاءات القائمة
export const BusinessCardImage = GeoImage;
export const OutdoorSignageImage = GeoImage;
export const ExhibitionImage = GeoImage;
export const WorkshopImage = GeoImage;
