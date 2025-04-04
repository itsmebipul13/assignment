import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

import { useNavigate } from "react-router-dom";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleLogin = (e) => {
      e.preventDefault();

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.email === email) {
         dispatch(login(storedUser));
         alert("login successful!");
         navigate("/account");
      } else {
         alert("invalid");
      }
   };

   return (
      <div className="flex flex-col items-center justify-end min-h-screen px-6 text-center bg-white">
         <div className="flex flex-col w-full max-w-md min-h-screen p-6 bg-[#fbfbfb] rounded-lg shadow-md">
            <h1 className="mb-3 text-3xl font-bold text-left">Signin to your PopX account</h1>
            <p className="mb-5 text-left text-gray-500 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, beatae.
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
               <div className="relative">
                  <input
                     type="text"
                     name="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                     placeholder=" "
                  />
                  <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                     Email
                  </label>
               </div>

               <div className="relative">
                  <input
                     type="password"
                     name="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                     className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                     placeholder=" "
                  />
                  <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                     Password
                  </label>
               </div>
               <button
                  variant="primary"
                  type="submit"
                  className="w-full py-2 text-white bg-[#9445ee] rounded-md hover:bg-[#6f28c0]"
               >
                  Login
               </button>
            </form>
         </div>
      </div>
   );
};

export default Login;
