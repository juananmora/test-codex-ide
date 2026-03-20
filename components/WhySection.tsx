import Section from "@/components/Section";
import React from "react";
import ClipboardIcon from "@/components/icons/ClipboardIcon";
import UserIcon from "@/components/icons/UserIcon";
import LinkIcon from "@/components/icons/LinkIcon";

export default function WhySection() {
  return (
    <Section
      id="why"
      title="Why AGENTS.md?"
      className="pt-2"
      center
      maxWidthClass="max-w-5xl"
    >
      <div className="mx-auto max-w-3xl space-y-4 text-center section-copy">
        <p className="mb-4">
          README.md files are for humans: quick starts, project descriptions,
          and contribution guidelines.
        </p>
        <p className="mb-4">
          AGENTS.md complements this by containing the extra, sometimes detailed
          context coding agents need: build steps, tests, and conventions that
          might clutter a README or aren&rsquo;t relevant to human contributors.
        </p>
        <p className="mb-4">We intentionally kept it separate to:</p>
        <div className="mt-8 grid grid-cols-1 gap-4 text-left md:grid-cols-3">
          <div className="info-card flex items-start gap-3 p-5">
            <ClipboardIcon />
            <p>
              <span className="font-semibold block">
                Give agents a clear, predictable place for instructions.
              </span>
            </p>
          </div>

          <div className="info-card flex items-start gap-3 p-5">
            <UserIcon />
            <p>
              <span className="font-semibold block">
                Keep READMEs concise and focused on human contributors.
              </span>
            </p>
          </div>

          <div className="info-card flex items-start gap-3 p-5">
            <LinkIcon />
            <p>
              <span className="font-semibold block">
                Provide precise, agent-focused guidance that complements
                existing README and docs.
              </span>
            </p>
          </div>
        </div>
        <p className="pt-2">
          Rather than introducing another proprietary file, we chose a name and
          format that could work for anyone. If you&rsquo;re building or using
          coding agents and find this helpful, feel free to adopt it.
        </p>
      </div>
    </Section>
  );
}
