import React from "react";
import Section from "@/components/Section";
import CodeExample from "@/components/CodeExample";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const faqItems: FAQItem[] = [
    {
      question: "Are there required fields?",
      answer:
        "No. AGENTS.md is just standard Markdown. Use any headings you like; the agent simply parses the text you provide.",
    },
    {
      question: "What if instructions conflict?",
      answer:
        "The closest AGENTS.md to the edited file wins; explicit user chat prompts override everything.",
    },
    {
      question: "Will the agent run testing commands found in AGENTS.md automatically?",
      answer:
        "Yes—if you list them. The agent will attempt to execute relevant programmatic checks and fix failures before finishing the task.",
    },
    {
      question: "Can I update it later?",
      answer: "Absolutely. Treat AGENTS.md as living documentation.",
    },
    {
      question: "How do I migrate existing docs to AGENTS.md?",
      answer: (
        <>
          <p className="mb-2">
            Rename existing files to AGENTS.md and create symbolic links for backward compatibility:
          </p>
          <div className="w-full flex justify-center">
            <CodeExample
              code="mv AGENT.md AGENTS.md && ln -s AGENTS.md AGENT.md"
              compact
              heightClass="min-h-[48px]"
              centerVertically
            />
          </div>
        </>
      ),
    },
    {
      question: "How do I configure Aider?",
      answer: (
        <>
          <p className="mb-2">
            Configure Aider to use AGENTS.md in <code>.aider.conf.yml</code>:
          </p>
          <div className="w-full flex justify-center">
            <CodeExample
              code="read: AGENTS.md"
              compact
              heightClass="min-h-[48px]"
              centerVertically
            />
          </div>
        </>
      ),
    },
    {
      question: "How do I configure Gemini CLI?",
      answer: (
        <>
          <p className="mb-2">
            Configure Gemini CLI to use AGENTS.md in <code>.gemini/settings.json</code>:
          </p>
          <div className="w-full flex justify-center">
            <CodeExample
              code='{
  "context": {
    "fileName": "AGENTS.md"
  },
}'
              compact
              heightClass="min-h-[48px]"
              centerVertically
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <Section
      id="faq"
      title="FAQ"
      className="py-0"
      center
      maxWidthClass="max-w-5xl"
    >
      <div className="mx-auto max-w-3xl text-center section-copy">
        Short answers to the implementation details teams usually ask about
        first.
      </div>
      <div className="mx-auto grid max-w-4xl gap-4">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-card p-5 text-left">
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              {item.question}
            </h3>
            <div className="leading-relaxed text-[var(--muted)]">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
