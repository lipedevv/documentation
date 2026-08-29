---
description: "Förbereda en användbar rapport för stöd."
icon: file-lines
---

> [English source](../../../mrk-doctor/reports/creating-reports.md) · [Language home](../../README.md) · Machine-translated edition


<a id="create-and-share-a-report"></a>
# Skapa och dela en rapport

Kör `/doctor report` som operatör eller medarbetare med `mrkdoctor.report`. Vänta på att slutföra meddelandet och öppna den rapporterade filen från `plugins/MRKDoctor/reports/`.

Den universella utgåvan producerar en HTML-rapport som kan öppnas i en webbläsare. Den optimerade Paper -utgåvan producerar också en JSON-kompanjon.

Innan du delar:

1. Läs hela rapporten och ta bort oberoende information.
2. Leta efter legitimationer, privata adresser, filvägar, spelaruppgifter och känsliga konfigurationsvärden.
3. Dela endast den information som krävs för att utreda frågan.
4. Använd en verifierad support destination.

{% hint style="danger" %}
Det automatiska maskeringarna garanterar inte att en rapport inte innehåller några hemligheter.
{% endhint %}

Lägga in din Minecraft -version, MRK Doctor -version, en kort beskrivning, återgivningsåtgärder och tidpunkten för problemet. Se [stöd](../../support.md).
