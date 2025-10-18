# Tech Blog

Next.js、React、TypeScriptで構築された技術ブログです。

## 技術スタック

- **Next.js 15** - Reactフレームワーク
- **React 19** - UIライブラリ
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - ユーティリティファーストCSS
- **Vercel** - ホスティングプラットフォーム

## 機能

- マークダウンベースの記事管理
- 静的サイト生成（SSG）によるパフォーマンス最適化
- レスポンシブデザイン
- ダークモード対応

## 開発手順

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

### ビルド

```bash
npm run build
```

### 本番サーバー起動

```bash
npm start
```

## 記事の追加方法

`posts`ディレクトリに新しいマークダウンファイル（`.md`）を追加してください。

記事のフロントマター形式：

```markdown
---
title: "記事のタイトル"
date: "2025-10-18"
category: "カテゴリ"
excerpt: "記事の要約"
---

記事の本文をここに書きます。
```

## Vercelへのデプロイ

1. GitHubリポジトリにプッシュ
2. [Vercel](https://vercel.com/)でプロジェクトをインポート
3. 自動的にビルド・デプロイされます

または、Vercel CLIを使用：

```bash
npm install -g vercel
vercel
```

## プロジェクト構成

```
tech-blog/
├── posts/              # マークダウン記事
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── posts/     # 記事ページ
│   │   ├── layout.tsx # ルートレイアウト
│   │   ├── page.tsx   # ホームページ
│   │   └── globals.css
│   └── lib/           # ユーティリティ関数
│       └── posts.ts   # 記事読み込みロジック
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## ライセンス

ISC
