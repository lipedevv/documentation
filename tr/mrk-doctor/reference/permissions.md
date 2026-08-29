---
description: "Çalışanlara sadece ihtiyaç duydukları erişimleri verin."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# İzinler

Tüm MRK Doktor izinleri operatörlere özelleştirilmiştir. `mrkdoctor.view` , ek izinli olanlar da dahil olmak üzere her komut için gereklidir.

| İzin | Erişim |
| --- | --- |
| `mrkdoctor.view` | Diagnostiği görüntüle, olayları ve değişiklikleri listele, anlık görüntüleri oluştur ve izin/komut kontrollerini yap. |
| `mrkdoctor.report` | Rapor oluşturun. |
| `mrkdoctor.dashboard` | Araç tablosu bağlantı detaylarını görün ve krediyetini değiştir. |
| `mrkdoctor.admin` | Yukarıdaki izinler ve yeniden yükleme dahil olmak üzere idari erişim. |

{% hint style="warning" %}
Normal oyuncular için teşhis izinleri verilmez. Raporlar ve bağlantı ayarları hassas bilgileri içerebilir.
{% endhint %}

`mrkdoctor.trace`, `mrkdoctor.rollback`ve `mrkdoctor.update` rezerve edilen düğümler bu sürümde izleme, geri dönüş veya otomatik güncellemeleri kilitlemez.
