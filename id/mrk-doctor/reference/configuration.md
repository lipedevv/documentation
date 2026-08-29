---
description: "Didhukung pengaturan pelanggan untuk edisi Universal."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# Referensi konfigurasi

Referensi ini mencakup `plugins/MRKDoctor/config.yml` dalam edisi Universal. Mulai ulang setelah mengedit kecuali Anda telah memverifikasi perilaku reload pengaturan.

| Pengaturan | Default | Tujuan |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | Label yang digunakan untuk server ini. |
| `doctor.performance.healthy-sample-seconds` | `15` | Interval pemantauan selama operasi normal. |
| `doctor.performance.incident-sample-seconds` | `5` | Interval pemantauan selama insiden. |
| `doctor.changes.enabled` | `true` | Memungkinkan pemantauan perubahan baru. |
| `doctor.changes.interval-seconds` | `30` | Interval pemeriksaan perubahan; gunakan setidaknya 10 detik. |
| `doctor.changes.max-file-bytes` | `1048576` | Ukuran batas untuk perbandingan file teks rinci. |
| `doctor.dashboard.enabled` | `true` | Punya konektivitas dashboard. |
| `doctor.dashboard.bind` | `0.0.0.0` | Dengarkan pada alokasi server. Gunakan `127.0.0.1` ketika akses harus melalui proxy terbalik host yang sama. |
| `doctor.dashboard.port` | `7854` | Port tunggal yang digunakan oleh dashboard tertanam dan API yang otentikasinya. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | Opsional diizinkan asal untuk penyebaran proxy lanjutan; akses asal yang sama tidak memerlukan alamat frontend terpisah. |
| `doctor.dashboard.token-hash` | Bebas | Diurus oleh `/doctor dashboard setup`; jangan mengedit secara manual. |
| `storage.raw-retention-hours` | `24` | Periode penyimpanan untuk sejarah metrik terperinci. |
| `logging.debug` | `false` | Tinggal pada defaultnya; tidak memungkinkan log tambahan dalam rilis ini. |

Gunakan interval monitoring positif dan port dashboard yang valid. Mengurangi interval meningkatkan pekerjaan monitoring; pengujian perubahan pada server penyelenggaraan terlebih dahulu.

{% hint style="warning" %}
Jangan paste token dashboard ke dalam contoh konfigurasi. Menghasilkan kredensial melalui perintah, dan menjaga port diagnostik dilindungi.
{% endhint %}
