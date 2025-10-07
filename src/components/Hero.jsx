import React from 'react';
import { FaStar } from 'react-icons/fa';

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-orange-400 to-purple-600 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-yellow-300/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-300/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 gap-16 items-center min-h-screen">
        <div className="text-white">
          <div className="flex items-center gap-2 mb-4">
            <FaStar className="text-yellow-300" size={20} />
            <p className="uppercase tracking-wider text-pink-200 font-semibold text-sm">fun happens!</p>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Best Education<br />For Kids
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Learning Program With After-School Care
          </p>
          
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg border-2 border-dashed border-purple-300 hover:bg-purple-50 transition-colors">
            KNOW MORE
          </button>
        </div>
        
        <div className="relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop"
            alt="Happy child with skateboard"
            className="w-full max-w-md h-auto rounded-3xl shadow-2xl"
          />
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center">
            <FaStar className="text-white" size={24} />
          </div>
          
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-300/30 rounded-full blur-xl"></div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button className="w-12 h-12 bg-white rounded-full border-2 border-dashed border-orange-300 flex items-center justify-center hover:bg-orange-50">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-12 h-12 bg-white rounded-full border-2 border-dashed border-orange-300 flex items-center justify-center hover:bg-orange-50">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Hero;


