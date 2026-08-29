---
description: "Sesuai pengaturan tanpa mengganggu instalasi."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# Konfigurasi

Edit `plugins/MRKDoctor/config.yml` dengan editor teks yang sadar YAML. Buat cadangan terlebih dahulu dan simpan indentasi.

Konfigurasi standar adalah titik awal yang baik. Hanya ubah pengaturan yang Anda butuhkan, seperti label server, interval pemantauan, akses dashboard, atau penyimpanan sejarah.

Kreditasi Dashboard yang dihasilkan oleh `/doctor dashboard setup` akan aktif segera. Mulai ulang setelah mengubah alamat bind, port, status diaktifkan, atau pengaturan pemantauan. `/doctor reload` tidak menggantikan restart penuh untuk koneksi dan perubahan siklus hidup.

Gunakan referensi konfigurasi [configuration reference](../reference/configuration.md) untuk edisi Universal. Jangan menyalin pengaturan tambahan dari edisi lain dan asumsikan mereka akan memungkinkan fitur baru.
