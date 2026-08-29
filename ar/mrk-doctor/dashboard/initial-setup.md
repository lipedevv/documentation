---
description: "إعداد الوصول الآمن إلى لوحة التحكم على الويب."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# قم بتوصيل لوحة التحكم

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### إعداد شهادة اعتماد
أطلق `/doctor dashboard setup` كعميل، نسخ الرمز المعروض على الفور وتخزينه بأمان.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### إعداد العنوان
في `plugins/MRKDoctor/config.yml`، حدد `doctor.dashboard.port` إلى منفذ المخصص. يستمع الالتزام الافتراضي `0.0.0.0` على تخصيص الخادم. قم بتغييرها إلى `127.0.0.1` عندما يكون وكيل العكس على نفس المضيف هو العميل المباشر الوحيد.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### افتح لوحة التحكم المضمنة
افتح `http://SERVER_ADDRESS:PORT` في متصفح وإدخال رمز. تستخدم واجهة المرور على لوحة التحكم والإتاحة الإجراءات الإستعمالية والتحديثات الآلية هذه البوابة المحددة.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### إعادة تشغيل فقط بعد تغييرات إعدادات الاتصال
يتم تنشيط رمز جديد على الفور. إعادة تشغيل خادم Minecraft فقط بعد تغيير عنوان الالتزام أو البورط أو الحالة الممكنة.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
لا تترك منفذ التشخيص غير محمي على الإنترنت العام. حماية الوصول عن بعد مع وكيل عكس موثوق به ، TLS، والجدار الحر. لا تعامل إعدادات أصل الويب كبديل للتصديق.
{% endhint %}

إنشاء رمز آخر يحل محل الإئتمان على الفور. قم بتحديث المتصفحات الموثوق بها مع رمز جديد. انظر [Pterodactyl](pterodactyl.md) و [أمن](security.md).
