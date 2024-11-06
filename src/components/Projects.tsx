import { delay } from "framer-motion";
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
  technologies: string[],
  livePreview: string,
  sourceCode: string
}

const projects: Project[] = [
  {
    id: 1,
    image: "/images/project-img.png",
    title: "Documentation Website",
    description: "An example of a documentation website I made during my second semester in NSCC using HTML, CSS, JavaScript and Tailwind CSS. This was the first time I built a wesbite using Tailwind.",
    technologies: [ "HTML" , "CSS", "JavaScript", "FontAwesome", "Tailwind CSS" ],
    livePreview: "https://luccalaz.github.io/documentation-website-project",
    sourceCode: "https://github.com/luccalaz/documentation-website-project"
  },
  {
    id: 1,
    image: "/images/project-img.png",
    title: "Documentation Website",
    description: "An example of a documentation website I made during my second semester in NSCC using HTML, CSS, JavaScript and Tailwind CSS. This was the first time I built a wesbite using Tailwind.",
    technologies: [ "HTML" , "CSS", "JavaScript", "FontAwesome", "Tailwind CSS" ],
    livePreview: "https://luccalaz.github.io/documentation-website-project",
    sourceCode: "https://github.com/luccalaz/documentation-website-project"
  },
  {
    id: 2,
    image: "/images/project-img.png",
    title: "Documentation Website",
    description: "An example of a documentation website I made during my second semester in NSCC using HTML, CSS, JavaScript and Tailwind CSS. This was the first time I built a wesbite using Tailwind.",
    technologies: [ "HTML" , "CSS", "JavaScript", "FontAwesome", "Tailwind CSS" ],
    livePreview: "https://luccalaz.github.io/documentation-website-project",
    sourceCode: "https://github.com/luccalaz/documentation-website-project"
  },
  {
    id: 3,
    image: "/images/project-img.png",
    title: "Documentation Website",
    description: "An example of a documentation website I made during my second semester in NSCC using HTML, CSS, JavaScript and Tailwind CSS. This was the first time I built a wesbite using Tailwind.",
    technologies: [ "HTML" , "CSS", "JavaScript", "FontAwesome", "Tailwind CSS" ],
    livePreview: "https://luccalaz.github.io/documentation-website-project",
    sourceCode: "https://github.com/luccalaz/documentation-website-project"
  },
  {
    id: 4,
    image: "/images/project-img.png",
    title: "Documentation Website",
    description: "An example of a documentation website I made during my second semester in NSCC using HTML, CSS, JavaScript and Tailwind CSS. This was the first time I built a wesbite using Tailwind.",
    technologies: [ "HTML" , "CSS", "JavaScript", "FontAwesome", "Tailwind CSS" ],
    livePreview: "https://luccalaz.github.io/documentation-website-project",
    sourceCode: "https://github.com/luccalaz/documentation-website-project"
  },
  {
    id: 5,
    image: "/images/project-img.png",
    title: "Documentation Website",
    description: "An example of a documentation website I made during my second semester in NSCC using HTML, CSS, JavaScript and Tailwind CSS. This was the first time I built a wesbite using Tailwind.",
    technologies: [ "HTML" , "CSS", "JavaScript", "FontAwesome", "Tailwind CSS" ],
    livePreview: "https://luccalaz.github.io/documentation-website-project",
    sourceCode: "https://github.com/luccalaz/documentation-website-project"
  },
  {
    id: 6,
    image: "/images/project-img.png",
    title: "Documentation Website",
    description: "An example of a documentation website I made during my second semester in NSCC using HTML, CSS, JavaScript and Tailwind CSS. This was the first time I built a wesbite using Tailwind.",
    technologies: [ "HTML" , "CSS", "JavaScript", "FontAwesome", "Tailwind CSS" ],
    livePreview: "https://luccalaz.github.io/documentation-website-project",
    sourceCode: "https://github.com/luccalaz/documentation-website-project"
  },
]

const Projects: React.FC<ProjectsProps> = ({ sections }) => {
  return (
    <section id="projects" className="bg-zinc-800" ref={sections.projects}>
      <div className="container my-20">
        <div className="flex flex-wrap gap-5">
          {projects.map((project) => (
            <div className="relative h-80 flex-grow rounded-md shadow-lg min-w-full sm:min-w-96 border border-zinc-700 overflow-hidden"></div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
