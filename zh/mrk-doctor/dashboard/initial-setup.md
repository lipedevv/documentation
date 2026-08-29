---
description: "配置安全访问网页仪表板."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# 连接仪表板

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### 创建一个凭证
运行 `/doctor dashboard setup` 作为运营商,立即复制显示的代币,并安全存储.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### 配置地址
在 `plugins/MRKDoctor/config.yml`中,设置 `doctor.dashboard.port` 为分配端口.默认的 `0.0.0.0` 绑定在服务器配置上听;当同一主机上的反向代理是唯一直接客户端时,将其更改为 `127.0.0.1` .
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### 打开嵌入式仪表板
在浏览器中打开 `http://SERVER_ADDRESS:PORT` ,然后输入代币.仪表板UI,API和自动更新使用这个单个配置端口.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### 只有在连接设置变更后重新启动
新生成的代币即可启动. 只有改变绑定地址,端口或启用状态后重新启动 Minecraft 服务器.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
通过可靠的反向代理, TLS,以及防火墙保护远程访问.不要把网源设置作为身份验证的替代品.
{% endhint %}

创建另一个代币立即取代了凭证. 更新可信的浏览器新代币. 查看 [Pterodactyl](pterodactyl.md) 和 [安全](security.md).
