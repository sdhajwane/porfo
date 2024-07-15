"use client";
import React from 'react'
import dynamic from 'next/dynamic';


const AnimatedNumber =dynamic(() => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievements =[
    {
        metric:"projects",
        value: "10",
        postfix: "+"
    },
    {
        metric:"Achievments",
        value: "10",
        postfix: "+"
    },
    {
        metric:"Certifications",
        value: "2"
    },
    
]

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievements.map((achievement, index)=>{
        return(
            <div key={index} className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
                <h2 className="text-white text-4xl sm:text-xl font-bold ">
                {achievement.value}
                {achievement.postfix}
                </h2>
                <p className="text-[#ADB7BE] sm:text-lg text-base">{achievement.metric}</p>
            </div>
        )
    })}
    </div>
    </div>
  )
}

export default AchievementsSection