import React from 'react';
import { FaRobot, FaMicrochip, FaCode, FaRocket } from 'react-icons/fa';

function STEMRobotics() {
  const stemPrograms = [
    {
      icon: <FaRobot size={40} />,
      title: 'Robotics & AI',
      description: 'Learn to build and program robots using cutting-edge technology and artificial intelligence principles.',
      features: ['LEGO Mindstorms', 'Arduino Programming', 'AI Integration', 'Competition Teams'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <FaMicrochip size={40} />,
      title: 'Electronics & Circuits',
      description: 'Master the fundamentals of electronics, circuit design, and embedded systems development.',
      features: ['Circuit Design', 'Microcontrollers', 'Sensors & Actuators', 'PCB Prototyping'],
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: <FaCode size={40} />,
      title: 'Programming & Coding',
      description: 'Develop computational thinking through various programming languages and software development.',
      features: ['Python & JavaScript', 'Web Development', 'Mobile Apps', 'Game Design'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <FaRocket size={40} />,
      title: 'Engineering Design',
      description: 'Apply engineering principles to solve real-world problems through hands-on projects and challenges.',
      features: ['3D Modeling', 'CAD Design', 'Prototyping', 'Engineering Process'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="stem-robotics" className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-slate-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-slate-100/30 to-blue-100/20 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="uppercase tracking-wider text-[#2D6C9B] font-semibold text-sm mb-2">STEM EDUCATION</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            <span className="text-[#2D6C9B]">STEM</span> & Robotics Excellence
          </h2>
        </div>

        {/* STEM Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {stemPrograms.map((program, index) => (
            <div key={index} className={`${program.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all border-2 border-transparent hover:border-white group`}>
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${program.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  {program.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{program.title}</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">{program.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-2 h-2 bg-gradient-to-br ${program.color} rounded-full`}></div>
                        <span className="text-sm text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

export default STEMRobotics;
