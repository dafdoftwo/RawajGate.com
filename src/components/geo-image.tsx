import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Simple optimized image component
 * Uses standard HTML img with lazy loading and proper accessibility
 */
export function GeoImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false,
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn(
        "w-full h-auto object-cover rounded-xl",
        className
      )}
    />
  );
}

// Aliases for backward compatibility
export const BusinessCardImage = GeoImage;
export const OutdoorSignageImage = GeoImage;
export const ExhibitionImage = GeoImage;
export const WorkshopImage = GeoImage;
