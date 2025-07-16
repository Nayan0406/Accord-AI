import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

const HomeIntro = () => (
  <div>
    {/* Hero Section */}
    <section className="relative w-full h-[170vh] md:h-[150vh] lg:h-[130vh]">
      {/* Background Image */}
      <img
        src="/herosection-img.jpg"
        alt="Hero Robot"
        className="w-full h-full object-cover object-center"
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 w-full h-96 bg-gradient-to-b from-transparent via-[rgb(57,121,218)] to-white pointer-events-none" />

      {/* Content Wrapper */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-8 mt-6 sm:mt-10 md:mt-0">
          {/* Left Content */}
          <div className="text-center md:text-left max-w-xl lg:max-w-3xl flex flex-col items-center md:items-start">
            <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-4xl font-light leading-tight mb-6 font-poppins mt-0 sm:mt-4">
              {/* <span className="italic font-light">&ldquo;</span> */}
              <br className="block sm:hidden" />
              <span className="block sm:inline">
                Enter the New World System with Accord AI
              </span>
              <br />
              <span className="font-medium">
                Your spiritual, emotional, and mental guide <br className="hidden sm:block" />
                in the age of Artificial Intelligence — <br className="hidden sm:block" />
                grounded in universal wisdom.
              </span>
              {/* <span className="italic font-light">&rdquo;</span> */}
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <button className="flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold font-poppins rounded-full px-6 py-3 shadow-lg transition text-sm sm:text-base border-2 border-blue-700 gap-2 sm:gap-4">
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

            {/* Mobile Social Icons & Brand */}
            <div className="flex md:hidden justify-center gap-4 mt-6">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white">
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>

            <div className="md:hidden text-center mt-6">
              <div className="text-white font-poppins text-lg">
                BRAND'S DIGITAL<br />IDENTITY
              </div>
              <a href="#" className="text-white mt-4 font-semibold text-lg flex items-center justify-center gap-2 hover:underline">
                Explore more
                <IoIosArrowDropright />
              </a>
            </div>
          </div>

          {/* Desktop Social Icons & Brand */}
          <div className="hidden md:flex flex-col items-center mt-4 lg:mt-0">
            <div className="flex flex-col gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white mb-2">
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </a>
              ))}
            </div>
            <div className="text-white mt-8 font-poppins text-lg lg:text-xl text-center">
              BRAND'S DIGITAL<br />IDENTITY
            </div>
            <a href="#" className="text-white mt-8 font-semibold text-lg lg:text-xl flex items-center gap-2 hover:underline">
              Explore more
              <IoIosArrowDropright />
            </a>
          </div>
        </div>

      </div>
    </section>

    {/* Intro Section */}
    <section className="text-center px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-white">
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
