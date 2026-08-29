---
description: "让员工只能获得他们需要的机会."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# 许可证

所有MRK Doctor权限都是默认操作员的.每一个命令都需要 `mrkdoctor.view` ,包括具有额外的权限的命令.

| 许可 | 访问 |
| --- | --- |
| `mrkdoctor.view` | 查看诊断,列出事件和变化,创建快照,并进行许可/命令检查. |
| `mrkdoctor.report` | 创建报告. |
| `mrkdoctor.dashboard` | 查看仪表板连接详情,并取代其凭证. |
| `mrkdoctor.admin` | 管理访问,包括重装和上述许可. |

{% hint style="warning" %}
对于普通玩家,不要授予诊断权限. 报告和连接设置可能包含敏感信息.
{% endhint %}

预留的节点 `mrkdoctor.trace`, `mrkdoctor.rollback`和 `mrkdoctor.update` 不会在本版本中解锁追踪,反弹或自动更新.
