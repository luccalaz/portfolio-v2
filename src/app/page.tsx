"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import StartSection from "./components/StartSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

export default function Page() {
  // State variables
  const [activeSection, setActiveSection] = useState<string>("");
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  // Refs
  const sections = {
    start: useRef<HTMLElement>(null),
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
            setShowNavbar(entry.target.id !== "start");
            if (showMobileMenu) setShowMobileMenu(entry.target.id !== "start");
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
      <StartSection sections={sections} />
      <ProjectsSection sections={sections} />
      <ResumeSection sections={sections} />
      <ServicesSection sections={sections} />
      <ContactSection sections={sections} />
    </div>
  );
}
