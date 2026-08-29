---
description: "Příkazy k dispozici pro správce serveru."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# Příkazy

Všechny příkazy vyžadují `mrkdoctor.view`. Předmětné povolení pro operátory. Před delegováním přístupu viz [povolení](permissions.md) .

| Velení | Použití | Další povolení |
| --- | --- | --- |
| `/doctor` | Otevři přehled hry; zobrazit stav v konzole. | — |
| `/doctor status` | Ukažte aktuální zdravotní a běžnou informaci. | — |
| `/doctor health` | Ukažte stejné zdravotní shrnutí. | — |
| `/doctor incidents` | Seznam otevřených incidentů. | — |
| `/doctor changes` | Ukažte nedávné změny. | — |
| `/doctor timeline` | Ukažte seznam nedávných změn v Universal. | — |
| `/doktorské povolení <player> <node>` |Zkontrolujte povolení online hráče. | — |
| `/doktorský příkaz <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | Zachovej diagnostický snímek. | — |
| `/doctor report` | Vytvořte soubor zprávy. | `mrkdoctor.report` |
| `/doctor dashboard` | Ukažte nastavenou vestavěnou adresu palubní desky. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Vytvořte a okamžitě aktivujte nové pověření v palubní desce. | `mrkdoctor.dashboard` |
| `/doctor reload` | Přepínat hodnoty konfigurace; některé změny stále vyžadují restart. | `mrkdoctor.admin` |

Použijte přesné online jména hráčů pro kontroly hráčů. Adresa vytisknutá `/doctor dashboard` používá konfigurovanou adresu bind; nahraďte `127.0.0.1` nebo `0.0.0.0` veřejným jménem hostitele při otevření dálkově.

Optimální Paper Edition nabízí také `/doctor plugin <plugin>` pro shrnutí doplňku. Tato příkaz není k dispozici v univerzálním.

`/doctor trace` zobrazuje pouze oznámení o dostupnosti v tomto vydání; nezačne sledovat. Neexistují žádné automatické aktualizace nebo přikázání zpětného odkládání.
