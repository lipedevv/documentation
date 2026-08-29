---
description: "Préparez des allocations d'hébergement pour le tableau de bord."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


<a id="pterodactyl-hosting"></a>
# Hôte de l'hébergementPterodactyl

Sélectionnez une allocation disponible dans votre panneau de serveur, comme `7854`, et définissez `doctor.dashboard.port` sur ce port. Aucune application Web séparée ou une deuxième allocation n'est requise.

Utilisez l'adresse de liaison requise par votre réseau d'hébergement. L'adresse localhost d'un conteneur n'est pas accessible à partir d'un conteneur séparé. Si votre hôte nécessite `0.0.0.0`, assurez-vous que les allocations sont protégées par son pare-feu ou par un proxy sécurisé avant d'activer l'accès.

Le tableau de bord Web est desservi directement par le plugin. Suivez la configuration initiale [initial setup](initial-setup.md), redémarrez après avoir changé l'adresse de liaison ou le port, et testez la page en utilisant l'adresse allouée.

{% hint style="warning" %}
Ne pas ouvrir des ports illimités pour résoudre un problème de connexion. Si votre plan ne vous permet pas de sélectionner ou d'exposer une allocation, seul le fournisseur d'hébergement peut rendre accessible un port de tableau de bord entrant; le plugin ne peut pas contourner le pare-feu de l'hôte.
{% endhint %}
