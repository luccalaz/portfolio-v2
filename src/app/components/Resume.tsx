import Reveal from "./Reveal";

interface ResumeProps {
    sections: {
      resume: React.RefObject<HTMLElement>;
    };
  }
  
  const Resume: React.FC<ResumeProps> = ({ sections }) => {
    return (
      <section id="resume" className="bg-zinc-700" ref={sections.resume}>
        <div className="container">
          <Reveal className="m-auto text-4xl font-bold text-white">Resume</Reveal>
        </div>
      </section>
    );
  };
  
  export default Resume;
  