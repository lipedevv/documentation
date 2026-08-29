---
description: "Mantenha o acesso de diagnóstico privado."
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# Segurança do painel de instrumentos

- Compartilhar acesso apenas com administradores confiáveis.
- Use o HTTPS para o painel de trabalho da web e conexões seguras aos seus serviços.
- Mantenha o local de ligação padrão quando os serviços são executados no mesmo host.
- Proteja as atribuições hospedadas com firewall e regras de proxy.
- Rotear o token com `/doctor dashboard setup` se for exposto. A substituição é ativa imediatamente.
- Revisem os relatórios e as imagens antes de enviá-las a qualquer pessoa.

Nunca coloque um token de painel de controle em um problema público, canal Discord ou exemplo de configuração. Se você não precisar de acesso à web, desative `doctor.dashboard.enabled` e reinicie.
