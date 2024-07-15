"use client"
import React, { useState } from 'react'

import {BsCodeSlash} from 'react-icons/bs'
import Link from 'next/link'
import {AiOutlineEye} from 'react-icons/ai'

const ProjectCards = ({ imgUrl, title, description, gitUrl, previewUrl}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
      };
      
      const truncatedDescription = description.slice(0, 10);

  return (
    <div>
        <div 
        className="h-52 md:h-72 rounded-t-xl relative group"
     style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#121212] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
         <Link href={gitUrl}
         className="mr-2 h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <BsCodeSlash 
            className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white "/>
            </Link>   
            {/* <Link href={previewUrl} 
         className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <AiOutlineEye 
            className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white "/>
            </Link>   */}
        </div>
        
        </div>

        <div 
        className="text-white rounded-b-xl mt-3 h-40 bg-[#181818] border border-transparent  hover:border-b-[#adb7be] hover:border-l-[#adb7be] hover:border-r-[#adb7be]  py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            {showFullDescription ? (
          <p className="text-[#adb7be]">{description}</p>
        ) : (
          <p className="text-[#adb7be]">{truncatedDescription}...</p>
        )}
        <button
          onClick={toggleDescription}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          {showFullDescription ? 'Show Less' : 'Show More'}
        </button>
        </div>
        </div>
  )
}

export default ProjectCards