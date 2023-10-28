import React, { useState } from "react";
import { BiSolidGame } from "react-icons/bi";
import { SiRiotgames } from "react-icons/si";
import { SiEpicgames } from "react-icons/si";
import { SiGameandwatch } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AboutUs = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Invalid email format!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    toast.success("Subscription successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setEmail("");
  };

  return (
    <div>
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <img
                      className="object-cover object-center mx-auto rounded-lg "
                      alt="hero"
                      src="https://i.ibb.co/CMhrdzp/esl-logo-0c7bf1d1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                Welcome to
                <br />
                <span className="text-cyan-400">ESL Bangladesh</span>
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
                We are a passionate team dedicated to bringing you the best
                e-sport events. Our mission is to create thrilling experiences
                for participants and viewers!
              </p>
              <div className="flex flex-wrap w-full mt-2 -mx-4 text-left">
                <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                  <BiSolidGame className="h-16 w-16" />
                </div>
                <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                  <SiRiotgames className="h-16 w-16" />
                </div>
                <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                  <SiEpicgames className="h-16 w-16" />
                </div>
                <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                  <SiGameandwatch className="h-16 w-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What Our <span class="text-cyan-400 ">Clients</span> Say
          </h1>

          <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            We take pride in organizing exceptional e-sports events that leave a
            lasting impact. Here's what some of our satisfied clients have to
            say:
          </p>

          <div class="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div class="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p class="leading-loose text-gray-500 dark:text-gray-300">
                "I've been a part of several e-sports events, but none compare
                to the level of excitement and professionalism that your team
                brings to the table. Your events are a thrilling experience for
                both participants and viewers. Keep up the great work!"
              </p>

              <div class="flex items-center mt-6">
                <img
                  class="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="Client 1"
                />

                <div class="mx-4">
                  <h1 class="font-semibold text-cyan-400">John Doe</h1>
                  <span class="text-sm text-gray-500 dark:text-gray-300">
                    Gaming Enthusiast
                  </span>
                </div>
              </div>
            </div>

            <div class="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p class="leading-loose text-gray-500 dark:text-gray-300">
                "As a marketing manager, I've had the pleasure of collaborating
                with the e-sports organizing team on multiple occasions. Their
                dedication to delivering top-notch gaming events is unmatched.
                It's always a pleasure working with professionals who are
                passionate about what they do."
              </p>

              <div class="flex items-center mt-6">
                <img
                  class="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Client 2"
                />

                <div class="mx-4">
                  <h1 class="font-semibold text-cyan-400">Jane Smith</h1>
                  <span class="text-sm text-gray-500 dark:text-gray-300">
                    Marketing Manager at XYZ Company
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="flex flex-col max-w-4xl my-10 mx-auto overflow-hidden bg-slate-100 rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
        <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
          <div class="px-6 py-10 md:px-8 md:py-0">
            <h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
              Sign Up For{" "}
              <span class="text-blue-600 dark:text-cyan-400 md:text-cyan-400">
                Event
              </span>{" "}
              Updates
            </h2>

            <p class="mt-2 text-sm text-gray-600  md:text-gray-400">
              We will send you updates on upcoming events and tournaments.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 bg-slate-100">
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              className="px-6 py-3 rounded-sm text-gray-400 placeholder-gray-400 bg-white outline-none  focus:placeholder-transparent "
              placeholder="Enter your email"
              aria-label="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium tracking-wider text-gray-600 uppercase transition-colors duration-300 transform bg-cyan-400 rounded-md hover:bg-cyan-600 focus:bg-cyan-800 focus:outline-none"
            >
              subscribe
            </button>
          </form>
        </div>
      </section>
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

export default AboutUs;
