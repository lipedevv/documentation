---
description: "Comanda disponível para administradores de servidores."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# Comandações

Todos os comandos exigem `mrkdoctor.view`. Permissões padrão para os operadores. Veja [permissões](permissions.md) antes de delegar acesso.

| Comando | Utilização | Permissão adicional |
| --- | --- | --- |
| `/doctor` | Abra a visão geral do jogo; Mostre o status no console. | — |
| `/doctor status` | Mostrar informações sobre saúde e tempo de execução. | — |
| `/doctor health` | Mostre o mesmo resumo de saúde. | — |
| `/doctor incidents` | Lista de incidentes abertos. | — |
| `/doctor changes` | Mostre as alterações recentes. | — |
| `/doctor timeline` | Mostre a lista de mudanças recentes no Universal. | — |
| `/doctor permission <player> <node>` | Check an online player's permission. | — |
| `/doutor comando <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | Guarda uma imagem de diagnóstico. | — |
| `/doctor report` | Gerar um arquivo de relatório. | `mrkdoctor.report` |
| `/doctor dashboard` | Mostrar o endereço do painel de controle embutidos configurado. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Criar e ativar imediatamente uma nova credencial do painel de instrumentos. | `mrkdoctor.dashboard` |
| `/doctor reload` | Reload valores de configuração; algumas alterações ainda exigem reinicialização. | `mrkdoctor.admin` |

Use nomes exatos de jogadores online para verificações de jogadores. O endereço impresso por `/doctor dashboard` usa o endereço de ligação configurado; substitua `127.0.0.1` ou `0.0.0.0` pelo nome de hospedeiro público ao abrir remotamente.

A edição Paper otimizada também oferece o plugin `/doctor <plugin>` para um resumo do plugin. Este comando não está disponível no Universal.

`/doctor trace` apenas exibe um aviso de disponibilidade nesta versão; não inicia um rastreamento. Não há atualizações automáticas ou comandos de retrocesso.
