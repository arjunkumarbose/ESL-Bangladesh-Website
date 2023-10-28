import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiSolidShow, BiHide } from "react-icons/bi";
import { refresh } from "aos";

const SignIn = () => {
  const { signInWithGoogle, signInWithEmail } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const googleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => {
        navigate(location.state ? location.state : "/");
      }, 5000);
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
      });
    }
  };

  const emailSignIn = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmail(email, password);

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => {
        navigate(location.state ? location.state : "/");
      }, 5000);
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        toast.error("Email doesn't match!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (error.code === "auth/wrong-password") {
        toast.error("Password doesn't match!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error("No user found with the current credentials!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={emailSignIn}>
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://i.ibb.co/CMhrdzp/esl-logo-0c7bf1d1.png"
              alt=""
            />
          </div>

          <div className="flex items-center justify-center mt-6">
            <Link
              to="/signin"
              className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              state={location.state}
              className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
            >
              Sign Up
            </Link>
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-4 bottom-2 top-2 text-gray-400 dark:text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <BiHide /> : <BiSolidShow />}
            </button>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign in
            </button>
          </div>

          <div className="flex items-center justify-center mt-4">
            <button
              type="button"
              onClick={googleSignIn}
              className="flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              <FaGoogle className="w-6 h-6 mr-2" />
              Sign in with Google
            </button>
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/signup"
              className="text-sm text-blue-500 hover:underline dark:text-blue-400"
            >
              Doesn't have an account?
            </Link>
          </div>
        </form>
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
    </section>
  );
};

export default SignIn;
