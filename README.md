# Aditya Singhal portfolio

A multi-page software engineering portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn-style component primitives. It combines concise recruiter-facing summaries with deeper case studies, interactive project demonstrations, and public-safe descriptions of selected private work.

## Routes

- `/` — introduction, proof points, selected work, and experience synopsis
- `/projects` — filterable project archive
- `/projects/:slug` — individual case studies with interactive demonstrations
- `/experience` — detailed role and leadership stories
- `/about` — working principles, research context, and capabilities

Client-side routes use the fallback in `public/_redirects` on compatible static hosts.

## Run locally

```sh
nub install
nub run dev
```

## Quality checks

```sh
nub run lint
nub run build
```

The résumé served from `public/Aditya-Singhal-Resume.pdf` is the software-engineering version from the source project. Private repositories are never linked or exposed; their case studies describe only portfolio-safe architecture, responsibilities, and outcomes.

## Cloudflare deployment

Production is https://as.radyanlab.com, served by the aditya-portfolio static Worker.

Use Node.js 24 and pnpm 10.34.6. Install with `pnpm install --frozen-lockfile`. `pnpm run dev` keeps the normal Vite preview. For a Cloudflare build, set `CLOUDFLARE_BUILD=1` and run `pnpm run build:cloudflare`, then `pnpm run deploy`. The deployment uses `cf` and `cloudflare.config.ts`. Native SPA fallback handles direct requests to React routes.

GitHub Actions checks pull requests with lint, TypeScript, and the Cloudflare production build. Pushes to main deploy automatically. Pull requests never receive deployment credentials. Deployment secrets are CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID in GitHub Secrets.

The token has Workers Scripts Write for the account and Workers Routes Write plus Zone Read for radyanlab.com. OAuth cannot create an Individual Workers Editor token, so account-wide Worker write is the narrowest provisionable scope through the current login. Rotate to a per-Worker account token through the Cloudflare dashboard when available. Never commit token values.
