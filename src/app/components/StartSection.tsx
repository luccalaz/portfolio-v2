import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typed from "typed.js";

interface StartSectionProps {
  sections: {
    start: React.RefObject<HTMLElement>;
  };
}

const StartSection: React.FC<StartSectionProps> = ({ sections }) => {
  const type = useRef(null);

  useEffect(() => {
    const typed = new Typed(type.current, {
      strings: [
        "Lucca Lazzarini Silva",
        "a web developer",
        "a quick learner",
        "passionate",
        "determined",
        "adaptive",
      ],
      typeSpeed: 70,
      backDelay: 2000,
      backSpeed: 30,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header id="start" className="h-screen" ref={sections.start}>
      <div className="flex items-center h-full text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/hero-bg.jpg)` }}>
        <div className="container flex justify-between">
          <div className="flex-shrink flex flex-col justify-center gap-5">
            <div className="text-4xl font-bold md:text-6xl">
              <div>{"Hello,"}</div>
              <div>
                {"I'm "}<span ref={type} className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"/>
              </div>
            </div>
            <div className="text-xs font-medium text-zinc-300 md:text-base">
              {"And this is my portfolio website! Please go ahead and explore to find out all the relevant work and projects I've done so far. I hope you'll find some really inspiring creations around here!"}
            </div>
            <div className="flex gap-5">
              <a href="#projects" className="btn btn-primary">
                Check out my work
              </a>
              <a href="https://linkedin.com/in/luccalaz" target="_blank" className="btn btn-outline btn-icon">
                <FaLinkedin className="icon"/>
                <span className="text">LinkedIn</span>
              </a>
              <a href="https://github.com/luccalaz" target="_blank" className="btn btn-outline btn-icon">
                <FaGithub className="icon"/>
                <span className="text">GitHub</span>
              </a>
            </div>
          </div>
          <img className="hidden xl:block" src="/images/hero-img.png" width={500} alt="Illustration of a developer in a cartoonish style."/>
        </div>
      </div>
    </header>
  );
};

export default StartSection;
