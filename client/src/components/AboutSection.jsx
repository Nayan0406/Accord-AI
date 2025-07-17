import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

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
      <div className="absolute bottom-0 w-full h-[150vh] bg-gradient-to-b from-transparent via-[rgba(240,241,243,0.3)] to-white z-20 pointer-events-none -mb-100" />

      {/* Centered Content (Moved Up More) */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 transform -translate-y-40 -mt-30">
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
      <div className="hidden lg:flex absolute right-8 top-1/3 z-10 flex-col items-center gap-4 lg:mr-40">
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

    {/* Mission Section - Merged Below About Section */}
    <section className="w-full flex flex-col items-center justify-center relative z-30 -mt-110 sm:-mt-96 md:-mt-170 lg:-mt-110 px-4 py-4 sm:py-6 md:py-8 lg:py-10 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
        {/* Top Text Section */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 items-start">
          <div>
            <h4 className="text-blue-700 font-semibold text-xs sm:text-sm uppercase mb-2">
              About Us
            </h4>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1c1c1e] leading-tight">
              <span className="text-blue-700">Boost Efficiency</span>,<br />
              Maximize Profits with Smart AI Solutions.
            </h2>
          </div>
          <div className="bg-gray-100 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg text-[#1c1c1e] mb-2">
              WHO WE ARE
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              "Accord AI was born from the realization that most AI tools today are focused only on tasks — to-do lists, reminders, productivity. But what about the inner work? What about emotional healing, mental clarity, or spiritual alignment? We envisioned a different kind of assistant — one that doesn't just help you do, but helps you be."
            </p>
          </div>
        </div>

        {/* Middle Section with Image and Features */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-start">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] mx-auto md:mx-0">
            <img
              src="/ai-girl-img.png"
              alt="AI Girl"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Features Column */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-[#1c1c1e] font-bold text-base sm:text-lg">
            <div className="flex items-start gap-2 sm:gap-3">
              <IoIosArrowDropright className="mt-1 text-gray-500 flex-shrink-0" />
              <span>Conscious <br /> Innovation</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <IoIosArrowDropright className="mt-1 text-gray-500 flex-shrink-0" />
              <span>Empathy &<br /> Understanding</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <IoIosArrowDropright className="mt-1 text-gray-500 flex-shrink-0" />
              <span>Universal <br /> Alignment</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <IoIosArrowDropright className="mt-1 text-gray-500 flex-shrink-0" />
              <span>Trust & <br /> Privacy</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <IoIosArrowDropright className="mt-1 text-gray-500 flex-shrink-0" />
              <span>Purpose-Driven <br /> Design</span>
            </div>
          </div>

          {/* Descriptions Column */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>We don't just build AI — we infuse it with emotional and spiritual intelligence.</p>
            <p>Every user is unique. Accord AI listens with presence and replies with care.</p>
            <p>We follow principles rooted in natural laws, human dignity, and collective growth.</p>
            <p>Your conversations are confidential. Your inner world stays protected.</p>
            <p>Everything we create has one goal: to help people live more intentionally.</p>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="flex flex-col md:flex-row md:gap-6 lg:gap-10">
          <div className="hidden md:block w-[150px] lg:w-[200px] h-[1px]" /> {/* Spacer */}
          <div className="bg-gray-100 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl shadow-sm w-full">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg text-[#1c1c1e] mb-2">
              Our Vision & Mission
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              "In a rapidly evolving world where artificial intelligence is becoming part of everyday life, our mission is to ensure that technology uplifts the human spirit. Accord AI was created to serve as a personal guide — an assistant that understands not just your words, but your inner world. Our goal is to help people make better choices, live more consciously, and align with higher purpose through meaningful AI-human interaction."
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutSection;
