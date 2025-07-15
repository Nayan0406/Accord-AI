import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

const AboutSection = () => (
  <div>
    <section
      className="relative flex flex-col md:flex-row items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        height: "189vh",
        backgroundImage: "url('/about-section-img.png')",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Centered Content */}
      <div className="w-full flex flex-col items-center z-10 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mb-100 px-2 sm:px-4 md:px-0">
        <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2.8rem] font-bold leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 font-poppins -mt-10 sm:-mt-20 md:-mt-40 lg:-mt-60 xl:mt-0 text-center">
          <span className="italic font-light">&ldquo;</span>
          "Born out of a need for deeper connection and spiritual clarity in a tech-driven world."
          <br className="hidden sm:block" />
        </h1>

        {/* ✅ Tablet Social Icons (only visible on md screens) */}
        <div className="hidden md:flex lg:hidden mt-4 gap-4">
          <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full border border-white bg-transparent">
            <FaFacebookF className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full border border-white bg-transparent">
            <FaInstagram className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full border border-white bg-transparent">
            <FaTwitter className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Mobile Social Icons (unchanged) */}
        <div className="flex flex-row gap-2 mt-4 md:hidden lg:hidden xl:hidden">
          <a href="#" className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white bg-transparent">
            <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white bg-transparent">
            <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white bg-transparent">
            <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>
        </div>
      </div>

      {/* Desktop Social Icons (unchanged) */}
      <div className="hidden md:hidden lg:flex xl:flex absolute right-4 md:right-[3vw] lg:right-[4vw] xl:right-[5vw] top-1/3 flex-col items-center z-10 pr-10 lg:pr-15 xl:pr-20">
        <div className="flex flex-col gap-3 lg:gap-4">
          <a href="#" className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white bg-transparent mb-2">
            <FaFacebookF className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white bg-transparent mb-2">
            <FaInstagram className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white bg-transparent mb-2">
            <FaTwitter className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default AboutSection;
