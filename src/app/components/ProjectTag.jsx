import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
    ? "text-white border-cyan-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <div>
        <button 
        className={`${buttonStyles} rounded-full border-2 px-4 py-3 text-xl cursor-pointer`} 
        onClick={() => onClick (name)}>
            {name}</button>
    </div>
    
  )
}

export default ProjectTag