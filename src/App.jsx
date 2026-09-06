import React, { useEffect } from "react";
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
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

// Standalone Pages
import AboutPage from "./app/about/page";
import ProjectsPage from "./app/projects/page"; 
import SmoothScroll from "./components/SmoothScroll";
// import ServicesPage from "./app/services/page"; 
// import ContactPage from "./app/contact/page";   

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

export default function App() {
  return (
    <div className="bg-odd-light text-odd-dark font-sans selection:bg-odd-khaki selection:text-odd-dark min-h-screen">
      <Analytics />
      <SpeedInsights />
      <ScrollToTop />
      <Navbar />
    <SmoothScroll>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route
          path="/about"
          element={
            <>
              <AboutPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <ProjectsPage />
              <Footer />
            </>
          }
        />

        {/* <Route
          path="/services"
          element={
            <>
              <ServicesPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <ContactPage />
              <Footer />
            </>
          }
        /> */}
      </Routes>
      <CookieConsent />
      </SmoothScroll>
    </div>
  );
}