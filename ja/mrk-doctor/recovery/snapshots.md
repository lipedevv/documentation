---
description: "変更する前に診断情報を把握する"
icon: camera
---

> [English source](../../../mrk-doctor/recovery/snapshots.md) · [Language home](../../README.md) · Machine-translated edition


<a id="save-a-diagnostic-snapshot"></a>
# 診断スナップショットを保存する

`/doctor snapshot`を実行します . コマンドは `plugins/MRKDoctor/snapshots/`で生成されたファイルの経路を報告します .

プラグインの設定を変更する前に,問題調査をする際にスナップショットを保存します. 共有する前に,敏感な情報を探すために,それをレビューしてください.

{% hint style="warning" %}
瞬幕は,診断記録であり,サーバーのバックアップではありません.世界,プラグインファイル,構成,または完全なMRK Doctorデータフォルダを復元することはできません.別々のバックアップを維持します.
{% endhint %}
