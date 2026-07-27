import type { Metadata } from "next";

import { BlogIndexView } from "@/components/blog/blog-index-view";
import { BUSINESS } from "@/lib/business";

/**
 * فهرس المدونة — الصفحة الأولى.
 *
 * الصفحات ٢+ في `page/[page]/page.tsx`، وكلاهما يصيّر `BlogIndexView`
 * نفسه فلا يمكن أن يتباعدا.
 *
 * ⚠️ هذه الصفحة كانت تعرض **كل** المقالات المنشورة بلا تقسيم. راجع
 * `src/lib/articles/pagination.ts` لتفصيل السبب وأرقام النمو.
 */

export const metadata: Metadata = {
    title: "مدونة الطباعة والتصميم وتجهيز المعارض",
    description:
        "أدلة عملية بأرقام حقيقية في الطباعة التجارية، أسعار الخدمات، لافتات المحلات، تجهيز أجنحة المعارض، والتصميم — من واقع عملنا في سوق جدة.",
    alternates: { canonical: "/blog" },
    keywords: [
        "مدونة طباعة",
        "أسعار الطباعة جدة",
        "دليل تجهيز معارض",
        "نصائح تصميم",
        "اشتراطات لوحات المحلات",
    ],
    openGraph: {
        title: "مدونة بوابة الرواج | أدلة الطباعة وتجهيز المعارض",
        description:
            "أدلة عملية بأرقام حقيقية من واقع سوق جدة — الأسعار، الخامات، الاشتراطات، والمقارنات.",
        url: `${BUSINESS.url}/blog`,
        images: [
            {
                url: "/images/luxury-business-cards-printing-jeddah.webp",
                width: 1200,
                height: 630,
                alt: "مدونة بوابة الرواج",
            },
        ],
        locale: "ar_SA",
        type: "website",
    },
};

export default function BlogPage() {
    return <BlogIndexView page={1} />;
}
