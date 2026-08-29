---
description: "Bevelen beschikbaar voor serveradministratoren."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# Bevelen

Alle opdrachten vereisen `mrkdoctor.view`. Permissions standaard voor operators. Zie [permissies](permissions.md) voordat u toegang delegeert.

| Bevel | Gebruik | Aanvullende toestemming |
| --- | --- | --- |
| `/doctor` | Open de game overzicht; toon status in de console. | — |
| `/doctor status` | Toon actuele gezondheidsinformatie en runtime. | — |
| `/doctor health` | Toon dezelfde gezondheidssubscriptie. | — |
| `/doctor incidents` | Lijst open incidenten. | — |
| `/doctor changes` | Toon recente veranderingen. | — |
| `/doctor timeline` | Toon de lijst met recente veranderingen in Universal. | — |
| `/artsvergunning <player> <node>` | Check an online player's permission. | — |
| `/doctor commando <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | Bewaar een diagnose-opname. | — |
| `/doctor report` | Een rapportbestand maken. | `mrkdoctor.report` |
| `/doctor dashboard` | Vertoon het ingebedde dashboard adres. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Maak en activeer onmiddellijk een nieuwe dashboard credentials. | `mrkdoctor.dashboard` |
| `/doctor reload` | Verladen van de configuratiewaarden; sommige wijzigingen vereisen nog steeds een herstart. | `mrkdoctor.admin` |

Gebruik exacte online spelernamen voor spelercontroles. Het door `/doctor dashboard` afgedrukt adres gebruikt het geconfigureerde bindadres; vervang `127.0.0.1` of `0.0.0.0` door de publieke hostnaam bij het op afstand openen.

De geoptimaliseerde Paper editie biedt ook `/doctor plugin <plugin>` voor een pluginsamenvatting. Dit commando is niet beschikbaar in Universal.

`/doctor trace` toont alleen een beschikbaarheidsaanmelding in deze release; het start geen tracering. Er zijn geen automatische updates of rollback-opdrachten.
