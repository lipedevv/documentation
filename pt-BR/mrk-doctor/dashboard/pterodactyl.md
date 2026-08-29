---
description: "Prepare alocações de hospedagem para o painel de instrumentos."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


<a id="pterodactyl-hosting"></a>
# Hospedagem com Pterodactyl

Selecione uma alocação disponível no seu painel de servidor, como `7854`, e configure `doctor.dashboard.port` para essa porta. Não é necessário nenhum aplicativo web separado ou segunda alocação.

Use o endereço de escuta exigido pela rede da hospedagem. O endereço local de um contêiner não pode ser acessado a partir de outro contêiner. Se a host exigir `0.0.0.0`, proteja a alocação com firewall ou proxy seguro antes de habilitar o acesso.

A dashboard é servida diretamente pelo plugin. Siga a [configuração inicial](initial-setup.md), reinicie após alterar o endereço de escuta ou a porta e teste a página usando o endereço atribuído.

{% hint style="warning" %}
Não exponha uma porta sem proteção para resolver um problema de conexão. Se o seu plano não permitir selecionar ou expor uma alocação, somente a hospedagem poderá tornar uma porta de entrada acessível; o plugin não consegue ignorar o firewall da host.
{% endhint %}
