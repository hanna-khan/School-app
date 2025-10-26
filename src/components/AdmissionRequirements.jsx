import React from 'react';
import { FaClipboardList, FaFileAlt, FaUserCheck, FaCalendarCheck } from 'react-icons/fa';

function AdmissionRequirements() {
  const steps = [
    { number: '1', title: 'Submit Application', description: 'Fill out and submit the application form' },
    { number: '2', title: 'Assessment', description: 'Age-appropriate assessment for your child' },
    { number: '3', title: 'Interview', description: 'Meet with our admissions team' },
    { number: '4', title: 'Decision', description: 'Receive admission decision within 5 days' }
  ];

  return (
    <section id="admissions" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-100/20 rounded-full blur-2xl"></div>
      
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
          <p className="uppercase tracking-wider text-blue-600 font-semibold text-sm mb-2">ENDEAVOUR ACADEMY</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Admission <span className="text-blue-600">Requirements</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed mb-4">
            "Endeavouring to Learn" - Cambridge Assessment International Education
          </p>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We welcome applications throughout the year. Our admissions process is designed to be 
            straightforward and supportive, ensuring the best fit for your child's educational journey.
          </p>
        </div>

        {/* Age Criteria Table */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-16 shadow-xl border border-slate-100 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/30 to-slate-100/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-slate-100/30 to-blue-100/20 rounded-full blur-lg"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-slate-700 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Age Criteria for Admission
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Find Your Child's Perfect Stage</h3>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Every child's educational journey begins at the right age. Discover which stage is perfect for your little one.</p>
            </div>
            
            <div className="space-y-8">
              {/* Early Years Foundation Stage */}
              <div className="bg-gradient-to-r from-blue-50 via-white to-slate-50 rounded-3xl p-8 border border-blue-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full blur-lg group-hover:scale-110 transition-transform"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-slate-200/20 rounded-full blur-md group-hover:scale-110 transition-transform"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900">Early Years Foundation Stage</h4>
                      <p className="text-slate-600">Building the foundation for lifelong learning</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 group">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-lg">PN</span>
                      </div>
                      <div className="text-xl font-bold text-blue-600 mb-2">PRE-NURSERY</div>
                      <div className="text-slate-700 font-semibold mb-2">2.5 - 3.5 Years</div>
                      <div className="text-xs text-slate-500">First steps in education</div>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 group">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-lg">N</span>
                      </div>
                      <div className="text-xl font-bold text-blue-600 mb-2">NURSERY</div>
                      <div className="text-slate-700 font-semibold mb-2">3.5 - 4.5 Years</div>
                      <div className="text-xs text-slate-500">Play-based learning</div>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 group">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-lg">KG</span>
                      </div>
                      <div className="text-xl font-bold text-blue-600 mb-2">KINDERGARTEN</div>
                      <div className="text-slate-700 font-semibold mb-2">4.5 - 5.5 Years</div>
                      <div className="text-xs text-slate-500">Preparing for primary</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Stage 1 & 2 */}
              <div className="bg-gradient-to-r from-slate-50 via-white to-blue-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-slate-200/20 rounded-full blur-lg group-hover:scale-110 transition-transform"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-200/20 rounded-full blur-md group-hover:scale-110 transition-transform"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900">Key Stage 1 & 2</h4>
                      <p className="text-slate-600">Primary education foundation years</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                      { year: 'Year 1', age: '5.5 - 6.5 Years', color: 'from-slate-500 to-slate-600', icon: '1' },
                      { year: 'Year 2', age: '6.5 - 7.5 Years', color: 'from-slate-600 to-slate-700', icon: '2' },
                      { year: 'Year 3', age: '7.5 - 8.5 Years', color: 'from-blue-500 to-blue-600', icon: '3' },
                      { year: 'Year 4', age: '8.5 - 9.5 Years', color: 'from-blue-600 to-blue-700', icon: '4' },
                      { year: 'Year 5', age: '9.5 - 10.5 Years', color: 'from-blue-700 to-slate-700', icon: '5' },
                      { year: 'Year 6', age: '10.5 - 11.5 Years', color: 'from-slate-600 to-slate-800', icon: '6' }
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100 group">
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                          <span className="text-white font-bold text-sm">{item.icon}</span>
                        </div>
                        <div className="text-lg font-bold text-slate-700 mb-1">{item.year}</div>
                        <div className="text-slate-600 text-sm font-medium">{item.age}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Stage 3 & 4 */}
              <div className="bg-gradient-to-r from-blue-50 via-white to-slate-50 rounded-3xl p-8 border border-blue-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full blur-lg group-hover:scale-110 transition-transform"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-slate-200/20 rounded-full blur-md group-hover:scale-110 transition-transform"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900">Key Stage 3 & 4</h4>
                      <p className="text-slate-600">Secondary education and O Level preparation</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                      { year: 'Year 7', age: '11.5 - 12.5 Years', color: 'from-blue-500 to-blue-600', icon: '7' },
                      { year: 'Year 8', age: '12.5 - 13.5 Years', color: 'from-blue-600 to-blue-700', icon: '8' },
                      { year: 'Year 9', age: '13.5 - 14.5 Years', color: 'from-blue-700 to-slate-700', icon: '9' },
                      { year: 'O Level 1', age: '14.5 - 15.5 Years', color: 'from-slate-600 to-slate-700', icon: 'O1' },
                      { year: 'O Level 2', age: '15.5 - 16.5 Years', color: 'from-slate-700 to-slate-800', icon: 'O2' }
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100 group">
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                          <span className="text-white font-bold text-xs">{item.icon}</span>
                        </div>
                        <div className="text-lg font-bold text-slate-700 mb-1">{item.year}</div>
                        <div className="text-slate-600 text-sm font-medium">{item.age}</div>
            </div>
          ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Admission Process Steps */}
        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Admission Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-700 text-white rounded-full flex items-center justify-center font-bold text-xl mb-3 mx-auto">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-sm">{step.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-slate-500 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-slate-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Application?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join our community of learners and give your child the gift of quality education. 
            Our admissions team is here to help you through every step.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors shadow-lg">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdmissionRequirements;

