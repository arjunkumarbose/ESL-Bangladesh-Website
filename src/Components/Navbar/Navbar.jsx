import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";

const Navbar = () => {
  const { user, googleSignOut } = useContext(AuthContext);

  const signOutGoogle = () => {
    googleSignOut();
  };
  const [navbar, setNavbar] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className=" bg-black ">
      <nav
        className={`w-full bg-black  bg-opacity-50 sticky top-0 left-0 shadow z-50 duration-300`}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <div className="flex justify-center items-center">
                  <img
                    className="
                  h-12 w-12 mr-4
                  "
                    src="https://i.ibb.co/CMhrdzp/esl-logo-0c7bf1d1.png"
                    alt=""
                  />
                  <h2 className="text-2xl font-bold text-white">
                    ESL Bangladesh
                  </h2>
                </div>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center font-bold text-lg justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-cyan-400">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-white hover:text-cyan-400">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="text-white hover:text-cyan-400">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/teams"
                  >
                    Teams
                  </NavLink>
                </li>
                <li className="text-white hover:text-cyan-400">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/aboutus"
                  >
                    About
                  </NavLink>
                </li>
                <li className="text-white hover:text-cyan-400">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/contactus"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                {user ? (
                  <div className="flex justify-center items-center gap-5">
                    <Link to="/userdetails">
                      <img
                        title={user.displayName && user.displayName}
                        className="w-12 h-12 rounded-full object-cover"
                        src={user.photoURL}
                        alt=""
                      />
                    </Link>
                    <span className="text-cyan-400 font-bold">
                      {user.displayName && user.displayName}
                    </span>
                    <button
                      onClick={signOutGoogle}
                      className="inline-block  px-4 py-2 text-center font-bold bg-red-400 rounded-lg shadow hover:text-red-500"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <>
                    <Link
                      to="signin"
                      className="inline-block w-full px-4 py-2 font-bold text-center bg-cyan-400  rounded-lg shadow hover:bg-gray-100"
                    >
                      Sign In
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="hidden space-x-2 md:inline-block">
            {user ? (
              <div className="flex items-center gap-5">
                <span className="text-cyan-400 font-bold">
                  {user.displayName && user.displayName}
                </span>
                <Link to="/userdetails">
                  <img
                    title={user.displayName && user.displayName}
                    className="w-12 h-12 rounded-full object-cover"
                    src={user.photoURL}
                    alt=""
                  />
                </Link>
                <button
                  onClick={signOutGoogle}
                  className="inline-block  px-8 py-3 font-bold text-center bg-red-400 rounded-lg shadow hover:text-red-500"
                >
                  Log out
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="signin"
                  className="inline-block px-8 py-3 font-bold text-center text-white  bg-cyan-500 rounded-lg shadow hover:bg-cyan-600 "
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
