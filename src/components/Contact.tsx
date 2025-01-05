import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Sections } from "@/tools/data.model";
  
const Contact = ({ sections } : { sections: Sections }) => {
  return (
    <section id="contact" ref={sections.contact}>
      <div className="container my-12 mb-24">
        {/* <h2 className="header">Contact</h2> */}
        <div className="p-2 flex flex-col lg:flex-row lg:space-x-24">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 border-t-8 border-blue-700 pt-5">Get in touch with me, and let’s chat</h2>
            <p className="text-gray-300 mb-8">
              I’d love to talk more about my skills and how I can be useful to you or your team!
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
          
          <div className="flex-1 rounded-lg mt-12 lg:mt-0">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-2 rounded bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your email" 
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <select 
                  id="subject" 
                  defaultValue={""}
                  className="w-full p-2 rounded bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="opportunity">Job Opportunity</option>
                  <option value="collaboration">Collaboration</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  className="w-full p-2 h-32 rounded bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your message"
                  style={{resize: "none"}}
                />
              </div>
              <button 
                type="submit" 
                className="py-2 px-5 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition"
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
  