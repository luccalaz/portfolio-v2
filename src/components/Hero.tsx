import { useEffect, useRef } from "react";
import { FaChevronDown, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from 'next/image'
import Typed from "typed.js";
import { Sections } from "@/tools/data.model";
import { easeOut, motion } from "framer-motion";

const Hero = ({ sections } : { sections: Sections }) => {
  const type = useRef(null);

  useEffect(() => {
    const typed = new Typed(type.current, {
      strings: [
        "Lucca Lazzarini Silva.",
        "a web developer.",
        "a quick learner.",
        "a problem solver.",
        "passionate.",
        "adaptable.",
        "determined.",
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
      <div className="container flex gap-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ staggerChildren: 0.3 }} 
          className="xl:basis-4/6 flex flex-col justify-center gap-5"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
            }}
            className="text-4xl font-bold md:text-6xl"
          >
            <div>{"Hello,"}</div>
            <div>
              {"I'm "}<span ref={type} className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"/>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
            }}
            className="text-sm font-medium text-zinc-300 md:text-lg"
          >
            {"And I have 6 years of coding experience and 2 years specializing in web development. I’m passionate about using technology to solve real-world problems and creating modern, user-friendly applications."}
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 }, 
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
            }}
            className="flex gap-5"
          >
            <a href="https://docs.google.com/document/d/1mT5JC2_4RWntQLAW0uBKCckIRguQl9xBw_vZT5al9GM/export?format=pdf" className="btn btn-primary flex items-center gap-2">
              <FaFileDownload className="icon"/>
              Download Resume
            </a>
            <a href="https://linkedin.com/in/luccalaz" target="_blank" className="btn btn-outline btn-icon">
              <FaLinkedin className="icon"/>
              <span className="text">LinkedIn</span>
            </a>
            <a href="https://github.com/luccalaz" target="_blank" className="btn btn-outline btn-icon">
              <FaGithub className="icon"/>
              <span className="text">GitHub</span>
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="basis-2/6 hidden xl:block"
        >
          <Image className="rounded-2xl" src="/images/hero-img.png" width={500} height={500} alt="Illustration of a developer in a cartoonish style."/>
        </motion.div>
      </div>
      <motion.a
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ 
          opacity: { duration: 0.5, delay: 5 },
          y: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
        }}
        href="#projects"
        className="absolute bottom-12 left-1/2 transition-colors text-zinc-300 hover:text-zinc-400 hover:cursor-pointer"
      >
        <FaChevronDown />
      </motion.a>
    </section>
  );
};

export default Hero;
