# OddLambda: SEO update, what changed and what to do next

## 1. How to apply this update

1. Copy everything in `site-update/` over your project root. The folders match your repo:
   `src/…`, `public/…`, `scripts/…`, `index.html`, `package.json`, `vercel.json`.
2. **Delete `public/sitemap.xml`.** It is now generated on every build, and an old copy would override it.
3. Run `npm run build` locally. You should see
   `seo-prerender: wrote 12 HTML pages + sitemap.xml (10 URLs)`.
4. Commit and push. Vercel picks up the new build command from `package.json` automatically.

> All titles, descriptions and page schema now live in **`src/seo/siteConfig.js`**.
> To add a page, add a `<Route>` in `App.jsx` **and** an entry in `routes` in that file.
> The sitemap, meta tags and static HTML then update on the next build.

---

## 2. What was fixed

### Critical SEO
| Problem | Fix |
|---|---|
| Every URL showed the **homepage title/description** to Google, WhatsApp and LinkedIn (single-page app) | Build step `scripts/seo-prerender.mjs` writes a real HTML file per page with its own title, description, canonical, Open Graph tags and schema. `src/components/Seo.jsx` keeps them in sync while visitors navigate |
| No canonical tags | Canonical on every indexable page |
| `/privacy`, `/terms` linked in footer but showed a **blank page** | Full Privacy Policy and Terms of Service pages |
| Unknown URLs showed a blank page with **status 200** (soft 404s) | Real 404 page, served with a true 404 status and `noindex` |
| Sitemap missing `/services`, `/contact` and all 3 package pages | Auto-generated sitemap with all 10 public URLs |
| `/thank-you` could be indexed | `noindex` (meta + header) |
| `og-image.jpg` referenced but not in repo; Twitter tags used `property=` instead of `name=` | New 1200×630 share image (`public/og/oddlambda-og.jpg`), corrected tags, image size/alt tags |
| Schema had an empty phone, fake-looking social URLs, `$$$` price range, a missing founder image | Clean `ProfessionalService` + `WebSite` schema, `BreadcrumbList` on inner pages, `Service` + `Offer` (₹ price) on package pages |
| Projects page had **no H1** | Projects heading becomes the H1 on `/projects` (still H2 on the homepage) |

### Broken links and errors
- Services page button linked to **`/7contact`** (typo, so it went nowhere) → `/contact`
- Footer **"Home" (`#home`) did nothing**; "About" (`#about`) only worked on the homepage → real page links (Home, Services, Projects, About, Contact)
- Footer **Instagram linked to instagram.com**, not your profile → `instagram.com/oddlambda`
- Internal links used `<a href>`, which reloads the whole site on every click → React Router `<Link>` (instant navigation)
- Favicon declared as `image/svg+xml` but the file is `.ico` → corrected; apple-touch-icon, PWA icons and `site.webmanifest` added
- Hamburger and logo buttons had no accessible names → `aria-label` added (an accessibility/Lighthouse item)
- Footer email added (`hello@oddlambda.com`); cookie notice now links to the Privacy Policy

### Speed (Core Web Vitals count towards ranking)
- **CTA hover images: 9.8 MB → 386 KB.** `leaf.avif` alone was 7.1 MB at 6200×8272 px. Same filenames, so no code change was needed.
- Inner pages are lazy-loaded, so the main JS bundle went from **140 KB to 84 KB**.
- The Google Fonts `@import` moved out of CSS into `<head>` with `preconnect`, so it no longer blocks rendering.
- Project screenshots are lazy-loaded, with descriptive alt text.
- `vercel.json`: one-year cache for hashed assets, clean URLs, basic security headers.

---

## 3. Please check these: they need your decision

1. **Contact form destination.** The form posts to FormSubmit → `chaitanyagohar@gmail.com`. If enquiries
   should go to `hello@oddlambda.com`, change it in `src/app/contact/page.jsx`. FormSubmit sends a one-time
   activation email to the new address.
2. **Legal pages.** Privacy and Terms are drafted for an Indian studio (DPDP Act 2023, IT Act 2000, 50/50
   payment terms, New Delhi courts). Review them, especially refunds, the 7-day invoice terms and liability.
   Add a named Grievance Officer if you want one.
3. **Project screenshots are PNGs** (`lords.png`, `elitairs2.png`…). They weren't in the zip. Send me
   your `public/` folder and I'll convert them to WebP/AVIF (usually 70–90% smaller).
4. `CTA.jsx` uses `/tree.jpg` and a `.webm` video. Make sure both exist in `public/`.
5. **Unused code you can delete:** `CustomCursor.jsx/.tsx`, the duplicate `ScrollExpand`, `Benefits`,
   `Description`, `TechStack`, `Testimonials`, `Loader`, `WhatWeOffer` (which imports a missing
   `FlowingMenu`), the `face-api.js` dependency, and `Recycle Bin - Shortcut.lnk` in the repo root.

---

## 4. Do these yourself (about 1 hour, biggest impact)

1. **Google Search Console.** Add `oddlambda.com` (Domain property), verify via DNS, submit
   `https://oddlambda.com/sitemap.xml`, then use *URL Inspection → Request indexing* on each page.
2. **Bing Webmaster Tools.** Import from Search Console in one click.
3. **Google Business Profile.** Create it as a *service-area business* (Delhi NCR, address hidden),
   category "Website designer". Add the services with prices, portfolio photos and the website link.
   This is the #1 lever for "website developer Delhi"-type searches. Then ask every past client for a review.
4. **www vs non-www.** In Vercel → Domains, make sure `www.oddlambda.com` **redirects** to `oddlambda.com`.
5. **Social profiles.** Once LinkedIn/X/Behance pages exist, add their URLs to `SITE.sameAs` in `siteConfig.js`.

## 5. Next content to build (ranking growth)
- **Case-study pages** for each project (`/projects/lords-co`, `/projects/elitairs`…): problem,
  solution, results, stack and screenshots. These rank for "real estate website design" and are the
  pages clients will share.
- **Industry landing pages**, e.g. *Real Estate Website Development*, *Interior Designer Websites*,
  *Landing Pages for Ad Campaigns*.
- A small **Insights/blog** answering what clients search for: "website cost in India 2026",
  "Next.js vs WordPress for business", "how long does a website take".
