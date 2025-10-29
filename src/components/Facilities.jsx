import React from 'react';

const facilities = [
  { 
    title: 'Play Ground', 
    description: 'Pre-School Has Open Doors Consntly Expand',
    color: 'bg-[#2D6C9B]',
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  { 
    title: 'Early Club', 
    description: 'Pre-School Has Open Doors Consntly Expand',
    color: 'bg-slate-700',
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 5.33C17 3.5 15.5 2 13.67 2S10.33 3.5 10.33 5.33c0 .85.28 1.64.76 2.28L12 9l.91-1.39c.48-.64.76-1.43.76-2.28C13.67 3.5 12.17 2 10.33 2S7 3.5 7 5.33c0 .85.28 1.64.76 2.28L9 9l1.24-1.39c.48-.64.76-1.43.76-2.28z"/>
      </svg>
    )
  },
  { 
    title: 'Music Club', 
    description: 'Pre-School Has Open Doors Consntly Expand',
    color: 'bg-blue-700',
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
    )
  },
  { 
    title: 'Lunch Club', 
    description: 'Pre-School Has Open Doors Consntly Expand',
    color: 'bg-slate-600',
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
];

function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-slate-100/20 rounded-full blur-lg"></div>
      </div>
      
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
        {/* Header with experience badge */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#2D6C9B] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🎯</span>
              </div>
              <p className="uppercase tracking-wider text-[#2D6C9B] font-bold text-sm">INTRODUCING PLAYSROOM</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Kids Activities And Fun</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Pre-School Has Open Doors A Offer Constantly Expanding Children Our Goal Is To Carefully Educate.
            </p>
          </div>
          
          <div className="flex justify-end">
            <div className="bg-[#2D6C9B] text-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg">Years Of Experience</div>
            </div>
          </div>
        </div>

        {/* Facility Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((f, i) => (
            <div key={i} className={`${f.color} rounded-3xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow`}>
              <div className="mb-6">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-white/90 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/4 h-32 bg-blue-100/20 rounded-tl-full"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#2D6C9B] rounded-full flex items-center justify-center">
        <span className="text-white font-bold">72%</span>
      </div>
    </section>
  );
}

export default Facilities;