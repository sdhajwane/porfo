"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon , XCircleIcon} from "@heroicons/react/outline"



const navLinks =[
    {
        title:"About",
        path:"#About",
    },
    {
        title:"Projects",
        path:"#projects",
    },
    {
        title:"Contact",
        path:"#contact",
    },
]



const Navibar = () => {

    const handleLinkClick = (path) => {
        const target = document.querySelector(path);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section smoothly.
        }
      };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">Logo</Link>
        <div className="mobile-menu block md:hidden">
          
        </div>
        <div className="menu  md:block md:w-auto" id="navbar">
            <ul className="flex md:text-xs p-4 md:p-0 md:flex-row md:space-x-8 mt-15">
                {
                    navLinks.map((link, index) =>(
                        <li key={index}>
                             
                             <NavLink href={link.path} title={link.title} onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.path);
                  }}/>
                        </li>
                    ))
                }
            </ul>
        </div>
        </div>
        </nav>
  )
}

export default Navibar