---
description: "Praktické kontroly běžných problémů."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# Řešení problémů

<a id="plugin-will-not-start"></a>
## Plugin nezačne

Potvrďte, že jste nainstalovali správné vydání a pouze jeden MRK Doctor JAR. Zkontrolujte požadavky na Java serveru, volný diskový prostor, souborové povolení a první příslušnou chybou konzole. Zde znovu spuštějte normálně po opravě problému.

<a id="server-is-lagging-or-shows-errors"></a>
## Server se zpoždí nebo zobrazuje chyby

Zde je záznam, kdy se problém začal. Zkontrolujte `/doctor status`, otevřené incidenty a nedávné změny. Zkontrolujte chyby konzoly dotčeného doplňku, pak [vytvoří zprávu](../reports/creating-reports.md). Zkoušejte jednu reverzibilní změnu po jednom pomocí zálohovacího zařízení.

<a id="dashboard-will-not-connect"></a>
## Vyrovnávací panel se nebude připojit

Potvrďte, že MRK Doctor je aktivován a otevřete konfigurovanou adresu vestavěného palubního desku. Zkontrolujte adresu sdílení, přidělení jediného hostingu, firewall, proxy směr a konfigurovaný port. Nová generovaná token je okamžitě aktivní. Nikdy deaktivovat bezpečnost nebo vystavit neobmedzený port jako řešení.

<a id="a-player-cannot-use-a-command"></a>
## Hráč nemůže používat příkaz

Check the exact command, the player's permission, world restrictions, and the owning plugin's configuration. Follow [permission checks](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## Paměť se stále zvyšuje.

Použití v průběhu času pozorujte a porovnávejte s aktivitou hráče. Jedna vysoká čtení není důkazem úniku nebo vlastnictví pluginů. Použijte podporované profilingové nástroje serveru, když je třeba více detailů.

<a id="reports-or-history-are-unavailable"></a>
## Zprávy nebo historie nejsou k dispozici

Zkontrolujte volný diskový prostor a čtení/psaní povolení pro `plugins/MRKDoctor/`. Zastavte server a zálohte kompletní složku před pokusu o opravy. Nevymažte soubory dat, abyste problém vyřešili bez ověřené zálohové soubory.

<a id="monitoring-overhead-seems-high"></a>
## Výše nadměrné náklady na monitorování se zdají být vysoké

Vrátit intervaly monitorování na jejich výchozí nastavení, vyhnout se sledování zbytečně velkých textových souborů a porovnat výkon při podobném zatížení. Pokud to nepřetrvá, pošlete příslušné záznamy a nastavení prostřednictvím podpory [support](../../support.md), bez pověření.
