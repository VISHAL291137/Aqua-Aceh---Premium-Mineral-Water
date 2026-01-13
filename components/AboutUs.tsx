import React, { useState, useEffect, useRef } from 'react';

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Intro */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-1 h-3 bg-blue-400"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-500">The Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 text-blue-950">The Heritage of Purity</h2>
          <div className="space-y-6 text-gray-500 leading-relaxed font-light">
            <p>
              Aqua Aceh was born from the desire to bring the refreshing, untouched water of Aceh’s volcanic springs to every home. Our source is protected by nature, ensuring every drop is as pure as it was intended to be.
            </p>
            <p>
              We combine the wisdom of the earth with state-of-the-art filtration technology to provide a refreshing experience that supports your active and healthy lifestyle.
            </p>
          </div>
          <div className="mt-8">
             <span className="font-serif italic text-3xl text-blue-800 opacity-60">Aceh's Finest Water</span>
             <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-2">Established to Refresh</p>
          </div>
        </div>

        {/* Small Image Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            "https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
            "https://images.unsplash.com/photo-1510446219323-9388339f4005",
            "https://images.unsplash.com/photo-1544237515-004652277d33"
          ].map((url, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl md:rounded-2xl h-40 md:h-56 bg-blue-50 relative group cursor-pointer transform transition-all hover:-translate-y-2"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={`${url}?auto=format&fit=crop&q=80&w=800`}
                alt="Brand Heritage"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl md:rounded-2xl"></div>
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Mission/Vision Split */}
        <div className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/5] bg-blue-100 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl relative transform transition-all duration-500 group-hover:shadow-blue-200">
              <img
                src="https://images.unsplash.com/photo-1502740479091-635887520276?auto=format&fit=crop&q=80&w=1200"
                alt="Pristine Nature"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            {/* Ambient decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full -z-10 blur-3xl group-hover:bg-blue-600/20 transition-all duration-700"></div>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-blue-950">
              Flowing with <br />
              Integrity and <br />
              Community Spirit
            </h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-blue-800">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed font-light text-base">
                To provide the highest quality mineral water while preserving Aceh's natural resources and supporting local community health through sustainable practices.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif text-blue-800">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed font-light text-base">
                To be the most trusted and refreshing water brand in Indonesia, recognized for our commitment to purity, innovation, and social responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;