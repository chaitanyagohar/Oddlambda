// ============================================================
// SEO SINGLE SOURCE OF TRUTH
// ------------------------------------------------------------
// Used in two places:
//   1. src/components/Seo.jsx        -> updates <head> in the browser on every route change
//   2. scripts/seo-prerender.mjs     -> writes a static HTML file per route at build time
//                                       (so Google, WhatsApp, LinkedIn etc. see the right
//                                       title / description / preview image without running JS)
//
// To add a new page: add it to `routes` below. That's it — sitemap, meta and
// prerendered HTML are generated automatically on the next `npm run build`.
// Plain JS only (no JSX) so Node can import it during the build.
// ============================================================

export const SITE = {
  name: "OddLambda",
  url: "https://oddlambda.com",
  email: "hello@oddlambda.com",
  locale: "en_IN",
  city: "Delhi",
  region: "Delhi",
  country: "IN",
  themeColor: "#0a0a0a",
  ogImage: "/og/oddlambda-og.jpg",
  ogImageAlt: "OddLambda — premium websites that make your business impossible to ignore",
  logo: "/icons/icon-512.png",
  bookingUrl: "https://cal.com/solidate-jlocb2/15min",
  // Only list profiles that actually exist — Google uses these to connect your brand.
  // Add LinkedIn / X / GitHub / Behance here once the profiles are live.
  sameAs: ["https://www.instagram.com/oddlambda/"],
};

export const PACKAGES = [
  {
    slug: "speed-launch",
    name: "Speed Launch",
    priceINR: 7999,
    summary: "A fast, professional, conversion-focused landing page — designed, built and deployed in 2–3 weeks.",
  },
  {
    slug: "brand-ecosystem",
    name: "Brand Ecosystem",
    priceINR: 22999,
    summary: "A bespoke 5–10 page corporate or SaaS website with a design system, headless CMS, CRM forms and technical SEO.",
  },
  {
    slug: "commerce-scale",
    name: "Commerce Scale",
    priceINR: 32999,
    summary: "A complete e-commerce store (Shopify or headless) with up to 200 products, Razorpay/Stripe payments and e-commerce SEO.",
  },
];

const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

// ------------------------------------------------------------
// Per-route meta. Titles ≤ 60 chars, descriptions ≤ 160 chars.
// changefreq / priority only matter for the sitemap.
// noindex: true -> kept out of Google and out of the sitemap.
// ------------------------------------------------------------
export const routes = [
  {
    path: "/",
    title: "OddLambda — Premium Website Design & Development, Delhi",
    description:
      "OddLambda designs and builds fast, conversion-focused websites, landing pages, e-commerce stores and web apps for brands in India and worldwide. From ₹7,999.",
    h1: "Premium Websites That Make Your Business Impossible to Ignore",
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    path: "/services",
    title: "Website Packages & Pricing | OddLambda",
    description:
      "Fixed-price website packages: Speed Launch landing pages from ₹7,999, Brand Ecosystem corporate & SaaS sites ₹22,999 and Commerce Scale e-commerce ₹32,999.",
    h1: "Website Design & Development Services",
    breadcrumb: "Services",
    changefreq: "monthly",
    priority: 0.9,
  },
  ...PACKAGES.map((p) => ({
    path: `/services/${p.slug}`,
    title: `${p.name} — ${inr(p.priceINR)} Website Package | OddLambda`,
    description: `${p.summary} Fixed price from ${inr(p.priceINR)}.`,
    h1: p.name,
    breadcrumb: p.name,
    parent: { path: "/services", name: "Services" },
    package: p,
    changefreq: "monthly",
    priority: 0.8,
  })),
  {
    path: "/projects",
    title: "Projects & Website Case Studies | OddLambda",
    description:
      "Selected websites by OddLambda — real estate platforms, interior design and marketing brands including Lords & Co, Elitairs, Ashiya, Concorde Eleve and Drootle.",
    h1: "Projects",
    breadcrumb: "Projects",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/about",
    title: "About OddLambda | Web Design & Development Studio, Delhi",
    description:
      "Meet OddLambda — a Delhi-based design and engineering studio building premium websites, web apps and digital systems for founders and growing brands.",
    h1: "About OddLambda",
    breadcrumb: "About",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/contact",
    title: "Contact OddLambda | Start Your Website Project",
    description:
      "Tell us about your website project or book a 15-minute call with OddLambda to discuss scope, timeline and a fixed-price quote.",
    h1: "Contact",
    breadcrumb: "Contact",
    changefreq: "yearly",
    priority: 0.7,
  },
  {
    path: "/privacy",
    title: "Privacy Policy | OddLambda",
    description:
      "How OddLambda collects, uses and protects personal data submitted through oddlambda.com, including contact forms, bookings and analytics.",
    h1: "Privacy Policy",
    breadcrumb: "Privacy Policy",
    changefreq: "yearly",
    priority: 0.3,
  },
  {
    path: "/terms",
    title: "Terms of Service | OddLambda",
    description:
      "The terms that apply to using oddlambda.com and to website design and development projects delivered by OddLambda.",
    h1: "Terms of Service",
    breadcrumb: "Terms of Service",
    changefreq: "yearly",
    priority: 0.3,
  },
  {
    path: "/thank-you",
    title: "Thank You | OddLambda",
    description: "Your enquiry has been received. OddLambda will get back to you shortly.",
    h1: "Thank You",
    noindex: true,
  },
];

export const NOT_FOUND = {
  path: "/404",
  title: "Page Not Found | OddLambda",
  description: "The page you were looking for doesn't exist. Explore OddLambda's services, projects or get in touch.",
  h1: "Page not found",
  noindex: true,
};

export function findRoute(pathname) {
  const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  return routes.find((r) => r.path === clean) || NOT_FOUND;
}

export const absUrl = (path) => `${SITE.url}${path === "/" ? "/" : path}`;

// ------------------------------------------------------------
// Structured data (JSON-LD)
// ------------------------------------------------------------

// Site-wide: who you are. Rendered on every page.
export function globalSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: `${SITE.url}/`,
        logo: absUrl(SITE.logo),
        image: absUrl(SITE.ogImage),
        email: SITE.email,
        description:
          "Website design and development studio building premium websites, landing pages, e-commerce stores and web apps.",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          addressCountry: SITE.country,
        },
        areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
        priceRange: "₹7,999 – ₹32,999+",
        currenciesAccepted: "INR, USD",
        knowsAbout: [
          "Website design",
          "Web development",
          "Landing page design",
          "E-commerce development",
          "Next.js",
          "React",
          "UI/UX design",
          "Technical SEO",
          "Real estate websites",
        ],
        sameAs: SITE.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: `${SITE.url}/`,
        name: SITE.name,
        inLanguage: "en-IN",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
    ],
  };
}

// Per-page: breadcrumbs + service offers on package pages.
export function routeSchema(route) {
  if (!route || route.noindex) return null;
  const graph = [];

  if (route.path !== "/") {
    const items = [{ name: "Home", path: "/" }];
    if (route.parent) items.push({ name: route.parent.name, path: route.parent.path });
    items.push({ name: route.breadcrumb || route.h1, path: route.path });
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        item: absUrl(it.path),
      })),
    });
  }

  const serviceNode = (p) => ({
    "@type": "Service",
    name: `${p.name} website package`,
    description: p.summary,
    serviceType: "Website design and development",
    url: absUrl(`/services/${p.slug}`),
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      price: String(p.priceINR),
      priceCurrency: "INR",
      url: absUrl(`/services/${p.slug}`),
    },
  });

  if (route.package) graph.push(serviceNode(route.package));
  if (route.path === "/services") {
    graph.push({
      "@type": "OfferCatalog",
      name: "OddLambda website packages",
      itemListElement: PACKAGES.map(serviceNode),
    });
  }

  if (!graph.length) return null;
  return { "@context": "https://schema.org", "@graph": graph };
}

// Every <head> tag a route needs, as plain data (used by both build + runtime).
export function headFor(route) {
  const url = absUrl(route.path === "/404" ? "/" : route.path);
  const image = absUrl(SITE.ogImage);
  return {
    title: route.title,
    canonical: route.noindex ? null : url,
    meta: [
      { name: "description", content: route.description },
      {
        name: "robots",
        content: route.noindex
          ? "noindex, follow"
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: SITE.locale },
      { property: "og:url", content: url },
      { property: "og:title", content: route.title },
      { property: "og:description", content: route.description },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: SITE.ogImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: route.title },
      { name: "twitter:description", content: route.description },
      { name: "twitter:image", content: image },
    ],
    jsonLd: routeSchema(route),
  };
}
