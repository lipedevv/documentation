---
description: "调整设置,而不妨碍安装."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# 配置

编辑 `plugins/MRKDoctor/config.yml` 使用YAML知情的文本编辑器.

默认配置是一个很好的出发点.只需要更改设置,如服务器标签,监控间隔,仪表板访问或历史记录保存.

通过 `/doctor dashboard setup` 生成的仪表板凭证立即被激活. 改变绑定地址,端口,启用状态或监控设置后重新启动. `/doctor reload` 不是替代这些连接和生命周期变化的全面重新启动.

对于通用版使用 [配置参考](../reference/configuration.md) .不要复制其他版本的额外设置,并假设它们将启用新的功能.
