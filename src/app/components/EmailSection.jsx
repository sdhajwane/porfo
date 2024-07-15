  "use client";
import React, { useState } from 'react'
import linkdin from "../../../public/images/linkedin.svg"
import github from "../../../public/images/github.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted]= useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data ={
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint ="/api/send";

        const options ={
            method: "POST",

            headers:{
                "Content-Type": "application/json",
            },
            body: JSONdata,
        }
        const response= await fetch(endpoint, options);
        const resData = await response.json();

        if(response.status === 200){
            console.log('message sent.');
            setEmailSubmitted(true);
        }
    }
  return (
    <section id='contact' className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
            I`m always open to new opportunities, collaboration, and discussing potential projects. 
            Feel free to get in touch with me. 
            Let`s connect and explore how we can work together to bring your ideas to life.</p>
            <p ><a href="mailto:Hajsawood1996@gmail.com" className="mb-4 max-w-md font-bold text-white text-xl hover:underline">Mail: hajsawood1996@gmail.com</a></p>
            <p className="mb-5"><a href="tel:+919881145895" className=" mb-4 max-w-md font-bold text-white text-xl hover:underline">Call me</a></p>
            <div className="socials flex flex-row gap-2 ">
                <Link href="https://www.linkedin.com/in/sawood-hajwane-b63998213/">
                    <Image src={linkdin} alt="linkedin icon" className="hover:scale-105 "/>
                </Link>
                <Link href="https://github.com/sdhajwane">
                    <Image src={github} alt="gitub icon" className="hover:scale-105 "/>
                </Link>
            </div>
            
                
                
          
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                    <label htmlFor="email" className="text-white block text-sm font-medium">Your Email</label>
                    <input 
                    type="email" name="email"
                    id="email" required placeholder="Jacob@google.com" 
                    className="bg-[#18191E] mb-2 border border-[#33353F] placeholder-[#9CA2A9] hover:bg-[#9CA2A9] hover:placeholder-black text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                    </div>
                    <div className="mb-6">
                    <label htmlFor="subject" className="text-white block text-sm font-medium">Suject</label>
                    <input 
                    name="subject"
                    type="text" 
                    id="subject" required placeholder="Write subject here" 
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 hover:bg-[#9CA2A9] hover:placeholder-black"
                    />
                    </div>
                    <div className="mb-6">
                    <label 
                    htmlFor="message" className="text-white block text-sm font-medium ">Message</label>
                    <textarea name="message" 
                    id="message" 
                    className="bg-[#18191E] hover:bg-[#9CA2A9] hover:placeholder-black border border-[#33353F] placeholder-[#9CA2A9]
                     text-gray-100 text-sm rounded-lg block w-full p-2.5"placeholder="Leave your message here">
                    </textarea>
                    </div>
                    <button type="submit" className="bg-primary-500 hover:bg-primary-600 rounded-lg text-white font-medium py-2.5 px-5 w-full">Send Message</button>
                    {
                        emailSubmitted &&(
                            <p className="text-green-100 text-sm mt-2">Email submited successfully</p>
                        )
                    }
                </form>
            </div>
    </section>
  )
}

export default EmailSection