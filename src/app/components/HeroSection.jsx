"use client";
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/resume6-9.pdf'; // Path to your resume.pdf in the public folder.
    downloadLink.download = 'resume6-9.pdf'; // The default file name when downloading.
    downloadLink.click();
  };
  const handleHireMeClick = () => {
    window.location.href = "mailto:hajsawood1996@gmail.com";
  };
  
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I am {""}</span>
                <br></br>
                <TypeAnimation
      sequence={[
        
        "Sawood Hajwane",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Developer",
        1000,
        "Mobile app Developer",
        1000,
        "Frontend Developer",
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />

            </h1>
        <p className="text-[#ADB7BE] text-base sm:mb-6 text-lg lg:text-xl">
            Welcome to Sawood Hajwane`s Development Portfolio! This website serves as a showcase of my skills, experiences, and projects as a software developer. Whether you`re an employer looking for a talented developer or just curious about my work, you`ve come to the right place.
            </p>
            <div>
                <button onClick={handleHireMeClick} className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">Hire me</button>
                <button onClick={handleDownload}className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3">
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
                    </button>
            </div>
            </div>
            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative" >
                    <Image
                    src="/images/hero-imagem.png"
                    alt='hero image'
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
                </div>
            </div>
            </div>
    </section>
  )
}

export default HeroSection