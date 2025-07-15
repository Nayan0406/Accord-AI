import React from "react";

const LimtlessSection = () => {
  return (
    <section className="bg-gray-100 w-full py-8 sm:py-12 md:py-16 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 md:gap-10">
        {/* Left: 2x2 Avatar Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 order-1 md:order-none">
          <img
            src="/person-1.png"
            alt="avatar"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover"
          />
          <img
            src="/person-2.png"
            alt="avatar"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover"
          />
          <img
            src="/person-3.png"
            alt="avatar"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover"
          />
          <img
            src="/person-4.png"
            alt="avatar"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover"
          />
        </div>

        {/* Center: Headline + Buttons */}
        <div className="text-center md:text-left flex-1 order-3 md:order-none mt-4 sm:mt-6 md:mt-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-[#1c1c1e] mb-4 sm:mb-5 md:mb-6 leading-tight">
            Limitless AI for <br /> Limitless Potential.
          </h1>
          <div className="flex justify-center md:justify-start gap-2 sm:gap-3 md:gap-4">
            <button className="bg-blue-700 text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full hover:bg-blue-800 transition text-sm sm:text-base">
              Let's Talk
            </button>
            <button className="border border-gray-400 text-gray-800 font-medium px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full flex items-center gap-1 sm:gap-2 hover:bg-gray-100 transition text-sm sm:text-base">
              More
              <svg
                width="14"
                height="14"
                className="sm:w-4 sm:h-4 md:w-4 md:h-4"
                fill="none"
                viewBox="0 0 24 24"
              >
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
        <div className="max-w-sm text-gray-600 text-left md:text-left text-base sm:text-lg md:text-xl lg:text-2xl order-2 md:order-none">
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
