---
description: "支持了通用版的客户设置."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# 配置参考

这个参考涵盖了万维版的 `plugins/MRKDoctor/config.yml` . 除非您已验证了设置的重载行为,否则在编辑后重新启动.

| 设置 | 默认 | 目的 |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | 标签用于这个服务器. |
| `doctor.performance.healthy-sample-seconds` | `15` | 在正常运行期间监测间隔. |
| `doctor.performance.incident-sample-seconds` | `5` | 在事件期间的监控间隔. |
| `doctor.changes.enabled` | `true` | 启用最近变化监测. |
| `doctor.changes.interval-seconds` | `30` | 检查变化间隔;至少使用10秒. |
| `doctor.changes.max-file-bytes` | `1048576` | 详细的文本文件比较的尺寸限制. |
| `doctor.dashboard.enabled` | `true` | 启用仪表板连接. |
| `doctor.dashboard.bind` | `0.0.0.0` | 听听服务器配置. 访问必须通过同一主机反转代理时使用 `127.0.0.1` . |
| `doctor.dashboard.port` | `7854` | 嵌入式仪表板及其验证 API 所使用的单端口. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | 对于高级代理部署,可选允许的来源;相同来源的访问不需要单独的前端地址. |
| `doctor.dashboard.token-hash` | 没有任何东西 | 由 `/doctor dashboard setup`管理;不要手动编辑. |
| `storage.raw-retention-hours` | `24` | 详细的计量历史的保留期. |
| `logging.debug` | `false` | 默认情况下留下;它不允许在本版本中进行额外的记录. |

使用正面监测间隔和有效仪表板端口.减少间隔增加监测工作;首先在测试服务器上进行测试变化.

{% hint style="warning" %}
不要将仪表板代币粘贴到配置示例中.通过命令生成凭证,并保护诊断端口.
{% endhint %}
