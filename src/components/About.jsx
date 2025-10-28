import React from 'react';
import { FaCheck, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaGraduationCap, FaHeart, FaLightbulb, FaGlobe, FaStar } from 'react-icons/fa';

function About() {
  const coreValues = [
    { icon: <FaGraduationCap size={24} />, title: 'Integrity', description: 'Building strong moral and ethical foundations', emoji: '🌱' },
    { icon: <FaStar size={24} />, title: 'Excellence', description: 'Striving for the highest standards in academics and conduct', emoji: '🎯' },
    { icon: <FaLightbulb size={24} />, title: 'Innovation', description: 'Encouraging curiosity, creativity, and problem-solving', emoji: '💡' },
    { icon: <FaHeart size={24} />, title: 'Empathy', description: 'Developing kindness, respect, and teamwork among students', emoji: '❤️' },
    { icon: <FaGlobe size={24} />, title: 'Global Perspective', description: 'Preparing learners for success in a changing world', emoji: '🌍' }
  ];

  const whyChooseUs = [
    'Highly Qualified & Passionate Teachers',
    'Cambridge (British) Curriculum',
    'STEM & Robotics Programs',
    'Arts, Taekwondo, and Sports Activities',
    'Modern Classrooms & Safe Learning Environment',
    'Focus on Confidence, Communication & Critical Thinking'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100/20 rounded-full blur-2xl"></div>
      
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
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-slate-700 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <FaGraduationCap size={16} />
            About Endeavour Academy
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Welcome to <span className="text-blue-600">Endeavour Academy</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-4">
            Where Learning Inspires Growth
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Introduction */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  At Endeavour Academy, we believe education is more than memorizing facts — it's about 
                  nurturing minds, character, and creativity.
                </p>
                <p>
                  Located in the heart of North Nazimabad, Karachi, Endeavour Academy offers a dynamic 
                  learning environment that blends the British (Cambridge) curriculum with modern, 
                  activity-based education.
                </p>
                <p>
                  Our classrooms are spaces where curiosity thrives, teachers inspire, and students feel confident 
                  to question, explore, and achieve. We focus on conceptual learning, innovation, and holistic 
                  growth, ensuring that every child reaches their true potential — academically, socially, and 
                  emotionally.
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FaStar className="text-blue-600" />
                  Our Vision
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To create a generation of independent thinkers, confident communicators, and 
                  compassionate leaders who make a positive difference in the world.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FaGraduationCap className="text-blue-600" />
                  Our Mission
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To provide a stimulating and inclusive learning environment through the Cambridge 
                  International Curriculum, fostering a love for learning and building life-long skills in every child.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=900&auto=format&fit=crop" 
                alt="Endeavour Academy students learning" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white" 
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-slate-700 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">21+</div>
                  <div className="text-sm font-medium opacity-90">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group">
                <div className="text-4xl mb-3">{value.emoji}</div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-600 to-slate-700 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Parents Choose Endeavour Academy</h2>
            <p className="text-blue-100 text-lg">Discover what makes us the preferred choice for quality education</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheck size={12} className="text-blue-600" />
                </div>
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-slate-600 text-lg">Visit us or contact us for more information</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Address</h3>
              <p className="text-slate-600">C-2, Block D, North Nazimabad, Karachi</p>
            </div>
            
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
          </div>
          
          
        </div>
      </div>
    </section>
  );
}

export default About;