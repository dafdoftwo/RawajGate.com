import Link from "next/link";

import { canLinkTo } from "@/lib/articles/meta";

/**
 * عارض Markdown مبسّط — Server Component (صفر JavaScript للمتصفح)
 * ================================================================
 *
 * يدعم: ## ### عناوين · قوائم نقطية ومرقّمة · **عريض** · [نص](/رابط)
 *        جداول · اقتباسات > · قوائم مهام - [ ]
 *
 * ⚠️ الخلل الذي أُصلح هنا:
 * المعالج السابق كان يُنشئ <ul> **جديدة لكل عنصر قائمة**، فينتج ثلاث
 * قوائم بعنصر واحد بدل قائمة بثلاثة عناصر — وList Featured Snippets
 * تتطلب قائمة واحدة متماسكة. كل مقالات المدونة كانت مستبعدة منها.
 *
 * لماذا لا نستخدم react-markdown؟
 * لأنها تضيف ~40 KB وتحتاج معالجة إضافية للـ RTL. هذا المعالج يكفي
 * لبنية مقالاتنا ويعمل بالكامل على السيرفر.
 */


/** يحوّل **عريض** و[نص](/رابط) داخل السطر */
function parseInline(text: string, key: string): React.ReactNode {
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*.*?\*\*)|(\[.*?\]\(.*?\))/g;
    let last = 0;
    let m: RegExpExecArray | null;

    while ((m = regex.exec(text)) !== null) {
        if (m.index > last) parts.push(text.slice(last, m.index));
        const full = m[0];

        if (full.startsWith("**")) {
            parts.push(
                <strong key={`${key}-b-${m.index}`} className="font-bold text-gray-900">
                    {full.slice(2, -2)}
                </strong>
            );
        } else {
            const link = full.match(/\[(.*?)\]\((.*?)\)/);
            if (link) {
                const href = link[2];
                const external = href.startsWith("http");

                // مقال لم يُنشر بعد → نصّ عادي بدل رابط إلى 404
                if (!external && !canLinkTo(href)) {
                    parts.push(
                        <span key={`${key}-t-${m.index}`} className="font-medium text-gray-700">
                            {link[1]}
                        </span>
                    );
                    last = regex.lastIndex;
                    continue;
                }

                parts.push(
                    external ? (
                        <a
                            key={`${key}-l-${m.index}`}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-600 hover:text-amber-700 font-medium hover:underline"
                        >
                            {link[1]}
                        </a>
                    ) : (
                        <Link
                            key={`${key}-l-${m.index}`}
                            href={href}
                            className="text-amber-600 hover:text-amber-700 font-medium hover:underline"
                        >
                            {link[1]}
                        </Link>
                    )
                );
            }
        }
        last = regex.lastIndex;
    }

    if (last < text.length) parts.push(text.slice(last));
    return parts.length > 0 ? parts : text;
}

/** يبني معرّفاً صالحاً للربط من نص عربي (للـ anchor links) */
function slugify(text: string): string {
    return text
        .trim()
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .replace(/\s+/g, "-")
        .slice(0, 60);
}

type Block =
    | { type: "h2" | "h3"; text: string }
    | { type: "p"; text: string }
    | { type: "ul" | "ol"; items: string[] }
    | { type: "quote"; text: string }
    | { type: "table"; head: string[]; rows: string[][] }
    | { type: "checklist"; items: { text: string }[] };

/** يحوّل نص Markdown إلى كتل منظّمة قبل التصيير */
function parseBlocks(md: string): Block[] {
    const lines = md.split("\n");
    const blocks: Block[] = [];

    let ul: string[] = [];
    let ol: string[] = [];
    let checks: { text: string }[] = [];

    const flush = () => {
        if (ul.length) { blocks.push({ type: "ul", items: ul }); ul = []; }
        if (ol.length) { blocks.push({ type: "ol", items: ol }); ol = []; }
        if (checks.length) { blocks.push({ type: "checklist", items: checks }); checks = []; }
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trimEnd();

        // جدول: سطر يبدأ وينتهي بـ | ويليه سطر فاصل
        if (line.startsWith("|") && lines[i + 1]?.trim().startsWith("|--")) {
            flush();
            const cells = (row: string) =>
                row.split("|").slice(1, -1).map((c) => c.trim());
            const head = cells(line);
            const rows: string[][] = [];
            i += 2; // تخطَّ سطر الفاصل
            while (i < lines.length && lines[i].trim().startsWith("|")) {
                rows.push(cells(lines[i].trim()));
                i++;
            }
            i--;
            blocks.push({ type: "table", head, rows });
            continue;
        }

        // قائمة مهام
        if (/^- \[[ x]\]\s/.test(line)) {
            if (ul.length) { blocks.push({ type: "ul", items: ul }); ul = []; }
            checks.push({ text: line.replace(/^- \[[ x]\]\s/, "") });
            continue;
        }

        // قائمة نقطية
        if (line.startsWith("- ")) {
            if (checks.length) { blocks.push({ type: "checklist", items: checks }); checks = []; }
            ul.push(line.slice(2));
            continue;
        }

        // قائمة مرقّمة
        if (/^\d+\.\s/.test(line)) {
            ol.push(line.replace(/^\d+\.\s/, ""));
            continue;
        }

        flush();

        if (line.startsWith("### ")) { blocks.push({ type: "h3", text: line.slice(4) }); continue; }
        if (line.startsWith("## "))  { blocks.push({ type: "h2", text: line.slice(3) }); continue; }
        if (line.startsWith("> "))   { blocks.push({ type: "quote", text: line.slice(2) }); continue; }
        if (line.trim() === "") continue;

        blocks.push({ type: "p", text: line });
    }

    flush();
    return blocks;
}

export function MarkdownRenderer({ content }: { content: string }) {
    const blocks = parseBlocks(content);

    return (
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-gray-900">
            {blocks.map((block, i) => {
                switch (block.type) {
                    case "h2":
                        return (
                            <h2
                                key={i}
                                id={slugify(block.text)}
                                className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-gray-900 scroll-mt-28"
                            >
                                {block.text}
                            </h2>
                        );

                    case "h3":
                        return (
                            <h3
                                key={i}
                                id={slugify(block.text)}
                                className="text-xl font-bold mt-8 mb-4 text-gray-800 scroll-mt-28"
                            >
                                {block.text}
                            </h3>
                        );

                    case "p":
                        return (
                            <p key={i} className="mb-5 text-gray-700 leading-8 text-lg">
                                {parseInline(block.text, `p${i}`)}
                            </p>
                        );

                    case "ul":
                        // ✅ قائمة واحدة تضم كل العناصر — شرط List Featured Snippets
                        return (
                            <ul key={i} className="list-disc list-outside mr-6 mb-6 space-y-2">
                                {block.items.map((item, j) => (
                                    <li key={j} className="pl-2 text-lg leading-8 text-gray-700">
                                        {parseInline(item, `ul${i}-${j}`)}
                                    </li>
                                ))}
                            </ul>
                        );

                    case "ol":
                        return (
                            <ol key={i} className="list-decimal list-outside mr-6 mb-6 space-y-2">
                                {block.items.map((item, j) => (
                                    <li key={j} className="pl-2 text-lg leading-8 text-gray-700">
                                        {parseInline(item, `ol${i}-${j}`)}
                                    </li>
                                ))}
                            </ol>
                        );

                    case "checklist":
                        return (
                            <ul key={i} className="mb-6 space-y-2 list-none mr-0">
                                {block.items.map((item, j) => (
                                    <li
                                        key={j}
                                        className="flex items-start gap-3 text-lg leading-8 text-gray-700"
                                    >
                                        <span
                                            className="mt-2 w-4 h-4 shrink-0 rounded border-2 border-amber-400"
                                            aria-hidden="true"
                                        />
                                        <span>{parseInline(item.text, `ck${i}-${j}`)}</span>
                                    </li>
                                ))}
                            </ul>
                        );

                    case "quote":
                        return (
                            <blockquote
                                key={i}
                                className="border-r-4 border-amber-500 bg-amber-50 rounded-l-lg py-4 px-6 my-8 text-gray-800 text-lg leading-8"
                            >
                                {parseInline(block.text, `q${i}`)}
                            </blockquote>
                        );

                    case "table":
                        /*
                          الجداول هي أعلى صيغة قابلة للاقتباس لدى محركات الذكاء
                          الاصطناعي — تُستخرج بدقة وتُعاد صياغتها بثقة.
                          overflow-x-auto يمنع الجدول من كسر تخطيط الجوال.
                        */
                        return (
                            <div key={i} className="my-8 overflow-x-auto rounded-xl border border-gray-200">
                                <table className="w-full text-right border-collapse text-base">
                                    <thead>
                                        <tr className="bg-gray-900 text-white">
                                            {block.head.map((h, j) => (
                                                <th key={j} scope="col" className="px-4 py-3 font-bold whitespace-nowrap">
                                                    {parseInline(h, `th${i}-${j}`)}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {block.rows.map((row, j) => (
                                            <tr key={j} className={j % 2 ? "bg-gray-50" : "bg-white"}>
                                                {row.map((cell, k) => (
                                                    <td key={k} className="px-4 py-3 text-gray-700 align-top">
                                                        {parseInline(cell, `td${i}-${j}-${k}`)}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        );
                }
            })}
        </div>
    );
}

/** يستخرج عناوين H2 لبناء فهرس المحتويات */
export function extractHeadings(content: string): { id: string; text: string }[] {
    return content
        .split("\n")
        .filter((l) => l.startsWith("## "))
        .map((l) => {
            const text = l.slice(3).trim();
            return { id: slugify(text), text };
        });
}
