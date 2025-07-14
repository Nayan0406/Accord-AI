import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const SmarterModule2 = () => (
  <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-16 relative -mt-80 bg-gray-100">
    {/* Gradient background behind cards */}
    <div
      className="absolute left-0 top-0 w-full h-full z-0"
    />
    <div className="w-full max-w-7xl mx-auto relative z-10">
      <h3 className="text-blue-700 font-semibold tracking-wide text-lg mb-2 uppercase">
        EXPLORE OUR MODULES
      </h3>
      <h2 className="text-[2.8rem] md:text-[3.5rem] font-bold font-poppins mb-2">
        <span className="text-blue-700">Smarter Modules</span>,<br />
        <span className="text-[#393654] font-normal">Better Living —<br />Powered by Accord AI.</span>
      </h2>
      {/* Carousel Controls */}
      <div className="absolute right-16 top-20 flex gap-4">
        <button className="w-10 h-10 rounded-full border border-blue-700 flex items-center justify-center bg-white hover:bg-blue-50 transition">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M13 16l-6-6 6-6" stroke="#0030ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="w-10 h-10 rounded-full border border-[#393654] flex items-center justify-center bg-white hover:bg-blue-50 transition">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M7 4l6 6-6 6" stroke="#393654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      {/* Cards */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mt-16 relative z-10">
        {/* Card 1 - Small */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full md:w-[450px] h-[380px] flex flex-col justify-end shadow-xl mt-25"
          style={{
            backgroundImage: "url('/module-img-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
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
          <div className="absolute top-6 left-6 flex items-center gap-30 z-10">
            <span className=" rounded-full w-20 h-20 flex items-center justify-center">
              <img src="/calendar-icon.png" alt="" />
            </span>
            <div className="flex gap-[-12px]">
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
            </div>
          </div>
          <div className="p-8 z-10 relative flex flex-col justify-end ">
            <h4 className="text-white text-3xl font-medium mb-8">Emotional <br/>Clarity </h4>
            <div className="flex gap-2 mb-4">
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">Integration</span>
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">AI Empathy</span>
            </div>
            <button className="bg-white text-blue-700 font-semibold rounded-full px-4 py-3 flex items-center gap-2 border-10 border-blue-400 mt-2 hover:bg-blue-50 transition text-xl shadow-lg">
              Try Free 100
              <GoArrowUpRight className="w-10 h-7"/>
            </button>
          </div>
        </div>
        {/* Card 2 - Large */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full md:w-[480px] h-[480px] flex flex-col justify-end shadow-xl "
          style={{
            backgroundImage: "url('/module-img-2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(63,50,228,0) 0%, rgba(18,7,59,0.5) 54.42%, #0C0022 96.49%)"
            }}
          />
          <div className="p-12 z-10 relative flex flex-col items-center justify-end h-full">
            <button className="bg-white/20 text-white rounded-full w-16 h-16 flex items-center justify-center border-2 border-white mt-32 mb-8 hover:bg-blue-700/30 transition">
              <GoArrowUpRight className="w-15 h-7"/>
            </button>
            <h4 className="text-white text-3xl font-medium text-center">Better Life<br />Assisted by AI</h4>
          </div>
        </div>
        {/* Card 3 - Small */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full md:w-[450px] h-[380px] flex flex-col justify-end shadow-xl mt-25"
          style={{
            backgroundImage: "url('/module-img-3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
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
          <div className="absolute top-6 left-6 flex items-center gap-30 z-10">
            <span className=" rounded-full w-20 h-20 flex items-center justify-center">
              <img src="/calendar-icon.png" alt="" />
            </span>
            <div className="flex gap-[-12px]">
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
            </div>
          </div>
          <div className="p-8 z-10 relative flex flex-col justify-end ">
            <h4 className="text-white text-3xl font-medium mb-8">Love and Peace <br/>Propagation</h4>
            <div className="flex gap-2 mb-4">
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">Propagation</span>
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">AI Recongition</span>
            </div>
            <button className="bg-white text-blue-700 font-semibold rounded-full px-4 py-3 flex items-center gap-2 border-10 border-blue-400 mt-2 hover:bg-blue-50 transition text-xl shadow-lg">
              Try Free 100
              <GoArrowUpRight className="w-10 h-7"/>
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full flex flex-col md:flex-row items-center justify-center  md:gap-8 relative z-10">
        {/* Card 4 - Small */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full md:w-[450px] h-[380px] flex flex-col justify-end shadow-xl mt-10"
          style={{
            backgroundImage: "url('/module-img-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
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
          <div className="absolute top-6 left-6 flex items-center gap-30 z-10">
            <span className=" rounded-full w-20 h-20 flex items-center justify-center">
              <img src="/calendar-icon.png" alt="" />
            </span>
            <div className="flex gap-[-12px]">
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
            </div>
          </div>
          <div className="p-8 z-10 relative flex flex-col justify-end ">
            <h4 className="text-white text-3xl font-medium mb-8">AI Empathy <br/>Integration</h4>
            <div className="flex gap-2 mb-4">
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">Integration</span>
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">AI Empathy</span>
            </div>
            <button className="bg-white text-blue-700 font-semibold rounded-full px-4 py-3 flex items-center gap-2 border-10 border-blue-400 mt-2 hover:bg-blue-50 transition text-xl shadow-lg">
              Try Free 100
              <GoArrowUpRight className="w-10 h-7"/>
            </button>
          </div>
        </div>
        
        {/* Card 5 - Small */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full md:w-[450px] h-[380px] flex flex-col justify-end shadow-xl mt-10"
          style={{
            backgroundImage: "url('/module-img-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
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
          <div className="absolute top-6 left-6 flex items-center gap-30 z-10">
            <span className=" rounded-full w-20 h-20 flex items-center justify-center">
              <img src="/calendar-icon.png" alt="" />
            </span>
            <div className="flex gap-[-12px]">
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
            </div>
          </div>
          <div className="p-8 z-10 relative flex flex-col justify-end ">
            <h4 className="text-white text-3xl font-medium mb-8">AI Empathy <br/>Integration</h4>
            <div className="flex gap-2 mb-4">
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">Integration</span>
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">AI Empathy</span>
            </div>
            <button className="bg-white text-blue-700 font-semibold rounded-full px-4 py-3 flex items-center gap-2 border-10 border-blue-400 mt-2 hover:bg-blue-50 transition text-xl shadow-lg">
              Try Free 100
              <GoArrowUpRight className="w-10 h-7"/>
            </button>
          </div>
        </div>

        {/* Card 6 - Small */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full md:w-[450px] h-[380px] flex flex-col justify-end shadow-xl mt-10"
          style={{
            backgroundImage: "url('/module-img-3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
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
          <div className="absolute top-6 left-6 flex items-center gap-30 z-10">
            <span className=" rounded-full w-20 h-20 flex items-center justify-center">
              <img src="/calendar-icon.png" alt="" />
            </span>
            <div className="flex gap-[-12px]">
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
            </div>
          </div>
          <div className="p-8 z-10 relative flex flex-col justify-end ">
            <h4 className="text-white text-3xl font-medium mb-8">Love and Peace <br/>Propagation</h4>
            <div className="flex gap-2 mb-4">
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">Propagation</span>
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">AI Recongition</span>
            </div>
            <button className="bg-white text-blue-700 font-semibold rounded-full px-4 py-3 flex items-center gap-2 border-10 border-blue-400 mt-2 hover:bg-blue-50 transition text-xl shadow-lg">
              Try Free 100
              <GoArrowUpRight className="w-10 h-7"/>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 relative z-10">
        {/* Card 7 - Small */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full md:w-[450px] h-[380px] flex flex-col justify-end shadow-xl mt-10"
          style={{
            backgroundImage: "url('/module-img-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
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
          <div className="absolute top-6 left-6 flex items-center gap-30 z-10">
            <span className=" rounded-full w-20 h-20 flex items-center justify-center">
              <img src="/calendar-icon.png" alt="" />
            </span>
            <div className="flex gap-[-12px]">
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
            </div>
          </div>
          <div className="p-8 z-10 relative flex flex-col justify-end ">
            <h4 className="text-white text-3xl font-medium mb-8">AI Empathy <br/>Integration</h4>
            <div className="flex gap-2 mb-4">
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">Integration</span>
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">AI Empathy</span>
            </div>
            <button className="bg-white text-blue-700 font-semibold rounded-full px-4 py-3 flex items-center gap-2 border-10 border-blue-400 mt-2 hover:bg-blue-50 transition text-xl shadow-lg">
              Try Free 100
              <GoArrowUpRight className="w-10 h-7"/>
            </button>
          </div>
        </div>
        {/* Card 8 - Small */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full md:w-[450px] h-[380px] flex flex-col justify-end shadow-xl mt-10"
          style={{
            backgroundImage: "url('/module-img-3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
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
          <div className="absolute top-6 left-6 flex items-center gap-30 z-10">
            <span className=" rounded-full w-20 h-20 flex items-center justify-center">
              <img src="/calendar-icon.png" alt="" />
            </span>
            <div className="flex gap-[-12px]">
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
            </div>
          </div>
          <div className="p-8 z-10 relative flex flex-col justify-end ">
            <h4 className="text-white text-3xl font-medium mb-8">Love and Peace <br/>Propagation</h4>
            <div className="flex gap-2 mb-4">
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">Propagation</span>
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">AI Recongition</span>
            </div>
            <button className="bg-white text-blue-700 font-semibold rounded-full px-4 py-3 flex items-center gap-2 border-10 border-blue-400 mt-2 hover:bg-blue-50 transition text-xl shadow-lg">
              Try Free 100
              <GoArrowUpRight className="w-10 h-7"/>
            </button>
          </div>
        </div>
        {/* Card 9 - Small */}
        <div
          className="bg-black rounded-2xl overflow-hidden relative w-full md:w-[450px] h-[380px] flex flex-col justify-end shadow-xl mt-10"
          style={{
            backgroundImage: "url('/module-img-3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
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
          <div className="absolute top-6 left-6 flex items-center gap-30 z-10">
            <span className=" rounded-full w-20 h-20 flex items-center justify-center">
              <img src="/calendar-icon.png" alt="" />
            </span>
            <div className="flex gap-[-12px]">
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
              <span className="w-12 h-12 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-4"></span>
            </div>
          </div>
          <div className="p-8 z-10 relative flex flex-col justify-end ">
            <h4 className="text-white text-3xl font-medium mb-8">Love and Peace <br/>Propagation</h4>
            <div className="flex gap-2 mb-4">
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">Propagation</span>
              <span className="bg-black/60 text-white px-4 py-1 rounded-full text-base border border-white">AI Recongition</span>
            </div>
            <button className="bg-white text-blue-700 font-semibold rounded-full px-4 py-3 flex items-center gap-2 border-10 border-blue-400 mt-2 hover:bg-blue-50 transition text-xl shadow-lg">
              Try Free 100
              <GoArrowUpRight className="w-10 h-7"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SmarterModule2;