import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventDetails from "./EventDetails";
import Banner from "../../Components/Banner";
import { BiUserVoice } from "react-icons/bi";
import { MdOutlinePriceChange } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";

const EventInfo = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const event = data.find((event) => event.id === parseInt(id));
        setEventData(event);
      });
  }, [id]);

  if (!eventData) {
    return <div>Not Found!</div>;
  }

  const {
    eventName,
    eventPicture,
    eventPricePool,
    eventCasters,
    eventDetails,
    eventLocation,
  } = eventData;

  const handleBooking = () => {
    toast.success("Your Booking was successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>
      <Banner
        image={eventPicture}
        eventName={eventName}
        eventLocation={eventLocation}
      />

      <div className="px-4 mx-auto lg:max-w-7xl md:px-8 py-10">
        <div className="card card-side bg-base-100 flex flex-col md:flex-row mt-20 mb-10 border border-cyan-400">
          <figure>
            <img
              className="md:w-96 h-60 md:h-96 object-cover object-top"
              src={eventPicture}
              alt={eventName}
            />
          </figure>
          <div className="card-body md:w-1/2">
            <h2 className="card-title text-2xl">{eventName}</h2>
            <p>
              <span className="font-semibold">Description: </span>
              {eventLocation}
            </p>
            <p className="pr-4">
              <BiUserVoice className="inline-block font-bold text-xl" />{" "}
              <span className="font-bold">Number of Casters:</span>{" "}
              {eventCasters}
            </p>
            <p className="pr-4">
              <MdOutlinePriceChange className="inline-block font-bold text-xl" />{" "}
              <span className="font-bold">Event Price Pool: </span>
              <span>$</span>
              {eventPricePool}
            </p>
            <p className="pr-4">
              <CgGames className="inline-block font-bold text-xl" />{" "}
              <span className="font-bold">Number of Games:</span>{" "}
              {eventDetails.length}
            </p>

            <div className="card-actions ">
              <button
                onClick={handleBooking}
                className="bg-cyan-400 w-full font-bold text-gray-600 rounded-md p-4 hover:bg-cyan-600 shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-3xl text-center capitalize font-bold my-3">
            Games are going to be played
          </h1>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-lg border-cyan-400 border p-10">
          {eventDetails.map((info) => (
            <EventDetails key={info.id} info={info} />
          ))}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default EventInfo;
