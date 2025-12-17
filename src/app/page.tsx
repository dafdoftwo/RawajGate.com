"use client";

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

export default function HomePage() {
  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      {/* ============================================
          HERO SECTION (PREMIUM REDESIGN)
          ============================================ */}
      <section className="relative min-h-screen flex items-center bg-[#0a0f1c] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
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
                className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/5 pt-8"
              >
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="flex -space-x-4 space-x-reverse transition-transform group-hover:scale-105">
                    <div className="w-12 h-12 rounded-full border-2 border-[#0a0f1c] bg-gray-600 flex items-center justify-center text-xs font-bold text-white">SA</div>
                    <div className="w-12 h-12 rounded-full border-2 border-[#0a0f1c] bg-gray-500 flex items-center justify-center text-xs font-bold text-white">AR</div>
                    <div className="w-12 h-12 rounded-full border-2 border-[#0a0f1c] bg-gray-400 flex items-center justify-center text-xs font-bold text-white">MA</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <span className="text-white font-bold text-xl">5000+</span>
                      <span className="flex text-amber-500"><Award className="w-3 h-3 fill-current" /><Award className="w-3 h-3 fill-current" /><Award className="w-3 h-3 fill-current" /><Award className="w-3 h-3 fill-current" /><Award className="w-3 h-3 fill-current" /></span>
                    </div>
                    <div className="text-sm text-gray-400 font-medium">عميل يثق في جودتنا</div>
                  </div>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-xl">15 عاماً</div>
                    <div className="text-sm text-gray-400 font-medium">من الخبرة والتميز</div>
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
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-2xl shadow-2xl"
                >
                  <GeoImage
                    src="/images/rawaj-gate-printing-workshop-team-at-work.webp"
                    alt="ورشة بوابة الرواج"
                    className="rounded-xl w-full aspect-[4/3] object-cover"
                    priority
                  />
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
                      <GeoImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
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
                      توصيل مجاني داخل جدة للطلبات أكثر من 500 ريال
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
          CUSTOMER REVIEWS SECTION
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
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-bold mb-4"
            >
              آراء العملاء
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              ماذا يقول عملاؤنا عنا؟
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              نفخر بثقة أكثر من 5000 عميل في خدماتنا. إليك بعض آرائهم
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Review 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "تعاملت مع بوابة الرواج لطباعة بطاقات العمل والبروشورات لشركتي. الجودة ممتازة والتسليم كان قبل الموعد المحدد. أنصح بهم بشدة!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <GeoImage
                    src="/images/reviews/ahmed.webp"
                    alt="أحمد العتيبي"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">أحمد العتيبي</h4>
                  <p className="text-sm text-gray-500">صاحب شركة تقنية</p>
                </div>
              </div>
            </motion.div>

            {/* Review 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "جهزوا لنا جناح معرض احترافي في وقت قياسي. التصميم كان مبهر وجذب انتباه جميع الزوار. شكراً لفريق بوابة الرواج!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <GeoImage
                    src="/images/reviews/faten.webp"
                    alt="فاطن المالكي"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">فاطن المالكي</h4>
                  <p className="text-sm text-gray-500">مديرة تسويق</p>
                </div>
              </div>
            </motion.div>

            {/* Review 3 */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "صمموا لي هوية بصرية كاملة لمطعمي الجديد. من الشعار إلى المنيوهات والأكياس. عمل متكامل ومحترف جداً."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <GeoImage
                    src="/images/reviews/fahd.jpg"
                    alt="فهد الشمري"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">فهد الشمري</h4>
                  <p className="text-sm text-gray-500">صاحب مطعم</p>
                </div>
              </div>
            </motion.div>

            {/* Review 4 */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "لافتة المحل 3D التي صنعوها لي غيرت شكل واجهة متجري بالكامل. جودة عالية وتركيب احترافي. شكراً جزيلاً!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <GeoImage
                    src="/images/reviews/abdallah.jpg"
                    alt="عبدالله القحطاني"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">عبدالله القحطاني</h4>
                  <p className="text-sm text-gray-500">صاحب محل تجاري</p>
                </div>
              </div>
            </motion.div>

            {/* Review 5 */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "طلبنا هدايا دعائية لموظفينا وكانت النتيجة رائعة. الطباعة واضحة والمنتجات ذات جودة عالية. سنتعامل معهم مرة أخرى."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <GeoImage
                    src="/images/reviews/mostafa.webp"
                    alt="مصطفى السلمي"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">مصطفى السلمي</h4>
                  <p className="text-sm text-gray-500">مدير موارد بشرية</p>
                </div>
              </div>
            </motion.div>

            {/* Review 6 */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "تغليف سيارات الشركة تم بشكل احترافي ودقيق. الألوان زاهية والتصميم يعكس هوية شركتنا بشكل مثالي. ممتازون!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <GeoImage
                    src="/images/reviews/mohamed.jpg"
                    alt="محمد الغامدي"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">محمد الغامدي</h4>
                  <p className="text-sm text-gray-500">مدير عمليات</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Google Reviews Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gray-100 px-6 py-3 rounded-full">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-gray-900">4.9</span>
              <span className="text-gray-500">من 5 | +200 تقييم على Google</span>
            </div>
          </motion.div>
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
