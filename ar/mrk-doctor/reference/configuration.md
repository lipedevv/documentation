---
description: "دعم إعدادات العملاء للطبعة العالمية."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# إشارة التكوين

تغطي هذه المرجعية `plugins/MRKDoctor/config.yml` في الطبعة العالمية. إعادة تشغيل بعد التحرير ما لم تثبت سلوك إعادة التحميل في الإعداد.

| الإعداد | الوضع الافتراضي | الغرض |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | اللقب المستخدم لهذا الخادم |
| `doctor.performance.healthy-sample-seconds` | `15` | فترة مراقبة أثناء التشغيل الطبيعي. |
| `doctor.performance.incident-sample-seconds` | `5` | فترة مراقبة أثناء الحادث |
| `doctor.changes.enabled` | `true` | تمكين مراقبة التغييرات الأخيرة |
| `doctor.changes.interval-seconds` | `30` | فترة التغيير؛ استخدم 10 ثوان على الأقل. |
| `doctor.changes.max-file-bytes` | `1048576` | الحد من الحجم لمقارنات مفصلة من الملفات النصية. |
| `doctor.dashboard.enabled` | `true` | تمكين اتصال لوحة التحكم |
| `doctor.dashboard.bind` | `0.0.0.0` | استمع إلى تخصيص الخادم. استخدم `127.0.0.1` عندما يجب أن يمر الوصول من خلال وكيل عكسية في نفس المضيف. |
| `doctor.dashboard.port` | `7854` | منفذ واحد يستخدمه لوحة التحكم المضمنة و API الموثقة لها. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | الإمكانية اختيارية للمصدر المسموح به لتنفيذات الوكيل المتقدمة. لا يحتاج الوصول إلى نفس المصدر إلى عنوان منفصل في نهاية الأمام. |
| `doctor.dashboard.token-hash` | فارغ | يتم إدارة `/doctor dashboard setup`؛ لا تحرير يدويًا. |
| `storage.raw-retention-hours` | `24` | فترة الاحتفاظ بتاريخ قياسي مفصل. |
| `logging.debug` | `false` | إترك في الافتراض الافتراضي؛ فإنه لا يسمح بتسجيل إضافي في هذا الإصدار. |

استخدم فترات مراقبة إيجابية وميناء لوحة التحكم صالح. تقليل الفترات يزيد من عمل المراقبة؛ اختبار التغييرات على خادم المرحلة أولا.

{% hint style="warning" %}
لا تضع رمز لوحة التحكم في أمثلة التكوين. تولد إثباتات من خلال القيادة، واحفظ منفذ التشخيص محميًا.
{% endhint %}
