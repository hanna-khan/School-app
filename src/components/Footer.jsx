import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gradient-to-br from-endeavour-dark via-endeavour-blue to-endeavour-dark text-white relative overflow-hidden">
        {/* Enhanced scalloped top border */}
        <div className="w-full h-12 bg-white relative">
          <svg viewBox="0 0 1200 60" className="w-full h-full">
            <path d="M0,60 Q300,20 600,40 T1200,30 L1200,60 Z" fill="white" />
          </svg>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-endeavour-blue/10 to-endeavour-dark/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-endeavour-blue/10 to-endeavour-dark/10 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Left Column - Brand */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-6 md:space-y-8">
              <div className="flex items-center gap-3 md:gap-4">
                <img 
                  src="/Logo-3.png" 
                  alt="Endeavour School Logo" 
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-white">Endeavour</span>
              </div>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Empowering young minds through innovative education and nurturing creativity in every child's learning journey.
              </p>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-endeavour-blue to-endeavour-dark rounded-xl flex items-center justify-center shadow-lg">
                    <FaPhone size={16} className="md:w-[18px] md:h-[18px] text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Call Support</p>
                    <p className="font-bold text-base md:text-lg">021-33393395</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-endeavour-blue to-endeavour-dark rounded-xl flex items-center justify-center shadow-lg">
                    <FaEnvelope size={16} className="md:w-[18px] md:h-[18px] text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Email Us</p>
                    <p className="font-bold text-base md:text-lg">info@endeavour.edu</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-endeavour-blue to-endeavour-dark rounded-xl flex items-center justify-center shadow-lg">
                    <FaMapMarkerAlt size={16} className="md:w-[18px] md:h-[18px] text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">Visit Us</p>
                    <p className="font-bold text-base md:text-lg">C-2, Block D, North Nazimabad</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-400 mb-3 md:mb-4 text-base md:text-lg font-semibold">Follow Us:</p>
                <div className="flex gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-endeavour-blue to-endeavour-dark rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <FaFacebook size={14} className="md:w-[18px] md:h-[18px] text-white" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <FaInstagram size={14} className="md:w-[18px] md:h-[18px] text-white" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-endeavour-blue to-endeavour-dark rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <FaTwitter size={14} className="md:w-[18px] md:h-[18px] text-white" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <FaYoutube size={14} className="md:w-[18px] md:h-[18px] text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column - Quick Links */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 relative">
                  Quick Links
                  <div className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-gradient-to-r from-endeavour-blue to-white/50 rounded-full"></div>
                </h4>
                <div className="space-y-2 md:space-y-3">
                  {[
                    { name: 'About Us', href: '/about' },
                    { name: 'Our Programs', href: '/courses' },
                    { name: 'Admissions', href: '/admissions' },
                    { name: 'Gallery', href: '/gallery' },
                    { name: 'Contact Us', href: '/contact' }
                  ].map((link, index) => (
                    <Link 
                      key={index}
                      to={link.href} 
                      className="text-gray-300 hover:text-blue-200 transition-all duration-300 flex items-center gap-2 md:gap-3 group"
                    >
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-endeavour-blue to-white/70 rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-sm md:text-lg group-hover:translate-x-2 transition-transform">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Third Column - Programs */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 relative">
                  Our Programs
                  <div className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-gradient-to-r from-endeavour-blue to-white/50 rounded-full"></div>
                </h4>
                <div className="space-y-2 md:space-y-3">
                  {[
                    { name: 'Early Years (EYFS)', href: '/courses' },
                    { name: 'Primary Education', href: '/courses' },
                    { name: 'Secondary Education', href: '/courses' },
                    { name: 'O Levels', href: '/courses' },
                    { name: 'STEM & Robotics', href: '/courses' },
                    { name: 'Extra Curricular', href: '/courses' }
                  ].map((link, index) => (
                    <Link 
                      key={index}
                      to={link.href} 
                      className="text-gray-300 hover:text-blue-200 transition-all duration-300 flex items-center gap-2 md:gap-3 group"
                    >
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-endeavour-blue to-white/70 rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-sm md:text-lg group-hover:translate-x-2 transition-transform">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Fourth Column - Newsletter & Instagram */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-6 md:space-y-8">
              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 relative">
                  Newsletter
                  <div className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-gradient-to-r from-endeavour-blue to-white/50 rounded-full"></div>
                </h4>
                <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-lg">
                  Subscribe to get updates about our programs and events.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm md:text-base"
                  />
                  <button className="w-full bg-gradient-to-r from-endeavour-blue to-endeavour-dark text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm md:text-base">
                    Subscribe Now
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 relative">
                  Gallery
                  <div className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-gradient-to-r from-endeavour-blue to-white/50 rounded-full"></div>
                </h4>
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {[
                    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=200&auto=format&fit=crop',
                  ].map((src, i) => (
                    <div key={i} className="group cursor-pointer">
                      <img 
                        src={src} 
                        alt="Gallery" 
                        className="w-full aspect-square object-cover rounded-lg md:rounded-xl border-2 border-gray-600 group-hover:border-orange-500 group-hover:scale-105 transition-all duration-300" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer Bar */}
      <div className="bg-gradient-to-r from-endeavour-dark to-endeavour-blue relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-endeavour-blue/10 to-endeavour-dark/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-endeavour-blue/10 to-endeavour-dark/10 rounded-full blur-xl"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-300 text-sm md:text-lg">
                Copyright © 2025 <span className="text-blue-200 font-bold">ENDEAVOUR</span>. All Rights Reserved By <span className="text-blue-200 font-bold">VECURO</span>.
              </p>
              <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">
                Empowering the next generation through quality education
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <a href="/terms" className="text-gray-300 hover:text-blue-200 transition-colors duration-300 text-sm md:text-lg font-medium">
                Terms & Conditions
              </a>
              <a href="/privacy" className="text-gray-300 hover:text-blue-200 transition-colors duration-300 text-sm md:text-lg font-medium">
                Privacy Policy
              </a>
              <a href="/cookies" className="text-gray-300 hover:text-blue-200 transition-colors duration-300 text-sm md:text-lg font-medium">
                Cookie Policy
              </a>
            </div>

            {/* Back to Top Button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-endeavour-blue to-endeavour-dark text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;