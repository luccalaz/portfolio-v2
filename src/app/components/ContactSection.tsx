import Reveal from "./Reveal";

interface ContactSectionProps {
    sections: {
      contact: React.RefObject<HTMLElement>;
    };
  }
  
  const ContactSection: React.FC<ContactSectionProps> = ({ sections }) => {
    return (
      <section id="contact" className="g-zinc-700" ref={sections.contact}>
        <div className="section-container">
          <Reveal transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2}} className="m-auto text-4xl font-bold text-white">Contact</Reveal>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  