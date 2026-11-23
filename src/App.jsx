import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import SmoothScroll from "./components/SmoothScroll";
import Seo from "./components/Seo";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Standalone pages are lazy-loaded so the homepage downloads less JavaScript
// (better Core Web Vitals). Each page becomes its own small chunk.
const AboutPage = lazy(() => import("./app/about/page"));
const ProjectsPage = lazy(() => import("./app/projects/page"));
const ServicesPage = lazy(() => import("./app/services/page"));
const PackagePage = lazy(() => import("./app/services/PackagePage"));
const ContactPage = lazy(() => import("./app/contact/page"));
const ThankYouPage = lazy(() => import("./app/thank-you/page"));
const PrivacyPage = lazy(() => import("./app/privacy/page"));
const TermsPage = lazy(() => import("./app/terms/page"));
const NotFoundPage = lazy(() => import("./app/not-found/page"));

// Helper to reset scroll position on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Full Landing Page Composition
function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

// Page + footer wrapper for standalone routes
const withFooter = (page) => (
  <>
    {page}
    <Footer />
  </>
);

// Minimal placeholder while a lazy page chunk loads (matches site background)
const PageFallback = () => <div className="min-h-screen bg-[#EAE6CD]" aria-hidden="true" />;

export default function App() {
  return (
    <div className="bg-odd-light text-odd-dark font-sans selection:bg-odd-khaki selection:text-odd-dark min-h-screen">
      <Analytics />
      <SpeedInsights />
      <Seo />
      <ScrollToTop />
      <Navbar />
      <SmoothScroll>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={withFooter(<AboutPage />)} />
            <Route path="/projects" element={withFooter(<ProjectsPage />)} />
            <Route path="/services" element={withFooter(<ServicesPage />)} />
            {/* PackagePage renders its own FAQ, CTA and Footer */}
            <Route path="/services/:id" element={<PackagePage />} />
            <Route path="/contact" element={withFooter(<ContactPage />)} />
            <Route path="/privacy" element={withFooter(<PrivacyPage />)} />
            <Route path="/terms" element={withFooter(<TermsPage />)} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            {/* Catch-all: real "page not found" instead of a blank screen */}
            <Route path="*" element={withFooter(<NotFoundPage />)} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </SmoothScroll>
    </div>
  );
}
