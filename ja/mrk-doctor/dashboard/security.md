---
description: "診断アクセスが秘密にして"
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# ダイッシュボードセキュリティ

- 信頼される管理者のみにアクセス共有します.
- ウェブダッシュボードに HTTPS を使用し,そのサービスへの接続を安全にします.
- サービスが同じホストで実行される場合,デフォルトローカルバインドを保持します.
- ファイアウォールとプロキシルでホストされた割り当てを保護する.
- Rotate the token with `/doctor dashboard setup` if it is exposed. The replacement is active immediately.
- 報告やスクリーンショットを 誰にも送る前に見直す

公共の問題, Discord チャンネル,または構成例にダッシュボードトークンを貼ってはいけません.Web アクセスを必要としない場合は, `doctor.dashboard.enabled` を無効にし,再起動してください.
