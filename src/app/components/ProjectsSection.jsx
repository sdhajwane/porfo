"use client";
import React, {useState , useRef} from 'react'
import ProjectCards from './ProjectCards'
import ProjectTag from './ProjectTag'
import {motion, useInView} from "framer-motion";


const projectsData =[
    {
        id: 1,
        title: "Online Votting System",
        description: "This Online Votting System is Made in Php",
        image: "/images/project/p1image1.png",
        tag: ["All","Php"],
        gitUrl: "https://github.com/sdhajwane/Votting",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "TodoList",
        description: "This is a TodoList Made using React library, Nextjs framework, Nodejs, Tailwind css and JSON Server",
        image: "/images/project/t2i1.png",
        tag: ["All", "NextJs", "NodeJs"],
        gitUrl: "https://github.com/sdhajwane/Todolist-next13",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Portfolio website in Nextjs",
        description: "This is a Portfolio website Made using React library, Nextjs framework, and Tailwind css ",
        image: "/images/project/t3i1.png",
        tag: ["All", "NextJs"],
        gitUrl: "/",
        previewUrl: "/"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange =(newTag)=>{
        setTag(newTag);
    }
    const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section >
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12" >My Projects</h2>

    <div className="text-white flex flex-row justify-center  items-center gap-1  py-6 sm:py-2">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag=== "All"} />
        <ProjectTag onClick={handleTagChange} name="NextJs" isSelected={tag=== "NextJs"} />
        <ProjectTag onClick={handleTagChange} name="Php" isSelected={tag=== "php"} />
        <ProjectTag onClick={handleTagChange} name="NodeJs" isSelected={tag=== "NodeJs"} />
    </div>
    <ul ref={ref} className=" grid md:grid-cols-3 gap-8 md:gap-12">{filteredProjects.map((project, index)=> (
    <motion.li 
    key={index}
    variants={cardVariants}
    initial="initial"
    animate={isInView ? "animate" : "initial"}
    transition={{ duration: 0.1, delay: index * 0.2 }}
           >
    <ProjectCards 
    key={project.id} 
    title={project.title} 
    description={project.description} 
    imgUrl={project.image}
    gitUrl={project.gitUrl}
    previewUrl={project.previewUrl}/>
    </motion.li>
    ))}
    </ul>
    </section>
  )
}

export default ProjectsSection