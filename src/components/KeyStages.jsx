import React from 'react';
import { FaBaby, FaChild, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

function KeyStages() {
  const keyStages = [
    {
      icon: <FaBaby size={36} />,
      stage: 'Key Stage 1',
      title: 'Early Years Foundation Stage (EYFS)',
      ageRange: 'Ages 3-5',
      grades: 'Pre-K & KG',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      description: 'Play, explore, and learn — our youngest learners build early literacy, numeracy, and social confidence through engaging, joyful experiences.',
      focus: ['Play-based learning', 'Early literacy & numeracy', 'Social confidence', 'Joyful exploration']
    },
    {
      icon: <FaChild size={36} />,
      stage: 'Key Stage 2',
      title: 'Primary Education',
      ageRange: 'Ages 5-11',
      grades: 'Year 1-6',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      description: 'A strong academic base combined with curiosity-driven learning prepares students to think critically and communicate effectively.',
      focus: ['Strong academic base', 'Critical thinking', 'Effective communication', 'Curiosity-driven learning']
    },
    {
      icon: <FaChalkboardTeacher size={36} />,
      stage: 'Key Stage 3',
      title: 'Lower Secondary',
      ageRange: 'Ages 11-14',
      grades: 'Year 7-9',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      description: 'Students begin exploring diverse subjects, from STEM to Humanities, while developing independence, teamwork, and leadership.',
      focus: ['Diverse subject exploration', 'Independence development', 'Teamwork skills', 'Leadership growth']
    },
    {
      icon: <FaUserGraduate size={36} />,
      stage: 'Key Stage 4',
      title: 'Upper Secondary',
      ageRange: 'Ages 14-16',
      grades: 'Year 10-11',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      description: 'At this stage, students refine their academic goals, engage in research and projects, and prepare for higher education with confidence.',
      focus: ['Academic goal refinement', 'Research & projects', 'Higher education prep', 'Confidence building']
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
          <p className="uppercase tracking-wider text-blue-600 font-semibold text-sm mb-2">EDUCATION PATHWAY</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Our <span className="text-blue-600">Key Stages</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We follow a four-stage academic structure, each designed to meet students' developmental 
            and intellectual needs. Every stage is a stepping stone toward lifelong success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {keyStages.map((ks, index) => (
            <div key={index} className={`${ks.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all border-2 border-transparent hover:border-white`}>
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${ks.color} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                  {ks.icon}
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">{ks.stage}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{ks.title}</h3>
                    <div className="flex gap-4 text-sm">
                      <span className="bg-white px-3 py-1 rounded-full font-semibold text-slate-700">{ks.ageRange}</span>
                      <span className="bg-white px-3 py-1 rounded-full font-semibold text-slate-700">{ks.grades}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4 leading-relaxed">{ks.description}</p>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">Key Focus Areas:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {ks.focus.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-br ${ks.color} rounded-full`}></div>
                          <span className="text-sm text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Progressive Learning Journey</h3>
          <p className="text-slate-600 max-w-3xl mx-auto mb-6">
            Each key stage builds upon the previous one, ensuring a seamless transition and comprehensive 
            development of academic, social, and personal skills. Our experienced teachers guide students 
            through every step of their educational journey.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-slate-700 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
            Learn More About Our Curriculum
          </button>
        </div>
      </div>
    </section>
  );
}

export default KeyStages;

