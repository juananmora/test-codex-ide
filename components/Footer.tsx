import React from "react";

export default function Footer() {
  const latestNews = {
    title: "Next.js 15",
    url: "https://nextjs.org/blog/next-15",
    source: "Next.js Blog",
    publishedAt: "October 21, 2024",
  };

  return (
    <footer className="px-6 py-12 text-center text-sm text-gray-600 dark:text-gray-400 mt-24 bg-[#f3e8d8] dark:bg-gray-900/40 border-t border-[#e4d5c2] dark:border-gray-800">
      <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-[#e1d1bd] bg-[#fbf4ea]/95 p-5 text-left shadow-sm dark:border-gray-800 dark:bg-gray-950/70">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          Latest News
        </p>
        <a
          href={latestNews.url}
          target="_blank"
          rel="noreferrer"
          className="mt-2 block text-base font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 transition hover:decoration-gray-900 dark:text-gray-100 dark:decoration-gray-700 dark:hover:decoration-gray-100"
        >
          {latestNews.title}
        </a>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Source: {latestNews.source} | Published: {latestNews.publishedAt}
        </p>
      </div>

      <p>
        Copyright © AGENTS.md a Series of LF Projects, LLC
        <br />
        For web site terms of use, trademark policy and other project policies please see{" "}
        <a
          href="https://lfprojects.org"
          target="_blank"
          rel="noreferrer"
          className="underline hover:no-underline"
        >
          https://lfprojects.org
        </a>
        .
      </p>
    </footer>
  );
}
