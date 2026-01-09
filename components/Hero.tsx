import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[700px] bg-blue-50 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-2xl bg-white/40 lg:bg-transparent p-8 lg:p-0 rounded-3xl backdrop-blur-md lg:backdrop-blur-0 shadow-xl shadow-blue-900/5 lg:shadow-none">
          <div className="flex items-center space-x-2 mb-6 text-xs font-bold text-blue-600 uppercase tracking-[0.3em]">
            <span>Natural Heritage</span>
            <span className="w-8 h-[1px] bg-blue-300"></span>
            <span>Premium Standard</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8 text-blue-950">
            Purity from <br />
            <span className="italic text-blue-600 relative">
              Nature's Heart
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-100 -z-10 rounded-full"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed max-w-lg">
            Sourced from the pristine mountain springs of Aceh, delivered with the highest standards of hygiene for your health and vitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-10 py-5 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 hover:-translate-y-1">
              Explore Products
            </button>
            <button className="bg-white text-blue-950 border border-gray-100 px-10 py-5 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-50 transition-all shadow-sm hover:-translate-y-1">
              Our Process
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-30 pointer-events-none"></div>
    </section>
  );
};

export default Hero;