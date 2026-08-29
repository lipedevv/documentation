---
description: "Beri staf hanya akses yang mereka butuhkan."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# Izin

Semua izin MRK Doctor default untuk operator. `mrkdoctor.view` diperlukan untuk setiap perintah, termasuk yang memiliki izin tambahan.

| Izin | Akses |
| --- | --- |
| `mrkdoctor.view` | Lihat diagnostik, daftar insiden dan perubahan, buat snapshot, dan lakukan pemeriksaan izin / perintah. |
| `mrkdoctor.report` | Buat laporan. |
| `mrkdoctor.dashboard` | Lihat detail koneksi dashboard dan ganti kredensialnya. |
| `mrkdoctor.admin` | Akses administratif, termasuk reload dan izin di atas. |

{% hint style="warning" %}
Jangan memberikan izin diagnostik kepada pemain biasa. Laporan dan pengaturan koneksi mungkin berisi informasi sensitif.
{% endhint %}

Kode yang disediakan `mrkdoctor.trace`, `mrkdoctor.rollback`, dan `mrkdoctor.update` tidak membuka pelacakan, rollback, atau pembaruan otomatis dalam rilis ini.
