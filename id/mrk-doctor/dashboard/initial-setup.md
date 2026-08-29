---
description: "Mengkonfigurasi akses aman ke web dashboard."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# Sambungkan dashboard

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### Buat kredensial
Jalankan `/doctor dashboard setup` sebagai operator, salin token yang ditampilkan segera dan simpan dengan aman.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### Mengkonfigurasi alamat
Di `plugins/MRKDoctor/config.yml`, atur `doctor.dashboard.port` ke port yang ditugaskan. default `0.0.0.0` bind mendengarkan pada alokasi server; ubah ke `127.0.0.1` ketika proxy terbalik pada host yang sama harus menjadi satu-satunya klien langsung.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Buka dashboard tertanam
Buka `http://SERVER_ADDRESS:PORT` di browser dan masukkan token. UI dashboard, API, dan pembaruan otomatis menggunakan port tunggal yang dikonfigurasi ini.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Restart hanya setelah perubahan pengaturan koneksi
Token yang baru dihasilkan aktif segera. Restart server Minecraft hanya setelah mengubah alamat bind, port, atau status yang diaktifkan.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Jangan meninggalkan port diagnostik tidak dilindungi di internet publik. Lindungi akses jarak jauh dengan proxy terbalik yang dapat diandalkan, TLS, dan firewall. Jangan menganggap pengaturan asal web sebagai pengganti oventifikasi.
{% endhint %}

Membuat token lain menggantikan kredensial dengan segera. Perbarui browser terpercaya dengan token baru. Lihat [Pterodactyl](pterodactyl.md) dan [keamanan](security.md).
