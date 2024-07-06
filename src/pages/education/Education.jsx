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
              <VerticalTimelineElement
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
              </VerticalTimelineElement>

              <VerticalTimelineElement
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
              </VerticalTimelineElement>

              <VerticalTimelineElement
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
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Education;
