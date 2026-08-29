---
description: "Ajustez les paramètres sans perturber votre installation."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


# Configuration

Modifiez `plugins/MRKDoctor/config.yml` avec un éditeur de texte conscient de YAML. Faites une sauvegarde d'abord et préservez l'indentation.

La configuration par défaut est un bon point de départ. Modifiez seulement les paramètres dont vous avez besoin, tels que l'étiquette du serveur, les intervalles de surveillance, l'accès au tableau de bord ou la conservation de l'historique.

Les informations de bord générées par `/doctor dashboard setup` deviennent immédiatement actives. Retournez après avoir changé les adresses de liaison, les ports, l'état activé ou les paramètres de surveillance. `/doctor reload` ne remplace pas un redémarrage complet pour ces changements de connexion et de cycle de vie.

Utilisez la référence de configuration [configuration reference](../reference/configuration.md) pour l'édition universelle. Ne copiez pas les paramètres supplémentaires d'une autre édition et supposez qu'ils activeront de nouvelles fonctionnalités.
