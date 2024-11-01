import { delay } from "framer-motion";
import Reveal from "./Reveal";

interface ProjectsProps {
    sections: {
      projects: React.RefObject<HTMLElement>;
    };
  }
  
  const Projects: React.FC<ProjectsProps> = ({ sections }) => {
    return (
      <section id="projects" className="bg-zinc-800" ref={sections.projects}>
        <div className="container">
          <Reveal className="mx-auto text-4xl font-bold text-white">Projects</Reveal>
        </div>
      </section>
    );
  };
  
  export default Projects;
  