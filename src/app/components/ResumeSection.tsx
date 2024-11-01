import Reveal from "./Reveal";

interface ResumeSectionProps {
    sections: {
      resume: React.RefObject<HTMLElement>;
    };
  }
  
  const ResumeSection: React.FC<ResumeSectionProps> = ({ sections }) => {
    return (
      <section id="resume" className="h-screen bg-zinc-700" ref={sections.resume}>
        <div className="section-container">
          <Reveal transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2}} className="m-auto text-4xl font-bold text-white">Resume</Reveal>
        </div>
      </section>
    );
  };
  
  export default ResumeSection;
  