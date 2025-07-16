import React from "react";

const ContactUs = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
        {/* Left Text & Input Section */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none mx-auto lg:mx-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1c1c1e] mb-4 sm:mb-6 text-center lg:text-left">
            Looking to Push <br className="hidden sm:block" /> Boundaries with AI?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 pt-4 sm:pt-5 w-full">
            <input
              type="email"
              placeholder="Enter your email here"
              className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-white text-sm text-gray-700 w-full sm:w-[280px] md:w-[280px] outline-none border border-gray-200 focus:border-blue-500 transition"
            />
            <button className="bg-blue-700 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium sm:font-semibold text-sm hover:bg-blue-800 transition w-full sm:w-auto md:w-auto whitespace-nowrap">
              Contact us
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 w-full mt-8 sm:mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="/ai-img-2.png"
            alt="Chameleons AI"
            className="rounded-xl sm:rounded-2xl w-full max-w-[300px] sm:max-w-[600px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;