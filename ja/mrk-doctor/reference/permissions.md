---
description: "スタッフに必要なアクセスのみを与えます"
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# 許可

すべてのMRK Doctor許可は,操作者にデフォルトで与えられます.追加許可を持つコマンドを含むすべてのコマンドには `mrkdoctor.view` が必要です.

| 許可 | アクセス |
| --- | --- |
| `mrkdoctor.view` | 診断を表示し,事件や変更をリストし,スナップショットを作成し,許可/コマンドチェックを実行します. |
| `mrkdoctor.report` | 報告を作成する |
| `mrkdoctor.dashboard` | ダッシュボード接続の詳細を表示し,その認証を交換します. |
| `mrkdoctor.admin` | 管理アクセス,再充電および上記の許可を含む. |

{% hint style="warning" %}
普通のプレイヤーに診断許可を許さない.レポートや接続設定には敏感な情報が含まれることがあります.
{% endhint %}

予約されたノード `mrkdoctor.trace`, `mrkdoctor.rollback`,および `mrkdoctor.update` は,このリリースで追跡,ロールバック,または自動更新をロックしていません.
