---
description: "Donnez au personnel seulement l'accès dont ils ont besoin."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# Autorisations

Toutes les autorisations MRK Doctor sont par défaut accordées aux opérateurs. `mrkdoctor.view` est requise pour chaque commande, y compris celles avec une autorisation supplémentaire.

| Permis de le faire | Accès |
| --- | --- |
| `mrkdoctor.view` | Afficher les diagnostics, répertorier les incidents et les changements, créer des instantanés et effectuer des contrôles d'autorisation/commande. |
| `mrkdoctor.report` | Créer des rapports. |
| `mrkdoctor.dashboard` | Voir les détails de connexion du tableau de bord et remplacer son accréditation. |
| `mrkdoctor.admin` | Accès administratif, y compris le rechargement et les autorisations ci-dessus. |

{% hint style="warning" %}
Ne pas accorder d'autorisations de diagnostic aux joueurs ordinaires.
{% endhint %}

Les nœuds réservés `mrkdoctor.trace`, `mrkdoctor.rollback`et `mrkdoctor.update` ne débloquent pas le suivi, le retour en arrière ou les mises à jour automatiques dans cette version.
