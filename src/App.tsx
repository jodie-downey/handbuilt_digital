import { useState, useEffect } from "react";
import { siteContent } from "./data/content";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Packages from "./components/sections/Packages";
import Addons from "./components/sections/Addons";
import Maintenance from "./components/sections/Maintenance";
import Process from "./components/sections/Process";
import Contact from "./components/sections/Contact";
import About from "./components/sections/About";
import Footer from "./components/sections/Footer";

export default function App() {
  const { nav, hero, services, packages, addons, maintenance, process, contact, about, footer } =
    siteContent;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <header className="sticky top-0 z-50 border-b border-brand-purple/20 bg-brand-bg/80 backdrop-blur-md">
        <div
          className={`mx-auto flex max-w-5xl items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "py-2" : "py-4"
          }`}
        >
          <img
            src={nav.logoSrc}
            alt={nav.logoAlt}
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-24 md:h-28 lg:h-44" : "h-36 md:h-48 lg:h-56"
            }`}
          />
          <a
            href={nav.cta.href}
            className="rounded-xl bg-brand-accent/20 px-4 py-2 text-sm font-semibold text-brand-purple-dark hover:bg-brand-accent/30 transition-colors"
          >
            {nav.cta.label}
          </a>
        </div>
      </header>

      <Hero content={hero} />
      <Services content={services} />
      <Packages content={packages} />
      <Addons content={addons} />
      <Maintenance content={maintenance} />
      <Process content={process} />
      <Contact content={contact} />
      <About content={about} />
      <Footer content={footer} />
    </div>
  );
}
