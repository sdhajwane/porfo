"use client"
import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievementsSection from './components/AchievementsSection'
import ProjectsSection from './components/ProjectsSection'
import Loading from './components/Loading'
import React, { useEffect, useState } from 'react';


export default function Home() {

  return (
    
    <main className="flex min-h-screen flex-col bg-[#121212] ">
  

    <Navbar />
    <div class="container mx-auto px-12 py-4 mt-24">
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <ProjectsSection/>
      <EmailSection/>
      <Footer />
    </div>
    </main>
  )
}
