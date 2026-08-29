---
description: "Kurulumunuzu bozmadan ayarları ayarlayın."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# Yapılandırma

YAML bilgili bir metin düzenleyicisi ile `plugins/MRKDoctor/config.yml` düzenleyin. Önce yedekleme yapın ve iç yazıyı koruyun.

Öntanımlı yapılandırma iyi bir başlangıç noktasıdır. Sadece sunucu etiketini, izleme aralıklarını, tablosu erişimini veya geçmişi saklama gibi ihtiyacınız olan ayarları değiştirin.

`/doctor dashboard setup` tarafından oluşturulan çubuğlu yetenekler hemen aktif hale gelir. Bağlantı adresleri, limanları, etkin durum veya izleme ayarlarını değiştirdikten sonra yeniden başlatın. `/doctor reload` , bağlantı ve yaşam döngüsü değişikliklerinin tam yeniden başlatılmasının bir yerini tutmaz.

[yapılandırma referansı](../reference/configuration.md) 'i Evrensel baskısı için kullanın. Başka bir baskıdan ek ayarları kopyalamayın ve yeni özellikleri etkinleştirdiğini varsayın.
