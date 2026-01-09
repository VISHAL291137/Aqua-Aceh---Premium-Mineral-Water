
import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Zap, Heart, Leaf } from 'lucide-react';

const Values: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const values = [
    {
      icon: <ShieldCheck size={32} className="mb-4 text-blue-300" strokeWidth={1.5} />,
      title: 'Hygienic Process',
      desc: 'Multistage filtration ensures every bottle meets global safety standards.'
    },
    {
      icon: <Zap size={32} className="mb-4 text-blue-300" strokeWidth={1.5} />,
      title: 'Rich Minerals',
      desc: 'Naturally balanced minerals to keep you energized and hydrated all day.'
    },
    {
      icon: <Heart size={32} className="mb-4 text-blue-300" strokeWidth={1.5} />,
      title: 'Health First',
      desc: 'Promoting a healthy lifestyle through pure, pH-balanced hydration.'
    },
    {
      icon: <Leaf size={32} className="mb-4 text-blue-300" strokeWidth={1.5} />,
      title: 'Eco Friendly',
      desc: 'We use 100% recyclable materials to protect our beautiful Aceh nature.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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
    <section ref={sectionRef} className="bg-blue-950 py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-4xl font-serif text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          The Aqua Aceh Promise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          {values.map((v, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center md:items-start group transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="p-3 bg-blue-900/50 rounded-xl mb-2 group-hover:bg-blue-800 transition-colors">
                {v.icon}
              </div>
              <h3 className="text-lg font-serif mb-3 group-hover:text-blue-300 transition-colors">{v.title}</h3>
              <p className="text-sm text-blue-100/60 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
