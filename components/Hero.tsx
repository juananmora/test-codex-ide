import React from "react";
import CodeExample, { HERO_AGENTS_MD } from "@/components/CodeExample";
import GitHubIcon from "@/components/icons/GitHubIcon";
import PageMarkdownActions from "@/components/PageMarkdownActions";

export default function Hero() {
  return (
    <header className="hero-surface overflow-hidden px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
      <div className="grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-stretch">
        <div className="flex max-w-2xl flex-col items-start text-left">
          <span className="eyebrow">Open Standard For Coding Agents</span>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-black sm:text-6xl lg:text-7xl dark:text-white">
            AGENTS.md gives coding agents the context they actually need.
          </h1>

          <p className="section-copy mt-6 max-w-2xl text-lg">
            A simple, open format for guiding coding agents,{" "}
            used by over{" "}
            <a
              href="https://github.com/search?q=path%3AAGENTS.md+NOT+is%3Afork+NOT+is%3Aarchived&type=code"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black underline decoration-black/25 underline-offset-4 hover:decoration-black dark:text-white dark:decoration-white/25 dark:hover:decoration-white"
            >
              60k open-source projects
            </a>
            .
          </p>

          <p className="section-copy mt-4 max-w-2xl pr-4">
            Think of AGENTS.md as a <strong>README for agents</strong>: a dedicated,
            predictable place to store build steps, conventions, and project
            context so assistants can work with the same shared understanding as
            your team.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-full border border-[var(--border)] bg-[var(--surface-subtle)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
              Markdown-native
            </div>
            <div className="rounded-full border border-[var(--border)] bg-[var(--surface-subtle)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
              Tool-agnostic
            </div>
            <div className="rounded-full border border-[var(--border)] bg-[var(--surface-subtle)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
              Easy to adopt
            </div>
          </div>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-start">
          <a
            href="#examples"
            className="button-primary"
          >
            Explore Examples
          </a>
          <a
            href="https://github.com/agentsmd/agents.md"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            <GitHubIcon className="w-4 h-4 text-current" />
            View on GitHub
          </a>
          <PageMarkdownActions />
          </div>

          <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="info-card p-4">
              <div className="text-sm font-medium text-[var(--muted)]">Format</div>
              <div className="mt-2 text-lg font-semibold tracking-tight">Human-readable Markdown</div>
            </div>
            <div className="info-card p-4">
              <div className="text-sm font-medium text-[var(--muted)]">Works with</div>
              <div className="mt-2 text-lg font-semibold tracking-tight">CLI, IDE, and hosted agents</div>
            </div>
            <div className="info-card p-4">
              <div className="text-sm font-medium text-[var(--muted)]">Goal</div>
              <div className="mt-2 text-lg font-semibold tracking-tight">Consistent project guidance</div>
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col gap-4">
          <div className="code-surface flex items-center justify-between px-4 py-3 text-sm text-[var(--muted)]">
            <div>
              <div className="font-semibold text-black dark:text-white">Reference file</div>
              <div className="mt-1">A single source of truth for agent instructions</div>
            </div>
            <a
              href="https://github.com/openai/codex/blob/main/AGENTS.md"
              target="_blank"
              rel="noopener noreferrer"
              className="button-ghost !min-h-0 !px-4 !py-2 !text-sm"
            >
              Open example
            </a>
          </div>
          <CodeExample
            compact
            heightClass="min-h-[260px] lg:min-h-[100%]"
            code={HERO_AGENTS_MD}
            href="https://github.com/openai/codex/blob/main/AGENTS.md"
          />
        </div>
      </div>
    </header>
  );
}
