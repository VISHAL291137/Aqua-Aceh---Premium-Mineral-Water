
import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Droplets, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-md' : 'bg-white'}`}>
      {/* Top Bar */}
      <div className={`bg-white border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div className="flex items-center space-x-4">
            <Facebook size={14} className="cursor-pointer hover:text-blue-600 transition-all hover:scale-110 active:scale-95" />
            <Twitter size={14} className="cursor-pointer hover:text-blue-600 transition-all hover:scale-110 active:scale-95" />
            <Instagram size={14} className="cursor-pointer hover:text-blue-600 transition-all hover:scale-110 active:scale-95" />
            <Youtube size={14} className="cursor-pointer hover:text-blue-600 transition-all hover:scale-110 active:scale-95" />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-blue-600 transition-all">Distributor Portal</a>
            <a href="#" className="hover:text-blue-600 transition-all">Order Gallons</a>
            <a href="#" className="hover:text-blue-600 transition-all">Bulk Sales</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Logo */}
            <div className="flex items-center justify-between w-full lg:w-auto">
              <div className="flex items-center space-x-2 group">
                <div className="bg-blue-600 p-1.5 rounded-full shadow-lg shadow-blue-100 transition-transform group-hover:scale-110">
                  <Droplets className="text-white" size={20} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-blue-900 uppercase">Aqua Aceh</span>
                  <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Pure Mountain Freshness</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-600">
              <button onClick={() => scrollToSection('hero')} className="hover:text-blue-700 transition-all hover:-translate-y-1 uppercase tracking-widest text-[11px]">Home</button>
              <button onClick={() => scrollToSection('products')} className="hover:text-blue-700 transition-all hover:-translate-y-1 uppercase tracking-widest text-[11px]">Products</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-700 transition-all hover:-translate-y-1 uppercase tracking-widest text-[11px]">Our Source</button>
              <button onClick={() => scrollToSection('values')} className="hover:text-blue-700 transition-all hover:-translate-y-1 uppercase tracking-widest text-[11px]">Quality</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-blue-700 transition-all hover:-translate-y-1 uppercase tracking-widest text-[11px]">FAQ</button>
              <button onClick={() => scrollToSection('footer')} className="hover:text-blue-700 transition-all hover:-translate-y-1 uppercase tracking-widest text-[11px]">Contact</button>
            </nav>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden mt-6 pb-4 flex flex-col space-y-3 text-sm font-medium text-gray-600 border-t border-gray-100 pt-4 animate-[slideDown_0.3s_ease-out]">
              <button onClick={() => scrollToSection('hero')} className="hover:text-blue-700 transition-all hover:translate-x-2 uppercase tracking-widest text-[11px] text-left py-2">Home</button>
              <button onClick={() => scrollToSection('products')} className="hover:text-blue-700 transition-all hover:translate-x-2 uppercase tracking-widest text-[11px] text-left py-2">Products</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-700 transition-all hover:translate-x-2 uppercase tracking-widest text-[11px] text-left py-2">Our Source</button>
              <button onClick={() => scrollToSection('values')} className="hover:text-blue-700 transition-all hover:translate-x-2 uppercase tracking-widest text-[11px] text-left py-2">Quality</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-blue-700 transition-all hover:translate-x-2 uppercase tracking-widest text-[11px] text-left py-2">FAQ</button>
              <button onClick={() => scrollToSection('footer')} className="hover:text-blue-700 transition-all hover:translate-x-2 uppercase tracking-widest text-[11px] text-left py-2">Contact</button>
            </nav>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Header;
