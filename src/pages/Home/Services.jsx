import React from "react";
import { Link } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiUserVoice } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";

const Services = ({ eventInfo }) => {
  let {
    eventName,
    eventPicture,
    eventPricePool,
    id,
    eventCasters,
    eventDetails,
  } = eventInfo;

  return (
    <div
      className="flex flex-col items-center justify-center pb-10 lg:pb-4 w-full max-w-sm mx-auto"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{ backgroundImage: `url(${eventPicture})` }}
      ></div>

      <div className=" w-72 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {eventName}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="flex items-center text-center font-bold text-gray-800 dark:text-gray-200">
            <div className="pr-2">
              <BiUserVoice />
            </div>
            Casters: {eventCasters}
          </span>
          <span className="font-bold flex items-center text-center text-gray-800 dark:text-gray-200">
            <div className="pr-2">
              <IoGameController />
            </div>
            Games: {eventDetails.length}
          </span>
        </div>

        <div className="flex text-center items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="flex items-center text-center font-bold text-gray-800 dark:text-gray-200">
            <div className="pr-2">
              <AiFillDollarCircle />
            </div>
            Cash: ${eventPricePool}
          </span>
        </div>

        <div className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <Link to={`/ESL_Events/${id}`}>
            <button className="px-2 py-1 text-xs font-semibold text-cyan-400 uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              Event Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
