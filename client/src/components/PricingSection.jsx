import React from 'react';

const PricingSection = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 overflow-hidden"
      style={{
        backgroundImage: `url('pricing-img.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute bottom-0 w-full h-96 bg-gradient-to-b from-transparent via-[rgb(41,102,193)] to-white pointer-events-none z-10" />

      {/* Overlay to make text more readable on the background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content (Logo, Title, Button) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <img
          src="/accord-ai-logo.png" // Placeholder for Accord AI Logo
          alt="Accord AI Logo"
          className="h-40 w-40 object-contain mb-8 " // Added object-contain, rounded-full, shadow for better appearance
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/160x160/cccccc/333333?text=Logo"; // Fallback
          }}
        />

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-semibold text-white mb-12 drop-shadow-lg">
          Get more out of <span className="text-red-400">Accord AI</span>
        </h1>

        {/* Upgrade Button */}
        <button
          className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg
                     hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75
                     transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          Upgrade
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
