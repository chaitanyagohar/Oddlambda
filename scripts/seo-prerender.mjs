// ============================================================
// Post-build SEO step  (runs automatically via `npm run build`)
// ------------------------------------------------------------
// Vite builds ONE index.html for the whole single-page app, so without this
// every URL would show Google/WhatsApp/LinkedIn the homepage title & preview.
// This script takes dist/index.html and writes a copy per route with that
// route's own <title>, description, canonical, Open Graph tags, JSON-LD and a
// <noscript> summary, then regenerates dist/sitemap.xml.
//
//   /                      -> dist/index.html
//   /about                 -> dist/about.html          (served at /about via cleanUrls)
//   /services/speed-launch -> dist/services/speed-launch.html
//   anything unknown       -> dist/404.html            (real 404 status on Vercel)
// ============================================================

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, routes, NOT_FOUND, headFor, globalSchema, absUrl } from "../src/seo/siteConfig.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

if (!template.includes("<!--SEO:START-->") || !template.includes("<!--SEO:END-->")) {
  console.error("seo-prerender: SEO markers missing from index.html");
  process.exit(1);
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// JSON inside <script> must not contain "</script"
const ldJson = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

const navLinks = [
  ["/", "Home"],
  ["/services", "Services & pricing"],
  ["/projects", "Projects"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

function renderHead(route) {
  const h = headFor(route);
  const lines = [`<title>${esc(h.title)}</title>`];
  for (const m of h.meta) {
    const key = m.name ? `name="${m.name}"` : `property="${m.property}"`;
    lines.push(`<meta ${key} content="${esc(m.content)}" />`);
  }
  if (h.canonical) lines.push(`<link rel="canonical" href="${h.canonical}" />`);
  lines.push(`<script type="application/ld+json">${ldJson(globalSchema())}</script>`);
  if (h.jsonLd) lines.push(`<script type="application/ld+json" id="route-jsonld">${ldJson(h.jsonLd)}</script>`);
  return lines.join("\n    ");
}

function renderNoscript(route) {
  const links = navLinks.map(([href, label]) => `<a href="${href}">${label}</a>`).join(" · ");
  return `<noscript>
      <main style="max-width:720px;margin:0 auto;padding:48px 20px;font-family:system-ui,sans-serif;background:#EAE6CD;color:#0a0a0a">
        <h1>${esc(route.h1 || route.title)}</h1>
        <p>${esc(route.description)}</p>
        <nav>${links}</nav>
        <p>Email: <a href="mailto:${SITE.email}">${SITE.email}</a></p>
      </main>
    </noscript>`;
}

function renderPage(route) {
  const start = template.indexOf("<!--SEO:START-->");
  const end = template.indexOf("<!--SEO:END-->") + "<!--SEO:END-->".length;
  return (template.slice(0, start) + renderHead(route) + template.slice(end)).replace(
    "<!--SEO:NOSCRIPT-->",
    renderNoscript(route)
  );
}

function outFile(routePath) {
  if (routePath === "/") return path.join(dist, "index.html");
  if (routePath === "/404") return path.join(dist, "404.html");
  return path.join(dist, `${routePath.slice(1)}.html`);
}

let count = 0;
for (const route of [...routes, NOT_FOUND]) {
  const file = outFile(route.path);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, renderPage(route));
  count++;
}

// ---------- sitemap.xml ----------
const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter((r) => !r.noindex)
  .map(
    (r) => `  <url>
    <loc>${absUrl(r.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq || "monthly"}</changefreq>
    <priority>${(r.priority ?? 0.5).toFixed(1)}</priority>
  </url>`
  )
  .join("\n");

fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
);

console.log(`seo-prerender: wrote ${count} HTML pages + sitemap.xml (${routes.filter((r) => !r.noindex).length} URLs)`);
