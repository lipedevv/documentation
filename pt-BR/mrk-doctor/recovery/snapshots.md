---
description: "Captar informações de diagnóstico antes de fazer alterações."
icon: camera
---

> [English source](../../../mrk-doctor/recovery/snapshots.md) · [Language home](../../README.md) · Machine-translated edition


<a id="save-a-diagnostic-snapshot"></a>
# Salvar uma imagem de diagnóstico

Execute `/doctor snapshot`. O comando informa o caminho do arquivo gerado em `plugins/MRKDoctor/snapshots/`.

Mantenha uma imagem instantânea ao investigar um problema ou antes de mudar a configuração de um plugin.

{% hint style="warning" %}
Um snapshot é um registro de diagnóstico, não um backup do servidor. Não pode restaurar mundos, arquivos de plugins, configuração ou a pasta de dados completa MRK Doctor . Manter backups separados.
{% endhint %}
