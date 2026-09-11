# Belganet Städ och Allservice

Next.js 15 (App Router) rebuild of [belganetstadochallservice.se](https://www.belganetstadochallservice.se/), originally built in v0. This rebuild is a pixel-faithful clone of the original design and copy, with SEO substantially expanded — see [`content/original/`](content/original/) for the salvaged source content and `scripts/extract-original.mjs` for how it was recovered from the live deployment's RSC payload.

## Stack

- Next.js 15 / React 19 / TypeScript
- Tailwind CSS v4 (`app/globals.css`, `@theme` tokens — no `tailwind.config.js`)
- `framer-motion` for scroll reveals and the FAQ accordions
- `resend` for the contact form (`app/api/contact/route.ts`)
- `zod` for form validation
- `@vercel/analytics`

## Getting started

```bash
pnpm install
cp .env.example .env.local   # add Resend credentials — see below
pnpm dev
```

- `pnpm build` — production build (~151 static pages)
- `pnpm start` — serve the production build locally
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm lint` — ESLint
- `pnpm check:content` — content quality gate over all 120 landing pages (word count, unique title/H1/description, internal link count) — run after `pnpm build`
- `pnpm check:seo` — sitemap domain + canonical/JSON-LD sanity check — run after `pnpm build`

## Contact form

`app/api/contact/route.ts` validates and emails submissions via [Resend](https://resend.com). Without `RESEND_API_KEY` / `CONTACT_FROM_EMAIL` set, the form still works end-to-end (accepts submissions, shows the success state) but logs a warning server-side instead of sending — useful for testing before real credentials are wired up. See `.env.example`.

## Content architecture

The site's ~150 pages are generated from a small set of content modules rather than hand-authored one by one:

- `content/services.ts` — the 12 service categories (hemstäd, flyttstäd, fönsterputs, …), each with sub-offerings, an 8–9 entry FAQ pool, and 4 rotating hero/about/CTA copy templates.
- `content/orter.ts` — the 10 towns served, each with real kommun/län/district/neighbor data used to make every ort's content genuinely local rather than a find-and-replace.
- `content/landing.ts` — composes any (service × ort) pair into a full `LandingPageData` object. The 20 combinations that existed on the original site reuse that approved copy verbatim (from `content/original/`); the other 100 are generated from the templates above, with FAQs selected via a deterministic hash so sibling pages don't share an identical FAQ set.
- `content/guides.ts` — 16 informational articles under `/guider/[slug]` targeting high-volume, low-competition national keywords (RUT-avdrag, pricing guides, checklists).

See `/Users/lucas/.claude/plans/ok-i-want-you-wise-quilt.md` for the full project plan, including the keyword research behind the page set.

## Deploying

Point the `belganetstadochallservice.se` domain (and `www`) at this Vercel project. `metadataBase` in `app/layout.tsx` and `SITE_URL` in `lib/site.ts` assume `https://www.belganetstadochallservice.se` — update both if the canonical host changes.
