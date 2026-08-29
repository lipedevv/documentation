---
description: "Webダッシュボードへの安全なアクセスを設定する."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# 機動板を接続する

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### 認証書を作成する
`/doctor dashboard setup` を操作者として実行し,すぐに表示されたトークンをコピーして安全に保存します.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### アドレスを設定する
`plugins/MRKDoctor/config.yml`では,割り当てられたポートに `doctor.dashboard.port` を設定します. 既定 `0.0.0.0` 結合はサーバー割り当てで聴きます.同じホストのリバースプロキシが唯一の直接クライアントである場合,それを `127.0.0.1` に変更します.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### 埋め込みダッシュボードを開く
`http://SERVER_ADDRESS:PORT` をブラウザで開き,トークンを入力します.ダッシュボード UI,API,および自動更新は,この単一の設定ポートを使用します.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### 接続設定変更後のみ再起動する
新生成されたトークンはすぐにアクティブになります. 結合アドレス,ポート,または有効状態を変更した後にのみ Minecraft サーバを再起動します.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
診断ポートを公共インターネットで保護されていないまま放置しないでください.信頼性の高いリバースプロキシ, TLS,ファイアウォールでリモートアクセスを保護してください. Web-Origin設定を認証の代替として扱わないでください.
{% endhint %}

新たにトークンを作成すると,認証証明書がすぐに置き換えられる.信頼されるブラウザを新しいトークンで更新する. [Pterodactyl](pterodactyl.md) と [セキュリティ](security.md)を参照.
