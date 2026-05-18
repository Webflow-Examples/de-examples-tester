# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A Webflow Designer Extension that provides an interactive API Explorer and Code Playground for the Webflow Designer API (V2). It runs as a panel inside the Webflow Designer.

## Commands

```bash
npm run dev              # Full dev: builds, then runs extension serve + vite + express server concurrently
npm run vite:dev         # Vite dev server only (port 1337)
npm run build            # vite build + webflow extension bundle → bundle.zip
npm run sync-typings     # Copy .d.ts files from @webflow/designer-extension-typings into src/
npm run clean            # rm dist + node_modules, reinstall
```

No test runner is configured. No linter is configured. Prettier is used for formatting (no semicolons, single quotes — see `.prettierrc`).

## Architecture

**Frontend** (React 18 + TypeScript + Vite, port 1337):
- Two tabs: **API Explorer** (browse/run API methods by category) and **Code Playground** (Monaco editor with live execution)
- Entry point: `src/main.jsx` → renders `<App>` with React Query provider
- API examples live in `src/examples/*.ts` — each file exports an object of `{ subcategory: { methodName: async () => {...} } }`. Adding a function here auto-populates the API Explorer dropdown.
- Examples are parsed at runtime using Acorn (AST) to extract function signatures, parameter names, and types for dynamic form generation
- Monaco Editor gets Webflow Designer API intellisense via `.d.ts` files synced into `src/designer-extension-typings/` (imported as raw strings with Vite's `?raw`)
- Code execution in the playground uses Sucrase to transpile TypeScript → JavaScript

**Backend** (`server/app.js`, Express on port 1338):
- Single `POST /prompt` endpoint that proxies to Anthropic API (Claude) for AI-powered code modification in the playground
- Requires `ANTHROPIC_API_KEY` env var (see `.env.example`)

**Key patterns:**
- `@/*` path alias maps to `./src/*` (configured in both tsconfig and vite)
- React Query manages async state (variable collections, enum queries)
- Console output is captured and displayed in the UI via custom utilities in `src/utils/console-utils.ts`
- Monaco cancellation errors are globally suppressed in `main.jsx`
- `webflow.json` configures the extension manifest (size, API version, permissions)

## Code Style

- TypeScript strict mode (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`)
- No semicolons, single quotes (Prettier)
- Components: PascalCase files. Hooks: `use*` prefix. Types: `.types.ts` files. Constants: `.constants.ts` files.
