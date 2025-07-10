import React from 'react';

const Pricing = ({ pricingPlans, darkMode }) => {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            Choose the plan that's right for your business. No hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.length > 0 ? (
            pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-500 transform scale-105 shadow-lg' 
                    : darkMode ? 'border-gray-700' : 'border-gray-200'
                } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.tier}</h3>
                  <p className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/month</span></p>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))
          ) : (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className={`rounded-xl overflow-hidden border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="p-6">
                  <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-600 rounded mb-4 animate-pulse"></div>
                  <div className="h-10 w-1/3 bg-gray-300 dark:bg-gray-600 rounded mb-6 animate-pulse"></div>
                  <ul className="mb-8 space-y-3">
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-600 mr-2 animate-pulse"></div>
                      <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-600 mr-2 animate-pulse"></div>
                      <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-600 mr-2 animate-pulse"></div>
                      <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                    </li>
                  </ul>
                  <div className="h-12 w-full bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;