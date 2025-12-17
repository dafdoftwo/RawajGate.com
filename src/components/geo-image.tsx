import { cn } from "@/lib/utils";

interface GeoImageProps {
  src: string;
  alt: string;
  caption?: string;
  cameraModel?: string;
  district?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  shotTime?: "صباحي" | "مسائي" | "داخلي" | "خارجي";
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

// Jeddah districts for variety
const JEDDAH_DISTRICTS = [
  "الصفا",
  "التحلية",
  "الروضة",
  "الكورنيش",
  "الحمراء",
  "السلامة",
  "البلد",
  "الزهراء",
  "الأندلس",
  "الفيصلية",
];

// Camera models for authenticity
const CAMERA_MODELS = [
  "iPhone 15 Pro Max",
  "iPhone 14 Pro",
  "Sony A7R IV (85mm)",
  "Canon EOS R6 (35mm)",
  "DJI Mavic 3 (Drone)",
  "Samsung Galaxy S24 Ultra",
  "Fujifilm GFX 100S",
];

// Simple deterministic hash function for consistent hydration
function getHash(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Generate deterministic random float between 0 and 1
function getSeededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

// Generate consistent Jeddah coordinates based on seed
function getSeededJeddahCoords(seed: number) {
  const rand1 = getSeededRandom(seed);
  const rand2 = getSeededRandom(seed + 1);
  const lat = 21.40 + rand1 * (21.65 - 21.40); // Widened Jeddah range slightly
  const lng = 39.10 + rand2 * (39.25 - 39.10);
  return { lat: parseFloat(lat.toFixed(4)), lng: parseFloat(lng.toFixed(4)) };
}

export function GeoImage({
  src,
  alt,
  caption,
  cameraModel,
  district,
  coordinates,
  shotTime = "داخلي",
  width = 800,
  height = 600,
  className,
  priority = false,
}: GeoImageProps) {
  // Generate a stable seed from src and alt
  const seed = getHash(src + alt);

  // Use provided values or generate consistent "random" ones based on seed
  // This ensures Server SSR matches Client Hydration
  const camera = cameraModel || CAMERA_MODELS[seed % CAMERA_MODELS.length];
  const location = district || JEDDAH_DISTRICTS[seed % JEDDAH_DISTRICTS.length];
  const coords = coordinates || getSeededJeddahCoords(seed);

  // Generate enhanced alt text with location
  const enhancedAlt = `${alt} - ${location}، جدة`;

  // Generate caption if not provided
  const finalCaption = caption || `${alt} في ${location}، جدة`;

  return (
    <figure
      itemScope
      itemType="https://schema.org/ImageObject"
      className={cn("geo-image relative overflow-hidden", className)}
    >
      <img
        src={src}
        alt={enhancedAlt}
        title={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        data-camera={camera}
        data-geo={`${coords.lat}, ${coords.lng}`}
        data-district={location}
        data-location={`${location}, Jeddah`}
        data-shot-time={shotTime}
        className={cn(
          "w-full h-auto object-cover rounded-xl shadow-lg",
          "transition-transform duration-300 hover:scale-105"
        )}
      />

      {/* Screen reader only caption for accessibility */}
      <figcaption className="sr-only">{finalCaption}</figcaption>

      {/* Schema.org meta tags */}
      <meta itemProp="contentLocation" content="Jeddah, Saudi Arabia" />
      <meta itemProp="name" content={alt} />
      <meta itemProp="description" content={enhancedAlt} />
      <meta itemProp="encodingFormat" content="image/webp" />
    </figure>
  );
}

// Pre-configured image variants for common use cases
export function BusinessCardImage(props: Omit<GeoImageProps, "shotTime">) {
  return <GeoImage {...props} shotTime="داخلي" />;
}

export function OutdoorSignageImage(props: Omit<GeoImageProps, "shotTime">) {
  return <GeoImage {...props} shotTime="خارجي" cameraModel="DJI Mavic 3 (Drone)" />;
}

export function ExhibitionImage(props: Omit<GeoImageProps, "shotTime">) {
  return <GeoImage {...props} shotTime="داخلي" cameraModel="Sony A7R IV (85mm)" />;
}

export function WorkshopImage(props: Omit<GeoImageProps, "shotTime">) {
  return <GeoImage {...props} shotTime="داخلي" cameraModel="iPhone 15 Pro Max" />;
}
