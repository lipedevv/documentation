---
description: "Tanıdığım erişimleri gizlice tut."
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# Kullanıcı Tablosu Güvenliği

- Sadece güvenilir yöneticilerle erişim paylaşın.
- Web ekran tablosu için HTTPS kullanın ve hizmetlerine güvenli bağlantılar kurun.
- Aynı host'ta hizmetler çalışırken varsayılan yerel bağlamayı koruyun.
- Barındırılan tahsisleri güvenlik duvarı ve vekil kurallar ile koruyun.
- Eğer bu token ortaya çıkarsa, `/doctor dashboard setup` ile döndürün.
- Raporları ve ekran görüntüleri herhangi birine göndermeden önce gözden geçirin.

Bir dashboard token'i asla kamu sorununa, Discord kanalıya veya yapılandırma örneğine yapıştırmayın. Web erişimi gerekmiyorsa, `doctor.dashboard.enabled` 'i devre dışı bırakın ve yeniden başlatın.
