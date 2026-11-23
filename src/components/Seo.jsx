import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findRoute, headFor } from "../seo/siteConfig";

// Keeps <title>, meta description, canonical, Open Graph, Twitter and
// page-level JSON-LD in sync with the current route while the visitor
// navigates client-side. The very first load is already correct because
// scripts/seo-prerender.mjs writes a static HTML file per route.
//
// Optional `override` lets a page force a route config (used by the 404 page).

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({ override }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = override || findRoute(pathname);
    const head = headFor(route);

    document.title = head.title;

    head.meta.forEach((m) => {
      if (m.name) upsertMeta("name", m.name, m.content);
      else upsertMeta("property", m.property, m.content);
    });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (head.canonical) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", head.canonical);
    } else if (canonical) {
      canonical.remove();
    }

    let ld = document.getElementById("route-jsonld");
    if (head.jsonLd) {
      if (!ld) {
        ld = document.createElement("script");
        ld.type = "application/ld+json";
        ld.id = "route-jsonld";
        document.head.appendChild(ld);
      }
      ld.textContent = JSON.stringify(head.jsonLd);
    } else if (ld) {
      ld.remove();
    }
  }, [pathname, override]);

  return null;
}
