---
description: "Praktyczne kontrole na problemy powszechne."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# Rozwiązanie problemów

<a id="plugin-will-not-start"></a>
## Plugin nie uruchomi się

Potwierdź, że zainstalowałeś właściwą edycję i tylko jeden MRK Doctor JAR. Sprawdź wymagania serwera Java, wolne miejsce na dysku, uprawnienia plików i pierwszy odpowiedni błąd konsoli.

<a id="server-is-lagging-or-shows-errors"></a>
## Serwer opóźnia się lub wykazuje błędy

Zapisz, kiedy rozpoczął się problem. Sprawdź `/doctor status`, otwarte incydenty i ostatnie zmiany. Sprawdź błędy konsolu dotkniętego wtyczki, a następnie [utwórz raport](../reports/creating-reports.md). Sprawdź jedną odwracalną zmianę na raz za pomocą kopii zapasowej.

<a id="dashboard-will-not-connect"></a>
## Pultek nie będzie podłączony

Potwierdź, że MRK Doctor jest włączony i otwórz konfigurowany adres wbudowanego deski. Sprawdź adres wiązania, alokację pojedynczego hostingu, zapalnik, tryb proxy i skonfigurowany port. Nowo utworzony token jest natychmiast aktywny. Nigdy nie wyłączaj zabezpieczenia ani nie wystawiaj nieograniczonego portu jako rozwiązanie.

<a id="a-player-cannot-use-a-command"></a>
## Gracz nie może używać polecenia

Check the exact command, the player's permission, world restrictions, and the owning plugin's configuration. Follow [permission checks](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## Pamięć wciąż wzrasta.

Obserwuj wykorzystanie w czasie i porównaj je z aktywnością gracza.

<a id="reports-or-history-are-unavailable"></a>
## Nie ma raportów lub historii

Sprawdź wolne miejsce na dysku i uprawnienia do czytania i pisania dla `plugins/MRKDoctor/`. Zatrzymaj serwer i zaprowadź kompletny folder przed próbą naprawy. Nie usuwaj plików danych w celu rozwiązania problemu bez zweryfikowanej kopii zapasowej.

<a id="monitoring-overhead-seems-high"></a>
## - Wyniki monitorowania wydają się wysokie.

Wracaj do domyślnych odstępów monitorowania, unikaj śledzenia niepotrzebnie dużych plików tekstowych i porównaj wydajność pod podobnym obciążeniem. Jeśli utrzymuje się, wysyłaj odpowiednie dzienniki i ustawienia za pośrednictwem obsługi [support](../../support.md), bez uwierzytelniania.
