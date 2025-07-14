import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ModuleSection = () => (
  <div className="relative w-full overflow-hidden">
    <section
      className="relative flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        minHeight: "189vh", // Keep desktop height
        backgroundImage: "url('/module-section-img.png')",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Center Content - Both Mobile and Desktop */}
      <div className="z-10 px-3 sm:px-6 md:px-8 max-w-xs sm:max-w-xl md:max-w-3xl text-center -mt-10 sm:-mt-20 md:-mt-140">
        <h1 className="text-white text-lg sm:text-xl md:text-[4rem] lg:text-[5rem] font-bold leading-tight mb-4 sm:mb-6 md:mb-10 font-poppins sm:-mt-50">
          <span className="italic font-light">&ldquo;</span>
          <span className="md:hidden">Each Module, a Portal to Higher Living Through AI.</span>
          <span className="hidden md:inline">Each Module, a <br /> Portal to Higher <br /> Living Through AI.</span>
        </h1>
      </div>

      {/* Right Social Icons - Desktop Only */}
      <div className="hidden md:flex absolute right-6 md:right-[5vw] top-1/3 flex-col items-center z-10 -mt-50">
        <div className="flex flex-col gap-4">
          {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-transparent"
            >
              <Icon className="w-5 h-5 text-white" />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Social Icons - Below text for mobile only */}
                <div className="md:hidden flex justify-center items-center gap-4 mt-8">
                  {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 flex items-center justify-center border border-white rounded-full"
                    >
                      <Icon className="text-white w-5 h-5" />
                    </a>
                  ))}
                </div>
    </section>
  </div>
);

export default ModuleSection;
