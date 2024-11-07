"use client"

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
  technologies: string[],
  livePreview: string,
  sourceCode: string
}

let projects: Project[] = [
  {
    id: 1,
    image: "/images/project-img.png",
    title: "Documentation Website",
    description: "This is a documentation website I made during my second semester in NSCC. It was the first time I built a website using Tailwind. Getting the navigation selection to change depending on which section the user scrolled to was a bit of a challenge. I ended up having to learn how to use IntersectionObserver for the first time.",
    technologies: ["HTML", "CSS", "JavaScript", "FontAwesome", "Tailwind CSS"],
    livePreview: "https://luccalaz.github.io/documentation-website-project",
    sourceCode: "https://github.com/luccalaz/documentation-website-project"
  },
  {
    id: 2,
    image: "https://luccalaz.github.io/portfolio/images/weatherApp.png",
    title: "Weather App",
    description: "This is a weather app I developed using the OpenWeather API and the OpenMeteo API at the end of my first year at NSCC. I tried to make it a clone of the Apple Weather App and in my opinion it looks pretty close.",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    livePreview: "https://weather-app-luccalaz.vercel.app/",
    sourceCode: "https://github.com/luccalaz/weather-app"
  },
  {
    id: 3,
    image: "https://luccalaz.github.io/portfolio/images/portfolio.png",
    title: "Portfolio Website",
    description: "This website! Made with only what I learned in my first year of college as well as a few other technologies I picked up along the way. This website will be constantly updated with my latest projects and relevant work as a Full-Stack Web Developer.",
    technologies: ["HTML", "CSS", "JavaScript", "FontAwesome"],
    livePreview: "#",
    sourceCode: "https://github.com/luccalaz/portfolio"
  },
  {
    id: 4,
    image: "https://luccalaz.github.io/portfolio/images/codeflex-fix.png",
    title: "Codeflex",
    description: "Participated and won 2nd place in NSCC's 2023 Codeflex programming challenge.",
    technologies: ["Certificate"],
    livePreview: "https://w0476108.wixsite.com/codeflex",
    sourceCode: "#"
  },
]


const Projects: React.FC<ProjectsProps> = ({ sections }) => {

  return (
    <section id="projects" ref={sections.projects}>
      <div className="container my-16 text-zinc-200">
        <h2 className="text-4xl font-bold text-center mb-20">Projects</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-flow-row gap-10">
          {projects.map((project) => (
            <div key={project.id} onClick={() => window.open(project.livePreview)} className="rounded-xl h-fit hover:-translate-y-1 hover:cursor-pointer border border-zinc-800 bg-zinc-900 transition-all active:translate-y-0 overflow-hidden">
              {/* Left Side: Image with Gradient Overlay */}
              <div className="h-2/4 relative">
                <img
                  src={project.image}
                  alt="Project Image"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900"></div>
              </div>

              {/* Right Side: Content */}
              <div className="p-6 text-zinc-300 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-3 my-4">
                    {project.technologies.map((tech, index) => <span key={index} className="py-1 px-3 bg-zinc-800 rounded-lg">{tech}</span>)}
                  </div>
                </div>
                <div className="flex gap-5 mt-2">
                  <button onClick={() => window.open(project.livePreview)} className="w-full btn btn-primary">Preview</button>
                  <button onClick={() => window.open(project.sourceCode)} className="w-full btn btn-outline">Source Code</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
