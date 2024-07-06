import React from "react";
import Typewriter from "typewriter-effect";
import resume from "../../assets/docs/Deepali_Sahu_Resume.pdf";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link, Element } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
function Home() {
  return (
    <>
      <Element name="home" className="element">
        <div className="mb-10">
          <div className="">
            <Fade right>
              <h1 className="text-white text-2xl font-semibold ml-6 mt-28">
                Hi! I'm Deepali Sahu
              </h1>
              <h2 className="text-yellow-500 text-4xl font-semibold ml-6 mt-3">
                <Typewriter
                  options={{
                    strings: [
                      "I'm a FullStack Web Developer!",
                      "I'm a Mern Stack Developer!",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>

              <div className="mt-4 ml-6 sm:w-[400px] md:w-[600px] lg:w-[800px]">
                <h3 className="text-sm font-semibold text-gray-400 overflow-hidden text-balance">
                  I am a passionate and results-driven software engineer with [X
                  years] of experience in developing robust and scalable
                  software solutions. My expertise lies in [mention your areas
                  of expertise, e.g., full-stack development, web application
                  development, etc.].
                </h3>
              </div>
            </Fade>
            {/* icons */}
            <Fade bottom>
              <div className="flex gap-3 ml-6 mt-5">
                <FaInstagram
                  color="white"
                  size={20}
                  className="text-white hover:text-neon hover:shadow-blue-200 hover:shadow-md cursor-pointer"
                />
                <FaLinkedin
                  color="white"
                  size={20}
                  className="text-white hover:text-neon hover:shadow-blue-200 hover:shadow-md cursor-pointer"
                />
                <FaGithub
                  color="white"
                  size={20}
                  className="text-white hover:text-neon hover:shadow-blue-200 hover:shadow-md cursor-pointer"
                />
              </div>

              <div className="flex ml-6 mt-8 gap-3">
                <button className="text-md font-medium text-blue-400 border-2 border-blue-400 px-4 py-2 rounded-2xl hover:text-white group relative flex items-center overflow-hidden">
                  <span className="absolute left-0 w-full h-0 transition-all bg-blue-500 opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease"></span>
                  <span className="relative">Hire me</span>
                </button>
                <a
                  href={resume}
                  download="Deepali_Resume.pdf"
                  className="text-md font-medium text-blue-400 border-2 border-blue-400 px-4 py-2 rounded-2xl hover:text-white group relative flex items-center overflow-hidden"
                >
                  <span className="absolute left-0 w-full h-0 transition-all bg-blue-500 opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease"></span>
                  <span className="relative">My Resume</span>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Home;

// .container_btn{
// transform-style:preserve-3d;
// transition: transform 0.3s ease-in-out;
// transform:translateZ(calc(-1 * var(--btn-height)/2));
// }
// .btn:hover{
//   transform:translateZ(calc(-1*var(--btn-height)/2)) rotateX(90deg);
// }
