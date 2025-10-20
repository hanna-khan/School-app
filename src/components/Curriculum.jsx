import React from 'react';
import { FaBook, FaFlask, FaCalculator, FaGlobe, FaPalette, FaMusic } from 'react-icons/fa';

function Curriculum() {
  const subjects = [
    { icon: <FaBook size={28} />, name: 'English', color: 'from-red-500 to-pink-500' },
    { icon: <FaCalculator size={28} />, name: 'Mathematics', color: 'from-blue-500 to-indigo-600' },
    { icon: <FaFlask size={28} />, name: 'Science', color: 'from-green-500 to-teal-500' },
    { icon: <FaGlobe size={28} />, name: 'Humanities', color: 'from-yellow-500 to-orange-500' },
    { icon: <FaPalette size={28} />, name: 'Arts & Design', color: 'from-purple-500 to-pink-500' },
    { icon: <FaMusic size={28} />, name: 'Music & Drama', color: 'from-indigo-500 to-blue-500' }
  ];

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/40 to-pink-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/40 to-blue-100/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-100/20 to-orange-100/20 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="uppercase tracking-wider text-orange-600 font-semibold text-sm mb-2">OUR CURRICULUM</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            British <span className="text-orange-600">Curriculum</span> Excellence
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We follow the prestigious British Curriculum, recognized globally for its rigorous standards 
            and focus on critical thinking, creativity, and lifelong learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Curriculum Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cambridge Assessment</h4>
                  <p className="text-gray-600 text-sm">Internationally recognized qualifications</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Holistic Development</h4>
                  <p className="text-gray-600 text-sm">Academic, social, and emotional growth</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Progressive Learning</h4>
                  <p className="text-gray-600 text-sm">Structured progression through key stages</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Skills for Life</h4>
                  <p className="text-gray-600 text-sm">Critical thinking, problem-solving, and creativity</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Assessment & Progress</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Continuous Assessment</h4>
                  <p className="text-gray-600 text-sm">Regular monitoring of student progress</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Personalized Learning</h4>
                  <p className="text-gray-600 text-sm">Tailored to each student's needs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Detailed Reports</h4>
                  <p className="text-gray-600 text-sm">Comprehensive feedback to parents</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">External Examinations</h4>
                  <p className="text-gray-600 text-sm">IGCSE and A-Level qualifications</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Curriculum;

