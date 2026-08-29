---
description: "設置を妨害せずに設定を調整します"
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# 構成

YAMLを認識するテキスト編集器で `plugins/MRKDoctor/config.yml` を編集する.まずバックアップしてインデントを保存する.

デフォルト設定は良い出発点です.サーバーのラベル,モニタリング間隔,ダッシュボードアクセス,または履歴保存などの必要な設定のみを変更してください.

`/doctor dashboard setup` によって生成されるダッシュボード認証は,すぐにアクティブになります. 結合アドレス,ポート,有効状態,またはモニタリング設定を変更した後,再起動します. `/doctor reload` は,接続およびライフサイクル変更の完全な再起動の代わりではありません.

ユニバーサル版では [構成参照](../reference/configuration.md) を使用する.他のバージョンからの追加設定をコピーしないでください.新しい機能が有効になると仮定する.
