#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
#  ربط RawajGate بـ Cloudflare Pages + GitHub — أمر واحد
# ═══════════════════════════════════════════════════════════════
#
#  🔐 لماذا هذا السكربت آمن؟
#  يقرأ المفاتيح من متغيّرات بيئتك أنت. لا تُكتب في أي ملف، ولا تدخل
#  git، ولا تظهر في المخرجات. تُمرَّر مباشرة إلى wrangler و gh.
#
#  الاستخدام:
#    export CLOUDFLARE_API_TOKEN="التوكن-المقيّد"
#    export CLOUDFLARE_ACCOUNT_ID="معرّف-الحساب"
#    bash scripts/setup-cloudflare.sh
#
#  ⚠️ استخدم API Token مقيّداً — لا Global API Key.
#     الصلاحيات المطلوبة فقط:
#       Account → Cloudflare Pages → Edit
#       Account → Account Settings → Read
# ═══════════════════════════════════════════════════════════════

set -euo pipefail

PROJECT="rawajgate"
DOMAIN="rawajgate.com"
OUT_DIR="out"

# ألوان للمخرجات
G='\033[0;32m'; R='\033[0;31m'; Y='\033[1;33m'; B='\033[0;34m'; N='\033[0m'

step() { echo -e "\n${B}▸ $1${N}"; }
ok()   { echo -e "  ${G}✓${N} $1"; }
warn() { echo -e "  ${Y}⚠${N} $1"; }
fail() { echo -e "  ${R}✗${N} $1"; exit 1; }

echo "═══════════════════════════════════════════════"
echo "  ربط RawajGate بـ Cloudflare Pages"
echo "═══════════════════════════════════════════════"

# ── 1) التحقق من المتغيّرات ─────────────────────────────────
step "التحقق من بيانات الاعتماد"

[ -n "${CLOUDFLARE_API_TOKEN:-}" ] || fail "CLOUDFLARE_API_TOKEN غير مضبوط.
     export CLOUDFLARE_API_TOKEN=\"...\""

[ -n "${CLOUDFLARE_ACCOUNT_ID:-}" ] || fail "CLOUDFLARE_ACCOUNT_ID غير مضبوط.
     تجده يمين لوحة Cloudflare."

# رفض Global API Key صراحةً — صلاحيته كاملة وخطرة
if [[ "$CLOUDFLARE_API_TOKEN" == cfk_* ]]; then
  fail "هذا Global API Key وليس API Token.
     Global Key له صلاحية كاملة على حسابك — لا تستخدمه في CI.
     أنشئ Custom Token من:
       https://dash.cloudflare.com/profile/api-tokens
     بصلاحيتَي: Cloudflare Pages → Edit · Account Settings → Read"
fi

ok "التوكن والمعرّف موجودان"

# ── 2) الأدوات ──────────────────────────────────────────────
step "التحقق من الأدوات"
command -v node >/dev/null || fail "Node.js غير مثبّت"
ok "node $(node -v)"

command -v npx >/dev/null || fail "npx غير متاح"

if command -v gh >/dev/null 2>&1; then
  ok "gh CLI متاح — سيُضبط أسرار GitHub تلقائياً"
  HAS_GH=1
else
  warn "gh CLI غير مثبّت — ستضيف أسرار GitHub يدوياً (سأخبرك كيف)"
  HAS_GH=0
fi

# ── 3) التحقق من صلاحية التوكن ─────────────────────────────
step "التحقق من صلاحية التوكن"
if npx --yes wrangler@latest whoami >/dev/null 2>&1; then
  ok "التوكن صالح"
else
  fail "التوكن مرفوض. تأكد من الصلاحيات:
     Account → Cloudflare Pages → Edit
     Account → Account Settings → Read"
fi

# ── 4) البناء ───────────────────────────────────────────────
step "بناء الموقع"
npm run build >/dev/null 2>&1 || fail "فشل البناء — شغّل: npm run build لرؤية الخطأ"

[ -d "$OUT_DIR" ] || fail "مجلد $OUT_DIR غير موجود بعد البناء"
PAGES=$(find "$OUT_DIR" -name '*.html' | wc -l | tr -d ' ')
SIZE=$(du -sh "$OUT_DIR" | cut -f1)
ok "$PAGES صفحة · $SIZE"

# ── 5) إنشاء مشروع Pages ───────────────────────────────────
step "إنشاء مشروع Cloudflare Pages"
if npx --yes wrangler@latest pages project list 2>/dev/null | grep -q "$PROJECT"; then
  ok "المشروع '$PROJECT' موجود مسبقاً"
else
  npx --yes wrangler@latest pages project create "$PROJECT" \
    --production-branch main >/dev/null 2>&1 \
    && ok "أُنشئ المشروع '$PROJECT'" \
    || warn "تعذّر الإنشاء — قد يكون موجوداً بالفعل"
fi

# ── 6) النشر ────────────────────────────────────────────────
step "النشر"
DEPLOY_OUT=$(npx --yes wrangler@latest pages deploy "$OUT_DIR" \
  --project-name="$PROJECT" --branch=main 2>&1) || fail "فشل النشر:
$DEPLOY_OUT"

URL=$(echo "$DEPLOY_OUT" | grep -oE 'https://[a-z0-9.-]+\.pages\.dev' | head -1)
ok "نُشر بنجاح"
[ -n "$URL" ] && echo -e "  ${G}🌐 $URL${N}"

# ── 7) أسرار GitHub ─────────────────────────────────────────
step "ضبط أسرار GitHub Actions"
if [ "$HAS_GH" = "1" ] && gh auth status >/dev/null 2>&1; then
  gh secret set CLOUDFLARE_API_TOKEN  --body "$CLOUDFLARE_API_TOKEN"  >/dev/null 2>&1 && ok "CLOUDFLARE_API_TOKEN"
  gh secret set CLOUDFLARE_ACCOUNT_ID --body "$CLOUDFLARE_ACCOUNT_ID" >/dev/null 2>&1 && ok "CLOUDFLARE_ACCOUNT_ID"
  ok "النشر التلقائي المجدول جاهز"
else
  warn "أضِف الأسرار يدوياً:"
  echo "     https://github.com/dafdoftwo/RawajGate.com/settings/secrets/actions"
  echo "       CLOUDFLARE_API_TOKEN"
  echo "       CLOUDFLARE_ACCOUNT_ID"
fi

# ── الخلاصة ─────────────────────────────────────────────────
echo -e "\n═══════════════════════════════════════════════"
echo -e "  ${G}اكتمل الربط${N}"
echo "═══════════════════════════════════════════════"
echo ""
echo "الخطوات المتبقية (من لوحة Cloudflare):"
echo ""
echo "  1. ربط النطاق:"
echo "     Workers & Pages → $PROJECT → Custom domains"
echo "     أضِف: $DOMAIN و www.$DOMAIN"
echo ""
echo "  2. إعدادات السرعة (كلها مجانية):"
echo "     SSL/TLS → Overview            → Full (strict)"
echo "     SSL/TLS → Edge Certificates   → Always Use HTTPS: On"
echo "     Speed   → Optimization        → Brotli: On · Early Hints: On"
echo "     Network                       → HTTP/3: On"
echo "     ⚠️ اترك Auto Minify مُطفأً — Next.js يُصغّر أصلاً"
echo ""
echo "بعدها: كل دفعة إلى main تُنشر تلقائياً،"
echo "والمقالات الـ90 تُنشر في مواعيدها حتى مارس 2027."
echo ""

# فحص حالة الجدولة
node scripts/check-due-articles.mjs --window 2 2>/dev/null || true
