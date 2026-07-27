import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";

import { pageHref, pageNumbers, type Page } from "@/lib/articles/pagination";

/**
 * شريط التنقّل بين صفحات المدونة.
 *
 * ⚠️ ملاحظات اتجاه (RTL):
 * الموقع عربي، فـ«السابق» يقع يميناً و«التالي» يساراً — عكس الإنجليزية.
 * لذلك ChevronRight للسابق وChevronLeft للتالي، لا العكس.
 *
 * ⚠️ ملاحظة أرشفة:
 * الروابط هنا هي الطريق **الوحيد** الذي يصل به زاحف محرك البحث إلى
 * المقالات القديمة بعد التقسيم. لو صُيّرت بجافاسكربت أو خلف زر «حمّل
 * المزيد» لأصبحت كل مقالة بعد الثانية عشرة غير مكتشَفة عملياً.
 * لذلك: روابط <a> حقيقية، مُصيَّرة على الخادم، بلا استثناء.
 */

interface PaginationNavProps {
    /** نتيجة paginate() */
    page: Pick<Page<unknown>, "page" | "totalPages" | "hasPrev" | "hasNext">;
    /** المسار الأساس بلا رقم صفحة، مثل "/blog" أو "/blog/category/prices" */
    base: string;
    /** يُقرأ لقارئ الشاشة — «تنقّل صفحات المدونة» مثلاً */
    label: string;
}

export function PaginationNav({ page, base, label }: PaginationNavProps) {
    if (page.totalPages <= 1) return null;

    const numbers = pageNumbers(page.page, page.totalPages);

    const box =
        "min-w-11 h-11 px-3 inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors";

    return (
        <nav aria-label={label} className="mt-14 flex justify-center">
            <ul className="flex flex-wrap items-center gap-2">
                <li>
                    {page.hasPrev ? (
                        <Link
                            href={pageHref(base, page.page - 1)}
                            rel="prev"
                            className={`${box} bg-white border border-gray-200 text-gray-700 hover:border-amber-500 hover:text-amber-600`}
                        >
                            <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                            السابق
                        </Link>
                    ) : (
                        <span className={`${box} bg-gray-50 border border-gray-100 text-gray-300 cursor-default`}>
                            <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                            السابق
                        </span>
                    )}
                </li>

                {numbers.map((n, i) =>
                    n === null ? (
                        <li key={`gap-${i}`} aria-hidden="true" className="px-1 text-gray-400 select-none">
                            …
                        </li>
                    ) : n === page.page ? (
                        <li key={n}>
                            {/* aria-current يخبر قارئ الشاشة أي صفحة نحن فيها */}
                            <span aria-current="page" className={`${box} bg-amber-500 text-white`}>
                                {n}
                            </span>
                        </li>
                    ) : (
                        <li key={n}>
                            <Link
                                href={pageHref(base, n)}
                                aria-label={`الصفحة ${n}`}
                                className={`${box} bg-white border border-gray-200 text-gray-700 hover:border-amber-500 hover:text-amber-600`}
                            >
                                {n}
                            </Link>
                        </li>
                    )
                )}

                <li>
                    {page.hasNext ? (
                        <Link
                            href={pageHref(base, page.page + 1)}
                            rel="next"
                            className={`${box} bg-white border border-gray-200 text-gray-700 hover:border-amber-500 hover:text-amber-600`}
                        >
                            التالي
                            <ChevronLeft className="w-4 h-4 mr-1" aria-hidden="true" />
                        </Link>
                    ) : (
                        <span className={`${box} bg-gray-50 border border-gray-100 text-gray-300 cursor-default`}>
                            التالي
                            <ChevronLeft className="w-4 h-4 mr-1" aria-hidden="true" />
                        </span>
                    )}
                </li>
            </ul>
        </nav>
    );
}
