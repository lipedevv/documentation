---
description: "Configurações de cliente suportadas para a edição Universal."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# Referência de configuração

Esta referência abrange `plugins/MRKDoctor/config.yml` na edição Universal. Reinicie após a edição, a menos que você tenha verificado o comportamento de recarga da configuração.

| Definição | Default | Propósito |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | É a etiqueta usada para este servidor. |
| `doctor.performance.healthy-sample-seconds` | `15` | Intervalo de controlo durante a operação normal. |
| `doctor.performance.incident-sample-seconds` | `5` | Intervalo de vigilância durante um incidente. |
| `doctor.changes.enabled` | `true` | Abilitar o controlo das mudanças recentes. |
| `doctor.changes.interval-seconds` | `30` | Intervalo de verificação de mudanças; utilize pelo menos 10 segundos. |
| `doctor.changes.max-file-bytes` | `1048576` | Limite de tamanho para comparações detalhadas de arquivos de texto. |
| `doctor.dashboard.enabled` | `true` | Ativar a conectividade do painel. |
| `doctor.dashboard.bind` | `0.0.0.0` | Ouve a alocação do servidor. Use `127.0.0.1` quando o acesso deve passar por um proxy inverso do mesmo host. |
| `doctor.dashboard.port` | `7854` | Uma única porta utilizada pelo painel de instrumentos incorporado e sua API autenticada. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | Orientação permitida opcional para implementações avançadas de proxy; acesso de mesma origem não requer endereço frontend separado. |
| `doctor.dashboard.token-hash` | Vazio | Gerenciado por `/doctor dashboard setup`; não edite manualmente. |
| `storage.raw-retention-hours` | `24` | Período de retenção para histórico métrico detalhado. |
| `logging.debug` | `false` | Deixe em seu padrão; não permite registro adicional nesta versão. |

Utilize intervalos de monitoramento positivos e uma porta de painel válida.

{% hint style="warning" %}
Não copie o token da dashboard em exemplos de configuração. Gere as credenciais pelo comando e mantenha a porta de diagnóstico protegida.
{% endhint %}
