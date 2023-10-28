import React from "react";
import { useLoaderData } from "react-router-dom";
import Services from "./Services";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { PiGameControllerFill } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  const eventsInfo = useLoaderData();
  return (
    <div className="md:-mt-20 lg:-mt-20 ">
      <div className="banner bg-black bg-opacity-80 shadow">
        <div className="px-4 py-16 lg:py-0 mx-auto lg:max-w-7xl md:px-8 flex flex-col md:flex-row lg:justify-start lg:flex-row justify-center items-center h-full">
          <div className="w-full lg:w-3/4 text-center lg:text-left">
            <h1 className="text-white text-3xl lg:text-6xl font-bold">
              The Game changing e-Sports Organizer!
            </h1>
            <p className="lg:w-4/5 text-gray-400 my-5 text-xl ">
              We are the industry leading e-Sports management team, based on
              multinational projects. We have started expanding to Bangladesh!
            </p>
            <button className="bg-cyan-400 text-gray-600 font-bold capitalize items-center justify-center rounded-md px-10 py-3 hover:bg-cyan-600">
              Join our community
            </button>
          </div>
        </div>
      </div>

      <section className="my-20 ">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="text-xl pt-4 text-gray-900">
            <span class="mb-4 text-sm font-medium tracking-wide text-gray-500 uppercase">
              We have completed various million dollars event around <br />
              <a class="font-semibold text-blue-600 lg:mb-0 hover:text-blue-500">
                the world!
              </a>
            </span>
          </p>
          <hr className="border-cyan-400 w-16 mx-auto mt-2 border-y-2" />
        </div>

        <div className="px-4 mx-auto lg:max-w-7xl py-5 md:px-8 lg:grid lg:grid-cols-3 gap-5">
          {eventsInfo
            .slice(0, 6)
            .reverse()
            .map((eventInfo) => {
              return (
                <Services key={eventInfo.id} eventInfo={eventInfo}></Services>
              );
            })}
        </div>
      </section>

      <section
        className="bg-gray-900 pt-10 pb-20"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <div
          className="text-center py-10"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <h1 className="text-5xl font-bold text-white">
            Carnival of real e-Sports
          </h1>
          <p className="text-xl pt-4 text-gray-900">
            <span className="mb-4 text-sm font-medium tracking-wide text-gray-500 uppercase">
              To evaluate the best, you need to hire the <br />
              <a className="font-semibold text-blue-600 lg:mb-0 hover:text-blue-500">
                best
              </a>
            </span>
          </p>
          <hr className="border-cyan-400 w-16 mx-auto mt-2 border-y-2" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 mx-auto lg:max-w-7xl md:px-8 my-5">
          <div>
            <img
              className="object-cover w-full h-60 hover:opacity-70 duration-200"
              src="https://i.ibb.co/8KvMqn4/2n3x19y3918y1s2n3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover w-full h-60 duration-200 hover:opacity-70 "
              src="https://i.ibb.co/3m40gvj/21bh12dx3n1n39n81yx.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover w-full h-60 duration-200 hover:opacity-70 "
              src="https://i.ibb.co/4RPSkQN/GG-trophy-1.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover w-full h-60 duration-200 hover:opacity-70 "
              src="https://i.ibb.co/9VypBYN/NAVI-win-e9z46m.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover w-full h-60 duration-200 hover:opacity-70 "
              src="https://i.ibb.co/HG6m8nJ/Rio-Winner-team-46702-ESL.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover w-full h-60 duration-200 hover:opacity-70 "
              src="https://i.ibb.co/F8bsch5/Image-from-i-OS-1.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <div className="text-center pt-20 bg-slate-100">
        <h1
          className="text-5xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          Trusted by the leaders{" "}
        </h1>
        <p
          className="text-xl pt-4 text-gray-900"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <span
            class="mb-4 text-sm font-medium tracking-wide text-gray-500 uppercase"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            Our goal is to accomplish the deal-breaking events <br />
            <a
              class="font-semibold text-blue-600 lg:mb-0 hover:text-blue-500"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              respected by
            </a>
          </span>
        </p>
        <hr
          className="border-cyan-400 w-16 mx-auto mt-2 border-y-2"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        />

        <section>
          <div
            class=" px-5 py-24 mx-auto lg:px-16"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div
              class="flex flex-col w-full mb-8 text-center"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            ></div>
            <div
              class="mx-auto text-center"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div
                class="grid grid-cols-5 gap-4 mx-auto lg:grid-cols-5"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div
                  data-aos="fade-zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <img
                    class="h-4 mx-auto lg:h-12"
                    src="https://d33wubrfki0l68.cloudfront.net/5a364f2e7cfeadd0f603cdfeda83f5cd0509770d/3f0ae/images/logos/logoone.svg"
                    alt="Figma"
                  />
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <img
                    class="h-4 mx-auto lg:h-12"
                    src="https://d33wubrfki0l68.cloudfront.net/ab0d1eeefb9cddb55f05f1601b2ae3fbae9317a9/5bfbe/images/logos/logotwo.svg"
                    alt="Framer"
                  />
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <img
                    class="h-4 mx-auto lg:h-12"
                    src="https://d33wubrfki0l68.cloudfront.net/2fea2d550675d7cf3bb77a515487bce6c086051b/951f5/images/logos/logothree.svg"
                    alt="Sketch "
                  />
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <img
                    class="h-4 mx-auto lg:h-12"
                    src="https://d33wubrfki0l68.cloudfront.net/f9b8da8b1442382848d30275dc2d0337d14a04c9/dc8f4/images/logos/logofour.svg"
                    alt="Sketch "
                  />
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <img
                    class="h-4 mx-auto lg:h-12"
                    src="https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg"
                    alt="Invision"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="aos-section" data-aos="fade-up">
        <div className="text-center pt-20 bg-gray-900">
          <h1 className="text-5xl font-bold text-white" data-aos="fade-up">
            Our Mission & Vision
          </h1>
          <p className="text-xl pt-4 text-gray-900" data-aos="fade-up">
            <span className="mb-4 text-sm font-medium tracking-wide text-gray-500 uppercase">
              Our goal is to shine, and prove <br />
              <a
                href="https://www.wickedtemplates.com/expo.html"
                className="font-semibold text-blue-600 lg:mb-0 hover:text-blue-500"
                data-aos="fade-up"
              >
                our best
              </a>
            </span>
          </p>
          <hr
            className="border-cyan-400 w-16 mx-auto mt-2 border-y-2"
            data-aos="fade-up"
          />
        </div>
        <div className="flex justify-center bg-gray-900 pb-20">
          <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
            <div
              className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-cyan-400 rounded-md">
                  <PiGameControllerFill className="h-6 w-6" />
                </div>
              </div>
              <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                Esports Tournaments
              </h3>
              <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                Organize and host exciting esports tournaments for gamers
                worldwide.
              </p>
            </div>
            <div
              className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-cyan-400 rounded-md">
                  <MdOutlineLiveTv className="h-6 w-6" />
                </div>
              </div>
              <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                Live Streaming
              </h3>
              <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                Broadcast and share live esports matches and events with your
                audience.
              </p>
            </div>
            <div
              className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-cyan-400 rounded-md">
                  <FaHandshake className="h-6 w-6" />
                </div>
              </div>
              <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                Community Engagement
              </h3>
              <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                Build a thriving esports community and engage with passionate
                gamers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font bg-slate-100">
        <div class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
          <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Download our mobile application
            </h2>
            <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
              ESL Bangladesh
            </h1>
          </div>
          <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <button class="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-400 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                <span class="title-font font-medium">Google Play</span>
              </span>
            </button>
            <button class="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-400 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 305 305"
              >
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
              </svg>
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="text-xs text-gray-600 mb-1">Download on the</span>
                <span class="title-font font-medium">App Store</span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
