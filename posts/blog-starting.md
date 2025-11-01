---
title: "Next.jsで作ったブログをVercelにデプロイしてみた"
date: "2025-10-23"
category: "Tech Blog"
excerpt: "このブログでは技術に関する様々な情報を発信していきます。"
---


今回はテックブロックを始めるにあたって、どのに投稿するか迷った結果「Next.js」でブログを構築し、「Vercel」にデプロイすることにしたので流れと学びをまとめていきます。

---

## 🎯 使用技術

- **Next.js** (Reactフレームワーク)
- **TypeScript**
- **Markdownベースの記事管理**
- **Vercel** (ホスティング)
- **Tailwind CSS** (スタイリング)

---

## 🏗 Claude Codeにブログサイト本体を作ってもらう

![](/images/screenshot_2025-10-27_14.15.28.png)
こんな感じの雑な指示でもしっかりしたものを作ってくれました
![]()
<img src="/images/screenshot_2025-10-27_14.16.02.png" width="300">

どんな感じか確認していきます
```bash
npm run dev
```
![](/images/screenshot_2025-10-27_14.16.37.png)

いい感じですね

---

## デプロイする

Vercelにログインして、Githubでデプロイします
![](/images/screenshot_2025-10-27_14.19.18.png)

Add New Project > リポジトリ選択　> インポート　> デプロイ
の流れで行います
<img src="/images/screenshot_2025-10-27_14.19.56.png" width="400">
<img src="/images/名称未設定のデザイン.png" width="600">

成功するとプレビューが表示されます
<img src="/images/screenshot_2025-10-27_14.22.11.png" width="600">



---

## ドメイン設定

Vercelではデプロイが完了すると自動でドメインを設定してもらえるのですが、自分で取得したドメインに変更することも可能です

ドメインを入力しSave
![](/images/screenshot_2025-10-27_14.23.57.png)
契約したサービスの方でこちらのDNSレコードを登録
![](/images/screenshot_2025-10-27_14.26.15.png)


これで完了です。<br>
実は本記事も本記事で作成したブログに投稿してます。<br>
最後までご覧いただきありがとうございました。