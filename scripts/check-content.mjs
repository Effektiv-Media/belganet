#!/usr/bin/env node
/**
 * Content quality gate for the 120 service × ort landing pages: verifies
 * each has a substantial, unique word count, a unique H1/title/description,
 * and enough internal links to avoid reading as thin/duplicate content to
 * search engines. Run against the production build's HTML output, so build
 * first: `pnpm build && pnpm check:content`.
 */
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const BUILD_DIR = path.join(process.cwd(), ".next", "server", "app", "landningssidor");
const MIN_WORDS = 600;
const MIN_INTERNAL_LINKS = 6;

function extractVisibleText(html) {
  // Strip scripts/styles, then tags, collapse whitespace.
  const noScripts = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
  const text = noScripts.replace(/<[^>]+>/g, " ");
  return text.replace(/\s+/g, " ").trim();
}

function countWords(text) {
  return text.split(" ").filter(Boolean).length;
}

function extractAll(html, regex) {
  return [...html.matchAll(regex)].map((m) => m[1]);
}

async function main() {
  let files;
  try {
    files = (await readdir(BUILD_DIR)).filter((f) => f.endsWith(".html"));
  } catch {
    console.error(
      `Could not read ${BUILD_DIR} — run "pnpm build" first (static HTML output required).`,
    );
    process.exit(1);
  }

  const seenTitles = new Set();
  const seenDescriptions = new Set();
  const seenH1s = new Set();
  const failures = [];

  for (const file of files) {
    const html = await readFile(path.join(BUILD_DIR, file), "utf8");
    const slug = file.replace(/\.html$/, "");

    const text = extractVisibleText(html);
    const wordCount = countWords(text);

    const titles = extractAll(html, /<title>([^<]*)<\/title>/g);
    const title = titles[0] ?? "";
    const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
    const description = descMatch?.[1] ?? "";
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, "").trim() : "";

    const internalLinkCount = extractAll(html, /<a[^>]+href="\/[^"]*"/g).length;

    const pageFailures = [];
    if (wordCount < MIN_WORDS) pageFailures.push(`word count ${wordCount} < ${MIN_WORDS}`);
    if (!title) pageFailures.push("missing <title>");
    else if (seenTitles.has(title)) pageFailures.push(`duplicate title: "${title}"`);
    if (!description) pageFailures.push("missing meta description");
    else if (seenDescriptions.has(description)) pageFailures.push("duplicate meta description");
    if (!h1) pageFailures.push("missing <h1>");
    else if (seenH1s.has(h1)) pageFailures.push(`duplicate h1: "${h1}"`);
    if (internalLinkCount < MIN_INTERNAL_LINKS) {
      pageFailures.push(`only ${internalLinkCount} internal links < ${MIN_INTERNAL_LINKS}`);
    }

    seenTitles.add(title);
    seenDescriptions.add(description);
    seenH1s.add(h1);

    if (pageFailures.length > 0) {
      failures.push({ slug, pageFailures });
    }
  }

  console.log(`Checked ${files.length} landing pages.`);
  if (failures.length === 0) {
    console.log("✓ All pages pass the content quality gate.");
    return;
  }

  console.error(`✗ ${failures.length} page(s) failed:`);
  for (const f of failures) {
    console.error(`  ${f.slug}: ${f.pageFailures.join("; ")}`);
  }
  process.exit(1);
}

main();
