# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start dev server (HMR)
pnpm build        # production build
pnpm preview      # preview production build locally
pnpm lint         # ESLint
```

There are no tests.

## Architecture

Single-page React 19 app built with Vite. **No react-router** — navigation is handled entirely by an `activePage` state in `App.jsx`, which switches between page components via a `switch` statement. `Navbar` receives `handleNavigation` as a prop and calls it to change pages.

```
App.jsx  ──►  Navbar (sticky, manages its own activeTab state)
         └──► renderPage() → HomePage | ProyectsPage | ExperiencePage | Contact
```

**Pages** (`src/pages/`) render self-contained sections. All data is hardcoded either inline in the page component or in `src/data/`:
- `src/data/proyects.js` — project list (title + category only; full project data with descriptions/images lives inline in `Portfolio.jsx`)
- `src/data/timeLineData.js` — career/education timeline used by the experience page

**Styling**: Tailwind CSS v4, integrated via the `@tailwindcss/vite` Vite plugin (configured in `vite.config.js` — not PostCSS). Icons come from `lucide-react`. The `src/icons/` directory has older custom SVG icon components that are no longer used.

**Deployment**: Deployed to GitHub Pages. `vite.config.js` sets `base: '/portfolio/'`. The CV download in `HomePage.jsx` uses `import.meta.env.BASE_URL` to resolve the PDF path correctly under this base path.

**Notable**: `src/components/feactures/ProjectCard.jsx` (note the typo "feactures") is the card component used by `Portfolio.jsx`. `Habilidades.jsx` and `PortfolioCard.jsx` exist but are not currently rendered by any page.
