<div dir="rtl">

# فارسی‌ساز و راست‌چین هوشمند DeepSeek Harness (`deepseek-harness-locale-fa`) — نسخه ۲.۰

پلاگین رسمی‌سازگار فارسی‌سازی رابط کاربری وب و دسکتاپ **[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)** (`dsh`) همراه با راست‌چین‌سازی جراحی‌شده و بدون شکستگی (RTL) و حفظ دقیق چپ‌چین (LTR) برای کدها، ترمینال، دستورات، فرمول‌های ریاضی و متون انگلیسی.

بدون نیاز به فورک کردن یا تغییر فایل‌های هسته DeepSeek Harness — نصب سریع و کاملاً برگشت‌پذیر.

---

## تغییرات مهم نسخه ۲.۰

- **کلیدهای واقعی و رسمی DeepSeek Harness:** استفاده از کلیدهای واقعی نقطه‌دار (`sidebar`, `settings.locale`, `settings.theme`, `settings.sessionLog`, `chat`, `conversation`, `workspace`, `approval`, `plan`, `goal`, `skill`, `schedule`, `reference`, `fileActions`, `sessionPanel` و غیره).
- **پل ترجمه زمان اجرا (`ctx.locale.bind` Bridge):** هر کلید جدید یا تغییریافته‌ای که از طریق `t()` به انگلیسی برگردد، پیش از رندر شدن در React به‌صورت آنی و بدون پرش (Zero-Flicker) به فارسی ترجمه می‌شود (همراه با بیش از ۴۵۰ عبارت دقیق و ۳۷ الگوی پویا برای زمان‌ها، شمارنده‌ها و وضعیت‌ها).
- **موتور RTL مهندسی‌شده و بدون به‌هم‌ریختگی:**
  - حذف کامل تغییر سراسری `line-height` و دستکاری `transform` روی آیکون‌ها برای حفظ چیدمان دقیق دکمه‌ها، منوها و نوارهای ابزار.
  - محافظت از دکمه‌های پنجره دسکتاپ (`data-window-drag-controls`).
  - تشخیص هوشمند جهت هر بلوک در پیام‌ها (پاراگراف فارسی راست‌چین، پاراگراف تماماً انگلیسی چپ‌چین، و کادر تایپ با `dir="auto"`).
  - حفظ قطعی چپ‌چین (LTR) برای کدها، کدهای درون‌خطی، ترمینال (`.xterm`)، فرمول‌های `KaTeX`، خروجی دستورات، Diff، مسیر فایل‌ها، URLها و فیلدهای کلید API.

---

## نصب (Installation)

### روش ۱: نصب از طریق خط فرمان (نسخه وب)

</div>

```bash
dsh plugin --profile web add github:w15800974-debug/deepseek-harness-locale-fa
```

<div dir="rtl">

### روش ۲: نصب از طریق محیط گرافیکی (وب و دسکتاپ)

1. در نوار کناری DeepSeek Harness وارد **Plugins** شوید و روی **Add plugin** کلیک کنید.
2. نشانی زیر را وارد کرده و **Install** را بزنید:

</div>

```text
github:w15800974-debug/deepseek-harness-locale-fa
```

<div dir="rtl">

3. پس از نصب، گزینه **Enable now** را بزنید و برنامه را یک‌بار مجدداً راه‌اندازی کنید.
4. وارد **Settings ← General ← Language** شوید و **فارسی** را انتخاب کنید.

---

## نحوه آپدیت به نسخه‌های جدید (Updating)

در DeepSeek Harness برای آپدیت کردن پلاگین‌هایی که از گیت‌هاب نصب شده‌اند، باید نسخه قبلی حذف و نسخه جدید از گیت‌هاب دوباره نصب شود:

### آپدیت در نسخه وب (خط فرمان CLI)

ابتدا `dsh web` را متوقف کنید و دستورات زیر را اجرا نمایید:

</div>

```bash
dsh plugin --profile web remove deepseek-harness-locale-fa
dsh plugin --profile web add github:w15800974-debug/deepseek-harness-locale-fa
```

<div dir="rtl">

سپس `dsh web` را دوباره اجرا کرده و صفحه مرورگر را رفرش کنید (`Ctrl+Shift+R` یا `Cmd+Shift+R`).

### آپدیت در نسخه دسکتاپ یا محیط گرافیکی (GUI)

1. در نوار کناری وارد **Plugins** شوید.
2. پلاگین `deepseek-harness-locale-fa` را پیدا کرده و روی **Uninstall / Remove** کلیک کنید.
3. *(نکته مهم در ویندوز دسکتاپ)* برنامه DeepSeek Harness را **کاملاً ببندید** و دوباره باز کنید تا قفل فایل‌های نسخه قبلی آزاد شود.
4. دوباره روی **Add plugin** کلیک کنید، `github:w15800974-debug/deepseek-harness-locale-fa` را وارد کرده، **Install** و سپس **Enable now** را بزنید و یک‌بار برنامه را ری‌استارت کنید.

---

## حذف کامل پلاگین (Uninstall)

</div>

```bash
dsh plugin --profile web remove deepseek-harness-locale-fa
```

---

## توسعه و تست

```bash
npm run build   # ساخت lib/client.js از منابع dict/ و src/
npm run check   # بررسی مانیفست، دیکشنری‌ها و قرارداد __ModuleLoader__
npm test        # اجرای تست‌های خودکار
```

## License

MIT — see [LICENSE](./LICENSE).
