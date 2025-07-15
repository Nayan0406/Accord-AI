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
      <div className="z-10 px-4 sm:px-6 lg:px-8 
        mt-50 sm:mt-60 md:-mt-140 lg:-mt-140
        max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 
        text-center md:text-left 
        md:ml-10 lg:ml-20 xl:ml-80 "
      >
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-light leading-tight mb-6 md:mb-8 font-poppins">
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
          <button className="flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold font-poppins rounded-full px-6 py-3 shadow-lg transition text-sm sm:text-base border-2 border-blue-700 gap-2 sm:gap-4 text-center">
            <span className="sm:hidden">Explore Accord AI</span>
            <span className="hidden sm:inline">Explore the Future with Accord AI</span>
            <GoArrowUpRight className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-700/20 hover:bg-blue-700/40 transition">
            <svg width="24" height="24" className="w-6 h-6" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="10" fill="#0030ff" />
              <path d="M8 7l5 3-5 3V7z" fill="#fff" />
            </svg>
          </button>
        </div>

        {/* Tablet & Mobile Social Icons */}
        <div className="flex md:hidden justify-center items-center gap-4 mt-6 md:-mt-140">
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-transparent">
            <FaFacebookF className="w-4 h-4 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-transparent">
            <FaInstagram className="w-4 h-4 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-transparent">
            <FaTwitter className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Tablet & Mobile Brand Identity Section */}
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

      {/* Desktop Right Icons and Branding */}
      <div className="hidden md:flex absolute right-4 lg:right-8 xl:right-20 top-1/3 flex-col items-center z-10 md:-mt-20">
        <div className="flex flex-col gap-4">
          <a href="#" className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white bg-transparent mb-2">
            <FaFacebookF className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white bg-transparent mb-2">
            <FaInstagram className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white bg-transparent mb-2">
            <FaTwitter className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </a>
        </div>
        <div className="text-white mt-8 font-poppins text-lg lg:text-xl text-center">
          BRAND'S DIGITAL<br />IDENTITY
        </div>
        <a
          href="#"
          className="text-white mt-8 font-poppins font-semibold text-lg lg:text-xl flex items-center gap-2 hover:underline"
        >
          Explore more
          <IoIosArrowDropright />
        </a>
      </div>
    </section>

    {/* Intro Section */}
    <section className="text-center px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#393654] font-poppins mb-6 sm:mb-8">
          Quick Intro
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#393654] font-poppins leading-relaxed">
          Welcome to Accord AI — a next-gen AI companion designed to guide you through the complexity of the modern world. In a time when human consciousness is evolving and technology is rapidly transforming, Accord AI helps you align your actions with universal laws, understand your deeper self, and move confidently toward a better future. This is not just another chatbot — it is your personal guide to higher living.
        </p>
      </div>
    </section>
  </div>
);

export default HomeIntro;
