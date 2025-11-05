import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1mm Tech Blog",
  description: "技術ブログ - Next.js, React, TypeScriptで構築",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 shadow-lg">
            <nav className="container mx-auto px-4 py-6">
              <h1 className="text-3xl font-bold text-white tracking-tight">
                1mm Tech Blog
              </h1>
            </nav>
          </header>
          <main className="flex-1 container mx-auto px-4 py-12">
            {children}
          </main>
          <footer className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900 dark:to-green-900 border-t border-emerald-200 dark:border-emerald-700">
            <div className="container mx-auto px-4 py-8 text-center">
              <p className="text-sm text-emerald-600 dark:text-emerald-300 font-medium">
                © 2025 1mm Tech Blog. All rights reserved.
              </p>
              <p className="text-xs text-emerald-500 dark:text-emerald-400 mt-2">
                Next.js • React • TypeScript で構築
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
