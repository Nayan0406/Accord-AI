import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const UseCaseSection = () => {
  const useCases = [
    "Spiritual Guidance",
    "Mental Health Support", 
    "Life Navigation",
    "Daily Check-ins",
    "Learning & Growth"
  ];

  return (
    <section className="w-full min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <span className="inline-block text-blue-600 px-4 py-2 text-lg font-medium uppercase">
                Use Cases
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Where Accord AI<br />
                Makes an Impact
              </h2>
            </div>

            {/* Use Cases List */}
            <div className="space-y-4">
              <p className="text-gray-700 text-lg font-medium mb-6">Use cases such as -</p>
              <div className="space-y-3">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {/* <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div> */}
                    <span className="text-gray-800 text-lg">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4 pt-4">
              <button className="flex items-center gap-2 bg-transparent border border-gray-400 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <span className="text-lg">Start Your Journey Now!</span>
              </button>
              <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                <GoArrowUpRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Content - Paragraph and Image */}
          <div className="space-y-6 lg:space-y-8">
            {/* Paragraph Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide mb-4">
                Paragraph
              </span>
              <p className="text-gray-700 text-base leading-relaxed">
                Accord AI is your ally across emotional, mental, and spiritual dimensions of life. It supports users in transforming confusion into clarity, suffering into strength, and action into alignment.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/use-case-img.png" 
                alt="AI Panda with futuristic design" 
                className="w-full h-[300px] sm:h-[400px] lg:h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
