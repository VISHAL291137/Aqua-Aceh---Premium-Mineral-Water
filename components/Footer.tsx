
import React from 'react';
import { Send, Facebook, Twitter, Instagram, Youtube, Droplets } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-blue-50 pt-20 md:pt-24 pb-12 text-gray-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-20">
          {/* Brand Col */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-1 rounded-full">
                <Droplets size={16} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-serif font-bold tracking-tight text-blue-900">Aqua Aceh</span>
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Pure & Natural</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed font-light">
              Providing premium hydration to the people of Aceh and beyond. Sourced naturally, filtered professionally.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Stay hydrated - subscribe"
                className="w-full bg-transparent border-b border-blue-200 py-3 text-sm focus:border-blue-600 outline-none transition-all pr-10 hover:border-blue-400"
              />
              <button className="absolute right-0 bottom-3 text-blue-600 hover:text-blue-900 transition-all hover:scale-110 active:scale-95">
                <Send size={18} />
              </button>
              <p className="text-[10px] text-gray-400 mt-3 font-medium">Get health tips and distribution updates.</p>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="lg:pl-12">
            <h4 className="text-blue-900 font-serif font-semibold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-blue-600 transition-all hover:translate-x-1 inline-block">Our Source</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-all hover:translate-x-1 inline-block">Quality Process</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-all hover:translate-x-1 inline-block">Health Benefits</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-all hover:translate-x-1 inline-block">Careers</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-blue-900 font-serif font-semibold mb-8">Business</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-blue-600 transition-all hover:translate-x-1 inline-block">Distribution Hubs</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-all hover:translate-x-1 inline-block">Order Gallons</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-all hover:translate-x-1 inline-block">Partner with Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-all hover:translate-x-1 inline-block">B2B Solutions</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-8">
            <div>
              <h4 className="text-blue-900 font-serif font-semibold mb-4">Operations</h4>
              <p className="text-xs font-light">Mon - Sat: 08:00 am - 18:00 pm</p>
              <p className="text-xs font-light mt-1">Sunday: Delivery Only</p>
            </div>
            <div>
              <h4 className="text-blue-900 font-serif font-semibold mb-4">Main HQ</h4>
              <p className="text-xs font-light">Jl. Banda Aceh - Meulaboh, Aceh, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-blue-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-6">
            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest">Connect with Us :</span>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:bg-blue-800 transition-all hover:scale-110 active:scale-95">
                <Facebook size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:bg-blue-800 transition-all hover:scale-110 active:scale-95">
                <Twitter size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:bg-blue-800 transition-all hover:scale-110 active:scale-95">
                <Instagram size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:bg-blue-800 transition-all hover:scale-110 active:scale-95">
                <Youtube size={14} />
              </div>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 font-medium">© 2024 Aqua Aceh | Purity You Can Trust</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
