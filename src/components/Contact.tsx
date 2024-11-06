import Reveal from "./Reveal";

interface ContactProps {
    sections: {
      contact: React.RefObject<HTMLElement>;
    };
  }
  
  const Contact: React.FC<ContactProps> = ({ sections }) => {
    return (
      <section id="contact" className="bg-zinc-800" ref={sections.contact}>
        <div className="container">
          <Reveal className="m-auto text-4xl font-bold text-white">Contact</Reveal>
        </div>
      </section>
    );
  };
  
  export default Contact;
  