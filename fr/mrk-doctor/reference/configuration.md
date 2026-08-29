---
description: "Partie de l'édition universelle."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# Référence de configuration

Cette référence couvre `plugins/MRKDoctor/config.yml` dans l'édition universelle. Retournez après la modification à moins que vous n'ayez vérifié le comportement de rechargement du paramètre.

| Réglage | Par défaut | Objectif |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | Étiquette utilisée pour ce serveur. |
| `doctor.performance.healthy-sample-seconds` | `15` | Intervalle de surveillance pendant le fonctionnement normal. |
| `doctor.performance.incident-sample-seconds` | `5` | Intervalle de surveillance pendant un incident. |
| `doctor.changes.enabled` | `true` | Activer le suivi des changements récents. |
| `doctor.changes.interval-seconds` | `30` | Intervalle de vérification des changements; utilisez au moins 10 secondes. |
| `doctor.changes.max-file-bytes` | `1048576` | Limite de taille pour les comparaisons détaillées de fichiers texte. |
| `doctor.dashboard.enabled` | `true` | Activer la connectivité du tableau de bord. |
| `doctor.dashboard.bind` | `0.0.0.0` | Utilisez `127.0.0.1` lorsque l'accès doit passer par un proxy inverse du même hôte. |
| `doctor.dashboard.port` | `7854` | Port unique utilisé par le tableau de bord intégré et son API authentifié. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | L'origine autorisée facultative pour les déploiements proxy avancés; l'accès à la même origine ne nécessite pas d'adresse front-end distincte. |
| `doctor.dashboard.token-hash` | Vacu | Géré par `/doctor dashboard setup`; ne pas modifier manuellement. |
| `storage.raw-retention-hours` | `24` | Délai de conservation pour l'historique métrique détaillée. |
| `logging.debug` | `false` | Laissez par défaut; il n'autorise pas l'enregistrement supplémentaire dans cette version. |

Utilisez des intervalles de surveillance positifs et un port de tableau de bord valide.

{% hint style="warning" %}
Ne collez pas le jeton du tableau de bord dans les exemples de configuration. Générez des informations d'identification par la commande et gardez le port de diagnostic protégé.
{% endhint %}
