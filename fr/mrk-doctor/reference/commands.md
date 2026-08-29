---
description: "Commandes disponibles pour les administrateurs de serveurs."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# Les commandes

Toutes les commandes nécessitent `mrkdoctor.view`. Les autorisations par défaut pour les opérateurs. Voir [autorisations](permissions.md) avant de déléguer l'accès.

| Commandement | Utilisation | Autorisation supplémentaire |
| --- | --- | --- |
| `/doctor` | Ouvrez l'aperçu du jeu; affichez l'état de la console. | — |
| `/doctor status` | Afficher les informations actuelles sur la santé et le temps de fonctionnement. | — |
| `/doctor health` | Montrez le même résumé de santé. | — |
| `/doctor incidents` | Liste des incidents ouverts. | — |
| `/doctor changes` | Afficher les changements récents suivis. | — |
| `/doctor timeline` | Affichez la liste des changements récents dans Universal. | — |
| `/médecin <player> <node>` |Vérifiez la permission d'un joueur en ligne. | — |
| `/médecin commandant <player> <command>` |Vérifiez le propriétaire et l'accès d'une commande. | — |
| `/doctor snapshot` | Gardez une photo diagnostique. | — |
| `/doctor report` | Générer un dossier de rapport. | `mrkdoctor.report` |
| `/doctor dashboard` | Afficher l'adresse du tableau de bord intégré configuré. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Créer et activer immédiatement une nouvelle carte de crédit du tableau de bord. | `mrkdoctor.dashboard` |
| `/doctor reload` | Remplacer les valeurs de configuration; certaines modifications nécessitent encore un redémarrage. | `mrkdoctor.admin` |

Utilisez les noms exacts des joueurs en ligne pour les contrôles des joueurs. L'adresse imprimée par `/doctor dashboard` utilise l'adresse de liaison configurée; remplacez `127.0.0.1` ou `0.0.0.0` par le nom d'hôte public lors de l'ouverture à distance.

L'édition papier optimisée offre également un plugin `/doctor <plugin>` pour un résumé du plugin. Cette commande n'est pas disponible dans Universal.

`/doctor trace` n'affiche qu'un avis de disponibilité dans cette version; il ne démarre pas de trace. Il n'y a pas de mise à jour automatique ou de commandes de rétroaction.
