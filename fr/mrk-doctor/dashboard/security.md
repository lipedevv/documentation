---
description: "Gardez l'accès aux diagnostics privé."
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# Sécurité du tableau de bord

- Partager l'accès uniquement avec des administrateurs de confiance.
- Utilisez HTTPS pour le tableau de bord Web et sécurisez les connexions à ses services.
- Gardez la liaison locale par défaut lorsque les services sont exécutés sur le même hôte.
- Protégez les allocations hébergées avec des règles de pare-feu et de proxy.
- Rotation du jeton avec `/doctor dashboard setup` si elle est exposée. Le remplacement est immédiatement actif.
- Revoir les rapports et les captures d'écran avant de les envoyer à quelqu'un.

Ne jamais coller un jeton de tableau de bord dans un problème public, un canal Discord ou un exemple de configuration. Si vous n'avez pas besoin d'accès Web, désactivez `doctor.dashboard.enabled` et redémarrez.
