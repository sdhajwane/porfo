"use client";
import Link from 'next/link'
import { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon , XCircleIcon} from '@heroicons/react/outline'
import MenuOverlay from './MenuOverlay';


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


const Navbar = () => {

    const handleLinkClick = (path) => {
        const target = document.querySelector(path);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section smoothly.
        }
      };

    const [navbarOpen, setNavbarOpen]= useState(false);
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
    <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
    <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">Portfolio</Link>
    <div className="mobile-menu block md:hidden">
        {
            !navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                     <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
                    </button>
            ) : (
                <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
                    </button>
            )
        }
    </div>
    <div className="menu hidden md:block md:w-auto" id="navbar">
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
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
    {navbarOpen ? <MenuOverlay links={navLinks}/>: null}
    </nav>
)
}


export default Navbar