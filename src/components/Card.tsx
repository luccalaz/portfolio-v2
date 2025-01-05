import { Project } from "@/tools/data.model";
import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({ project, index } : { project: Project, index: number }) => {
    if (project.isFeatured) return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.8, delay: index * 0.4 }}
            key={project.id} 
            onClick={() => window.open(project.url)} 
            className="project-card group 2xl:flex 2xl:col-span-2"
        >
            <div className="2xl:w-2/4 border-r border-b-0 border-zinc-800 overflow-hidden">
                <Image
                    src={project.image}
                    alt="Project Image"
                    width={1200}
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
        </motion.div>
    );

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.8, delay: index * 0.4 }}
            key={project.id} 
            onClick={() => window.open(project.url)} 
            className="project-card group"
        >
            <div className="border-b border-zinc-800 overflow-hidden">
                <Image
                    src={project.image}
                    alt="Project Image"
                    width={1200}
                    height={300}
                    className="object-cover aspect-[16/9] transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-6 text-zinc-300 flex flex-col justify-center flex-grow">
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
        </motion.div>
    );
};

export default Card;
