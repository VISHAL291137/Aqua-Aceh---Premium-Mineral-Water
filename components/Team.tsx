import React, { useState, useRef } from 'react';
import { Maximize2, X, ShoppingCart, Droplets, ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  type: string;
  img: string;
  desc: string;
  specs: { label: string; value: string }[];
}

const ProductCard: React.FC<{ product: Product; onOpen3D: (p: Product) => void }> = ({ product, onOpen3D }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 15 degrees)
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="group cursor-pointer perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        style={{ 
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: rotate.x === 0 ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
        }}
        className="preserve-3d aspect-[4/5] bg-blue-50/50 mb-6 overflow-hidden rounded-2xl relative shadow-md group-hover:shadow-2xl transition-all duration-500"
      >
        {/* Product Image with Z-Translation for 3D Depth */}
        <div 
          className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-500"
          style={{ transform: 'translateZ(40px)' }}
        >
          <img 
            src={product.img} 
            alt={product.name} 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-8 text-center translate-z-20">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
            <h3 className="text-xl font-serif text-white mb-2 leading-tight">{product.name}</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-blue-200 font-bold mb-6">{product.type}</p>
            
            <button 
              onClick={(e) => { e.stopPropagation(); onOpen3D(product); }}
              className="flex items-center space-x-2 px-6 py-3 bg-white text-blue-900 text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-lg shadow-blue-900/20"
            >
              <Maximize2 size={12} />
              <span>Explore in 3D</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-center group-hover:opacity-40 transition-opacity duration-300">
        <h3 className="text-lg font-serif text-blue-950 mb-1">{product.name}</h3>
        <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">{product.type}</p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  
  const products: Product[] = [
    { 
      id: 1, 
      name: '330ml Mini Bottle', 
      type: 'Perfect for On-the-go', 
      img: 'https://images.unsplash.com/photo-1616118132284-82a63052f305?auto=format&fit=crop&q=80&w=800',
      desc: 'Compact, refreshing, and conveniently sized for your morning commute or gym session. The ultimate companion for active lifestyles.',
      specs: [
        { label: 'Source', value: 'Seulawah Springs' },
        { label: 'pH Level', value: '7.4 Optimal' },
        { label: 'Pack Size', value: '24 Bottles / Case' }
      ]
    },
    { 
      id: 2, 
      name: '600ml Standard', 
      type: 'Daily Hydration', 
      img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800',
      desc: 'The gold standard for daily intake. Perfectly balanced minerals in a sleek, ergonomic design that fits every cupholder.',
      specs: [
        { label: 'Source', value: 'Seulawah Springs' },
        { label: 'pH Level', value: '7.4 Optimal' },
        { label: 'Pack Size', value: '12 Bottles / Case' }
      ]
    },
    { 
      id: 3, 
      name: '1500ml Family', 
      type: 'Pure Sharing', 
      img: 'https://images.unsplash.com/photo-1560032733-1ec44e007881?auto=format&fit=crop&q=80&w=800',
      desc: 'Designed for the family table. Share the purity of Aceh mountain springs with those who matter most during mealtime.',
      specs: [
        { label: 'Source', value: 'Seulawah Springs' },
        { label: 'pH Level', value: '7.4 Optimal' },
        { label: 'Pack Size', value: '6 Bottles / Case' }
      ]
    },
    { 
      id: 4, 
      name: '19L Classic Gallon', 
      type: 'Home & Office', 
      img: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800',
      desc: 'The ultimate source of health for your workplace or kitchen. BPA-free, double-sealed for guaranteed freshness and purity.',
      specs: [
        { label: 'Source', value: 'Deep Volcanic Aquifer' },
        { label: 'pH Level', value: '7.6 High Alkaline' },
        { label: 'Refill', value: 'Available locally' }
      ]
    }
  ];

  return (
    <section id="products" className="py-20 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-1 h-3 bg-blue-300"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-400">Our Premium Selection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-blue-950">Refreshment Reimagined</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onOpen3D={setActiveProduct} />
          ))}
        </div>
      </div>

      {/* 3D Immersive Modal */}
      {activeProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-blue-950/95 backdrop-blur-xl" onClick={() => setActiveProduct(null)}></div>
          
          <div className="relative bg-white w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-auto animate-[modalEnter_0.6s_cubic-bezier(0.16,1,0.3,1)]">
            <button 
              onClick={() => setActiveProduct(null)}
              className="absolute top-8 right-8 z-10 p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all text-gray-500 hover:rotate-90"
            >
              <X size={20} />
            </button>

            {/* Left side: 3D Animation Arena */}
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center relative overflow-hidden p-12 min-h-[400px]">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)]"></div>
              </div>
              
              <div className="relative w-72 h-[500px] perspective-1000 group">
                {/* 3D Floating Visualization */}
                <div className="w-full h-full animate-[float_8s_ease-in-out_infinite] preserve-3d">
                   <img 
                    src={activeProduct.img} 
                    alt={activeProduct.name}
                    className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] transition-transform duration-700"
                  />
                </div>
                {/* Dynamic Shadow */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-8 bg-blue-900/10 blur-2xl rounded-[100%] animate-[shadow_8s_ease-in-out_infinite]"></div>
              </div>

              {/* Floating Floating Droplets for Atmosphere */}
              <div className="absolute top-20 left-20 animate-bounce delay-100 text-blue-200 opacity-40"><Droplets size={24} /></div>
              <div className="absolute bottom-20 right-40 animate-bounce delay-500 text-blue-200 opacity-40"><Droplets size={16} /></div>
            </div>

            {/* Right side: Product Story */}
            <div className="w-full md:w-[450px] p-12 md:p-16 flex flex-col justify-center bg-white">
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-[10px] uppercase tracking-widest font-bold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">3D Preview Active</span>
              </div>
              <h3 className="text-4xl font-serif text-blue-950 mb-6 leading-tight">{activeProduct.name}</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-10 text-lg">
                {activeProduct.desc}
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-12">
                {activeProduct.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-gray-50">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">{spec.label}</span>
                    <span className="text-sm font-semibold text-blue-900">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-blue-600 text-white py-5 px-8 text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center space-x-3 rounded-full">
                  <ShoppingCart size={16} />
                  <span>Order Now</span>
                </button>
                <button className="bg-white border border-gray-200 text-gray-950 py-5 px-8 text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center space-x-3 rounded-full">
                  <span>Share</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalEnter {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateY(0deg) rotateX(0deg); }
          25% { transform: translateY(-30px) rotateY(10deg) rotateX(5deg); }
          50% { transform: translateY(-15px) rotateY(-10deg) rotateX(-5deg); }
          75% { transform: translateY(-40px) rotateY(5deg) rotateX(2deg); }
        }
        @keyframes shadow {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.15; }
          50% { transform: translateX(-50%) scale(0.7); opacity: 0.08; }
        }
      `}</style>
    </section>
  );
};

export default Team;