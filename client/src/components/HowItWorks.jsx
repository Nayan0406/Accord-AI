import React from "react";

const HowItWorks = () => (
    <section className="w-full min-h-screen bg-gray-100 flex flex-col justify-center px-2 sm:px-4 py-8 sm:py-16 relative">
        <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 sm:mb-12">
                <div>
                    <h4 className="text-blue-700 font-semibold tracking-wide text-sm sm:text-base md:text-lg mb-2 uppercase">
                        How Accord AI Supports You
                    </h4>
                    <h2 className="text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] font-medium font-poppins text-black mb-2 leading-tight">
                        <span className="md:hidden">Accord AI uses a blend of advanced technologies and deep metaphysical understanding to provide meaningful guidance. It communicates through chat — listening, interpreting, and guiding you with care and clarity. Here's how it works:</span>
                        <span className="hidden md:inline">Accord AI uses a blend of advanced technologies<br/> and deep metaphysical understanding to provide <br/>meaningful guidance. It communicates through <br/>chat — listening, interpreting, and guiding you <br/>with care and clarity. Here's how it works:</span>
                    </h2>
                </div>
                <div className="flex flex-col items-center md:items-end gap-4 mt-6 md:mt-0">
                    <span className="text-[#393654] font-poppins font-medium text-sm sm:text-base md:text-[2rem] mb-2 mt-4 sm:mt-8 text-center md:text-left">
                        What's Your Next Idea?
                    </span>
                    <div className="flex items-center gap-2 justify-center md:justify-end">
                        <button className="flex items-center bg-blue-700 hover:bg-blue-800 text-white font-semibold font-poppins rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 shadow-lg transition text-xs sm:text-sm md:text-base border-2 border-blue-700">
                            Get Started
                            <svg className="ml-1 sm:ml-2 sm:w-5 sm:h-5" width="16" height="16" fill="none" viewBox="0 0 20 20">
                                <path
                                    d="M10 4l6 6-6 6M16 10H4"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-blue-700/20 hover:bg-blue-700/40 transition">
                            <svg width="12" height="12" className="sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="10" fill="#0030ff" />
                                <path d="M8 7l5 3-5 3V7z" fill="#fff" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 ml-0 lg:ml-30">
                <div className="relative w-full max-w-[300px] sm:w-[350px] md:w-[290px] pb-8 sm:pb-10 lg:pb-20">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 w-full h-[280px] sm:h-[320px] md:h-[320px] mt-4 sm:mt-6 md:mt-10 flex flex-col items-start">
                        <img
                            src="/howitwork-img-1.png"
                            alt="Discovery & Consultation"
                            className="rounded-xl w-full h-[80px] sm:h-[100px] md:h-[140px] object-cover mb-3 sm:mb-4"
                        />
                        <span className="text-blue-700 font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Initial Consultation</span>
                        <h3 className="text-[#393654] font-poppins font-semibold text-base sm:text-lg md:text-xl mb-2">
                            Discovery & <br />Consultation
                        </h3>
                    </div>
                    {/* Arrows outside LEFT side, aligned to card's bottom border */}
                    <div className="absolute left-[-40px] sm:left-[-60px] lg:left-[-150px] top-[230px] sm:top-[270px] lg:top-[370px] flex items-center gap-1 sm:gap-2 lg:gap-4">
                        <button className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border border-blue-700 flex items-center justify-center bg-white hover:bg-blue-50 transition">
                            <svg width="12" height="12" className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 20 20">
                                <path d="M13 16l-6-6 6-6" stroke="#0030ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border border-blue-700 flex items-center justify-center bg-white hover:bg-blue-50 transition">
                            <svg width="12" height="12" className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 20 20">
                                <path d="M7 4l6 6-6 6" stroke="#0030ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl p-4 sm:p-8 w-full sm:w-[90%] md:w-[550px] h-[340px] sm:h-[500px] flex flex-col justify-center mb-1">
                    <ul className="space-y-4 sm:space-y-8 text-[#393654] text-base sm:text-lg font-poppins">
                        <li className="flex items-start gap-3 sm:gap-6">
                            <span className="inline-block mt-1">
                                {/* Gear Icon */}
                                <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                                    <img src="/icon-1.png" alt="" />
                                </span>
                            </span>
                            <span>
                                You Ask, It Listens – Whether you’re lost, confused, or curious, just type. Accord AI listens deeply.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 sm:gap-6">
                            <span className="inline-block mt-1">
                                {/* Target Icon */}
                                <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                                    <img src="/icon-2.png" alt="" />
                                </span>
                            </span>
                            <span>
                                Context-Aware Replies – Using NLP + emotional recognition, it understands your current state and responds accordingly.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 sm:gap-6">
                            <span className="inline-block mt-1">
                                {/* Roadmap Icon */}
                                <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ">
                                    <img src="/icon-3.png" alt="" />
                                </span>
                            </span>
                            <span>
                                Guided Living System – It gives you recommendations, insights, reflections, or calming prompts tailored to your soul’s journey.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 sm:gap-6">
                            <span className="inline-block mt-1">
                                {/* Roadmap Icon */}
                                <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ">
                                    <img src="/icon-3.png" alt="" />
                                </span>
                            </span>
                            <span>
                                Daily Support, Spiritual Alignment – From daily planning to deeper soul work, Accord AI becomes your consistent companion.
                            </span>
                        </li>
                    </ul>
                </div>
                {/* Card 3 */}
                <div className="bg-black rounded-2xl shadow-lg w-full max-w-[300px] sm:w-[350px] md:w-[290px] h-[280px] sm:h-[320px] md:h-[400px] flex flex-col justify-end items-center overflow-hidden relative">
                    <img
                        src="/howitwork-img-2.png"
                        alt="Next"
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                    <div className="relative z-10 w-full flex justify-end p-3 sm:p-4">
                        <button className="bg-white/100 text-[#393654] font-semibold rounded-full px-4 sm:px-6 py-1.5 sm:py-2 flex items-center gap-2 shadow-lg text-sm sm:text-base">
                            Next
                            <svg width="16" height="16" className="sm:w-5 sm:h-5" fill="none" viewBox="0 0 20 20">
                                <path
                                    d="M10 4l6 6-6 6M16 10H4"
                                    stroke="#0030ff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HowItWorks;