---
description: "Ajuste as configurações sem interromper a instalação."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# Configuração

Edicionar `plugins/MRKDoctor/config.yml` com um editor de texto consciente de YAML. Faça um backup primeiro e preserve a inscrição.

A configuração padrão é um bom ponto de partida. Mudar apenas as configurações necessárias, como o rótulo do servidor, intervalos de monitoramento, acesso ao painel de controle ou retenção de histórico.

As credenciais do painel de controle geradas pelo `/doctor dashboard setup` tornam-se ativas imediatamente. Reinicie após a alteração de endereços de ligação, portas, estado habilitado ou configurações de monitoramento. `/doctor reload` não substitui uma reinicialização completa para essas mudanças de conexão e ciclo de vida.

Use a referência de configuração [configuration reference](../reference/configuration.md) para a edição Universal. Não copie configurações adicionais de outra edição e presume que elas ativarão novos recursos.
