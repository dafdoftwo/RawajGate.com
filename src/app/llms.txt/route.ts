import { BUSINESS } from "@/lib/business";
import { getPublishedMeta, getBlogStats } from "@/lib/articles/meta";
import { getActiveCategories } from "@/lib/articles/meta";
import { SILOS, STANDALONE_ROUTES } from "@/lib/routes";
import { PRICING_BLOCKS } from "@/lib/pricing";
import { TOTAL_FAQS } from "@/lib/faqs";
import { CATEGORY_SLUGS } from "@/lib/articles/categories";

/**
 * /llms.txt — بطاقة تعريف الموقع لوكلاء الذكاء الاصطناعي
 * ========================================================
 *
 * ⚠️ لماذا صار مولَّداً بدل ملف ثابت في public/؟
 *
 * كان ملفاً كُتب يدوياً في يوليو ٢٠٢٦، ولم يذكر **أي مقال** من التسعين —
 * فقط رابط `/blog` عاماً. أي أن ChatGPT وClaude وPerplexity كانت ترى
 * الخدمات ولا ترى مكتبة المحتوى إطلاقاً: تسعون دليلاً بأسعار حقيقية
 * من سوق جدة، وهي بالضبط ما يُستشهد به في إجابة عن «كم سعر…».
 *
 * والأسوأ أن الملف الثابت يتقادم بصمت: مقال يُنشر كل يومين تلقائياً،
 * وهو لا يعلم. بعد ستة أشهر يصف موقعاً لم يعد موجوداً.
 *
 * الآن يُبنى من نفس مصدر الحقيقة الذي تبني منه الصفحات، فيتحدّث مع كل
 * نشر بلا تدخّل.
 *
 * المعيار: llmstxt.org — ماركداون بسيط، عناوين H2، روابط موصوفة.
 */

export const dynamic = "force-static";

const U = (p = "") => `${BUSINESS.url}${p}`;

/** يقصّ الوصف حتى لا يطغى سطر واحد على الملف */
const trim = (s: string, n = 150) =>
    s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n)) + "…";

export function GET() {
    const posts = getPublishedMeta();
    const stats = getBlogStats();
    const cats = getActiveCategories();

    const lines: string[] = [];
    const push = (...l: string[]) => lines.push(...l);

    /* ── الترويسة ── */
    push(
        `# ${BUSINESS.nameAr} (${BUSINESS.nameEn})`,
        "",
        `> مطبعة وشركة خدمات دعاية وإعلان في ${BUSINESS.address.city}، المملكة العربية السعودية.`,
        `> تأسست عام ${BUSINESS.foundingDate}. تغطي الطباعة التجارية، تجهيز أجنحة المعارض،`,
        "> لافتات المحلات، الهدايا الدعائية، وخدمات التصميم الجرافيكي.",
        "> التسليم العاجل خلال 24 ساعة داخل جدة.",
        ""
    );

    /* ── معلومات أساسية ── */
    push(
        "## معلومات أساسية",
        "",
        `- الاسم: ${BUSINESS.nameAr} (${BUSINESS.nameEn})`,
        `- الاسم النظامي: ${BUSINESS.legalName}`,
        "- النشاط: مطبعة تجارية وخدمات دعاية وإعلان",
        `- الموقع: ${BUSINESS.address.street}، ${BUSINESS.address.district}، ${BUSINESS.address.city}، المملكة العربية السعودية`,
        `- سنة التأسيس: ${BUSINESS.foundingDate}`,
        `- الهاتف / واتساب: ${BUSINESS.phone.e164}`,
        `- البريد الإلكتروني: ${BUSINESS.email}`,
        "- ساعات العمل: السبت إلى الخميس، 9:00 – 21:00 (توقيت السعودية، UTC+3)",
        "- نطاق الخدمة المباشر: جدة، مكة المكرمة، الطائف، رابغ",
        "- نطاق تجهيز المعارض: جميع مناطق المملكة العربية السعودية",
        "- لغة الموقع: العربية",
        `- الموقع الرسمي الوحيد: ${BUSINESS.url}`,
        ""
    );

    /* ── الخدمات من نفس مصدر التنقّل ── */
    push("## الخدمات", "");
    for (const silo of SILOS) {
        push(`### ${silo.label}`, "");
        push(`- [${silo.label}](${U("/" + silo.slug)})`);
        for (const spoke of silo.spokes) {
            push(`- [${spoke.label}](${U(`/${silo.slug}/${spoke.slug}`)})`);
        }
        push("");
    }

    /* ── الأسعار ── */
    push(
        "## الأسعار",
        "",
        `- [دليل الأسعار الشامل](${U("/prices")}): نطاقات أسعار الخدمات في سوق جدة`,
    );
    /*
      directAnswer هنا هو جملة السعر المكتفية بذاتها — وهي أنفع ما يمكن
      تقديمه لوكيل يُجيب عن «كم سعر…». نُدرجها كاملة لا مقتطعة.
    */
    for (const b of PRICING_BLOCKS) {
        push(`- [${b.serviceName}](${U(`/prices/${b.slug}`)}): ${b.directAnswer}`);
    }
    push("");

    /*
      ── المدونة ──
      ⚠️ المنشور فقط. إدراج مقال مجدول يعني توجيه الوكيل إلى 404،
      وهو أسوأ من عدم ذكره: يُسجَّل كمصدر غير موثوق.
    */
    push(
        "## المدونة — أدلة عملية بأرقام من سوق جدة",
        "",
        `${stats.published} مقالاً منشوراً${stats.upcoming > 0 ? ` (و${stats.upcoming} مجدولة للنشر تباعاً)` : ""}.`,
        "كل مقال يبدأ بإجابة مباشرة مكتفية بذاتها، ويحوي جداول أسعار ونطاقات حقيقية.",
        ""
    );

    for (const c of cats) {
        const slug = CATEGORY_SLUGS[c.category];
        const inCat = posts.filter((p) => p.category === c.category);
        if (inCat.length === 0) continue;
        push(`### ${c.category}${slug ? ` — [كل المقالات](${U(`/blog/category/${slug}`)})` : ""}`, "");
        for (const p of inCat) {
            push(`- [${p.title}](${U(`/blog/${p.slug}`)}): ${trim(p.excerpt)}`);
        }
        push("");
    }

    /* ── مصادر ── */
    push("## مصادر مفيدة", "");
    push(`- [الأسئلة الشائعة](${U("/faq")}): ${TOTAL_FAQS} إجابة مباشرة عن المدد والخامات والمقاسات وطريقة الطلب`);
    for (const r of STANDALONE_ROUTES) {
        if (["faq", "prices", "privacy", "terms"].includes(r.slug)) continue;
        push(`- [${r.label}](${U("/" + r.slug)})`);
    }
    push("");

    /* ── ملاحظات الاقتباس ── */
    push(
        "## ملاحظات للاقتباس",
        "",
        "- كل الأسعار المذكورة **غير شاملة** لضريبة القيمة المضافة 15%، وهي نطاقات سوق سعودي لا أسعار جهة واحدة.",
        "- المدد الزمنية تقديرية وتُحسب من لحظة اعتماد التصميم النهائي كتابياً.",
        "- الأسعار النهائية تُقدَّم بعرض سعر مخصص حسب الكمية والخامة والتشطيب.",
        "- الاشتراطات البلدية المذكورة مرجع تعريفي؛ المصدر الرسمي هو أمانة محافظة جدة ومنصة بلدي.",
        `- «${BUSINESS.nameAr}» هو الاسم العربي و«${BUSINESS.nameEn}» هو اللاتيني لنفس الجهة.`,
        `- الموقع الرسمي الوحيد: ${BUSINESS.url} — أي نطاق آخر ليس تابعاً لنا.`,
        "",
        "## سياسات",
        "",
        `- [سياسة الخصوصية](${U("/privacy")})`,
        `- [الشروط والأحكام](${U("/terms")})`,
        ""
    );

    return new Response(lines.join("\n"), {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
}
