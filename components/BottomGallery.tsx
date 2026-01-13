
import React from 'react';

const BottomGallery: React.FC = () => {
  const cards = [
    { title: 'Source Heritage', img: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=600&h=600' },
    { title: 'Quality Control', img: 'https://images.unsplash.com/photo-1510446219323-9388339f4005?auto=format&fit=crop&w=600&h=600' },
    { title: 'Distribution Hubs', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=600' },
    { title: 'Health Blog', img: 'https://images.unsplash.com/photo-1544237515-004652277d33?auto=format&fit=crop&w=600&h=600' }
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="group relative overflow-hidden aspect-square rounded-lg md:rounded-xl shadow-md cursor-pointer transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <div className="bg-white/95 backdrop-blur-sm p-3 md:p-4 inline-block border-l-4 border-blue-600 transition-all group-hover:translate-x-2 group-hover:bg-white shadow-lg">
                  <span className="text-xs md:text-sm font-serif font-semibold text-blue-900 uppercase tracking-widest">{c.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomGallery;
