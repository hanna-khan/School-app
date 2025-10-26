import React from 'react';
import { FaStar } from 'react-icons/fa';

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 md:top-20 left-10 md:left-20 w-16 md:w-32 h-16 md:h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-20 md:top-40 right-20 md:right-40 w-12 md:w-24 h-12 md:h-24 bg-blue-300/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-10 md:bottom-20 left-1/4 w-20 md:w-40 h-20 md:h-40 bg-slate-300/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 lg:py-32 grid lg:grid-cols-2 gap-8 md:gap-16 items-center min-h-screen">
        <div className="text-white text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <FaStar className="text-blue-300" size={16} />
            <p className="uppercase tracking-wider text-blue-200 font-semibold text-xs md:text-sm">Learning today for a better tomorrow</p>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
            Endeavour Academy<br className="hidden sm:block" />
            <span className="block sm:inline">Where Potential Shines</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            We believe that education is more than academics — it's a journey of growth, curiosity, and character building. We nurture confident, creative, and compassionate learners who are ready to shape the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-white text-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              LEARN MORE
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-white hover:text-slate-800 transition-all">
              SCHEDULE VISIT
            </button>
          </div>
        </div>
        
        <div className="relative flex justify-center order-first lg:order-last">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop"
              alt="Happy child with skateboard"
              className="w-full max-w-sm md:max-w-md h-auto rounded-2xl md:rounded-3xl shadow-2xl"
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-12 md:w-20 h-12 md:h-20 bg-blue-400 rounded-full flex items-center justify-center">
              <FaStar className="text-white" size={16} />
            </div>
            
            <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 w-16 md:w-32 h-16 md:h-32 bg-slate-300/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


