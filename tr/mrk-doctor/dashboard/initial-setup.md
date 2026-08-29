---
description: "Web ekranına güvenli erişim ayarlayın."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# Tabloyu bağla

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### İtirafı oluştur
`/doctor dashboard setup` 'i operatör olarak çalıştırın. Gösterilen token'ı hemen kopyalayın ve güvenli bir şekilde saklayın.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### Adresini yapılandır
`plugins/MRKDoctor/config.yml`'de, `doctor.dashboard.port` 'i tahsis edilen port'a ayarlayın. Öntanımlı `0.0.0.0` bağı sunucu tahsisinde dinler; aynı host'taki ters vekil tek doğrudan müşteri olduğunda `127.0.0.1` 'e değiştirin.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Eklemiş donanım tablosunu aç
Bir tarayıcıda `http://SERVER_ADDRESS:PORT` açın ve jetonu girin.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Bağlantı ayarları değiştirildikten sonra yeniden başlat
Yeni oluşturulan bir token hemen aktif olur. Minecraft sunucusu yalnızca bağlama adresi, port veya etkinleştirilmiş durum değiştirildikten sonra yeniden başlatılır.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
İctimaiyet internetinde teşhis portu korunmadığını bırakmayın. Güvenli bir ters vekil, TLSve bir güvenlik duvarı ile uzaktan erişimi koruyun. Web köken ayarlarını doğrulama yerine tutmayın.
{% endhint %}

Creating another token replaces the credential immediately. Update trusted browsers with the new token. See [Pterodactyl](pterodactyl.md) and [security](security.md).
