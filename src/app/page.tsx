import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Printer,
  Signpost,
  CalendarDays,
  Gift,
  Palette,
  Clock,
  Award,
  Users,
  Truck,
  ArrowLeft,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

import { GeoImage } from "@/components/geo-image";
import { Reveal } from "@/components/reveal";
import { ReviewsSlider } from "@/components/reviews-slider";
import { WhatsAppLink, CallLink } from "@/components/contact-actions";
import { LazyHeroVideo } from "@/components/lazy-hero-video";
import { SERVICES, REVIEWS, GALLERY, HOME_FAQS } from "@/components/home/data";
import { BUSINESS } from "@/lib/business";
import {
  generateItemListSchema,
  generateVideoSchema,
  generateFAQSchema,
} from "@/lib/schema";

/**
 * ✅ الصفحة الرئيسية أصبحت Server Component.
 *
 * قبل ذلك كانت "use client" بالكامل، ما تسبب في ثلاث مشاكل:
 *   1. تعذّر تصدير metadata — فورثت canonical:"/" من الـ layout ولم تملك
 *      عنواناً أو وصفاً خاصاً بها.
 *   2. framer-motion كانت تُصيّر 56 عنصراً بـ style="opacity:0" في HTML الخام،
 *      فتبدو الصفحة شبه فارغة لزواحف الذكاء الاصطناعي التي لا تُنفّذ JS.
 *   3. حزمة framer-motion (209KB) كانت تُحمَّل على المسار الحرج للصفحة الأهم.
 *
 * التفاعل الوحيد المتبقي (سلايدر التقييمات) معزول في مكوّن عميل مستقل.
 */

export const metadata: Metadata = {
  // absolute: يتجاوز قالب الـ layout حتى لا يتكرر البراند
  title: {
    absolute: "مطبعة في جدة | طباعة تجارية وتجهيز معارض | بوابة الرواج",
  },
  description:
    "مطبعة متكاملة في جدة: طباعة بطاقات عمل وبروشورات، لافتات محلات 3D، تجهيز أجنحة معارض، هدايا دعائية، وتصميم هوية بصرية. تسليم خلال 24 ساعة وخبرة منذ 2009.",
  alternates: { canonical: "/" },
  keywords: [
    "مطبعة جدة",
    "طباعة جدة",
    "مطابع جدة",
    "تجهيز معارض جدة",
    "لافتات محلات جدة",
    "هدايا دعائية جدة",
    "دعاية وإعلان جدة",
  ],
};

/** أسئلة الصفحة الرئيسية — مرئية على الصفحة (شرط Google للـ FAQ schema) */
export default function HomePage() {
  const servicesListSchema = generateItemListSchema(
    SERVICES.map((s) => ({
      name: s.title,
      url: s.href,
      description: s.description,
      image: s.image,
    })),
    "خدمات بوابة الرواج في جدة"
  );

  const videoSchema = generateVideoSchema({
    name: "الطباعة الرقمية في بوابة الرواج - جدة",
    description:
      "جولة داخل ورشة بوابة الرواج في جدة تعرض ماكينات الطباعة الرقمية والأوفست وعمليات الإنتاج.",
    thumbnailUrl: "/images/rawaj-gate-printing-workshop-team-at-work.webp",
    contentUrl: "/Digital-printing-video.mp4",
    // TODO: ضع تاريخ الرفع الحقيقي والمدة الفعلية للفيديو بصيغة ISO 8601
    uploadDate: "2025-12-17T00:00:00+03:00",
  });

  const faqSchema = generateFAQSchema(HOME_FAQS, BUSINESS.url);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative min-h-screen flex items-center bg-[#0a0f1c] overflow-hidden">
        {/*
          ⚡ خلفية الجوال: صورة ثابتة فقط (بدون فيديو).
          الفيديو الأصلي 3MB — كارثة على شبكات 3G/4G في السعودية.
          صورة WebP < 40KB مع لماذا:
            • LCP أسرع بـ 5-10x على الجوال
            • توفير بيانات المستخدم
            • بطارية أقل
          الفيديو يبقى على الديسكتوب فقط (شبكة أفضل، شاشة أكبر تستحق).
        */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <Image
            src="/images/rawaj-gate-printing-workshop-team-at-work.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[#0a0f1c]/70 backdrop-blur-[2px]" />
        </div>

        {/* عناصر خلفية تجريدية (ديسكتوب) */}
        <div className="absolute inset-0 z-0 hidden lg:block" aria-hidden="true">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-right">
              <Reveal className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                <span className="text-amber-400 text-sm font-bold tracking-wide">
                  خبرة منذ 2009 في خدمة الشركات بجدة
                </span>
              </Reveal>

              {/*
                H1 السابق كان "نصنع الفرق في هويتك التجارية" — صفر كلمات مفتاحية
                على أهم صفحة في الموقع. الشعار محفوظ كسطر ثانٍ داخل نفس العنوان،
                فنكسب الرسالة التسويقية والاستهداف معاً.
              */}
              <Reveal as="h1" delay={1} className="font-heading mb-8">
                <span className="block text-2xl md:text-3xl text-amber-400 font-bold mb-3">
                  مطبعة في جدة · طباعة تجارية وتجهيز معارض
                </span>
                {/*
                  font-bold (700) لا font-black (900).
                  كان هذا السطر هو الاستخدام **الوحيد** للوزن 900 في المشروع
                  كله، وكان يكلّف ملفَّي خط (عربي ~٣٢ KB + لاتيني ~١٤ KB)
                  محمَّلين مسبقاً — يزاحمان المسار الحرج لعنصر LCP نفسه.
                  الفرق البصري بين 700 و900 عند حجم ٧٢px طفيف؛ الفرق في
                  السرعة ليس كذلك.
                */}
                <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight">
                  نصنع{" "}
                  <span className="text-amber-500 relative inline-block">
                    الفرق
                    <svg
                      className="absolute w-full h-3 -bottom-1 right-0 text-amber-500/30"
                      viewBox="0 0 100 20"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path d="M0 15 Q 50 25 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </span>{" "}
                  في
                  <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                    هويتك التجارية
                  </span>
                </span>
              </Reveal>

              <Reveal
                as="p"
                delay={2}
                className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl lg:ml-auto border-r-4 border-amber-500 pr-6"
              >
                من التصميم الإبداعي إلى الطباعة الفاخرة وتنفيذ المعارض. نقدم لك حلولاً
                متكاملة تضمن ظهور علامتك التجارية بأعلى معايير الاحترافية والجودة —
                مع تسليم عاجل خلال 24 ساعة داخل جدة.
              </Reveal>

              <Reveal delay={3} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link
                  href="/quote"
                  className="relative group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-gray-900 transition-all duration-200 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl hover:from-amber-500 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] overflow-hidden"
                >
                  <span className="relative">احصل على عرض سعر</span>
                  <ArrowLeft className="relative mr-2 w-6 h-6 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
                <WhatsAppLink
                  source="hero"
                  message="مرحباً، أرغب في الاستفسار عن خدماتكم"
                  className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 backdrop-blur-sm hover:border-white/20"
                >
                  <MessageCircle className="ml-2 w-6 h-6 text-green-400" aria-hidden="true" />
                  تواصل عبر واتساب
                </WhatsAppLink>
              </Reveal>

              <Reveal
                delay={4}
                className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 border-t border-white/5 pt-8"
              >
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Award className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">منذ 2009</div>
                    <div className="text-xs text-gray-400">خبرة في سوق جدة</div>
                  </div>
                </div>

                <div className="hidden sm:block h-10 w-px bg-white/10" aria-hidden="true" />

                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-500/30 flex items-center justify-center text-green-400 shrink-0">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">24 ساعة</div>
                    <div className="text-xs text-gray-400">للطلبات العاجلة</div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* البطاقة البصرية (ديسكتوب) */}
            <div className="hidden lg:block lg:col-span-5 relative">
              <Reveal delay={2} className="relative z-10 grid gap-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-2xl shadow-2xl relative overflow-hidden">
                  {/*
                    ⚡ فيديو lazy: يحمّل فقط عند اقتراب العنصر من الظهور.
                    يحترم prefers-reduced-motion و Save-Data.
                  */}
                  <LazyHeroVideo
                    src="/Digital-printing-video.mp4"
                    poster="/images/rawaj-gate-printing-workshop-team-at-work.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/40 to-transparent rounded-xl pointer-events-none" />
                </div>

                <div className="absolute -bottom-10 -left-10 bg-[#1e293b] p-6 rounded-xl border border-white/10 shadow-2xl max-w-xs">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-green-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white font-bold mb-1">سرعة في التنفيذ</p>
                      <p className="text-gray-400 text-sm">
                        تسليم الطلبات العاجلة خلال 24 ساعة بأعلى معايير الجودة.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/*
        ⛔ حُذف شريط "موثوق من:" الذي كان يعرض بنك الراجحي و STC وأرامكو و SABIC
        ووزارة التجارة كعملاء. كان موسوماً في الكود نفسه بـ "Trust logos (placeholder)".
        عرض شعارات جهات ليست عميلاً فعلياً ادعاء تجاري يعرّض النشاط لمسؤولية
        نظامية في السعودية، ويُسقط ثقة محركات الذكاء الاصطناعي بالنطاق كله عند
        تعذّر التحقق منه من أي مصدر آخر.

        البديل الصحيح: شعارات عملاء حقيقيين بإذن كتابي، أو شهادات نصية موثّقة،
        أو تقييمات Google Business Profile برابط المصدر.
      */}

      {/* ══════════════════ الخدمات ══════════════════ */}
      <section className="py-24 bg-white" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Reveal as="h2" scroll id="services-heading" className="text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              خدمات الطباعة والدعاية في جدة
            </Reveal>
            <Reveal as="p" scroll className="text-xl text-gray-600 max-w-2xl mx-auto">
              خمسة أقسام متخصصة تغطي كل ما تحتاجه علامتك التجارية — من بطاقة العمل
              إلى جناح المعرض المتكامل.
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <Reveal
                key={service.href}
                scroll
                delay={((index % 3) + 1) as 1 | 2 | 3}
              >
                <Link href={service.href} className="group block relative h-full">
                  <div className="bg-gray-50 h-full rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-amber-200 group-hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <GeoImage
                        src={service.image}
                        alt={`${service.title} في جدة - بوابة الرواج`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 !rounded-none"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-lg z-20">
                        <service.icon className="w-6 h-6 text-gray-900" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                          {service.title}
                        </h3>
                        <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                          {service.titleEn}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <span className="flex items-center text-amber-600 font-bold text-sm">
                        استكشف الخدمة
                        <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ لماذا نحن ══════════════════ */}
      <section className="py-24 bg-gray-50" aria-labelledby="why-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal as="h2" scroll id="why-heading" className="text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              لماذا تختار <span className="text-amber-500">بوابة الرواج</span>؟
            </Reveal>
            <Reveal as="p" scroll className="text-xl text-gray-600">
              منظومة عمل متكاملة تجمع بين الإبداع الفني والقدرة التصنيعية داخل جدة.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            <Reveal scroll className="md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
              <GeoImage
                src="/images/printing-machines-digital-offset-equipment.webp"
                alt="ماكينات الطباعة الرقمية والأوفست في ورشة بوابة الرواج بجدة"
                sizes="(max-width: 768px) 100vw, 620px"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                  <Printer className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">تقنيات طباعة حديثة</h3>
                <p className="text-gray-300">
                  ماكينات طباعة رقمية وأوفست لضمان دقة ألوان متناهية وثبات النتيجة بين
                  الدفعات.
                </p>
              </div>
            </Reveal>

            <Reveal scroll delay={1} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600">
                <Clock className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">تسليم سريع</h3>
                <p className="text-gray-600">تنفيذ خلال 24 ساعة للطلبات العاجلة داخل جدة.</p>
              </div>
            </Reveal>

            <Reveal scroll delay={2} className="bg-[#0f172a] rounded-3xl p-8 shadow-lg flex flex-col justify-between text-white hover:bg-[#1e293b] transition-colors">
              <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">جودة مضمونة</h3>
                <p className="text-gray-400">ضمان على جودة الألوان والخامات المستخدمة.</p>
              </div>
            </Reveal>

            <Reveal scroll delay={3} className="md:col-span-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 shadow-lg relative overflow-hidden flex items-center">
              <div className="relative z-10 max-w-md">
                <h3 className="text-3xl font-bold text-white mb-4">فريق متكامل في خدمتك</h3>
                <p className="text-amber-100 text-lg mb-6">
                  من المصممين إلى فنيي الطباعة والتركيب، فريقنا معك في كل خطوة من
                  الفكرة حتى التسليم.
                </p>
                <Link
                  href="/about"
                  className="bg-white text-amber-600 px-6 py-3 rounded-xl font-bold hover:bg-amber-50 transition-colors inline-block"
                >
                  تعرف على بوابة الرواج
                </Link>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-white/10 skew-x-12 translate-x-12" aria-hidden="true" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════ معرض الأعمال ══════════════════ */}
      <section className="py-20 bg-white" aria-labelledby="work-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Reveal as="h2" scroll id="work-heading" className="section-title">
              من أعمالنا في جدة
            </Reveal>
            <Reveal as="p" scroll className="section-subtitle">
              نماذج من مشاريع نفّذناها لشركات ومطاعم ومحلات في جدة والمنطقة الغربية.
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY.map((item, index) => (
              <Reveal key={item.src} scroll delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
                <GeoImage
                  src={item.src}
                  alt={item.alt}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                  className="aspect-square rounded-xl overflow-hidden"
                />
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-primary inline-flex">
              عرض جميع الأعمال
              <ArrowLeft className="mr-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ التقييمات ══════════════════ */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="reviews-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Reveal as="h2" scroll id="reviews-heading" className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              آراء عملائنا
            </Reveal>
            <Reveal as="p" scroll className="text-gray-600 max-w-2xl mx-auto">
              تجارب من عملاء وثقوا بنا في تنفيذ أعمالهم داخل جدة.
            </Reveal>
          </div>

          <ReviewsSlider reviews={REVIEWS} />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/*
              ملاحظة: أصناف Tailwind مكتوبة كاملة عمداً. الأصناف المبنية ديناميكياً
              مثل `bg-${tone}-100` لا يرصدها محرك Tailwind وقت البناء فتُحذف.
            */}
            {[
              { icon: Clock, wrap: "bg-amber-100", ico: "text-amber-600", value: "24 ساعة", label: "تنفيذ عاجل", note: "للطلبات المستعجلة داخل جدة" },
              { icon: CheckCircle, wrap: "bg-green-100", ico: "text-green-600", value: "ضمان", label: "على الجودة", note: "إعادة التنفيذ عند خطأ يعود إلينا" },
              { icon: Award, wrap: "bg-blue-100", ico: "text-blue-600", value: "2009", label: "سنة التأسيس", note: "خبرة متواصلة في سوق جدة" },
              { icon: Users, wrap: "bg-purple-100", ico: "text-purple-600", value: "5 أقسام", label: "خدمات متكاملة", note: "طباعة، لافتات، معارض، هدايا، تصميم" },
            ].map((stat, i) => (
              <Reveal
                key={stat.label}
                scroll
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
              >
                <div className={`w-12 h-12 ${stat.wrap} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`w-6 h-6 ${stat.ico}`} aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                <div className="text-gray-400 text-xs mt-1">{stat.note}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ الأسئلة الشائعة ══════════════════ */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Reveal as="h2" scroll id="faq-heading" className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-10 text-center">
              أسئلة شائعة عن الطباعة في جدة
            </Reveal>

            <div className="space-y-4">
              {HOME_FAQS.map((faq, i) => (
                <Reveal
                  key={faq.question}
                  scroll
                  className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <details className="group" open={i === 0}>
                    <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                      <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                      <span className="text-amber-500 text-2xl leading-none shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 leading-8">{faq.answer}</div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ الموقع ══════════════════ */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white" aria-labelledby="location-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal as="h2" scroll id="location-heading" className="text-3xl md:text-4xl font-heading font-bold mb-6">
                موقعنا في قلب جدة
              </Reveal>
              <Reveal as="p" scroll className="text-white/80 mb-8 leading-relaxed">
                نتواجد في {BUSINESS.address.district} بجدة، قريبين من التحلية والشرفية
                والحمراء والأندلس، ونغطي بالتوصيل والتركيب جميع أحياء المدينة من أبحر
                الشمالية حتى البلد. زوروا معرضنا لمعاينة العينات ومناقشة مشروعكم مع
                فريقنا.
              </Reveal>

              <Reveal scroll className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">ساعات العمل</h3>
                    <p className="text-white/70 text-sm">{BUSINESS.hours.displayAr}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/20 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5 text-amber-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">التوصيل</h3>
                    <p className="text-white/70 text-sm">توصيل داخل جدة للطلبات الكبيرة</p>
                  </div>
                </div>
              </Reveal>

              <Reveal scroll className="mt-8 flex flex-col sm:flex-row gap-4">
                <WhatsAppLink
                  source="location_section"
                  message="مرحباً، أرغب في زيارة المعرض"
                  className="btn-primary inline-flex"
                >
                  تواصل معنا
                  <ArrowLeft className="mr-2 w-5 h-5" aria-hidden="true" />
                </WhatsAppLink>
                <CallLink
                  source="location_section"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 rounded-lg font-bold hover:bg-white/20 transition-colors"
                />
              </Reveal>
            </div>

            <Reveal scroll className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              {/*
                TODO: استبدل رمز التضمين برمز خريطة ملفك في Google Business Profile
                (لا بحث عام بالإحداثيات) — يربط الموقع بالكيان مباشرة ويقوّي Local SEO.
              */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.5!2d39.1876!3d21.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMxJzI0LjIiTiAzOcKwMTEnMTUuNCJF!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع بوابة الرواج في حي الروضة بجدة على الخريطة"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                <p className="font-bold text-gray-900 mb-1">{BUSINESS.nameAr}</p>
                <address className="text-sm text-gray-600 not-italic">
                  {BUSINESS.address.street}، {BUSINESS.address.district}، {BUSINESS.address.city}
                </address>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section className="py-20 bg-gradient-to-r from-amber-400 to-amber-500">
        <div className="container mx-auto px-4 text-center">
          <Reveal as="h2" scroll className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            جاهز لبدء مشروعك؟
          </Reveal>
          <Reveal as="p" scroll className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            أرسل تفاصيل طلبك واحصل على عرض سعر مجاني — نرد خلال ساعة عمل واحدة.
          </Reveal>
          <Reveal scroll className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg"
            >
              اطلب عرض سعر الآن
            </Link>
            <CallLink
              source="bottom_cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
