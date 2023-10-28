import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiSolidShow, BiHide } from "react-icons/bi";
import { MdPassword, MdEmail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const SignUp = () => {
  const { signUpWithEmail, signInWithGoogle } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    imageUrl: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      if (!formData.name.trim()) {
        throw new Error("Name is required");
      }

      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
        throw new Error("Email is invalid");
      }

      const passwordRegex = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;
      if (!formData.password.trim() || !passwordRegex.test(formData.password)) {
        throw new Error(
          "Password must be at least 6 characters, contain at least one uppercase letter, and at least one symbol"
        );
      }

      const userCredential = await signUpWithEmail(
        formData.email,
        formData.password
      );
      const userInfo = userCredential.user;

      const imageUrl =
        formData.imageUrl.trim() ||
        "https://i.ibb.co/2vrDwGs/people-saving-money-24908-51568-transformed.jpg";

      await updateProfile(auth.currentUser, {
        displayName: formData.name,
        photoURL: imageUrl,
      });

      toast.success("Registration successful!", {
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
        //navigate(from, { replace: true });
        //setRedirectToHome(true);
        navigate(location.state ? location.state : "/");
        window.location.reload();
      }, 5000);
    } catch (error) {
      toast.error(error.message, {
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
  };

  const googleSignUp = async () => {
    try {
      await signInWithGoogle();
      toast.success("Sign up with Google successful!", {
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
        //navigate(from, { replace: true });
        //setRedirectToHome(true);
        navigate(location?.state ? location.state : "/");
      }, 5000);
    } catch (error) {
      toast.error(error.message, {
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
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSignUp}>
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
              className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
            >
              Sign Up
            </Link>
          </div>

          <div className="relative flex items-center mt-8">
            <span className="absolute text-gray-400 left-4 bottom-2 top-4">
              <AiOutlineUser />
            </span>

            <input
              type="text"
              name="name"
              id="name"
              className={`block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`}
              placeholder="Username"
              onChange={handleInputChange}
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute text-gray-400 left-4 bottom-2 top-4">
              <MdEmail />
            </span>

            <input
              type="email"
              name="email"
              id="email"
              className={`block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`}
              placeholder="Email address"
              onChange={handleInputChange}
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute text-gray-400 left-4 bottom-2 top-4">
              <MdPassword />
            </span>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className={`block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`}
              placeholder="Password"
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="absolute right-4 bottom-2 top-2 text-gray-400 dark:text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <BiHide /> : <BiSolidShow />}
            </button>
          </div>

          <div className="relative flex items-center mt-4">
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              className={`block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`}
              placeholder="Paste Image URL"
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-6">
            <button
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              type="submit"
            >
              Sign Up
            </button>

            <div className="flex items-center justify-center mt-4">
              <button
                type="button"
                onClick={googleSignUp}
                className="flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                <FaGoogle className="w-6 h-6 mr-2" />
                Sign up with Google
              </button>
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/signin"
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                Already have an account?
              </Link>
            </div>
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

export default SignUp;
