import React, { useEffect } from "react";
import image from "../../images/mypic.jpeg";
import { IoHome } from "react-icons/io5";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { FaBookOpenReader } from "react-icons/fa6";
import { AiOutlineProject } from "react-icons/ai";
import { FaHouseUser } from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
function Menus({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold text-gray-300">
                Deepali Sahu
              </h3>
              <img
                src={image}
                alt="profile pic"
                className="flex rounded-full h[120px] w-[120px] justify-center mt-2"
              ></img>
            </div>
          </Zoom>
          <Fade>
            <div className="">
              <div className="">
                {/* <div className="flex mt-3 ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"> */}
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                  className="flex mt-3 ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"
                >
                  <IoHome size={17} color="white" />
                  Home
                </Link>
                {/* </div> */}

                {/* <div className="flex ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"> */}
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="flex ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"
                >
                  <MdOutlineRoundaboutRight size={17} color="white" />
                  About
                </Link>
                {/* </div> */}

                {/* <div className="flex ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"> */}
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="flex ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"
                >
                  <MdOutlineComputer size={17} color="white" />
                  Experience
                </Link>
                {/* </div> */}

                {/* <div className="flex ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"> */}
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="flex ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"
                >
                  <GrTechnology size={17} color="white" />
                  Skills
                </Link>

                {/* <div className="flex ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"> */}
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="flex ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"
                >
                  <FaBookOpenReader size={17} color="white" />
                  Education
                </Link>
                {/* </div> */}

                {/* <div className="flex ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"> */}
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="flex ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"
                >
                  <AiOutlineProject size={17} color="white" />
                  Projects
                </Link>
                {/* </div> */}

                {/* <div className="flex ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"> */}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="flex ml-8 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer transition-transform duration-200 transform hover:scale-105 hover:border hover:border-1 hover:shadow-md hover:rounded-lg hover:border-gray-700"
                >
                  <FaHouseUser size={17} color="white" />
                  Contact
                </Link>
                {/* </div> */}
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <div className="">
          <div className="">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              className="flex mt-3 ml-6 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer hover:scale-125"
            >
              <IoHome
                size={20}
                color="white"
                title="Home"
                className="hover:border-b hover:border-orange-200 transition-all ease-in-out"
              />
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              className="flex mt-3 ml-6 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer hover:scale-125"
            >
              <MdOutlineRoundaboutRight
                size={20}
                color="white"
                title="About"
                className="hover:border-b hover:border-orange-200 transition-all ease-in-out"
              />
            </Link>

            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              className="flex mt-3 ml-6 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer hover:scale-125"
            >
              <MdOutlineComputer
                size={20}
                color="white"
                title="Experience"
                className="hover:border-b hover:border-orange-200 transition-all ease-in-out"
              />
            </Link>

            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              className="flex mt-3 ml-6 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer hover:scale-125"
            >
              <GrTechnology
                size={20}
                color="white"
                title="Skills"
                className="hover:border-b hover:border-orange-200 transition-all ease-in-out"
              />
            </Link>

            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              className="flex mt-3 ml-6 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer hover:scale-125"
            >
              <FaBookOpenReader
                size={20}
                color="white"
                title="Education"
                className="hover:border-b hover:border-orange-200 transition-all ease-in-out"
              />
            </Link>

            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              className="flex mt-3 ml-6 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer hover:scale-125"
            >
              <AiOutlineProject
                size={20}
                color="white"
                title="Projects"
                className="hover:border-b hover:border-orange-200 transition-all ease-in-out"
              />
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              className="flex mt-3 ml-6 text-white text-sm gap-3 items-center p-2 mr-5 cursor-pointer hover:scale-125"
            >
              <FaHouseUser
                size={20}
                color="white"
                title="Contact"
                className="hover:border-b hover:border-orange-200 transition-all ease-in-out"
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Menus;
