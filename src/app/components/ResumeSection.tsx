interface ResumeSectionProps {
    sections: {
      resume: React.RefObject<HTMLElement>;
    };
  }
  
  const ResumeSection: React.FC<ResumeSectionProps> = ({ sections }) => {
    return (
      <section
        id="resume"
        className="h-screen pt-16 bg-zinc-800"
        ref={sections.resume}
      >
        <div className="section-container">
          <h2 className="text-4xl font-bold text-white">Resume</h2>
        </div>
      </section>
    );
  };
  
  export default ResumeSection;
  