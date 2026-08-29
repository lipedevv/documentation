---
description: "Komendy dostępne dla administratorów serwerów."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# /Wykonawstwa

Wszystkie polecenia wymagają `mrkdoctor.view`. Dozwolenia domyślne dla operatorów. Zobacz uprawnienia [permissions](permissions.md) przed delegowaniem dostępu.

| Komandor | Użycie | Dodatkowe zezwolenie |
| --- | --- | --- |
| `/doctor` | Otwórz przegląd gry; wyświetlanie stanu w konsoli. | — |
| `/doctor status` | Pokaż aktualne informacje dotyczące stanu zdrowia i czasu biegu. | — |
| `/doctor health` | Pokaż ten sam podsumowanie zdrowia. | — |
| `/doctor incidents` | Wylicz otwarte incydenty. | — |
| `/doctor changes` | Pokaż ostatnie zmiany. | — |
| `/doctor timeline` | Pokaż ostatnie zmiany w Universal. | — |
| `/dozwolenie lekarza <player> <node>` |Sprawdź zgodę gracza online. | — |
| `/doktor dowództwo <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | Zapisz zdjęcie diagnostyczne. | — |
| `/doctor report` | - Wytworzyć plik raportu. | `mrkdoctor.report` |
| `/doctor dashboard` | Wyświetlać konfigurowany adres wbudowanego deski napędowej. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Tworzyć i natychmiast aktywować nowe dokumenty z deski. | `mrkdoctor.dashboard` |
| `/doctor reload` | Przeładowanie wartości konfiguracji; niektóre zmiany wymagają ponownego uruchomienia. | `mrkdoctor.admin` |

Użyj dokładnych nazw graczy online do sprawdzenia graczy. Adres drukowany przez `/doctor dashboard` używa konfigurowanego adresu bind; zastępuj `127.0.0.1` lub `0.0.0.0` publicznym nazwiskiem hostingu podczas odległego otwierania.

Optymalizowana edycja Paper oferuje dodatkowo `/doctor wtyczkę <plugin>` dla podsumowania wtyczki.

`/doctor trace` wyświetla tylko ogłoszenie dostępności w tej wersji; nie uruchamia śledzenia.
