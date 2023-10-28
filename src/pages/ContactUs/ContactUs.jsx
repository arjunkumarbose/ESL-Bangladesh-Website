import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName = e.target.elements.fullName.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    if (!fullName || !email || !message) {
      toast.error("Please fill in all fields!");
    } else {
      setMessageSent(true);
      toast.success("We got your message! :D");
    }
  };

  return (
    <div>
      <section
        className="max-h-screen bg-cover"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/HG6m8nJ/Rio-Winner-team-46702-ESL.jpg')",
        }}
      >
        <div className="flex flex-col max-h-screen bg-black/60">
          <div className="container flex flex-col flex-1 px-6 py-16 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-4">
              <div className="text-white lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                  ESL Bangladesh
                </h1>

                <p className="max-w-xl mt-6">
                  We are a group of people who are passionate about gaming and
                  esports. We are working hard to build a community for gamers
                  and esports enthusiasts in Bangladesh and to help them
                  showcase their skills on a global platform.
                </p>

                <div className="mt-6 md:mt-8">
                  <h3 className="text-gray-300 ">Follow us</h3>

                  <div className="flex mt-4 -mx-1.5 ">
                    <a
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="#"
                    >
                      <svg
                        className="w-10 h-10 fill-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className=" mt-10 md:mt-0 lg:mt-0 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                  <form onSubmit={handleSubmit}>
                    <div className="flex-1">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="John Doe"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="johndoe@example.com"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Message
                      </label>
                      <textarea
                        name="message"
                        className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-bold tracking-wide text-gray-600 capitalize transition-colors duration-300 transform bg-cyan-400 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                      get in touch
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-72 md:mt-0 lg:mt-0">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Contact Us
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  We're here to assist you. Feel free to get in touch with us
                  using the contact details below or by filling out the form.
                </p>
              </div>
              <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                <div className="bg-white border-l-4 shadow-sm border-cyan-400">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">
                      Contact Information
                    </h6>
                    <p className="text-sm text-gray-900">
                      Email: contact@eslbangladesh.com
                      <br />
                      Phone: +880 1234567890
                      <br />
                      Address: Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="bg-white border-l-4 shadow-sm border-cyan-400">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">
                      Send Us a Message
                    </h6>
                    <p className="text-sm text-gray-900">
                      If you have any questions or feedback, please use the form
                      above to send us a message.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://i.ibb.co/9VypBYN/NAVI-win-e9z46m.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
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

export default ContactUs;
