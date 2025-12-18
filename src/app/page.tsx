"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GeoImage } from "@/components/geo-image";
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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Service cards data
const SERVICES = [
  {
    title: "مطبوعات تجارية",
    titleEn: "Commercial Printing",
    description: "بطاقات العمل، البروشورات، الملفات، والمطبوعات الرسمية بجودة استثنائية",
    icon: Printer,
    href: "/commercial-printing",
    image: "/images/luxury-business-cards-printing-jeddah.webp",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "لوحات وملصقات",
    titleEn: "Signage & Stickers",
    description: "لافتات المحلات 3D، تغليف السيارات، وملصقات المنتجات بتقنيات حديثة",
    icon: Signpost,
    href: "/signage-stickers",
    image: "/images/3d-shop-signage-letters-acrylic-jeddah.webp",
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "معارض وفعاليات",
    titleEn: "Exhibitions & Events",
    description: "أجنحة معارض، ستاندات، كاونترات ترويجية، وخلفيات مسرح احترافية",
    icon: CalendarDays,
    href: "/exhibitions-events",
    image: "/images/exhibition-booth-fabrication-design-jeddah.webp",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    title: "هدايا دعائية",
    titleEn: "Promotional Gifts",
    description: "أقلام، دفاتر، هدايا تقنية، وملابس مطبوعة بشعار شركتك",
    icon: Gift,
    href: "/promotional-gifts",
    image: "/images/corporate-promotional-gifts-jeddah-items.webp",
    color: "from-amber-500 to-amber-700",
  },
  {
    title: "خدمات التصميم",
    titleEn: "Design Services",
    description: "تصميم الهوية البصرية، الشعارات، وتجهيز ملفات الطباعة",
    icon: Palette,
    href: "/design-services",
    image: "/images/client-meeting-office-al-rawaj-jeddah.webp",
    color: "from-rose-500 to-rose-700",
  },
];

// Trust logos (placeholder)
const TRUST_LOGOS = [
  { name: "بنك الراجحي", alt: "Al Rajhi Bank" },
  { name: "STC", alt: "STC" },
  { name: "أرامكو", alt: "Aramco" },
  { name: "SABIC", alt: "SABIC" },
  { name: "وزارة التجارة", alt: "Ministry of Commerce" },
];

// Stats
const STATS = [
  { value: "15+", label: "سنة خبرة", icon: Award },
  { value: "5000+", label: "عميل سعيد", icon: Users },
  { value: "24", label: "ساعة للتسليم", icon: Clock },
  { value: "جدة", label: "توصيل مجاني", icon: Truck },
];

// Reviews data for slider
const REVIEWS = [
  {
    id: 1,
    name: "أ. أحمد العتيبي",
    role: "صاحب شركة تقنية",
    image: "/images/reviews/ahmed.webp",
    rating: 5.0,
    text: "احتجت لطباعة هوية بصرية كاملة لشركتي الجديدة. الفريق كان دقيقاً جداً في التعامل مع التفاصيل وتنفيذها بطريقة احترافية. وصلت جميع المطبوعات بجودة ممتازة وفي الوقت المحدد. خدمة لا غبار عليها.",
    services: ["بطاقات أعمال", "بروشورات", "هوية بصرية"],
    location: "جدة",
    date: "منذ أسبوع",
    category: "مطبوعات تجارية",
  },
  {
    id: 2,
    name: "م. فاطمة الزهراني",
    role: "مديرة تسويق",
    image: "/images/reviews/faten.webp",
    rating: 5.0,
    text: "تعاملت معهم لتجهيز جناح شركتنا في معرض جيتكس. التصميم كان مبهراً والتنفيذ احترافي جداً. حصلنا على إشادة كبيرة من الزوار والمنافسين!",
    services: ["جناح معرض", "ستاندات", "بنرات"],
    location: "جدة",
    date: "منذ أسبوعين",
    category: "معارض وفعاليات",
  },
  {
    id: 3,
    name: "أ. محمد الغامدي",
    role: "صاحب مطعم",
    image: "/images/reviews/mohamed.jpg",
    rating: 5.0,
    text: "طلبت منيوهات لمطعمي الجديد. الجودة رائعة والتصميم أنيق جداً. التسليم كان في الوقت المحدد. سأتعامل معهم دائماً.",
    services: ["منيوهات", "كروت زيارة", "ملصقات"],
    location: "جدة",
    date: "منذ شهر",
    category: "مطبوعات تجارية",
  },
  {
    id: 4,
    name: "د. عبدالله السالم",
    role: "طبيب أسنان",
    image: "/images/reviews/abdallah.jpg",
    rating: 5.0,
    text: "صممولي هوية بصرية كاملة لعيادتي. الشعار والألوان والمطبوعات كلها متناسقة واحترافية. أنصح بهم بشدة!",
    services: ["شعار", "هوية بصرية", "لوحة عيادة"],
    location: "جدة",
    date: "منذ شهر",
    category: "خدمات التصميم",
  },
  {
    id: 5,
    name: "أ. مصطفى الحربي",
    role: "مدير شركة مقاولات",
    image: "/images/reviews/mostafa.webp",
    rating: 5.0,
    text: "غلفنا أسطول سياراتنا بالكامل. العمل ممتاز والألوان ثابتة حتى بعد أشهر من الاستخدام في شمس جدة الحارة.",
    services: ["تغليف سيارات", "ستيكرات", "لوحات"],
    location: "جدة",
    date: "منذ شهرين",
    category: "لوحات وملصقات",
  },
  {
    id: 6,
    name: "أ. بوجا راني",
    role: "صاحبة بوتيك",
    image: "/images/reviews/pouja.webp",
    rating: 5.0,
    text: "أكياس التغليف اللي صمموها لمحلي راقية جداً. العملاء يمدحون فيها دائماً. سعيدة جداً بالتعامل معهم.",
    services: ["أكياس ورقية", "صناديق", "ستيكرات"],
    location: "جدة",
    date: "منذ شهرين",
    category: "هدايا دعائية",
  },
];

export default function HomePage() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const review = REVIEWS[currentReview];

  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      {/* ============================================
          HERO SECTION (PREMIUM REDESIGN)
          ============================================ */}
      <section className="relative min-h-screen flex items-center bg-[#0a0f1c] overflow-hidden">
        {/* Video Background (Mobile/Tablet) */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            poster="/images/rawaj-gate-printing-workshop-team-at-work.webp"
          >
            <source src="/Digital-printing-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0a0f1c]/80 backdrop-blur-[2px]" />
        </div>

        {/* Abstract Background Elements (Desktop) */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 text-center lg:text-right"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                <span className="text-amber-400 text-sm font-bold tracking-wide uppercase">شريك النجاح لأكثر من 5000 شركة</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.2] tracking-tight"
              >
                نصنع <span className="text-amber-500 relative inline-block">
                  الفرق
                  <svg className="absolute w-full h-3 -bottom-1 right-0 text-amber-500/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 15 Q 50 25 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span> في<br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                  هويتك التجارية
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl lg:ml-auto border-r-4 border-amber-500 pr-6"
              >
                من التصميم الإبداعي إلى الطباعة الفاخرة وتنفيذ المعارض.
                نقدم لك حلولاً متكاملة تضمن ظهور علامتك التجارية بأعلى معايير الاحترافية والجودة.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link href="/quote" className="relative group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-gray-900 transition-all duration-200 bg-gradient-to-r from-amber-400 to-amber-500 border border-transparent rounded-xl hover:from-amber-500 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  <span className="relative">احصل على عرض سعر</span>
                  <ArrowLeft className="relative mr-2 w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/966548923300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 backdrop-blur-sm hover:border-white/20"
                >
                  <MessageCircle className="ml-2 w-6 h-6 text-green-400" />
                  تواصل معنا
                </a>
              </motion.div>

              {/* Authority Badges */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 border-t border-white/5 pt-8"
              >
                {/* Customer Reviews Badge */}
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/10">
                  <div className="flex -space-x-2 space-x-reverse">
                    {[
                      "/images/reviews/ahmed.webp",
                      "/images/reviews/faten.webp",
                      "/images/reviews/mohamed.jpg",
                      "/images/reviews/mostafa.webp",
                    ].map((src, i) => (
                      <div key={i} className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#0a0f1c] flex-shrink-0">
                        <img
                          src={src}
                          alt={`عميل ${i + 1}`}
                          width={36}
                          height={36}
                          loading="lazy"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full ring-2 ring-[#0a0f1c] bg-amber-500 flex items-center justify-center text-xs font-bold text-gray-900 flex-shrink-0">
                      +5K
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <span className="text-white font-bold text-lg">4.9</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">عميل راضٍ</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden sm:block h-10 w-px bg-white/10" />

                {/* Experience Badge */}
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">15 عاماً</div>
                    <div className="text-xs text-gray-400">من الخبرة والتميز</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual Content (Cards Layout) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block lg:col-span-5 relative"
            >
              <div className="relative z-10 grid gap-6">
                {/* Main Image Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-2xl shadow-2xl relative overflow-hidden"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-xl w-full aspect-[4/3] object-cover"
                    poster="/images/rawaj-gate-printing-workshop-team-at-work.webp"
                  >
                    <source src="/Digital-printing-video.mp4" type="video/mp4" />
                  </video>
                  {/* Overlay gradient for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/40 to-transparent rounded-xl pointer-events-none" />
                </motion.div>

                {/* Floating Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-10 -left-10 bg-[#1e293b] p-6 rounded-xl border border-white/10 shadow-2xl max-w-xs"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">سرعة في التنفيذ</h3>
                      <p className="text-gray-400 text-sm">تسليم الطلبات العاجلة خلال 24 ساعة بأعلى معايير الجودة.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          TRUST SIGNALS BAR
          ============================================ */}
      <section className="py-8 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale">
            <span className="text-sm text-gray-500">موثوق من:</span>
            {TRUST_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="text-lg font-bold text-gray-400"
                title={logo.alt}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          5 PILLARS - SERVICE GRID
          ============================================ */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              حلول أعمال متكاملة
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم باقة شاملة من الخدمات المصممة خصيصاً لتلبية احتياجات العلامات التجارية الطموحة
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service, index) => (
              <motion.div key={service.href} variants={fadeInUp}>
                <Link href={service.href} className="group block relative h-full">
                  <div className="bg-gray-50 h-full rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-amber-200 group-hover:-translate-y-2">
                    {/* Image Area */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-lg">
                        <service.icon className="w-6 h-6 text-gray-900" />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">{service.title}</h3>
                        <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">{service.titleEn}</span>
                      </div>
                      <p className="text-gray-600 mb-6 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center text-amber-600 font-bold text-sm group-hover:gap-2 transition-all">
                        <span>استكشف الخدمة</span>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          WHY CHOOSE US
          ============================================ */}
      {/* ============================================
          WHY CHOOSE US (BENTO GRID)
          ============================================ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              لماذا تثق الشركات الكبرى في <span className="text-amber-500">بوابة الرواج</span>؟
            </motion.h2>
            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-xl text-gray-600">
              منظومة عمل متكاملة تجمع بين الإبداع الفني والقدرة التصنيعية الهائلة
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            {/* Feature 1: The Machine (Large) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group"
            >
              <GeoImage
                src="/images/printing-machines-digital-offset-equipment.webp"
                alt="أحدث ماكينات الطباعة"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                  <Printer className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">تقنيات طباعة عالمية</h3>
                <p className="text-gray-300">نمتاز بأسطول من أحدث ماكينات الطباعة الرقمية والاوفست لضمان دقة ألوان متناهية.</p>
              </div>
            </motion.div>

            {/* Feature 2: Speed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">تسليم قياسي</h3>
                <p className="text-gray-600">توصيل خلال ساعات للطلبات العاجلة داخل جدة.</p>
              </div>
            </motion.div>

            {/* Feature 3: Quality */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0f172a] rounded-3xl p-8 shadow-lg flex flex-col justify-between text-white hover:bg-[#1e293b] transition-colors"
            >
              <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">جودة مضمونة</h3>
                <p className="text-gray-400">ضمان شامل على جودة الألوان والخامات المستخدمة.</p>
              </div>
            </motion.div>

            {/* Feature 4: Team (Wide) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 shadow-lg relative overflow-hidden flex items-center"
            >
              <div className="relative z-10 max-w-md">
                <h3 className="text-3xl font-bold text-white mb-4">فريق خبراء في خدمتك</h3>
                <p className="text-amber-100 text-lg mb-6">من المصممين المحترفين إلى فنيي الطباعة والتركيب، فريقنا المتكامل معك خطوة بخطوة.</p>
                <Link href="/about" className="bg-white text-amber-600 px-6 py-3 rounded-xl font-bold hover:bg-amber-50 transition-colors inline-block">
                  تعرف علينا أكثر
                </Link>
              </div>
              {/* Decorative Elements */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-white/10 skew-x-12 translate-x-12" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          FEATURED WORK GALLERY
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="section-title">
              من أعمالنا
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle">
              نماذج من مشاريعنا الناجحة مع شركات ومؤسسات رائدة
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[
              "/images/exhibition-booth-fabrication-design-jeddah.webp",
              "/images/custom-wooden-stand-jeddah-super-dome.webp",
              "/images/commercial-vehicle-branding-car-wrapping-jeddah.webp",
              "/images/glass-window-frosted-sticker-branding.webp",
              "/images/roll-up-stand-banner-85x200.webp",
              "/images/restaurant-menu-design-leather-cover.webp",
              "/images/tech-gifts-powerbank-usb-branding.webp",
              "/images/branded-notebooks-diaries-calendar-gift-sets.webp",
            ].map((image, index) => (
              <motion.div key={image} variants={fadeInUp}>
                <GeoImage
                  src={image}
                  alt={`عمل ${index + 1} من بوابة الرواج`}
                  className="aspect-square rounded-xl overflow-hidden"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/portfolio" className="btn-primary inline-flex">
              عرض جميع الأعمال
              <ArrowLeft className="mr-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CUSTOMER REVIEWS SECTION - CAROUSEL STYLE
          ============================================ */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              قصص نجاح من عملائنا الكرام
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              تجارب حقيقية وآراء صادقة من عملاء وثقوا بنا في تنفيذ أعمالهم. كل قصة تحكي عن التزامنا بالتميز.
            </motion.p>
          </motion.div>

          {/* Main Review Card with Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto mb-12"
          >
            {/* Navigation Arrows */}
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-amber-500 hover:shadow-xl transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 md:-translate-x-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-amber-500 hover:shadow-xl transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Review Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Review Content - Right Side */}
                <div className="flex-1 order-2 md:order-1">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-gray-900">{review.rating}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {review.text}
                  </p>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-2">
                    {review.services.map((service, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Reviewer Info - Left Side */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right order-1 md:order-2 md:w-48">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-amber-100 mb-4 flex-shrink-0">
                    <img
                      src={review.image}
                      alt={review.name}
                      width={96}
                      height={96}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{review.role}</p>
                  <span className="inline-flex items-center gap-1 text-green-600 text-xs mb-3">
                    <CheckCircle className="w-4 h-4" />
                    عميل موثق
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mb-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {review.location}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {review.date}
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                    <Printer className="w-3 h-3" />
                    {review.category}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mb-16">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentReview(i)}
                className={`h-3 rounded-full transition-all ${i === currentReview ? 'bg-amber-500 w-6' : 'bg-gray-300 hover:bg-gray-400 w-3'}`}
              />
            ))}
          </div>

          {/* Statistics Row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-gray-600 font-medium">خدمة العملاء</div>
              <div className="text-gray-400 text-xs mt-1">دعم متواصل طوال الأسبوع</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-gray-600 font-medium">ضمان الجودة</div>
              <div className="text-gray-400 text-xs mt-1">إعادة الطباعة مجاناً</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-gray-600 font-medium">تقييم العملاء</div>
              <div className="text-gray-400 text-xs mt-1">بناءً على +500 تقييم</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">+5,000</div>
              <div className="text-gray-600 font-medium">عميل سعيد</div>
              <div className="text-gray-400 text-xs mt-1">في جميع أنحاء المملكة</div>
            </motion.div>
          </motion.div>

          {/* Customer Avatars Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">انضم إلى آلاف العملاء السعداء</h3>

            {/* Avatar Row */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {[
                "/images/reviews/ahmed.webp",
                "/images/reviews/faten.webp",
                "/images/reviews/fahd.jpg",
                "/images/reviews/abdallah.jpg",
                "/images/reviews/mostafa.webp",
                "/images/reviews/mohamed.jpg",
                "/images/reviews/omran.jpg",
                "/images/reviews/mahdy.jpg",
                "/images/reviews/pouja.webp",
                "/images/reviews/ibtsam.jpg",
              ].map((src, i) => (
                <div key={i} className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white shadow-md flex-shrink-0">
                  <img
                    src={src}
                    alt={`عميل ${i + 1}`}
                    width={56}
                    height={56}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>

            {/* More Customers Indicator */}
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-bold">
                  +
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-sm">
              أكثر من 5,000 عميل راضٍ وثقوا بنا في تنفيذ مشاريعهم الإعلانية
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          GEO MAP SECTION
          ============================================ */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold mb-6">
                موقعنا في قلب جدة
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white/80 mb-8 leading-relaxed">
                نتواجد في حي الروضة بجدة، قريبون من جميع أحياء المدينة لخدمتكم بشكل
                أسرع. زوروا معرضنا لمشاهدة عيناتنا واستشارة فريقنا.
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">ساعات العمل</h3>
                    <p className="text-white/70 text-sm">
                      السبت - الخميس: 9 صباحاً - 9 مساءً
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/20 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">التوصيل</h3>
                    <p className="text-white/70 text-sm">
                      توصيل مجاني داخل جدة للطلبات الكبيرة
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8">
                <a
                  href="https://wa.me/966548923300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  تواصل معنا
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.5!2d39.1876!3d21.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMxJzI0LjIiTiAzOcKwMTEnMTUuNCJF!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع بوابة الرواج في جدة"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Map Overlay */}
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                <h3 className="font-bold text-gray-900 mb-1">بوابة الرواج</h3>
                <p className="text-sm text-gray-600">
                  شارع التحلية، حي الروضة، جدة
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="py-20 bg-gradient-to-r from-amber-400 to-amber-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6"
            >
              جاهز لبدء مشروعك؟
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              احصل على عرض سعر مجاني الآن واستفد من خصم 10% على طلبك الأول
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg"
              >
                اطلب عرض سعر الآن
              </Link>
              <a
                href="tel:+966548923300"
                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                اتصل بنا مباشرة
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
