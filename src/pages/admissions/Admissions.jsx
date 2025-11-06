import React from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClipboardList, FaSchool, FaFileAlt, FaUserCheck, FaCreditCard, FaGift, FaCheck, FaArrowRight } from 'react-icons/fa';

export default function Admissions() {
  const admissionSteps = [
    {
      step: '1',
      title: 'Initial Inquiry',
      description: 'Contact us via phone or WhatsApp to learn about available programs, curriculum, and fee structure.',
      icon: <FaPhone size={24} />,
      details: [
        'Call: 021-33393395 / 021-36677701',
        'WhatsApp: 0349-8849375'
      ]
    },
    {
      step: '2',
      title: 'School Visit / Tour',
      description: 'Book a visit to experience our classrooms, facilities, and interactive learning environment.',
      icon: <FaSchool size={24} />,
      details: [
        'Tour our modern facilities',
        'Meet our teaching staff',
        'Experience our learning environment'
      ]
    },
    {
      step: '3',
      title: 'Registration & Assessment',
      description: 'Fill out the admission form and schedule a short student assessment (depending on grade level).',
      icon: <FaFileAlt size={24} />,
      details: [
        'Complete admission form',
        'Age-appropriate assessment',
        'Understanding your child\'s strengths'
      ]
    },
    {
      step: '4',
      title: 'Interview & Confirmation',
      description: 'Meet our academic coordinator for a brief parent-student interaction.',
      icon: <FaUserCheck size={24} />,
      details: [
        'Parent-student interaction',
        'Academic coordinator meeting',
        'Official admission offer'
      ]
    },
    {
      step: '5',
      title: 'Fee Submission & Orientation',
      description: 'Submit your fee, complete enrollment formalities, and attend our orientation program before classes begin.',
      icon: <FaCreditCard size={24} />,
      details: [
        'Fee submission',
        'Complete enrollment formalities',
        'Orientation program attendance'
      ]
    }
  ];

  const requirements = [
    'Completed admission form',
    'Two recent passport-sized photographs',
    'Copy of student\'s birth certificate or B-Form',
    'Copies of parents\' CNIC',
    'Previous school report card (if applicable)'
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
            <FaClipboardList size={16} />
            Join Endeavour Academy
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Admissions <span className="text-blue-300">Open</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
            Pre-Primary | Primary | O' Levels
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Thank you for considering Endeavour Academy for your child's educational journey. 
            Our admissions process is designed to be simple, transparent, and supportive.
          </p>
        </div>
      </section>

      {/* Admission Process Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Step-by-Step Admission Process</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              A simple, transparent process designed to make both parents and students feel confident about joining our learning community.
            </p>
          </div>

          <div className="space-y-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-slate-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4">
                        {step.step}
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto">
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 text-lg mb-4 leading-relaxed">{step.description}</p>
                      
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#2D6C9B] rounded-full flex-shrink-0"></div>
                            <span className="text-slate-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {index < admissionSteps.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center">
                        <FaArrowRight className="text-slate-300" size={24} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Criteria Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-slate-700 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Age Criteria for Admission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Find Your Child's Perfect Stage</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Every child's educational journey begins at the right age. Discover which stage is perfect for your little one.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            {/* Early Years Foundation Stage */}
            <div className="border-b border-slate-100 last:border-b-0">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-slate-700 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    EYFS
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">Early Years Foundation Stage</h3>
                    <p className="text-slate-600 text-sm">Building the foundation for lifelong learning</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        PN
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Pre-Nursery</div>
                        <div className="text-sm text-slate-500">First steps in education</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-[#2D6C9B]">2.5 - 3.5 Years</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        N
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Nursery</div>
                        <div className="text-sm text-slate-500">Play-based learning</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-[#2D6C9B]">3.5 - 4.5 Years</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        KG
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Kindergarten</div>
                        <div className="text-sm text-slate-500">Preparing for primary</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-[#2D6C9B]">4.5 - 5.5 Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Stage 1 & 2 */}
            <div className="border-b border-slate-100 last:border-b-0">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  {/* <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-slate-700 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    KS 1&2
                  </div> */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">Key Stage 1 & 2</h3>
                    <p className="text-slate-600 text-sm">Primary education foundation years</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { year: 'Year 1', age: '5.5 - 6.5 Years' },
                    { year: 'Year 2', age: '6.5 - 7.5 Years' },
                    { year: 'Year 3', age: '7.5 - 8.5 Years' },
                    { year: 'Year 4', age: '8.5 - 9.5 Years' },
                    { year: 'Year 5', age: '9.5 - 10.5 Years' },
                    { year: 'Year 6', age: '10.5 - 11.5 Years' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="font-bold text-slate-900">{item.year}</div>
                      </div>
                      <div className="font-semibold text-[#2D6C9B]">{item.age}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Stage 3 & 4 */}
            <div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  {/* <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-slate-700 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    KS 3&4
                  </div> */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">Key Stage 3 & 4</h3>
                    <p className="text-slate-600 text-sm">Secondary education and O Level preparation</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { year: 'Year 7', age: '11.5 - 12.5 Years' },
                    { year: 'Year 8', age: '12.5 - 13.5 Years' },
                    { year: 'Year 9', age: '13.5 - 14.5 Years' },
                    { year: 'O Level 1', age: '14.5 - 15.5 Years' },
                    { year: 'O Level 2', age: '15.5 - 16.5 Years' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {index < 3 ? index + 7 : index === 3 ? 'O1' : 'O2'}
                        </div>
                        <div className="font-bold text-slate-900">{item.year}</div>
                      </div>
                      <div className="font-semibold text-[#2D6C9B]">{item.age}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Admission Requirements</h2>
            <p className="text-slate-600 text-lg">Please ensure you have the following documents ready</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid gap-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheck size={14} className="text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <FaGift size={16} />
            Limited Time Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Special Offer</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-8">
            <div className="text-6xl mb-4">🎁</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">100% Admission Fee Waiver</h3>
            <p className="text-green-100 text-lg mb-6">
              Enroll your child now and give them a head start in a future-focused learning environment.
            </p>
            <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 hover:scale-105 transition-all duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Begin?</h2>
          <p className="text-slate-600 text-lg mb-8">
            Contact us today to start your child's educational journey at Endeavour Academy
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
      </div>
    </section>
    </div>
  );
}


