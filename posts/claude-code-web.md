---
title: "Claude Code on the web使ってみた"
date: "2025-11-06"
category: "Tech Blog"
excerpt: "ブラウザ上でClaude Codeを使ってGitHub連携でブログ記事を作成してみました。"
thumbnail: "/images/claude-code-web/screenshot 2025-11-15 20.24.28.png"
---


こんなメールが届いていました。無料でクレジットを沢山くれたみたいなのでClaude Code on the Webで当ブログサイトのデザイン改修を行ってみます

<img src="/images/claude-code-web/screenshot_2025-11-05_19.49.40.png" width="600">

---

## 🎯 Claude Code on the webとは

**Claude Code on the web**は、Anthropicが提供するブラウザベースのAI開発アシスタントです。従来のClaude Codeはデスクトップアプリケーションでしたが、Web版ではブラウザから直接利用できるようになりました。

主な特徴：
- **ブラウザベース** - インストール不要でどこからでもアクセス可能
- **GitHub連携** - リポジトリと直接連携して開発可能
- **リアルタイム編集** - ファイルの作成・編集・コミット・プッシュまで一貫して実行
- **日本語対応** - 日本語での指示にも自然に対応

---

## 実際に使用してみる

Claude Code on the webでは、GitHubリポジトリと連携することで、直接ブランチを作成してコード編集ができます。

今回は以下の流れで作業しました：

1. GitHubアカウントでログイン、セットアップ
<img src="/images/claude-code-web/screenshot_2025-11-05_19.50.05.png" width="600">

2. 対象リポジトリを選択
<img src="/images/claude-code-web/screenshot_2025-11-05_19.50.19.png" width="600">

3. 記事作成を依頼
<img src="/images/claude-code-web/screenshot_2025-11-05_19.54.33.png" width="600">

4. コミット・プッシュ
なんか出たのでインストールします
<img src="/images/claude-code-web/screenshot_2025-11-05_19.54.50.png" width="600">

PR作成&merge
<img src="/images/claude-code-web/screenshot_2025-11-05_21.33.06.png"
width="600">

<img src="/images/claude-code-web/screenshot_2025-11-05_21.33.28.png" width="600">

結果↓
<img src="/images/claude-code-web/screenshot_2025-11-05_19.52.20.png" width="600">

<img src="/images/claude-code-web/screenshot_2025-11-05_22.06.42.png" width="600">

ご覧の通り、修正は反映されたのですが分かりにくいので、サムネイル機能を追加で実装します


<img src="/images/claude-code-web/screenshot_2025-11-08_18.16.42.png" width="600">

<img src="/images/claude-code-web/screenshot_2025-11-08_18.22.05.png" width="600">

<img src="/images/claude-code-web/screenshot_2025-11-08_19.21.57.png" width="600">

いい感じですね！


## 💡 便利だと感じたポイント

### 1. セットアップ不要

ブラウザだけあれば使えるため、別のPCからでもすぐに作業を開始できます。開発環境の構築が不要なのは大きなメリットです。

### 2. コンテキスト理解

既存のファイル構造やコーディングスタイルを自動的に理解して、それに合わせた提案をしてくれます。

### 3. Git操作

ブランチ作成、コミット、プッシュといったGit操作をGUIで行うため、直感的で分かりやすいです。

### 4. スマホで使用可能

スマホでも操作可能なので、影響範囲が少ない修正を移動時間などに進められるのはアリだなと個人的に思いました。

---

## 🤔 注意点

### ネットワーク接続必須

ブラウザベースのため、安定したインターネット接続が必要です。オフラインでは使用できません。

### リポジトリへのアクセス権限

GitHub連携時には適切なアクセス権限の設定が必要です。

---

<br>

興味のある方はぜひ試してみてください！

最後までご覧いただきありがとうございました。
