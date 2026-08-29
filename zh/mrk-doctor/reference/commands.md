---
description: "服务器管理员可用的命令."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# 命令

所有命令都需要 `mrkdoctor.view`. 默认允许操作员. 在授权之前,请参阅 [权限](permissions.md) .

| 命令 | 使用 | 额外的许可 |
| --- | --- | --- |
| `/doctor` | 打开游戏中概述;显示控制台中的状态. | — |
| `/doctor status` | 显示最新的健康和运行时间信息. | — |
| `/doctor health` | 显示相同的健康总结. | — |
| `/doctor incidents` | 列出开放事件. | — |
| `/doctor changes` | 显示最近的变化. | — |
| `/doctor timeline` | 显示最近的变更列表在"通用"中. | — |
| `/doctor permission <player> <node>` | Check an online player's permission. | — |
| `/doctor command <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | 保存一个诊断快照. | — |
| `/doctor report` | 创建一个报告文件. | `mrkdoctor.report` |
| `/doctor dashboard` | 显示配置的嵌入式仪表板地址. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | 创建并立即激活一个新的仪表板凭证. | `mrkdoctor.dashboard` |
| `/doctor reload` | 重载配置值;有些变化仍然需要重启. | `mrkdoctor.admin` |

通过 `/doctor dashboard` 打印的地址使用配置的绑定地址;在远程打开时,取代 `127.0.0.1` 或 `0.0.0.0` 的公共主机名称.

优化版还提供了 `/doctor插件 <plugin>`为插件总结.这个命令不存在于通用中.

在本版本中,`/doctor trace` 只显示可用性通知;它不会开始追踪.没有自动更新或反弹命令.
