import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const Signup = () => {
   const [formData, setFormData] = useState({
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      company: "",
      isAgency: "no",
   });
   const dispatch = useDispatch();

   const navigate = useNavigate();

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(formData));
      alert("Signup successful!");
      navigate("/login");
      
   };

   return (
      <div className="flex flex-col items-center justify-end min-h-screen px-6 text-center bg-white">
         <div className="flex flex-col w-full max-w-md min-h-screen p-6 bg-[#fbfbfb] rounded-lg shadow-md">
            <h1 className="mb-5 text-3xl font-bold text-left">
               Signin to your PopX account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6 ">
               {/* Full Name Field */}
               <div className="relative">
                  <input
                     type="text"
                     name="fullName"
                     value={formData.fullName}
                     onChange={handleChange}
                     required
                     className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                     placeholder=" "
                  />
                  <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                     Full Name
                  </label>
               </div>

               {/* Phone Number Field */}
               <div className="relative">
                  <input
                     type="tel"
                     name="phoneNumber"
                     value={formData.phoneNumber}
                     onChange={handleChange}
                     required
                     className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                     placeholder=" "
                  />
                  <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                     Phone Number
                  </label>
               </div>

               {/* Email Address Field */}
               <div className="relative">
                  <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                     placeholder=" "
                  />
                  <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                     Email Address
                  </label>
               </div>

               {/* Password Field */}
               <div className="relative">
                  <input
                     type="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     required
                     className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                     placeholder=" "
                  />
                  <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                     Password
                  </label>
               </div>

               {/* Company Name Field (New) */}
               <div className="relative">
                  <input
                     type="text"
                     name="company"
                     value={formData.company}
                     onChange={handleChange}
                     required
                     className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                     placeholder=" "
                  />
                  <label className="absolute px-1 text-sm text-purple-600 duration-300 transform scale-75 -translate-y-4 bg-[#fbfbfb] top-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                     Company Name
                  </label>
               </div>

               <p className="text-start">Are you in Agency</p>
               <div className="flex items-center space-x-4">
                
                  <label className="flex items-center space-x-2">
                     <input
                        type="radio"
                        name="isAgency"
                        value="yes"
                        checked={formData.isAgency === "yes"}
                        onChange={handleChange}
                        className="text-blue-500"
                     />
                     <span>Yes</span>
                  </label>

                  <label className="flex items-center space-x-2">
                     <input
                        type="radio"
                        name="isAgency"
                        value="no"
                        checked={formData.isAgency === "no"}
                        onChange={handleChange}
                        className="text-blue-500"
                     />
                     <span>No</span>
                  </label>
               </div>

               {/* Submit Button */}
               <div className="mt-20 mb-4">
                  <button
                     type="submit"
                     className="w-full py-3 mt-auto font-semibold text-center text-white transition bg-purple-600 rounded-md hover:bg-purple-700"
                  >
                     Create Account
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Signup;
