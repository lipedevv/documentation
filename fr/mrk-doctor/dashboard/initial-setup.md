---
description: "Configurer un accès sécurisé au tableau de bord Web."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# Connectez le tableau de bord

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### Créer une carte de crédit
Exécutez `/doctor dashboard setup` en tant qu'opérateur.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### Configurer l'adresse
Dans `plugins/MRKDoctor/config.yml`, définissez `doctor.dashboard.port` au port alloué. Le lien par défaut `0.0.0.0` est écouté sur l'allocation du serveur; changez-le à `127.0.0.1` lorsque un proxy inversé sur le même hôte devrait être le seul client direct.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Ouvrez le tableau de bord intégré
Ouvrez `http://SERVER_ADDRESS:PORT` dans un navigateur et entrez le jeton.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Ne redémarrer que après des modifications de la configuration de connexion
Un jeton nouvellement généré est immédiatement actif. Retournez le serveur Minecraft seulement après avoir changé l'adresse de liaison, le port ou l'état activé.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Ne laissez pas le port de diagnostic non protégé sur Internet public. Protégez l'accès à distance avec un proxy inverse fiable, TLS, et un pare-feu. Ne traitez pas un paramètre d'origine Web comme un substitut à l'authentification.
{% endhint %}

La création d'un autre jeton remplace immédiatement la carte d'identité. Mise à jour des navigateurs de confiance avec le nouveau jeton. Voir [Pterodactyl](pterodactyl.md) et [sécurité](security.md).
