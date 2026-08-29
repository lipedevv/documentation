---
description: "Jaga akses diagnostik pribadi."
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# Keamanan Dashboard

- Berbagi akses hanya dengan administrator yang dapat diandalkan.
- Gunakan HTTPS untuk web dashboard dan aman koneksi ke layanan.
- Simpan local bind default saat layanan berjalan di host yang sama.
- Melindungi alokasi host dengan firewall dan aturan proxy.
- Putar token dengan `/doctor dashboard setup` jika terpapar. Penggantian aktif segera.
- Periksa laporan dan gambar layar sebelum mengirimkannya ke siapa pun.

Jangan pernah menempelkan token dashboard ke masalah publik, saluran Discord, atau contoh konfigurasi. Jika Anda tidak membutuhkan akses web, matikan `doctor.dashboard.enabled` dan restart.
