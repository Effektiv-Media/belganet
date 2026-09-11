#!/usr/bin/env node
/**
 * One-off salvage script: pulls the full RSC flight-payload data object out of
 * the live (soon-to-be-replaced) v0 deployment for every landningssidor page
 * plus the homepage, and dumps it to content/original/*.json.
 *
 * The source repo/subscription is gone, but the deployment is still live and
 * Next.js ships the entire page data object (hero copy, services, FAQs, etc.)
 * inline in a `self.__next_f.push([1,"..."])` script tag as a JSON string.
 * This script concatenates those chunks, JSON.parses them, and locates the
 * object that contains `faqs` (landing pages) to save as clean JSON.
 *
 * Usage: node scripts/extract-original.mjs
 */
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "content", "original");
const RAW_DIR = path.join(OUT_DIR, "raw");
const BASE = "https://www.belganetstadochallservice.se";

const SLUGS = [
  "stadforetag-ronneby", "hemstad-ronneby", "flyttstad-ronneby", "kontorsstad-ronneby", "fonsterputs-ronneby",
  "stadforetag-karlskrona", "hemstad-karlskrona", "flyttstad-karlskrona", "kontorsstad-karlskrona", "fonsterputs-karlskrona",
  "stadforetag-vaxjo", "hemstad-vaxjo", "flyttstad-vaxjo", "kontorsstad-vaxjo", "fonsterputs-vaxjo",
  "stadforetag-kalmar", "hemstad-kalmar", "flyttstad-kalmar", "kontorsstad-kalmar", "fonsterputs-kalmar",
];

function extractFlightString(html) {
  const parts = [];
  const re = /self\.__next_f\.push\(\[1,(".*?")\]\)<\/script>/gs;
  let m;
  while ((m = re.exec(html))) {
    try {
      parts.push(JSON.parse(m[1]));
    } catch {
      // ignore malformed chunk
    }
  }
  return parts.join("");
}

function findLandingData(flightStr) {
  // The flight string is a sequence of `<id>:<payload>\n` lines. We scan for
  // a JSON value (object literal) anywhere that contains "faqs":[{"q":
  const idx = flightStr.indexOf('"faqs":[{"q"');
  if (idx === -1) return null;
  // Walk backwards from idx to find the enclosing object's opening brace by
  // counting braces/brackets/strings properly (simple stack-based scan).
  let start = -1;
  let depth = 0;
  for (let i = idx; i >= 0; i--) {
    const c = flightStr[i];
    if (c === "}") depth++;
    else if (c === "{") {
      if (depth === 0) {
        start = i;
        break;
      }
      depth--;
    }
  }
  if (start === -1) return null;
  // Now scan forward from start, tracking brace depth (respecting strings) to
  // find the matching closing brace.
  let d = 0;
  let inStr = false;
  let esc = false;
  let end = -1;
  for (let i = start; i < flightStr.length; i++) {
    const c = flightStr[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') inStr = true;
    else if (c === "{") d++;
    else if (c === "}") {
      d--;
      if (d === 0) {
        end = i + 1;
        break;
      }
    }
  }
  if (end === -1) return null;
  const jsonStr = flightStr.slice(start, end);
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error("  parse failed:", e.message);
    return null;
  }
}

function extractMetaTitleDesc(html) {
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? null;
  const description =
    html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? null;
  return { title, description };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(RAW_DIR, { recursive: true });

  // Homepage
  console.log("Fetching homepage...");
  const homeRes = await fetch(BASE + "/");
  const homeHtml = await homeRes.text();
  await writeFile(path.join(RAW_DIR, "home.html"), homeHtml);
  const homeMeta = extractMetaTitleDesc(homeHtml);
  await writeFile(
    path.join(OUT_DIR, "home.meta.json"),
    JSON.stringify(homeMeta, null, 2),
  );
  console.log("  saved home.html + home.meta.json");

  const results = {};
  for (const slug of SLUGS) {
    const url = `${BASE}/landningssidor/${slug}`;
    console.log("Fetching", slug);
    const res = await fetch(url);
    if (!res.ok) {
      console.error("  FAILED", res.status);
      continue;
    }
    const html = await res.text();
    const flightStr = extractFlightString(html);
    const data = findLandingData(flightStr);
    const meta = extractMetaTitleDesc(html);
    if (!data) {
      console.error("  could not locate landing data object");
      continue;
    }
    results[slug] = { ...data, _meta: meta };
    await writeFile(
      path.join(OUT_DIR, `${slug}.json`),
      JSON.stringify(results[slug], null, 2),
    );
    console.log("  saved", slug + ".json", "keys:", Object.keys(data).join(","));
  }

  await writeFile(
    path.join(OUT_DIR, "all-landing.json"),
    JSON.stringify(results, null, 2),
  );
  console.log(`\nDone. Extracted ${Object.keys(results).length}/${SLUGS.length} landing pages.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
