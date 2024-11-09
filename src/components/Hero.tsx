import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from 'next/image'
import Typed from "typed.js";
import Reveal from "./Reveal";

interface HeroProps {
  sections: {
    hero: React.RefObject<HTMLElement>;
  };
}

const Hero: React.FC<HeroProps> = ({ sections }) => {
  const type = useRef(null);

  useEffect(() => {
    const typed = new Typed(type.current, {
      strings: [
        "Lucca Lazzarini Silva.",
        "a web developer.",
        "a quick learner.",
        "passionate.",
        "determined.",
        "adaptive.",
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
    <section id="hero" className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/hero-bg.jpg)` }} ref={sections.hero}>
        <div className="container flex">
          <Reveal className="xl:basis-4/6 flex flex-col justify-center gap-5" viewport={{ once: false }} staggerChildren>
            <div className="text-4xl font-bold text-white md:text-6xl">
              <div>{"Hello,"}</div>
              <div>
                {"I'm "}<span ref={type} className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"/>
              </div>
            </div>
            <div className="text-xs font-medium text-zinc-300 md:text-base">
              {"And I've been coding for 6 years, but in web development I have 2 years of experience. I have a true passion for technology and solving real life problems. I enjoy building cool things that have a potential to help people."}
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
          </Reveal>
          <Reveal className="basis-2/6 hidden xl:block" viewport={{ once: false }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7}} >
            <Image className="rounded-2xl" src="/images/hero-img.png" width={500} height={500} alt="Illustration of a developer in a cartoonish style."/>
          </Reveal>
      </div>
    </section>
  );
};

export default Hero;
