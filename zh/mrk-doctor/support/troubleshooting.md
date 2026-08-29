---
description: "实际检查常见问题."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# 解决问题

<a id="plugin-will-not-start"></a>
## 插件不会启动

确认您安装了正确的版本,只安装了一个MRK Doctor JAR. 检查服务器的Java要求,空格磁盘空间,文件权限和第一个相关的控制台错误.

<a id="server-is-lagging-or-shows-errors"></a>
## 服务器滞后或显示错误

记录问题开始时.检查 `/doctor status`,开放事件和最近的变化. 检查受影响插件的控制台错误,然后 [创建报告](../reports/creating-reports.md). 使用备份一次测试一次可逆变更.

<a id="dashboard-will-not-connect"></a>
## 仪表板无法连接

确认MRK Doctor已启用,并打开配置嵌入式仪表板地址.检查绑定地址,单个托管配置,防火墙,代理路线和配置端口.新生成的代币即时激活.永远不禁安全或暴露无限制的端口作为解决方案.

<a id="a-player-cannot-use-a-command"></a>
## 玩家不能使用命令

检查确切的命令,玩家的许可,世界限制和拥有插件的配置. 按照 [许可检查](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## 记忆不断增长

随着时间的推移,观察使用情况,并与玩家活动进行比较.一个高读数并不是泄露或插件所有权的证据.

<a id="reports-or-history-are-unavailable"></a>
## 报告或历史记录不可用

检查空格磁盘空间和读写权限 `plugins/MRKDoctor/`. 在尝试修复之前,停止服务器并备份完整文件.不要删除数据文件,以没有验证备份的情况下解决问题.

<a id="monitoring-overhead-seems-high"></a>
## 监控费用似乎很高

返回监控间隔到默认状态,避免跟踪不必要的大量文本文件,并在类似负载下进行比较.如果它持续,请通过 [支持](../../support.md),没有凭证发送相关日志和设置.
