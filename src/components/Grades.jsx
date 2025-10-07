import React from 'react';

const grades = [
  { title: 'Grade 1', age: 'Age 03 - 04', color: 'bg-purple-600' },
  { title: 'Grade 2', age: 'Age 03 - 04', color: 'bg-orange-500' },
  { title: 'Grade 3', age: 'Age 03 - 04', color: 'bg-red-600' },
];

function Grades() {
  return (
    <section id="grades" className="py-20 bg-gradient-to-r from-orange-400 to-orange-500 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-300/20 rounded-full blur-lg"></div>
      </div>
      
      {/* Decorative airplane */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      </div>
      
      {/* Palm trees */}
      <div className="absolute top-20 right-20 flex flex-col gap-4">
        <div className="w-8 h-12 bg-green-600 rounded-t-full"></div>
        <div className="w-6 h-10 bg-green-600 rounded-t-full"></div>
      </div>
      
      {/* Turtle */}
      <div className="absolute top-32 right-32 w-8 h-6 bg-green-500 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <p className="uppercase tracking-wider text-white font-bold text-lg">GRADE LEVEL</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Grade Programs</h2>
          <p className="text-xl text-white/90">Work And Play Come Together ?</p>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mb-12">
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

        {/* Grade Cards */}
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {grades.map((g, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full border-4 border-dashed border-white bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center mb-6">
                <div className={`w-24 h-24 ${g.color} rounded-full flex flex-col items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-sm">GRADE</span>
                  <span className="text-white font-extrabold text-3xl">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{g.title}</h3>
                <p className="text-white/80">{g.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom section with child image */}
      <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-white/10 backdrop-blur-sm rounded-tl-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=400&auto=format&fit=crop"
          alt="Child playing with blocks"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
        <span className="text-white font-bold">28%</span>
      </div>
    </section>
  );
}

export default Grades;