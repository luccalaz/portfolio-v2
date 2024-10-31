"use client"
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import Typed from 'typed.js';
import $ from 'jquery';

export default function Home() {
   // state variables
   const [activeSection, setActiveSection] = useState<string>("");
   const [showNavbar, setShowNavbar] = useState<boolean>(false);
   const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

   // refs
   const sections = {
     hero: useRef(null),
     projects: useRef(null),
     resume: useRef(null),
     contact: useRef(null),
   };
  const el = useRef(null);

  useEffect(() => {
    // typing animation on hero section
    const typed = new Typed(el.current, {
      strings: ['Lucca Lazzarini Silva' ,'a web developer', 'a quick learner', 'passionate', 'determined', 'adaptive'],
      typeSpeed: 70,
      backDelay: 2000,
      backSpeed: 30,
      loop: true,
      loopCount: Infinity,
    });

    // active navbar scrolling feature
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          setShowNavbar(entry.target.id !== "hero");
          if (showMobileMenu) setShowMobileMenu(entry.target.id !== "hero");
        }
      });
    }, {root: null, rootMargin: "0px", threshold: 0.6});

    // Observe each section
    Object.values(sections).forEach((sectionRef) => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    });

    return () => {
      // cleanup type animation
      typed.destroy();

      // cleanup observer
      Object.values(sections).forEach((sectionRef) => {
        if (sectionRef.current) {observer.unobserve(sectionRef.current);
        }
      });
    };
  }, [showMobileMenu]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header id="hero" className="h-screen" ref={sections.hero}>
        <nav className={`fixed top-0 w-full h-16 border-b-[1px] z-50 border-b-zinc-800 text-zinc-400 bg-zinc-900 ${showNavbar && "show"}`}>
          <div className="w-[90vw] md:w-[80vw] h-full m-auto flex justify-between items-center">
            <div className='flex items-center gap-3'>
              <img className="rounded-full" src='/images/profile.jpeg' width={40}/>
              <a href="#hero" className="font-medium text-xl text-blue-500">
                Lucca Lazzarini Silva
              </a>
            </div>
            
            <div className="hidden md:flex gap-3">
              <a href="#projects" className={`navlink px-3 py-1 transition-colors rounded-md ${activeSection == "projects" && "active"}`}>Projects</a>
              <a href="#resume" className={`navlink px-3 py-1 transition-colors rounded-md ${activeSection == "resume" && "active"}`}>Resume</a>
              <a href="#contact" className={`navlink px-3 py-1 transition-colors rounded-md ${activeSection == "contact" && "active"}`}>Contact</a>
            </div>
            <div 
            className="block md:hidden p-3 rounded-lg border cursor-pointer transition-colors text-zinc-200 border-zinc-700 hover:bg-zinc-800" 
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <FaBars className="scale-125"/>
            </div>
          </div>
        </nav>
        <nav id="mobile" className={`fixed top-16 w-screen h-screen border-b-[1px] z-40 border-b-zinc-800 text-zinc-400 bg-zinc-900 ${showMobileMenu && "show"}`}>
          <div className="w-[90vw] m-auto flex flex-col py-5 gap-3 text-lg">
            <a href="#projects" className={`m-navlink px-5 py-2 rounded-md transition-colors ${activeSection == "projects" && "active"}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>Projects</a>
            <a href="#resume" className={`m-navlink px-5 py-2 rounded-md transition-colors ${activeSection == "resume" && "active"}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>Resume</a>
            <a href="#contact" className={`m-navlink px-5 py-2 rounded-md transition-colors ${activeSection == "contact" && "active"}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>Contact</a>
          </div>
        </nav>
        <div className="flex items-center h-full text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(/images/hero-bg.jpg)`}}>
          <div className="w-[90vw] md:w-[80vw]  mx-auto flex justify-between">
            <div className="flex flex-col justify-center gap-5 flex-shrink">
              <div className='text-4xl md:text-6xl font-bold'>
                <div>{"Hello,"}</div>
                <div>{"I'm "}<span ref={el} className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"/></div>
              </div>
              <div className='text-xs md:text-base font-medium text-zinc-300'>
                {"And this is my portfolio website! Please go ahead and explore to find out all the relevant work and projects I've done so far. I hope you'll find some really inspiring creations around here!"}
              </div>
              <div className="flex gap-5">
                <a href="#projects" className="text-sm md:text-base px-5 py-2 rounded-lg transition-colors bg-zinc-700 hover:bg-zinc-800 text-white">Check out my work</a>
                <a href="https://linkedin.com/in/luccalaz" target="_blank" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-zinc-800 text-white border-zinc-600 border">
                  <FaLinkedin className="scale-125"/> <span className="hidden md:block">LinkedIn</span>
                </a>
                <a href="https://github.com/luccalaz" target="_blank" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-zinc-800 text-white border-zinc-600 border">
                  <FaGithub className="scale-125"/> <span className="hidden md:block">GitHub</span>
                </a>
              </div>
            </div>
            <img className="hidden xl:block" src='/images/hero-img.png' width={500}/>
          </div>
        </div>
      </header>
      <section id="projects" className="h-screen pt-16 bg-zinc-800" ref={sections.projects}>
        <div className="w-[90vw] md:w-[80vw] mx-auto py-10 flex gap-10">
          <h2 className="text-4xl font-bold text-white">Projects</h2>
        </div>
      </section>
      <section id="resume" className="h-screen pt-16 bg-zinc-800" ref={sections.resume}>
        <div className="w-[90vw] md:w-[80vw] mx-auto py-10 flex gap-10">
          <h2 className="text-4xl font-bold text-white">Resume</h2>
        </div>
      </section>
      <section id="contact" className="h-screen pt-16 bg-zinc-800" ref={sections.contact}>
        <div className="w-[90vw] md:w-[80vw] mx-auto py-10 flex gap-10">
          <h2 className="text-4xl font-bold text-white">Contact</h2>
        </div>
      </section>
    </div>
  );
  
}