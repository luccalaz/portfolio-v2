"use client";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Page() {
  // Refs
  const sections = {
    hero: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  return (
    <div className="h-screen bg-black">
      <Navbar sections={sections}/>
      <Hero sections={sections} />
      <Projects sections={sections} />
      <Contact sections={sections} />
    </div>
  );
}
