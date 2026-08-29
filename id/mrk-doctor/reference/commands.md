---
description: "Perintah yang tersedia untuk administrator server."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# Perintah

Semua perintah membutuhkan `mrkdoctor.view`. Permisi default untuk operator. Lihat [izin](permissions.md) sebelum mendelegasikan akses.

| Komando | Penggunaan | Izin tambahan |
| --- | --- | --- |
| `/doctor` | Buka game overview; Tampilkan status di konsol. | — |
| `/doctor status` | Tampilkan informasi kesehatan dan waktu berjalan saat ini. | — |
| `/doctor health` | Tunjukkan ringkasan kesehatan yang sama. | — |
| `/doctor incidents` | Daftarkan insiden terbuka. | — |
| `/doctor changes` | Tunjukkan perubahan baru-baru ini. | — |
| `/doctor timeline` | Tampilkan daftar perubahan baru-baru ini di Universal. | — |
| `/dokter izin <player> <node>` |Periksa izin pemain online. | — |
| `/dokter perintah <player> <command>` |Periksa pemilik perintah dan akses. | — |
| `/doctor snapshot` | Simpan foto diagnostik. | — |
| `/doctor report` | Menghasilkan file laporan. | `mrkdoctor.report` |
| `/doctor dashboard` | Tampilkan alamat dashboard tertanam yang dikonfigurasi. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Buat dan langsung mengaktifkan kredensial dashboard baru. | `mrkdoctor.dashboard` |
| `/doctor reload` | Pemuat ulang nilai konfigurasi; beberapa perubahan masih memerlukan restart. | `mrkdoctor.admin` |

Gunakan nama pemain online yang tepat untuk cek pemain. Alamat yang dicetak oleh `/doctor dashboard` menggunakan alamat bind yang dikonfigurasi; mengganti `127.0.0.1` atau `0.0.0.0` dengan nama host publik saat membukanya secara jarak jauh.

Edisi Paper yang dioptimalkan juga menawarkan plugin `/doctor <plugin>` untuk ringkasan plugin. Komando ini tidak tersedia di Universal.

`/doctor trace` hanya menampilkan pemberitahuan ketersediaan dalam rilis ini; tidak memulai pelacakan. Tidak ada pembaruan otomatis atau perintah rollback.
