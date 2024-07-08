import React from "react";
import image from "../../images/mypic.jpeg";
import { Link, Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";
// import "./about.css";
function About() {
  return (
    <>
      <Fade bottom>
        <Element name="about" className="element">
          <div className="flex flex-col h-auto  pb-20 items-center w-full mt-20">
            <div className="flex items-center justify-center mt-6 ml-6 h-14 w-44 pl-5 pr-5 border-transparent rounded-lg shadow-md shadow-cyan-300">
              <h1 className="text-3xl text-teal-500 text-center font-semibold ">
                ABOUT
              </h1>
              {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-teal-200 rounded-lg blur opacity-50 mix-blend-overlay"></div> */}
            </div>
            <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col gap-10 mt-9 ml-16 mr-12 justify-center">
              {/* left */}
              <div className="flex flex-row justify-center">
                <div className="lg:h-[320px] lg:w-[320px] md::h-[320px] md:w-[320px] sm:h-[320px] sm:w-[320px] h-[270px] w-[270px] border-2 rounded-full border-blue-300 shadow-xl shadow-blue-400"></div>
                <div className="absolute mt-10 ml-10 shadow-md transform transition-all animate-traverse">
                  <img
                    src={image}
                    alt="photo"
                    className="lg:h-[300px] lg:w-[300px] md:h-[300px] md:w-[300px] sm:h-[300px] sm:w-[300px] h-[250px] w-[250px] rounded-full  border-2 border-orange-300 shadow-md shadow-orange-200 "
                  ></img>
                </div>
              </div>
              {/* right */}
              <div className=" mt-10">
                <p className="text-sm font-semibold text-gray-300 sm:pl-10 sm:pr-10">
                  I am a dedicated and versatile Software Engineer with a robust
                  foundation in Full-Stack Development. With a strong command of
                  C++ programming and a passion for web development, I thrive in
                  creating seamless and dynamic user experiences. My journey in
                  the realm of technology has equipped me with a comprehensive
                  skill set that spans across multiple languages, tools, and
                  frameworks.
                </p>
                <p className="text-sm font-semibold text-gray-300 sm:pl-10 sm:pr-10">
                  Proficient in a wide array of technologies, I excel in
                  languages such as C, C++, HTML/CSS, and JavaScript, harnessing
                  them alongside frameworks like ReactJS, NodeJS, and ExpressJS.
                  My expertise extends to designing responsive and intuitive
                  user interfaces using Bootstrap and Tailwind CSS, ensuring
                  seamless user experiences across platforms. I am well-versed
                  in database management systems including MongoDB and SQL,
                  enabling efficient data storage and retrieval solutions for
                  scalable applications.
                </p>
                <p className="text-sm font-semibold text-gray-300 sm:pl-10 sm:pr-10">
                  Beyond technical prowess, I bring strong communication skills,
                  a knack for problem-solving, and a penchant for innovative
                  ideas to every project. I am driven by a passion for
                  continuous learning and innovation, seeking to leverage my
                  skills and experience to contribute meaningfully to future
                  technological advancements.
                </p>
              </div>
            </div>
          </div>
        </Element>
      </Fade>
    </>
  );
}

export default About;
