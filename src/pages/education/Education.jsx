import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoIosSchool } from "react-icons/io";
import { Link, Element } from "react-scroll";

function Education() {
  return (
    <>
      <Element name="education" className="element">
        <div className="relative h-auto mt-10">
          <div className="flex flex-col items-center h-full w-full ">
            <div className="flex items-center justify-center mt-10 ml-6 h-14 w-66 pl-6 pr-6 pt-2 pb-2 border-transparent rounded-lg shadow-md shadow-cyan-300">
              <h1 className="text-3xl text-teal-500 text-center font-semibold ">
                Education Details
              </h1>
            </div>

            <VerticalTimeline>
              {/* <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="2021 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<IoIosSchool />}
              >
                <h3 className="vertical-timeline-element-title">B.Tech</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  JSS Academy of Technical Education, NOida
                </h4>
                <h6 className="text-sm font-semibold text-orange-300">
                  Computer Science Engineering Branch
                </h6>
                <h5 className="text-xs mt-2">Grade : 8.544 CGPA</h5>
              </VerticalTimelineElement> */}

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#1976D2", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #1976D2" }}
                date="2021 - present"
                iconStyle={{ background: "#1976D2", color: "#fff" }}
                icon={<IoIosSchool />}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  JSS Academy of Technical Education, Noida
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Noida, Uttar Pradesh
                </h4>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex flex-col">
                    <span className="font-semibold text-md">
                      Bachelor of Technology (BTech)
                    </span>
                    <span className="text-sm">
                      Computer Science and Engineering
                    </span>
                  </div>
                  <div className=" flex justify-between items-center">
                    <span>Grade - 8.522</span>
                  </div>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#00897B", color: "white" }}
                contentArrowStyle={{ borderRight: "7px solid #00897B" }}
                date="2019 - 2020"
                iconStyle={{ background: "#00897B", color: "#fff" }}
                icon={<IoIosSchool />}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Avadh Collegiate
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Lucknow, Uttar Pradesh
                </h4>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex flex-col">
                    <span className="font-semibold text-md">
                      Senior Secondary Education
                    </span>
                    {/* <span className="text-sm">Science</span> */}
                  </div>
                  <div className=" flex justify-between items-center">
                    <span>Grade - 93.2 %</span>
                  </div>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#1976D2", color: "white" }}
                contentArrowStyle={{ borderRight: "7px solid #1976D2" }}
                date="2017 - 2018"
                iconStyle={{ background: "#1976D2", color: "#fff" }}
                icon={<IoIosSchool />}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Avadh Collegiate
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Lucknow, Uttar Pradesh
                </h4>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex flex-col">
                    <span className="font-semibold text-md">
                      Secondary School Education
                    </span>
                    {/* <span className="text-sm">Science</span> */}
                  </div>
                  <div className=" flex justify-between items-center">
                    <span>Grade - 91.4 %</span>
                  </div>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Education;
