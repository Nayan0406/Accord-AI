import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const TechnologiesSection = () => {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <section className="bg-white w-full py-8 sm:py-12 md:py-14 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-10">
          {/* Text */}
          <div className="flex-1">
            <h4 className="text-blue-700 font-medium text-xs sm:text-sm md:text-lg lg:text-xl uppercase mb-2">
              The Soul of Accord AI: Tech + Consciousness
            </h4>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#1c1c1e]">
              Behind Accord AI is a fusion of cutting-edge <br className="hidden sm:block" />
              AI and metaphysical understanding. It doesn't <br className="hidden sm:block" />
              just process your words — it perceives your <br className="hidden sm:block" />
              intent, emotions, and state of being.
            </h2>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-md relative mx-auto md:mx-0">
            <div
              className="relative w-full h-64 sm:h-72 md:h-80 lg:h-80 flex flex-col justify-end overflow-hidden rounded-2xl"
              style={{
                backgroundImage: "url('/spider-img.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(63,50,228,0) 0%, rgba(18,7,59,0.5) 54.42%, #0C0022 96.49%)",
                }}
              />
              {/* Button */}
              <div className="absolute bottom-6 left-6 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-[24px_24px_0_24px] scale-125 z-[-1]" />
                  <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-6 py-2.5 flex items-center gap-2 shadow-lg transition text-sm sm:text-base">
                    Try For Free
                    <GoArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Natural Language Processing (NLP)",
              image: "/nlp-img.png",
              imgAlt: "NLP",
            },
            {
              title: "Large Language Models (LLMs)",
              image: "/llm-img.jpg",
              imgAlt: "LLM",
            },
            {
              title: "Internet of Things Compatibility",
              image: "/iot-img.png",
              imgAlt: "IoT",
            },
          ].map((card, index) => (
            <div key={index} className="border border-blue-300 rounded-xl p-4 h-48 sm:h-52 md:h-56 flex flex-col relative">
              {/* Arrow */}
              <div className="absolute top-4 left-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 text-sm">
                  <GoArrowUpRight />
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 items-center justify-between pl-10 pr-2">
                <div className="text-sm sm:text-base md:text-lg font-medium text-[#1c1c1e] max-w-[65%]">
                  {card.title}
                </div>
                <img
                  src={card.image}
                  alt={card.imgAlt}
                  className="w-16 h-20 object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Scrollable Tech List */}
        <div className="flex items-center gap-2 mt-10">
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {[
              "Natural Language Processing (NLP)",
              "Large Language Models (LLMs)",
              "Emotional Recognition",
              "LLP – Layered Learning Protocols",
              "Universal Law Dataset Integration",
              "Mental & Spiritual Safeguards",
              "IoT Compatibility",
            ].map((tech, i) => (
              <div
                key={i}
                className="bg-white whitespace-nowrap px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-200 shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>

          <button
            onClick={handleScroll}
            className="bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
          >
            <MdOutlineKeyboardDoubleArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
