import React from 'react';
import { FaGraduationCap, FaUsers, FaBookOpen, FaAward } from 'react-icons/fa';

function IntroAbout() {
  const features = [
    { icon: <FaGraduationCap size={32} />, title: 'Cambridge Curriculum', description: 'British curriculum with experienced teachers' },
    { icon: <FaUsers size={32} />, title: 'Qualified Teachers', description: 'Highly qualified and passionate educators' },
    { icon: <FaBookOpen size={32} />, title: 'Modern Facilities', description: 'State-of-the-art learning environment' },
    { icon: <FaAward size={32} />, title: 'Holistic Growth', description: 'Academic, social, and emotional development' }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-slate-100/30 to-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-slate-100/20 rounded-full blur-2xl"></div>
      
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
        <div className="text-center mb-10">
              <p className="uppercase tracking-wider text-endeavour-dark font-semibold text-sm mb-2">ABOUT US</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            About <span className="text-endeavour-dark">Endeavour Academy</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-endeavour-dark to-endeavour-blue text-white rounded-full mb-3 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Background decorative elements */}
            <div className="absolute -left-4 -top-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-slate-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-slate-200 to-blue-200 rounded-full opacity-60"></div>
            
            {/* Main image container */}
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Students learning in classroom" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl border-2 border-white" 
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=900&auto=format&fit=crop';
                }}
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-endeavour-dark to-endeavour-blue text-white p-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">21+</div>
                  <div className="text-xs font-medium opacity-90">Years of Excellence</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 -left-2 w-4 h-4 bg-blue-400 rounded-full opacity-80"></div>
              <div className="absolute top-1/3 -right-2 w-3 h-3 bg-slate-400 rounded-full opacity-80"></div>
              <div className="absolute bottom-1/3 -left-3 w-3 h-3 bg-blue-400 rounded-full opacity-80"></div>
            </div>
          </div>

          <div className="space-y-5 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Why Choose <span className="text-endeavour-dark">Endeavour?</span>
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Our classrooms are spaces where curiosity thrives, teachers inspire, and students feel confident 
                to question, explore, and achieve. We focus on conceptual learning, innovation, and holistic 
                growth, ensuring every child reaches their true potential.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-5 rounded-2xl">
              <h4 className="text-base font-bold text-slate-900 mb-4">Our Key Advantages:</h4>
              <ul className="space-y-3">
                {[
                  'Cambridge (British) Curriculum',
                  'Highly Qualified & Passionate Teachers',
                  'STEM & Robotics Programs',
                  'Arts, Taekwondo, and Sports Activities',
                  'Modern Classrooms & Safe Learning Environment',
                  'Focus on Confidence, Communication & Critical Thinking'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-endeavour-dark to-endeavour-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-gradient-to-r from-endeavour-dark to-endeavour-blue text-white px-6 py-2 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm">
                Learn More
              </button>
              <button className="bg-transparent border-2 border-endeavour-blue text-endeavour-dark px-6 py-2 rounded-xl font-bold hover:bg-endeavour-blue hover:text-white transition-all duration-300 text-sm">
                Visit Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroAbout;

