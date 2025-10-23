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
      <Link
        href="/"
        className="group inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium mb-8 transition-colors"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        ホームに戻る
      </Link>

      <header className="mb-12 pb-8 border-b-2 border-emerald-100 dark:border-emerald-800">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-800 to-green-700 dark:from-emerald-300 dark:to-green-300 bg-clip-text text-transparent leading-tight">
          {post.title}
        </h1>
        <div className="flex gap-4 text-sm">
          <time className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-lg font-medium">
            <span>📅</span>
            {post.date}
          </time>
          {post.category && (
            <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg font-medium shadow-md">
              <span>🏷️</span>
              {post.category}
            </span>
          )}
        </div>
      </header>

      <div
        className="article-content prose prose-emerald dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />
    </article>
  );
}
