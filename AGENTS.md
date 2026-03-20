# Repository Guidelines

## Project Structure & Module Organization
This repository is a small Next.js site in the repo root. Route entry points live in `pages/` (`pages/index.tsx`, `pages/_app.tsx`, `pages/_document.tsx`). Reusable UI is in `components/`, with icons under `components/icons/`. Global styling lives in `styles/globals.css`. Static assets and logos are served from `public/`. Lightweight source-based checks live in `tests/components.test.mjs`. Keep content updates aligned across visible UI and supporting files such as `components/landingPageMarkdown.ts` or `public/assets.html` when applicable.

## Build, Test, and Development Commands
Use the dev server during agent or local iteration:

- `npm run dev`: starts Next.js with hot reload on `http://localhost:3000`
- `npm run lint`: runs the project lint checks through Next.js
- `node tests/components.test.mjs`: runs the current component regression checks
- `npm run start`: serves a production build, only after a separate build outside the interactive workflow

Do not run `npm run build` inside an interactive agent session; it can leave `.next/` in a production state and break HMR.

## Coding Style & Naming Conventions
Prefer TypeScript React components (`.tsx`) and keep components focused and composable. Match the existing style: 2-space indentation, double quotes, semicolons, and named imports grouped at the top. Use PascalCase for components (`Hero.tsx`), camelCase for variables/functions, and descriptive constant names (`HERO_AGENTS_MD`). Co-locate component-specific logic with the component unless it clearly belongs in `pages/` or `styles/`.

## Testing Guidelines
Current tests use a simple Node-based assertion file rather than a full test framework. Add targeted checks to `tests/components.test.mjs` when changing landing-page copy, CTA labels, links, or theme classes. Favor stable string and pattern assertions over fragile implementation details. Run `npm run lint` and `node tests/components.test.mjs` before opening a PR.

## Commit & Pull Request Guidelines
Recent commits use short, imperative subjects such as `Add unit tests for Hero, Footer, and CodeExample components` and `Update configuration files for improved development experience`. Follow that pattern: one clear action per commit, capitalized subject, no trailing period.

PRs should include a concise description, note any user-visible changes, and link related issues when available. Include screenshots for visual updates and list the validation you ran (`npm run lint`, `node tests/components.test.mjs`).

## Configuration & Content Notes
If you add or update dependencies, update the lockfile you touched and restart the dev server. When editing content that is mirrored in markdown exports or static assets, verify all copies stay in sync.
