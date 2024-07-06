import React from "react";
import bg from "../../images/bg.jpg";
import img1 from "../../images/netflix.png";
import img2 from "../../images/Temp.png";
import img3 from "../../images/aryavarta.png";
import { MdOutlineArrowRight } from "react-icons/md";

function HtmlProject() {
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
            HTML CSS JAVASCRIPT PROJECTS
          </p>
        </div>
        {/* project 1 */}
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col w-full shadow-md shadow-teal-300 max-w-4xl mt-5 p-2 bg-gray-900 bg-opacity-70 items-center ">
          {/* left */}
          <div className="lg:w-2/6 md:w-2/6 md:pl-4 rounded-lg flex mt-4 justify-center">
            <img
              src={img3}
              className="relative w-64 sm:w-64 md:w-64 rounded-lg"
            />
          </div>
          {/* right */}
          <div className="lg:w-4/6 md:w-4/6 lg:p-4 md:p-4 sm:p-0 sm:mt-4 flex flex-col justify-center items-center p-3">
            <div className="flex items-center justify-center w-60 p-2 border-transparent rounded-lg shadow-md shadow-cyan-300">
              <h1 className="text-xl text-teal-500 text-center font-bold ">
                ARYAVARTA
              </h1>
            </div>
            <div className="mt-4">
              <div className="flex flex-row">
                <MdOutlineArrowRight
                  color="white"
                  size={60}
                  className="-mt-5"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  This project involved creating a comprehensive online platform
                  to showcase India's rich and diverse cultural tapestry. The
                  website highlights state-wise features, including famous food,
                  tourist places, art etc.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={50}
                  className="-mt-4"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  In this collaborative initiative, I served as the Team Leader,
                  guiding a team of six individuals. We developed this website
                  as a prototype for the Smart India Hackathon (SIH).
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={40}
                  className="-mt-2"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  This experience provided valuable insights into project
                  leadership and enhanced our team's expertise in creating
                  compelling digital experiences.
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="https://aryavartawebsite.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative text-md font-semibold border text-blue-500 w-36 p-2 uppercase rounded-md  hover:text-orange-500 hover:scale-105">
                  Live Project
                </button>
              </a>
              <a
                href="https://github.com/Deepali109/Aryavarta"
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
          <div className="lg:w-4/6 md:w-4/6 lg:p-4 md:p-4 sm:p-0 sm:mt-4 flex flex-col justify-center items-center p-3">
            <div className="flex items-center justify-center w-60 p-2 border-transparent rounded-lg shadow-md shadow-cyan-300">
              <h1 className="text-xl text-teal-500 text-center font-bold ">
                NETFLIX HOME PAGE CLONE
              </h1>
            </div>
            <div className="mt-4">
              <div className="flex flex-row">
                <MdOutlineArrowRight
                  color="white"
                  size={60}
                  className="-mt-5"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Developed a precise replica of the Netflix website as a
                  front-end beginner, focusing on achieving optimal accuracy and
                  replicating the visual aesthetics and functionality.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={70}
                  className="-mt-5"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Implemented key features such as property listing management,
                  advanced sorting based on user preferences, and a contact
                  landlord functionality, creating a comprehensive and
                  user-friendly real estate platform.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={40}
                  className="-mt-2"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Crafted responsive layouts using HTML and CSS, ensuring the
                  replica maintains consistency across different devices and
                  screen sizes.
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="https://netflixhomepagereplica.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative text-md font-semibold border text-blue-500 w-36 p-2 uppercase rounded-md  hover:text-orange-500 hover:scale-105">
                  Live Project
                </button>
              </a>
              <a
                href="https://github.com/Deepali109/Netflix_homepage"
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
          <div className="lg:w-2/6 pr-3 md:w-2/6 rounded-lg flex mt-4 justify-center">
            <img
              src={img1}
              className="relative w-64 sm:w-64 md:w-64 rounded-lg"
            />
          </div>
        </div>

        {/* project--3 */}
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col w-full shadow-md shadow-teal-300 max-w-4xl mt-5 p-2 bg-gray-900 bg-opacity-70 items-center ">
          {/* left */}
          <div className="lg:w-2/6 md:w-2/6 pl-3 rounded-lg flex mt-4 justify-center">
            <img
              src={img2}
              className="relative w-64 sm:w-64 md:w-64 rounded-lg"
            />
          </div>
          {/* right */}
          <div className="lg:w-4/6 md:w-4/6 lg:p-4 md:p-4 sm:p-0 sm:mt-4 flex flex-col justify-center items-center">
            <div className="flex items-center justify-center w-60 p-2 border-transparent rounded-lg shadow-md shadow-cyan-300">
              <h1 className="text-xl text-teal-500 text-center font-bold ">
                TEMPERATURE CONVERTER
              </h1>
            </div>
            <div className="mt-4">
              <div className="flex flex-row">
                <MdOutlineArrowRight
                  color="white"
                  size={50}
                  className="-mt-4"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Developed a temperature converter application using CSS, HTML,
                  and JavaScript, demonstrating strong front-end development
                  skills and attention to detail in UI design.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={70}
                  className="-mt-6"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Ensured the application maintains full responsiveness,
                  delivering an optimal user experience across various devices
                  and screen sizes. Implemented a clean and intuitive interface,
                  allowing users to easily convert temperatures between Celsius
                  and Fahrenheit.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={50}
                  className="-mt-4"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Utilized JavaScript to handle temperature conversion logic,
                  ensuring accurate and efficient calculations, seamless user
                  interaction, and real-time updates as users input values.
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="https://temperatureconverter08.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative text-md font-semibold border text-blue-500 w-36 p-2 uppercase rounded-md  hover:text-orange-500 hover:scale-105">
                  Live Project
                </button>
              </a>
              <a
                href="https://github.com/Deepali109/Temperature_Convertor"
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
      </div>
    </div>
  );
}

export default HtmlProject;
