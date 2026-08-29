---
description: "Praktische controles op veel voorkomende problemen."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# Probleemoplossing

<a id="plugin-will-not-start"></a>
## Plugin gaat niet starten

Bevestig dat u de juiste editie hebt geïnstalleerd en slechts één MRK Doctor JAR. Controleer de Java-vereisten van de server, vrije schijfruimte, bestandsgerechtigingen en de eerste relevante consolefout. Restart normaal na het probleem te hebben opgelost.

<a id="server-is-lagging-or-shows-errors"></a>
## Server is achter of toont fouten

Bepaal wanneer het probleem begon. Controleer `/doctor status`, open incidenten en recente wijzigingen. Bekijk de consolefouten van de betrokken plugin, dan maakt [een rapport](../reports/creating-reports.md). Test één keer een omkeerbare wijziging met behulp van een back-up.

<a id="dashboard-will-not-connect"></a>
## Dashboard wordt niet aangesloten

Bevestig dat MRK Doctor is ingeschakeld en open het geconfigureerde ingebedde dashboard adres. Controleer het bindadres, de enkele hostingtoewijzing, de firewall, de proxy route en de geconfigureerde poort. Een nieuw gegenereerde token is onmiddellijk actief.

<a id="a-player-cannot-use-a-command"></a>
## Een speler kan geen commando gebruiken.

Controleer het exacte commando, de toestemming van de speler, de wereldbeperkingen en de configuratie van de eigenaar van de plugin. Volg [toestemmingcontroles](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## Het geheugen blijft toenemen

Bewaken gebruik in de loop van de tijd en vergelijk het met speleractiviteit. Een hoge lees is geen bewijs van een lek of eigendom van een plugin. Gebruik de ondersteunde profielwerktuigen van uw server wanneer meer details nodig zijn.

<a id="reports-or-history-are-unavailable"></a>
## Verslagen of geschiedenis niet beschikbaar

Controleer de vrije schijfruimte en lees- en schrijfbevoegdheden voor `plugins/MRKDoctor/`. Stop de server en back-up de volledige map voordat u probeert reparaties te doen.

<a id="monitoring-overhead-seems-high"></a>
## De overhead lijkt hoog .

Terugkeer de monitoringintervallen naar de standaard, vermijd het bijhouden van onnodig grote tekstbestanden en vergelijk de prestaties onder vergelijkbare belasting. Als deze blijft bestaan, stuur relevante logs en instellingen via [ondersteuning](../../support.md), zonder referenties.
