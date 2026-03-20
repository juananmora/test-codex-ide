import React from "react";

import ClipboardIcon from "@/components/icons/ClipboardIcon";
import CopyIcon from "@/components/icons/CopyIcon";
import {
  LANDING_PAGE_MARKDOWN,
  LANDING_PAGE_MARKDOWN_FILENAME,
} from "@/components/landingPageMarkdown";

function DownloadIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 3V14M12 14L7.5 9.5M12 14L16.5 9.5M4 16.5V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V16.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export default function PageMarkdownActions() {
  const [copyLabel, setCopyLabel] = React.useState("Copy as Markdown");
  const [downloadLabel, setDownloadLabel] = React.useState("Download Markdown");

  const handleCopy = async () => {
    try {
      await copyText(LANDING_PAGE_MARKDOWN);
      setCopyLabel("Copied");
      window.setTimeout(() => setCopyLabel("Copy as Markdown"), 2000);
    } catch (error) {
      console.error("Failed to copy page markdown:", error);
      setCopyLabel("Copy failed");
      window.setTimeout(() => setCopyLabel("Copy as Markdown"), 2000);
    }
  };

  const handleDownload = () => {
    try {
      const blob = new Blob([LANDING_PAGE_MARKDOWN], {
        type: "text/markdown;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = LANDING_PAGE_MARKDOWN_FILENAME;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setDownloadLabel("Downloaded");
      window.setTimeout(() => setDownloadLabel("Download Markdown"), 2000);
    } catch (error) {
      console.error("Failed to download page markdown:", error);
      setDownloadLabel("Download failed");
      window.setTimeout(() => setDownloadLabel("Download Markdown"), 2000);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleDownload}
        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
      >
        <DownloadIcon />
        {downloadLabel}
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
      >
        {copyLabel === "Copied" ? (
          <ClipboardIcon className="w-4 h-4" />
        ) : (
          <CopyIcon className="w-4 h-4" />
        )}
        {copyLabel}
      </button>
    </>
  );
}
