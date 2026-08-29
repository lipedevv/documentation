---
description: "Pemeriksaan praktis untuk masalah umum."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# Penghapusan masalah

<a id="plugin-will-not-start"></a>
## Plugin tidak akan dimulai

Konfirmasi Anda telah menginstal edisi yang benar dan hanya satu MRK Doctor JAR. Periksa persyaratan Java server, ruang disk bebas, izin file, dan kesalahan konsol yang relevan pertama. Restart normal setelah memperbaiki masalah.

<a id="server-is-lagging-or-shows-errors"></a>
## Server tertinggal atau menunjukkan kesalahan

Catat kapan masalah dimulai. Periksa `/doctor status`, open incidents, dan perubahan terbaru. Periksa kesalahan konsol plugin yang terkena dampak, kemudian [membuat laporan](../reports/creating-reports.md). Uji satu perubahan yang dapat diubah pada satu waktu menggunakan cadangan.

<a id="dashboard-will-not-connect"></a>
## Dashboard tidak akan terhubung

Konfirmasi MRK Doctor diaktifkan dan buka alamat dasbor tertanam yang dikonfigurasi. Periksa alamat bind, alokasi hosting tunggal, firewall, rute proxy, dan port yang dikonfigurasi. Token yang baru dihasilkan diaktifkan segera. Jangan pernah menonaktifkan keamanan atau mengekspos port tanpa batasan sebagai solusi.

<a id="a-player-cannot-use-a-command"></a>
## Seorang pemain tidak bisa menggunakan perintah

Periksa perintah yang tepat, izin pemain, batasan dunia, dan konfigurasi plugin pemilik. Ikuti pemeriksaan izin [permission checks](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## Memori terus meningkat

Perhatikan penggunaan dari waktu ke waktu dan bandingkan dengan aktivitas pemain. Satu bacaan tinggi tidak membuktikan kebocoran atau kepemilikan plugin. Gunakan alat profil server Anda yang didukung ketika lebih banyak detail diperlukan.

<a id="reports-or-history-are-unavailable"></a>
## Laporan atau sejarah tidak tersedia

Periksa ruang disk bebas dan izin baca/tulis untuk `plugins/MRKDoctor/`. Hentikan server dan backup folder lengkap sebelum mencoba perbaikan. Jangan menghapus file data untuk memecahkan masalah tanpa cadangan yang diverifikasi.

<a id="monitoring-overhead-seems-high"></a>
## Biaya pemantauan tampaknya tinggi

Kembalilah interval pemantauan ke standar mereka, hindari melacak file teks yang tidak perlu besar, dan bandingkan kinerja di bawah beban yang sama. Jika tetap, kirimkan log dan pengaturan yang relevan melalui [dukungan](../../support.md), tanpa kredensial.
