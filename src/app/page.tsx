import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">
          1mm Tech Blogへようこそ
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Next.js、React、TypeScriptで構築された技術ブログです
        </p>
      </div>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-6">最新の記事</h3>
        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <Link href={`/posts/${post.slug}`} className="group">
                <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                  {post.title}
                </h4>
                {post.excerpt && (
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex gap-3 text-sm text-gray-500">
                  <time>{post.date}</time>
                  {post.category && (
                    <>
                      <span>·</span>
                      <span>{post.category}</span>
                    </>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
