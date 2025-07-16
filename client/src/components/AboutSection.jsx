import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const AboutSection = () => (
  <div>
    <section
      className="relative bg-cover bg-center overflow-hidden"
      style={{
        minHeight: "170vh",
        backgroundImage: "url('/about-section-img.png')",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 w-full h-96 bg-gradient-to-b from-transparent via-[rgba(0,102,255,0.3)] to-white z-0 pointer-events-none" />

      {/* Centered Content (Moved Up More) */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 transform -translate-y-40">
        <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2.8rem] font-bold leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 font-poppins max-w-3xl">
          <span className="italic font-light">&ldquo;</span>
          Born out of a need for deeper connection and spiritual clarity in a tech-driven world.
          <span className="italic font-light">&rdquo;</span>
        </h1>

        {/* Social Icons (Mobile) */}
        <div className="flex md:hidden mt-4 gap-2">
          {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
            >
              <Icon className="text-white w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Social Icons (Tablet Only) */}
        <div className="hidden md:flex lg:hidden mt-4 gap-4">
          {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 rounded-full border border-white flex items-center justify-center"
            >
              <Icon className="text-white w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Social Icons (Desktop) */}
      <div className="hidden lg:flex absolute right-8 top-1/3 z-10 flex-col items-center gap-4 mr-40">
        {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center"
          >
            <Icon className="text-white w-5 h-5" />
          </a>
        ))}
      </div>
    </section>
  </div>
);

export default AboutSection;
