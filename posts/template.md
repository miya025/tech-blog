---
title: ""
date: "2025-10-18"
category: "Tech Blog"
excerpt: "このブログでは技術に関する様々な情報を発信していきます。"
---

導入

## 大見出し

### 1. 小見出し

ブログのような静的コンテンツには、ビルド時にHTMLを生成するSSGが最適です。

```typescript
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

### 2. 小見出し

`app`ディレクトリ内のファイル構造がそのままルーティングになります。
![スクリーンショットの説明](/images/スクリーンショット 2025-10-20 23.55.51.png)

### 3. ファイルベースルーティング

## 大見出し


## まとめ

