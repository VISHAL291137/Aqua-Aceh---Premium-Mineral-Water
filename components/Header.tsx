
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Droplets } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div className="flex items-center space-x-4">
            <Facebook size={14} className="cursor-pointer hover:text-blue-600" />
            <Twitter size={14} className="cursor-pointer hover:text-blue-600" />
            <Instagram size={14} className="cursor-pointer hover:text-blue-600" />
            <Youtube size={14} className="cursor-pointer hover:text-blue-600" />
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-blue-600">Distributor Portal</a>
            <a href="#" className="hover:text-blue-600">Order Gallons</a>
            <a href="#" className="hover:text-blue-600">Bulk Sales</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-full shadow-lg shadow-blue-100">
                <Droplets className="text-white" size={20} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-serif font-bold tracking-tight text-blue-900 uppercase">Aqua Aceh</span>
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Pure Mountain Freshness</span>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="flex items-center space-x-8 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-blue-700 transition-colors uppercase tracking-widest text-[11px]">Home</a>
              <a href="#" className="hover:text-blue-700 transition-colors uppercase tracking-widest text-[11px]">Products</a>
              <a href="#" className="hover:text-blue-700 transition-colors uppercase tracking-widest text-[11px]">Our Source</a>
              <a href="#" className="hover:text-blue-700 transition-colors uppercase tracking-widest text-[11px]">Quality</a>
              <a href="#" className="hover:text-blue-700 transition-colors uppercase tracking-widest text-[11px]">Distribution</a>
              <a href="#" className="hover:text-blue-700 transition-colors uppercase tracking-widest text-[11px]">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
