import Reveal from "./Reveal";

interface ServicesProps {
    sections: {
      services: React.RefObject<HTMLElement>;
    };
  }
  
  const Services: React.FC<ServicesProps> = ({ sections }) => {
    return (
      <section id="services" ref={sections.services}>
        <div className="container my-12 h-[110vh]">
          <Reveal className="header">Services</Reveal>
        </div>
      </section>
    );
  };
  
  export default Services;
  