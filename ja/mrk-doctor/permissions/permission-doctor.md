---
description: "オンラインプレーヤーのアクセス問題について調査する"
icon: user-shield
---

> [English source](../../../mrk-doctor/permissions/permission-doctor.md) · [Language home](../../README.md) · Machine-translated edition


<a id="check-permissions-and-commands"></a>
# 許可とコマンドをチェック

ターゲットプレイヤーがオンラインで 名前を使えばいい

```text
/doctor permission Steve essentials.warp
/doctor command Steve warp
```

最初のコマンドは指定された許可を確認します.第2コマンドはコマンドのプラグインを識別しアクセスを確認します.追加的な議論なしにコマンド名をのみ提供します.

アクセスが失敗している場合は,コマンドの構文,許可グループ設定,世界制限,冷却をチェックしてください.MRK Doctor はプレイヤーの許可を変更したり,許可管理者を置き換えない.

このチェックは `mrkdoctor.view`を持つユーザーに利用可能なので,そのノードを信頼されるスタッフのみに許可してください.
