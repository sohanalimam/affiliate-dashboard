import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; 


const Login = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/home/sarwar/Code/affiliate-dashboard/src/assets/bg.jpeg')" }} // Path to your background image
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-xl rounded-lg">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://via.placeholder.com/150" // Replace with your actual logo URL
            alt="EcomTech Logo"
            className="h-12"
          />
          <div className="text-3xl font-bold text-gray-900 flex flex-col text-center">
            <span className="text-green-600">Ecom</span>
            <span className="text-black">Tech</span>
            <p className="text-sm font-light text-gray-500">Selling online, simplified</p>
          </div>
        </div>

        {/* Form */}
        <div className="relative flex justify-center mb-6">
          <div className="absolute -top-10 bg-purple-600 text-white p-4 rounded-full shadow-lg">
            <FaLock size={32} />
          </div>
        </div>

        {/* Sign up Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-700">Sign up</h2>

        <form className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-10 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email/Phone Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email or phone number"
              className="w-full px-10 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-10 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Sign up Button */}
          <button
            type="submit"
            className="w-full py-3 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Sign up
          </button>
        </form>

        {/* Divider */}
        <div className="flex justify-center text-gray-500 my-4">or</div>

        {/* Log in Button */}
        <button
          className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Log in
        </button>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 text-gray-400 text-sm pt-6">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">API</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Locations</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Threads</a>
        </div>
        
        <div className="text-center text-xs text-gray-500 mt-4">
          &copy; 2024. EcomTech. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Login;
