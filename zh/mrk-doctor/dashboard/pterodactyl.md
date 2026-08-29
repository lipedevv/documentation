---
description: "准备为仪表板的托管分配."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


# Pterodactyl hosting

在服务器面板中选择一个可用的配置,例如 `7854`,并设置 `doctor.dashboard.port` 为该端口.不需要单独的网络应用程序或第二个配置.

使用您的托管网络所要求的绑定地址. 容器的本地托管地址不能从单独的容器中访问. 如果您的托管需要 `0.0.0.0`,在启用访问之前,请确保其防火墙或安全代理保护分配.

网页仪表板由插件直接提供. 按照 [初始设置](initial-setup.md),在改变绑定地址或端口后重新启动,并使用分配的地址测试页面.

{% hint style="warning" %}
如果您的计划不允许您选择或暴露分配,只有托管提供商才能让入口仪表板端口可访问;插件不能绕过托管器的防火墙.
{% endhint %}
