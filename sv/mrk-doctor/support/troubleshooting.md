---
description: "Praktiska kontroller av vanliga problem."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# Problemlösning

<a id="plugin-will-not-start"></a>
## Plugin startar inte

Känn till att du har installerat rätt upplaga och bara en MRK Doctor JAR. Kontrollera servers Java krav, fri diskutrymme, filtillstånd och det första relevanta konsolfellet. Återstarter normalt efter att problemet har korrigerats.

<a id="server-is-lagging-or-shows-errors"></a>
## Server är efter eller visar fel

Registrera när problemet började. Kontrollera `/doctor status`, öppna incidenter och senaste ändringar. Se över de berörda plugin-konsolfelna, sedan [skapar en rapport](../reports/creating-reports.md). Testa en omvänd ändring åt gången med hjälp av en säkerhetskopiering.

<a id="dashboard-will-not-connect"></a>
## Dashboard kommer inte att ansluta

Känn till att MRK Doctor är aktiverad och öppna den konfigurerade inbyggda instrumentpanelen adress. Kontrollera bindadressen, enda värdhantering tilldelning, brandväg, proxy-rutten och konfigurerad port. En nyligen genererad token är aktiv omedelbart.

<a id="a-player-cannot-use-a-command"></a>
## En spelare kan inte använda ett kommando

Kontrollera exakt kommando, spelares tillstånd, världsbegränsningar och ägarplugins konfiguration. Följ [tillståndsprov](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## Minnet fortsätter att öka.

Observera användningen över tid och jämföra den med spelaraktivitet. En hög läsning är inte bevis på läckage eller ägande av plugin. Använd servern stödda profileringsverktyg när mer detaljer behövs.

<a id="reports-or-history-are-unavailable"></a>
## Rapporter eller historia är inte tillgängliga

Kontrollera lediga diskutrymme och läs- och skrivtillstånd för `plugins/MRKDoctor/`. Stäng servern och säkerhetskopiera hela mappen innan du försöker reparera.

<a id="monitoring-overhead-seems-high"></a>
## - Det verkar vara högt.

Om det kvarstår, skicka relevanta loggar och inställningar via [stöd](../../support.md), utan legitimation.
