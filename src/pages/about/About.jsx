import React from "react";
import image from "../../images/mypic.jpeg";
import { Link, Element } from "react-scroll";
import Jump from "react-reveal/Jump";
// import "./about.css";
function About() {
  return (
    <>
      <Jump>
        <Element name="about" className="element">
          <div className="flex flex-col h-auto  pb-20 items-center w-full mt-20">
            <div className="flex items-center justify-center mt-6 ml-6 h-14 w-44 pl-5 pr-5 border-transparent rounded-lg shadow-md shadow-cyan-300">
              <h1 className="text-3xl text-teal-500 text-center font-semibold ">
                ABOUT
              </h1>
              {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-teal-200 rounded-lg blur opacity-50 mix-blend-overlay"></div> */}
            </div>
            <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col gap-10 mt-9 ml-16 mr-10 justify-center">
              {/* left */}
              <div className="flex flex-row justify-center">
                <div className="h-[320px] w-[320px] border-2 rounded-full border-blue-300 shadow-xl shadow-blue-400"></div>
                <div className="absolute mt-10 ml-10 shadow-md transform transition-all animate-traverse">
                  <img
                    src={image}
                    alt="photo"
                    className="h-[300px] w-[300px] rounded-full  border-2 border-orange-300 shadow-md shadow-orange-200 "
                  ></img>
                </div>
              </div>
              {/* right */}
              <div className=" mt-10">
                <p className="text-sm font-semibold text-gray-300 sm:pl-10 sm:pr-10">
                  I am a passionate and dedicated software engineer with [X
                  years] of experience in [relevant technologies or programming
                  languages]. My journey in software engineering began with a
                  fascination for technology and a desire to create innovative
                  solutions to real-world problems. Over the years, I have honed
                  my skills in [specific areas of expertise, e.g., web
                  development, mobile app development, etc.] and have
                  successfully delivered robust and scalable software solutions
                  for diverse projects.
                </p>
                <p className="text-sm font-semibold text-gray-300 sm:pl-10 sm:pr-10">
                  As a software engineer, I am driven by a commitment to
                  excellence and a passion for solving complex problems. I am
                  excited about the opportunity to contribute my skills and
                  expertise to [mention any specific goals or projects you are
                  interested in]. I am eager to take on new challenges, learn
                  from experiences, and continue growing both personally and
                  professionally in the dynamic field of software engineering.
                </p>
              </div>
            </div>
          </div>
        </Element>
      </Jump>
    </>
  );
}

export default About;
