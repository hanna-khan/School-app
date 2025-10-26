import React from 'react';
import { FaHeart, FaStar, FaRocket } from 'react-icons/fa';

function ClosingSection() {
  return (
    <section id="closing" className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-blue-300/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-slate-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 bg-blue-400/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          {/* Decorative elements */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
              <FaHeart className="text-white" size={20} />
            </div>
            <div className="w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center">
              <FaStar className="text-white" size={20} />
            </div>
            <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
              <FaRocket className="text-white" size={20} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            At Endeavour Academy,<br />
            <span className="text-blue-300">we don't just teach</span><br />
            <span className="text-blue-200">— we inspire.</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Because every child deserves a school that sees their potential, believes in their dreams, 
              and helps them grow into tomorrow's leaders.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12">
              <div className="text-6xl font-bold text-blue-300 mb-4">💫</div>
              <p className="text-lg text-white/80 italic">
                "Every stage is a stepping stone toward lifelong success"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-slate-800 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Join Our Community
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-slate-800 transition-all">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}

export default ClosingSection;
