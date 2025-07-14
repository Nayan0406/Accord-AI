import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

const AboutSection = () => (
  <div>
    <section
      className="relative flex items-center justify-start bg-cover bg-center overflow-hidden min-h-screen md:min-h-0"
      style={{
        height: "189vh", // Keep desktop height
        backgroundImage: "url('/about-section-img.png')",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Left Content */}
      <div className="z-10 ml-2 sm:ml-4 md:ml-80 max-w-xs sm:max-w-2xl md:max-w-3xl mb-100 px-2 sm:px-0">
        <h1 className="text-white text-base sm:text-xl md:text-[2.8rem] font-bold leading-tight mb-4 sm:mb-6 md:mb-10 font-poppins -mt-10 sm:-mt-20 md:-mt-40">
          <span className="italic font-light">&ldquo;</span>
          "Born out of a need for deeper connection and spiritual clarity in a tech-driven world."<br className="hidden sm:block"/>
          
        </h1>
      </div>

      {/* Right Social & Explore */}
      <div className="absolute left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none sm:right-4 md:right-[5vw] top-2/3 sm:top-1/2 md:top-1/3 flex flex-col items-center z-10 mb-100 -mt-8 sm:-mt-16 md:-mt-50 pr-0 sm:pr-8 md:pr-20">
        <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-4">
          <a href="#" className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white bg-transparent mb-0.5 sm:mb-1 md:mb-2">
            {/* Facebook Icon */}
            <FaFacebookF className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white bg-transparent mb-0.5 sm:mb-1 md:mb-2">
            {/* Instagram Icon */}
            <FaInstagram className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5 text-white"/>
          </a>
          <a href="#" className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white bg-transparent mb-0.5 sm:mb-1 md:mb-2">
            {/* Twitter Icon */}
            <FaTwitter className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5 text-white"/>
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default AboutSection;