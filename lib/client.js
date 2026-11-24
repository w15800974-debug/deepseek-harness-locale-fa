window.__ModuleLoader__.load({
  id: "deepseek-harness-locale-fa",
  factory(require) {
    "use strict";
    const module = { exports: {} };
    const exports = module.exports;
    const __CORE_DICTS__ = {"common":{"ok":"تأیید","confirm":"تأیید","cancel":"لغو","close":"بستن","save":"ذخیره","saving":"در حال ذخیره…","saved":"ذخیره شد","delete":"حذف","remove":"حذف","edit":"ویرایش","rename":"تغییر نام","copy":"کپی","copied":"کپی شد","paste":"جای‌گذاری","search":"جستجو","filter":"فیلتر","clear":"پاک کردن","reset":"بازنشانی","refresh":"بازآوری","reload":"بارگذاری مجدد","retry":"تلاش مجدد","back":"بازگشت","next":"بعدی","previous":"قبلی","done":"انجام شد","apply":"اعمال","enable":"فعال‌سازی","enabled":"فعال","disable":"غیرفعال‌سازی","disabled":"غیرفعال","add":"افزودن","create":"ایجاد","new":"جدید","open":"باز کردن","download":"دانلود","upload":"بارگذاری","export":"خروجی گرفتن","import":"ورود اطلاعات","loading":"در حال بارگذاری…","error":"خطا","warning":"هشدار","info":"اطلاعات","success":"موفق","yes":"بله","no":"خیر","on":"روشن","off":"خاموش","all":"همه","none":"هیچ‌کدام","default":"پیش‌فرض","custom":"سفارشی","auto":"خودکار","more":"بیشتر","less":"کمتر","expand":"باز کردن","collapse":"جمع کردن","select":"انتخاب","submit":"ارسال","send":"ارسال","stop":"توقف","pause":"مکث","resume":"ادامه","continue":"ادامه","run":"اجرا","running":"در حال اجرا","completed":"تکمیل شد","failed":"ناموفق","pending":"در انتظار","unknown":"نامشخص","details":"جزئیات","preview":"پیش‌نمایش","status":"وضعیت","version":"نسخه","settings":"تنظیمات"},"sidebar":{"panels.unpinTooltip":"برداشتن سنجاق از نوار کناری","panels.unpin":"برداشتن سنجاق {name} از نوار کناری","session.new":"نشست جدید","session.new.label":"نشست جدید","toggle.open":"باز کردن نوار کناری","toggle.collapse":"جمع کردن نوار کناری","panels.label":"پنل‌های سراسری","navigation.label":"ناوبری","panels.more":"بیشتر","version.copied":"شماره نسخه کپی شد"},"settings.locale":{"language.title":"زبان"},"settings.theme":{"appearance.title":"ظاهر","appearance.light":"روشن","appearance.dark":"تیره","appearance.system":"مطابق سیستم"},"settings.sessionLog":{"title":"ارسال گزارش نشست هنگام استفاده از API رسمی مدل","description":"به بهبود مدل‌ها و محصولات DeepSeek کمک کنید.","saved":"تنظیمات ذخیره شد","failed":"ذخیره تنظیمات ناموفق بود"},"shortcuts.layout":{"toggle":"باز و بسته کردن نوار کناری"},"fileDrag":{"failed":"کشیدن و رها کردن فایل ناموفق بود. دوباره تلاش کنید."},"secretMask":{"secret.reveal":"نمایش کلید محرمانه","secret.hide":"پنهان کردن کلید محرمانه"},"account.notifications":{"close":"بستن"},"approval":{"waiting":"در انتظار تأیید","detail.aria":"جزئیات درخواست تأیید","escalation":"ابزار {toolName} درخواست اجرای با دسترسی بالا دارد"},"skill":{"row.title":"مهارت","row.running":"در حال بارگذاری مهارت","row.preparing":"آماده‌سازی برای بارگذاری مهارت"},"goal":{"phase.active":"هدف در حال اجرا","phase.active.disarmed":"هدف غیرفعال","phase.paused":"هدف متوقف‌شده"},"plan":{"chip.label":"برنامه اجرا","preview.title":"برنامه اجرا","preview.document":"برنامه اجرا · Markdown"},"schedule":{"trigger.label":"وظایف خودکارسازی","list.loading":"در حال بارگذاری وظایف خودکارسازی…","list.error":"بارگذاری وظایف خودکارسازی ناموفق بود."},"reference":{"menu.addToChat":"افزودن به گفتگو","menu.addToChatFailed":"افزودن فایل ناموفق بود. به گفتگو برگردید و دوباره تلاش کنید.","section.files":"فایل‌ها و پوشه‌ها"},"fileActions":{"menu.finder":"نمایش در Finder","menu.reveal":"نمایش در پوشه","menu.saveAs":"ذخیره با نام…"},"sessionPanel":{"panel.name":"پنل نشست","toggle.show":"نمایش پنل نشست","toggle.hide":"پنهان کردن پنل نشست"},"slash.menu":{"command":"دستورات","skill":"مهارت‌ها","subagent":"زیرعامل‌ها"},"chat":{"message.stepProcess.thinking":"در حال تحلیل درخواست","message.stepProcess.read":"در حال خواندن فایل‌ها","message.stepProcess.readImage":"در حال خواندن تصاویر","message.stepProcess.write":"در حال نوشتن فایل","message.stepProcess.edit":"در حال ویرایش فایل","message.stepProcess.search":"در حال جستجو در فایل‌ها","message.stepProcess.bash":"در حال اجرای دستور","message.stepProcess.webSearch":"در حال جستجو در وب","message.stepProcess.webFetch":"در حال دریافت صفحه وب"},"conversation":{"quote.remove":"حذف نقل‌قول","shortcut.newline":"خط جدید","shortcut.complementary":"استفاده از عملیات مکمل صف / هدایت"},"workspace":{"defaultWorkspace.failed":"ایجاد فضای کاری پیش‌فرض ناموفق بود. از گزینه «انتخاب فضای کاری» برای برگزیدن یک پوشه استفاده کنید.","draft.workspaceRequired":"ابتدا یک فضای کاری انتخاب کنید.","draft.initializationFailed":"آماده‌سازی پیش‌نویس ناموفق بود. لطفاً لحظه‌ای دیگر دوباره تلاش کنید."},"sidebarCode":{"title":"کد","copy":"کپی","copied":"کپی شد"},"documentHtml":{"title":"HTML","frame":"پیش‌نمایش سند HTML","loading":"در حال رندر سند…"},"documentMarkdown":{"viewer.label":"Markdown"},"sidebarPdf":{"title":"PDF"},"sidebarImage":{"title":"تصویر"},"sidebarExcel":{"title":"جدول"},"connectorAccount":{"close":"بستن","action.cancel":"لغو","activation.later":"بعداً"}};
    const __UI_PHRASES__ = {"exact":{"New Session":"نشست جدید","New session":"نشست جدید","New Chat":"گفتگوی جدید","New chat":"گفتگوی جدید","New conversation":"گفتگوی جدید","Global panels":"پنل‌های سراسری","Navigation":"ناوبری","Open sidebar":"باز کردن نوار کناری","Collapse sidebar":"جمع کردن نوار کناری","Expand sidebar":"باز کردن نوار کناری","Toggle left sidebar":"باز و بسته کردن نوار کناری","Toggle sidebar":"باز و بسته کردن نوار کناری","Unpin from left sidebar":"برداشتن سنجاق از نوار کناری","Pin to sidebar":"سنجاق به نوار کناری","Version copied":"شماره نسخه کپی شد","Start guide":"راهنمای شروع","Start Guide":"راهنمای شروع","Quick start":"شروع سریع","Quick Start":"شروع سریع","Settings":"تنظیمات","General":"عمومی","Appearance":"ظاهر","Theme":"پوسته","Language":"زبان","Interface language":"زبان رابط کاربری","Light":"روشن","Dark":"تیره","System":"سیستم","Follow system":"مطابق سیستم","Auto":"خودکار","Automatic":"خودکار","Models":"مدل‌ها","Model":"مدل","Models & Providers":"مدل‌ها و ارائه‌دهندگان","Default model":"مدل پیش‌فرض","Default Model":"مدل پیش‌فرض","Select model":"انتخاب مدل","Select Model":"انتخاب مدل","Choose model":"انتخاب مدل","Select provider":"انتخاب ارائه‌دهنده","Providers":"ارائه‌دهندگان","Provider":"ارائه‌دهنده","Add provider":"افزودن ارائه‌دهنده","Add Provider":"افزودن ارائه‌دهنده","Edit provider":"ویرایش ارائه‌دهنده","Delete provider":"حذف ارائه‌دهنده","Add model":"افزودن مدل","Add Model":"افزودن مدل","Custom model":"مدل سفارشی","API Key":"کلید API","API key":"کلید API","Enter API key":"کلید API را وارد کنید","Base URL":"نشانی پایه (Base URL)","Endpoint":"نشانی سرویس (Endpoint)","Model ID":"شناسه مدل","Test connection":"آزمایش اتصال","Test Connection":"آزمایش اتصال","Testing connection…":"در حال آزمایش اتصال…","Connection successful":"اتصال با موفقیت برقرار شد","Connection failed":"اتصال ناموفق بود","Connected":"متصل","Disconnected":"قطع","Configured":"پیکربندی‌شده","Not configured":"پیکربندی‌نشده","Reasoning effort":"سطح استدلال","Reasoning Effort":"سطح استدلال","Thinking":"تفکر","Thinking…":"در حال تفکر…","Thought":"فرآیند تفکر","Reasoning":"استدلال","Effort":"سطح استدلال","Minimal":"حداقل","Low":"کم","Medium":"متوسط","High":"زیاد","Maximum":"حداکثر","Off":"خاموش","On":"روشن","Permissions":"دسترسی‌ها","Permission":"دسترسی","Permission mode":"حالت دسترسی","Permission Mode":"حالت دسترسی","Permission presets":"پیش‌تنظیم‌های دسترسی","Ask":"پرسش","Ask before acting":"پرسش پیش از اجرا","Ask every time":"هر بار بپرس","Read-only":"فقط خواندنی","Read only":"فقط خواندنی","Workspace write":"نوشتن در فضای کاری","Full access":"دسترسی کامل","Allow":"اجازه دادن","Allow once":"فقط همین بار","Allow Once":"فقط همین بار","Always allow":"همیشه اجازه بده","Always Allow":"همیشه اجازه بده","Allow for this session":"اجازه برای همین نشست","Deny":"رد کردن","Reject":"رد کردن","Approve":"تأیید","Approved":"تأیید شد","Denied":"رد شد","Rejected":"رد شد","Waiting for approval":"در انتظار تأیید","Approval details":"جزئیات درخواست تأیید","Approval required":"نیاز به تأیید","Plugins":"پلاگین‌ها","Plugin":"پلاگین","Installed plugins":"پلاگین‌های نصب‌شده","Installed Plugins":"پلاگین‌های نصب‌شده","Plugin list":"فهرست پلاگین‌ها","Plugin manager":"مدیریت پلاگین‌ها","Plugin Manager":"مدیریت پلاگین‌ها","Plugin market":"فروشگاه پلاگین","Plugin Market":"فروشگاه پلاگین","Marketplace":"فروشگاه پلاگین","Discover":"کشف پلاگین‌ها","Discover plugins":"کشف پلاگین‌ها","Add plugin":"افزودن پلاگین","Add Plugin":"افزودن پلاگین","Choose how to add a plugin":"انتخاب روش افزودن پلاگین","Install a third-party plugin":"نصب پلاگین شخص ثالث","Let the agent create a plugin":"ساخت پلاگین توسط عامل","Built-in":"داخلی","Built-in plugins":"پلاگین‌های داخلی","External":"خارجی","Third-party":"شخص ثالث","Official":"رسمی","Community":"انجمن","Install":"نصب","Installed":"نصب‌شده","Installing…":"در حال نصب…","Uninstall":"حذف نصب","Uninstalling…":"در حال حذف نصب…","Enable":"فعال‌سازی","Enable now":"فعال‌سازی اکنون","Enabled":"فعال","Disable":"غیرفعال‌سازی","Disabled":"غیرفعال","Update":"به‌روزرسانی","Updates":"به‌روزرسانی‌ها","Check for updates":"بررسی به‌روزرسانی‌ها","Restart required":"نیاز به راه‌اندازی مجدد","Restart to apply changes":"برای اعمال تغییرات برنامه را مجدداً راه‌اندازی کنید","Workspaces":"فضاهای کاری","Workspace":"فضای کاری","Add workspace":"افزودن فضای کاری","Add Workspace":"افزودن فضای کاری","Choose workspace":"انتخاب فضای کاری","Select workspace":"انتخاب فضای کاری","Choose a workspace first.":"ابتدا یک فضای کاری انتخاب کنید.","Default Workspace":"فضای کاری پیش‌فرض","Default workspace":"فضای کاری پیش‌فرض","Open folder":"باز کردن پوشه","Open Folder":"باز کردن پوشه","New folder":"پوشه جدید","New Folder":"پوشه جدید","Create folder":"ایجاد پوشه","Select folder":"انتخاب پوشه","Select Folder":"انتخاب پوشه","Show in folder":"نمایش در پوشه","Show in Finder":"نمایش در Finder","Show in Explorer":"نمایش در فایل منیجر","Reveal in Finder":"نمایش در Finder","Save as…":"ذخیره با نام…","Save as":"ذخیره با نام","Sessions":"نشست‌ها","Session":"نشست","Session panel":"پنل نشست","Show session panel":"نمایش پنل نشست","Hide session panel":"پنهان کردن پنل نشست","Recent":"اخیر","Today":"امروز","Yesterday":"دیروز","Previous 7 days":"۷ روز گذشته","Last 7 days":"۷ روز گذشته","Previous 30 days":"۳۰ روز گذشته","Last 30 days":"۳۰ روز گذشته","Older":"قدیمی‌تر","Just now":"همین الان","Pinned":"سنجاق‌شده","Pin":"سنجاق کردن","Unpin":"برداشتن سنجاق","Archive":"بایگانی","Archived":"بایگانی‌شده","Archived sessions":"نشست‌های بایگانی‌شده","Unarchive":"خارج از بایگانی","Fork":"انشعاب","Fork session":"انشعاب نشست","Fork from here":"ایجاد انشعاب از اینجا","Rename":"تغییر نام","Rename session":"تغییر نام نشست","Delete":"حذف","Delete session":"حذف نشست","Remove":"حذف","Remove quote":"حذف نقل‌قول","Mark as read":"علامت به‌عنوان خوانده‌شده","Mark as unread":"علامت به‌عنوان خوانده‌نشده","Unread":"خوانده‌نشده","Skills":"مهارت‌ها","Skill":"مهارت","Loading skill":"در حال بارگذاری مهارت","Preparing to load a skill":"آماده‌سازی برای بارگذاری مهارت","Automations":"خودکارسازی‌ها","Automation tasks":"وظایف خودکارسازی","Loading automation tasks…":"در حال بارگذاری وظایف خودکارسازی…","Could not load automation tasks.":"بارگذاری وظایف خودکارسازی ناموفق بود.","Schedules":"زمان‌بندی‌ها","Schedule":"زمان‌بندی","New schedule":"زمان‌بندی جدید","Create automation":"ایجاد خودکارسازی","Agent Presets":"حالت‌های عامل","Agent presets":"حالت‌های عامل","Agent Preset":"حالت عامل","Agent preset":"حالت عامل","Agent Loop":"حلقه عامل","Agent loop":"حلقه عامل","Subagents":"زیرعامل‌ها","Subagent":"زیرعامل","Agent Team":"تیم عامل‌ها","Shared tasks":"وظایف مشترک","Shell":"خط فرمان (Shell)","Shell & Sandbox":"خط فرمان و سندباکس","Sandbox":"محیط ایزوله (Sandbox)","Terminal":"ترمینال","Web Search":"جستجوی وب","Web search":"جستجوی وب","Account":"حساب کاربری","Sign in":"ورود به حساب","Sign In":"ورود به حساب","Sign out":"خروج از حساب","Sign Out":"خروج از حساب","Log in":"ورود","Log out":"خروج","Shortcuts":"میانبرهای صفحه‌کلید","Keyboard shortcuts":"میانبرهای صفحه‌کلید","Keyboard Shortcuts":"میانبرهای صفحه‌کلید","Session Log":"گزارش نشست","Session log":"گزارش نشست","Download session log":"دانلود گزارش نشست","Upload Session Log when using the official model API":"ارسال گزارش نشست هنگام استفاده از API رسمی مدل","Help improve DeepSeek models and products.":"به بهبود مدل‌ها و محصولات DeepSeek کمک کنید.","Preference saved":"تنظیمات ذخیره شد","Could not save preference":"ذخیره تنظیمات ناموفق بود","Files":"فایل‌ها","Files & folders":"فایل‌ها و پوشه‌ها","Browser":"مرورگر","Preview":"پیش‌نمایش","Code":"کد","Document preview":"پیش‌نمایش سند","HTML document preview":"پیش‌نمایش سند HTML","Rendering document…":"در حال رندر سند…","Deliverables":"خروجی‌ها","Artifacts":"خروجی‌ها","Plan":"برنامه اجرا","Plan mode":"حالت برنامه‌ریزی","Approve plan":"تأیید برنامه","Reject plan":"رد برنامه","Goals":"اهداف","Goal":"هدف","Ongoing Goal":"هدف در حال اجرا","Inactive Goal":"هدف غیرفعال","Paused Goal":"هدف متوقف‌شده","Background jobs":"کارهای پس‌زمینه","Background Jobs":"کارهای پس‌زمینه","Jobs":"کارها","Trajectory":"مسیر اجرا","Commands":"دستورات","Command":"دستور","Add to chat":"افزودن به گفتگو","Reference":"ارجاع","References":"ارجاع‌ها","Show secret":"نمایش کلید محرمانه","Hide secret":"پنهان کردن کلید محرمانه","Analyzing the request":"در حال تحلیل درخواست","Reading files":"در حال خواندن فایل‌ها","Reading file":"در حال خواندن فایل","Reading images":"در حال خواندن تصاویر","Editing files":"در حال ویرایش فایل‌ها","Editing file":"در حال ویرایش فایل","Writing file":"در حال نوشتن فایل","Writing files":"در حال نوشتن فایل‌ها","Searching files":"در حال جستجو در فایل‌ها","Running command":"در حال اجرای دستور","Running commands":"در حال اجرای دستورات","Searching the web":"در حال جستجو در وب","Fetching web page":"در حال دریافت صفحه وب","Generating response":"در حال تولید پاسخ","Working":"در حال انجام کار","Working…":"در حال انجام کار…","New line":"خط جدید","Queue":"افزودن به صف","Steer":"هدایت","Search":"جستجو","Search…":"جستجو…","Filter":"فیلتر","Filter…":"فیلتر…","Save":"ذخیره","Save changes":"ذخیره تغییرات","Saving…":"در حال ذخیره…","Saved":"ذخیره شد","Cancel":"لغو","Close":"بستن","Confirm":"تأیید","OK":"تأیید","Done":"انجام شد","Apply":"اعمال","Reset":"بازنشانی","Reset to default":"بازنشانی به پیش‌فرض","Clear":"پاک کردن","Clear all":"پاک کردن همه","Copy":"کپی","Copy code":"کپی کد","Copy message":"کپی پیام","Copy path":"کپی مسیر","Copied":"کپی شد","Copied!":"کپی شد!","Edit":"ویرایش","Create":"ایجاد","Add":"افزودن","New":"جدید","Open":"باز کردن","Open in app":"باز کردن در برنامه","Open in browser":"باز کردن در مرورگر","Open in external app":"باز کردن در برنامه بیرونی","Download":"دانلود","Upload":"بارگذاری","Export":"خروجی گرفتن","Import":"ورود اطلاعات","Refresh":"بازآوری","Reload":"بارگذاری مجدد","Retry":"تلاش مجدد","Try again":"تلاش مجدد","Back":"بازگشت","Next":"بعدی","Previous":"قبلی","Later":"بعداً","Not now":"اکنون نه","Skip":"رد کردن","Submit":"ارسال","Send":"ارسال","Stop":"توقف","Stop generating":"توقف تولید","Pause":"مکث","Resume":"ادامه","Continue":"ادامه","Run":"اجرا","Run now":"اجرای اکنون","Running":"در حال اجرا","Completed":"تکمیل شد","Finished":"پایان یافت","Failed":"ناموفق","Cancelled":"لغو شد","Canceled":"لغو شد","Pending":"در انتظار","Queued":"در صف","Idle":"آماده","Loading…":"در حال بارگذاری…","Error":"خطا","Warning":"هشدار","Info":"اطلاعات","Success":"موفق","Details":"جزئیات","View details":"مشاهده جزئیات","Show more":"نمایش بیشتر","Show less":"نمایش کمتر","Show output":"نمایش خروجی","Hide output":"پنهان کردن خروجی","Expand":"باز کردن","Collapse":"جمع کردن","More":"بیشتر","Less":"کمتر","More options":"گزینه‌های بیشتر","More actions":"عملیات بیشتر","No results":"نتیجه‌ای یافت نشد","No results found":"نتیجه‌ای یافت نشد","No sessions yet":"هنوز نشستی وجود ندارد","No workspaces yet":"هنوز فضای کاری وجود ندارد","No plugins installed":"هیچ پلاگینی نصب نشده است","No files":"فایلی وجود ندارد","Empty":"خالی","Yes":"بله","No":"خیر","All":"همه","None":"هیچ‌کدام","Default":"پیش‌فرض","Custom":"سفارشی","Optional":"اختیاری","Required":"الزامی","Recommended":"پیشنهادی","Active":"فعال","Inactive":"غیرفعال","Available":"در دسترس","Unavailable":"در دسترس نیست","About":"درباره","Version":"نسخه","Status":"وضعیت","Advanced":"پیشرفته","Notifications":"اعلان‌ها","Connectors":"اتصال‌دهنده‌ها","Security":"امنیت","Privacy":"حریم خصوصی","Help":"راهنما","Documentation":"مستندات","Learn more":"اطلاعات بیشتر","Feedback":"بازخورد","Send feedback":"ارسال بازخورد","Helpful":"مفید بود","Not helpful":"مفید نبود","Compact":"فشرده‌سازی","Compact conversation":"فشرده‌سازی گفتگو","Context":"زمینه","Attach":"پیوست","Attach file":"پیوست فایل","Attach files":"پیوست فایل‌ها","Upload image":"بارگذاری تصویر","Regenerate":"تولید مجدد","Scroll to bottom":"رفتن به انتهای گفتگو","Ask anything…":"هر سؤالی دارید بپرسید…","Type a message…":"پیام خود را بنویسید…","Send a message…":"پیامی ارسال کنید…","Message DeepSeek Harness…":"به DeepSeek Harness پیام دهید…","Search sessions…":"جستجو در نشست‌ها…","Search plugins…":"جستجو در پلاگین‌ها…","Search commands…":"جستجوی دستور…","Search files…":"جستجو در فایل‌ها…","Search automations…":"جستجو در خودکارسازی‌ها…","Search settings…":"جستجو در تنظیمات…","Untitled":"بدون عنوان","Untitled session":"نشست بدون عنوان","You":"شما","Assistant":"دستیار","User":"کاربر","Tool":"ابزار","Tools":"ابزارها","Output":"خروجی","Input":"ورودی","Result":"نتیجه","Logs":"گزارش‌ها","History":"تاریخچه","Tabs":"زبانه‌ها","Split right":"تقسیم به راست","Split down":"تقسیم به پایین","Close tab":"بستن زبانه","Close other tabs":"بستن سایر زبانه‌ها","Close all tabs":"بستن همه زبانه‌ها","Float":"شناور کردن","Dock":"چسباندن به پنل","Auto-refresh":"بازآوری خودکار","Zoom in":"بزرگ‌نمایی","Zoom out":"کوچک‌نمایی","Reset zoom":"بازنشانی بزرگ‌نمایی"},"patterns":[{"pattern":"^(\\d+)\\s+files?$","replace":"$1 فایل"},{"pattern":"^(\\d+)\\s+folders?$","replace":"$1 پوشه"},{"pattern":"^(\\d+)\\s+sessions?$","replace":"$1 نشست"},{"pattern":"^(\\d+)\\s+workspaces?$","replace":"$1 فضای کاری"},{"pattern":"^(\\d+)\\s+plugins?$","replace":"$1 پلاگین"},{"pattern":"^(\\d+)\\s+models?$","replace":"$1 مدل"},{"pattern":"^(\\d+)\\s+providers?$","replace":"$1 ارائه‌دهنده"},{"pattern":"^(\\d+)\\s+tools?$","replace":"$1 ابزار"},{"pattern":"^(\\d+)\\s+steps?$","replace":"$1 مرحله"},{"pattern":"^(\\d+)\\s+tasks?$","replace":"$1 وظیفه"},{"pattern":"^(\\d+)\\s+messages?$","replace":"$1 پیام"},{"pattern":"^(\\d+)\\s+results?$","replace":"$1 نتیجه"},{"pattern":"^(\\d+)\\s+items?$","replace":"$1 مورد"},{"pattern":"^(\\d+)\\s+selected$","replace":"$1 مورد انتخاب‌شده"},{"pattern":"^(\\d+)\\s+running$","replace":"$1 در حال اجرا"},{"pattern":"^(\\d+)\\s+errors?$","replace":"$1 خطا"},{"pattern":"^(\\d+)\\s+warnings?$","replace":"$1 هشدار"},{"pattern":"^(\\d+)\\s+tokens?$","replace":"$1 توکن"},{"pattern":"^(\\d+)\\s+seconds?\\s+ago$","replace":"$1 ثانیه پیش"},{"pattern":"^(\\d+)\\s+minutes?\\s+ago$","replace":"$1 دقیقه پیش"},{"pattern":"^(\\d+)\\s+hours?\\s+ago$","replace":"$1 ساعت پیش"},{"pattern":"^(\\d+)\\s+days?\\s+ago$","replace":"$1 روز پیش"},{"pattern":"^(\\d+)\\s+weeks?\\s+ago$","replace":"$1 هفته پیش"},{"pattern":"^(\\d+)\\s+months?\\s+ago$","replace":"$1 ماه پیش"},{"pattern":"^Thought for\\s+(.+)$","replace":"تفکر به مدت $1"},{"pattern":"^Thinking for\\s+(.+)$","replace":"در حال تفکر ($1)"},{"pattern":"^Unpin\\s+(.+)\\s+from sidebar$","replace":"برداشتن سنجاق $1 از نوار کناری"},{"pattern":"^Pin\\s+(.+)\\s+to sidebar$","replace":"سنجاق کردن $1 به نوار کناری"},{"pattern":"^Show\\s+(\\d+)\\s+more$","replace":"نمایش $1 مورد دیگر"},{"pattern":"^Hide\\s+(\\d+)\\s+more$","replace":"پنهان کردن $1 مورد"},{"pattern":"^Open in\\s+(.+)$","replace":"باز کردن در $1"},{"pattern":"^Search\\s+(.+?)\\s*(?:\\.{3}|…)?$","replace":"جستجو در $1…"},{"pattern":"^Filter\\s+(.+?)\\s*(?:\\.{3}|…)?$","replace":"فیلتر $1…"},{"pattern":"^Loading\\s+(.+?)\\s*(?:\\.{3}|…)?$","replace":"در حال بارگذاری $1…"},{"pattern":"^Installing\\s+(.+?)\\s*(?:\\.{3}|…)?$","replace":"در حال نصب $1…"},{"pattern":"^Tool\\s+(.+)\\s+requests privileged execution$","replace":"ابزار $1 درخواست اجرای با دسترسی بالا دارد"},{"pattern":"^Version\\s+([\\d.a-zA-Z-]+)$","replace":"نسخه $1"}]};
    const __RTL_CSS__ = "/* ==========================================================================\n * deepseek-harness-locale-fa v2.0 — Surgical Persian RTL & Smart BiDi CSS\n *\n * Design principles:\n * 1. Scoped strictly to `html.dsh-locale-fa-rtl` so switching back to English\n *    or Chinese restores the original layout with zero leftover rules.\n * 2. NEVER override global `line-height` on body/buttons/inputs or overwrite\n *    SVG `transform` (preserves DSH's pixel-accurate button & icon geometry).\n * 3. NEVER use broad wildcard selectors like [class*=\"chat\"] or [class*=\"terminal\"]\n *    that hijack layout frames, sidebars, or toolbar buttons.\n * 4. Strictly isolate code, inline code, terminals, KaTeX, kbd, and technical\n *    inputs in LTR (`unicode-bidi: isolate`).\n * ========================================================================== */\n\nhtml.dsh-locale-fa-rtl {\n  direction: rtl;\n  --dsh-fa-font-sans: 'Vazirmatn', 'Vazir', 'IRANSansX', 'IRANSans', 'Estedad', 'Dana', 'Segoe UI', 'Tahoma', system-ui, -apple-system, sans-serif;\n  --dsh-fa-font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'SFMono-Regular', ui-monospace, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;\n  --dsw-font-sans: var(--dsh-fa-font-sans);\n}\n\n/* Clean Persian typography without breaking DSH's line-height tokens */\nhtml.dsh-locale-fa-rtl,\nhtml.dsh-locale-fa-rtl body,\nhtml.dsh-locale-fa-rtl button,\nhtml.dsh-locale-fa-rtl input,\nhtml.dsh-locale-fa-rtl textarea,\nhtml.dsh-locale-fa-rtl select {\n  font-family: var(--dsh-fa-font-sans);\n}\n\n/* Protect native macOS / Windows desktop titlebar window controls from flipping */\nhtml.dsh-locale-fa-rtl [data-window-drag-controls] {\n  direction: ltr;\n}\n\n/* ==========================================================================\n * 1. Smart Per-Block BiDi inside Chat Messages & Composer\n * ========================================================================== */\n\n/* Composer & editable inputs: auto direction (Persian -> RTL, English/commands -> LTR) */\nhtml.dsh-locale-fa-rtl textarea,\nhtml.dsh-locale-fa-rtl [contenteditable=\"true\"] {\n  unicode-bidi: plaintext;\n  text-align: start;\n}\n\n/* Explicit RTL blocks marked by Smart BiDi observer */\nhtml.dsh-locale-fa-rtl [data-dsh-bidi=\"rtl\"] {\n  direction: rtl;\n  text-align: right;\n  unicode-bidi: plaintext;\n}\n\nhtml.dsh-locale-fa-rtl p[data-dsh-bidi=\"rtl\"],\nhtml.dsh-locale-fa-rtl li[data-dsh-bidi=\"rtl\"] {\n  line-height: 1.75;\n}\n\n/* Explicit LTR blocks (purely English paragraphs, English logs, etc.) */\nhtml.dsh-locale-fa-rtl [data-dsh-bidi=\"ltr\"] {\n  direction: ltr;\n  text-align: left;\n  unicode-bidi: plaintext;\n}\n\n/* Clean list indentation & blockquote border for RTL markdown blocks */\nhtml.dsh-locale-fa-rtl ul[data-dsh-bidi=\"rtl\"],\nhtml.dsh-locale-fa-rtl ol[data-dsh-bidi=\"rtl\"] {\n  padding-inline-start: 1.5em;\n  padding-inline-end: 0;\n  padding-left: 0;\n}\n\nhtml.dsh-locale-fa-rtl blockquote[data-dsh-bidi=\"rtl\"] {\n  border-left: none;\n  border-inline-start: 3px solid var(--dsw-alias-border-default, rgba(128, 128, 128, 0.35));\n  padding-left: 0;\n  padding-inline-start: 1em;\n}\n\n/* ==========================================================================\n * 2. STRICT LTR ISOLATION — Code, Commands, Terminals, Math, Shortcuts, URLs\n * ========================================================================== */\n\n/* Fenced code blocks & syntax highlighters */\nhtml.dsh-locale-fa-rtl pre,\nhtml.dsh-locale-fa-rtl pre *,\nhtml.dsh-locale-fa-rtl .hljs,\nhtml.dsh-locale-fa-rtl .shiki,\nhtml.dsh-locale-fa-rtl .prism-code,\nhtml.dsh-locale-fa-rtl .cm-editor,\nhtml.dsh-locale-fa-rtl .cm-content,\nhtml.dsh-locale-fa-rtl .monaco-editor,\nhtml.dsh-locale-fa-rtl [data-language] {\n  direction: ltr !important;\n  text-align: left !important;\n  unicode-bidi: isolate !important;\n  font-family: var(--dsh-fa-font-mono) !important;\n}\n\n/* Inline code inside Persian prose — stays LTR without breaking line wrap */\nhtml.dsh-locale-fa-rtl :not(pre) > code,\nhtml.dsh-locale-fa-rtl samp,\nhtml.dsh-locale-fa-rtl var,\nhtml.dsh-locale-fa-rtl kbd {\n  direction: ltr !important;\n  unicode-bidi: isolate !important;\n  font-family: var(--dsh-fa-font-mono) !important;\n}\n\n/* Real terminal canvases (xterm) & math formulas (KaTeX / MathJax) */\nhtml.dsh-locale-fa-rtl .xterm,\nhtml.dsh-locale-fa-rtl .xterm *,\nhtml.dsh-locale-fa-rtl [data-terminal=\"true\"],\nhtml.dsh-locale-fa-rtl .katex,\nhtml.dsh-locale-fa-rtl .katex-display,\nhtml.dsh-locale-fa-rtl .MathJax {\n  direction: ltr !important;\n  text-align: left !important;\n  unicode-bidi: isolate !important;\n}\n\n/* Dynamically detected technical/command/stdout/diff/path blocks */\nhtml.dsh-locale-fa-rtl [data-dsh-ltr=\"true\"] {\n  direction: ltr !important;\n  text-align: left !important;\n  unicode-bidi: isolate !important;\n}\n\n/* Technical form inputs (API keys, URLs, endpoints, emails, paths, numbers) */\nhtml.dsh-locale-fa-rtl input[type=\"url\"],\nhtml.dsh-locale-fa-rtl input[type=\"email\"],\nhtml.dsh-locale-fa-rtl input[type=\"password\"],\nhtml.dsh-locale-fa-rtl input[type=\"number\"],\nhtml.dsh-locale-fa-rtl input[name*=\"url\" i],\nhtml.dsh-locale-fa-rtl input[name*=\"key\" i],\nhtml.dsh-locale-fa-rtl input[name*=\"token\" i],\nhtml.dsh-locale-fa-rtl input[name*=\"endpoint\" i],\nhtml.dsh-locale-fa-rtl input[name*=\"model\" i],\nhtml.dsh-locale-fa-rtl input[name*=\"path\" i],\nhtml.dsh-locale-fa-rtl input[name*=\"command\" i],\nhtml.dsh-locale-fa-rtl input[placeholder*=\"http\" i],\nhtml.dsh-locale-fa-rtl input[placeholder*=\"sk-\" i] {\n  direction: ltr !important;\n  text-align: left !important;\n  unicode-bidi: plaintext !important;\n}\n";

    /* global __CORE_DICTS__, __UI_PHRASES__, __RTL_CSS__ */

    const LOCALE_ID = 'fa'
    const LOCALE_LABEL = 'فارسی'
    const STYLE_ELEMENT_ID = 'dsh-locale-fa-rtl-style'
    const FONT_LINK_ID = 'dsh-locale-fa-vazirmatn-font'
    const HTML_RTL_CLASS = 'dsh-locale-fa-rtl'

    const PERSIAN_ARABIC_RE = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/
    const LATIN_RE = /[A-Za-z]/
    const TECHNICAL_TEXT_RE =
      /^(?:https?:\/\/|\/[\w./-]+|[A-Za-z]:\\|git\s|npm\s|pnpm\s|yarn\s|npx\s|node\s|python3?\s|pip\s|docker\s|dsh\s|cd\s|ls\s|cat\s|grep\s|curl\s|sudo\s|\$\s|>\s|--?[a-z0-9-]+|@@\s|\{[^{}]*\}|\[[^[\]]*\]|Error:|TypeError:|SyntaxError:|ReferenceError:|at\s+\S+\s*\()/i

    const STRICT_LTR_SELECTOR = [
      'pre',
      'code',
      'samp',
      'var',
      'kbd',
      'script',
      'style',
      'noscript',
      'svg',
      '.hljs',
      '.shiki',
      '.prism-code',
      '.cm-editor',
      '.monaco-editor',
      '.xterm',
      '.katex',
      '.MathJax',
      '[data-language]',
      '[data-terminal="true"]',
      '[data-window-drag-controls]',
    ].join(',')

    const CHAT_CONTENT_SELECTOR = [
      '[class*="markdown"]',
      '[class*="Markdown"]',
      '[class*="prose"]',
      '[class*="Prose"]',
      '[class*="messageContent"]',
      '[class*="message-content"]',
      '[class*="MessageContent"]',
      '[class*="messageBody"]',
      '[class*="message-body"]',
      '[data-message-id]',
    ].join(',')

    const BIDI_BLOCK_SELECTOR = 'p, li, ul, ol, h1, h2, h3, h4, h5, h6, blockquote, td, th, figcaption, summary'

    const COMPILED_PATTERNS = (__UI_PHRASES__.patterns || []).map((entry) => ({
      regex: new RegExp(entry.pattern, 'i'),
      replace: entry.replace,
    }))

    const EXACT_PHRASES = __UI_PHRASES__.exact || {}
    const NORMALIZED_PHRASES = Object.create(null)

    function normalizeKey(str) {
      return str
        .trim()
        .replace(/\u2026/g, '...')
        .replace(/\s+/g, ' ')
        .toLowerCase()
    }

    ;(function buildNormalizedIndex() {
      const keys = Object.keys(EXACT_PHRASES)
      for (let i = 0; i < keys.length; i += 1) {
        const k = keys[i]
        const norm = normalizeKey(k)
        if (!(norm in NORMALIZED_PHRASES)) {
          NORMALIZED_PHRASES[norm] = EXACT_PHRASES[k]
        }
      }
    })()

    function isPersianLocale(locale) {
      if (typeof locale !== 'string') return false
      const normalized = locale.trim().toLowerCase()
      return normalized === LOCALE_ID || normalized.startsWith('fa-') || normalized.startsWith('fa_')
    }

    function readActiveLocale(ctx) {
      try {
        const loc = ctx && ctx.locale
        if (loc) {
          if (typeof loc.getLocale === 'function') {
            const cur = loc.getLocale()
            if (typeof cur === 'string' && cur) return cur
          }
          if (typeof loc.getSnapshot === 'function') {
            const snap = loc.getSnapshot()
            if (snap && typeof snap.locale === 'string') return snap.locale
            if (snap && typeof snap.activeLocale === 'string') return snap.activeLocale
            if (snap && typeof snap.current === 'string') return snap.current
            if (snap && typeof snap.id === 'string') return snap.id
          }
          if (typeof loc.current === 'string') return loc.current
          if (typeof loc.locale === 'string') return loc.locale
        }
      } catch (_) {
        // Fallback to documentElement.lang below
      }
      if (typeof document !== 'undefined' && document.documentElement) {
        return document.documentElement.getAttribute('lang') || ''
      }
      return ''
    }

    function translateUiText(rawText) {
      if (typeof rawText !== 'string') return null
      const trimmed = rawText.trim()
      if (!trimmed || trimmed.length > 260) return null
      if (PERSIAN_ARABIC_RE.test(trimmed)) return null
      if (TECHNICAL_TEXT_RE.test(trimmed)) return null

      const startIdx = rawText.indexOf(trimmed)
      const leading = rawText.slice(0, startIdx)
      const trailing = rawText.slice(startIdx + trimmed.length)

      // 1. Exact match
      if (Object.prototype.hasOwnProperty.call(EXACT_PHRASES, trimmed)) {
        const translated = EXACT_PHRASES[trimmed]
        if (translated && translated !== trimmed) {
          return leading + translated + trailing
        }
      }

      // 2. Normalized case/ellipsis/colon match
      const hasTrailingColon = trimmed.endsWith(':')
      const core = hasTrailingColon ? trimmed.slice(0, -1).trim() : trimmed
      const norm = normalizeKey(core)
      if (norm in NORMALIZED_PHRASES) {
        const translated = NORMALIZED_PHRASES[norm]
        if (translated && translated !== core) {
          return leading + translated + (hasTrailingColon ? ':' : '') + trailing
        }
      }

      // 3. Parameterized pattern match
      for (let i = 0; i < COMPILED_PATTERNS.length; i += 1) {
        const rule = COMPILED_PATTERNS[i]
        if (rule.regex.test(trimmed)) {
          const translated = trimmed.replace(rule.regex, rule.replace)
          if (translated !== trimmed) {
            return leading + translated + trailing
          }
        }
      }

      return null
    }

    function classifyBlockDirection(text) {
      if (!text) return null
      const trimmed = text.trim()
      if (!trimmed) return null
      if (TECHNICAL_TEXT_RE.test(trimmed)) return 'ltr'
      if (PERSIAN_ARABIC_RE.test(trimmed)) return 'rtl'
      if (LATIN_RE.test(trimmed)) return 'ltr'
      return null
    }

    function isInsideSelector(node, selector) {
      const el = node && node.nodeType === 1 ? node : node && node.parentElement
      if (!el || typeof el.closest !== 'function') return false
      return Boolean(el.closest(selector))
    }

    function isMonospaceElement(el) {
      if (!el || el.nodeType !== 1 || typeof getComputedStyle !== 'function') return false
      try {
        const ff = (getComputedStyle(el).fontFamily || '').toLowerCase()
        return (
          ff.includes('mono') ||
          ff.includes('consolas') ||
          ff.includes('menlo') ||
          ff.includes('fira code') ||
          ff.includes('jetbrains') ||
          ff.includes('courier')
        )
      } catch (_) {
        return false
      }
    }

    function createPersianDomController() {
      let active = false
      let previousDir = null
      let domObserver = null
      let scheduled = false
      let pendingRoots = new Set()

      const originalTextNodes = new WeakMap()
      const trackedTextNodes = new Set()
      const originalAttrs = new WeakMap()
      const trackedAttrEls = new Set()
      const trackedBidiEls = new Set()
      const trackedLtrEls = new Set()
      const trackedAutoDirEls = new Set()

      function ensureStyles() {
        if (typeof document === 'undefined' || !document.head) return
        if (!document.getElementById(STYLE_ELEMENT_ID)) {
          const style = document.createElement('style')
          style.id = STYLE_ELEMENT_ID
          style.textContent = __RTL_CSS__
          document.head.appendChild(style)
        }
        if (!document.getElementById(FONT_LINK_ID)) {
          const link = document.createElement('link')
          link.id = FONT_LINK_ID
          link.rel = 'stylesheet'
          link.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap'
          link.onerror = () => {
            // Offline or blocked CDN: silently fall back to local Persian/system fonts
          }
          document.head.appendChild(link)
        }
      }

      function removeStyles() {
        if (typeof document === 'undefined') return
        const style = document.getElementById(STYLE_ELEMENT_ID)
        if (style && style.parentNode) style.parentNode.removeChild(style)
        const link = document.getElementById(FONT_LINK_ID)
        if (link && link.parentNode) link.parentNode.removeChild(link)
      }

      function translateElementAttributes(el) {
        if (!el || el.nodeType !== 1 || typeof el.getAttribute !== 'function') return
        if (isInsideSelector(el, STRICT_LTR_SELECTOR)) return

        const attrs = ['placeholder', 'aria-label', 'title']
        for (let i = 0; i < attrs.length; i += 1) {
          const attr = attrs[i]
          const val = el.getAttribute(attr)
          if (!val) continue
          const translated = translateUiText(val)
          if (!translated || translated === val) continue

          let saved = originalAttrs.get(el)
          if (!saved) {
            saved = Object.create(null)
            originalAttrs.set(el, saved)
            trackedAttrEls.add(el)
          }
          if (!(attr in saved)) {
            saved[attr] = val
          }
          el.setAttribute(attr, translated)
        }
      }

      function translateTextNode(textNode) {
        if (!textNode || textNode.nodeType !== 3) return
        const parent = textNode.parentElement
        if (!parent) return
        if (isInsideSelector(parent, STRICT_LTR_SELECTOR)) return
        if (isInsideSelector(parent, CHAT_CONTENT_SELECTOR)) return
        if (parent.isContentEditable) return

        const tag = parent.tagName
        if (tag === 'TEXTAREA' || tag === 'INPUT' || tag === 'SCRIPT' || tag === 'STYLE') return

        const current = textNode.nodeValue
        const translated = translateUiText(current)
        if (!translated || translated === current) return

        if (!originalTextNodes.has(textNode)) {
          originalTextNodes.set(textNode, current)
          trackedTextNodes.add(textNode)
        }
        textNode.nodeValue = translated
      }

      function markAutoDirEditors(root) {
        if (!root || typeof root.querySelectorAll !== 'function') return
        const editors = root.querySelectorAll('textarea, [contenteditable="true"]')
        for (let i = 0; i < editors.length; i += 1) {
          const ed = editors[i]
          if (isInsideSelector(ed, STRICT_LTR_SELECTOR)) continue
          if (ed.getAttribute('dir') !== 'auto') {
            ed.setAttribute('dir', 'auto')
            trackedAutoDirEls.add(ed)
          }
        }
      }

      function applySmartBidi(root) {
        if (!root || typeof root.querySelectorAll !== 'function') return

        const blocks = root.querySelectorAll(BIDI_BLOCK_SELECTOR)
        for (let b = 0; b < blocks.length; b += 1) {
          const block = blocks[b]
          if (isInsideSelector(block, STRICT_LTR_SELECTOR)) continue

          const text = block.textContent || ''
          if (isMonospaceElement(block) || TECHNICAL_TEXT_RE.test(text.trim())) {
            if (block.getAttribute('data-dsh-ltr') !== 'true') {
              block.setAttribute('data-dsh-ltr', 'true')
              trackedLtrEls.add(block)
            }
            continue
          }

          const dir = classifyBlockDirection(text)
          if (dir && block.getAttribute('data-dsh-bidi') !== dir) {
            block.setAttribute('data-dsh-bidi', dir)
            trackedBidiEls.add(block)
          }
        }
      }

      function processSubtree(root) {
        if (!active || !root || typeof document === 'undefined') return

        if (root.nodeType === 3) {
          translateTextNode(root)
          return
        }
        if (root.nodeType !== 1) return

        translateElementAttributes(root)

        if (typeof root.querySelectorAll === 'function') {
          const attrCandidates = root.querySelectorAll('[placeholder],[aria-label],[title]')
          for (let i = 0; i < attrCandidates.length; i += 1) {
            translateElementAttributes(attrCandidates[i])
          }
        }

        if (typeof document.createTreeWalker === 'function') {
          const walker = document.createTreeWalker(root, 4 /* NodeFilter.SHOW_TEXT */)
          let currentNode = walker.nextNode()
          while (currentNode) {
            translateTextNode(currentNode)
            currentNode = walker.nextNode()
          }
        }

        markAutoDirEditors(root)
        applySmartBidi(root)
      }

      function flushPending() {
        scheduled = false
        if (!active) {
          pendingRoots.clear()
          return
        }
        const roots = Array.from(pendingRoots)
        pendingRoots.clear()
        for (let i = 0; i < roots.length; i += 1) {
          processSubtree(roots[i])
        }
      }

      function scheduleRoot(node) {
        if (!active || !node) return
        pendingRoots.add(node)
        if (!scheduled) {
          scheduled = true
          const defer =
            typeof requestAnimationFrame === 'function'
              ? requestAnimationFrame
              : (fn) => setTimeout(fn, 16)
          defer(flushPending)
        }
      }

      function restoreDomMutations() {
        trackedTextNodes.forEach((node) => {
          const original = originalTextNodes.get(node)
          if (typeof original === 'string') {
            try {
              node.nodeValue = original
            } catch (_) {
              // Detached node
            }
          }
        })
        trackedTextNodes.clear()

        trackedAttrEls.forEach((el) => {
          const saved = originalAttrs.get(el)
          if (saved) {
            const keys = Object.keys(saved)
            for (let i = 0; i < keys.length; i += 1) {
              try {
                el.setAttribute(keys[i], saved[keys[i]])
              } catch (_) {
                // Detached element
              }
            }
          }
        })
        trackedAttrEls.clear()

        trackedBidiEls.forEach((el) => {
          try {
            el.removeAttribute('data-dsh-bidi')
          } catch (_) {}
        })
        trackedBidiEls.clear()

        trackedLtrEls.forEach((el) => {
          try {
            el.removeAttribute('data-dsh-ltr')
          } catch (_) {}
        })
        trackedLtrEls.clear()

        trackedAutoDirEls.forEach((el) => {
          try {
            el.removeAttribute('dir')
          } catch (_) {}
        })
        trackedAutoDirEls.clear()
      }

      function activate() {
        if (active || typeof document === 'undefined' || !document.documentElement) return
        active = true

        const html = document.documentElement
        previousDir = html.getAttribute('dir')
        html.setAttribute('dir', 'rtl')
        html.classList.add(HTML_RTL_CLASS)
        html.setAttribute('data-dsh-locale-fa', 'active')

        ensureStyles()

        if (document.body) {
          processSubtree(document.body)
        }

        if (typeof MutationObserver === 'function' && document.body) {
          domObserver = new MutationObserver((mutations) => {
            if (!active) return
            for (let i = 0; i < mutations.length; i += 1) {
              const m = mutations[i]
              if (m.type === 'childList') {
                for (let j = 0; j < m.addedNodes.length; j += 1) {
                  scheduleRoot(m.addedNodes[j])
                }
              } else if (m.type === 'characterData' && m.target) {
                scheduleRoot(m.target)
              }
            }
          })
          domObserver.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true,
          })
        }
      }

      function deactivate() {
        if (!active) return
        active = false
        pendingRoots.clear()

        if (domObserver) {
          domObserver.disconnect()
          domObserver = null
        }

        restoreDomMutations()
        removeStyles()

        if (typeof document !== 'undefined' && document.documentElement) {
          const html = document.documentElement
          html.classList.remove(HTML_RTL_CLASS)
          html.removeAttribute('data-dsh-locale-fa')
          if (previousDir === null || previousDir === '') {
            html.setAttribute('dir', 'ltr')
          } else {
            html.setAttribute('dir', previousDir)
          }
        }
      }

      return {
        activate,
        deactivate,
        isActive: () => active,
        sync(locale) {
          if (isPersianLocale(locale)) {
            activate()
          } else {
            deactivate()
          }
        },
      }
    }

    function apply(ctx) {
      // 1. Register Persian (فارسی) in Settings -> General -> Language
      ctx.effect(
        () =>
          ctx.locale.addLanguage({
            id: LOCALE_ID,
            label: LOCALE_LABEL,
            fallback: 'en',
          }),
        'deepseek-harness-locale-fa: language',
      )

      // 2. Register official Persian dictionaries for verified DSH namespaces
      const namespaces = Object.keys(__CORE_DICTS__)
      for (let i = 0; i < namespaces.length; i += 1) {
        const ns = namespaces[i]
        const dict = __CORE_DICTS__[ns]
        ctx.effect(
          () => ctx.locale.register(ns, LOCALE_ID, dict),
          `deepseek-harness-locale-fa: ${ns}`,
        )
      }

      // 3. Reversible runtime bridge on ctx.locale.bind & resolveText for zero-flicker
      //    Persian fallback on any namespace key not yet in core.json
      ctx.effect(() => {
        const loc = ctx && ctx.locale
        if (!loc) return

        const origBind = typeof loc.bind === 'function' ? loc.bind : null
        const origResolveText = typeof loc.resolveText === 'function' ? loc.resolveText : null
        const wrappedCache = new Map()

        if (origBind) {
          try {
            loc.bind = function patchedBind(ns) {
              if (wrappedCache.has(ns)) return wrappedCache.get(ns)
              const rawT = origBind.call(this, ns)
              if (typeof rawT !== 'function') return rawT
              const wrappedT = function translatedT(key, params) {
                const result = rawT(key, params)
                if (typeof result === 'string' && isPersianLocale(readActiveLocale(ctx))) {
                  const fa = translateUiText(result)
                  if (fa) return fa
                }
                return result
              }
              wrappedCache.set(ns, wrappedT)
              return wrappedT
            }
          } catch (_) {
            // Read-only locale object: fall back to DOM UI-chrome layer
          }
        }

        if (origResolveText) {
          try {
            loc.resolveText = function patchedResolveText(text) {
              const result = origResolveText.call(this, text)
              if (typeof result === 'string' && isPersianLocale(readActiveLocale(ctx))) {
                const fa = translateUiText(result)
                if (fa) return fa
              }
              return result
            }
          } catch (_) {
            // Ignore if non-writable
          }
        }

        return () => {
          wrappedCache.clear()
          if (origBind) {
            try {
              loc.bind = origBind
            } catch (_) {}
          }
          if (origResolveText) {
            try {
              loc.resolveText = origResolveText
            } catch (_) {}
          }
        }
      }, 'deepseek-harness-locale-fa: runtime-locale-bridge')

      // 4. Surgical RTL + Smart BiDi + DOM UI-chrome fallback controller
      const controller = createPersianDomController()

      ctx.effect(() => {
        const syncNow = (maybeLocale) => {
          const next = typeof maybeLocale === 'string' && maybeLocale ? maybeLocale : readActiveLocale(ctx)
          controller.sync(next)
        }

        syncNow()

        const disposers = []

        if (typeof ctx.on === 'function') {
          const off = ctx.on('locale/change', (payload) => {
            if (typeof payload === 'string') {
              syncNow(payload)
            } else if (payload && typeof payload === 'object') {
              syncNow(payload.locale || payload.next || payload.id || readActiveLocale(ctx))
            } else {
              syncNow()
            }
          })
          if (typeof off === 'function') disposers.push(off)
        }

        if (ctx.locale && typeof ctx.locale.subscribe === 'function') {
          const unsub = ctx.locale.subscribe(() => syncNow())
          if (typeof unsub === 'function') disposers.push(unsub)
        }

        let langObserver = null
        if (typeof MutationObserver === 'function' && typeof document !== 'undefined' && document.documentElement) {
          langObserver = new MutationObserver(() => {
            syncNow(document.documentElement.getAttribute('lang') || readActiveLocale(ctx))
          })
          langObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['lang'],
          })
        }

        return () => {
          if (langObserver) langObserver.disconnect()
          for (let i = 0; i < disposers.length; i += 1) {
            try {
              disposers[i]()
            } catch (_) {}
          }
          controller.deactivate()
        }
      }, 'deepseek-harness-locale-fa: rtl-bidi-runtime')
    }

    module.exports = {
      name: 'locale-fa',
      inject: ['locale'],
      apply,
      __internal: {
        LOCALE_ID,
        LOCALE_LABEL,
        isPersianLocale,
        translateUiText,
        classifyBlockDirection,
      },
    }

    return module.exports;
  },
});
