import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
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
          <Reveal className="header text-white text-4xl font-bold">Contact</Reveal>
          <div className="mt-8 flex flex-col lg:flex-row lg:space-x-8 text-white">
            <div className="flex-1 p-8 flex flex-col gap-6">
              <h2 className="text-4xl font-semibold mb-4 border-t-8 border-blue-700 pt-5">Get in touch with me, <br/>and let’s chat</h2>
              <p className="text-gray-300 mb-8">
                I’d love to talk more about my skills and how I can be useful to you and your team!
              </p>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-2xl"/>
                  <span>luccalazza@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaGithub className="text-2xl"/>
                  <span>luccalaz</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaLinkedin className="text-2xl"/>
                  <span>linkedin.com/in/luccalaz</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-zinc-900 rounded-lg p-10 mt-8 lg:mt-0">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your email" 
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full p-3 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled selected>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="opportunity">Job Opportunity</option>
                    <option value="collaboration">Collaboration</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    className="w-full p-3 h-32 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your message"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  