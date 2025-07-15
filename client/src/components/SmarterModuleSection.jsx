import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const SmarterModuleSection = () => (
  <section className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-16 relative">
    <div className="w-full max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:max-w-[60%]">
          <h3 className="text-blue-700 font-semibold tracking-wide text-sm sm:text-base md:text-lg mb-2 uppercase">
            EXPLORE OUR MODULES
          </h3>
          <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-bold font-poppins mb-6 leading-tight">
            <span className="text-blue-700">Smarter Modules</span>,<br />
            <span className="text-[#393654] font-normal">
              Better Living —
              <br className="hidden sm:block" />
              Powered by Accord AI.
            </span>
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex gap-2 sm:gap-4 md:mt-0 mt-4 justify-center md:justify-start">
          <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-blue-700 flex items-center justify-center bg-white hover:bg-blue-50 transition">
            <svg width="16" height="16" className="sm:w-5 sm:h-5" fill="none" viewBox="0 0 20 20">
              <path d="M13 16l-6-6 6-6" stroke="#0030ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#393654] flex items-center justify-center bg-white hover:bg-blue-50 transition">
            <svg width="16" height="16" className="sm:w-5 sm:h-5" fill="none" viewBox="0 0 20 20">
              <path d="M7 4l6 6-6 6" stroke="#393654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
        {/* Card 1 */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full max-w-[350px] sm:max-w-[90%] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] flex flex-col justify-end shadow-xl"
          style={{
            backgroundImage: "url('/module-img-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full bg-black/50 rounded-2xl" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(63,50,228,0) 0%, rgba(18,7,59,0.5) 54.42%, #0C0022 96.49%)",
              }}
            />
          </div>
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3 sm:gap-4 z-10">
            <img src="/calendar-icon.png" alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
            <div className="flex">
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 border border-blue-700 inline-block" />
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-2 sm:-ml-3" />
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-2 sm:-ml-3" />
            </div>
          </div>
          <div className="p-4 sm:p-6 z-10 relative flex flex-col justify-end">
            <h4 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">AI Empathy <br />Integration</h4>
            <div className="flex gap-2 mb-3 flex-wrap">
              <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs sm:text-sm border border-white">Integration</span>
              <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs sm:text-sm border border-white">AI Empathy</span>
            </div>
            <button className="bg-white text-blue-700 font-semibold rounded-full px-4 py-2 flex items-center gap-2 mt-2 hover:bg-blue-50 transition text-sm sm:text-base shadow-lg">
              Try Free 100
              <GoArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full max-w-[350px] sm:max-w-[90%] md:w-[440px] h-[350px] sm:h-[400px] md:h-[460px] flex flex-col justify-end shadow-xl"
          style={{
            backgroundImage: "url('/module-img-2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(63,50,228,0) 0%, rgba(18,7,59,0.5) 54.42%, #0C0022 96.49%)",
            }}
          />
          <div className="p-6 md:p-8 z-10 relative flex flex-col items-center justify-end h-full">
            <button className="bg-white/20 text-white rounded-full w-14 h-14 flex items-center justify-center border-2 border-white mt-12 mb-4 hover:bg-blue-700/30 transition">
              <GoArrowUpRight className="w-5 h-5" />
            </button>
            <h4 className="text-white text-lg sm:text-xl md:text-2xl font-medium text-center">
              Better Life<br />Assisted by AI
            </h4>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full max-w-[350px] sm:max-w-[90%] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] flex flex-col justify-end shadow-xl"
          style={{
            backgroundImage: "url('/module-img-3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full bg-black/50 rounded-2xl" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(63,50,228,0) 0%, rgba(18,7,59,0.5) 54.42%, #0C0022 96.49%)",
              }}
            />
          </div>
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3 sm:gap-4 z-10">
            <img src="/calendar-icon.png" alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
            <div className="flex">
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 border border-blue-700 inline-block" />
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-2 sm:-ml-3" />
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-2 sm:-ml-3" />
            </div>
          </div>
          <div className="p-4 sm:p-6 z-10 relative flex flex-col justify-end">
            <h4 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-3">Love and Peace <br />Propagation</h4>
            <div className="flex gap-2 mb-3 flex-wrap">
              <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs sm:text-sm border border-white">Propagation</span>
              <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs sm:text-sm border border-white">AI Recognition</span>
            </div>
            <button className="bg-white text-blue-700 font-semibold rounded-full px-4 py-2 flex items-center gap-2 mt-2 hover:bg-blue-50 transition text-sm sm:text-base shadow-lg">
              Try Free 100
              <GoArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SmarterModuleSection;
