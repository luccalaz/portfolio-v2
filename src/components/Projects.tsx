import { Project, Sections } from "@/tools/data.model";
import projectsData from '../data/projects.json';
import Card from "./Card";

interface ProjectsProps {
  sections: Sections
}

let projects: Project[] = projectsData;

const Projects: React.FC<ProjectsProps> = ({ sections }) => {
  

  return (
    <section id="projects" ref={sections.projects}>
      <div className="container my-12">
        <div className="mt-12 grid grid-cols-1 xl:grid-cols-2 grid-flow-row gap-10">
          {projects.map((project, index) => (
              <Card key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
