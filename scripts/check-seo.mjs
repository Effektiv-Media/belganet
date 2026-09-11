#!/usr/bin/env node
/**
 * Crawl/indexing sanity checks against the production build's static
 * output. Run `pnpm build` first.
 *
 * - sitemap: every URL on the canonical domain and backed by a built page
 * - no noindexed page is listed in the sitemap; every indexable page is
 * - every indexable page has an absolute self-referencing canonical
 * - no JSON-LD node (@type + @id) is defined twice on the same page
 * - /tack is noindex; favicon route exists
 */
import { readFile, readdir, access } from "node:fs/promises";
import path from "node:path";

const APP_DIR = path.join(process.cwd(), ".next", "server", "app");
const SITE_URL = "https://www.belganetstadochallservice.se";

async function listHtml(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await listHtml(full)));
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

const pathOf = (file) => {
  const rel = path.relative(APP_DIR, file).replace(/\.html$/, "").split(path.sep).join("/");
  return rel === "index" ? "/" : `/${rel}`;
};

const exists = (p) => access(p).then(() => true, () => false);

async function main() {
  const problems = [];
  const xml =
    (await readFile(path.join(APP_DIR, "sitemap.xml.body"), "utf8").catch(() => null)) ??
    (await readFile(path.join(APP_DIR, "sitemap.xml"), "utf8").catch(() => null));
  if (!xml) {
    console.error("✗ Could not find built sitemap.xml output — run `pnpm build` first.");
    process.exit(1);
  }
  const sitemapUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const sitemapPaths = new Set(
    sitemapUrls.map((u) => (u.startsWith(SITE_URL) ? u.slice(SITE_URL.length) || "/" : u)),
  );
  for (const u of sitemapUrls) {
    if (!u.startsWith(SITE_URL)) problems.push(`sitemap URL not on ${SITE_URL}: ${u}`);
  }

  const pages = (await listHtml(APP_DIR)).filter((f) => !path.relative(APP_DIR, f).startsWith("_"));
  const builtPaths = new Set(pages.map(pathOf));
  for (const p of sitemapPaths) {
    if (!builtPaths.has(p)) problems.push(`sitemap lists ${p} but no page was built for it`);
  }

  let indexable = 0;
  let noindexed = 0;
  for (const file of pages) {
    const html = await readFile(file, "utf8");
    const p = pathOf(file);
    if (/<meta name="robots" content="[^"]*noindex/.test(html)) {
      noindexed++;
      if (sitemapPaths.has(p)) problems.push(`${p} is noindex but listed in the sitemap`);
    } else {
      indexable++;
      const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
      const expected = new URL(p, SITE_URL).toString();
      if (!canonical) problems.push(`${p}: missing canonical`);
      // Next.js drops the trailing slash on the root URL; for "/" both forms
      // are the same URL to Google.
      else if (canonical.replace(/\/$/, "") !== expected.replace(/\/$/, "")) {
        problems.push(`${p}: canonical ${canonical} ≠ ${expected}`);
      }
      if (!sitemapPaths.has(p)) problems.push(`${p} is indexable but missing from the sitemap`);
    }

    // A node *definition* carries both @type and @id; bare {"@id":…} objects
    // are references and may repeat freely.
    const definitions = [...html.matchAll(/"@type":"[^"]+","@id":"([^"]+)"/g)].map((m) => m[1]);
    const dupes = [...new Set(definitions.filter((id, i) => definitions.indexOf(id) !== i))];
    if (dupes.length > 0) problems.push(`${p}: JSON-LD node defined more than once: ${dupes.join(", ")}`);
  }

  const tack = await readFile(path.join(APP_DIR, "tack.html"), "utf8").catch(() => "");
  if (!/<meta name="robots" content="[^"]*noindex/.test(tack)) problems.push("/tack is not noindex");

  if (!(await exists(path.join(APP_DIR, "icon"))) && !(await exists(path.join(APP_DIR, "icon.body")))) {
    problems.push("favicon route /icon was not built");
  }

  console.log(
    `sitemap.xml: ${sitemapUrls.length} URLs · built pages: ${pages.length} (${indexable} indexable, ${noindexed} noindex)`,
  );
  if (problems.length > 0) {
    console.error(`\n✗ ${problems.length} SEO problem(s):`);
    for (const p of problems) console.error(`  ${p}`);
    process.exit(1);
  }
  console.log("✓ SEO checks passed.");
}

main();
