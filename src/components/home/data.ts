import type { Review } from "@/components/reviews-slider";
import { Printer, Signpost, CalendarDays, Gift, Palette } from "lucide-react";

export const SERVICES = [
  {
    title: "مطبوعات تجارية",
    titleEn: "Commercial Printing",
    description: "بطاقات العمل، البروشورات، الملفات، والمطبوعات الرسمية بجودة استثنائية",
    icon: Printer,
    href: "/commercial-printing",
    image: "/images/luxury-business-cards-printing-jeddah.webp",
  },
  {
    title: "لوحات وملصقات",
    titleEn: "Signage & Stickers",
    description: "لافتات المحلات 3D، تغليف السيارات، وملصقات المنتجات بتقنيات حديثة",
    icon: Signpost,
    href: "/signage-stickers",
    image: "/images/3d-shop-signage-letters-acrylic-jeddah.webp",
  },
  {
    title: "معارض وفعاليات",
    titleEn: "Exhibitions & Events",
    description: "أجنحة معارض، ستاندات، كاونترات ترويجية، وخلفيات مسرح احترافية",
    icon: CalendarDays,
    href: "/exhibitions-events",
    image: "/images/exhibition-booth-fabrication-design-jeddah.webp",
  },
  {
    title: "هدايا دعائية",
    titleEn: "Promotional Gifts",
    description: "أقلام، دفاتر، هدايا تقنية، وملابس مطبوعة بشعار شركتك",
    icon: Gift,
    href: "/promotional-gifts",
    image: "/images/corporate-promotional-gifts-jeddah-items.webp",
  },
  {
    title: "خدمات التصميم",
    titleEn: "Design Services",
    description: "تصميم الهوية البصرية، الشعارات، وتجهيز ملفات الطباعة",
    icon: Palette,
    href: "/design-services",
    image: "/images/client-meeting-office-al-rawaj-jeddah.webp",
  },
];

export const REVIEWS: Review[] = [
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

export const GALLERY = [
  { src: "/images/exhibition-booth-fabrication-design-jeddah.webp", alt: "تنفيذ جناح معرض في جدة - بوابة الرواج" },
  { src: "/images/custom-wooden-stand-jeddah-super-dome.webp", alt: "ستاند خشبي مخصص في جدة سوبر دوم" },
  { src: "/images/commercial-vehicle-branding-car-wrapping-jeddah.webp", alt: "تغليف سيارة تجارية بالفينيل في جدة" },
  { src: "/images/glass-window-frosted-sticker-branding.webp", alt: "ستيكر زجاج مطفي لواجهة محل في جدة" },
  { src: "/images/roll-up-stand-banner-85x200.webp", alt: "رول أب ستاند 85×200 سم للمعارض" },
  { src: "/images/restaurant-menu-design-leather-cover.webp", alt: "منيو مطعم بغلاف جلدي فاخر" },
  { src: "/images/tech-gifts-powerbank-usb-branding.webp", alt: "هدايا تقنية دعائية بشعار الشركة" },
  { src: "/images/branded-notebooks-diaries-calendar-gift-sets.webp", alt: "دفاتر وأجندات دعائية مطبوعة بالشعار" },
];

export const HOME_FAQS = [
  {
    question: "ما هي أفضل مطبعة في جدة للطباعة التجارية؟",
    answer:
      "بوابة الرواج مطبعة متكاملة في حي الروضة بجدة تعمل منذ عام 2009، وتغطي الطباعة التجارية (بطاقات العمل، البروشورات، الملفات، المنيوهات، دفاتر NCR)، ولافتات المحلات ثلاثية الأبعاد، وتجهيز أجنحة المعارض، والهدايا الدعائية، وخدمات التصميم. التسليم العاجل متاح خلال 24 ساعة داخل جدة.",
  },
  {
    question: "كم تستغرق الطباعة في جدة؟",
    answer:
      "الطلبات العاجلة داخل جدة تُسلَّم خلال 24 ساعة. الطلبات العادية تستغرق من 3 إلى 5 أيام عمل حسب نوع الخدمة وحجم الكمية. أما مشاريع تجهيز أجنحة المعارض فتحتاج عادة من أسبوعين إلى أربعة أسابيع حسب حجم الجناح ودرجة التخصيص.",
  },
  {
    question: "هل تقدمون خدمة التصميم قبل الطباعة؟",
    answer:
      "نعم. لدينا فريق تصميم داخلي يقدم تصميم الهوية البصرية والشعارات وجميع المطبوعات، إضافة إلى خدمات ما قبل الطباعة (Pre-Press) من تحويل الألوان إلى CMYK وضبط الـ Bleed وفحص ملفات PDF لضمان طباعة مطابقة للتصميم.",
  },
  {
    question: "هل تخدمون مدناً خارج جدة؟",
    answer:
      "نعم. نخدم جدة ومكة المكرمة والطائف ورابغ بشكل مباشر، وننفّذ مشاريع تجهيز المعارض والفعاليات في مختلف مناطق المملكة العربية السعودية مع فريق متخصص للتركيب والإشراف في الموقع.",
  },
];
