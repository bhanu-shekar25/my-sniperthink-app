import React from 'react';

const Features = ({ features, darkMode }) => {
  return (
    <section id="features" className={`py-16 sm:py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            Everything you need to automate your business operations and make data-driven decisions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.length > 0 ? (
            features.map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-lg'
                }`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="opacity-80">{feature.description}</p>
              </div>
            ))
          ) : (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600 mb-4 animate-pulse"></div>
                <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;