import React from "react";
import bg from "../../images/bg.jpg";
import img1 from "../../images/house_Img.jpg";
import img2 from "../../images/shopping.jpg";
import { MdOutlineArrowRight } from "react-icons/md";

function MernProject() {
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
            MERN PROJECTS
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
                REAL-ESTATE WEBSITE
              </h1>
            </div>
            <div className="mt-4">
              <div className="flex flex-row">
                <MdOutlineArrowRight
                  color="white"
                  size={70}
                  className="-mt-6"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Developed a high-performance, responsive real estate web
                  application using the MERN stack (MongoDB, Express.js,
                  React.js, Node.js) and Tailwind CSS, optimizing user
                  experience and enhancing platform functionality.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={70}
                  className="-mt-6"
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
                  size={70}
                  className="-mt-6"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Architected robust Node.js and Express.js back-end with
                  MongoDB integration, enhancing authentication and API
                  connectivity, boosting efficiency by 35% and reducing response
                  time by 20%.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={60}
                  className="-mt-5"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Built and integrated RESTful APIs to support user
                  authentication, property data handling, and real-time
                  communication between the client and server.
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
                E-COMMERCE WEBSITE
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
                  Spearheaded the development of a full-stack Amazon clone
                  website using the MERN stack.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={70}
                  className="-mt-6"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Designed and implemented secure user authentication and
                  authorization mechanisms, facilitating login, logout, and
                  registration functionalities for personalized user
                  experiences.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={80}
                  className="-mt-7"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Developed robust RESTful APIs to handle critical operations
                  including user authentication, detailed product management,
                  and cart functionalities, enabling users to efficiently add or
                  remove products from their carts.
                </p>
              </div>
              <div className="flex flex-row mt-2">
                <MdOutlineArrowRight
                  color="white"
                  size={50}
                  className="-mt-4"
                />
                <p className="text-gray-300 text-sm font-semibold ">
                  Utilized MongoDB for efficient data storage and retrieval,
                  optimizing database queries to ensure high performance and
                  scalability.
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

export default MernProject;
