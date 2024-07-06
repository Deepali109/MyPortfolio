import { List, ListItem, ListItemText } from "@mui/material";
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

function Leftdrawer({ logclose }) {
  return (
    <>
      <div
        className="w-[200px] h-[100vh] bg-gradient-to-br from-gray-600 to-slate-900 border-2 border-slate-400 overflow-hidden transition-all duration-300"
        onClick={() => logclose()}
      >
        <Zoom>
          <div className="flex flex-col items-center justify-center mt-2">
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
      </div>
    </>
  );
}

export default Leftdrawer;
