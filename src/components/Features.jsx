import React from 'react';
import { FaBook, FaTv, FaRunning, FaSmile } from 'react-icons/fa';

const items = [
  { title: 'Learn and Play', color: 'bg-blue-100', icon: FaSmile },
  { title: 'Online Class', color: 'bg-slate-100', icon: FaTv },
  { title: 'Formal Tuition', color: 'bg-blue-100', icon: FaBook },
  { title: 'Own Playground', color: 'bg-slate-100', icon: FaRunning },
];

function Features() {
  return (
    <section id="features" className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
        <div className="text-center mb-10">
          <p className="uppercase tracking-wider text-[#2D6C9B] font-semibold">Choose Us</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">Education For Kids</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className={`rounded-2xl p-6 ${item.color} hover:shadow-lg transition-shadow`}>
              <div className="w-12 h-12 rounded-lg bg-white text-[#2D6C9B] flex items-center justify-center mb-4">
                <item.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">Pre-school has open door and also offer free trial session.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;


