import React from 'react';
import { FaGraduationCap, FaBook, FaFlask, FaCalculator, FaGlobe, FaPalette, FaMusic, FaRobot, FaGamepad, FaMicrophone, FaTheaterMasks, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

function Courses() {
  const keyStages = [
    {
      stage: 'Key Stage 1',
      title: 'Early Years',
      subtitle: 'Pre-Nursery, Nursery, Kindergarten',
      description: 'The foundation for a lifetime of learning.',
      focus: 'We focus on building curiosity, creativity, and confidence through play-based and activity-centered learning.',
      emoji: '🧩',
      icon: <FaBook size={32} />,
      focusAreas: [
        'Literacy & Numeracy',
        'Creative Arts & Storytelling',
        'Motor Skills Development',
        'Communication & Confidence Building'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      stage: 'Key Stage 2',
      title: 'Primary',
      subtitle: 'Grades 1–5',
      description: 'Building conceptual understanding and academic strength.',
      focus: 'Students begin to explore STEM concepts, teamwork, and leadership, developing both intellect and character.',
      emoji: '📘',
      icon: <FaCalculator size={32} />,
      focusAreas: [
        'English, Math & Science',
        'Robotics & Technology Integration',
        'Creative Writing, Art & Craft',
        'Physical Education, Music & Taekwondo'
      ],
      color: 'from-slate-600 to-slate-700'
    },
    {
      stage: 'Key Stage 3',
      title: 'Middle School',
      subtitle: 'Grades 6–8',
      description: 'Preparing for the next stage with strong analytical and communication skills.',
      focus: 'Students deepen their subject knowledge and apply learning through projects, experiments, and real-world challenges.',
      emoji: '🧠',
      icon: <FaFlask size={32} />,
      focusAreas: [
        'Science Experiments & Conceptual Learning',
        'Research & Presentation Skills',
        'Debate, Leadership, and Team Collaboration',
        'Pre-O\' Level Subject Foundation'
      ],
      color: 'from-blue-600 to-blue-700'
    },
    {
      stage: 'Key Stage 4',
      title: 'O\' Levels',
      subtitle: 'Grades 9–11',
      description: 'A Cambridge-based academic program that empowers learners to achieve excellence in both academics and life.',
      focus: 'Our O\' Level faculty emphasizes critical thinking, exam preparation, and personal growth.',
      emoji: '🎓',
      icon: <FaGraduationCap size={32} />,
      focusAreas: [
        'English Language & Literature',
        'Mathematics, Add Math, Physics, Chemistry, Biology',
        'Business Studies, Economics, Accounting',
        'Islamiyat, Urdu, Pakistan Studies',
        'ICT, Global Perspectives'
      ],
      color: 'from-slate-700 to-slate-800'
    }
  ];

  const extracurricularActivities = [
    { icon: <FaPalette size={24} />, name: 'Art & Craft', emoji: '🎨' },
    { icon: <FaRobot size={24} />, name: 'Robotics', emoji: '🤖' },
    { icon: <FaGamepad size={24} />, name: 'Taekwondo', emoji: '🥋' },
    { icon: <FaGlobe size={24} />, name: 'Sports', emoji: '🏈' },
    { icon: <FaMicrophone size={24} />, name: 'Public Speaking', emoji: '💬' },
    { icon: <FaTheaterMasks size={24} />, name: 'Performing Arts', emoji: '🎭' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-800 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <FaGraduationCap size={16} />
            Academic Excellence
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Our Academic <span className="text-blue-300">Pathway</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            At Endeavour Academy, we provide a comprehensive educational journey from Early Years to O' Levels, 
            aligned with the Cambridge International Curriculum.
          </p>
          <p className="text-lg text-blue-200 mt-4 max-w-3xl mx-auto">
            Each key stage is carefully designed to match your child's developmental needs and academic goals.
          </p>
        </div>
      </section>

      {/* Key Stages Section */}
      <section className="py-20 relative">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Key Stages</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              A progressive learning journey designed to nurture every child's potential
            </p>
          </div>

          <div className="space-y-12">
            {keyStages.map((stage, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow">
                <div className={`bg-gradient-to-r ${stage.color} p-8 text-white`}>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="text-6xl">{stage.emoji}</div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold opacity-90 mb-2">{stage.stage}</div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{stage.title}</h3>
                      <p className="text-lg opacity-90 mb-2">{stage.subtitle}</p>
                      <p className="text-blue-100">{stage.description}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      {stage.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">{stage.focus}</p>
                  
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">{stage.emoji}</span>
                      Focus Areas:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {stage.focusAreas.map((area, areaIndex) => (
                        <div key={areaIndex} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                          <div className={`w-6 h-6 bg-gradient-to-r ${stage.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-slate-700 font-medium">{area}</span>
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

      {/* Beyond the Classroom Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond the Classroom</h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              We believe education extends beyond textbooks. Our extracurricular programs include:
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurricularActivities.map((activity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-3">{activity.emoji}</div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{activity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-slate-600 text-lg mb-8">
            Contact us for course details or admissions information
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaPhone size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600">021-33393395</p>
              <p className="text-slate-600">021-36677701</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaWhatsapp size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
              <p className="text-slate-600">0349-8849375</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Visit</h3>
              <p className="text-slate-600">C-2, Block D, North Nazimabad, Karachi</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Schedule a Visit
            </button>
            <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
