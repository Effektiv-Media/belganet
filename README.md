# Belganet Städ och Allservice

Next.js 15 (App Router) rebuild of [belganetstadochallservice.se](https://www.belganetstadochallservice.se/), originally built in v0. The visual design and client-approved copy are preserved; SEO is substantially expanded — see [`content/original/`](content/original/) for the salvaged source content and `scripts/extract-original.mjs` for how it was recovered from the live deployment's RSC payload.

## Stack

- Next.js 15 / React 19 / TypeScript
- Tailwind CSS v4 (`app/globals.css`, `@theme` tokens — no `tailwind.config.js`)
- CSS-only scroll reveals (`.reveal`, scroll-driven animations — no JS)
- `resend` for the contact form (`app/api/contact/route.ts`)
- `zod` for form validation
- `@vercel/analytics`

## Getting started

```bash
pnpm install
cp .env.example .env.local   # add Resend credentials — see below
pnpm dev
```

- `pnpm build` — production build (~170 static pages)
- `pnpm start` — serve the production build locally
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm lint` — ESLint
- `pnpm check:content` — content quality gate (run after `pnpm build`): landing-page word count, unique title/H1/description, internal links, FAQ answers present in visible HTML, guide length, and sitewide title ≤ 60 chars with the brand exactly once
- `pnpm check:seo` — crawl/indexing gate (run after `pnpm build`): sitemap domain + every URL built, noindexed pages not in the sitemap, self-referencing canonicals, no duplicate JSON-LD nodes, `/tack` noindex, favicon built

## Contact form

`app/api/contact/route.ts` validates and emails submissions via [Resend](https://resend.com). Without `RESEND_API_KEY` / `CONTACT_FROM_EMAIL` set, the form still works end-to-end (accepts submissions, shows the success state) but logs a warning server-side instead of sending — useful for testing before real credentials are wired up. See `.env.example`.

## URL structure

| URL | What |
|---|---|
| `/tjanster` | All services + full service × town grid (HTML sitemap) |
| `/tjanster/{service}` | 12 service hubs, e.g. `/tjanster/flyttstad` ("Flyttstädning i Blekinge, Kalmar & Växjö") |
| `/tjanster/{service}/{ort}` | 120 service × town pages, e.g. `/tjanster/flyttstad/kalmar` |
| `/omraden`, `/omraden/{ort}` | Town index + 10 town hubs ("Städning i {ort}") |
| `/guider`, `/guider/{slug}` | 16 guides (prices, RUT, checklists) |

All URLs are built in `lib/routes.ts` — never hand-write a path. Old `/landningssidor/*` URLs 308-redirect to the new ones in one hop (`next.config.ts`).

**Keyword ownership:** "städfirma {ort}" belongs to `/tjanster/stadfirma/{ort}`; town hubs target "städning {ort}" and link to it, so the two never compete.

## Content architecture

- `content/services.ts` — the 12 services: sub-offerings, FAQ pool, rotating hero/about/CTA templates, meta-description templates, hub intro, and `rut` eligibility (`yes` / `partial` / `no` — drives every RUT claim on the site; kontorsstäd, trappstädning, fastighetsskötsel and dödsbo are `no`).
- `content/orter.ts` — the 10 towns with real kommun/län/district/neighbour data.
- `content/landing.ts` — composes any (service × ort) pair into a page. The 20 combinations from the original site reuse the approved body copy verbatim; titles, H1s and meta descriptions are regenerated.
- `content/indexing.ts` — **which landing pages Google may index.** Only ~33 combos with verified search demand are indexable; the other ~87 are served `noindex, follow` and left out of the sitemap, to avoid a brand-new domain looking like a doorway-page farm. Promote a page by giving it unique local content first, then adding it here.
- `content/serviceHub.ts` — title/description/copy helpers for `/tjanster/{service}`.
- `content/guides/*.ts` — one file per guide (typed by `Guide` in `content/types.ts`), with price tables framed as market ranges, not Belganet prices.

Titles: pages pass a title **without** brand; the root layout template appends ` | Belganet Städ`. Use `fitTitle()` from `lib/seo.ts` for generated titles so they stay ≤ 60 characters.

## Deploying

Point the `belganetstadochallservice.se` domain (and `www`) at this Vercel project. `SITE_URL` in `lib/site.ts` assumes `https://www.belganetstadochallservice.se` — update it if the canonical host changes.

## Launch checklist (fast ranking)

1. **Vercel domains:** make the apex → `www` redirect permanent (308), not temporary (307).
2. **Google Search Console:** verify the domain via DNS (or set `GOOGLE_SITE_VERIFICATION`), submit `/sitemap.xml`, then use URL Inspection → "Request indexing" for the homepage, the 12 service hubs, the 10 town hubs and the top-volume landing pages (flyttstäd Kalmar/Karlskrona/Växjö, städfirma Växjö/Kalmar/Karlskrona, fönsterputs Växjö).
3. **Google Business Profile:** create/claim it as a service-area business covering all 10 towns, link it to the site, and set up a routine for asking customers for reviews. This is the single largest local-ranking lever. Add its URL to `SOCIAL_LINKS` in `lib/site.ts`.
4. **Citations with consistent NAP** (same name, phone, email everywhere): Hitta.se, Eniro, Reco.se (reviews), Offerta, Servicefinder.
5. Monitor Search Console → Pages for "Crawled – currently not indexed" on the service hubs and indexed landing pages during the first 4–8 weeks.

## Needs client input

Flagged with `TODO(client)` in code:

- Registered street address and organisationsnummer → full `PostalAddress` + `geo` in the LocalBusiness JSON-LD (`lib/schema.ts`).
- Real Facebook / Instagram / Google Business Profile URLs → `SOCIAL_LINKS` (feeds `sameAs` and the footer icons, which are hidden until set).
- A domain email address instead of Gmail (`lib/site.ts`).
- Photo and short bio of Angelica for the guides' author byline (E-E-A-T).
- Real prices, to replace the market ranges in the price guides.
- Voice: the homepage speaks as "jag" (Angelica), landing pages as "vi" — pick one.
