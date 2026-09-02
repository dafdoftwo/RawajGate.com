# مواصفات نظام المتابعة والجدولة — جاهزة للتنفيذ على Firebase

> هذا الملف هو "العقد" بين الاستراتيجية والنظام البرمجي. كل حالة وحقل هنا يقابله إجراء في `02-call-center-playbook.md`.
> الستاك المستهدف: Firebase (Firestore + Authentication + Cloud Functions للتذكيرات). واجهة ويب عربية RTL، تعمل على الموبايل.

---

## 1. النطاق (النسخة الأولى MVP)

| الشاشة | ما تفعله | المستخدم |
|---|---|---|
| **صندوق الليدز** | قائمة بكل الليدز مرتبة بالأقدم بلا رد أولاً، مع لون للحالة، وزر "اتصال/واتساب" | كول سنتر |
| **بطاقة الليد/العميل** | البيانات، سجل التواصل، المواعيد، المشتريات، الرصيد المتبقي في الكورس، الخطوة التالية | كول سنتر، استقبال |
| **التقويم** | عرض يومي/أسبوعي لكل مورد (مختص رجالي، مختصة حريمي، غرفة سبا)، سحب وإفلات | كول سنتر، استقبال |
| **مهام اليوم** | كل المتابعات المستحقة اليوم (تذكيرات، ترقيات، إعادة حجز، استرجاع) كقائمة "افعل الآن" | كول سنتر |
| **الحضور والدفع** | تسجيل الحضور، المبلغ المحصّل، طريقة الدفع، الترقية المعروضة وردها | استقبال |
| **لوحة المؤشرات** | KPIs القسم 7 من الاستراتيجية، يومي/أسبوعي/شهري، حسب القناة والحملة | المالك |
| **الإعدادات** | الخدمات والباقات والأسعار، المختصون وجداولهم، أرقام الدفع، قوالب الرسائل | المالك |

خارج النسخة الأولى (لاحقاً): إرسال واتساب تلقائي عبر API رسمي، حجز ذاتي للعميل من رابط، تطبيق موبايل، نقاط ولاء.

---

## 2. نموذج البيانات (Firestore Collections)

### `leads`
| الحقل | النوع | ملاحظة |
|---|---|---|
| `id` | string | تلقائي |
| `name` | string | |
| `phone` | string | مفتاح التوحيد؛ يُطبَّع إلى صيغة دولية `+2010...` |
| `gender` | `male` / `female` | يحدد المختص والفترة |
| `source` | `facebook` / `instagram` / `tiktok` / `whatsapp` / `gym_member` / `referral` / `walk_in` / `other` | |
| `campaignId` | string? | مرجع إلى `campaigns` |
| `utm` | map `{source, medium, campaign, content}` | من رابط الإعلان |
| `interest` | `spa` / `massage` / `hijama` / `moroccan_bath` / `bridal` / `unknown` | |
| `isGymMember` | boolean | |
| `status` | انظر القسم 3 | |
| `lostReason` | انظر القسم 3.2 | يُملأ عند `lost` فقط |
| `assignedTo` | uid | الموظفة المسؤولة |
| `firstResponseAt` | timestamp | لحساب سرعة الرد |
| `nextFollowUpAt` | timestamp? | مفتاح شاشة "مهام اليوم" |
| `contactAttempts` | number | يُغلق عند 3 بلا رد |
| `customerId` | string? | يُملأ عند أول حضور |
| `notes` | string | |
| `createdAt` / `updatedAt` | timestamp | |

### `customers`
| الحقل | النوع | ملاحظة |
|---|---|---|
| `id`, `name`, `phone`, `gender`, `isGymMember` | | نسخة من الليد بعد أول حضور |
| `leadId` | string | |
| `firstVisitAt`, `lastVisitAt` | timestamp | |
| `visitsCount` | number | |
| `totalSpent` | number | |
| `preferredTherapistId` | string? | |
| `healthNotes` | string | حساسية، حالات صحية للحجامة (يراها المختص فقط) |
| `lifecycle` | `active` / `dormant` / `churned` | تُحدَّث تلقائياً بحسب `lastVisitAt` (45 يوم → dormant، 120 يوم → churned) |
| `nextRebookAt` | timestamp? | تُحسب من نوع آخر خدمة (حجامة +21 يوم، مساج +14، سبا +7) |

### `appointments`
| الحقل | النوع | ملاحظة |
|---|---|---|
| `id` | | |
| `customerId` / `leadId` | string | أحدهما على الأقل |
| `serviceId` أو `packageId` | string | ما سيُقدَّم في هذا الموعد |
| `purchaseId` | string? | لو الجلسة مخصومة من كورس |
| `resourceId` | string | المختص أو غرفة السبا (`resources`) |
| `startAt` / `endAt` | timestamp | تشمل 15 دقيقة تجهيز بعد الجلسة |
| `status` | `pending_deposit` / `confirmed` / `reminded_24h` / `reminded_3h` / `showed` / `no_show` / `cancelled` / `rescheduled` | |
| `depositAmount` | number | 0 / 100 / 150 |
| `depositPaidAt` | timestamp? | |
| `depositMethod` | `instapay` / `vodafone_cash` / `cash` | |
| `isOffPeak` | boolean | يُحسب تلقائياً من `startAt` |
| `priceQuoted` | number | السعر الذي أُبلغ به العميل |
| `amountCollected` | number | عند الحضور |
| `upsellOffered` | boolean | هل عُرضت ترقية "اليوم فقط" |
| `upsellResult` | `bought` / `declined` / `thinking` / null | |
| `createdBy` | uid | |

### `followUps` (مهام المتابعة)
| الحقل | النوع | ملاحظة |
|---|---|---|
| `id` | | |
| `leadId` / `customerId` | | |
| `type` | `first_response` / `chase_silent` / `deposit_chase` / `reminder_24h` / `reminder_3h` / `no_show_recovery` / `post_session` / `upsell_7d` / `rebook` / `winback_45d` / `review_request` / `custom` | |
| `dueAt` | timestamp | |
| `status` | `open` / `done` / `skipped` | |
| `channel` | `whatsapp` / `call` | |
| `templateKey` | string | يقابل سكريبتاً في الدليل |
| `outcome` | string | ملخص سطر واحد |
| `doneAt`, `doneBy` | | |

### `services`
`id`, `nameAr`, `category` (`spa`/`massage`/`hijama`/`bath`), `durationMin`, `price`, `therapistShareRate` (0.4 أو 0)، `therapistFixedFee` (للخيار ب)، `consumablesCost`, `requiresTherapist` (bool), `genderSpecific` (bool), `active`.

### `packages`
`id`, `nameAr`, `tier` (`trial`/`bronze`/`silver`/`gold`/`course`/`subscription`/`duo`/`bridal`/`corporate`), `items[]` = `[{serviceId, qty}]`, `listValue`, `price`, `validityDays`, `sessionsTotal`, `firstVisitOnly` (bool), `offPeakOnly` (bool), `gymMembersOnly` (bool), `active`.

### `purchases`
`id`, `customerId`, `packageId`, `pricePaid`, `paidAt`, `paymentMethod`, `expiresAt`, `sessionsTotal`, `sessionsUsed`, `sessionsRemaining` (محسوب), `soldBy`, `soldAt` (`reception_same_day` / `call_center_followup` / `online`), `status` (`active`/`exhausted`/`expired`/`refunded`).

### `resources` (المختصون والغرف)
`id`, `nameAr`, `type` (`therapist_male`/`therapist_female`/`spa_area`), `workingHours` = `{sat:[["10:00","22:00"]], ...}`, `capacity` (1 للمختص، عدد الأشخاص لمنطقة السبا), `active`.

### `campaigns`
`id`, `nameAr`, `channel`, `offerPackageId`, `startAt`, `endAt`, `budget`, `spend` (يُدخل يدوياً أسبوعياً)، `utmCampaign`, `active`. تُستخدم لحساب CPL وCAC في اللوحة.

### `activityLog`
`id`, `entityType` (`lead`/`customer`/`appointment`/`purchase`), `entityId`, `action`, `fromStatus`, `toStatus`, `note`, `by`, `at`. غير قابل للتعديل. مصدر كل تقرير.

### `settings/global` (مستند واحد)
`depositDefault: 100`, `depositBath: 150`, `peakRules`, `contactMaxAttempts: 3`, `dormantAfterDays: 45`, `rebookDays: {hijama: 21, massage: 14, spa: 7}`, `paymentNumbers: {instapay, vodafoneCash}`, `googleReviewUrl`, `mapsUrl`.

---

## 3. آلة حالات الليد (State Machine)

```
new ──(أول رد)──► contacted ──(تم التأهيل)──► qualified ──(عربون مستلم)──► booked
 │                    │                          │                          │
 │                    │                          │                    ┌─────┴─────┐
 │                    │                          │                 showed      no_show
 │                    │                          │                    │           │
 │                    │                          │              (يصبح عميل)   (محاولة نقل)
 │                    │                          │                    │           │
 │                    └──── 3 محاولات بلا رد ────┴────► lost ◄────────┼───────────┘
 │                                                                     │
 └──────────────────────────────────────────────────────────────► converted (اشترى باقة/كورس)
```

### 3.1 الانتقالات المسموحة
| من | إلى | الشرط |
|---|---|---|
| `new` | `contacted` | أول رسالة/مكالمة صادرة |
| `contacted` | `qualified` | تم تسجيل `interest` و`gender` و`preferred time` |
| `contacted`/`qualified` | `lost` | `contactAttempts >= 3` أو رفض صريح (مع `lostReason`) |
| `qualified` | `booked` | موعد بحالة `confirmed` (عربون مستلم) |
| `booked` | `showed` | الاستقبال سجّل الحضور |
| `booked` | `no_show` | مر `endAt` بلا تسجيل حضور (تلقائي) |
| `no_show` | `booked` | أعيد الحجز |
| `no_show` | `lost` | لم يُعد الحجز خلال 7 أيام |
| `showed` | `converted` | `purchases` جديد مرتبط بالعميل |
| أي حالة | `lost` | رفض صريح |

### 3.2 أسباب الخسارة (قائمة ثابتة — تظهر في تقرير الأسبوع)
`no_answer` (لا رد) · `price` (السعر) · `distance` (بعيد) · `no_female_therapist_time` (وقت المختصة غير مناسب) · `timing` (لا يوجد موعد مناسب) · `not_interested` (غير مهتم) · `competitor` (حجز في مكان آخر) · `health` (مانع صحي) · `wrong_number` · `other`

---

## 4. قواعد الأتمتة (Cloud Functions / Triggers)

| المُشغِّل | الإجراء |
|---|---|
| إنشاء `lead` جديد | إنشاء `followUp` نوع `first_response` مستحق الآن + إشعار للموظفة |
| `lead.status` → `contacted` بلا تأهيل خلال 24 س | `followUp` نوع `chase_silent` (يوم 1، 3، 5)، وزيادة `contactAttempts` عند كل تنفيذ |
| إنشاء `appointment` بحالة `pending_deposit` | `followUp` نوع `deposit_chase` بعد 60 دقيقة لو لم يُدفع |
| `appointment.status` → `confirmed` | إنشاء `reminder_24h` و`reminder_3h` بمواعيدهما |
| مرور `endAt` بلا `showed` | `status` → `no_show` + `followUp` نوع `no_show_recovery` بعد ساعتين |
| `appointment.status` → `showed` | إنشاء/تحديث `customer`، `visitsCount++`، `followUp` نوع `post_session` (+24 س)، وإن لم يشترِ `upsell_7d` (+7 أيام)، وحساب `nextRebookAt` وإنشاء `rebook` |
| إنشاء `purchase` | `lead.status` → `converted`، إلغاء `upsell_7d` المفتوح |
| خصم جلسة من كورس (`appointment.purchaseId`) | `sessionsUsed++`؛ عند `sessionsRemaining == 1` → `followUp` "تجديد الكورس" |
| يومياً 9 ص | لكل عميل `lastVisitAt` > 45 يوم و`lifecycle == active` → `dormant` + `followUp` نوع `winback_45d` |
| يومياً 9 ص | تجميع KPIs اليوم السابق في `dailyStats/{date}` |

---

## 5. حساب المؤشرات (تعريف تقني)

| المؤشر | الصيغة |
|---|---|
| سرعة الرد | متوسط (`firstResponseAt − createdAt`) لليدز اليوم |
| نسبة الوصول | ليدز بحالة ≥ `contacted` ÷ كل الليدز في الفترة |
| نسبة الحجز | ليدز وصلت `booked` ÷ ليدز بحالة ≥ `contacted` |
| نسبة الحضور | مواعيد `showed` ÷ (`showed` + `no_show`) |
| نسبة الترقية | `purchases` حيث `soldAt == reception_same_day` ÷ مواعيد `showed` لأول زيارة |
| متوسط التذكرة | Σ `amountCollected` + Σ `purchases.pricePaid` ÷ عدد `showed` |
| إعادة الحجز 30 يوم | عملاء لهم موعد `showed` ثانٍ خلال 30 يوم من الأول ÷ عملاء الشهر السابق |
| إشغال المورد | Σ مدة المواعيد `showed` ÷ Σ ساعات `workingHours` |
| CPL | `campaign.spend` ÷ ليدز بنفس `campaignId` |
| CAC | `campaign.spend` ÷ عملاء (أول `showed`) من نفس الحملة |

---

## 6. الصلاحيات (Firebase Auth + Security Rules)

| الدور | يقرأ | يكتب |
|---|---|---|
| `owner` | كل شيء | كل شيء + الإعدادات + الأسعار |
| `call_center` | leads, customers (بلا `healthNotes`), appointments, followUps, packages, services | leads, appointments, followUps, activityLog |
| `reception` | appointments اليوم, customers, purchases, packages | appointments (الحضور والدفع), purchases, activityLog |
| `therapist` | مواعيده اليوم + `healthNotes` لعملائه | ملاحظة الجلسة فقط |

قواعد إضافية: لا حذف لأي مستند (أرشفة فقط)، `activityLog` للكتابة مرة واحدة، أرقام الهواتف لا تُصدَّر إلا للمالك.

---

## 7. الشيت المؤقت (حتى يجهز النظام)

نفس الأعمدة بالضبط كي يُستورد لاحقاً بلا تنظيف:

`created_at | name | phone | gender | source | campaign | interest | is_gym_member | status | lost_reason | assigned_to | first_response_at | next_follow_up_at | contact_attempts | appointment_at | resource | deposit_paid | showed | amount_collected | upsell_result | purchase_package | notes`

ورقة ثانية للمواعيد بالأعمدة: `date | time | resource | customer_phone | service_or_package | status | deposit | collected`.
