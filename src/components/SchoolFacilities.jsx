import React, { useState } from 'react';

const SchoolFacilities = () => {
  const [activeTab, setActiveTab] = useState('facilities');

  const tabs = [
    { id: 'facilities', label: 'Facilities' },
    { id: 'technology', label: 'Technology' },
    { id: 'safety', label: 'Safety' }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Clean Visual Layout */}
          <div className="relative order-2 lg:order-1">
            {/* Subtle background decorative element */}
            <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-blue-100/30 to-slate-100/20 rounded-full blur-2xl"></div>
            
            {/* Floating bubbles */}
            <div className="absolute top-10 md:top-20 left-5 md:left-10 w-6 md:w-8 h-6 md:h-8 bg-blue-200/60 rounded-full animate-pulse"></div>
            <div className="absolute top-20 md:top-40 right-10 md:right-20 w-8 md:w-12 h-8 md:h-12 bg-slate-200/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-30 md:top-60 left-1/4 w-4 md:w-6 h-4 md:h-6 bg-blue-300/70 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-40 md:top-80 right-1/3 w-6 md:w-10 h-6 md:h-10 bg-slate-300/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-20 md:bottom-40 left-10 md:left-20 w-5 md:w-7 h-5 md:h-7 bg-blue-200/50 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-30 md:bottom-60 right-5 md:right-10 w-6 md:w-9 h-6 md:h-9 bg-slate-200/70 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
            <div className="absolute bottom-10 md:bottom-20 left-1/3 w-3 md:w-5 h-3 md:h-5 bg-blue-300/60 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-8 md:w-11 h-8 md:h-11 bg-slate-300/50 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
            <div className="absolute bottom-1/3 left-1/2 w-6 md:w-8 h-6 md:h-8 bg-blue-200/70 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
            
            {/* Main content container */}
            <div className="relative z-10">
              {/* Single clean image */}
              <div className="relative">
                <div className="w-full max-w-sm md:max-w-md mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=500&fit=crop" 
                    alt="Modern classroom environment"
                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
                
                {/* Clean floating badge */}
                <div className="absolute -bottom-3 md:-bottom-6 -right-3 md:-right-6 bg-gradient-to-r from-blue-600 to-slate-700 text-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold">21+</div>
                    <div className="text-xs md:text-sm font-medium opacity-90">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            <div className="text-slate-500 text-xs md:text-sm uppercase tracking-wide">
              SCHOOL FACILITIES
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              State-of-the-Art <span className="text-blue-600">School Facilities</span>
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1 md:space-x-1 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-blue-600'
                      : 'text-slate-700 border-transparent hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="text-slate-600 leading-relaxed text-sm md:text-base">
              <p className="mb-4 md:mb-6">
                Our modern facilities are designed to provide the best learning environment for our students. 
                From spacious classrooms to advanced technology labs, every space is thoughtfully created to 
                inspire learning and creativity.
              </p>
              
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-800 font-medium text-sm md:text-base">Modern Classrooms with Interactive Technology</span>
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-800 font-medium text-sm md:text-base">Science Labs & Computer Centers</span>
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-800 font-medium text-sm md:text-base">Library & Resource Centers</span>
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-800 font-medium text-sm md:text-base">Sports Facilities & Playgrounds</span>
                </div>
              </div>
            </div>

            {/* Contact button */}
            <button className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg text-sm md:text-base">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolFacilities;
