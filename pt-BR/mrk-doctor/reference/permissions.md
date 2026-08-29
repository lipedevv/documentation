---
description: "Dê ao pessoal apenas o acesso que eles precisam."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# Permissões

Todas as permissões MRK Doctor são padrão para os operadores. `mrkdoctor.view` é necessário para todos os comandos, incluindo aqueles com uma permissão adicional.

| Permissão | Acesso |
| --- | --- |
| `mrkdoctor.view` | Visualizar diagnósticos, listar incidentes e alterações, criar instantâneos e realizar verificações de permissões/comanda. |
| `mrkdoctor.report` | Criar relatórios. |
| `mrkdoctor.dashboard` | Veja os detalhes da conexão do painel de instrumentos e substitua a sua credencial. |
| `mrkdoctor.admin` | Acesso administrativo, incluindo recarregamento e as autorizações acima indicadas. |

{% hint style="warning" %}
Não conceder permissões de diagnóstico a jogadores comuns.
{% endhint %}

Os nós reservados `mrkdoctor.trace`, `mrkdoctor.rollback`e `mrkdoctor.update` não desbloqueam rastreamento, retrocesso ou atualizações automáticas nesta versão.
