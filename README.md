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
