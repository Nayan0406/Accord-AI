import React from "react";
import { GoArrowRight } from "react-icons/go";

const ContactForm = () => {
  return (
    <section className="bg-[#f7f4ff] py-16 px-4 md:px-20 -mt-80">
      <div className="grid md:grid-cols-2">
        {/* Left Side: Text + Image */}
        <div>
          <p className="text-lg font-semibold text-blue-600 mb-2 tracking-widest uppercase ml-30">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1c1c1e] leading-tight mb-6 ml-30">
            <span className="text-blue-600">Reach Out</span>, Tune In —
            <br />Let’s Build the Future <br />in Harmony.
          </h2>

          <div className="mt-8 w-[300px] h-[400px] rounded-xl overflow-hidden ml-30">
            <img
              src="/contact-form-img.png"
              alt="AI Bot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Form + Card */}
        <div>
          {/* Card - Why Us */}
          <div className="bg-white p-6 rounded-xl shadow-sm  max-w-md">
            <h3 className="font-semibold text-[#1c1c1e] mb-2">WHY US</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Have an idea, question, or spark of inspiration? Let’s <br/>connect and explore
              how we can bring it into reality <br/>through AI that understands and elevates.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 mt-8">
            <div>
              <label className="block text-[#1c1c1e] ">Your Name</label>
              <input
                type="text"
                className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-[#1c1c1e] mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-[#1c1c1e] mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-[#1c1c1e] mb-1">Message</label>
              <textarea
                className="w-full border-b border-gray-300 bg-transparent outline-none py-2 resize-none"
                rows="3"
                placeholder=""
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-full px-6 py-3 flex items-center gap-2 font-medium hover:bg-blue-700 transition"
            >
              Leave us a Message
              <GoArrowRight className="text-lg" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
