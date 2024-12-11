import Card from "./Card";
import Reveal from "./Reveal";
import Image from 'next/image';

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
  isFeatured: boolean;
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
    isFeatured: true,
    tags: ["React", "Next.JS", "TypeScript", "Tailwind CSS"],
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
    isFeatured: false,
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
    isFeatured: false,
    tags: ["WordPress", "WooCommerce", "CSS"],
    buttons: [
      { type: "primary", text: "View project", url: "https://mljc.ca/" },
    ]
  },
  {
    id: 4,
    image: "/images/projects/documentation-site.png",
    title: "Documentation Website",
    description: "This is a documentation website I made during my second semester in college. It was the first time I built a website using Tailwind. Getting the navigation selection to change depending on which section the user scrolled to was a bit of a challenge. I ended up having to learn how to use IntersectionObserver for the first time. I ended up having to learn how to use IntersectionObserver for the first time.",
    url: "https://luccalaz.github.io/documentation-website-project",
    isFeatured: true,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-10">
          {projects.map((project) => (
            <Card key={project.id} project={project}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
