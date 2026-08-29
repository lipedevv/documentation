---
description: "Připravte přidělení hostingu pro palubní desku."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


<a id="pterodactyl-hosting"></a>
# Pterodactyl hostování

Vyberte jednu dostupnou alokaci ve panelu serveru, například `7854`, a nastavíte `doctor.dashboard.port` na tento port. Žádná samostatná webová aplikace nebo druhá alokace není vyžadována.

Použijte adresu bind požadovanou vaší hostovací sítí. Adresa lokálního hostitele kontejneru není dosažitelná z samostatného kontejneru. Pokud hostitel vyžaduje `0.0.0.0`, před povolením přístupu zajistěte, aby byly přiděleny chráněny jeho firewallem nebo bezpečným proxy.

Webový palubní deska je obsluhována přímo pluginem. Sledujte počáteční nastavení [initial setup](initial-setup.md), restartovat po změně adresy bind nebo portu a testovat stránku pomocí přidělené adresy.

{% hint style="warning" %}
Neotvírejte neobmedzené porty k řešení problému připojení. Pokud vám váš plán neumožní vybrat nebo vystavit přidělení, pouze poskytovatel hostingu může zpřístupnit vstupní port palubní desky; doplněk nemůže obejít firewall hostitele.
{% endhint %}
