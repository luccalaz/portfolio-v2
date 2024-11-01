import { delay } from "framer-motion";
import Reveal from "./Reveal";

interface ProjectsSectionProps {
    sections: {
      projects: React.RefObject<HTMLElement>;
    };
  }
  
  const ProjectsSection: React.FC<ProjectsSectionProps> = ({ sections }) => {
    return (
      <section id="projects" className="bg-zinc-800" ref={sections.projects}>
        <div className="section-container">
          <Reveal transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2}} className="m-auto text-4xl font-bold text-white">Projects</Reveal>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;
  