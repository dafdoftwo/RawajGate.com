import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowLeft } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { BUSINESS } from "@/lib/business";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    openGraph: {
        title: "تواصل معنا واطلب عرض سعر مجاني | بوابة الرواج",
        description: "تواصل مع بوابة الرواج للحصول على عرض سعر مجاني. اتصل بنا أو أرسل طلبك عبر النموذج. نرد خلال ساعة واحدة.",
        url: "https://rawajgate.com/quote",
        images: [{ url: "/images/client-meeting-office-al-rawaj-jeddah.webp", width: 1200, height: 630, alt: "تواصل معنا واطلب عرض سعر مجاني" }],
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "تواصل معنا واطلب عرض سعر مجاني",
        description: "تواصل مع بوابة الرواج للحصول على عرض سعر مجاني. اتصل بنا أو أرسل طلبك عبر النموذج. نرد خلال ساعة واحدة.",
        images: ["/images/client-meeting-office-al-rawaj-jeddah.webp"],
    },
    alternates: { canonical: "/quote" },
    title: "تواصل معنا واطلب عرض سعر مجاني",
    description: "تواصل مع بوابة الرواج للحصول على عرض سعر مجاني. اتصل بنا أو أرسل طلبك عبر النموذج. نرد خلال ساعة واحدة.",
    keywords: ["تواصل معنا", "عرض سعر", "اتصل بنا", "بوابة الرواج جدة"],
};

export default function ContactPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: BUSINESS.url },
        { name: "تواصل معنا", url: `${BUSINESS.url}/quote` },
    ]);

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
            {/* Hero Section */}
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16 lg:py-20">
                <div className="container mx-auto px-4 text-center">
                    <nav className="text-sm text-white/60 mb-4 justify-center flex">
                        <Link href="/" className="hover:text-white">الرئيسية</Link>
                        <span className="mx-2">/</span>
                        <span className="text-amber-400">تواصل معنا</span>
                    </nav>

                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                        <span className="text-gradient">تواصل معنا</span>
                    </h1>

                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        نسعد بخدمتك! أرسل طلبك وسنرد عليك خلال ساعة واحدة.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                                معلومات التواصل
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 mb-1">الهاتف</div>
                                        <a href={`tel:${BUSINESS.phone.e164}`} className="text-gray-600 hover:text-amber-600" dir="ltr">
                                            {BUSINESS.phone.display}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                                        <MessageCircle className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 mb-1">واتساب</div>
                                        <a href={`https://wa.me/${BUSINESS.phone.whatsapp}`} className="text-gray-600 hover:text-green-600" dir="ltr">
                                            {BUSINESS.phone.display}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 mb-1">البريد الإلكتروني</div>
                                        <a href={`mailto:${BUSINESS.email}`} className="text-gray-600 hover:text-blue-600">
                                            {BUSINESS.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-rose-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 mb-1">العنوان</div>
                                        {/* موحّد من lib/business.ts — كان الموقع يعرض 4 عناوين مختلفة */}
                                        <address className="text-gray-600 not-italic">
                                            {BUSINESS.address.street}، {BUSINESS.address.district}
                                            <br />
                                            {BUSINESS.address.city}، {BUSINESS.address.countryName}
                                        </address>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 mb-1">ساعات العمل</div>
                                        <p className="text-gray-600">
                                            السبت - الخميس<br />
                                            9:00 صباحاً - 9:00 مساءً
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="card p-8">
                                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                                    أرسل طلبك
                                </h2>

                                <QuoteForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="h-96 relative bg-gray-200">
                <div className="absolute inset-0">
                    {/* Importing GeoImage at top of file, assuming available but need to check import line. Use inline require or assume global import if not sure, but better to check imports first. Wait, I saw imports. GeoImage wasn't imported. I need to adding import first? No, I'll use text replacement to add import too. */}
                    {/* Actually, let's just use the same GeoImage pattern. I'll need to add the import line in a separate step or just assume I can edit imports. Let's do imports first. */}
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.021045236773!2d39.15682137596006!3d21.58514198539655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c32e2c2c2c2c2d%3A0x2c2c2c2c2c2c2c2c!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="filter grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </section>
        </>
    );
}
