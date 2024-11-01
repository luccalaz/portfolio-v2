"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Page() {
  // State variables
  const [activeSection, setActiveSection] = useState<string>("");
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  // Refs
  const sections = {
    hero: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    resume: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    // Active navbar scrolling feature
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setShowNavbar(entry.target.id !== "hero");
            if (showMobileMenu) setShowMobileMenu(entry.target.id !== "hero");
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );

    // Observe each section
    Object.values(sections).forEach((sectionRef) => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    });

    // Disable scrolling when mobile nav menu is shown
    const html = document.querySelector("html");
    if (html) {
      html.style.overflowY = showMobileMenu ? "hidden" : "scroll";
    }

    return () => {
      // Cleanup observer
      Object.values(sections).forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, [showMobileMenu, sections]);

  return (
    <div className="h-screen bg-black">
      <Navbar activeSection={activeSection} showNavbar={showNavbar} showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu}/>
      <MobileMenu activeSection={activeSection} showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu}/>
      <Hero sections={sections} />
      <Projects sections={sections} />
      <Resume sections={sections} />
      <Services sections={sections} />
      <Contact sections={sections} />
    </div>
  );
}
