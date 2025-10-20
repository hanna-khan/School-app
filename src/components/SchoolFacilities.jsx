import React, { useState } from 'react';

const SchoolFacilities = () => {
  const [activeTab, setActiveTab] = useState('history');

  const tabs = [
    { id: 'history', label: 'Our History' },
    { id: 'school', label: 'School' },
    { id: 'kids', label: 'Kids' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Modern Visual Layout */}
          <div className="relative pl-20 pr-4">
            {/* Background decorative elements */}
            <div className="absolute left-4 -top-16 w-80 h-80 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full opacity-70"></div>
            <div className="absolute right-4 -bottom-8 w-60 h-60 bg-gradient-to-tl from-purple-100 to-blue-100 rounded-full opacity-50"></div>
            
            {/* Main content container */}
            <div className="relative z-10">
              {/* Top section - Art table image with floating badge */}
              <div className="relative mb-8 ml-4">
                <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop&crop=face" 
                    alt="Child at art table"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating experience badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold">21+</div>
                    <div className="text-xs font-medium opacity-90">Years Of Experience</div>
                  </div>
                </div>
                
                {/* Decorative star elements */}
                <div className="absolute top-8 left-0 w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute bottom-16 -right-2 w-4 h-4 bg-pink-400 rounded-full opacity-80"></div>
              </div>

              {/* Bottom section - Paint hands image with creative elements */}
              <div className="relative ml-16 mr-8">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=400&fit=crop&crop=face" 
                    alt="Child with colorful hands"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Creative decorative elements */}
                <div className="absolute -left-12 bottom-12">
                  {/* Airplane with trail */}
                  <div className="relative">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                        <div className="w-5 h-3 bg-yellow-400 rounded-sm"></div>
                      </div>
                      <div className="w-2 h-6 bg-red-500 rounded-full"></div>
                    </div>
                    
                    {/* Curved trail line */}
                    <svg className="absolute top-1 left-8 w-24 h-12" viewBox="0 0 100 50">
                      <path d="M0,25 Q25,10 50,25 T100,25" stroke="#6B7280" strokeWidth="2" strokeDasharray="5,5" fill="none"/>
                    </svg>
                    
                    {/* Colorful balloons */}
                    <div className="absolute top-0 right-0 flex space-x-2">
                      <div className="w-4 h-10 bg-gradient-to-t from-blue-400 to-blue-600 rounded-full shadow-md"></div>
                      <div className="w-4 h-10 bg-gradient-to-t from-green-400 to-green-600 rounded-full shadow-md"></div>
                      <div className="w-4 h-10 bg-gradient-to-t from-pink-400 to-pink-600 rounded-full shadow-md"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating paint splashes */}
                <div className="absolute top-8 -right-8 w-8 h-8 bg-yellow-300 rounded-full opacity-70 transform rotate-45"></div>
                <div className="absolute bottom-20 -left-6 w-6 h-6 bg-blue-300 rounded-full opacity-70"></div>
                <div className="absolute top-1/2 -right-12 w-5 h-5 bg-pink-300 rounded-full opacity-70 transform rotate-12"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="text-gray-500 text-sm uppercase tracking-wide">
              SCHOOL FACILITIES
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Learning <span className="text-orange-500">Opportunity For</span> Kids
            </h2>

            {/* Tabs */}
            <div className="flex space-x-1 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'text-orange-500 border-orange-500 border-dashed'
                      : 'text-gray-700 border-transparent hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="text-gray-600 leading-relaxed">
              <p className="mb-6">
                Pre-school has open door and also offer free trial sessions that child Creative Learning Opportunity For Kids Hised sedaugue felis Phasellus gravida lacus quis eros.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Learning Opportunity For Kids</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Your Child Will Take</span>
                </div>
              </div>
            </div>

            {/* Contact button */}
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium border-2 border-dashed border-orange-500 hover:bg-orange-600 transition-colors">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolFacilities;
