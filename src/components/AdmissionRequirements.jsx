import React from 'react';
import { FaClipboardList, FaFileAlt, FaUserCheck, FaCalendarCheck } from 'react-icons/fa';

function AdmissionRequirements() {
  const requirements = [
    {
      icon: <FaClipboardList size={28} />,
      title: 'Application Form',
      description: 'Complete the online or paper application form with accurate information',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <FaFileAlt size={28} />,
      title: 'Required Documents',
      description: 'Birth certificate, passport photos, previous school records, and immunization records',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: <FaUserCheck size={28} />,
      title: 'Assessment',
      description: 'Age-appropriate assessment to understand your child\'s learning level',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <FaCalendarCheck size={28} />,
      title: 'Interview',
      description: 'Meet with our admissions team to discuss your child\'s needs and our programs',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const steps = [
    { number: '1', title: 'Submit Application', description: 'Fill out and submit the application form' },
    { number: '2', title: 'Assessment', description: 'Age-appropriate assessment for your child' },
    { number: '3', title: 'Interview', description: 'Meet with our admissions team' },
    { number: '4', title: 'Decision', description: 'Receive admission decision within 5 days' }
  ];

  return (
    <section id="admissions" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="uppercase tracking-wider text-green-600 font-semibold text-sm mb-2">JOIN US</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Admission <span className="text-green-600">Requirements</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We welcome applications throughout the year. Our admissions process is designed to be 
            straightforward and supportive, ensuring the best fit for your child's educational journey.
          </p>
        </div>

        {/* Requirements Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {requirements.map((req, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-2">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${req.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                {req.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{req.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{req.description}</p>
            </div>
          ))}
        </div>

        {/* Admission Process Steps */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Admission Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-3 mx-auto">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">{step.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Application?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join our community of learners and give your child the gift of quality education. 
            Our admissions team is here to help you through every step.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdmissionRequirements;

