import React, { useState } from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleNavbar();
    }
  };

  return (
    <>
    <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Sofia&display=swap');
          
            .sofia-font {
              font-family: 'Sofia', sans-serif
          }
        `}
      </style>
      <nav className="relative flex flex-wrap items-center justify-between  bg-pink-200" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)" }}>
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        
              <img src="logo.jpg" alt="logo" width="70px" height="70px"/>
            
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
        <li className="nav-item">
          <button
            className="px-3 py-2 flex items-center text-s uppercase font-bold italic sofia-font leading-snug text-black hover:opacity-75"
            onClick={() => scrollToSection("home")}
          >
            <span className="ml-2">Home</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="px-3 py-2 flex items-center text-s uppercase font-bold italic sofia-font leading-snug text-black hover:opacity-75"
            onClick={() => scrollToSection("about")}
          >
            <span className="ml-2">About</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="px-3 py-2 flex items-center text-s uppercase font-bold italic sofia-font leading-snug text-black hover:opacity-75"
            onClick={() => scrollToSection("skills")}
          >
            <span className="ml-2">Skills</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="px-3 py-2 flex items-center text-s uppercase font-bold italic sofia-font leading-snug text-black hover:opacity-75"
            onClick={() => scrollToSection("Certifications")}
          >
            <span className="ml-2">Certifications</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="px-3 py-2 flex items-center text-s uppercase font-bold italic sofia-font leading-snug text-black hover:opacity-75"
            onClick={() => scrollToSection("contact")}
          >
            <span className="ml-2">Contact</span>
          </button>
        </li>
      </ul>
      </div>
    </div>
    </nav>
    </>
  );
  
}
