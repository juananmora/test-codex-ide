export const LANDING_PAGE_MARKDOWN_FILENAME = "agents-md-page.md";

export const LANDING_PAGE_MARKDOWN = `# AGENTS.md

A simple, open format for guiding coding agents, used by over 60k open-source projects.

Think of AGENTS.md as a README for agents: a dedicated, predictable place to provide context and instructions that help AI coding agents work on your project.

## Why AGENTS.md?

README.md files are for humans: quick starts, project descriptions, and contribution guidelines.

AGENTS.md complements this by containing the extra context coding agents need:

- Build steps
- Test commands
- Code conventions
- Security notes
- Pull request expectations

Keeping this guidance separate helps teams:

- Give agents a clear, predictable place for instructions
- Keep READMEs concise and focused on human contributors
- Provide precise, agent-focused guidance that complements existing docs

## Compatibility

One AGENTS.md works across many agents and tools, including:

- Codex
- Amp
- Jules
- Cursor
- Factory
- RooCode
- Aider
- Gemini CLI
- Zed
- Warp
- GitHub Copilot coding agent
- VS Code

## Example

\`\`\`md
# AGENTS.md

## Setup commands
- Install deps: \`pnpm install\`
- Start dev server: \`pnpm dev\`
- Run tests: \`pnpm test\`

## Code style
- TypeScript strict mode
- Single quotes, no semicolons
- Use functional patterns where possible
\`\`\`

## How to use AGENTS.md

1. Add an \`AGENTS.md\` file at the repository root.
2. Cover what matters:
   - Project overview
   - Build and test commands
   - Code style guidelines
   - Testing instructions
   - Security considerations
3. Add extra instructions such as commit message or PR guidance.
4. In large monorepos, use nested \`AGENTS.md\` files for subprojects.

## FAQ

### Are there required fields?
No. AGENTS.md is standard Markdown, so you can use any headings you like.

### What if instructions conflict?
The closest AGENTS.md to the edited file wins; direct user prompts override everything.

### Can I update it later?
Yes. Treat AGENTS.md as living documentation.

## About

AGENTS.md emerged from collaborative efforts across the AI software development ecosystem and is now stewarded by the Agentic AI Foundation under the Linux Foundation.

## Links

- Website: https://agents.md
- GitHub: https://github.com/agentsmd/agents.md
- Search AGENTS.md usage on GitHub: https://github.com/search?q=path%3AAGENTS.md+NOT+is%3Afork+NOT+is%3Aarchived&type=code
`;
