import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/User/SignIn";
import SignUp from "../pages/User/SignUp";
import Error from "../pages/Error/Error";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import UserDetails from "../pages/User/UserDetails";
import AboutUs from "../pages/AboutUs/AboutUs";
import EventInfo from "../pages/Event/EventInfo";
import Teams from "../pages/Teams/Teams";
import ContactUs from "../pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data/data.json"),
      },
      {
        path: "/ESL_Events/:id",
        element: (
          <PrivateRoute>
            <EventInfo />
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/userdetails",
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/aboutus",
        element: (
          <PrivateRoute>
            <AboutUs />
          </PrivateRoute>
        ),
      },
      {
        path: "/teams",
        element: (
          <PrivateRoute>
            <Teams />
          </PrivateRoute>
        ),
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;
