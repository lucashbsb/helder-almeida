# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
yarn dev          # starts dev server on port 8080

# Build
yarn build        # production build
yarn build:dev    # development build

# Lint
yarn lint

# Deploy to GitHub Pages (helderalmeida.com.br)
./deploy.sh       # builds and deploys via gh-pages
# or:
yarn deploy
```

There is no test suite configured.

## Architecture

This is a single-page marketing/landing site for Dr. Helder Almeida (labor law attorney), built with React + TypeScript + Vite.

**Stack:**
- React 18, React Router v6, TanStack Query
- shadcn/ui (Radix UI primitives) — all UI primitives live in `src/components/ui/`
- Tailwind CSS with custom design tokens
- Deployed to GitHub Pages via `gh-pages`

**Page structure** — `src/pages/Index.tsx` composes everything in order:
1. `<Navbar />` — sticky nav
2. `<Hero />` — full-screen section with WhatsApp CTA
3. "Sobre" section — inline in `Index.tsx`
4. Stats bar — inline in `Index.tsx`
5. `<Areas />` — practice areas grid
6. "Contato" section — inline in `Index.tsx`
7. Footer — inline in `Index.tsx`

**Custom design tokens** (defined in `tailwind.config.ts`):
- `primary` → `#043f60` (dark navy blue)
- `gold` → `#b8985f` (accent gold)
- `font-playfair` → Playfair Display (headings)
- `font-inter` → Inter (body)

**Scroll animations** — `ScrollReveal` (in `src/hooks/use-scroll-reveal.tsx`) is both a hook (`useScrollReveal`) and a wrapper component. Wrap any block in `<ScrollReveal direction="left|right|up" delay={0.2}>` for entrance animations via IntersectionObserver.

**Routing** — `BrowserRouter` uses `basename={Environment.BASE}` from `src/environment.ts`. Currently `BASE = ""` (root). The Vite config also has `base: '/'`.

**Path alias** — `@/` maps to `src/`.

**Lovable integration** — the project is linked to [Lovable](https://lovable.dev/projects/f0b3e906-1932-44e3-9369-9ab5bf6f1d1a). The `lovable-tagger` plugin runs in dev mode only (`componentTagger()` in `vite.config.ts`).
