import React from "react";

const ContactUs = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text & Input Section */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#1c1c1e] mb-6 text-center md:text-left">
            Looking to Push <br /> Boundaries with AI?
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-5 w-full">
            <input
              type="email"
              placeholder="Enter your email here"
              className="px-5 py-3 rounded-full bg-white text-sm text-gray-700 w-full sm:w-[280px] outline-none border border-gray-200"
            />
            <button className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-blue-800 transition w-full sm:w-auto">
              Contact us
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 w-full mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/lizard-img.png"
            alt="Chameleons AI"
            className="rounded-2xl w-full max-w-[600px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
