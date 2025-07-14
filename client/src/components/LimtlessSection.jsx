import React from "react";

const LimtlessSection = () => {
  return (
    <section className="bg-gray-100 w-full py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: 2x2 Avatar Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/person-1.png"
            alt="avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
          <img
            src="/person-2.png"
            alt="avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
          <img
            src="/person-3.png"
            alt="avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
          <img
            src="/person-4.png"
            alt="avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>

        {/* Center: Headline + Buttons */}
        <div className="text-center md:text-left flex-1 justify-center ml-30">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#1c1c1e] mb-6 leading-tight">
            Limitless AI for <br /> Limitless Potential.
          </h1>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition">
              Let’s Talk
            </button>
            <button className="border border-gray-400 text-gray-800 font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
              More
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right: Subtext */}
        <div className="max-w-sm text-gray-600 text-left md:text-left text-2xl mb-20">
          <p>
            Unlock the full power of AI to accelerate innovation and achieve
            extraordinary results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimtlessSection;
