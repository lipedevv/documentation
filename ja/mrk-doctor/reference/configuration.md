---
description: "ユニバーサル版の顧客設定がサポートされています."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# 構成参照

この参照は,ユニバーサル版の `plugins/MRKDoctor/config.yml` をカバーします.設定のリロード動作を確認していない限り,編集後に再起動します.

| 設定 | デフォルト | 目的 |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | このサーバーに使用されたラベル |
| `doctor.performance.healthy-sample-seconds` | `15` | 通常の動作中に監視間隔 |
| `doctor.performance.incident-sample-seconds` | `5` | 事故の間の監視間隔 |
| `doctor.changes.enabled` | `true` | 最近の変化の監視を可能にします. |
| `doctor.changes.interval-seconds` | `30` | 変更チェック間隔は,少なくとも10秒使用する. |
| `doctor.changes.max-file-bytes` | `1048576` | 詳細なテキストファイル比較のサイズ制限 |
| `doctor.dashboard.enabled` | `true` | ダイシュボード接続を有効にする |
| `doctor.dashboard.bind` | `0.0.0.0` | `127.0.0.1` を使って 同じホストのリバースプロキシを通過する必要があります |
| `doctor.dashboard.port` | `7854` | 埋め込みダッシュボードとその認証された API で使用される単一のポート. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | 進階プロキシ展開のオプション許可された起源;同じ起源のアクセスには別々のフロントエンドアドレスは必要ありません. |
| `doctor.dashboard.token-hash` | 空っぽ | `/doctor dashboard setup`によって管理される; 手動で編集しないでください. |
| `storage.raw-retention-hours` | `24` | 詳細なメトリック履歴の保存期間 |
| `logging.debug` | `false` | 標準で残る.このリリースでは追加ログを許可しません. |

ポジティブな監視間隔と有効なダッシュボードポートを使用します. インターバルを減らせば監視作業が増加します. ステージサーバーでテスト変更を最初にします.

{% hint style="warning" %}
設定例にダッシュボードトークンを貼ってはいけません.コマンドで認証を生成し,診断ポートを保護してください.
{% endhint %}
