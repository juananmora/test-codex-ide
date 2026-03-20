import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const rootDir = path.resolve(import.meta.dirname, "..");
const heroSource = fs.readFileSync(path.join(rootDir, "components", "Hero.tsx"), "utf8");
const markdownActionsSource = fs.readFileSync(
  path.join(rootDir, "components", "PageMarkdownActions.tsx"),
  "utf8"
);
const landingPageMarkdownSource = fs.readFileSync(
  path.join(rootDir, "components", "landingPageMarkdown.ts"),
  "utf8"
);
const footerSource = fs.readFileSync(path.join(rootDir, "components", "Footer.tsx"), "utf8");
const codeExampleSource = fs.readFileSync(
  path.join(rootDir, "components", "CodeExample.tsx"),
  "utf8"
);

function run(name, fn) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    throw error;
  }
}

run("Hero renders the main CTA buttons including markdown actions", () => {
  assert.match(heroSource, /Explore Examples/);
  assert.match(heroSource, /View on GitHub/);
  assert.match(heroSource, /PageMarkdownActions/);
  assert.match(markdownActionsSource, /Download Markdown/);
  assert.match(markdownActionsSource, /Copy as Markdown/);
  assert.match(markdownActionsSource, /LANDING_PAGE_MARKDOWN_FILENAME/);
  assert.match(landingPageMarkdownSource, /agents-md-page\.md/);
});

run("Footer renders the latest news card with source and article date", () => {
  assert.match(footerSource, /Latest News/);
  assert.match(footerSource, /Next\.js Security Update: December 11, 2025/);
  assert.match(footerSource, /source: "Next\.js Blog"/);
  assert.match(footerSource, /December 11, 2025/);
  assert.match(footerSource, /https:\/\/nextjs\.org\/blog\/security-update-2025-12-11/);
});

run("CodeExample renders inline code chips with the neutral docs theme", () => {
  assert.match(codeExampleSource, /bg-black\/6/);
  assert.match(codeExampleSource, /text-black/);
  assert.match(codeExampleSource, /dark:bg-white\/12/);
  assert.match(codeExampleSource, /dark:text-white/);
});
