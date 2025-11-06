import React from 'react';
import { Link } from 'react-router-dom';
import { FaBaby, FaChild, FaUserGraduate, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';

function KeyStages() {
  const ageGroups = [
    {
      icon: <FaBaby size={32} />,
      title: 'Early Years',
      ageRange: 'Ages 2.5 - 5.5',
      grades: 'Pre-Nursery, Nursery, Kindergarten',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50'
    },
    {
      icon: <FaChild size={32} />,
      title: 'Primary',
      ageRange: 'Ages 5.5 - 11.5',
      grades: 'Year 1 - Year 6',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <FaChalkboardTeacher size={32} />,
      title: 'Lower Secondary',
      ageRange: 'Ages 11.5 - 14.5',
      grades: 'Year 7 - Year 9',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <FaUserGraduate size={32} />,
      title: 'Upper Secondary',
      ageRange: 'Ages 14.5 - 16.5',
      grades: 'O Level 1 - O Level 2',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="keystages" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
        <div className="text-center mb-16">
          <p className="uppercase tracking-wider text-[#2D6C9B] font-semibold text-sm mb-2">EDUCATION PATHWAY</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Our <span className="text-[#2D6C9B]">Key Stages</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We follow a four-stage academic structure, each designed to meet students' developmental 
            and intellectual needs. Every stage is a stepping stone toward lifelong success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ageGroups.map((group, index) => (
            <div key={index} className={`${group.bgColor} rounded-2xl p-6 text-center hover:shadow-xl transition-all border-2 border-transparent hover:border-white`}>
              <div className={`w-16 h-16 bg-gradient-to-br ${group.color} text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{group.title}</h3>
              <p className="text-sm font-semibold text-slate-700 mb-1">{group.ageRange}</p>
              <p className="text-xs text-slate-600">{group.grades}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Find Your Child's Perfect Stage</h3>
          <p className="text-slate-600 max-w-3xl mx-auto mb-8 text-lg">
            Each key stage builds upon the previous one, ensuring a seamless transition and comprehensive 
            development of academic, social, and personal skills. Our experienced teachers guide students 
            through every step of their educational journey.
          </p>
          <Link 
            to="/admissions" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-endeavour-dark to-endeavour-blue text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105"
          >
            Learn More
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default KeyStages;

