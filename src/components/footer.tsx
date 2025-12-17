import Link from "next/link";
import {
    Phone,
    Mail,
    MapPin,
    Instagram,
    Twitter,
    Linkedin,
    MessageCircle,
} from "lucide-react";

const FOOTER_LINKS = {
    services: [
        { title: "مطبوعات تجارية", href: "/commercial-printing" },
        { title: "لوحات وملصقات", href: "/signage-stickers" },
        { title: "معارض وفعاليات", href: "/exhibitions-events" },
        { title: "هدايا دعائية", href: "/promotional-gifts" },
        { title: "خدمات التصميم", href: "/design-services" },
    ],
    popular: [
        { title: "بطاقات العمل", href: "/commercial-printing/business-cards" },
        { title: "رول أب ستاند", href: "/exhibitions-events/roll-up-stands" },
        { title: "لافتات 3D", href: "/signage-stickers/shop-signage-3d" },
        { title: "تغليف السيارات", href: "/signage-stickers/vehicle-branding" },
        { title: "هدايا مكتبية", href: "/promotional-gifts/office-gifts" },
    ],
    company: [
        { title: "من نحن", href: "/about" },
        { title: "أعمالنا", href: "/portfolio" },
        { title: "المدونة", href: "/blog" },
        { title: "تواصل معنا", href: "/contact" },
        { title: "سياسة الخصوصية", href: "/privacy" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-white/5">
                                <img
                                    src="/images/logo-rg.png"
                                    alt="Rawaj Gate Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">بوابة الرواج</h2>
                                <p className="text-sm text-white/60">Rawaj Gate</p>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            شريكك الاستراتيجي في الطباعة التجارية وتجهيز المعارض في جدة منذ أكثر
                            من 15 عاماً. نقدم حلولاً متكاملة للشركات والمؤسسات.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">خدماتنا</h3>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.services.map((link) => (
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
                    </div>

                    {/* Popular */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">الأكثر طلباً</h3>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.popular.map((link) => (
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
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">تواصل معنا</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                <span className="text-white/70 text-sm">
                                    شارع التحلية، حي الروضة
                                    <br />
                                    جدة، المملكة العربية السعودية
                                </span>
                            </li>
                            <li>
                                <a
                                    href="tel:+966548923300"
                                    className="flex items-center gap-3 text-white/70 hover:text-amber-400 transition-colors text-sm"
                                >
                                    <Phone className="w-5 h-5 text-amber-400" />
                                    <span dir="ltr">+966 55 555 5555</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@rawajgate.com"
                                    className="flex items-center gap-3 text-white/70 hover:text-amber-400 transition-colors text-sm"
                                >
                                    <Mail className="w-5 h-5 text-amber-400" />
                                    <span>info@rawajgate.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/50 text-sm">
                            © 2024 بوابة الرواج. جميع الحقوق محفوظة.
                        </p>
                        <div className="flex items-center gap-6">
                            {FOOTER_LINKS.company.slice(0, 3).map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/50 hover:text-white text-sm transition-colors"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* WhatsApp Sticky Button */}
            <a
                href="https://wa.me/966548923300"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors hover:scale-110"
                aria-label="تواصل عبر واتساب"
            >
                <MessageCircle className="w-7 h-7 text-white" />
            </a>
        </footer>
    );
}
