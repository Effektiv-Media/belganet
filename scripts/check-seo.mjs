#!/usr/bin/env node
/**
 * Sitemap/canonical/JSON-LD sanity checks against the production build's
 * static HTML output. Run `pnpm build` first.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";

const APP_DIR = path.join(process.cwd(), ".next", "server", "app");
const SITE_URL = "https://www.belganetstadochallservice.se";

async function checkSitemap() {
  const sitemapPath = path.join(APP_DIR, "sitemap.xml.body");
  let xml;
  try {
    xml = await readFile(sitemapPath, "utf8");
  } catch {
    // Fall back to the .meta-less variant some Next versions emit.
    xml = await readFile(path.join(APP_DIR, "sitemap.xml"), "utf8").catch(() => null);
  }
  if (!xml) {
    console.error("✗ Could not find built sitemap.xml output.");
    return false;
  }
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const wrongDomain = urls.filter((u) => !u.startsWith(SITE_URL));
  console.log(`sitemap.xml: ${urls.length} URLs`);
  if (wrongDomain.length > 0) {
    console.error(`✗ ${wrongDomain.length} URL(s) not on ${SITE_URL}:`, wrongDomain.slice(0, 5));
    return false;
  }
  console.log(`✓ All sitemap URLs are on ${SITE_URL}`);
  return true;
}

async function checkSamplePages() {
  const samples = [
    "landningssidor/flyttstad-kalmar.html",
    "omraden/vaxjo.html",
    "guider/rut-avdrag-for-stadning-2026.html",
  ];
  let ok = true;
  for (const rel of samples) {
    const filePath = path.join(APP_DIR, rel);
    let html;
    try {
      html = await readFile(filePath, "utf8");
    } catch {
      console.error(`✗ Missing built page: ${rel}`);
      ok = false;
      continue;
    }
    const hasCanonical = /<link rel="canonical" href="[^"]+"/.test(html);
    const ldJsonCount = (html.match(/application\/ld\+json/g) ?? []).length;
    const hasFaqPage = html.includes('"@type":"FAQPage"');
    console.log(
      `${rel}: canonical=${hasCanonical ? "yes" : "NO"} json-ld-blocks=${ldJsonCount} faqpage=${hasFaqPage ? "yes" : "NO"}`,
    );
    if (!hasCanonical || ldJsonCount < 2) ok = false;
  }
  return ok;
}

async function main() {
  const results = await Promise.all([checkSitemap(), checkSamplePages()]);
  const allOk = results.every(Boolean);
  if (!allOk) {
    console.error("\n✗ SEO checks failed.");
    process.exit(1);
  }
  console.log("\n✓ SEO checks passed.");
}

main();
