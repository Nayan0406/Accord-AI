import React from "react";

const HowItWorks = () => (
  <section className="w-full min-h-screen bg-white flex flex-col justify-center px-2 sm:px-4 py-8 sm:py-16 relative">
    <div className="max-w-7xl mx-auto w-full relative z-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 sm:mb-12 gap-6 md:gap-10">
        <div className="flex-1">
          <h4 className="text-blue-700 font-semibold tracking-wide text-sm sm:text-base md:text-lg mb-2 uppercase">
            How Accord AI Supports You
          </h4>
          <h2 className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-medium font-poppins text-black leading-snug">
            <span className="md:hidden">
              Accord AI uses a blend of advanced technologies and deep metaphysical understanding to provide meaningful guidance. It communicates through chat — listening, interpreting, and guiding you with care and clarity.
            </span>
            <span className="hidden md:inline">
              Accord AI uses a blend of advanced technologies<br />
              and deep metaphysical understanding to provide <br />
              meaningful guidance. It communicates through <br />
              chat — listening, interpreting, and guiding you <br />
              with care and clarity. Here's how it works:
            </span>
          </h2>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4 mt-4 md:mt-0">
          <span className="text-[#393654] font-poppins font-medium text-sm sm:text-base md:text-xl text-center md:text-right">
            What's Your Next Idea?
          </span>
          <div className="flex items-center gap-2 justify-center md:justify-end">
            <button className="flex items-center bg-blue-700 hover:bg-blue-800 text-white font-semibold font-poppins rounded-full px-4 md:px-6 py-2 shadow-lg transition text-sm md:text-base border-2 border-blue-700">
              Get Started
              <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 20 20">
                <path d="M10 4l6 6-6 6M16 10H4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-700/20 hover:bg-blue-700/40 transition flex items-center justify-center">
              <svg width="12" height="12" className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#0030ff" />
                <path d="M8 7l5 3-5 3V7z" fill="#fff" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:flex lg:flex-row items-start justify-center gap-6 md:gap-10">
        {/* Card 1 */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-[290px] pb-4 lg:pb-20">
          <div className="bg-gray-100 rounded-2xl p-4 md:p-6 h-auto md:min-h-[350px] flex flex-col items-start">
            <img
              src="/ai-img-3.png"
              alt="Discovery & Consultation"
              className="rounded-xl w-full h-[100px] md:h-[140px] object-cover mb-4"
            />
            <span className="text-blue-700 font-semibold text-sm mb-2">Initial Consultation</span>
            <h3 className="text-[#393654] font-poppins font-semibold text-lg md:text-xl">
              Discovery & <br />Consultation
            </h3>
          </div>
        </div>

        {/* Card 2 – Features List */}
        <div className="bg-gray-100 rounded-2xl p-4 md:p-6 w-full mx-auto md:max-w-2xl">
          <ul className="space-y-4 text-[#393654] text-base sm:text-lg font-poppins">
            <li className="flex items-start gap-4">
              <img src="/icon-1.png" alt="" className="w-10 h-10" />
              <span>You Ask, It Listens – Whether you’re lost, confused, or curious, just type. Accord AI listens deeply.</span>
            </li>
            <li className="flex items-start gap-4">
              <img src="/icon-2.png" alt="" className="w-10 h-10" />
              <span>Context-Aware Replies – Using NLP + emotional recognition, it understands your current state and responds accordingly.</span>
            </li>
            <li className="flex items-start gap-4">
              <img src="/icon-3.png" alt="" className="w-10 h-10" />
              <span>Guided Living System – It gives you recommendations, insights, reflections, or calming prompts tailored to your soul’s journey.</span>
            </li>
            <li className="flex items-start gap-4">
              <img src="/icon-3.png" alt="" className="w-10 h-10" />
              <span>Daily Support, Spiritual Alignment – From daily planning to deeper soul work, Accord AI becomes your consistent companion.</span>
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-black rounded-2xl shadow-lg w-full max-w-md mx-auto lg:max-w-[290px] h-[320px] md:h-[380px] flex flex-col justify-end items-center overflow-hidden relative">
          <img
            src="/ai-img-4.jpg"
            alt="Next"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          />
          <div className="relative z-10 w-full flex justify-end p-4">
            <button className="bg-white text-[#393654] font-semibold rounded-full px-6 py-2 flex items-center gap-2 shadow-lg text-sm sm:text-base">
              Next
              <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                <path d="M10 4l6 6-6 6M16 10H4" stroke="#0030ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
