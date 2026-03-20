import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 py-12 text-center text-sm text-gray-600 dark:text-gray-400 mt-24 bg-gray-50 dark:bg-gray-900/40 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-black/40 px-5 py-4 text-left shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
            Latest News
          </p>
          <a
            href="https://nextjs.org/blog/security-update-2025-12-11"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-sm font-semibold text-gray-900 dark:text-gray-100 underline hover:no-underline"
          >
            Next.js Security Update: December 11, 2025
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Source: Next.js Blog
            {" · "}
            December 11, 2025
          </p>
        </div>

        <p>
          Copyright © AGENTS.md a Series of LF Projects, LLC
          <br />
          For web site terms of use, trademark policy and other project policies please see{" "}
          <a
            href="https://lfprojects.org"
            target="_blank"
            rel="noopener noreferrer"
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
