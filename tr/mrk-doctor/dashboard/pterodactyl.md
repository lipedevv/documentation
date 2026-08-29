---
description: "Araç tablosu için barındırma tahsislerini hazırlayın."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


# Pterodactyl hosting

Sunucu panelinizdeki bir tahsis seçin, örneğin `7854`ve `doctor.dashboard.port` 'i bu portu ayarlayın.

Hosting ağınız tarafından istenen bind adresini kullanın. Bir konteynerin localhost adresine ayrı bir konteynerden erişilemez. Host'unuz `0.0.0.0`'i istiyorsa, erişimi etkinleştirmeden önce tahsislerin güvenlik duvarı veya güvenli vekil tarafından korunmasını sağlayın.

Web tablosu doğrudan eklenti tarafından hizmet verilir. [başlangıç ayarını takip edin](initial-setup.md), bağlama adresi veya limanı değiştirdikten sonra yeniden başlatın ve sayfayı tahsis edilmiş adresi kullanarak test edin.

{% hint style="warning" %}
Bağlantı sorunu çözmek için sınırsız portlar açmayın. Planınız bir tahsis seçmenize veya açıklamanıza izin vermezse, yalnızca barındırma sağlayıcısı gelen bir nakliye panosuna erişilebilir hale getirebilir; eklenti barındırma güvenlik duvarını atlayamaz.
{% endhint %}
