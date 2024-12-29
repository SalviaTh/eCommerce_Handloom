import React, { useLayoutEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatBox from "../Chat/ChatBox";
import {
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCommentDots,
} from "react-icons/fa";

const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="bg-gray-50  pt-12">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
              We’re here to assist you. Please fill out the form below or reach
              out to us via email.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl max-w-lg mx-auto">
            <form className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full h-12 text-sm rounded-lg p-3 pl-10 pr-4 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                  <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full h-12 text-sm rounded-lg p-3 pl-10 pr-4 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    className="w-full h-12 text-sm rounded-lg p-3 pl-10 pr-4 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                  <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    className="w-full h-32 text-sm rounded-lg p-3 pl-10 pr-4 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    placeholder="Describe your issue or inquiry"
                  />
                  <FaCommentDots className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full h-12 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <ChatBox />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
