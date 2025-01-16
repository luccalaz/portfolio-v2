import { Project, Sections } from "@/tools/data.model";
import projectsData from '../data/projects.json';
import Card from "./Card";

let projects: Project[] = projectsData;

const Projects = ({ sections } : { sections: Sections }) => {

  return (
    <section id="projects" ref={sections.projects}>
      <div className="container my-12">
        {/* <h2 className="header">Projects</h2> */}
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-flow-row gap-10 mt-12">
          {projects.map((project, index) => (
              <Card key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
