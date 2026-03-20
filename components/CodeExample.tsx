import React from "react";
import ClipboardIcon from "./icons/ClipboardIcon";
import CopyIcon from "./icons/CopyIcon";

interface CodeExampleProps {
  /** Markdown content to display; falls back to default example if not provided */
  code?: string;
  /** Optional URL for "View on GitHub" link */
  href?: string;
  /** If true, render only the code block without the section wrapper */
  compact?: boolean;
  /** Override Tailwind height classes for the <pre> block */
  heightClass?: string;

  /**
   * When true, vertically center the content and copy button – useful for
   * single-line shell commands shown inside a short container (e.g. FAQ).
   */
  centerVertically?: boolean;
}

export const HERO_AGENTS_MD = `# AGENTS.md

## Setup commands
- Install deps: \`pnpm install\`
- Start dev server: \`pnpm dev\`
- Run tests: \`pnpm test\`

## Code style
- TypeScript strict mode
- Single quotes, no semicolons
- Use functional patterns where possible`;

const EXAMPLE_AGENTS_MD = `# Sample AGENTS.md file

## Dev environment tips
- Use \`pnpm dlx turbo run where <project_name>\` to jump to a package instead \
of scanning with \`ls\`.
- Run \`pnpm install --filter <project_name>\` to add the package to your \
workspace so Vite, ESLint, and TypeScript can see it.
- Use \`pnpm create vite@latest <project_name> -- --template react-ts\` to \
spin up a new React + Vite package with TypeScript checks ready.
- Check the name field inside each package's package.json to confirm the \
right name—skip the top-level one.

## Testing instructions
- Find the CI plan in the .github/workflows folder.
- Run \`pnpm turbo run test --filter <project_name>\` to run every check \
defined for that package.
- From the package root you can just call \`pnpm test\`. The commit should \
pass all tests before you merge.
- To focus on one step, add the Vitest pattern: \`pnpm vitest run -t "<test \
name>"\`.
- Fix any test or type errors until the whole suite is green.
- After moving files or changing imports, run \`pnpm lint --filter \
<project_name>\` to be sure ESLint and TypeScript rules still pass.
- Add or update tests for the code you change, even if nobody asked.

## PR instructions
- Title format: [<project_name>] <Title>
- Always run \`pnpm lint\` and \`pnpm test\` before committing.`;

/**
 * Very lightly highlight the Markdown without fully parsing it.
 */
function parseMarkdown(md: string): React.ReactNode[] {
  const lines = md.split("\n");
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle headers
    if (line.startsWith("# ") || line.startsWith("## ") || line.startsWith("### ")) {
      elements.push(
        <div key={i} className="font-bold">
          {line}
        </div>
      );
    } else if (line.startsWith("- ")) {
      // Handle list items with inline code
      elements.push(
        <div key={i}>
          {renderLineWithInlineCode(line)}
        </div>
      );
    } else if (line.trim() === "") {
      // Handle empty lines
      elements.push(<div key={i}>&nbsp;</div>);
    } else {
      // Handle regular lines with inline code
      elements.push(
        <div key={i}>
          {renderLineWithInlineCode(line)}
        </div>
      );
    }
  }

  return elements;
}

/**
 * Render a line with inline code highlighting
 */
function renderLineWithInlineCode(line: string): React.ReactNode {
  const parts = line.split(/(`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      // This is inline code
      return (
        <span
          key={index}
          className="rounded bg-black/6 px-1.5 py-0.5 text-black dark:bg-white/12 dark:text-white"
        >
          {part}
        </span>
      );
    }
    // Regular text
    return part;
  });
}

/**
 * Markdown block for AGENTS.md examples.
 */
export default function CodeExample({
  code,
  href,
  compact = false,
  heightClass,
  centerVertically = false,
}: CodeExampleProps) {
  const md = code ?? EXAMPLE_AGENTS_MD;
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(md);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  const content = (
    <>
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className={`absolute right-3 z-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--muted)] transition-colors hover:bg-[var(--surface-subtle)] cursor-pointer ${
            centerVertically ? "top-1/2 -translate-y-1/2" : "top-3"
          }`}
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <CopyIcon className="w-4 h-4" />
          )}
        </button>
        <pre
          className={`code-surface relative overflow-x-auto p-5 text-xs leading-6 text-black dark:text-white ${
            centerVertically ? "flex items-center" : ""
          } ${
            heightClass
              ? heightClass
              : compact
              ? ""
              : "min-h-[250px] max-h-[500px]"
          }`}
        >
          <code>
            {parseMarkdown(md)}
          </code>
        </pre>
      </div>
    </>
  );

  if (compact) {
    return <div className="w-full">{content}</div>;
  }

  return (
    <section className="px-6 pt-10 pb-24">
      <div className="section-surface mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8 sm:px-8">
        <h2 className="section-heading">
          AGENTS.md in action
        </h2>
        {content}
      </div>
    </section>
  );
}
