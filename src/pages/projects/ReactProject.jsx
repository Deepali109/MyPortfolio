//
import React from "react";
import bg from "../../images/bg.jpg";
import img1 from "../../images/portfolio.png";
import img2 from "../../images/weather.png";
import { MdOutlineArrowRight } from "react-icons/md";

function ReactProject() {
  return (
    <div className="relative h-auto w-full">
      <img
        src={bg}
        alt="background"
        className="fixed inset-0 w-full h-full object-cover"
      />
      <div className="relative flex flex-col items-center h-full w-full p-5 ">
        <div className="">
          <p className="text-white text-4xl font-bold font-sans text-shadow">
            REACTJS PROJECTS
          </p>
        </div>
        {/* project--1 */}
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col w-full shadow-md shadow-teal-300 max-w-4xl mt-5 p-2 bg-gray-900 bg-opacity-70 items-center ">
          {/* left */}
          <div className="lg:w-2/6 md:w-2/6 md:pl-4 rounded-lg flex mt-4 justify-center">
            <img
              src={img1}
              className="relative w-64 sm:w-64 md:w-64 rounded-lg"
            />
          </div>
          {/* right */}
          <div className="lg:w-4/6 md:w-4/6 lg:p-4 md:p-4 sm:p-0 sm:mt-4 flex flex-col justify-center items-center p-2">
            <div className="flex items-center justify-center w-60 p-2 border-transparent rounded-lg shadow-md shadow-cyan-300">
              <h1 className="text-xl text-teal-500 text-center font-bold ">
                PORTFOLIO WEBSITE
              </h1>
            </div>
            <div className="mt-4">
              <div className="flex flex-row">
                <MdOutlineArrowRight
                  color="white"
                  size={40}
                  className="-mt-2"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Utilized ReactJS to build a dynamic and interactive portfolio
                  website, showcasing modern web development practices.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={60}
                  className="-mt-5"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Created detailed project pages featuring descriptions,
                  technology stacks, and direct links to live projects and
                  GitHub repositories, demonstrating practical application of
                  skills.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={60}
                  className="-mt-5"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Included sections for professional journey, educational
                  background, technical skills, and work experience, providing a
                  holistic view of qualifications and accomplishments.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={40}
                  className="-mt-3"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Ensured fast loading times and smooth navigation by optimizing
                  code and leveraging efficient design practices.
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="https://real-estate-dx6d.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative text-md font-semibold border text-blue-500 w-36 p-2 uppercase rounded-md  hover:text-orange-500 hover:scale-105">
                  Live Project
                </button>
              </a>
              <a
                href="https://github.com/Deepali109/real_estate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative text-md font-semibold border text-blue-500 w-36 p-2 uppercase rounded-md  hover:text-orange-500 hover:scale-105">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* project--2 */}
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col w-full shadow-md shadow-teal-300 max-w-4xl mt-5 p-2 bg-gray-900 bg-opacity-70 items-center ">
          {/* right */}
          <div className="lg:w-4/6 md:w-4/6 lg:p-4 md:p-4 sm:p-0 sm:mt-4 flex flex-col justify-center items-center p--">
            <div className="flex items-center justify-center w-60 p-2 border-transparent rounded-lg shadow-md shadow-cyan-300">
              <h1 className="text-xl text-teal-500 text-center font-bold ">
                WEATHER FORECAST WEBSITE
              </h1>
            </div>
            <div className="mt-4">
              <div className="flex flex-row">
                <MdOutlineArrowRight
                  color="white"
                  size={50}
                  className="-mt-2"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Developed a comprehensive weather forecast website, aiming to
                  deliver accurate and user-friendly weather information to a
                  diverse user base.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={80}
                  className="-mt-6"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Designed to provide detailed insights for up to 7 days, our
                  platform delivers real-time temperature updates alongside
                  crucial meteorological data including humidity levels, wind
                  speeds, and current weather conditions for specified
                  locations.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={80}
                  className="-mt-7"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Our website features an intuitive and attractive user
                  interface designed to make navigating weather data effortless.
                  Easily select your desired location, view detailed forecasts,
                  and toggle between different metrics with ease.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={30}
                  className="-mt-1"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Stay ahead of the weather with us!
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="real-estate-dx6d.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative text-md font-semibold border text-blue-500 w-36 p-2 uppercase rounded-md  hover:text-orange-500 hover:scale-105">
                  Live Project
                </button>
              </a>
              <a
                href="https://github.com/Deepali109/real_estate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative text-md font-semibold border text-blue-500 w-36 p-2 uppercase rounded-md  hover:text-orange-500 hover:scale-105">
                  Github
                </button>
              </a>
            </div>
          </div>
          {/* left */}
          <div className="lg:w-2/6 md:w-2/6 md:pr-4 rounded-lg flex mt-4 justify-center">
            <img
              src={img2}
              className="relative w-64 sm:w-64 md:w-64 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactProject;
