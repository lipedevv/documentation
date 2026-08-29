---
description: "Verificações práticas para problemas comuns."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# Resolução de problemas

<a id="plugin-will-not-start"></a>
## Plugin não vai iniciar

Confirme que você instalou a edição correta e apenas uma MRK Doctor JAR. Verifique os requisitos do servidor Java , espaço em disco livre, permissões de arquivo e o primeiro erro relevante do console. Reinicie normalmente após corrigir o problema.

<a id="server-is-lagging-or-shows-errors"></a>
## O servidor está atrasado ou mostra erros

Registre quando o problema começou. Verifique `/doctor status`, incidentes abertos e alterações recentes. Revise os erros do console do plugin afetado, em seguida, [crie um relatório](../reports/creating-reports.md). Teste uma alteração reversível de cada vez usando um backup.

<a id="dashboard-will-not-connect"></a>
## O painel não se conecta

Confirme que MRK Doctor está habilitado e abra o endereço do painel de controle embuxado configurado. Verifique o endereço de ligação, alocação de hospedagem única, firewall, rota de proxy e porta configurada. Um token recém-gerado é ativo imediatamente. Nunca desative a segurança ou expõe um porto sem restrições como solução.

<a id="a-player-cannot-use-a-command"></a>
## Um jogador não pode usar um comando

Check the exact command, the player's permission, world restrictions, and the owning plugin's configuration. Follow [permission checks](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## A memória continua a aumentar

Observe o uso ao longo do tempo e compare-o com a atividade do jogador. Uma leitura alta não é prova de uma fuga ou propriedade de plugins. Use as ferramentas de perfil do seu servidor suportadas quando for necessário mais detalhes.

<a id="reports-or-history-are-unavailable"></a>
## Relatórios ou histórico não estão disponíveis

Verifique o espaço de disco livre e as permissões de leitura/escritura para `plugins/MRKDoctor/`. Pare o servidor e faça backup da pasta completa antes de tentar reparar. Não excluir arquivos de dados para solucionar problemas sem um backup verificado.

<a id="monitoring-overhead-seems-high"></a>
## Os custos de monitorização parecem altos .

Return monitoring intervals to their defaults, avoid tracking unnecessarily large text files, and compare performance under similar load. If it persists, send relevant logs and settings through [support](../../support.md), without credentials.
