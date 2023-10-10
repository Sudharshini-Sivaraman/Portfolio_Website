import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
export function HomePage() {
  return (
    
    <div className>
      <section id="home" className="bg-pink-200 py-16 ">
      <>
      <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Sofia&display=swap');
          
            .sofia-font {
              font-family: 'Sofia', sans-serif
          }
        `}
      </style>
      <div className="container mx-auto flex flex-col items-center">
      <img
      src="myimg.jpg"
      alt="susi"
      className="w-64 h-64 rounded-full overflow-hidden object-cover "
      />


    <h1 className="text-6xl  font-bold italic sofia-font leading-snug">Hi, I am <span className="text-6xl  font-bold italic sofia-font leading-snug text-pink-600">Sudharshini</span></h1>
    <p className="text-xl text-black mb-8  font-semibold italic sofia-font mb:text-center">Computer Science and Engineering Student at Francis Xavier Engineering College, Tirunelveli</p>
    <p className="text-2xl  text-black italic sofia-font  md:text-center md:text-3xl md:mx-10 sm:mx-2 ml-2 text-center ">
    I'm a third-year engineering student with a passion for creating user-friendly web interfaces. I specialize in HTML, CSS, Bootstrap, React, and have experience with Tailwind CSS. I'm committed to continuous learning and staying current with industry trends.
    </p>

    <div className="mt-6 space-x-4">
    <div className="mt-6 space-x-4">
  <a
    href="contact"
    className="relative rounded px-5 py-2.5 overflow-hidden group bg-pink-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-pink-700 transition-all ease-out duration-300"
  >
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span className="relative">Contact Me</span>
  </a>
  <a
  href="Resume.pdf" 
  download="Susi_Resume.pdf" 
  className="relative rounded px-5 py-2.5 overflow-hidden group bg-pink-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-pink-700 transition-all ease-out duration-300"
  >
  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
  <span className="relative">
    Download CV <FontAwesomeIcon icon={faDownload} />
  </span>
</a>

</div>

      
    </div>

    </div>
    </>
      </section>

      <section id="about">
        {/* ... your about section content ... */}
      </section>

      <section id="skills">
        {/* ... your skills section content ... */}
      </section>

      <section id="certifications">
        {/* ... your certifications section content ... */}
      </section>

      <section id="contact">
        {/* ... your contact section content ... */}
      </section>
    </div>
  );
}