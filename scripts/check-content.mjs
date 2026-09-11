#!/usr/bin/env node
/**
 * Content quality gate over the production build's static HTML. Run
 * `pnpm build` first.
 *
 * Service × ort landing pages (/tjanster/{service}/{ort}):
 *   - ≥ 600 words of main content, unique <title>, meta description and H1
 *   - ≥ 6 internal links
 *   - FAQ answers present in the visible HTML (not only in JSON-LD)
 * Guides (/guider/{slug}):
 *   - ≥ 900 words of main content
 * Every built page:
 *   - <title> ≤ 60 characters, brand appears exactly once
 *   - meta description 120–160 characters (indexable pages)
 */
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const APP_DIR = path.join(process.cwd(), ".next", "server", "app");
const LP_DIR = path.join(APP_DIR, "tjanster");
const GUIDE_DIR = path.join(APP_DIR, "guider");
const MIN_LP_WORDS = 600;
const MIN_GUIDE_WORDS = 900;
const MIN_INTERNAL_LINKS = 6;
const MAX_TITLE = 60;
const BRAND = "Belganet";

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

function stripToText(html) {
  return decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

const mainText = (html) => stripToText(html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? html);
const wordCount = (text) => text.split(" ").filter(Boolean).length;
const titleOf = (html) => decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
const descOf = (html) => decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
const isNoindex = (html) => /<meta name="robots" content="[^"]*noindex/.test(html);

async function listHtml(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await listHtml(full)));
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

async function main() {
  let allPages;
  try {
    allPages = await listHtml(APP_DIR);
  } catch {
    console.error(`Could not read ${APP_DIR} — run "pnpm build" first.`);
    process.exit(1);
  }
  const rel = (f) => path.relative(APP_DIR, f);
  const failures = [];
  const fail = (file, msg) => failures.push(`${rel(file)}: ${msg}`);

  // 1) Sitewide title/description rules.
  for (const file of allPages) {
    if (rel(file).startsWith("_")) continue; // _not-found etc.
    const html = await readFile(file, "utf8");
    const title = titleOf(html);
    if (!title) fail(file, "missing <title>");
    else {
      if (title.length > MAX_TITLE) fail(file, `title ${title.length} chars > ${MAX_TITLE}: "${title}"`);
      const brandCount = title.split(BRAND).length - 1;
      if (brandCount !== 1) fail(file, `brand appears ${brandCount}× in title: "${title}"`);
    }
    if (!isNoindex(html)) {
      const d = descOf(html);
      if (d.length < 120 || d.length > 160) fail(file, `meta description ${d.length} chars (want 120–160)`);
    }
  }

  // 2) Landing pages.
  const lpFiles = (await listHtml(LP_DIR)).filter((f) => path.relative(LP_DIR, f).split(path.sep).length === 2);
  const seen = { title: new Map(), desc: new Map(), h1: new Map() };
  for (const file of lpFiles) {
    const html = await readFile(file, "utf8");
    const words = wordCount(mainText(html));
    if (words < MIN_LP_WORDS) fail(file, `main content ${words} words < ${MIN_LP_WORDS}`);

    const h1 = stripToText(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "");
    for (const [key, value] of [["title", titleOf(html)], ["desc", descOf(html)], ["h1", h1]]) {
      if (!value) fail(file, `missing ${key}`);
      else if (seen[key].has(value)) fail(file, `duplicate ${key} (also ${seen[key].get(value)}): "${value}"`);
      else seen[key].set(value, rel(file));
    }

    const links = (html.match(/<a[^>]+href="\/[^"#]/g) ?? []).length;
    if (links < MIN_INTERNAL_LINKS) fail(file, `only ${links} internal links < ${MIN_INTERNAL_LINKS}`);

    // First FAQ answer from JSON-LD must also be visible in the HTML.
    const answer = html.match(/"acceptedAnswer":\{"@type":"Answer","text":"([^"]{20,60})/)?.[1];
    const visible = html.replace(/<script[\s\S]*?<\/script>/gi, "");
    if (!answer) fail(file, "no FAQPage answer found in JSON-LD");
    else if (!decode(visible).includes(answer.slice(0, 30))) fail(file, "FAQ answer missing from visible HTML");
  }

  // 3) Guides.
  const guideFiles = await listHtml(GUIDE_DIR).catch(() => []);
  for (const file of guideFiles) {
    const words = wordCount(mainText(await readFile(file, "utf8")));
    if (words < MIN_GUIDE_WORDS) fail(file, `guide main content ${words} words < ${MIN_GUIDE_WORDS}`);
  }

  console.log(
    `Checked ${allPages.length} pages (${lpFiles.length} landing pages, ${guideFiles.length} guides).`,
  );
  if (failures.length === 0) {
    console.log("✓ All pages pass the content quality gate.");
    return;
  }
  console.error(`✗ ${failures.length} problem(s):`);
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}

main();
