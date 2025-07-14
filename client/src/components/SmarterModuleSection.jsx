import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const SmarterModuleSection = () => (
  <section className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-16 relative">
    {/* Optional background overlay could go here */}
    <div className="w-full max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-blue-700 font-semibold tracking-wide text-lg mb-2 uppercase">
            EXPLORE OUR MODULES
          </h3>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold font-poppins mb-6">
            <span className="text-blue-700">Smarter Modules</span>,<br />
            <span className="text-[#393654] font-normal">Better Living —<br />Powered by Accord AI.</span>
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex gap-4 md:mt-0 mt-4">
          <button className="w-10 h-10 rounded-full border border-blue-700 flex items-center justify-center bg-white hover:bg-blue-50 transition">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M13 16l-6-6 6-6" stroke="#0030ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full border border-[#393654] flex items-center justify-center bg-white hover:bg-blue-50 transition">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M7 4l6 6-6 6" stroke="#393654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 mt-16 relative z-10">
        {/* Card 1 */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full sm:max-w-[90%] md:w-[450px] h-[380px] flex flex-col justify-end shadow-xl"
          style={{
            backgroundImage: "url('/module-img-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
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
          <div className="absolute top-6 left-6 flex items-center gap-4 z-10">
            <span className="rounded-full w-16 h-16 flex items-center justify-center">
              <img src="/calendar-icon.png" alt="" />
            </span>
            <div className="flex">
              <span className="w-10 h-10 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
              <span className="w-10 h-10 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-3"></span>
              <span className="w-10 h-10 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-3"></span>
            </div>
          </div>
          <div className="p-6 z-10 relative flex flex-col justify-end">
            <h4 className="text-white text-2xl sm:text-3xl font-medium mb-4">AI Empathy <br />Integration</h4>
            <div className="flex gap-2 mb-4 flex-wrap">
              <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm border border-white">Integration</span>
              <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm border border-white">AI Empathy</span>
            </div>
            <button className="bg-white text-blue-700 font-semibold rounded-full px-4 py-2 flex items-center gap-2 mt-2 hover:bg-blue-50 transition text-base shadow-lg">
              Try Free 100
              <GoArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full sm:max-w-[90%] md:w-[480px] h-[480px] flex flex-col justify-end shadow-xl mb-25"
          style={{
            backgroundImage: "url('/module-img-2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(63,50,228,0) 0%, rgba(18,7,59,0.5) 54.42%, #0C0022 96.49%)",
            }}
          />
          <div className="p-6 sm:p-10 z-10 relative flex flex-col items-center justify-end h-full">
            <button className="bg-white/20 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border-2 border-white mt-12 mb-6 hover:bg-blue-700/30 transition">
              <GoArrowUpRight className="w-6 h-6" />
            </button>
            <h4 className="text-white text-2xl sm:text-3xl font-medium text-center">
              Better Life<br />Assisted by AI
            </h4>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full sm:max-w-[90%] md:w-[450px] h-[380px] flex flex-col justify-end shadow-xl"
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
          <div className="absolute top-6 left-6 flex items-center gap-4 z-10">
            <span className="rounded-full w-16 h-16 flex items-center justify-center">
              <img src="/calendar-icon.png" alt="" />
            </span>
            <div className="flex">
              <span className="w-10 h-10 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
              <span className="w-10 h-10 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-3"></span>
              <span className="w-10 h-10 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-3"></span>
            </div>
          </div>
          <div className="p-6 z-10 relative flex flex-col justify-end">
            <h4 className="text-white text-2xl sm:text-3xl font-medium mb-4">Love and Peace <br />Propagation</h4>
            <div className="flex gap-2 mb-4 flex-wrap">
              <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm border border-white">Propagation</span>
              <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm border border-white">AI Recognition</span>
            </div>
            <button className="bg-white text-blue-700 font-semibold rounded-full px-4 py-2 flex items-center gap-2 mt-2 hover:bg-blue-50 transition text-base shadow-lg">
              Try Free 100
              <GoArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SmarterModuleSection;
