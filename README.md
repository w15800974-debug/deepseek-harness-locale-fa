<div dir="rtl">

# فارسی‌ساز و راست‌چین هوشمند DeepSeek Harness (`deepseek-harness-locale-fa`)

پلاگین رسمی‌سازگار فارسی‌سازی رابط کاربری وب و دسکتاپ **[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)** (`dsh`) همراه با راست‌چین‌سازی هوشمند (RTL) و حفظ خودکار چپ‌چین (LTR) برای کدها، ترمینال، دستورات و متون انگلیسی.

بدون نیاز به فورک کردن یا تغییر فایل‌های هسته DeepSeek Harness — نصب تنها با یک دستور و کاملاً برگشت‌پذیر.

---

## ویژگی‌ها

- **افزودن «فارسی» به لیست زبان‌های رسمی برنامه**: زبان `فارسی` را از طریق API رسمی `@deepseek-ai/dsh-client-locale` (`ctx.locale.addLanguage` و `ctx.locale.register`) به مسیر **Settings ← General ← Language** اضافه می‌کند و انتخاب کاربر را ذخیره نگه می‌دارد.
- **فارسی‌سازی کامل رابط کاربری**: پوشش بیش از ۴۰ فضای نام (Namespace) رسمی DeepSeek Harness همراه با لایه تکمیلی هوشمند برای ترجمه بخش‌های جدید رابط کاربری در نسخه‌های در حال توسعه (بدون دستکاری در متن پیام‌های گفتگو یا خروجی کدها).
- **راست‌چین‌سازی کامل محیط و بخش پیام‌ها (RTL)**: به محض انتخاب زبان فارسی، کل رابط کاربری (نوار کناری، تنظیمات، منوها، پنجره‌ها و بخش پیام‌ها) راست‌چین می‌شود و تایپوگرافی خوانای فارسی (`Vazirmatn` با فالبک خودکار به فونت‌های فارسی سیستم) اعمال می‌گردد.
- **حفظ دقیق چپ‌چین (LTR) برای بخش‌های انگلیسی و فنی**:
  - بلوک‌های کد (`pre`, `code`, Syntax Highlighters) و کدهای درون‌خطی (`inline code`)
  - ترمینال، خروجی دستورات شل و بش (`.xterm`, `stdout`, `stderr`, Command Execution)
  - نمایش تفاوت فایل‌ها (`Diff`)، مسیر فایل‌ها، نشانی‌های اینترنتی (`URL`)، میانبرهای صفحه‌کلید (`kbd`) و فیلدهای فنی (کلید API، Base URL، شناسه مدل)
  - **تشخیص خودکار جهت هر پاراگراف در پیام‌ها (Smart BiDi)**: پاراگراف‌ها و پیام‌های فارسی راست‌چین و پاراگراف‌های تماماً انگلیسی چپ‌چین نمایش داده می‌شوند.
- **بازگشت تمیز و آنی به زبان‌های دیگر**: با تغییر زبان به انگلیسی یا چینی، تمام استایل‌های RTL و تغییرات DOM به‌طور کامل و بدون نیاز به بارگذاری مجدد صفحه به حالت اول برمی‌گردند.
- **آماده نصب بدون نیاز به بیلد**: فایل `lib/client.js` از پیش ساخته و در مخزن قرار داده شده است.

---

## نصب (Installation)

### روش ۱: نصب از طریق خط فرمان (CLI)

**برای نسخه وب (`dsh web`):**

</div>

```bash
dsh plugin --profile web add github:w15800974-debug/deepseek-harness-locale-fa
```

<div dir="rtl">

**برای نسخه دسکتاپ (DeepSeek Harness Desktop):**
ابتدا یک‌بار برنامه دسکتاپ را اجرا کرده و سپس کاملاً ببندید، بعد دستور زیر را اجرا کنید:

</div>

```bash
dsh plugin --profile desktop add github:w15800974-debug/deepseek-harness-locale-fa
```

<div dir="rtl">

### روش ۲: نصب از طریق محیط گرافیکی برنامه

1. در نوار کناری DeepSeek Harness وارد بخش **Plugins** شوید.
2. روی **Add plugin** کلیک کنید.
3. آدرس زیر را وارد کرده و روی **Install** کلیک کنید:

</div>

```text
github:w15800974-debug/deepseek-harness-locale-fa
```

<div dir="rtl">

4. پس از نصب، گزینه **Enable now** را بزنید و `dsh web` (یا برنامه دسکتاپ) را یک‌بار مجدداً راه‌اندازی کنید.

---

## فعال‌سازی زبان فارسی

1. وارد **Settings ← General** شوید.
2. در ردیف **Language** گزینه **فارسی** را انتخاب کنید.
3. محیط کاربری، نوار کناری، تنظیمات و بخش پیام‌ها بلافاصله فارسی و راست‌چین می‌شوند، در حالی که کدها، ترمینال و دستورات چپ‌چین باقی می‌مانند.

---

## حذف پلاگین (Uninstall)

</div>

```bash
dsh plugin --profile web remove deepseek-harness-locale-fa
```

<div dir="rtl">

(برای نسخه دسکتاپ به‌جای `web` از `desktop` استفاده کنید و سپس برنامه را مجدداً راه‌اندازی نمایید.)

---

## ساختار پروژه و توسعه

</div>

```text
deepseek-harness-locale-fa/
├── package.json            # DSH bundle + client manifest (dsh.bundle.patch & dsh.client)
├── cordis.patch.yml        # Registers locale-fa in the active DSH profile
├── index.js                # Minimal host-side Cordis entry
├── locale/                 # Localized plugin metadata (en / fa) for Plugin Manager
├── dict/fa/
│   ├── core.json           # Official DSH namespace Persian dictionaries
│   └── ui-phrases.json     # UI-chrome fallback phrase & pattern dictionary
├── src/
│   ├── rtl.css             # Persian RTL & strict LTR preservation stylesheet
│   └── client-runtime.js   # Browser plugin runtime (locale API + Smart BiDi engine)
├── lib/
│   └── client.js           # Prebuilt __ModuleLoader__.load bundle (zero build step for users)
└── scripts/
    ├── build.mjs           # Compiles src/ + dict/ into lib/client.js
    ├── check.mjs           # Validates manifest, dictionaries, and DSH bundle contract
    └── test.mjs            # Automated runtime tests (registration, RTL/LTR, BiDi, cleanup)
```

<div dir="rtl">

### دستورات ساخت و تست برای توسعه‌دهندگان

</div>

```bash
npm run build   # ساخت مجدد lib/client.js از روی منابع dict/ و src/
npm run check   # بررسی ساختار مانیفست، دیکشنری‌ها و قرارداد __ModuleLoader__
npm test        # اجرای تست‌های خودکار ثبت زبان، راست‌چین‌سازی، BiDi و پاک‌سازی
```

---

## English Summary

`deepseek-harness-locale-fa` is a drop-in Persian (`فارسی`) language pack and smart RTL/BiDi layout plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

- Registers `fa` (`فارسی`, fallback `en`) via the official `@deepseek-ai/dsh-client-locale` API (`Settings → General → Language`).
- Applies full RTL layout (`<html dir="rtl">`) and Persian typography (`Vazirmatn` + system fallbacks) across UI chrome and chat messages when `fa` is active.
- Preserves strict LTR (`direction: ltr; unicode-bidi: isolate`) for code blocks, inline code, terminals, shell/command outputs, diffs, file paths, URLs, keyboard shortcuts, and purely English paragraphs.
- Restores the original LTR layout and DOM cleanly when switching back to another language or uninstalling.

**Install:**
```bash
dsh plugin --profile web add github:w15800974-debug/deepseek-harness-locale-fa
```

## License

MIT — see [LICENSE](./LICENSE).
