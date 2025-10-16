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
      description: 'Foundation learning through play-based activities, developing communication, physical, personal, and social skills.',
      focus: ['Learning through play', 'Communication skills', 'Basic literacy & numeracy', 'Social development']
    },
    {
      icon: <FaChild size={36} />,
      stage: 'Key Stage 2',
      title: 'Primary Education',
      ageRange: 'Ages 5-11',
      grades: 'Year 1-6',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      description: 'Building strong foundations in core subjects with emphasis on reading, writing, mathematics, and science.',
      focus: ['Core subject mastery', 'Independent learning', 'Critical thinking', 'Creative expression']
    },
    {
      icon: <FaChalkboardTeacher size={36} />,
      stage: 'Key Stage 3',
      title: 'Lower Secondary',
      ageRange: 'Ages 11-14',
      grades: 'Year 7-9',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      description: 'Broader curriculum with specialized subjects, preparing students for IGCSE examinations.',
      focus: ['Subject specialization', 'Exam preparation', 'Research skills', 'Leadership development']
    },
    {
      icon: <FaUserGraduate size={36} />,
      stage: 'Key Stage 4',
      title: 'Upper Secondary',
      ageRange: 'Ages 14-16',
      grades: 'Year 10-11',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      description: 'IGCSE curriculum leading to internationally recognized qualifications and university preparation.',
      focus: ['IGCSE examinations', 'University preparation', 'Career guidance', 'Advanced learning']
    }
  ];

  return (
    <section id="keystages" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="uppercase tracking-wider text-orange-600 font-semibold text-sm mb-2">EDUCATION PATHWAY</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-orange-600">Key Stages</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive British education journey from Early Years to IGCSE, 
            carefully structured across four key stages to ensure progressive learning and development.
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
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">{ks.stage}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{ks.title}</h3>
                    <div className="flex gap-4 text-sm">
                      <span className="bg-white px-3 py-1 rounded-full font-semibold text-gray-700">{ks.ageRange}</span>
                      <span className="bg-white px-3 py-1 rounded-full font-semibold text-gray-700">{ks.grades}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{ks.description}</p>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">Key Focus Areas:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {ks.focus.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-br ${ks.color} rounded-full`}></div>
                          <span className="text-sm text-gray-700">{item}</span>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Progressive Learning Journey</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Each key stage builds upon the previous one, ensuring a seamless transition and comprehensive 
            development of academic, social, and personal skills. Our experienced teachers guide students 
            through every step of their educational journey.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">
            Learn More About Our Curriculum
          </button>
        </div>
      </div>
    </section>
  );
}

export default KeyStages;

