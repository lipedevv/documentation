---
description: "Configurar acesso seguro ao painel de controle da web."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# Conectar o painel de controle

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### Criar uma credencial
Execute `/doctor dashboard setup` como operador. Copie imediatamente o token exibido e guarde-o em um local seguro.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### Configurar o endereço
Em `plugins/MRKDoctor/config.yml`, defina `doctor.dashboard.port` como a porta atribuída pela hospedagem. O endereço padrão `0.0.0.0` aceita conexões pela alocação do servidor. Use `127.0.0.1` somente quando um proxy reverso executado na mesma máquina for o único cliente direto.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Abra a dashboard incorporada
Abra `http://SERVER_ADDRESS:PORT` em um navegador e entre o token. A interface do painel de controle, API e atualizações automáticas usam esta porta única configurada.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Reiniciar apenas após alterações na configuração da conexão
Um token recém-gerado é ativado imediatamente. Reinicie o servidor Minecraft apenas após alterar o endereço de escuta, a porta ou o estado de ativação.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Não deixe a porta de diagnóstico desprotegida na internet pública. Proteja o acesso remoto com um proxy reverso confiável, TLS e firewall. Uma configuração de origem web não substitui a autenticação.
{% endhint %}

Criar outro token substitui imediatamente a credencial. Atualize navegadores confiáveis com o novo token. Veja [Pterodactyl](pterodactyl.md) e [segurança](security.md).
