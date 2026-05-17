# Big Pixel Community CIC

Website for [Big Pixel Community CIC](https://bigpixel.org.uk) — a social enterprise offering agency-level design and digital development to charities, non-profits, and social enterprises, with fees scaled to each organisation's income.

## Tech stack

- **Framework** — Next.js (App Router)
- **CMS** — Sanity
- **Styling** — Tailwind CSS v4
- **Media** — Cloudinary
- **Email** — Resend
- **Consent** — c15t

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Environment variables

Copy `.env.example` to `.env.local` and fill in the required values for Sanity, Cloudinary, and Resend.

## Project structure

```
src/
  app/          # Next.js App Router pages and layouts
  components/   # Shared UI components
  sanity/       # Sanity client, queries, and schema utilities
  lib/          # Shared helpers and utilities
  styles/       # Global CSS
  fonts/        # Local font files (Nexa and Nexa Text)
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start the production server |
| `pnpm lint` | Lint the codebase |
| `pnpm lint:fix` | Lint and auto-fix issues |
