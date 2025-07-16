import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ModuleSection = () => (
  <div className="relative w-full overflow-hidden">
    <section
      className="relative flex flex-col md:flex-row items-center md:items-center justify-center md:justify-center bg-cover bg-center overflow-hidden min-h-screen md:min-h-0"
      style={{
        height: "189vh", // Keep desktop height
        backgroundImage: "url('/module-section-img.png')",
        backgroundAttachment: "scroll",
      }}
    >
      {/* ✅ Fixed Bottom Gradient Overlay: Removed Blue */}
      <div className="absolute bottom-0 w-full h-96 bg-gradient-to-b from-transparent to-white z-0 pointer-events-none" />

      {/* Centered Content */}
      <div className="w-full flex flex-col items-center md:items-center z-10 max-w-xs sm:max-w-xl md:max-w-3xl mb-100 px-3 sm:px-6 md:px-8">
        <h1 className="text-white text-lg sm:text-xl md:text-[4rem] lg:text-[5rem] font-bold leading-tight mb-4 sm:mb-6 md:mb-10 font-poppins -mt-10 sm:-mt-20 md:mt-0 text-center md:text-center">
          <span className="italic font-light">&ldquo;</span>
          <span className="md:hidden">Each Module, a Portal to Higher Living Through AI.</span>
          <span className="hidden md:inline">Each Module, a <br /> Portal to Higher <br /> Living Through AI.</span>
        </h1>

        {/* Social Icons (Mobile) */}
        <div className="flex flex-row gap-2 mt-4 md:hidden">
          {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-transparent"
            >
              <Icon className="w-4 h-4 text-white" />
            </a>
          ))}
        </div>
      </div>

      {/* Social Icons (Desktop) */}
      <div className="hidden md:flex absolute right-4 md:right-[5vw] top-1/3 flex-col items-center z-10 pr-20">
        <div className="flex flex-col gap-4">
          {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-transparent mb-2"
            >
              <Icon className="w-5 h-5 text-white" />
            </a>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ModuleSection;
