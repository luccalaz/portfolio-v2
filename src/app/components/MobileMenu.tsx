interface MobileMenuProps {
    activeSection: string;
    showMobileMenu: boolean;
    setShowMobileMenu: (value: boolean) => void;
  }
  
  const MobileMenu: React.FC<MobileMenuProps> = ({activeSection, showMobileMenu, setShowMobileMenu}) => {
    return (
      <nav id="mobile" className={`fixed top-16 z-40 w-screen h-screen bg-zinc-900 text-zinc-400 border-b border-b-zinc-800 ${showMobileMenu && "show"}`}>
        <div className="mobile-menu">
          <a href="#projects" className={`m-navlink ${activeSection === "projects" && "active"}`} onClick={() => setShowMobileMenu(!showMobileMenu)}> Projects</a>
          <a href="#resume" className={`m-navlink ${activeSection === "resume" && "active"}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>Resume</a>
          <a href="#contact" className={`m-navlink ${activeSection === "contact" && "active"}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>Contact</a>
        </div>
      </nav>
    );
  };
  
  export default MobileMenu;
  