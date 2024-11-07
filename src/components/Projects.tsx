"use client"

import Reveal from "./Reveal";

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
  tags: string[],
  url: string,
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
    image: "https://luccalaz.github.io/portfolio/images/portfolio.png",
    title: "Portfolio Website",
    description: "Made with mostly what I learned in college as well as a few other things I picked up along the way. This website will be constantly updated with my latest projects and relevant work as a Full-Stack Web Developer.",
    tags: ["React", "Next.JS", "TypeScript", "Tailwind CSS", "MongoDB"],
    url: "https://github.com/luccalaz/portfolio",
    buttons: [
      {type:"primary", text: "Source code", url: "https://github.com/luccalaz/portfolio"},
    ]
  },
  {
    id: 2,
    image: "https://luccalaz.github.io/portfolio/images/weatherApp.png",
    title: "Weather App",
    description: "This is a weather app I developed using the OpenWeather API and the OpenMeteo API at the end of my first year at NSCC. I tried to make it a clone of the Apple Weather App and in my opinion it looks pretty close.",
    tags: ["HTML", "Sass", "JavaScript", "OpenWeather API"],
    url: "https://weather-app-luccalaz.vercel.app/",
    buttons: [
      {type:"primary", text: "Preview", url: "https://weather-app-luccalaz.vercel.app/"},
      {type:"outline", text: "Source code", url: "https://github.com/luccalaz/weather-app"},
    ]
  },
  {
    id: 3,
    image: "/images/project-img.png",
    title: "Documentation Website",
    description: "This is a documentation website I made during my second semester in NSCC. It was the first time I built a website using Tailwind. Getting the navigation selection to change depending on which section the user scrolled to was a bit of a challenge. I ended up having to learn how to use IntersectionObserver for the first time.",
    tags: ["HTML", "JavaScript", "Tailwind CSS", "FontAwesome"],
    url: "https://luccalaz.github.io/documentation-website-project",
    buttons: [
      {type:"primary", text: "Preview", url: "https://luccalaz.github.io/documentation-website-project"},
      {type:"outline", text: "Source code", url: "https://github.com/luccalaz/documentation-website-project"},
    ]
  },
  {
    id: 4,
    image: "https://luccalaz.github.io/portfolio/images/codeflex-fix.png",
    title: "Codeflex",
    description: "Participated and won 2nd place in NSCC's 2023 Codeflex programming challenge. This was a hackathon-type event spanning several hours where teams of 2 compete by completing challenges in multiple programming languages and technologies.",
    tags: ["HTML", "CSS", "Bootstrap", "Python", "SQL"],
    url: "https://w0476108.wixsite.com/codeflex/about",
    buttons: [
      {type:"primary", text: "Learn more", url: "https://w0476108.wixsite.com/codeflex/about"},
    ]
  },
]


const Projects: React.FC<ProjectsProps> = ({ sections }) => {

  return (
    <section id="projects" ref={sections.projects}>
      <div className="container my-16 text-zinc-200">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Projects</h2>
        <Reveal className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-10" staggerChildren={0.3} delayChildren={0.3}>
          {projects.map((project) => (
            <div key={project.id} onClick={() => window.open(project.url)} className="rounded-xl h-fit sm:hover:-translate-y-1 hover:cursor-pointer border border-zinc-800 bg-zinc-900 transition-all active:translate-y-0 overflow-hidden">
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
                  <p className="mt-2 text-sm lg:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-3 my-4">
                    {project.tags.map((tag, i) => <span key={i} className="py-1 px-3 bg-zinc-800 rounded-lg">{tag}</span>)}
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
