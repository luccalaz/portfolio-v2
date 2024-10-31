interface ContactSectionProps {
    sections: {
      contact: React.RefObject<HTMLElement>;
    };
  }
  
  const ContactSection: React.FC<ContactSectionProps> = ({ sections }) => {
    return (
      <section
        id="contact"
        className="h-screen pt-16 bg-zinc-800"
        ref={sections.contact}
      >
        <div className="section-container">
          <h2 className="text-4xl font-bold text-white">Contact</h2>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  