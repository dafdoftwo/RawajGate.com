import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User, Facebook, Twitter, MessageCircle, Bookmark, ThumbsUp } from "lucide-react";
import { notFound } from "next/navigation";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { GeoImage } from "@/components/geo-image";

// District mapping for blog categories
const CATEGORY_DISTRICTS: Record<string, string> = {
    "مطبوعات": "الروضة",
    "لوحات": "الكورنيش",
    "معارض": "سوبر دوم",
    "تصميم": "التحلية",
    "هدايا": "الأندلس",
};

// Blog posts data
const BLOG_POSTS = {
    "how-to-choose-business-card-paper": {
        title: "كيف تختار ورق بطاقة العمل المناسب؟",
        excerpt: "دليل شامل لأنواع الورق والتشطيبات المتوفرة لبطاقات العمل.",
        category: "مطبوعات",
        date: "2024-12-10",
        readTime: "5 دقائق",
        author: "فريق بوابة الرواج",
        image: "/images/luxury-business-cards-printing-jeddah.webp",
        content: `
## مقدمة

بطاقة العمل هي أول انطباع تتركه لدى عميلك المحتمل. اختيار الورق الصحيح يحدث فرقاً كبيراً في هذا الانطباع. في هذا الدليل الشامل، سنستعرض جميع أنواع الورق والتشطيبات المتوفرة لمساعدتك في اتخاذ القرار الأفضل عند [طباعة كروت شخصية](/commercial-printing/business-cards) لمشروعك.

## أنواع الورق الرئيسية

### 1. ورق الكوشيه (Coated Paper)

الأكثر شيوعاً لبطاقات العمل. يأتي بنوعين:

- **كوشيه لامع (Glossy)**: سطح لامع يعكس الضوء، يُبرز الألوان والصور. مناسب للتصاميم الملونة.
- **كوشيه مطفي (Matte)**: سطح ناعم بدون لمعان، مظهر أنيق وراقي. الأفضل للتصاميم البسيطة والنصوص.

**الوزن الموصى به:** 300-400 جرام

### 2. ورق الكتان (Linen)

ورق بملمس نسيجي يشبه القماش. يضفي طابعاً كلاسيكياً وفاخراً. مثالي للمحامين، الاستشاريين، والقطاعات التقليدية التي تهتم بـ [المطبوعات الورقية الفاخرة](/commercial-printing).

**الوزن الموصى به:** 300-350 جرام

### 3. ورق الكرافت (Kraft)

ورق بني طبيعي بمظهر عضوي. مناسب للعلامات الصديقة للبيئة، المقاهي، والمنتجات الطبيعية.

**الوزن الموصى به:** 350 جرام

### 4. ورق قطني (Cotton)

ورق فاخر جداً مصنوع من ألياف القطن. ملمس ناعم ومميز. للعلامات الفاخرة والشخصيات التنفيذية.

**الوزن الموصى به:** 350-400 جرام

## التشطيبات الخاصة

### طلاء UV موضعي (Spot UV)

طبقة لامعة على أجزاء محددة (الشعار مثلاً) تخلق تباين جذاب. إذا لم يكن لديك شعار بعد، يمكنك الاستفادة من خدمة [تصميم الشعارات](/design-services/logo-design) لدينا.

### الختم الحراري (Hot Foil Stamping)

رقائق ذهبية أو فضية أو ملونة تُطبع بالحرارة. مظهر فاخر جداً.

### النقش البارز (Embossing)

رفع الشعار أو النص ليبرز عن السطح. يُضيف بُعداً ثلاثياً.

### الحواف الملونة (Edge Painting)

صبغ حواف البطاقة بلون مميز. لمسة إبداعية تلفت الانتباه.

## نصائح لاختيار الورق

1. **فكر في طبيعة عملك**: المحامون والاستشاريون يناسبهم الكتان أو المطفي. المصممون والمبدعون يمكنهم التجريب أكثر.

2. **ضع في اعتبارك التصميم**: الصور والألوان الكثيرة تحتاج ورقاً لامعاً. التصاميم البسيطة تتألق على الورق المطفي. تأكد من أن [الهوية البصرية](/design-services/branding-identity) الخاصة بك متناسقة مع خامة الورق.

3. **الميزانية**: ابدأ بالكوشيه 350 جرام كخيار متوازن. أضف التشطيبات الخاصة حسب الميزانية.

4. **اطلب عينات**: قبل طباعة كمية كبيرة، اطلب عينات من أنواع مختلفة لتشعر بالفرق.

## الخلاصة

لا يوجد خيار "أفضل" مطلق - الورق الصحيح يعتمد على هويتك وجمهورك المستهدف. في بوابة الرواج، نقدم استشارة مجانية لمساعدتك في اختيار الورق والتشطيب المثالي لبطاقاتك.
    `,
    },
    "vehicle-branding-tips": {
        title: "5 نصائح قبل تغليف سيارتك",
        excerpt: "ما يجب معرفته قبل تغليف سيارتك: اختيار الفينيل، التصميم الفعال، العناية والصيانة.",
        category: "لوحات",
        date: "2024-12-05",
        readTime: "4 دقائق",
        author: "فريق بوابة الرواج",
        image: "/images/commercial-vehicle-branding-car-wrapping-jeddah.webp",
        content: `
## مقدمة

تغليف السيارات (Vehicle Wrapping) أصبح من أقوى أدوات التسويق المتنقل. سيارتك تتحول لإعلان متحرك يراه الآلاف يومياً. لكن قبل أن تطلب خدمة [استيكرات السيارات](/signage-stickers/vehicle-branding)، إليك 5 نصائح مهمة.

## 1. اختر نوع الفينيل بعناية

### أنواع الفينيل الرئيسية:

- **3M 1080**: الأفضل عالمياً، ضمان 5+ سنوات، سهل الإزالة
- **Avery Dennison**: جودة ممتازة، ألوان متنوعة
- **Oracal 970**: خيار اقتصادي جيد، ضمان 3 سنوات

**نصيحتنا**: لا تبخل في الفينيل. الأنواع الرخيصة تبهت سريعاً وتتلف الدهان عند الإزالة.

## 2. صمم للرؤية السريعة

السيارة تتحرك والناس ترى الإعلان لثوانٍ فقط. لذلك:

- **شعار كبير واضح**: يُقرأ من مسافة 20 متر
- **ألوان متباينة**: تبرز على الطريق
- **معلومات أساسية فقط**: الاسم، رقم الجوال، الموقع
- **تجنب النصوص الطويلة**: لن يقرأها أحد! إذا كنت بحاجة لمساعدة، فريقنا متخصص في [تصميم هوية السيارات](/design-services/branding-identity).

## 3. فكر في مناطق التغليف

### التغليف الكامل (Full Wrap)
يغطي السيارة بالكامل. التأثير الأقوى، التكلفة الأعلى (8,000-15,000 ريال).

### التغليف الجزئي (Partial Wrap)
يغطي جزءاً من السيارة (الأبواب، الخلفية). تكلفة أقل (3,000-6,000 ريال).

### ملصقات فقط
شعار وبيانات الاتصال فقط. الأوفر (500-1,500 ريال). يمكنك أيضاً استخدام [الملصقات المقطعة](/signage-stickers/wall-decals) كخيار اقتصادي.

## 4. جهّز السيارة قبل التغليف

- **اغسل السيارة جيداً**: أي أوساخ تحت الفينيل ستبقى للأبد!
- **أصلح الخدوش**: الفينيل يُظهر العيوب لا يخفيها
- **أزل المغناطيسات والملصقات القديمة**: السطح يجب أن يكون نظيفاً تماماً

## 5. اعتنِ بالتغليف بعد التركيب

- **انتظر 24 ساعة** قبل الغسيل الأول
- **تجنب غسيل الضغط العالي** على الحواف
- **لا تستخدم الشمع** على المناطق المطفية
- **أركن في الظل** قدر الإمكان لإطالة عمر الفينيل

## الخلاصة

تغليف السيارة استثمار ذكي في التسويق. اختر فينيل جيد، صمم ببساطة، واعتنِ بالتغليف - وستحصل على إعلان متحرك يدوم لسنوات!
    `,
    },
    "exhibition-booth-mistakes": {
        title: "7 أخطاء شائعة في تصميم أجنحة المعارض",
        excerpt: "تجنب هذه الأخطاء لتحقيق أقصى استفادة من مشاركتك في المعارض والفعاليات.",
        category: "معارض",
        date: "2024-11-28",
        readTime: "6 دقائق",
        author: "فريق بوابة الرواج",
        image: "/images/exhibition-booth-fabrication-design-jeddah.webp",
        content: `
## مقدمة

المعارض فرصة ذهبية للقاء العملاء المحتملين وجهاً لوجه. لكن الكثير من الشركات تضيع هذه الفرصة بأخطاء يمكن تجنبها عند تجهيز [أجنحة المعارض](/exhibitions-events). إليك 7 أخطاء شائعة وكيف تتجنبها.

## الخطأ 1: جناح مزدحم بالمعلومات

**المشكلة**: ملء كل سنتيمتر بالنصوص والصور والمنتجات.

**الحل**: قاعدة "أقل يعني أكثر". ركز على رسالة واحدة أساسية. اترك مساحات فارغة للتنفس البصري. في [تصميم وبناء الأجنحة](/exhibitions-events/custom-wood-booths)، نركز دائماً على انسيابية الحركة.

## الخطأ 2: إضاءة ضعيفة

**المشكلة**: الاعتماد فقط على إضاءة المعرض العامة.

**الحل**: أضف إضاءة خاصة! سبوتات على المنتجات، إضاءة LED على الشعار، إضاءة دافئة في منطقة الاستقبال.

## الخطأ 3: عدم وجود منطقة محادثة

**المشكلة**: الزائر يقف في الممر للحديث معك.

**الحل**: خصص منطقة بكراسي مريحة للمحادثات الجادة. هنا تُبرم الصفقات! يمكنك استخدام [كاونترات استقبال](/exhibitions-events/promo-counters) مخصصة لهذا الغرض.

## الخطأ 4: فريق غير مدرب

**المشكلة**: موظفون لا يعرفون المنتجات أو يجلسون على هواتفهم.

**الحل**: درّب الفريق على المنتجات، طريقة الترحيب، وكيفية جمع بيانات العملاء المحتملين.

## الخطأ 5: لا هدايا أو تذكارات

**المشكلة**: الزائر يمشي بدون شيء يتذكرك به.

**الحل**: وزّع هدايا عملية تحمل شعارك: أقلام، دفاتر، USB، أكياس. ستبقى على مكتبه! تصفح قسم [الهدايا الدعائية](/promotional-gifts) لاختيار الأنسب.

## الخطأ 6: تجاهل التواجد الرقمي

**المشكلة**: جناح جميل لكن لا رابط للسوشيال ميديا أو الموقع.

**الحل**: ضع QR Code واضح يوصل لموقعك. شجع الزوار على المتابعة مقابل خصم أو مسابقة. يمكن طباعته على [رول أب ستاند](/exhibitions-events/roll-up-stands) بجوار المدخل.

## الخطأ 7: عدم المتابعة بعد المعرض

**المشكلة**: جمعت مئات البطاقات... ولم تتصل بأحد!

**الحل**: تواصل خلال 48 ساعة بعد المعرض. كل يوم تأخير يقلل فرصة البيع.

## الخلاصة

المعرض استثمار كبير (إيجار، جناح، سفر، فريق). لا تضيّعه بأخطاء بسيطة! خطط جيداً، صمم بذكاء، درّب فريقك، وتابع بعد المعرض.
    `,
    },
    "logo-design-process": {
        title: "رحلة تصميم الشعار: من الفكرة للتنفيذ",
        excerpt: "كيف يعمل المصممون المحترفون على تصميم شعار ناجح؟ تعرف على المراحل والأدوات.",
        category: "تصميم",
        date: "2024-11-20",
        readTime: "7 دقائق",
        author: "فريق بوابة الرواج",
        image: "/images/client-meeting-office-al-rawaj-jeddah.webp",
        content: `
## مقدمة

الشعار ليس مجرد رسمة جميلة - إنه تكثيف لهوية العلامة التجارية في رمز واحد. في هذا المقال، نكشف الستار عن عملية [تصميم الشعارات](/design-services/logo-design) الاحترافية خطوة بخطوة.

## المرحلة 1: الاستكشاف (Discovery)

قبل أي رسم، نحتاج معلومات:

- **ما نشاط الشركة؟** مصنع، متجر، خدمات؟
- **من الجمهور المستهدف؟** أعمارهم، اهتماماتهم، مستواهم الاجتماعي
- **ما الرسالة المطلوبة؟** احترافية؟ ودية؟ فخامة؟ بساطة؟
- **من المنافسون؟** لنتميز عنهم لا نشبههم
- **هل هناك تفضيلات؟** ألوان، أنماط، أمثلة معجب بها

## المرحلة 2: البحث والإلهام

المصمم يبحث في:

- شعارات المنافسين (لتجنب التشابه)
- اتجاهات التصميم الحالية
- رموز مرتبطة بالمجال
- تاريخ الشركة وقيمها

ويجمع لوحة إلهام (Moodboard) توضح الاتجاه البصري. هذه الخطوة أساسية في بناء [هوية بصرية متكاملة](/design-services/branding-identity).

## المرحلة 3: الرسم اليدوي (Sketching)

نعم، نبدأ بالورقة والقلم! المصمم يرسم عشرات الأفكار السريعة:

- أشكال هندسية
- رموز مجردة
- حروف معدّلة (Lettermarks)
- مزيج من الاسم والرمز

## المرحلة 4: التنفيذ الرقمي

الأفكار الأفضل تُنقل للكمبيوتر باستخدام:

- **Adobe Illustrator**: البرنامج الأساسي لتصميم الشعارات
- **Figma**: للتعاون والعرض على العميل

الشعار يُصمم بصيغة Vector ليُطبع بأي حجم بدون فقدان الجودة، سواء على [بطاقة عمل](/commercial-printing/business-cards) صغيرة أو [لوحة خارجية](/signage-stickers/outdoor-banners) ضخمة.

## المرحلة 5: العرض على العميل

نقدم 2-4 اتجاهات مختلفة مع شرح:

- لماذا اخترنا هذا اللون؟
- ماذا يرمز الشكل؟
- كيف سيبدو على المطبوعات واللافتات؟

## المرحلة 6: التعديلات

العميل يختار اتجاهاً ونعمل عليه:

- تعديل الألوان
- تغيير الخط
- ضبط النسب
- إضافة أو حذف عناصر

جولات التعديل تستمر حتى الرضا التام.

## المرحلة 7: التسليم

الملفات النهائية تشمل:

- **AI/EPS**: ملفات مصدرية للطباعة
- **SVG**: للمواقع الإلكترونية
- **PNG**: شفاف للاستخدام السريع
- **PDF**: للعرض والمشاركة
- **دليل الاستخدام**: الألوان الصحيحة، المساحات، الحجم الأدنى

## الخلاصة

الشعار الجيد يستحق الوقت والجهد. لا تستعجل العملية، واختر مصمماً يفهم علامتك لا يبيعك قوالب جاهزة! إذا كان لديك ملفات جاهزة وتحتاج لتجهيزها، يمكنك الاستفادة من خدمات [ما قبل الطباعة](/design-services/pre-press).
    `,
    },
    "promotional-gifts-guide": {
        title: "دليل اختيار الهدايا الدعائية للشركات",
        excerpt: "كيف تختار الهدية المناسبة لعملائك؟ معايير الاختيار والميزانية المناسبة.",
        category: "هدايا",
        date: "2024-11-15",
        readTime: "5 دقائق",
        author: "فريق بوابة الرواج",
        image: "/images/branded-notebooks-diaries-calendar-gift-sets.webp",
        content: `
## مقدمة

الهدايا الدعائية من أذكى أنواع التسويق. هدية بـ 10 ريال قد تجلب عميلاً يدفع الآلاف! لكن كيف تختار الهدية الصحيحة من بين آلاف خيارات [الهدايا الدعائية](/promotional-gifts)؟

## قاعدة ذهبية: الفائدة أولاً

الهدية الجيدة = هدية يستخدمها العميل يومياً:

✅ **هدايا ممتازة**: أقلام، دفاتر، USB، باور بانك، أكواب
❌ **هدايا سيئة**: تحف تراكم الغبار، ميداليات لا تُستخدم

## تصنيف الهدايا حسب الميزانية

### ميزانية محدودة (1-5 ريال/قطعة)
- أقلام بلاستيكية
- ميداليات
- ستيكرات
- [أكياس قماشية](/promotional-gifts/bags-packaging) بسيطة

**الاستخدام**: توزيع واسع في المعارض والفعاليات

### ميزانية متوسطة (5-20 ريال/قطعة)
- أقلام معدنية
- [مجموعات مكتبية](/promotional-gifts/office-gifts)
- أكواب
- حوامل جوال

**الاستخدام**: هدايا للعملاء النشطين

### ميزانية عالية (20-100 ريال/قطعة)
- [باور بانك وفلاشات](/promotional-gifts/tech-gadgets)
- سماعات بلوتوث
- دفاتر جلدية فاخرة
- مجموعات هدايا

**الاستخدام**: كبار العملاء، شركاء الأعمال

### ميزانية فاخرة (100+ ريال/قطعة)
- ساعات
- حقائب
- أجهزة إلكترونية
- هدايا مخصصة

**الاستخدام**: رؤساء الشركات، عقود كبرى

## اختر حسب المناسبة

| المناسبة | الهدية المناسبة |
|----------|-----------------|
| معرض | أقلام، أكياس، ملصقات |
| عيد الموظفين | [تيشرتات وكابات](/promotional-gifts/wearables)، أكواب |
| شكر عميل كبير | مجموعة هدايا فاخرة |
| رمضان | تمور، فوانيس، سجادات صلاة |
| السنة الجديدة | أجندات، تقويمات |

## نصائح للطباعة على الهدايا

1. **الشعار فقط**: لا تكتب عنوان الموقع الكامل!
2. **لون واحد أو اثنين**: أوضح وأنظف
3. **الحجم المناسب**: ليس صغيراً جداً ولا ضخماً
4. **اختبر العينة**: قبل طباعة الكمية الكبيرة

## الخلاصة

الهدية الدعائية الناجحة = مفيدة + جميلة + تحمل شعارك بوضوح. استثمر في الجودة لا الكمية، وستحصد ولاء العملاء!
    `,
    },
    "print-file-preparation": {
        title: "كيف تجهز ملفك للطباعة بشكل صحيح؟",
        excerpt: "دليل Pre-Press: الدقة، الألوان، الخطوط، وBleed. تجنب أخطاء الطباعة الشائعة.",
        category: "مطبوعات",
        date: "2024-11-08",
        readTime: "6 دقائق",
        author: "فريق بوابة الرواج",
        image: "/images/printing-machines-digital-offset-equipment.webp",
        content: `
## مقدمة

أرسلت ملفك للمطبعة وجاءت النتيجة مختلفة عما توقعت؟ غالباً المشكلة في تجهيز الملف. إليك دليل شامل لتجهيز ملفات الطباعة باحتراف، وهي خدمة نقدمها كجزء من [خدمات ما قبل الطباعة](/design-services/pre-press).

## 1. الدقة (Resolution)

### للطباعة: 300 DPI كحد أدنى

ملفات الشاشة (72 DPI) ستظهر مشوشة عند الطباعة!

**كيف تتحقق**: في Photoshop: Image > Image Size > Resolution

**للطباعة الكبيرة**: مثل [البنرات الخارجية](/signage-stickers/outdoor-banners)، دقة 150 DPI كافية لأنها تُرى من بعيد.

## 2. نظام الألوان: CMYK لا RGB

### الشاشات تستخدم RGB (أحمر، أخضر، أزرق)
### المطابع تستخدم CMYK (سماوي، ماجنتا، أصفر، أسود)

بعض ألوان RGB (خاصة الأزرق النيون والأخضر الفاقع) لا تُطبع بنفس الشكل في CMYK.

**الحل**: حوّل ملفك لـ CMYK قبل الإرسال، وتقبّل أن الألوان ستكون أقل تشبعاً قليلاً. هذا ضروري جداً عند طباعة [البروشورات والفلايرات](/commercial-printing/flyers-brochures).

## 3. هامش القص (Bleed)

### ما هو؟
مساحة إضافية (عادة 3-5 مم) تمتد خارج حدود التصميم.

### لماذا؟
عند قص الورق، قد يحدث انزياح بسيط. بدون Bleed، ستظهر حواف بيضاء!

**القاعدة**: مدّ الخلفيات والصور حتى حافة Bleed، لكن أبقِ النصوص والعناصر المهمة داخل منطقة الأمان (3 مم من حافة القص).

## 4. الخطوط (Fonts)

### المشكلة الشائعة
أرسلت ملفاً بخط جميل... والمطبعة ليس لديها هذا الخط!

### الحلول

1. **حوّل النصوص لمنحنيات (Outlines)**: في Illustrator: Type > Create Outlines
2. **أرفق ملفات الخطوط**: مع ملف التصميم
3. **استخدم PDF/X**: يضمّن الخطوط تلقائياً

## 5. صيغة الملف

### PDF/X-1a أو PDF/X-4
الصيغة المعيارية للطباعة. تضمّن الخطوط وتضمن الألوان.

### احتفظ بالملف المصدري
AI, PSD, INDD - في حال احتاجت المطبعة تعديلات

## 6. قائمة فحص قبل الإرسال

- [ ] الدقة 300 DPI
- [ ] الألوان CMYK
- [ ] Bleed 3-5 مم
- [ ] النصوص Outlines أو خطوط مرفقة
- [ ] صيغة PDF/X
- [ ] لا توجد صور ناقصة (مرتبطة)
- [ ] راجعت الملف على شاشة مختلفة

## الخلاصة

تجهيز الملف الصحيح يوفر عليك الوقت والمال ويضمن نتيجة تطابق توقعاتك. في بوابة الرواج، نساعدك في ضمان جودة ملفاتك لكل شيء من [الفواتير ودفاتر NCR](/commercial-printing/ncr-books) وحتى [لوحات المحلات](/signage-stickers/shop-signage-3d). أرسل الملف لنا وسنفحصه مجاناً!
    `,
    },
};

// Generate Article Schema for SEO
const generateArticleSchema = (post: typeof BLOG_POSTS[keyof typeof BLOG_POSTS], slug: string) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://rawajgate.com${post.image}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
        "@type": "Organization",
        "name": "بوابة الرواج",
        "url": "https://rawajgate.com"
    },
    "publisher": {
        "@type": "Organization",
        "name": "بوابة الرواج",
        "logo": {
            "@type": "ImageObject",
            "url": "https://rawajgate.com/logo.png"
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://rawajgate.com/blog/${slug}`
    },
    "articleSection": post.category,
    "inLanguage": "ar"
});

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];

    if (!post) {
        return { title: "مقال غير موجود" };
    }

    return {
        title: `${post.title} | مدونة بوابة الرواج`,
        description: post.excerpt,
        keywords: [
            post.category,
            "طباعة جدة",
            "تصميم",
            "بوابة الرواج",
            "نصائح طباعة",
        ],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [{
                url: post.image,
                width: 1200,
                height: 630,
                alt: post.title,
            }],
            type: "article",
            locale: "ar_SA",
            publishedTime: post.date,
            authors: ["بوابة الرواج"],
            section: post.category,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
        alternates: {
            canonical: `https://rawajgate.com/blog/${slug}`,
        },
    };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];

    if (!post) {
        notFound();
    }

    // Get related posts (same category, excluding current)
    const relatedPosts = Object.entries(BLOG_POSTS)
        .filter(([key, p]) => p.category === post.category && key !== slug)
        .slice(0, 2);

    // Generate schemas
    const articleSchema = generateArticleSchema(post, slug);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "الرئيسية", url: "https://rawajgate.com" },
        { name: "المدونة", url: "https://rawajgate.com/blog" },
        { name: post.title, url: `https://rawajgate.com/blog/${slug}` },
    ]);

    return (
        <>
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Hero */}
            <section className="bg-gradient-to-bl from-[#1a365d] via-[#2d4a7c] to-[#1a365d] py-16">
                <div className="container mx-auto px-4">
                    <nav className="text-sm text-white/60 mb-6 flex justify-center">
                        <Link href="/" className="hover:text-white">الرئيسية</Link>
                        <span className="mx-2">/</span>
                        <Link href="/blog" className="hover:text-white">المدونة</Link>
                        <span className="mx-2">/</span>
                        <span className="text-amber-400">{post.category}</span>
                    </nav>

                    <div className="max-w-3xl mx-auto text-center">
                        <span className="bg-amber-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                            {post.category}
                        </span>
                        <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white mt-4 mb-6">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-6 text-white/70 text-sm">
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString('ar-SA')}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="max-w-4xl mx-auto">
                    <GeoImage
                        src={post.image}
                        alt={`${post.title} - مقال من بوابة الرواج`}
                        district={CATEGORY_DISTRICTS[post.category] || "الروضة"}
                        caption={`${post.title} - ${post.category}`}
                        className="w-full aspect-[16/9] object-cover rounded-2xl shadow-xl"
                        priority
                    />
                </div>
            </div>

            {/* Content */}
            <article className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-amber-600 prose-strong:text-gray-900 prose-li:text-gray-700 prose-li:marker:text-amber-500">
                            {/* Custom Markdown Parser */}
                            {post.content.split('\n').map((line, index) => {
                                // Headers
                                if (line.startsWith('## ')) return <h2 key={index} className="text-2xl font-bold mt-10 mb-6 text-gray-900">{line.replace('## ', '')}</h2>;
                                if (line.startsWith('### ')) return <h3 key={index} className="text-xl font-bold mt-8 mb-4 text-gray-800">{line.replace('### ', '')}</h3>;

                                // Paragraphs with Bold and Link parsing
                                const parseContent = (text: string) => {
                                    const parts = [];
                                    let lastIndex = 0;
                                    // Regex for bold (**bold**) and links ([text](/url))
                                    const regex = /(\*\*.*?\*\*)|(\[.*?\]\(.*?\))/g;
                                    let match;

                                    while ((match = regex.exec(text)) !== null) {
                                        // Add text before proper match
                                        if (match.index > lastIndex) {
                                            parts.push(text.slice(lastIndex, match.index));
                                        }

                                        const fullMatch = match[0];

                                        if (fullMatch.startsWith('**')) {
                                            parts.push(<strong key={match.index} className="font-bold text-gray-900">{fullMatch.slice(2, -2)}</strong>);
                                        } else if (fullMatch.startsWith('[')) {
                                            const linkMatch = fullMatch.match(/\[(.*?)\]\((.*?)\)/);
                                            if (linkMatch) {
                                                parts.push(
                                                    <Link key={match.index} href={linkMatch[2]} className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
                                                        {linkMatch[1]}
                                                    </Link>
                                                );
                                            }
                                        }
                                        lastIndex = regex.lastIndex;
                                    }

                                    // Add remaining text
                                    if (lastIndex < text.length) {
                                        parts.push(text.slice(lastIndex));
                                    }

                                    return parts.length > 0 ? parts : text;
                                };

                                // Bullet Lists
                                if (line.startsWith('- ')) {
                                    return (
                                        <ul key={index} className="list-disc list-outside mr-6 mb-4 space-y-2">
                                            <li className="pl-2">{parseContent(line.replace('- ', ''))}</li>
                                        </ul>
                                    );
                                }

                                // Empty lines
                                if (line.trim() === '') return <div key={index} className="h-4"></div>;

                                return <p key={index} className="mb-4 text-gray-700 leading-8 text-lg">{parseContent(line)}</p>;
                            })}
                        </div>

                        {/* Share & Actions */}
                        <div className="mt-16 pt-8 border-t border-gray-100">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div>
                                    <span className="font-bold text-gray-900 block mb-3">شارك المقال:</span>
                                    <div className="flex gap-3">
                                        <a
                                            href={`https://www.facebook.com/sharer/sharer.php?u=https://rawajgate.com/blog/${slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-[#1877f2] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                                            aria-label="شارك على فيسبوك"
                                        >
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=https://rawajgate.com/blog/${slug}&text=${encodeURIComponent(post.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-[#1da1f2] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                                            aria-label="شارك على تويتر"
                                        >
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - https://rawajgate.com/blog/' + slug)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-[#25d366] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                                            aria-label="شارك على واتساب"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                        <Bookmark className="w-4 h-4" />
                                        <span className="text-sm">حفظ المقال</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                        <ThumbsUp className="w-4 h-4" />
                                        <span className="text-sm">مفيد</span>
                                    </button>
                                </div>
                            </div>

                            {/* Author Box */}
                            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                                        <User className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900 mb-1">{post.author}</h4>
                                        <p className="text-gray-600 text-sm mb-3">
                                            فريق من المتخصصين في الطباعة والتصميم بخبرة تتجاوز 15 عاماً في سوق جدة والمملكة العربية السعودية. نسعى لمشاركة خبراتنا مع الشركات ورواد الأعمال.
                                        </p>
                                        <Link href="/about" className="text-amber-600 text-sm font-medium hover:text-amber-700">
                                            تعرف على فريقنا ←
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                                مقالات ذات صلة
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {relatedPosts.map(([key, relatedPost]) => (
                                    <Link key={key} href={`/blog/${key}`} className="card overflow-hidden group">
                                        <div className="aspect-[16/9] overflow-hidden">
                                            <GeoImage
                                                src={relatedPost.image}
                                                alt={`${relatedPost.title} - مقال ذو صلة`}
                                                district={CATEGORY_DISTRICTS[relatedPost.category] || "الروضة"}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform !rounded-none"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                                                {relatedPost.title}
                                            </h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-16 bg-amber-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        هل تحتاج مساعدة في مشروعك؟
                    </h2>
                    <p className="text-gray-800 mb-6">
                        تواصل معنا للحصول على استشارة مجانية
                    </p>
                    <Link
                        href="/quote"
                        className="px-8 py-3 bg-gray-900 text-white font-bold rounded-lg inline-flex items-center hover:bg-gray-800"
                    >
                        تواصل معنا
                        <ArrowLeft className="mr-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
