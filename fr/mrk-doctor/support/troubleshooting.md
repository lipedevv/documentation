---
description: "Vérifie les problèmes communs."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# Résolution des problèmes

<a id="plugin-will-not-start"></a>
## Le plug-in ne démarre pas

Confirmez que vous avez installé la bonne édition et qu'il n'y a qu'un MRK Doctor JAR. Vérifiez les exigences Java du serveur, l'espace disque libre, les autorisations de fichier et la première erreur de console pertinente. Retournez normalement après avoir corrigé le problème.

<a id="server-is-lagging-or-shows-errors"></a>
## Le serveur est en retard ou affiche des erreurs

Enregistrer le début du problème. Vérifiez `/doctor status`, les incidents ouverts et les modifications récentes. Revoir les erreurs de console du plugin affecté, puis [crée un rapport](../reports/creating-reports.md). Testez une modification réversible à la fois en utilisant une sauvegarde.

<a id="dashboard-will-not-connect"></a>
## Le tableau de bord ne se connecte pas

Confirmez que MRK Doctor est activé et ouvrez l'adresse du tableau de bord intégré configuré. Vérifiez l'adresse de liaison, l'allocation d'hébergement unique, le pare-feu, la route proxy et le port configuré. Un jeton nouvellement généré est immédiatement actif. Ne jamais désactiver la sécurité ou exposer un port non limité comme solution de résolution.

<a id="a-player-cannot-use-a-command"></a>
## Un joueur ne peut pas utiliser une commande

Check the exact command, the player's permission, world restrictions, and the owning plugin's configuration. Follow [permission checks](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## La mémoire ne cesse d'augmenter.

Observez l'utilisation au fil du temps et comparez-la avec l'activité du joueur. Une lecture élevée n'est pas la preuve d'une fuite ou de la propriété du plugin. Utilisez les outils de profilage pris en charge par votre serveur lorsque vous avez besoin de plus de détails.

<a id="reports-or-history-are-unavailable"></a>
## Les rapports ou l'historique ne sont pas disponibles

Vérifiez l'espace disque libre et les autorisations de lecture/écriture pour `plugins/MRKDoctor/`. Arrêtez le serveur et faites une sauvegarde du dossier complet avant de tenter de réparer. Ne supprimez pas les fichiers de données pour résoudre un problème sans une sauvegarde vérifiée.

<a id="monitoring-overhead-seems-high"></a>
## Les frais de surveillance semblent élevés.

Retournez les intervalles de surveillance à leur niveau par défaut, évitez de suivre des fichiers texte inutilement grands et comparez les performances sous une charge similaire. Si cela persiste, envoyez des journaux et des paramètres pertinents via [support](../../support.md), sans identifiants.
