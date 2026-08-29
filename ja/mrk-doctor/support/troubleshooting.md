---
description: "共通問題に対する実践的なチェック"
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# トラブルシューティング

<a id="plugin-will-not-start"></a>
## プラグインが起動しない

サーバーのJava要件,ディスク空格,ファイル権限,および最初の関連コンソールエラーを確認します.問題を修正した後,通常を再起動します.

<a id="server-is-lagging-or-shows-errors"></a>
## サーバーが遅れているかエラーが表示されている

問題を開始した時の記録. `/doctor status`,開いた事件,最近の変更を確認. 影響を受けたプラグインのコンソールエラーをレビューし,その後 [はレポートを作成します](../reports/creating-reports.md). バックアップを使用して一度に逆転可能な変更をテストします.

<a id="dashboard-will-not-connect"></a>
## ダッシュボードは接続できません

MRK Doctor が有効になっていることを確認し,構成された埋め込みダッシュボードアドレスを開きます. 結合アドレス,シングルホスティング割り当て,ファイアウォール,プロキシルート,構成されたポートを確認します.新しく生成されたトークンはすぐにアクティブになります.セキュリティを無効にし,制限のないポートを解決方法として決して露出しないでください.

<a id="a-player-cannot-use-a-command"></a>
## プレイヤーはコマンドを使用することはできません

命令,プレイヤーの許可,世界制限,および所有者プラグインの設定を正確に確認してください. [許可チェックを](../permissions/permission-doctor.md)に従います.

<a id="memory-keeps-increasing"></a>
## 記憶はどんどん増える

ユーザーを時間とともに観察し,プレイヤーの活動と比較する.高値の読み上げは,漏洩やプラグイン所有権の証明ではありません.詳細が必要に応じてサーバーのサポートされたプロフィール作成ツールを使用してください.

<a id="reports-or-history-are-unavailable"></a>
## 報告や履歴は利用できません

`plugins/MRKDoctor/`の空きディスクスペースと読み書き許可を確認してください.サーバーを停止し,修復を試みる前に完全なフォルダをバックアップしてください.確認されたバックアップなしで問題を解決するためにデータファイルを削除しないでください.

<a id="monitoring-overhead-seems-high"></a>
## 監視費は高くなっているようです

監視間隔をデフォルトに戻して,不必要な大きなテキストファイルを追跡するのを避けるし,同様の負荷下でパフォーマンスを比較する.継続した場合,認証情報なしで [サポート](../../support.md)による関連ログと設定を送信してください.
