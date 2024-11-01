import Reveal from "./Reveal";

interface ServicesProps {
    sections: {
      services: React.RefObject<HTMLElement>;
    };
  }
  
  const Services: React.FC<ServicesProps> = ({ sections }) => {
    return (
      <section id="services" className="bg-zinc-800" ref={sections.services}>
        <div className="container">
          <Reveal className="m-auto text-4xl font-bold text-white">Services</Reveal>
        </div>
      </section>
    );
  };
  
  export default Services;
  