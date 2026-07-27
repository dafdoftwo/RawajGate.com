import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogIndexView } from "@/components/blog/blog-index-view";
import { BUSINESS } from "@/lib/business";
import { getPublishedMeta } from "@/lib/articles/meta";
import { allPageParams, paginate } from "@/lib/articles/pagination";

/**
 * صفحات فهرس المدونة المرقّمة.
 *
 * ⚠️ تشمل `/blog/page/1` رغم أنها نسخة من `/blog` — راجع `allPageParams`
 * في `src/lib/articles/pagination.ts` للسبب الكامل (بإيجاز: مصفوفة
 * فارغة تُفشل `output: export`). تكرارها معالَج بـ canonical واستبعادها
 * من الـ sitemap وعدم الربط إليها من أي مكان.
 */

type Params = { page: string };

export function generateStaticParams(): Params[] {
    return allPageParams(getPublishedMeta().length).map((page) => ({ page }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { page } = await params;
    const n = Number(page);
    const { totalPages } = paginate(getPublishedMeta(), n);

    // الصفحة ١ نسخة من /blog — canonical يوجّه قوتها كلها إلى الأصل
    if (n <= 1) {
        return {
            title: "مدونة الطباعة والتصميم وتجهيز المعارض",
            alternates: { canonical: "/blog" },
        };
    }

    return {
        title: `مدونة الطباعة وتجهيز المعارض — صفحة ${n} من ${totalPages}`,
        description: `الصفحة ${n} من أرشيف مدونة بوابة الرواج: أدلة الطباعة التجارية، أسعار الخدمات في جدة، اللافتات، تجهيز المعارض، والتصميم.`,
        /*
          ⚠️ canonical ذاتي للصفحات ٢+ — يشير إلى الصفحة نفسها لا إلى /blog.
          توجيهها كلها إلى الأولى يُخفي المقالات القديمة عن الفهرسة تماماً،
          لأن جوجل يعتبرها نسخاً مكررة فلا يزحف إليها.
        */
        alternates: { canonical: `/blog/page/${n}` },
        openGraph: {
            title: `مدونة بوابة الرواج — صفحة ${n}`,
            url: `${BUSINESS.url}/blog/page/${n}`,
            locale: "ar_SA",
            type: "website",
        },
    };
}

export default async function BlogPaginatedPage({
    params,
}: {
    params: Promise<Params>;
}) {
    const { page } = await params;
    const n = Number(page);

    const { totalPages } = paginate(getPublishedMeta(), 1);
    if (!Number.isInteger(n) || n < 1 || n > totalPages) notFound();

    return <BlogIndexView page={n} />;
}
