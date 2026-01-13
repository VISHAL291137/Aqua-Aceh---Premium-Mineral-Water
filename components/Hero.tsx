import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-[700px] md:h-[700px] bg-blue-50 overflow-hidden flex items-center">
      {/* Background/Image Decoration */}
      <div className="absolute top-0 right-0 w-3/5 h-full overflow-hidden z-10 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-blue-50/20 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=90&w=1600"
          alt="Refreshing Water Splash"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-20">
        <div className={`max-w-2xl bg-white/40 lg:bg-transparent p-8 lg:p-0 rounded-3xl backdrop-blur-md lg:backdrop-blur-0 shadow-xl shadow-blue-900/5 lg:shadow-none transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center space-x-2 mb-6 text-xs font-bold text-blue-600 uppercase tracking-[0.3em]">
            <span>Natural Heritage</span>
            <span className="w-8 h-[1px] bg-blue-300"></span>
            <span>Premium Standard</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 text-blue-950">
            Purity from <br />
            <span className="italic text-blue-600 relative">
              Nature's Heart
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-100 -z-10 rounded-full"></span>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 font-light leading-relaxed max-w-lg">
            Sourced from the pristine mountain springs of Aceh, delivered with the highest standards of hygiene for your health and vitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 hover:-translate-y-1 hover:shadow-blue-300 active:scale-95"
            >
              Explore Products
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-950 border border-gray-100 px-8 sm:px-10 py-4 sm:py-5 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-50 transition-all shadow-sm hover:-translate-y-1 hover:shadow-md active:scale-95"
            >
              Our Process
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce cursor-pointer bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 active:scale-95"
        aria-label="Scroll to content"
      >
        <ChevronDown className="text-blue-600" size={24} />
      </button>

      {/* Decorative Wave Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-30 pointer-events-none"></div>
    </section>
  );
};

export default Hero;