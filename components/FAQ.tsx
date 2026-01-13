
import React, { useState } from 'react';
import { Plus, Minus, Truck, Info } from 'lucide-react';

const FAQItem: React.FC<{ number: string, question: string, defaultOpen?: boolean }> = ({ number, question, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all hover:px-2"
      >
        <div className="flex items-center space-x-4 md:space-x-6">
          <span className="text-xs font-semibold text-blue-200 group-hover:text-blue-400 transition-colors">{number}.</span>
          <span className="text-sm font-medium text-gray-700 group-hover:text-blue-900 transition-colors">{question}</span>
        </div>
        <div className="text-gray-400 group-hover:text-blue-900 transition-all group-hover:scale-110">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="pb-6 pl-8 md:pl-12 text-sm text-gray-500 leading-relaxed font-light animate-[slideDown_0.3s_ease-out]">
          Aqua Aceh is sourced from protected underground springs and undergoes a rigorous 12-step purification process to ensure absolute purity and taste consistency.
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-24 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-1 h-3 bg-blue-300"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-400">Everything You Need to Know</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">Hydration Questions</h2>
            <p className="text-gray-500 leading-relaxed font-light mb-12">
              Learn more about our water quality, source heritage, and how we deliver freshness to your doorstep in Aceh.
            </p>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100 hover:shadow-lg transition-all">
              <div className="flex-1 py-4 md:py-0 md:pr-8 flex items-center space-x-4 group cursor-pointer">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all group-hover:scale-110">
                  <Truck size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Delivery Status</p>
                  <p className="text-blue-900 font-serif font-semibold group-hover:text-blue-600 transition-colors">Track your delivery</p>
                </div>
              </div>
              <div className="flex-1 py-4 md:py-0 md:pl-8 flex items-center space-x-4 group cursor-pointer">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all group-hover:scale-110">
                  <Info size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Quality Report</p>
                  <p className="text-blue-900 font-serif font-semibold group-hover:text-blue-600 transition-colors">View Lab Results</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <FAQItem number="01" question="Where is the Aqua Aceh source located?" />
            <FAQItem number="02" question="Is Aqua Aceh pH balanced?" />
            <FAQItem number="03" question="How can I become a distributor?" />
            <FAQItem number="04" question="Are your bottles BPA-free?" />
            <FAQItem number="05" question="How do you handle gallon sanitation?" defaultOpen />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
