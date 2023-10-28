import React from "react";
import { GoGoal } from "react-icons/go";

const Teams = () => {
  return (
    <div>
      <section className=" h-4/5 bg-slate-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                <GoGoal className="h-32 w-32" />
              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  To ensure the best gaming experience for all
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Our dedicated team of esports enthusiasts is here to bring you
                  the best gaming events. With their expertise and passion, they
                  ensure that every tournament is a thrilling experience for
                  participants and viewers alike.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="https://i.ibb.co/BNMrPQm/F7-N5l4p-XQAAwl-Im.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="https://i.ibb.co/WvFzWCw/F7-S-go3-WMAE7w-Wk.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="https://i.ibb.co/3Rq1JTL/F7-OI2-ZXWEAAbanp.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
          <h2 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Meet Our Team
          </h2>

          <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="w-full max-w-xs text-center mx-auto">
              <img
                class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                alt="avatar"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Arjun Kumar Bose
                </h3>
                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  CEO
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center mx-auto">
              <img
                class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Jane Doe
                </h3>
                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  Co-founder
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center mx-auto">
              <img
                class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Steve Ben
                </h3>
                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  UI/UX
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center mx-auto">
              <img
                class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Patterson Johnson
                </h3>
                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  Software Engineer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
