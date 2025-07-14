import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useRef } from "react";

const TechnologiesSection = () => {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <section className="bg-gray-100 w-full py-8 sm:py-16 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with image side-by-side */}
        <div className="mb-6 sm:mb-10 flex flex-col md:flex-row items-start justify-between gap-4 sm:gap-8">
          {/* Text Left Side */}
          <div className="flex-1">
            <h4 className="text-blue-700 font-medium text-xs sm:text-sm md:text-xl uppercase mb-2">
              The Soul of Accord AI: Tech + Consciousness

            </h4>
            <h2 className="text-lg sm:text-xl font-medium text-[#1c1c1e] md:text-2xl">
              Behind Accord AI is a fusion of cutting-edge <br className="hidden sm:block"/>AI and metaphysical understanding. It doesn't<br className="hidden sm:block"/> just process your words — it perceives your<br className="hidden sm:block"/> intent, emotions, and state of being.
            </h2>
          </div>

          {/* Image Right Side */}
          <div className="flex-1 w-full max-w-lg relative mx-auto md:mx-0">
            <div
              className="relative w-full h-[250px] sm:h-[320px] flex flex-col justify-end overflow-hidden"
              style={{
                backgroundImage: "url('/spider-img.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px", // Curved except bottom-left
              }}
            >
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, rgba(63,50,228,0) 0%, rgba(18,7,59,0.5) 54.42%, #0C0022 96.49%)",
                }}
              />
              
              {/* Button positioned at bottom left with curved background */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-10">
                <div className="relative">
                  {/* Curved background overlay */}
                  <div 
                    className="absolute inset-0 bg-white/10 backdrop-blur-sm"
                    style={{
                      borderRadius: "24px 24px 0 24px",
                      transform: "scale(1.2)",
                      zIndex: -1
                    }}
                  />
                  <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold font-poppins rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 shadow-lg transition text-sm sm:text-base">
                    Try For Free
                    <GoArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Tool Cards - now below text + image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {/* Card 1 */}
          <div className="border border-blue-300 rounded-xl p-3 sm:p-4 h-[160px] sm:h-[200px] flex flex-col relative">
            {/* Arrow - Top Left */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
              <span className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 text-xs sm:text-sm">
                <GoArrowUpRight />
              </span>
            </div>

            {/* Description & Image - Centered Row */}
            <div className="flex flex-1 items-center justify-between pl-8 sm:pl-10 pr-2">
              {/* Centered Text */}
              <div className="text-sm sm:text-lg font-medium text-[#1c1c1e] pl-6 sm:pl-10">
                Natural Language <br />Processing (NLP)
              </div>

              {/* Right Side Image */}
              <img
                src="/nlp-img.png"
                alt="Natural Language Processing (NLP)"
                className="w-16 h-20 sm:w-20 sm:h-25 object-contain "
              />
            </div>
          </div>



          {/* Card 2 */}
          <div className="border border-blue-300 rounded-xl p-3 sm:p-4 h-[160px] sm:h-[200px] flex flex-col relative">
            {/* Arrow - Top Left */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
              <span className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 text-xs sm:text-sm">
                <GoArrowUpRight />
              </span>
            </div>

            {/* Description & Image - Centered Row */}
            <div className="flex flex-1 items-center justify-between pl-8 sm:pl-10 pr-2">
              {/* Centered Text */}
              <div className="text-sm sm:text-lg font-medium text-[#1c1c1e] pl-6 sm:pl-10">
                Large Language <br/> Models (LLMs)
              </div>

              {/* Right Side Image */}
              <img
                src="/llm-img.jpg"
                alt="llm image"
                className="w-16 h-24 sm:w-20 sm:h-30 object-contain  rounded-4xl "
              />
            </div>
          </div>

          {/* Card 3: Learn More */}
          <div className="border border-blue-300 rounded-xl p-3 sm:p-4 h-[160px] sm:h-[200px] flex flex-col relative">
            {/* Arrow - Top Left */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
              <span className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 text-xs sm:text-sm">
                <GoArrowUpRight />
              </span>
            </div>

            {/* Description & Image - Centered Row */}
            <div className="flex flex-1 items-center justify-between pl-8 sm:pl-10 pr-2">
              {/* Centered Text */}
              <div className="text-sm sm:text-lg font-medium text-[#1c1c1e] pl-6 sm:pl-10">
                Internet of Things <br/> Compatibility
              </div>

              {/* Right Side Image */}
              <img
                src="/iot-img.png"
                alt="llm image"
                className="w-16 h-24 sm:w-20 sm:h-30 object-contain  rounded-4xl "
              />
            </div>
          </div>
        </div>

        {/* Bottom Tech Scroll */}
        <div className="flex items-center gap-2 sm:gap-3 mt-6 sm:mt-10">
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {[
              "Natural Language Processing (NLP)",
              "Large Language Models (LLMs)",
              "Emotional Recognition",
              "LLP – Layered Learning Protocols",
              "Universal Law Dataset Integration",
              "Mental & Spiritual Safeguards",
              " IoT Compatibility"
            ].map((tech, i) => (
              <div
                key={i}
                className="bg-white whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-gray-700 border border-gray-200 shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Scroll Arrow Button */}
          <button
            onClick={handleScroll}
            className="bg-white border border-gray-300 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
          >
            <MdOutlineKeyboardDoubleArrowRight className="text-lg sm:text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};


export default TechnologiesSection;
