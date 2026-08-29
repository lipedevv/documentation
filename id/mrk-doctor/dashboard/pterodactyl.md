---
description: "Persiapkan alokasi hosting untuk dashboard."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


# Pterodactyl hosting

Pilih satu alokasi yang tersedia di panel server Anda, seperti `7854`, dan atur `doctor.dashboard.port` ke port tersebut. Tidak diperlukan aplikasi web terpisah atau alokasi kedua.

Gunakan alamat bind yang dibutuhkan oleh jaringan hosting Anda. A alamat localhost wadah tidak dapat diakses dari wadah terpisah. Jika host Anda membutuhkan `0.0.0.0`, pastikan alokasi dilindungi oleh firewall atau proxy aman sebelum mengaktifkan akses.

Dashboard web dilayani langsung oleh plugin. Ikuti pengaturan awal [initial setup](initial-setup.md), restart setelah mengubah alamat bind atau port, dan uji halaman menggunakan alamat yang ditugaskan.

{% hint style="warning" %}
Jangan buka port tanpa batasan untuk memecahkan masalah koneksi. Jika rencana Anda tidak memungkinkan Anda memilih atau mengekspos alokasi, hanya penyedia hosting yang dapat membuat port dashboard masuk dapat diakses; plugin tidak dapat melewati firewall host.
{% endhint %}
