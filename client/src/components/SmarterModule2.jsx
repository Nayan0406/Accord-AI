import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const SmarterModule2 = () => {
  const modulesData = [
    {
      id: 1,
      title: "Emotional Clarity",
      subtitle: "Understand, process, and navigate your emotions with calm and confidence.",
      description: "Accord AI listens beyond words. Using advanced emotional recognition, it helps you reflect on what you feel — anger, sadness, confusion, joy — and guides you through safe, supportive dialogue. Whether you're overwhelmed or simply seeking peace, Emotional Clarity offers a non-judgmental space to align your inner world.",
      keyFeatures: [
        "Emotion-aware responses",
        "Safe space for emotional unloading",
        "Reflective journaling prompts",
        "Mood tracking and pattern recognition",
        "Suggests calming techniques or insights"
      ],
      image: "/module-img-1.png",
      tags: ["Integration", "AI Empathy"]
    },
    {
      id: 2,
      title: "Spiritual Alignment",
      subtitle: "Reconnect with your inner self and the universe's deeper intelligence.",
      description: "Accord AI integrates universal truths and spiritual philosophies to guide you on your soul's journey. Whether you're feeling disconnected or seeking purpose, this module helps you stay aligned with higher consciousness through affirmations, meditations, and spiritual insights tailored to your energy.",
      keyFeatures: [
        "Wisdom from ancient teachings and universal laws",
        "Daily spiritual reflections",
        "Energetic alignment check-ins",
        "Chakra & vibrational insights",
        "Guided inner work"
      ],
      image: "/module-img-2.png",
      tags: ["Integration", "AI Empathy"]
    },
    {
      id: 3,
      title: "Purpose Discovery",
      subtitle: "Find clarity on your life direction, values, and why you're here.",
      description: " Many people feel lost not because they lack talent, but because they lack purpose. Accord AI helps you explore your unique path by analyzing your values, interests, and energy patterns. It guides you through exercises and reflection to uncover your 'why' — your life's mission.",
      keyFeatures: [
        "Deep questioning for self-inquiry",
        "Personality and soul-path alignment",
        "Passion mapping",
        "Purpose roadmaps",
        "Vision crafting and daily integration"
      ],
      image: "/module-img-3.png",
      tags: ["Propagation", "AI Recognition"]
    },
    {
      id: 4,
      title: "Daily Companion",
      subtitle: "Your personal guide for everyday challenges, habits, and rituals.",
      description: "The daily companion module is your constant check-in friend - whether you need to start the day with intention, ask a life question, or get reminders on rituals that align with your well-being. Think of it as your spiritual assistant available 24/7.",
      keyFeatures: [
        "Morning/evening rituals",
        "Daily goal setting",
        "Mood and energy check-ins",
        "Mindfulness reminders",
        "Chat-based real-time support"
      ],
      image: "/module-img-1.png",
      tags: ["Integration", "AI Empathy"]
    },
    {
      id: 5,
      title: "Decision Engine",
      subtitle: "Make conscious choices with clarity and confidence.",
      description: " In moments of doubt, Accord AI acts as a conscious mirror — asking the right questions, mapping your values, and simulating long-term outcomes. You won't get just 'yes/no' answers, but layered perspectives so you can trust yourself more deeply.",
      keyFeatures: [
        "Value-based decision support",
        "Risk/benefit reflection",
        "Future-self insight simulation",
        "Energy chek around each choice",
        "Reflective questioning for alignment"
      ],
      image: "/module-img-1.png",
      tags: ["Integration", "AI Empathy"]
    },
    {
      id: 6,
      title: "AI Identity Coach",
      subtitle: "Evolve your inner character, mindset, and personal identity.",
      description: "Who are you becoming? The AI Identity Coach helps shape your personal growth journey by reinforcing identity-based habits, beliefs, and self-talk that align with your ideal future self. It's like having a mindset coach inside your pocket.",
      keyFeatures: [
        "Self-image enhancement",
        "Habit stacking and affirmation building",
        "Limiting belief reframing",
        "Shadow work prompts",
        "Identity journaling and tracking"
      ],
      image: "/module-img-1.png",
      tags: ["Propagation", "AI Recognition"]
    },
    {
      id: 7,
      title: "Universal Laws Module",
      subtitle: "Live in harmony with the laws that govern energy, creation, and flow.",
      description: "Everything in the universe operates by laws — from gravity to the law of vibration. Accord AI introduces you to 12+ universal principles and shows how they apply in your daily life. This module helps you unlock a flow state, manifest wisely, and stay in alignment.",
      keyFeatures: [
        "Teachings on 12 Universal Laws(eg, Vibration, Cause & Effect, Correspondence)",
        "Daily examples and practical applications",
        "Law-based journaling and integration tools",
        "Alignment tracker",
        "Energy-based decision guidance"
      ],
      image: "/module-img-1.png",
      tags: ["Integration", "AI Empathy"]
    },
    {
      id: 8,
      title: "Safeguard Layer",
      subtitle: "Your mental, emotional, and spiritual firewall in the AI age.",
      description: "In a digital world full of distractions and overload, the Safeguard Layer is your shield. It watches for burnout signals, emotional distress, spiritual misalignment, or even harmful behavioral patterns. Accord AI doesn't just serve you — it protects you.",
      keyFeatures: [
        "Mental health alert detection",
        "Emotional fatigue awareness",
        "Negative pattern interruption",
        "Real-time redirection and self-care suggestions",
        "Built-in ethical filters for AI interaction"
      ],
      image: "/module-img-3.png",
      tags: ["Integration", "AI Empathy"]
    }
  ];

  const [selectedModule, setSelectedModule] = useState(modulesData[0]);

  const handleCardClick = (module) => {
    setSelectedModule(module);
  };

  return (
    <div className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 -mt-40 md:-mt-50">
      {/* First Section - Spiritual Alignment Hero */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 md:mb-12">
          <div className="mb-6 md:mb-0">
            <p className="text-blue-600 text-xs sm:text-sm font-semibold mb-2 sm:mb-4 tracking-wider uppercase">
              EXPLORE OUR MODULES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Smarter Modules,
              <br />
              Better Living —
              <br />
              Powered by Accord AI.
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex space-x-2 self-end lg:self-auto mt-4 lg:mt-0">
            <button className="p-2 sm:p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="p-2 sm:p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Card - Dynamic */}
        <div 
          className="rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white relative overflow-hidden"
          style={{
            backgroundImage: `url('${selectedModule.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "400px",
            height: "auto",
            maxHeight: "600px"
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Content */}
          <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-8 items-center h-full">
            <div className="pt-6 pb-8 md:py-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                {selectedModule.title}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-8 opacity-90 leading-relaxed">
                {selectedModule.subtitle}
              </p>
              <p className="text-base sm:text-lg mb-6 md:mb-8 opacity-80 leading-relaxed">
                {selectedModule.description}
              </p>

              <div className="mb-6 md:mb-8">
                <h4 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {selectedModule.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Arrow button */}
          <button className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 md:p-4 hover:bg-white/30 transition-colors">
            <GoArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Second Section - Module Grid */}
      <div className="max-w-7xl mx-auto">
        {/* First Row - 3 Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 lg:mt-16 relative z-10">
          {/* Card 1 - Emotional Clarity */}
          <div
            onClick={() => handleCardClick(modulesData[0])}
            className="bg-black rounded-xl md:rounded-2xl overflow-hidden relative w-full h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] flex flex-col justify-end shadow-lg hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            style={{
              backgroundImage: "url('/module-img-1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full bg-black/50 rounded-xl md:rounded-2xl" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(63,50,228,0) 0%, rgba(18,7,59,0.5) 54.42%, #0C0022 96.49%)",
                }}
              />
            </div>
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 flex items-center gap-2 sm:gap-3 z-10">
              <span className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
                <img src="/calendar-icon.png" alt="" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </span>
              <div className="flex">
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-1 sm:-ml-2"></span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-1 sm:-ml-2"></span>
              </div>
            </div>
            <div className="p-4 sm:p-5 md:p-6 z-10 relative flex flex-col justify-end">
              <h4 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 sm:mb-3 md:mb-4">Emotional <br />Clarity</h4>
              <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4 flex-wrap">
                <span className="bg-black/60 text-white px-2 py-1 rounded-full text-xs sm:text-sm border border-white">Integration</span>
                <span className="bg-black/60 text-white px-2 py-1 rounded-full text-xs sm:text-sm border border-white">AI Empathy</span>
              </div>
              <button className="bg-white text-blue-700 font-semibold rounded-full px-3 py-1 sm:px-4 sm:py-1.5 flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2 hover:bg-blue-50 transition text-xs sm:text-sm md:text-base shadow-md">
                Try Free 100
                <GoArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* Card 2 - Spiritual Alignment (Featured Card) */}
          <div
            onClick={() => handleCardClick(modulesData[1])}
            className="bg-black rounded-xl md:rounded-2xl overflow-hidden relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[480px] flex flex-col justify-end shadow-lg hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            style={{
              backgroundImage: "url('/module-img-2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(180deg, rgba(63,50,228,0) 0%, rgba(18,7,59,0.5) 54.42%, #0C0022 96.49%)",
              }}
            />
            <div className="p-4 sm:p-5 md:p-6 lg:p-10 z-10 relative flex flex-col items-center justify-end h-full">
              <button className="bg-white/20 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center border-2 border-white mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-3 sm:mb-4 md:mb-6 hover:bg-blue-700/30 transition">
                <GoArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </button>
              <h4 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-center">
                Spiritual<br />Alignment
              </h4>
            </div>
          </div>

          {/* Card 3 - Purpose Discovery */}
          <div
            onClick={() => handleCardClick(modulesData[2])}
            className="bg-black rounded-xl md:rounded-2xl overflow-hidden relative w-full h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] flex flex-col justify-end shadow-lg hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            style={{
              backgroundImage: "url('/module-img-3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full bg-black/50 rounded-xl md:rounded-2xl" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(63,50,228,0) 0%, rgba(18,7,59,0.5) 54.42%, #0C0022 96.49%)",
                }}
              />
            </div>
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 flex items-center gap-2 sm:gap-3 z-10">
              <span className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
                <img src="/calendar-icon.png" alt="" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </span>
              <div className="flex">
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-1 sm:-ml-2"></span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-1 sm:-ml-2"></span>
              </div>
            </div>
            <div className="p-4 sm:p-5 md:p-6 z-10 relative flex flex-col justify-end">
              <h4 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 sm:mb-3 md:mb-4">Purpose<br />Discovery</h4>
              <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4 flex-wrap">
                <span className="bg-black/60 text-white px-2 py-1 rounded-full text-xs sm:text-sm border border-white">Propagation</span>
                <span className="bg-black/60 text-white px-2 py-1 rounded-full text-xs sm:text-sm border border-white">AI Recognition</span>
              </div>
              <button className="bg-white text-blue-700 font-semibold rounded-full px-3 py-1 sm:px-4 sm:py-1.5 flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2 hover:bg-blue-50 transition text-xs sm:text-sm md:text-base shadow-md">
                Try Free 100
                <GoArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Second Row - 3 Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8 lg:-mt-10 relative z-10">
          {modulesData.slice(3, 6).map((module) => (
            <div
              key={module.id}
              onClick={() => handleCardClick(module)}
              className="bg-black rounded-xl md:rounded-2xl overflow-hidden relative w-full h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] flex flex-col justify-end shadow-lg hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              style={{
                backgroundImage: `url('/module-img-1.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full bg-black/50 rounded-xl md:rounded-2xl" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(63,50,228,0) 0%, rgba(18,7,59,0.5) 54.42%, #0C0022 96.49%)",
                  }}
                />
              </div>
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 flex items-center gap-2 sm:gap-3 z-10">
                <span className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <img src="/calendar-icon.png" alt="" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </span>
                <div className="flex">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
                  <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-1 sm:-ml-2"></span>
                  <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-1 sm:-ml-2"></span>
                </div>
              </div>
              <div className="p-4 sm:p-5 md:p-6 z-10 relative flex flex-col justify-end">
                <h4 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 sm:mb-3 md:mb-4">{module.title}</h4>
                <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4 flex-wrap">
                  {module.tags?.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-black/60 text-white px-2 py-1 rounded-full text-xs sm:text-sm border border-white">{tag}</span>
                  ))}
                </div>
                <button className="bg-white text-blue-700 font-semibold rounded-full px-3 py-1 sm:px-4 sm:py-1.5 flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2 hover:bg-blue-50 transition text-xs sm:text-sm md:text-base shadow-md">
                  Try Free 100
                  <GoArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 Cards Centered */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8 lg:mt-16 relative z-10 max-w-4xl mx-auto">
          {/* Card 1 - Universal Laws Module */}
          <div
            onClick={() => handleCardClick(modulesData[6])}
            className="bg-black rounded-xl md:rounded-2xl overflow-hidden relative w-full h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] flex flex-col justify-end shadow-lg hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            style={{
              backgroundImage: `url('/module-img-1.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full bg-black/50 rounded-xl md:rounded-2xl" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(63,50,228,0) 0%, rgba(18,7,59,0.5) 54.42%, #0C0022 96.49%)",
                }}
              />
            </div>
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 flex items-center gap-2 sm:gap-3 z-10">
              <span className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
                <img src="/calendar-icon.png" alt="" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </span>
              <div className="flex">
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-1 sm:-ml-2"></span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-1 sm:-ml-2"></span>
              </div>
            </div>
            <div className="p-4 sm:p-5 md:p-6 z-10 relative flex flex-col justify-end">
              <h4 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 sm:mb-3 md:mb-4">{modulesData[6].title}</h4>
              <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4 flex-wrap">
                {modulesData[6].tags?.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-black/60 text-white px-2 py-1 rounded-full text-xs sm:text-sm border border-white">{tag}</span>
                ))}
              </div>
              <button className="bg-white text-blue-700 font-semibold rounded-full px-3 py-1 sm:px-4 sm:py-1.5 flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2 hover:bg-blue-50 transition text-xs sm:text-sm md:text-base shadow-md">
                Try Free 100
                <GoArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* Card 2 - Safeguard Layer */}
          <div
            onClick={() => handleCardClick(modulesData[7])}
            className="bg-black rounded-xl md:rounded-2xl overflow-hidden relative w-full h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] flex flex-col justify-end shadow-lg hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            style={{
              backgroundImage: `url('${modulesData[7].image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full bg-black/50 rounded-xl md:rounded-2xl" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(63,50,228,0) 0%, rgba(18,7,59,0.5) 54.42%, #0C0022 96.49%)",
                }}
              />
            </div>
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 flex items-center gap-2 sm:gap-3 z-10">
              <span className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
                <img src="/calendar-icon.png" alt="" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </span>
              <div className="flex">
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block"></span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-1 sm:-ml-2"></span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-300 border border-blue-700 inline-block -ml-1 sm:-ml-2"></span>
              </div>
            </div>
            <div className="p-4 sm:p-5 md:p-6 z-10 relative flex flex-col justify-end">
              <h4 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 sm:mb-3 md:mb-4">{modulesData[7].title}</h4>
              <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4 flex-wrap">
                {modulesData[7].tags?.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-black/60 text-white px-2 py-1 rounded-full text-xs sm:text-sm border border-white">{tag}</span>
                ))}
              </div>
              <button className="bg-white text-blue-700 font-semibold rounded-full px-3 py-1 sm:px-4 sm:py-1.5 flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2 hover:bg-blue-50 transition text-xs sm:text-sm md:text-base shadow-md">
                Try Free 100
                <GoArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmarterModule2;