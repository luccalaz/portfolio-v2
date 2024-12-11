import Reveal from "./Reveal";
import Image from "next/image";

interface Button {
    type: string,
    text: string,
    url: string
}

interface CardProps {
    project: {
        id: number,
        image: string,
        title: string
        description: string,
        url: string,
        isFeatured: boolean;
        tags: string[],
        buttons: Button[]
    };
}

const Contact: React.FC<CardProps> = ({ project }) => {
    if (project.isFeatured) return (
        <div key={project.id} onClick={() => window.open(project.url)} className="project-card group 2xl:flex 2xl:col-span-2">
            <div className="2xl:w-2/4 border-r border-b-0 border-zinc-800 overflow-hidden">
                <Image
                    src={project.image}
                    alt="Project Image"
                    width={800}
                    height={300}
                    className="object-cover aspect-[16/9] transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="2xl:w-2/4 2xl:px-10 p-6 text-zinc-300 flex flex-col justify-center">
                <h2 className="2xl:text-2xl text-xl font-bold">{project.title}</h2>
                <p className="mt-2 text-sm lg:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-3 my-4">
                    {project.tags.map((tag, i) => <div key={i} className="py-1 px-3 bg-zinc-800 text-sm rounded-lg flex items-center gap-2">
                        <Image src={`/images/icons/${tag}.svg`} width={13} height={13} alt="Tech icon" /> {tag}
                    </div>)}
                </div>
                <div className={`${project.buttons.length > 0 ? "flex" : "hidden"} gap-5 mt-2`}>
                    {project.buttons.map((btn, i) => <button key={i} onClick={() => window.open(btn.url)} className={`2xl:w-fit w-full btn btn-${btn.type}`}>{btn.text}</button>)}
                </div>
            </div>
        </div>
    );

    return (
        <div key={project.id} onClick={() => window.open(project.url)} className="project-card group">
            <div className="border-b border-zinc-800 overflow-hidden">
                <Image
                    src={project.image}
                    alt="Project Image"
                    width={800}
                    height={300}
                    className="object-cover aspect-[16/9] transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-6 text-zinc-300 flex flex-col justify-center">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="mt-2 text-sm lg:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-3 my-4">
                    {project.tags.map((tag, i) => <div key={i} className="py-1 px-3 bg-zinc-800 text-sm rounded-lg flex items-center gap-2">
                        <Image src={`/images/icons/${tag}.svg`} width={13} height={13} alt="Tech icon" /> {tag}
                    </div>)}
                </div>
                <div className={`${project.buttons.length > 0 ? "flex" : "hidden"} gap-5 mt-2`}>
                    {project.buttons.map((btn, i) => <button key={i} onClick={() => window.open(btn.url)} className={`w-full btn btn-${btn.type}`}>{btn.text}</button>)}
                </div>
            </div>
        </div>
    );
};

export default Contact;
