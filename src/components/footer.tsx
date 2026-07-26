import Link from "next/link";
import Image from "next/image";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Instagram,
    Twitter,
    Linkedin,
} from "lucide-react";
import { BUSINESS, telLink, currentYear } from "@/lib/business";
import { SILOS } from "@/lib/routes";
import { WhatsAppFab } from "@/components/contact-actions";

/** الخدمات الأكثر طلباً — روابط مباشرة لصفحات المال */
const POPULAR_LINKS = [
    { title: "طباعة بطاقات العمل", href: "/commercial-printing/business-cards" },
    { title: "رول أب ستاند", href: "/exhibitions-events/roll-up-stands" },
    { title: "لافتات محلات 3D", href: "/signage-stickers/shop-signage-3d" },
    { title: "تغليف السيارات", href: "/signage-stickers/vehicle-branding" },
    { title: "أسعار الخدمات", href: "/prices" },
    { title: "تصميم شعار", href: "/design-services/logo-design" },
];

/** روابط الشركة — كلها موجودة فعلياً (كان /contact و /privacy يؤديان إلى 404) */
const COMPANY_LINKS = [
    { title: "من نحن", href: "/about" },
    { title: "أعمالنا", href: "/portfolio" },
    { title: "المدونة", href: "/blog" },
    { title: "الأسئلة الشائعة", href: "/faq" },
    { title: "تواصل معنا", href: "/quote" },
];

const LEGAL_LINKS = [
    { title: "سياسة الخصوصية", href: "/privacy" },
    { title: "الشروط والأحكام", href: "/terms" },
];

/** لا يُعرض إلا ما له رابط حقيقي — رابط فارغ href="#" ضار للزائر ولمحركات البحث */
const SOCIAL_LINKS = [
    { href: BUSINESS.social.instagram, label: "إنستغرام", Icon: Instagram },
    { href: BUSINESS.social.x, label: "منصة X", Icon: Twitter },
    { href: BUSINESS.social.linkedin, label: "لينكد إن", Icon: Linkedin },
].filter((s) => s.href.length > 0);

export function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* معلومات الشركة */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-white/5">
                                <Image
                                    src={BUSINESS.logo}
                                    alt="شعار بوابة الرواج - مطبعة في جدة"
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                {/* <h2> سابقاً — لكن الفوتر ليس قسماً موضوعياً في الصفحة */}
                                <span className="block text-xl font-bold">{BUSINESS.nameAr}</span>
                                <span className="block text-sm text-white/60">{BUSINESS.nameEn}</span>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            شريكك الاستراتيجي في الطباعة التجارية وتجهيز المعارض في جدة منذ عام{" "}
                            {BUSINESS.foundingDate}. نقدم حلولاً متكاملة للشركات والمؤسسات في جدة
                            والمنطقة الغربية.
                        </p>

                        {SOCIAL_LINKS.length > 0 && (
                            <div className="flex items-center gap-4">
                                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                        aria-label={label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* الخدمات */}
                    <nav aria-labelledby="footer-services">
                        <h2 id="footer-services" className="text-lg font-bold mb-6">
                            خدماتنا
                        </h2>
                        <ul className="space-y-3">
                            {SILOS.map((silo) => (
                                <li key={silo.slug}>
                                    <Link
                                        href={`/${silo.slug}`}
                                        className="text-white/70 hover:text-amber-400 transition-colors text-sm"
                                    >
                                        {silo.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* الأكثر طلباً */}
                    <nav aria-labelledby="footer-popular">
                        <h2 id="footer-popular" className="text-lg font-bold mb-6">
                            الأكثر طلباً
                        </h2>
                        <ul className="space-y-3">
                            {POPULAR_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-amber-400 transition-colors text-sm"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* التواصل */}
                    <div>
                        <h2 className="text-lg font-bold mb-6">تواصل معنا</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                                <address className="text-white/70 text-sm not-italic">
                                    {BUSINESS.address.street}، {BUSINESS.address.district}
                                    <br />
                                    {BUSINESS.address.city}، {BUSINESS.address.countryName}
                                </address>
                            </li>
                            <li>
                                <a
                                    href={telLink}
                                    className="flex items-center gap-3 text-white/70 hover:text-amber-400 transition-colors text-sm"
                                >
                                    <Phone className="w-5 h-5 text-amber-400" aria-hidden="true" />
                                    <span dir="ltr">{BUSINESS.phone.display}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${BUSINESS.email}`}
                                    className="flex items-center gap-3 text-white/70 hover:text-amber-400 transition-colors text-sm"
                                >
                                    <Mail className="w-5 h-5 text-amber-400" aria-hidden="true" />
                                    <span>{BUSINESS.email}</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-white/70 text-sm">
                                <Clock className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
                                <span>{BUSINESS.hours.displayAr}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* روابط الشركة والقانونية */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        {[...COMPANY_LINKS, ...LEGAL_LINKS].map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-white/60 hover:text-amber-400 text-sm transition-colors"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* الشريط السفلي */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* السنة تُحسب وقت البناء — لا تتقادم (كان مكتوباً 2024 ثابتاً) */}
                        <p className="text-white/50 text-sm">
                            © {currentYear} {BUSINESS.nameAr}. جميع الحقوق محفوظة.
                        </p>
                        <p className="text-white/40 text-xs">
                            مطبعة وخدمات دعاية وإعلان في جدة، المملكة العربية السعودية
                        </p>
                    </div>
                </div>
            </div>

            <WhatsAppFab />
        </footer>
    );
}
