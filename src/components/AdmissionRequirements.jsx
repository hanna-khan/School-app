import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

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
          <p className="uppercase tracking-wider text-[#2D6C9B] font-semibold text-sm mb-2">ENDEAVOUR ACADEMY</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Admission <span className="text-[#2D6C9B]">Requirements</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed mb-4">
            "Endeavouring to Learn" - Cambridge Assessment International Education
          </p>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We welcome applications throughout the year. Our admissions process is designed to be 
            straightforward and supportive, ensuring the best fit for your child's educational journey.
          </p>
        </div>

        {/* Age Criteria Section - Simplified */}
        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 md:p-12 mb-16 shadow-xl text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-endeavour-dark to-endeavour-blue text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Age Criteria for Admission
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Find Your Child's Perfect Stage</h3>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
            Every child's educational journey begins at the right age. We offer programs from Early Years (2.5 years) 
            through O Levels (16.5 years). Discover which stage is perfect for your little one and learn about our 
            comprehensive age criteria and admission requirements.
          </p>
          <Link 
            to="/admissions" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-endeavour-dark to-endeavour-blue text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105"
          >
            Learn More
            <FaArrowRight />
          </Link>
        </div>

        {/* Admission Process Steps */}
        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Admission Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-endeavour-dark to-endeavour-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-3 mx-auto">
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
        <div className="bg-gradient-to-r from-endeavour-dark to-endeavour-blue rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Application?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join our community of learners and give your child the gift of quality education. 
            Our admissions team is here to help you through every step.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-endeavour-dark px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
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

