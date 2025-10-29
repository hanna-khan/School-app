import React from 'react';
import { FaShare } from 'react-icons/fa';

const teachers = [
  {
    name: 'John Harris',
    role: 'Principal',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Arika Max',
    role: 'Drawing Teacher',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Frank Lee',
    role: 'Teacher',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Emely Jon',
    role: 'Teacher',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop'
  }
];

function Teachers() {
  return (
    <section id="teachers" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-lg"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-slate-200/30 rounded-full blur-md"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
      </div>
      
      {/* Decorative flags */}
      <div className="absolute top-0 left-0 w-full h-8 flex">
        <div className="w-1/6 bg-blue-300"></div>
        <div className="w-1/6 bg-slate-300"></div>
        <div className="w-1/6 bg-blue-300"></div>
        <div className="w-1/6 bg-slate-300"></div>
        <div className="w-1/6 bg-blue-300"></div>
        <div className="w-1/6 bg-slate-300"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-8">
        <div className="text-center mb-16">
          <p className="uppercase tracking-wider text-[#2D6C9B] font-bold text-sm mb-4">EXPERT TEAM</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Meet Our teacher</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="relative mb-6">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <button className="absolute bottom-2 right-2 w-8 h-8 bg-[#2D6C9B] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <FaShare size={14} className="text-white" />
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">{teacher.name}</h3>
              <p className={`text-sm font-medium ${
                i === 3 ? 'text-[#2D6C9B]' : 'text-slate-600'
              }`}>
                {teacher.role}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#2D6C9B] rounded-full flex items-center justify-center">
        <span className="text-white font-bold">61%</span>
      </div>
    </section>
  );
}

export default Teachers;
