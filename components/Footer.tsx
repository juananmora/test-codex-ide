import React from "react";

export default function Footer() {
  const latestNews = {
    title: "Next.js Security Update: December 11, 2025",
    url: "https://nextjs.org/blog/security-update-2025-12-11",
    source: "Next.js Blog",
    publishedAt: "December 11, 2025",
  };

  return (
    <footer className="px-4 pb-10 pt-4 text-center text-sm text-[var(--muted)] sm:px-6">
      <div className="section-surface mx-auto mb-6 max-w-[1440px] px-6 py-8 sm:px-8">
        <div className="mx-auto mb-8 max-w-3xl rounded-[24px] border border-[var(--border)] bg-[var(--surface-subtle)]/80 p-5 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Latest News
          </p>
          <a
            href={latestNews.url}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-base font-semibold text-gray-900 underline decoration-black/25 underline-offset-4 transition hover:decoration-black dark:text-gray-100 dark:decoration-white/25 dark:hover:decoration-gray-100"
          >
            {latestNews.title}
          </a>
          <p className="mt-2 text-sm text-[var(--muted)]">
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
      </div>
    </footer>
  );
}
