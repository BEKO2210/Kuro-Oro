# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check the whole project (`tsc -b`) then produce a production build (`vite build`). The build fails on any type error.
- `npm run lint` — run ESLint over the repo
- `npm run preview` — serve the built `dist/` locally

There is no test runner configured.

## What this is

A single-page premium e-commerce **landing page** for **Kuro & Oro**, a luxury kitchen-objects brand. Aesthetic: obsidian-black & gold, luxury-editorial, German-language copy. No backend, auth, routing, or checkout — it's a marketing page only.

The page is composed in `src/App.tsx` from section components in `src/components/`, rendered top to bottom: `Nav` → `Hero` → `BrandPromise` → `CollectionPreview` → `WhyPremium` → `UseCases` → `Craftsmanship` → `FinalCTA` → `Footer`.

## Conventions for this site

- **Styling**: a global theme/reset/typography lives in `src/index.css` (all design tokens are CSS custom properties on `:root` — colors, fonts, `--section-pad`, `--ease-lux`). Each component imports its own sibling `.css` as a side effect (e.g. `Hero.tsx` → `./Hero.css`) with class names prefixed by component (`hero-`, `card-`, etc.) to avoid collisions. Reuse the tokens and shared utility classes (`.container`, `.section`, `.eyebrow`, `.btn`, `.heading-xl/.heading-lg`, `.lead`, `.section-index`) rather than hardcoding values.
- **Fonts**: Cormorant Garamond (display) + Jost (body), loaded via Google Fonts `<link>` in `index.html`.
- **Animation**: Framer Motion. Shared variants live in `src/lib/motion.ts` (`fadeUp`, `stagger`, `staggerItem`, `easeLux`, `reducedReveal`). Scroll-in reveals use the `Reveal` wrapper (`src/components/Reveal.tsx`); section headers use `SectionHeading.tsx`. **Always respect reduced motion** — call `useReducedMotion()` and fall back to `reducedReveal`/disabled hovers, as existing components do.
- **Placeholders**: product/material images are intentionally CSS-only placeholders (gold corner brackets + "… folgt" labels). Real photography drops into `ProductCard` / `Craftsmanship` later.
- **Quick-view**: `CollectionPreview` owns `activeProduct` state; each `ProductCard` is a keyboard-accessible `role="button"` that opens `ProductQuickView` (a right-side drawer with `AnimatePresence`, focus trap, Escape/backdrop close, reduced-motion fallback). No routing — it's pure local state.

## Architecture & conventions

- **Entry flow**: `index.html` → `src/main.tsx` (mounts `<App>` in `<StrictMode>` via `createRoot`) → `src/App.tsx`. Global styles in `src/index.css`, component styles in `src/App.css`.
- **TypeScript** uses bundler-mode resolution and is strict about unused code: `noUnusedLocals` and `noUnusedParameters` are on, so dead variables/params break the build. `verbatimModuleSyntax` is enabled — use `import type { ... }` for type-only imports. `erasableSyntaxOnly` is on, so TS-only runtime constructs (enums, parameter properties, namespaces) are disallowed.
- **TS project references**: `tsconfig.json` references `tsconfig.app.json` (app code under `src/`, DOM libs) and `tsconfig.node.json` (Vite config, Node env). Put app code under `src/`.
- **Static assets**: files imported from `src/assets/` are processed by Vite (hashed at build); files in `public/` (e.g. `icons.svg`, `favicon.svg`) are served at the root path and referenced as `/icons.svg`. SVG icons use `<use href="/icons.svg#id">`.
- **ESLint** is the flat-config (`eslint.config.js`) with `react-hooks` and `react-refresh` rules. The README documents how to opt into type-aware lint rules if stricter checking is wanted later.
