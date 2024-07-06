import React from "react";
import img1 from "../../images/c_logo.png";
import img2 from "../../images/C++_logo.png";
import img3 from "../../images/html_logo.png";
import img4 from "../../images/css_logo.png";
import img5 from "../../images/JS_logo.png";
import img6 from "../../images/Nodejs_logo.png";
import img7 from "../../images/Expressjs_logo.png";
import img8 from "../../images/mongodb_logo.png";
import img9 from "../../images/react_logo.png";
import img10 from "../../images/tailwind_logo.png";
import { Link, Element } from "react-scroll";
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
function Skill() {
  return (
    <>
    
      <Element name="skills" className="element">
        <div className="relative h-auto mt-20">
        
          <div className="flex flex-col items-center h-full w-full ">
          <Roll>
            <div className="flex items-center justify-center mt-10 ml-6 h-14 w-56 pl-6 pr-6 pt-2 pb-2 border-transparent rounded-lg shadow-md shadow-cyan-300">
              <h1 className="text-3xl text-teal-500 text-center font-semibold ">
                My Skills
              </h1>
            </div>
            </Roll>
          
            <div className="mt-20 mb-20 flex justify-center items-center w-full">
              <div className="flex items-center justify-center flex-wrap relative w-5/6 gap-4 sm:w-4/6">
              <Fade bottom>
                <div className="flex flex-col items-center hover:shadow-lg p-2 rounded-xl hover:shadow-gray-400">
                  <div className="bg-white h-16 w-16 rounded-full">
                    <img src={img1} className="w-16 h-16"></img>
                  </div>
                  <h3 className="text-sm font-semibold text-yellow-200">
                    C Programming
                  </h3>
                </div>
                </Fade>
                <Fade bottom>
                <div className="flex flex-col items-center hover:shadow-lg p-2 rounded-xl hover:shadow-gray-400">
                  <div className="bg-white h-16 w-16 rounded-full">
                    <img src={img2} className="w-16 h-16"></img>
                  </div>
                  <h3 className="text-sm font-semibold text-yellow-200">
                    C++ Programming
                  </h3>
                </div>
                </Fade>
                <Fade bottom>
                <div className="flex flex-col items-center hover:shadow-lg p-2 rounded-xl hover:shadow-gray-400">
                  <div className="bg-white flex items-center justify-center h-16 w-16 rounded-full">
                    <img src={img3} className="w-16 h-16"></img>
                  </div>
                  <h3 className="text-sm font-semibold text-yellow-200">
                    HTML
                  </h3>
                </div>
                </Fade>
                <Fade bottom>
                <div className="flex flex-col items-center hover:shadow-lg p-2 rounded-xl hover:shadow-gray-400">
                  <div className="bg-white flex items-center justify-center h-16 w-16 rounded-full">
                    <img src={img4} className="w-16 h-16"></img>
                  </div>
                  <h3 className="text-sm font-semibold text-yellow-200">CSS</h3>
                </div>
                </Fade>   
                <Fade bottom>
                <div className="flex flex-col items-center hover:shadow-lg p-2 rounded-xl hover:shadow-gray-400">
                  <div className="bg-white flex items-center justify-center h-16 w-16 rounded-full">
                    <img src={img5} className="w-14 h-16"></img>
                  </div>
                  <h3 className="text-sm font-semibold text-yellow-200">
                    JavaScript
                  </h3>
                </div>
                </Fade>
                <Fade bottom>
                <div className="flex flex-col items-center hover:shadow-lg p-2 rounded-xl hover:shadow-gray-400">
                  <div className="bg-white flex items-center justify-center h-16 w-16 rounded-full">
                    <img src={img6} className="w-16 h-16"></img>
                  </div>
                  <h3 className="text-sm font-semibold text-yellow-200">
                    NodeJS
                  </h3>
                </div>
                </Fade> 
                <Fade bottom>   
                <div className="flex flex-col items-center hover:shadow-lg p-2 rounded-xl hover:shadow-gray-400">
                  <div className="bg-white flex items-center justify-center h-16 w-16 rounded-full">
                    <img src={img7} className="w-16 h-14"></img>
                  </div>
                  <h3 className="text-sm font-semibold text-yellow-200">
                    ExpressJS
                  </h3>
                </div>
                </Fade>
                <Fade bottom>
                <div className="flex flex-col items-center hover:shadow-lg p-2 rounded-xl hover:shadow-gray-400">
                  <div className="bg-white flex items-center justify-center h-16 w-16 rounded-full">
                    <img src={img8} className="w-16 h-16"></img>
                  </div>
                  <h3 className="text-sm font-semibold text-yellow-200">
                    MongoDB
                  </h3>
                </div>
                </Fade>
                <Fade bottom> 
                <div className="flex flex-col items-center hover:shadow-lg p-2 rounded-xl hover:shadow-gray-400">
                  <div className="bg-white flex items-center justify-center h-16 w-16 rounded-full">
                    <img src={img9} className="w-14 h-14"></img>
                  </div>
                  <h3 className="text-sm font-semibold text-yellow-200">
                    ReactJS
                  </h3>
                </div>
                </Fade>    
                <Fade bottom>
                <div className="flex flex-col items-center hover:shadow-lg p-2 rounded-xl hover:shadow-gray-400">
                  <div className="bg-white flex items-center justify-center h-16 w-16 rounded-full">
                    <img src={img10} className="w-14 h-14"></img>
                  </div>
                  <h3 className="text-sm font-semibold text-yellow-200">
                    Tailwind CSS
                  </h3>
                </div>
                </Fade>
              </div>
            </div>
            
          </div>
        </div>
      </Element>
    </>
  );
}

export default Skill;
