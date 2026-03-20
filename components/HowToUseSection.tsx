import Section from "@/components/Section";
import React from "react";

export default function HowToUseSection() {
  const steps = [
    {
      title: "Add AGENTS.md",
      body: (
        <>
          Create an AGENTS.md file at the root of the repository. Most
          coding agents can even scaffold one for you if you ask nicely.
        </>
      ),
    },
    {
      title: "Cover what matters",
      body: (
        <>
          <p className="mb-2">Add sections that help an agent work effectively with your project. Popular choices:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Project overview</li>
            <li>Build and test commands</li>
            <li>Code style guidelines</li>
            <li>Testing instructions</li>
            <li>Security considerations</li>
          </ul>
        </>
      ),
    },
    {
      title: "Add extra instructions",
      body: "Commit messages or pull request guidelines, security gotchas, large datasets, deployment steps: anything you’d tell a new teammate belongs here too.",
    },
    {
      title: "Large monorepo? Use nested AGENTS.md files for subprojects",
      body: (
        <>
          Place another AGENTS.md inside each package. Agents automatically read the nearest file in the directory tree, so the closest one takes precedence and every subproject can ship tailored instructions. For example, at time of writing the main OpenAI repo has 88 AGENTS.md files.
        </>
      ),
    },
  ];


  return (
    <Section
      title="How to use AGENTS.md?"
      className="py-0"
      center
      maxWidthClass="max-w-5xl"
    >
      <div className="mx-auto max-w-3xl text-center section-copy">
        Start with one file at the repo root, then add more specific files only
        where the codebase really benefits from local instructions.
      </div>
      <div className="grid gap-4 text-left md:grid-cols-2">
        {steps.map((s, idx) => (
          <div key={idx} className="step-card p-5">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-subtle)] text-sm font-semibold">
              {idx + 1}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              {idx + 1}. {s.title}
            </h3>
            <div className="text-[var(--muted)]">
              {s.body}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
