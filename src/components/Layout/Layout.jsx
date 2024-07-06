import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Home from "../../pages/Home/Home";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Menus from "../Menus/Menus";
import About from "../../pages/about/About";
import Projects from "../../pages/projects/Projects";
import Education from "../../pages/education/Education";
import Skill from "../../pages/skills/Skill";
import Experience from "../../pages/experience/Experience";
import Contact from "../../pages/contact/Contact";
import video1 from "../../video/video1.mp4";

function Layout() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex flex-row">
      <div
        className={`lg:h-[100vh] md:h-[100vh] sm:h-0 sm:w-0 h-0 w-0 fixed bg-gradient-to-br from-gray-600 to-slate-900 border-2 border-slate-400 rounded-xl overflow-hidden transition-all duration-300 ${
          toggle ? "lg:w-[220px] md:w-[220px]" : "lg:w-[90px] md:w-[90px]"
        }`}
      >
        <div className="flex justify-end cursor-pointer">
          <p onClick={handleToggle}>
            {toggle ? (
              <MdKeyboardDoubleArrowLeft
                size={30}
                color="whitesmoke"
                className="mt-4 transition-transform duration-300 transform "
              />
            ) : (
              <MdKeyboardDoubleArrowRight
                size={30}
                color="whitesmoke"
                className="mt-4 transition-transform duration-300 transform "
              />
            )}
          </p>
        </div>
        <Menus toggle={toggle} />
      </div>
      <div
        className={`flex-grow overflow-hidden transition-all duration-300 h-full ${
          toggle ? "lg:ml-[220px] md:ml-[220px]" : "lg:ml-[90px] md:ml-[90px]"
        }`}
      >
        <video
          className={`fixed -z-10 inset-0 w-full object-cover flex-grow overflow-hidden transition-all opacity-95 duration-300 h-full ${
            toggle ? "lg:ml-[220px] md:ml-[220px]" : "lg:ml-[90px] md:ml-[90px]"
          }`}
          autoPlay
          loop
          muted
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Home />
        <About />
        <Education />
        <Skill />
        <Projects />
        <Experience />
        <Contact />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
