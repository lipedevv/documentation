---
description: "Nastavte nastavení bez narušení instalace."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# Konfigurace

Edit `plugins/MRKDoctor/config.yml` s YAML-vědomý textový editor. Vytvořte zálohu a uchováváte vklad.

Změna je vhodná pro nastavení, které potřebujete, například na štítku serveru, intervaly monitorování, přístup k palubní desce nebo uchovávání historie.

Použitelné údaje v palubní desce generované `/doctor dashboard setup` se okamžitě aktivují. Opětovně spuštění po změně adresy spojování, portů, aktivovaného stavu nebo nastavení monitorování. `/doctor reload` není náhradou pro úplný opětovný spuštění těchto změn připojení a životního cyklu.

Použijte [konfigurační odkaz](../reference/configuration.md) pro univerzální edici. Neopakujte další nastavení z jiné edice a předpokládejte, že budou umožňovat nové funkce.
