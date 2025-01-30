import { Project } from "@/tools/data.model";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const Card = ({ project, index }: { project: Project; index: number }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const nextImage = useCallback(() => {
        if (!project.images || project.images.length <= 1) return;
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, [project.images]);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        
        if (isHovering && project.images && project.images.length > 1) {
            intervalId = setInterval(nextImage, 2000); // Change image every 2 seconds
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isHovering, nextImage, project.images]);

    // Reset image index when hover ends
    useEffect(() => {
        if (!isHovering) {
            setCurrentImageIndex(0);
        }
    }, [isHovering]);

    const currentImage = project.images?.[currentImageIndex];

    if (project.isFeatured) return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            key={index}
            onClick={() => window.open(project.url)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="project-card group flex flex-col 2xl:flex-row 2xl:col-span-2 h-full"
        >
            <div className="2xl:w-2/4 border-r border-b-0 border-zinc-800 overflow-hidden">
                <Image
                    src={currentImage}
                    alt="Project Image"
                    width={1200}
                    height={300}
                    priority
                    className="object-cover aspect-[16/9] transition-transform duration-300 sm:group-hover:scale-[102%]"
                />
            </div>
            <div className="2xl:w-2/4 2xl:px-10 p-6 text-zinc-300 flex flex-col justify-start 2xl:justify-center flex-grow">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="mt-2 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-3 my-4">
                    {project.tags.map((tag, i) => (
                        <div key={i} className="py-1 px-3 bg-zinc-800 text-xs rounded-lg flex items-center gap-2">
                            <Image src={`/images/icons/${tag}.svg`} width={13} height={13} alt="Tech icon" /> {tag}
                        </div>
                    ))}
                </div>
                <div className={`${project.buttons.length > 0 ? "flex" : "hidden"} gap-5 mt-auto 2xl:mt-2`}>
                    {project.buttons.map((btn, i) => (
                        <button
                            key={i}
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(btn.url);
                            }}
                            className={`2xl:w-fit w-full btn btn-${btn.type}`}
                        >
                            {btn.text}
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            key={index}
            onClick={() => window.open(project.url)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="project-card group flex flex-col h-full"
        >
            <div className="border-b border-zinc-800 overflow-hidden">
                <Image
                    src={currentImage}
                    alt="Project Image"
                    width={1200}
                    height={300}
                    className="object-cover aspect-[16/9] transition-transform duration-300 sm:group-hover:scale-[102%]"
                />
            </div>
            <div className="p-6 text-zinc-300 flex flex-col justify-start flex-grow">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p className="mt-2 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-3 my-4">
                    {project.tags.map((tag, i) => (
                        <div key={i} className="py-1 px-3 bg-zinc-800 text-xs rounded-lg flex items-center gap-2">
                            <Image src={`/images/icons/${tag}.svg`} width={13} height={13} alt="Tech icon" /> {tag}
                        </div>
                    ))}
                </div>
                <div className={`${project.buttons.length > 0 ? "flex" : "hidden"} gap-5 mt-auto`}>
                    {project.buttons.map((btn, i) => (
                        <button
                            key={i}
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(btn.url);
                            }}
                            className={`w-full btn btn-${btn.type}`}
                        >
                            {btn.text}
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Card;