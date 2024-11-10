import Reveal from "./Reveal";

interface ContactProps {
    sections: {
      contact: React.RefObject<HTMLElement>;
    };
  }
  
  const Contact: React.FC<ContactProps> = ({ sections }) => {
    return (
      <section id="contact" ref={sections.contact}>
        <div className="container my-12">
          <Reveal className="header">Contact</Reveal>
        </div>
      </section>
    );
  };
  
  export default Contact;
  