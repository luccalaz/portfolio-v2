import useActiveSection from "@/hooks/useActiveSection";
import { motion } from "framer-motion";
import { RefObject, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = ({ sections } : { sections: RefObject<HTMLElement>[] }) => {
  // State variables
  const [transparentNavbar, setTransparentNavbar] = useState<boolean>(true);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const activeSection = useActiveSection(sections);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is at the very top
      setTransparentNavbar(window.scrollY === 0);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Call handleScroll initially to set the correct state on load
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav 
        className={`fixed top-0 z-50 w-full h-14 border-b border-b-zinc-800 bg-zinc-900/70 backdrop-blur-xl ${!transparentNavbar && "show"}`}></nav>

      <motion.nav 
        initial={{ y: -128 }}
        animate={{ y: -64 }}
        className={`fixed top-16 z-50 w-full h-14 text-zinc-400`}
      >
        <div className="container h-full flex items-center justify-between">
          <a href="/#hero" className="pt-1 text-sm" style={{ fontFamily: "Playwrite BR" }} onClick={() => setShowMobileMenu(false)}>Lucca Lazzarini Silva</a>

          <div className="hidden gap-3 md:flex">
            <a href="/#projects" className={`navlink ${activeSection == 'projects' && 'active'}`}>Projects</a>
            <a href="/#contact" className={`navlink ${activeSection == 'contact' && 'active'}`}>Contact</a>
          </div>

          <div className="menu-icon md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <FaBars className="scale-125" />
          </div>
        </div>
      </motion.nav>
      <nav className={`fixed z-40 w-screen h-screen pt-16 bg-zinc-900 text-zinc-400 ${showMobileMenu && "show"}`}>
        <div className="mobile-menu">
          <a href="/#projects" className={`m-navlink ${activeSection == 'projects' && 'active'}`} onClick={() => setShowMobileMenu(!showMobileMenu)}> Projects</a>
          <a href="/#contact" className={`m-navlink ${activeSection == 'contact' && 'active'}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
