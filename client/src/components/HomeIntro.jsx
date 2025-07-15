import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

const HomeIntro = () => (
  <div>
    {/* Hero Section */}
    <section
      className="relative flex flex-col md:flex-row items-center justify-start bg-cover bg-center overflow-hidden"
      style={{
        minHeight: "189vh",
        backgroundImage: "url('/home-section-img.png')",
      }}
    >
      {/* Left Content */}
      <div className="z-10 px-4 sm:px-6 pt-16 sm:pt-10 md:pt-0 md:ml-80 max-w-xs sm:max-w-xl md:max-w-3xl text-center md:text-left mt-8 sm:mt-16 md:-mt-100">
        <h1 className="text-white text-[1.5rem] sm:text-[2rem] md:text-[2rem] font-light leading-tight mb-6 sm:mb-8 md:mb-10 font-poppins">
          <span className="italic font-light">&ldquo;</span>
          Enter the New World System with Accord AI<br />
          <span className="font-medium">
            Your spiritual, emotional, and mental guide <br className="hidden sm:block" />
            in the age of Artificial Intelligence — <br className="hidden sm:block" />
            grounded in universal wisdom.
          </span>
          <span className="italic font-light">&rdquo;</span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
          <button className="flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold font-poppins rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg transition text-sm sm:text-base border-2 border-blue-700 gap-2 sm:gap-4 text-center">
            <span className="sm:hidden">Explore Accord AI</span>
            <span className="hidden sm:block">Explore the Future<br className="hidden sm:block" /> with Accord AI</span>
            <GoArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-8" />
          </button>
          <button className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-blue-700/20 hover:bg-blue-700/40 transition">
            <svg width="24" height="24" className="sm:w-8 sm:h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="10" fill="#0030ff" />
              <path d="M8 7l5 3-5 3V7z" fill="#fff" />
            </svg>
          </button>
        </div>

        {/* Mobile Social Icons - Below buttons for mobile only */}
        <div className="md:hidden flex justify-center items-center gap-4 mt-6">
          <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-transparent">
            <FaFacebookF className="w-4 h-4 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-transparent">
            <FaInstagram className="w-4 h-4 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-transparent">
            <FaTwitter className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Mobile Brand Identity and Explore More - Below social icons for mobile only */}
        <div className="md:hidden text-center mt-6">
          <div className="text-white font-poppins text-lg">
            BRAND'S DIGITAL<br />IDENTITY
          </div>
          <a
            href="#"
            className="text-white mt-4 font-poppins font-semibold text-lg flex items-center justify-center gap-2 hover:underline"
          >
            Explore more
            <IoIosArrowDropright />
          </a>
        </div>
      </div>

      {/* Right Social + Explore (Desktop Only) */}
      <div className="hidden md:flex absolute right-[5vw] top-1/3 flex-col items-center z-10 pr-20 -mt-30">
        <div className="flex flex-col gap-4">
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-transparent mb-2">
            <FaFacebookF className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-transparent mb-2">
            <FaInstagram className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-transparent mb-2">
            <FaTwitter className="w-5 h-5 text-white" />
          </a>
        </div>
        <div className="text-white mt-8 font-poppins text-xl text-center">
          BRAND'S DIGITAL<br />IDENTITY
        </div>
        <a
          href="#"
          className="text-white mt-8 font-poppins font-semibold text-xl flex items-center gap-2 hover:underline"
        >
          Explore more
          <IoIosArrowDropright />
        </a>
      </div>
    </section>

    {/* Intro Section */}
    <section className="text-center px-4 py-8 sm:py-12 bg-gray-100">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#393654] font-poppins mb-4 sm:mb-6 sm:-mt-100">
          Quick Intro
        </h2>
        <p className="text-base sm:text-lg md:text-2xl text-[#393654] font-poppins leading-relaxed">
          "Welcome to Accord AI — a next-gen AI companion designed to guide you through the complexity of the modern world. In a time when human consciousness is evolving and technology is rapidly transforming, Accord AI helps you align your actions with universal laws, understand your deeper self, and move confidently toward a better future. This is not just another chatbot — it is your personal guide to higher living."
        </p>
      </div>
    </section>
  </div>
);

export default HomeIntro;
