import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

interface NavbarProps {
  sections: {
    hero: React.RefObject<HTMLElement>;
    projects: React.RefObject<HTMLElement>;
    services: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  // State variables
  const [activeSection, setActiveSection] = useState<string>("");
  const [transparentNavbar, setTransparentNavbar] = useState<boolean>(true);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    // Active navbar scrolling feature
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );

    // Observe each section
    Object.values(sections).forEach((sectionRef) => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    });

    const handleScroll = () => setTransparentNavbar(window.scrollY === 0)

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      // Cleanup observer
      Object.values(sections).forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showMobileMenu, sections]);

  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Playwrite+BR:wght@100..400&display=swap'" rel="stylesheet" />
      <nav className={`fixed top-0 z-50 w-full h-16 border-b border-b-zinc-800 bg-zinc-900 ${!transparentNavbar && "show"}`}></nav>
      <nav className={`fixed top-16 z-50 w-full h-16 text-zinc-400`}>
        <div className="container h-full flex items-center justify-between">
          <a href="#hero" className="pt-1" style={{ fontFamily: "Playwrite BR" }} onClick={() => setShowMobileMenu(false)}>Lucca Lazzarini Silva</a>

          <div className="hidden gap-3 md:flex">
            <a href="#projects" className={`navlink ${activeSection === "projects" && "active"}`}>Projects</a>
            {/* <a href="#resume" className={`navlink ${activeSection === "resume" && "active"}`}>Resume</a> */}
            <a href="#services" className={`navlink ${activeSection === "services" && "active"}`}>Services</a>
            <a href="#contact" className={`navlink ${activeSection === "contact" && "active"}`}>Contact</a>
          </div>

          <div className="menu-icon md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <FaBars className="scale-125" />
          </div>
        </div>
      </nav>
      <nav className={`fixed z-40 w-screen h-screen pt-16 bg-zinc-900 text-zinc-400 ${showMobileMenu && "show"}`}>
        <div className="mobile-menu">
          <a href="#projects" className={`m-navlink ${activeSection === "projects" && "active"}`} onClick={() => setShowMobileMenu(!showMobileMenu)}> Projects</a>
          <a href="#services" className={`m-navlink ${activeSection === "services" && "active"}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>Services</a>
          <a href="#contact" className={`m-navlink ${activeSection === "contact" && "active"}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
