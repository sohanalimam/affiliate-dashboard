import React, { useState } from "react";
import { FaLock, FaUser, FaEnvelope, FaKey } from "react-icons/fa";
import backgroundImage from '../../assets/bg.jpeg'; // Import your background image
import logoImage from '../../assets/Desktop White Normal Logo.png'; // Import your logo image

const LoginAndSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center py-8 px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set the background image
    >
      {/* Logo Section */}
      <div className="text-center mb-8">
        <img
          src={logoImage} // Use the imported logo image
          alt="EcomTech Logo"
          className="mx-auto mb-4"
        />
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <div className="flex justify-center mb-6">
          <div className={`p-3 rounded-full ${isLogin ? "bg-blue-600" : "bg-purple-600"}`}>
            <FaLock className="text-white text-4xl" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isLogin ? "Login" : "Sign up"}
        </h2>

        {isLogin ? <LoginForm /> : <SignUpForm />}

        <div className="text-center my-4">
          <span className="text-gray-500">or</span>
        </div>

        <button
          onClick={toggleForm}
          className={`w-full py-2 rounded-md ${isLogin ? "bg-red-600 text-white" : "bg-blue-600 text-white"
            } hover:opacity-90 transition-colors`}
        >
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </div>

      <footer className="text-center mt-8 text-gray-500 text-sm">
        <div className="flex flex-wrap justify-center space-x-4 mb-2">
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Blog</a>
          <a href="#" className="hover:text-blue-500">Help</a>
          <a href="#" className="hover:text-blue-500">API</a>
          <a href="#" className="hover:text-blue-500">Privacy</a>
          <a href="#" className="hover:text-blue-500">Terms</a>
          <a href="#" className="hover:text-blue-500">Locations</a>
        </div>
      </footer>
    </div>
  );
};

const LoginForm = () => (
  <form>
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">Email or phone number</label>
      <div className="relative">
        <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email or phone number"
        />
      </div>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">Password</label>
      <div className="relative">
        <FaKey className="absolute top-3 left-3 text-gray-400" />
        <input
          type="password"
          className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
        />
      </div>
    </div>

    <div className="flex justify-between items-center mb-4">
      <label className="inline-flex items-center text-gray-600">
        <input type="checkbox" className="form-checkbox text-blue-600" />
        <span className="ml-2">Remember me</span>
      </label>
      <a href="#" className="text-blue-600 hover:underline">Forgotten password?</a>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
    >
      Log in
    </button>
  </form>
);

const SignUpForm = () => (
  <form>
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">Your Name</label>
      <div className="relative">
        <FaUser className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Name"
        />
      </div>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">Email or phone number</label>
      <div className="relative">
        <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email or phone number"
        />
      </div>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">Password</label>
      <div className="relative">
        <FaKey className="absolute top-3 left-3 text-gray-400" />
        <input
          type="password"
          className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
        />
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
    >
      Sign up
    </button>
  </form>
);

export default LoginAndSignUp;
