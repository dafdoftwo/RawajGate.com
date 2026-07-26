export interface FAQ {
    question: string;
    answer: string;
}

/** تسميات الأقسام لعرضها في صفحة الأسئلة المجمّعة */
export const SILO_LABELS: Record<string, string> = {
    "commercial-printing": "مطبوعات تجارية",
    "signage-stickers": "لوحات وملصقات",
    "exhibitions-events": "معارض وفعاليات",
    "promotional-gifts": "هدايا دعائية",
    "design-services": "خدمات التصميم",
};
