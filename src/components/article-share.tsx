import { Facebook, Twitter, MessageCircle, Linkedin } from "lucide-react";
import { BUSINESS } from "@/lib/business";

/**
 * أزرار مشاركة المقال — Server Component بلا JavaScript.
 * روابط مشاركة عادية تعمل بدون أي حزمة عميل.
 */
export function ArticleShare({ slug, title }: { slug: string; title: string }) {
    const url = `${BUSINESS.url}/blog/${slug}`;
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const targets = [
        {
            label: "واتساب",
            href: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
            Icon: MessageCircle,
            className: "bg-green-500 hover:bg-green-600",
        },
        {
            label: "منصة X",
            href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            Icon: Twitter,
            className: "bg-gray-900 hover:bg-gray-800",
        },
        {
            label: "لينكد إن",
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            Icon: Linkedin,
            className: "bg-[#0a66c2] hover:bg-[#004182]",
        },
        {
            label: "فيسبوك",
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            Icon: Facebook,
            className: "bg-[#1877f2] hover:bg-[#0d65d9]",
        },
    ];

    return (
        <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="font-bold text-gray-900 mb-4">شارك المقال</p>
            <ul className="flex flex-wrap gap-3">
                {targets.map(({ label, href, Icon, className }) => (
                    <li key={label}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`شارك على ${label}`}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors ${className}`}
                        >
                            <Icon className="w-4 h-4" aria-hidden="true" />
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
