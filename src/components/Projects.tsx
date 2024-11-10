import Reveal from "./Reveal";
import Image from 'next/image';
import path from 'path';

interface ProjectsProps {
  sections: {
    projects: React.RefObject<HTMLElement>;
  };
}

interface Project {
  id: number,
  image: string,
  title: string
  description: string,
  url: string,
  tags: string[],
  buttons: Button[]
}

interface Button {
  type: string,
  text: string,
  url: string
}

let projects: Project[] = [
  {
    id: 1,
    image: "/images/projects/portfolio-site.png",
    title: "Portfolio Website",
    description: "This website! Made with mostly what I learned in college as well as a few other things I picked up along the way. This website will be constantly updated with my latest projects and relevant work as a Full-Stack Web Developer.",
    url: "https://github.com/luccalaz/portfolio",
    tags: ["React", "Next.JS", "TypeScript", "Tailwind CSS", "MongoDB"],
    buttons: [
      { type: "primary", text: "Source code", url: "https://github.com/luccalaz/portfolio" },
    ]
  },
  {
    id: 2,
    image: "/images/projects/weather-app.png",
    title: "Weather App",
    description: "This is a weather app I developed using the OpenWeather API and the OpenMeteo API at the end of my first year in college. I tried to make it a clone of the Apple Weather App and in my opinion it looks pretty close.",
    url: "https://weather-app-luccalaz.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
    buttons: [
      { type: "primary", text: "View project", url: "https://weather-app-luccalaz.vercel.app/" },
      { type: "outline", text: "Source code", url: "https://github.com/luccalaz/weather-app" },
    ]
  },
  {
    id: 3,
    image: "/images/projects/woocommerce-site.png",
    title: "WooCommerce Store",
    description: "An e-commerce store I set up for a real client using WordPress and the WooCommerce plugin. Even though there was little to no coding involved (other than a few CSS adjustments), it helped me get used to CMS's and WordPress in general.",
    url: "https://mljc.ca/",
    tags: ["WordPress", "WooCommerce", "CSS"],
    buttons: [
      { type: "primary", text: "View project", url: "https://mljc.ca/" },
    ]
  },
  {
    id: 4,
    image: "/images/projects/documentation-site.png",
    title: "Documentation Website",
    description: "This is a documentation website I made during my second semester in college. It was the first time I built a website using Tailwind. Getting the navigation selection to change depending on which section the user scrolled to was a bit of a challenge. I ended up having to learn how to use IntersectionObserver for the first time.",
    url: "https://luccalaz.github.io/documentation-website-project",
    tags: ["HTML", "JavaScript", "Tailwind CSS", "Font Awesome"],
    buttons: [
      { type: "primary", text: "View project", url: "https://luccalaz.github.io/documentation-website-project" },
      { type: "outline", text: "Source code", url: "https://github.com/luccalaz/documentation-website-project" },
    ]
  },
]

const Projects: React.FC<ProjectsProps> = ({ sections }) => {
  

  return (
    <section id="projects" ref={sections.projects}>
      <div className="container my-12">
        <Reveal className="header">Projects</Reveal>
        <Reveal className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-10" staggerChildren={0.3} delayChildren={0.3}>
          {projects.map((project) => (
            <div key={project.id} onClick={() => window.open(project.url)} className="project-card group">
              <div className="h-2/4 relative border-b border-b-zinc-800 overflow-hidden">
                <img
                  src={project.image}
                  alt="Project Image"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-zinc-300 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="mt-2 text-sm lg:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-3 my-4">
                    {project.tags.map((tag, i) => <div key={i} className="py-1 px-3 bg-zinc-800 text-sm rounded-lg flex items-center gap-2">
                      <Image src={`/images/icons/${tag}.svg`} width={13} height={13} alt="Tech icon" /> {tag}
                      </div>)}
                  </div>
                </div>
                <div className={`${project.buttons.length > 0 ? "flex" : "hidden"} gap-5 mt-2`}>
                  {project.buttons.map((btn, i) => <button key={i} onClick={() => window.open(btn.url)} className={`w-full btn btn-${btn.type}`}>{btn.text}</button>)}
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
