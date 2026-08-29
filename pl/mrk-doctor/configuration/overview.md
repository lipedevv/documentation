---
description: "Zmień ustawienia bez zakłócenia instalacji."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# Konfiguracja

Wybierz `plugins/MRKDoctor/config.yml` za pomocą edytorki tekstowej, która jest świadoma YAML.

Ustawienie domyślne jest dobrym punktem wyjścia. Zmień tylko niezbędne ustawienia, takie jak etykieta serwera, interwał monitorowania, dostęp do deski napędowej lub zapisywanie historii.

Zapewnienia dyskowe generowane przez `/doctor dashboard setup` są aktywne natychmiast. Po zmianie adresów łączenia, portów, aktywnego stanu lub ustawień monitorowania uruchomi się ponownie. `/doctor reload` nie zastępuje pełnego uruchomienia tych zmian w połączeniu i cyklu życia.

Użyj odniesienia do konfiguracji [configuration reference](../reference/configuration.md) w wersji Uniwersalnej. Nie kopiować dodatkowych ustawień z innej wersji i zakładać, że włączą nowe funkcje.
