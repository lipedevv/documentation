---
description: "サーバー管理者に利用可能なコマンド"
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# 命令

すべてのコマンドには `mrkdoctor.view`が必要です.操作者にデフォルトで許可があります.アクセス委譲する前に [の許可](permissions.md) を参照してください.

| 指揮 | 使用 | 追加許可 |
| --- | --- | --- |
| `/doctor` | ゲーム内概要を開く. コンソール内の状態を表示する. | — |
| `/doctor status` | 状態とランタイムに関する情報を表示します. | — |
| `/doctor health` | 同じ健康概要を表示します | — |
| `/doctor incidents` | 公開事件をリストする | — |
| `/doctor changes` | 最近の変更を表示する | — |
| `/doctor timeline` | ユニバーサルで最近変更されたリストを表示します | — |
| `/医師の許可 <player> <node>` |オンラインプレイヤーの許可を確認する. | — |
| `/医師の命令 <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | 診断スナップショットを保存する | — |
| `/doctor report` | 報告書ファイルを作成する | `mrkdoctor.report` |
| `/doctor dashboard` | 設定された内蔵ダッシュボードアドレスを表示します. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | 新しいダッシュボードの認証を作成してすぐにアクティブにします. | `mrkdoctor.dashboard` |
| `/doctor reload` | 設定値を再読み込み; いくつかの変更は,再起動が必要となります. | `mrkdoctor.admin` |

`/doctor dashboard` で印刷されたアドレスでは,設定されたバインドアドレスを使用します.リモートで開く際には `127.0.0.1` または `0.0.0.0` を公開ホスト名に置き換えます.

優化された紙版はさらに `/doctorプラグインを提供します <plugin>` プラグインの概要.このコマンドはユニバーサルでは利用できません.

`/doctor trace` は,このリリースで利用可能性通知のみを表示する.追跡を開始しません.自動更新やロールバックコマンドはありません.
