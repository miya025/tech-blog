import Link from "next/link";
import { getPostData, getAllPostSlugs } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.params.slug,
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <article className="max-w-3xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← ホームに戻る
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex gap-4 text-gray-600 dark:text-gray-400">
          <time>{post.date}</time>
          {post.category && (
            <>
              <span>·</span>
              <span>{post.category}</span>
            </>
          )}
        </div>
      </header>

      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />
    </article>
  );
}
