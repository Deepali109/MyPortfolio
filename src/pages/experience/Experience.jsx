import React from "react";
import { Timeline, EventTimeline } from "react-tailwind-timeline-component";
import { FaTasks } from "react-icons/fa";
import { Link, Element } from "react-scroll";
function Experience() {
  return (
    <>
      <Element name="experience" className="element">
        <div className="relative h-auto mt-20">
          <div className="flex flex-col items-center h-full w-full ">
            <div className="flex items-center justify-center mt-10 ml-6 h-14 w-66 pl-6 pr-6 pt-2 pb-2 border-transparent rounded-lg shadow-md shadow-cyan-300">
              <h1 className="text-3xl text-teal-500 text-center font-semibold ">
                Experience Details
              </h1>
            </div>

            <div className="w-full h-auto flex items-center justify-center mt-10">
              <div className="mt-12 w-4/6 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
                <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] ">
                  <h3 className="absolute text-wrap -left-8 mr-4 text-lg text-teal-500 font-semibold">
                    Oct 2024
                  </h3>

                  <h3 className="text-teal-400 text-md font-semibold">
                    FullStack Developer Intern(Transportix Solutions Technology
                    pvt ltd)
                  </h3>
                  <p className="text-gray-300 text-sm">
                    As a 3-month full-stack developer, I work on real-world
                    projects covering both front-end and back-end. I design and
                    develop user-friendly, responsive interfaces, creating
                    seamless user experiences tailored to diverse client needs.
                  </p>
                </div>
                <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute text-lg text-teal-500 -left-8  font-semibold">
                    July 2024
                  </h3>
                  <h3 className="text-teal-400 text-md font-semibold">
                    Frontend Developer Intern(SearchAI)
                  </h3>
                  <p className="text-gray-300">
                    During my one-month tenure as a Frontend Developer at
                    SearchAI, I worked on building scalable APIs and dynamic
                    user interfaces using the MERN stack and Next.js
                    technologies, enhancing my technical skills and
                    understanding of industry practices.
                  </p>
                </div>
                <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] ">
                  <h3 className="absolute text-wrap -left-8  mr-4 text-lg text-teal-500 font-semibold">
                    Aug 2023
                  </h3>

                  <h3 className="text-teal-400 text-md font-semibold">
                    Frontend Developer Intern(@Bharat Intern)
                  </h3>
                  <p className="text-gray-300 text-sm">
                    During my tenure at Bharat Intern as a Frontend Developer, I
                    actively contributed to diverse projects, notably
                    spearheading the development of a Netflix homepage clone and
                    a user-friendly temperature converter website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Experience;
