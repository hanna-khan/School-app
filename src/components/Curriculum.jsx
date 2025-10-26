import React from 'react';
import { FaBook, FaFlask, FaCalculator, FaGlobe, FaPalette, FaMusic } from 'react-icons/fa';

function Curriculum() {
  return (
    <section id="curriculum" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-slate-100/40 to-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/40 to-slate-100/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100/20 to-slate-100/20 rounded-full blur-xl"></div>
      
      {/* Floating bubbles */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-blue-200/60 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-slate-200/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-60 left-1/4 w-6 h-6 bg-blue-300/70 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-80 right-1/3 w-10 h-10 bg-slate-300/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-40 left-20 w-7 h-7 bg-blue-200/50 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-60 right-10 w-9 h-9 bg-slate-200/70 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
      <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-blue-300/60 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-11 h-11 bg-slate-300/50 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
      <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-blue-200/70 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="uppercase tracking-wider text-blue-600 font-semibold text-sm mb-2">OUR CURRICULUM</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Our <span className="text-blue-600">Curriculum</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our curriculum is designed to ignite curiosity and build a strong foundation in both academics 
            and life skills. We integrate modern teaching methods with traditional values, ensuring our students 
            are prepared for the ever-evolving world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 md:p-8 rounded-2xl md:rounded-3xl">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Core Academics</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm md:text-base">Early Years Foundation</h4>
                  <p className="text-slate-600 text-xs md:text-sm">Focusing on play-based learning and cognitive growth</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm md:text-base">Core Subjects</h4>
                  <p className="text-slate-600 text-xs md:text-sm">English, Mathematics, Science, and Social Studies taught through engaging, activity-based methods</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm md:text-base">Co-Curricular Learning</h4>
                  <p className="text-slate-600 text-xs md:text-sm">STEM, arts, music, and sports programs that encourage creativity and teamwork</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm md:text-base">Character & Skill Development</h4>
                  <p className="text-slate-600 text-xs md:text-sm">Emphasizing discipline, empathy, leadership, and innovation</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 md:p-8 rounded-2xl md:rounded-3xl">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Our Goal</h3>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-600 mb-2 md:mb-4">Balanced minds.</div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 mb-4 md:mb-6">Bright futures.</div>
              <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed">
                We believe that true education goes beyond textbooks. Our curriculum is designed to develop 
                well-rounded individuals who are academically strong, emotionally intelligent, and ready 
                to make a positive impact on the world.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Curriculum;

