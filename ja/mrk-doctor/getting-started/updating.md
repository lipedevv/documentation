---
description: "既存のMRK医師装置を交換する"
icon: arrows-rotate
---

> [English source](../../../mrk-doctor/getting-started/updating.md) · [Language home](../../README.md) · Machine-translated edition


<a id="updating"></a>
# 更新

1. サーバーと `plugins/MRKDoctor/` フォルダをバックアップする
2. サーバーを正常に停止する
3. 古いJARを同じ版の新版に置き換える.
4. リリースノートをレビューし,提供された設定を既存の設定と比較します.
5. サーバを起動して `/doctor status`,ダッシュボード,コンソールを確認する

{% hint style="warning" %}
診断スナップショットはバックアップではありません.欠落した設定オプションが既存のファイルに自動的に追加されると仮定しないでください.
{% endhint %}
