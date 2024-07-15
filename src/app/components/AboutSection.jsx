"use client";

import React, { useTransition , useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>React.js</li>
                <li>node.js</li>
                <li>MySql</li>
                <li>php</li>
                <li>javascript</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul>
                <li className="font-bold">Master of Computer Application</li>
                <li>Pune University</li>
                <li>2023</li>
                <li className="mt-3 font-bold">Bachelore of science, Information Technology</li>
                <li>Mumbai University</li>
            </ul>
    
        )
    }
]

const AboutSection = () => {
    const [tab, setTab]= useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
  return (
    <section id="About" className="text-white"><div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" width={500} height={500}/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg">I am a passionate and versatile software developer with a strong foundation in various programming languages and technologies. My journey in the world of development has been both educational and rewarding, and Im excited to share my experiences with you.</p>
        <div className="flex flex-row mt-8">
            <TabButton 
            selectTab={()=>handleTabChange("skills")}
            active={tab==="skills"}>
                {" "}Skills{" "}
            </TabButton>
            <TabButton 
            selectTab={()=>handleTabChange("Education")}
            active={tab==="Education"}>
                {" "}Education{" "}
                </TabButton>
           
            
        </div>
        <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
        </div></section>
  )
}

export default AboutSection