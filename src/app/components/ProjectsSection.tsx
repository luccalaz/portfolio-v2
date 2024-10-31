interface ProjectsSectionProps {
    sections: {
      projects: React.RefObject<HTMLElement>;
    };
  }
  
  const ProjectsSection: React.FC<ProjectsSectionProps> = ({ sections }) => {
    return (
      <section
        id="projects"
        className="h-screen pt-16 bg-zinc-800"
        ref={sections.projects}
      >
        <div className="section-container">
          <h2 className="text-4xl font-bold text-white">Projects</h2>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;
  