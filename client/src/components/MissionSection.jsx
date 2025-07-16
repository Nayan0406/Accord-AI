import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const MissionSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center relative py-8 sm:py-12 md:py-14 lg:py-16 px-4 -mt-60 sm:-mt-170 md:-mt-100 bg-white">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
        {/* Top Text Section */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h4 className="text-blue-700 font-semibold text-xs sm:text-sm uppercase mb-2">
              About Us
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1c1c1e] leading-tight">
              <span className="text-blue-700">Boost Efficiency</span>,<br />
              Maximize Profits with Smart AI Solutions.
            </h2>
          </div>
          <div className="bg-gray-100 p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-base sm:text-lg text-[#1c1c1e] mb-2">
              WHO WE ARE
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              "Accord AI was born from the realization that most AI tools today are focused only on tasks — to-do lists, reminders, productivity. But what about the inner work? What about emotional healing, mental clarity, or spiritual alignment? We envisioned a different kind of assistant — one that doesn't just help you do, but helps you be."
            </p>
          </div>
        </div>

        {/* Middle Section with Image and Features */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 items-start">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden w-full max-w-[250px] sm:max-w-[280px] md:max-w-[300px] h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] mx-auto md:mx-0">
            <img
              src="/ai-girl-img.png"
              alt="AI Girl"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Features Column */}
          <div className="space-y-6 text-[#1c1c1e] font-bold text-lg">
            <div className="flex items-start gap-3">
              <IoIosArrowDropright className="mt-1 text-gray-500" />
              <span>Conscious <br /> Innovation</span>
            </div>
            <div className="flex items-start gap-3">
              <IoIosArrowDropright className="mt-1 text-gray-500" />
              <span>Empathy &<br /> Understanding</span>
            </div>
            <div className="flex items-start gap-3">
              <IoIosArrowDropright className="mt-1 text-gray-500" />
              <span>Universal <br /> Alignment</span>
            </div>
            <div className="flex items-start gap-3">
              <IoIosArrowDropright className="mt-1 text-gray-500" />
              <span>Trust & <br /> Privacy</span>
            </div>
            <div className="flex items-start gap-3">
              <IoIosArrowDropright className="mt-1 text-gray-500" />
              <span>Purpose-Driven <br /> Design</span>
            </div>
          </div>

          {/* Descriptions Column */}
          <div className="space-y-6 text-gray-600 text-base leading-relaxed">
            <p>We don't just build AI — we infuse it with emotional and spiritual intelligence.</p>
            <p>Every user is unique. Accord AI listens with presence and replies with care.</p>
            <p>We follow principles rooted in natural laws, human dignity, and collective growth.</p>
            <p>Your conversations are confidential. Your inner world stays protected.</p>
            <p>Everything we create has one goal: to help people live more intentionally.</p>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="flex flex-col md:flex-row md:gap-10">
          <div className="hidden md:block w-[200px] h-[1px]" /> {/* Spacer */}
          <div className="bg-gray-100 p-4 sm:p-5 md:p-6 rounded-xl shadow-sm w-full">
            <h3 className="font-semibold text-base sm:text-lg text-[#1c1c1e] mb-2">
              Our Vision & Mission
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              "In a rapidly evolving world where artificial intelligence is becoming part of everyday life, our mission is to ensure that technology uplifts the human spirit. Accord AI was created to serve as a personal guide — an assistant that understands not just your words, but your inner world. Our goal is to help people make better choices, live more consciously, and align with higher purpose through meaningful AI-human interaction."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
