# مواصفات نظام المتابعة والجدولة — جاهزة للتنفيذ على Firebase

> هذا الملف هو "العقد" بين الاستراتيجية والنظام البرمجي. كل حالة وحقل هنا يقابله إجراء في `02-call-center-playbook.md`.
> الستاك المستهدف: Firebase (Firestore + Authentication + Cloud Functions للتذكيرات). واجهة ويب عربية RTL، تعمل على الموبايل.

---

## 1. النطاق (النسخة الأولى MVP)

| الشاشة | ما تفعله | المستخدم |
|---|---|---|
| **صندوق الليدز** | قائمة بكل الليدز مرتبة بالأقدم بلا رد أولاً، مع لون للحالة، وزر "اتصال/واتساب" | كول سنتر |
| **بطاقة الليد/العميل** | البيانات، سجل التواصل، المواعيد، المشتريات، الرصيد المتبقي في الكورس، الخطوة التالية | كول سنتر، استقبال |
| **التقويم** | عرض يومي/أسبوعي لكل مورد (مختص رجالي، مختصة حريمي، غرفة سبا)، مع **تلوين فترة السيدات/الرجال** وتعتيم الساعات خارج الفترة بحيث يستحيل الحجز فيها، وشريط "نافذة العرسان" صباح السبت/الاثنين/الأربعاء | كول سنتر، استقبال |
| **مهام اليوم** | كل المتابعات المستحقة اليوم (تذكيرات، ترقيات، إعادة حجز، استرجاع) كقائمة "افعل الآن" | كول سنتر |
| **الحضور والدفع** | تسجيل الحضور، المبلغ المحصّل، طريقة الدفع، الترقية المعروضة وردها | استقبال |
| **لوحة المؤشرات** | KPIs القسم 7 من الاستراتيجية، يومي/أسبوعي/شهري، حسب القناة والحملة | المالك |
| **الشركاء والعمولات** | قائمة الشركاء وأكوادهم، عملاء كل شريك وحالتهم، العمولات المستحقة/المدفوعة، لوحة ترتيب المدربين، زر "توليد كشف الشهر" | المالك (قراءة محدودة للمدرب على نفسه) |
| **الإعدادات** | الخدمات والباقات والأسعار وفئة العمولة، المختصون، الفترات، جدول العمولات، أرقام الدفع، قوالب الرسائل | المالك |

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
| `nextRebookAt` | timestamp? | تُحسب من نوع آخر خدمة (حجامة +21 يوم، مساج +14، سبا +7، حمام +30) |
| `eventDate` | timestamp? | تاريخ الفرح لشريحة العرسان؛ يشغّل أتمتة البرنامج والتذكير والاسترجاع بعد الفرح |
| `segment` | `general` / `gym_member` / `bride` / `groom` / `corporate` | |
| `partnerId` | string? | الشريك الذي أحال العميل (`partners`) |

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
| `shiftGender` | `male` / `female` | يُشتق من `startAt` والفترات؛ **يجب أن يساوي جنس العميل** وإلا يُرفض الحجز |
| `isPrivateBlock` | boolean | حجز خاص لمجموعة (عروسة وصحباتها) يغلق منطقة السبا للفترة |
| `groupSize` | number | 1 افتراضياً |
| `programVisitNo` | number? | رقم الزيارة داخل برنامج متعدد الزيارات (1/2/3) |
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
`id`, `nameAr`, `tier` (`trial`/`bronze`/`silver`/`gold`/`course`/`subscription`/`duo`/`hammam`/`bridal`/`corporate`/`gift`), `segment` (`any`/`bride`/`groom`/`couple`/`party`), `items[]` = `[{serviceId, qty, visitNo?}]` (`visitNo` لبرامج متعددة الزيارات), `listValue`, `price`, `depositAmount` (100 افتراضياً، 300 للعرسان والحمام الملكي), `durationMin` (لحجز الفترة الصحيحة: باقة العروسة 180), `requiresBridalWindow` (bool: يُحجز فقط داخل `bridalWindow`), `isPrivateBlock` (bool), `groupSize`, `giftable` (bool), `validityDays`, `sessionsTotal`, `firstVisitOnly`, `offPeakOnly`, `gymMembersOnly`, `active`.

### `services` — إضافات
`category` تشمل الآن `hammam` (تركي / مغربي كلاسيك / مغربي ملكي)، و`durationMin` للحمام 60 – 90، و`resourceType` = `wet_room` + `therapist`.

### `purchases`
`id`, `customerId`, `packageId`, `pricePaid`, `paidAt`, `paymentMethod`, `expiresAt`, `sessionsTotal`, `sessionsUsed`, `sessionsRemaining` (محسوب), `soldBy`, `soldAt` (`reception_same_day` / `call_center_followup` / `online`), `status` (`active`/`exhausted`/`expired`/`refunded`).

### `resources` (المختصون والغرف)
`id`, `nameAr`, `type` (`therapist_male`/`therapist_female`/`spa_area`/`wet_room`), `gender` (`male`/`female`/`any`), `capacity` (1 للمختص، عدد الأشخاص لمنطقة السبا), `active`. **لا يحمل المورد ساعات عمل خاصة به؛** ساعاته = فترات جنسه في `settings/global.shifts` (أدناه) ما لم يُضف `overrides` (إجازة أو يوم إضافي).

### `settings/global.shifts` — نظام الفترتين (مصدر الحقيقة الوحيد للمواعيد)
```json
"shifts": [
  { "gender": "female", "days": ["sat","mon","wed"], "start": "08:00", "end": "16:00", "peak": [["12:00","16:00"]], "dead": [["08:00","10:00"]] },
  { "gender": "female", "days": ["sun","tue","thu"], "start": "15:00", "end": "19:00", "peak": [["15:00","19:00"]], "dead": [] },
  { "gender": "male",   "days": ["sat","mon","wed"], "start": "16:00", "end": "25:00", "peak": [["18:00","23:00"]], "dead": [["23:00","25:00"]] },
  { "gender": "male",   "days": ["sun","tue","thu"], "start": "08:00", "end": "15:00", "peak": [], "dead": [["08:00","11:00"]] },
  { "gender": "male",   "days": ["sun","tue","thu"], "start": "19:00", "end": "25:00", "peak": [["19:00","23:00"]], "dead": [["23:00","25:00"]] },
  { "gender": "male",   "days": ["fri"],             "start": "15:00", "end": "22:30", "peak": [["17:00","21:00"]], "dead": [] }
],
"shiftChangeoverMin": 20,
"bridalWindow": { "gender": "female", "days": ["sat","mon","wed"], "start": "08:00", "end": "13:00" }
```
(`"25:00"` = 1 صباح اليوم التالي.) تغيير المواعيد يتم هنا فقط، وتنعكس فوراً في التقويم وقواعد الحجز وحساب الذروة.

### `partners` (كل من يُحضر عميلاً: مدرب، صالون حلاقة، بيوتي سنتر/كوافير، أتيليه، مصوّر، صالة، سفير فرد، موظف)
`id`, `nameAr`, `type` (`trainer`/`barber`/`beauty_center`/`salon`/`atelier`/`photographer`/`venue`/`planner`/`individual`/`staff`), `phone`, `referralCode` (فريد، يُطبع على كارت الشريك), `payoutMethod` (`instapay`/`vodafone_cash`/`spa_credit`), `payoutDetails`, `renewalCommissionEligible` (true للمدربين فقط), `referralsCount`, `commissionEarned`, `commissionPaid`, `commissionDue`, `spaCreditBalance`, `active`.

### `settings/global.commissions` — جدول النسب (مصدر الحقيقة، التفصيل في `05-referral-commissions.md`)
```json
"commissions": {
  "classA": { "tiers": [ {"minNew": 1, "rate": 0.10}, {"minNew": 5, "rate": 0.12}, {"minNew": 10, "rate": 0.15} ] },
  "classB": { "tiers": [ {"minNew": 1, "rate": 0.10} ] },
  "singleBelow500Fixed": 25,
  "trialOffersCommissionable": false,
  "renewalRate": 0.05, "renewalMaxCount": 5,
  "spaCreditMultiplier": 2,
  "minPayout": 300, "payoutDay": 5,
  "newCustomerWindowDays": 180, "clawbackDays": 7,
  "staff": { "receptionUpsellRate": 0.05, "receptionRenewalRate": 0.02, "callCenterRate": 0.03, "therapistCourseBonus": 100 },
  "bridalSeasonBonus": { "every": 5, "amount": 500, "months": [6,7,8,9] }
}
```
كل `package` و`service` يحمل `commissionClass` (`A` / `B` / `none`). عروض التعارف = `none`.

### `commissions` (سجل العمولات — يُنشأ آلياً ولا يُعدَّل يدوياً)
`id`, `partnerId`, `customerId`, `purchaseId` أو `appointmentId`, `kind` (`first_purchase`/`renewal`/`fixed_single`/`bonus`/`clawback`), `baseAmount` (المدفوع فعلاً), `rate`, `amount`, `tierAtCalc`, `status` (`pending` → `earned` بعد `showed` والدفع → `paid` / `voided`), `periodMonth` (YYYY-MM), `paidAt`, `payoutBatchId`.

**قواعد الإسناد (Attribution):**
1. الكود يُسجَّل في `lead.referralCode` عند أول تواصل؛ إضافته بعد `booked` تتطلب دور `owner`.
2. عميل جديد = لا يوجد `customer` بنفس الهاتف زار خلال `newCustomerWindowDays`؛ وإلا لا تُنشأ عمولة (إلا `renewal` للمدرب).
3. `partnerId` = هاتف العميل نفسه أو هاتف مسجَّل باسم الشريك → مرفوض.
4. عند `appointment.status = showed` و`amountCollected > 0` أو `purchase.paidAt` → إنشاء `commission` بحالة `earned` على `baseAmount` = المدفوع الفعلي.
5. نهاية الشهر: إعادة حساب `rate` لكل شريك رجعياً حسب عدد `earned` من الفئة A في الشهر (الشريحة الرجعية)، ثم تجميع الكشف وإرساله واتساب، والدفع يوم `payoutDay`.
6. `refund` أو `no_show` بعد الاحتساب خلال `clawbackDays` → `clawback` بنفس المبلغ سالباً في الشهر التالي.
7. `renewal`: للمدرب فقط، عند تجديد `purchase` من نوع اشتراك لعميل `partnerId` هو مدرب، حتى `renewalMaxCount`.

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
`no_answer` (لا رد) · `price` (السعر) · `distance` (بعيد) · `shift_timing` (مواعيد فترة جنسه غير مناسبة — يُقاس بدقة لأنه قد يبرر فترة إضافية) · `timing` (لا يوجد موعد فارغ) · `not_interested` (غير مهتم) · `competitor` (حجز في مكان آخر) · `health` (مانع صحي) · `wrong_number` · `other`

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
| إنشاء/تعديل `appointment` | **تحقق الفترة:** يُحسب `shiftGender` من `startAt` عبر `settings.shifts`؛ لو لا توجد فترة أو جنسها ≠ جنس العميل → رفض مع رسالة "خارج فترة {السيدات/الرجال}". لو `package.requiresBridalWindow` والموعد خارج `bridalWindow` → رفض. لو داخل `shiftChangeoverMin` → رفض. |
| شراء باقة `segment in (bride, groom, couple, party, program)` | حفظ `customer.eventDate`، وإن كانت برنامج 3 زيارات: إنشاء 3 مواعيد مبدئية عند T−21 / T−7 / T−2 يوماً من الفرح داخل `bridalWindow` (مع `programVisitNo`)، و`followUp` للتأكيد لكل زيارة قبلها بـ 48 س |
| `customer.eventDate` + 30 يوم | `followUp` نوع `post_event_offer` ("مبروك، عرض أول شهر بعد الزواج": اشتراك الحمام للعروسة / ريكفري للعريس) |
| شراء بـ `partnerId` (أو حضور مدفوع) | إنشاء `commission` بحالة `earned` وفق `settings.commissions` (الفئة، الشريحة المؤقتة، أول شراء/تجديد)، `partners.referralsCount++`، وتحديث `commissionDue` |
| يوم 1 من كل شهر | إعادة احتساب الشرائح رجعياً للشهر السابق، توليد كشف لكل شريك (PDF/رسالة واتساب) بقائمة العملاء والمبالغ، وبونص العرسان الموسمي، ومهمة `payout` للمالك بتاريخ `payoutDay` |
| `commission.status` → `paid` | تحديث `commissionPaid`/`commissionDue`، أو إضافة `amount × spaCreditMultiplier` إلى `spaCreditBalance` إن اختار الشريك الرصيد |
| إنشاء `purchase` بـ `tier == gift` | إنشاء `giftVoucher` برمز فريد وقيمة ورصيد، يُصرف على باقات العرسان فقط، صلاحية 180 يوماً |

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
