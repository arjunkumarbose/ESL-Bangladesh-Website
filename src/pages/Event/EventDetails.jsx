import React, { useState } from "react";

const EventDetails = ({ info }) => {
  const { eventArena, rating, eventImg, eventGame, id, eventTags } = info;

  return (
    <div class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
      <img
        class="object-cover object-center w-full h-56"
        src={eventImg}
        alt="event"
      />

      <div class="flex items-center justify-center text-center py-3 bg-gray-900 text-white">
        <h1 class="text-lg px-auto font-semibold">{eventGame}</h1>
      </div>

      <div class="px-6 py-4">
        <div className="capitalize font-bold text-center">
          Game Arena: <span className="text-red-400">{eventArena}</span>
        </div>

        <p class="py-2 capitalize font-bold text-center">
          Game Rating: {rating}
        </p>

        <div className="border rounded-lg p-4">
          <p class="font-semibold capitalize text-center pb-4 ">Hash Tags</p>
          <div class="card-actions text-center">
            {eventTags.map((items, index) => (
              <div key={index} class="badge">
                {items}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
