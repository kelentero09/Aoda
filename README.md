# Generator Set Supplier Website (Demo Template)

Static demo website for a generator set supplier business. React + Vite + TypeScript + Tailwind. No backend.

> This is a reusable reference template with fictional demo content
> ("Sample Gensets Co.", placeholder contacts). Rebrand via `src/site.ts`
> before showing or deploying for a real business.

## Develop

```bash
npm install
npm run dev
```

## Build (static)

```bash
npm run build
npm run preview
```

Output goes to `dist/` — fully static, no server required.

## Deploy to GitHub Pages

### Option A — Automatic (recommended)

1. Push this folder to a GitHub repo.
2. In GitHub: **Settings → Pages → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys `dist/` on every push to `main`.

### Option B — Manual with gh-pages branch

```bash
npm install -D gh-pages
npm run deploy
```

Then set **Settings → Pages → Source: gh-pages branch**.

> If deploying as a project site (`user.github.io/repo/`), set `base: '/repo/'`
> in `vite.config.ts`. Default `base: './'` works for user sites and custom domains.

## Content

All content lives in `src/` — see `src/site.ts` for brand name, phone numbers, locations, and nav.
Images: built-in SVG placeholders via `src/components/GensetVisual.tsx`.
Drop real photos into `public/images/` (see its README) when available —
`src/components/GensetPhoto.tsx` loads them with automatic placeholder fallback.
