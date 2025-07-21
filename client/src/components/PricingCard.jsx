import React from 'react';

const PricingCard = () => {
  const plans = [
    {
      name: 'Free',
      description: 'Get everyday help from Accord AI to tackle tasks at work, school or home.',
      price: '$0',
      priceDetail: '/month',
      buttonText: 'Get started',
      buttonVariant: 'dark',
      // features: [
      //   'Basic AI assistance',
      //   'Standard storage',
      //   'Email support',
      // ],
    },
    {
      name: 'Accord AI Pro',
      description: 'Get more access to new and powerful features to boost your productivity and creativity.',
      price: '$20',
      priceDetail: '/month',
      buttonText: 'Get started',
      buttonVariant: 'dark',
      // secondaryButtonText: 'Free for students',
      // secondaryButtonVariant: 'outline',
      // features: [
      //   'Everything in Free and:',
      //   'Advanced AI capabilities',
      //   'Increased storage',
      //   'Priority email support',
      //   'Exclusive features',
      // ],
    },
    {
      name: 'Accord AI Ultra',
      description: 'Unlock the highest level of access to the best of Accord AI and exclusive features.',
      price: '$150',
      priceDetail: '/month',
      buttonText: 'Get started',
      buttonVariant: 'dark',
      // features: [
      //   'Everything in Accord AI Pro and:',
      //   'Highest access to AI models',
      //   'Massive storage',
      //   '24/7 chat & phone support',
      //   'Premium exclusive features',
      //   'Early access to new tools',
      // ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 sm:p-6 lg:p-8 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-start text-left border border-gray-200
               transform transition-transform duration-300 hover:scale-105"
          >
            {/* Plan Name */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
              {plan.name}
            </h2>

            {/* Plan Description - Added a fixed height */}
            <p className="text-gray-600 text-sm sm:text-base mb-4 flex-grow overflow-hidden h-20">
              {plan.description}
            </p>

            {/* Price Section - Adjusted for consistent vertical alignment */}
            <div className="w-full mb-6 mt-6" style={{ minHeight: '80px' }}>
              <div className="h-5 mb-1">
                {plan.originalPrice ? (
                  <p className="text-gray-500 text-sm line-through">
                    {plan.originalPrice} INR/month
                  </p>
                ) : (
                  <div className="h-5"></div>
                )}
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-gray-900 flex items-baseline">
                {plan.price}
                <span className="text-base text-gray-600 font-normal ml-2">
                  {plan.priceDetail}
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="w-full space-y-3">
              <button
                className={`w-full py-3 rounded-full text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer
          ${plan.buttonVariant === 'dark'
                    ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'
                    : 'bg-white text-blue-600 border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200'
                  }`}
              >
                {plan.buttonText}
              </button>
              {plan.secondaryButtonText && (
                <button
                  className={`w-full py-3 rounded-full text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer
            ${plan.secondaryButtonVariant === 'outline'
                      ? 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 focus:ring-4 focus:ring-blue-100'
                      : ''
                    }`}
                >
                  {plan.secondaryButtonText}
                </button>
              )}
            </div>

            {/* Features List */}
            {plan.features && plan.features.length > 0 && (
              <ul className="mt-6 space-y-2 text-gray-700 w-full">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;