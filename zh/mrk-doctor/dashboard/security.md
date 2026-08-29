---
description: "保持诊断访问私密."
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# 仪表板安全

- 只有与可信的管理员共享访问.
- 使用HTTPS为网络仪表板,并安全连接到其服务.
- 当服务运行在同一主机时,保持默认本地绑定.
- 通过防火墙和代理规则保护托管的配置.
- 如果被曝光,用 `/doctor dashboard setup` 旋转代币.
- 在发送给任何人之前,请检查报告和截图.

永远不要将仪表板代币粘贴到公共问题,Discord频道或配置示例中.如果您不需要网页访问,请禁用 `doctor.dashboard.enabled` 并重新启动.
