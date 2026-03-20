import React from "react";
import Section from "@/components/Section";
import CodeExample from "@/components/CodeExample";
import ExampleListSection from "@/components/ExampleListSection";

interface ExamplesSectionProps {
  contributorsByRepo: Record<string, { avatars: string[]; total: number }>;
}

export default function ExamplesSection({ contributorsByRepo }: ExamplesSectionProps) {
  return (
    <Section id="examples" title="Examples" className="py-0" center maxWidthClass="max-w-6xl">
      <div className="mx-auto max-w-3xl text-center section-copy">
        Browse a representative AGENTS.md file and jump into public repositories
        already using the convention.
      </div>
      <div className="mb-2">
        <CodeExample compact />
      </div>
      <ExampleListSection contributorsByRepo={contributorsByRepo} standalone />
    </Section>
  );
}
