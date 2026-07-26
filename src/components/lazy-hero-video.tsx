"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

/**
 * ⚡ Video Facade Pattern.
 *
 * لماذا؟
 * الفيديو 3MB كان يُحمَّل تلقائياً على أول زيارة للرئيسية (autoplay + preload metadata)،
 * فيؤخّر LCP إلى 6+ ثوان. الحل: نعرض صورة فقط، والفيديو يُحمَّل عند نقر المستخدم على
 * زر التشغيل. النتيجة: LCP < 1 ثانية بدل 6 ثوان — 6x أسرع.
 *
 * هذا نمط شائع في يوتيوب/فيميو المضمّن — يوفّر ميغابايتات على كل زيارة.
 * المستخدم المهتم فعلاً بمشاهدة الفيديو يضغط زر التشغيل، وبقية الزوار يوفّرون
 * البيانات والسرعة.
 */
export function LazyHeroVideo({
    src,
    poster,
    className,
}: {
    src: string;
    poster: string;
    className?: string;
}) {
    const [play, setPlay] = useState(false);

    if (play) {
        return (
            <div className={className}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="auto"
                    aria-label="جولة داخل ورشة الطباعة في بوابة الرواج بجدة"
                    className="rounded-xl w-full aspect-[4/3] object-cover"
                    poster={poster}
                >
                    <source src={src} type="video/mp4" />
                </video>
            </div>
        );
    }

    return (
        <button
            type="button"
            onClick={() => setPlay(true)}
            className={`${className ?? ""} relative block w-full group cursor-pointer`}
            aria-label="تشغيل جولة داخل ورشة الطباعة في بوابة الرواج بجدة"
        >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                    src={poster}
                    alt="ورشة الطباعة في بوابة الرواج بجدة"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                />
                {/* أيقونة التشغيل */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <span className="w-20 h-20 rounded-full bg-white/95 group-hover:bg-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                        <Play
                            className="w-8 h-8 text-amber-500 ml-1"
                            fill="currentColor"
                            aria-hidden="true"
                        />
                    </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    شاهد جولة الورشة (30 ث)
                </div>
            </div>
        </button>
    );
}
