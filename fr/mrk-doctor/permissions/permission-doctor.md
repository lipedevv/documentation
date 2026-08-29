---
description: "Enquêtez sur un problème d'accès aux joueurs en ligne."
icon: user-shield
---

> [English source](../../../mrk-doctor/permissions/permission-doctor.md) · [Language home](../../README.md) · Machine-translated edition


<a id="check-permissions-and-commands"></a>
# Vérifiez les autorisations et les commandes

Le joueur cible doit être en ligne.

```text
/doctor permission Steve essentials.warp
/doctor command Steve warp
```

La première commande vérifie l'autorisation spécifiée. La seconde aide à identifier le plugin de la commande et à vérifier l'accès.

Si l'accès échoue toujours, vérifiez la syntaxe de la commande, la configuration des autorisations-groupes, les restrictions mondiales et les rafraîchissements. MRK Doctor ne modifie pas les autorisations d'un joueur ou ne remplace pas votre gestionnaire d'autorisations.

Ces contrôles sont disponibles pour les utilisateurs avec `mrkdoctor.view`, alors accorder ce nœud que pour le personnel de confiance.
