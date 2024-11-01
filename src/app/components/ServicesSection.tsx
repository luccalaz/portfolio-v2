import Reveal from "./Reveal";

interface ContactSectionProps {
    sections: {
      services: React.RefObject<HTMLElement>;
    };
  }
  
  const ContactSection: React.FC<ContactSectionProps> = ({ sections }) => {
    return (
      <section id="services" className="h-screen pt-16 bg-zinc-800" ref={sections.services}>
        <div className="section-container">
          <Reveal transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2}} className="m-auto text-4xl font-bold text-white">Services</Reveal>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  