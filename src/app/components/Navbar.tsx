import { FaBars } from "react-icons/fa";

interface NavbarProps {
  activeSection: string;
  showNavbar: boolean;
  showMobileMenu: boolean;
  setShowMobileMenu: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  showNavbar,
  showMobileMenu,
  setShowMobileMenu,
}) => {
  return (
    <nav
      className={`fixed top-0 z-50 w-full h-16 border-b border-b-zinc-800 bg-zinc-900 text-zinc-400 ${
        showNavbar && "show"
      }`}
    >
      <div className="container h-full flex items-center justify-between">
        <a href="#start" className="pt-1" style={{fontFamily: "Playwrite BR"}}>
          Lucca Lazzarini Silva
        </a>

        <div className="hidden gap-3 md:flex">
          <a
            href="#projects"
            className={`navlink ${activeSection === "projects" && "active"}`}
          >
            Projects
          </a>
          <a
            href="#resume"
            className={`navlink ${activeSection === "resume" && "active"}`}
          >
            Resume
          </a>
          <a
            href="#contact"
            className={`navlink ${activeSection === "contact" && "active"}`}
          >
            Contact
          </a>
        </div>
        <div
          className="menu-icon md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <FaBars className="scale-125" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
