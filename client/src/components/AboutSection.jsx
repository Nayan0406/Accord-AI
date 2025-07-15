import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

const AboutSection = () => (
  <div>
    <section
      className="relative flex flex-col md:flex-row items-center md:items-center justify-center md:justify-center bg-cover bg-center overflow-hidden min-h-screen md:min-h-0"
      style={{
        height: "189vh", // Keep desktop height
        backgroundImage: "url('/about-section-img.png')",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Centered Content for Mobile and Desktop */}
      <div className="w-full flex flex-col items-center md:items-center z-10 max-w-xs sm:max-w-2xl md:max-w-3xl mb-100 px-2 sm:px-0">
        <h1 className="text-white text-base sm:text-xl md:text-[2.8rem] font-bold leading-tight mb-4 sm:mb-6 md:mb-10 font-poppins -mt-10 sm:-mt-60 md:mt-0 text-center md:text-center">
          <span className="italic font-light">&ldquo;</span>
          "Born out of a need for deeper connection and spiritual clarity in a tech-driven world."<br className="hidden sm:block"/>
        </h1>
        {/* Social Icons: below title on mobile, right on desktop */}
        <div className="flex flex-row gap-2 mt-4 md:hidden">
          <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-transparent">
            <FaFacebookF className="w-4 h-4 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-transparent">
            <FaInstagram className="w-4 h-4 text-white"/>
          </a>
          <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-transparent">
            <FaTwitter className="w-4 h-4 text-white"/>
          </a>
        </div>
      </div>

      {/* Social Icons for Desktop: right side, hidden on mobile */}
      <div className="hidden md:flex absolute right-4 md:right-[5vw] top-1/3 flex-col items-center z-10 pr-20">
        <div className="flex flex-col gap-4">
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-transparent mb-2">
            <FaFacebookF className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-transparent mb-2">
            <FaInstagram className="w-5 h-5 text-white"/>
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-transparent mb-2">
            <FaTwitter className="w-5 h-5 text-white"/>
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default AboutSection;