"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, Printer, MapPin, Calendar, ChevronRight, ChevronLeft } from "lucide-react";

export interface Review {
    id: number;
    name: string;
    role: string;
    image: string;
    rating: number;
    text: string;
    services: string[];
    location: string;
    date: string;
    category: string;
}

/**
 * سلايدر التقييمات — المكوّن التفاعلي الوحيد على الصفحة الرئيسية.
 *
 * عزله هنا يسمح لبقية الصفحة أن تبقى Server Component، فيخرج framer-motion
 * ومنطق الحالة من المسار الحرج للصفحة الأهم في الموقع.
 *
 * ملاحظة SEO: كل التقييمات تُصيَّر في الـ DOM (المخفي منها بـ hidden فقط)،
 * لذا يقرأ الزاحف نصوصها كاملة رغم أن المستخدم يرى واحداً في كل مرة.
 */
export function ReviewsSlider({ reviews }: { reviews: Review[] }) {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((p) => (p + 1) % reviews.length);
    const prev = () => setCurrent((p) => (p - 1 + reviews.length) % reviews.length);

    return (
        <>
            <div className="relative max-w-4xl mx-auto mb-12">
                <button
                    onClick={next}
                    aria-label="التقييم التالي"
                    className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-amber-500 hover:shadow-xl transition-all z-10"
                >
                    <ChevronRight className="w-6 h-6" aria-hidden="true" />
                </button>
                <button
                    onClick={prev}
                    aria-label="التقييم السابق"
                    className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 md:-translate-x-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-amber-500 hover:shadow-xl transition-all z-10"
                >
                    <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                </button>

                {/* كل التقييمات في الـ DOM — غير النشط مخفي بصرياً فقط */}
                {reviews.map((review, index) => (
                    <article
                        key={review.id}
                        hidden={index !== current}
                        aria-roledescription="شريحة"
                        aria-label={`تقييم ${index + 1} من ${reviews.length}`}
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
                    >
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 order-2 md:order-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-lg font-bold text-gray-900">
                                        {review.rating.toFixed(1)}
                                    </span>
                                    <div className="flex items-center gap-1" aria-label={`تقييم ${review.rating} من 5`}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-amber-400 fill-current"
                                                viewBox="0 0 20 20"
                                                aria-hidden="true"
                                            >
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>

                                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                                    {review.text}
                                </blockquote>

                                <div className="flex flex-wrap gap-2">
                                    {review.services.map((service) => (
                                        <span
                                            key={service}
                                            className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                                        >
                                            <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col items-center md:items-end text-center md:text-right order-1 md:order-2 md:w-48">
                                <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-amber-100 mb-4 shrink-0">
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        width={96}
                                        height={96}
                                        sizes="96px"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <p className="font-bold text-gray-900 text-lg">{review.name}</p>
                                <p className="text-sm text-gray-500 mb-3">{review.role}</p>
                                <span className="inline-flex items-center gap-1 text-gray-400 text-xs mb-1">
                                    <MapPin className="w-4 h-4" aria-hidden="true" />
                                    {review.location}
                                </span>
                                <span className="inline-flex items-center gap-1 text-gray-400 text-xs mb-3">
                                    <Calendar className="w-4 h-4" aria-hidden="true" />
                                    {review.date}
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                                    <Printer className="w-3 h-3" aria-hidden="true" />
                                    {review.category}
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="flex justify-center gap-2 mb-16">
                {reviews.map((review, i) => (
                    <button
                        key={review.id}
                        onClick={() => setCurrent(i)}
                        aria-label={`اذهب إلى التقييم ${i + 1}`}
                        aria-current={i === current}
                        className={`h-3 rounded-full transition-all ${
                            i === current ? "bg-amber-500 w-6" : "bg-gray-300 hover:bg-gray-400 w-3"
                        }`}
                    />
                ))}
            </div>
        </>
    );
}
