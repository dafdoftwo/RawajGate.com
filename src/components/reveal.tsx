import { cn } from "@/lib/utils";

/**
 * مكوّن كشف تدريجي **يعمل على السيرفر** — صفر JavaScript.
 *
 * يستبدل أغلفة framer-motion (motion.div + whileInView) التي كانت تُصيّر
 * style="opacity:0" مضمّناً في HTML، فتبدو الصفحة فارغة لأي زاحف لا يُنفّذ
 * JS ولا يُمرّر الصفحة — وهو حال كل زواحف الذكاء الاصطناعي.
 *
 * هنا الحركة كلها في CSS (انظر globals.css): المحتوى موجود ومرئي في HTML
 * الخام، والحركة تحسين بصري فقط.
 */

type RevealProps<T extends React.ElementType> = {
    as?: T;
    /** ترتيب التأخير 1..5 لتتابع العناصر */
    delay?: 1 | 2 | 3 | 4 | 5;
    /** اربط الحركة بالتمرير بدل التحميل (للأقسام أسفل الطية) */
    scroll?: boolean;
    className?: string;
    children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Reveal<T extends React.ElementType = "div">({
    as,
    delay,
    scroll = false,
    className,
    children,
    ...rest
}: RevealProps<T>) {
    const Component = (as ?? "div") as React.ElementType;

    return (
        <Component
            className={cn(
                "reveal",
                scroll && "reveal-scroll",
                delay && `reveal-${delay}`,
                className
            )}
            {...rest}
        >
            {children}
        </Component>
    );
}
