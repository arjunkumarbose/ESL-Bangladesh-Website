import React, { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";

const UserDetails = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, emailVerified, photoURL } = user;

  return (
    <section className="h-screen flex justify-center items-center bg-gray-400">
      <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          src={photoURL}
          alt="User Avatar"
          className="object-cover w-full h-56"
        />

        <div className="py-5 text-center">
          <h2
            className="block text-xl font-bold text-gray-800 dark:text-white"
            tabIndex="0"
            role="link"
          >
            {displayName}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-200">{email}</p>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
