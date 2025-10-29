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

  const ageGroups = [
    { age: '6-8', level: 'Beginner', description: 'Introduction to basic concepts through fun activities' },
    { age: '9-12', level: 'Intermediate', description: 'Hands-on projects and problem-solving challenges' },
    { age: '13-16', level: 'Advanced', description: 'Complex projects and competition preparation' }
  ];

  return (
    <section id="stem-robotics" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-slate-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-slate-100/30 to-blue-100/20 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-wider text-[#2D6C9B] font-semibold text-sm mb-2">STEM EDUCATION</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            <span className="text-[#2D6C9B]">STEM</span> & Robotics Excellence
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Prepare your child for the future with our comprehensive STEM and Robotics programs. 
            We combine science, technology, engineering, and mathematics with hands-on learning experiences.
          </p>
        </div>

        {/* STEM Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
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

        {/* Age Groups & Levels */}
        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Program Levels</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-700 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                  {group.age}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{group.level}</h4>
                <p className="text-slate-600 text-sm">{group.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our STEM Program?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2D6C9B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-slate-700">Hands-on learning with latest technology</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2D6C9B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-slate-700">Expert instructors with industry experience</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2D6C9B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-slate-700">Competition teams and project showcases</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2D6C9B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-slate-700">Collaboration with local tech companies</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Program Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-slate-700">Weekly hands-on workshops and labs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-slate-700">Access to professional-grade equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-slate-700">Portfolio development for college applications</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-slate-700">Industry mentorship opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-endeavour-dark to-endeavour-blue rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your STEM Journey?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join our innovative STEM and Robotics programs and give your child the skills they need for tomorrow's world.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-endeavour-dark px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default STEMRobotics;
