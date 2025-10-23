import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-24 text-center">
        <div className="inline-block mb-4">
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
        </div>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-700 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent pb-2">
          1mm Tech Blogへようこそ
        </h2>
        <p className="text-xl text-emerald-800 dark:text-emerald-200 max-w-2xl mx-auto leading-relaxed">
          少しずつでも、確実に成長していく場所。
        </p>
      </div>

      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-8 text-emerald-900 dark:text-emerald-100 flex items-center gap-3">
          <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-sm">📚</span>
          最新の記事
        </h3>
        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative bg-white dark:bg-emerald-950 border-2 border-emerald-100 dark:border-emerald-800 rounded-xl p-6 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-green-500 rounded-l-xl"></div>
              <Link href={`/posts/${post.slug}`} className="block">
                <h4 className="text-2xl font-bold mb-3 text-emerald-900 dark:text-emerald-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h4>
                {post.excerpt && (
                  <p className="text-emerald-700 dark:text-emerald-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex gap-4 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                  <time className="flex items-center gap-1">
                    <span>📅</span>
                    {post.date}
                  </time>
                  {post.category && (
                    <span className="flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900 px-3 py-1 rounded-full">
                      <span>🏷️</span>
                      {post.category}
                    </span>
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
