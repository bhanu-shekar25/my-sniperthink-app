import React from 'react';

const Hero = ({ currentSlide, mockSlides, setCurrentSlide }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] sm:h-[80vh]">
        {mockSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <img 
              src={slide.image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12 md:px-20 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white transform transition-all duration-700 translate-y-0 opacity-100">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-xl transform transition-all duration-700 delay-100 translate-y-0 opacity-100">
                {slide.subtitle}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                {slide.cta}
              </button>
            </div>
          </div>
        ))}
        {/* Carousel controls */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {mockSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;