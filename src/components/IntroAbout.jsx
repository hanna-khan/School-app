import React from 'react';
import { FaGraduationCap, FaUsers, FaBookOpen, FaAward } from 'react-icons/fa';

function IntroAbout() {
  const features = [
    { icon: <FaGraduationCap size={32} />, title: 'Quality Education', description: 'British curriculum with experienced teachers' },
    { icon: <FaUsers size={32} />, title: 'Small Class Sizes', description: 'Individual attention for every student' },
    { icon: <FaBookOpen size={32} />, title: 'Modern Resources', description: 'State-of-the-art learning facilities' },
    { icon: <FaAward size={32} />, title: 'Excellence', description: 'Outstanding academic achievements' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="uppercase tracking-wider text-blue-600 font-semibold text-sm mb-2">ABOUT US</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">Our School</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We are a distinguished educational institution dedicated to providing world-class education 
            following the British curriculum. Our mission is to nurture young minds, foster creativity, 
            and develop well-rounded individuals prepared for global success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=900&auto=format&fit=crop" 
              alt="Students learning" 
              className="w-full h-96 object-cover rounded-3xl shadow-2xl" 
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">21+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Why Choose Us?</h3>
            <p className="text-gray-600 leading-relaxed">
              Our school stands out for its commitment to academic excellence, holistic development, 
              and nurturing environment. We combine traditional values with modern teaching methods 
              to prepare students for the challenges of tomorrow.
            </p>
            <ul className="space-y-3">
              {[
                'Accredited British Curriculum',
                'Experienced and Qualified Teachers',
                'Safe and Supportive Environment',
                'Strong Parent-School Partnership',
                'Extra-Curricular Activities',
                'Modern Facilities and Technology'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroAbout;

