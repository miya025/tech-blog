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
          <header className="border-b">
            <nav className="container mx-auto px-4 py-4">
              <h1 className="text-2xl font-bold">1mm Tech Blog</h1>
            </nav>
          </header>
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="border-t">
            <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
              © 2025 1mm Tech Blog. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
