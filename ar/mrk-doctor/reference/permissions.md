---
description: "أعطى الموظفين فقط الوصول الذي يحتاجونه"
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# الإذن

جميع الإذنات MRK Doctor تُعطى من قبل المُشغلين. `mrkdoctor.view` مطلوبة لكل أمر، بما في ذلك تلك التي تمتلك إذن إضافي.

| الإذن | الوصول |
| --- | --- |
| `mrkdoctor.view` | عرض التشخيصات، وقائمة الحوادث والتغييرات، وإنشاء اللقطات الفورية، وإجراء التحقق من الإذن / الأوامر. |
| `mrkdoctor.report` | إعداد تقارير |
| `mrkdoctor.dashboard` | عرض تفاصيل اتصال لوحة التحكم واستبدال إثباتاتها. |
| `mrkdoctor.admin` | الوصول الإداري، بما في ذلك إعادة التحميل والإذن المذكور أعلاه. |

{% hint style="warning" %}
لا تعطي الإذن التشخيصية للاعبين العاديين. التقارير وإعدادات الاتصال قد تحتوي على معلومات حساسة.
{% endhint %}

لا تقوم العقد المحجوزة `mrkdoctor.trace`، `mrkdoctor.rollback`، و `mrkdoctor.update` بفتح التتبع أو التراجع أو التحديثات التلقائية في هذا الإصدار.
