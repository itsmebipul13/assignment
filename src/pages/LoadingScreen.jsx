import React from "react";
import { Link } from "react-router-dom";

const LoadingScreen = () => {
   return (
      <div className="flex flex-col items-center justify-end min-h-screen px-6 text-center bg-gray-100">
        <div className="flex flex-col w-full max-w-md min-h-screen p-6 bg-white rounded-lg shadow-md">
          <div className="mt-auto">
         <h1 className="mb-4 text-2xl font-bold text-gray-800 ">
            Welcome to PopX{" "}
         </h1>
         <p className="mb-6 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, at?
         </p>
         <div className="space-y-4">
            <Link to="/signup">
               <button className="w-full px-6 py-3 text-white transition font-semibold bg-[#9445ee] rounded-md shadow-md hover:bg-[#6f28c0] mb-3">
                  Create Account
               </button>
            </Link>
            <Link to="/login">
               <button className="px-6 py-3 w-full text-gray-800 transition font-semibold bg-[#b8a2d1] rounded-md shadow-md  hover:bg-[#a882d4]">
                  Already Registered? Login
               </button>
            </Link>
            </div>
         </div>
         </div>
      </div>
   );
};

export default LoadingScreen;
