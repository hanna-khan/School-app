import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

function About() {
  const [activeTab, setActiveTab] = useState('history');
  
  const tabs = [
    { id: 'history', label: 'Our History' },
    { id: 'school', label: 'School' },
    { id: 'kids', label: 'Kids' }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/20 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative">
        {/* Left side - Visual elements */}
        <div className="relative">
          {/* Large circular background */}
          <div className="w-96 h-96 bg-orange-100 rounded-full absolute -left-20 -bottom-20"></div>
          
          {/* Images */}
          <div className="relative grid grid-cols-2 gap-6 z-10">
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1519455953755-af066f52f1ea?q=80&w=400&auto=format&fit=crop" 
                alt="Kids painting" 
                className="w-full aspect-[4/5] object-cover rounded-3xl shadow-lg" 
              />
              <div className="bg-purple-600 text-white p-4 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">21+</div>
                <div className="text-sm">Years Of Experience</div>
              </div>
            </div>
            <div className="space-y-6 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=400&auto=format&fit=crop" 
                alt="Classroom" 
                className="w-full aspect-[4/5] object-cover rounded-3xl shadow-lg" 
              />
            </div>
          </div>
          
          {/* Decorative airplane */}
          <div className="absolute -top-10 -left-10 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          <div>
            <p className="uppercase tracking-wider text-purple-600 font-semibold text-sm mb-2">SCHOOL FACILITIES</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Learning <span className="text-orange-500">Opportunity</span> For Kids
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-500'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Pre-school has open door and also offer free trial sessions. Creative learning opportunity for kids. 
            Our goal is to carefully educate and nurture young minds.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <FaCheck size={12} className="text-white" />
              </div>
              <span className="text-gray-800 font-medium">Learning Opportunity For Kids</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <FaCheck size={12} className="text-white" />
              </div>
              <span className="text-gray-800 font-medium">Your Child Will Take</span>
            </li>
          </ul>

          <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-dashed border-orange-600 hover:bg-orange-600 transition-colors">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;