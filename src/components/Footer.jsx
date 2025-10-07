import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gray-800 text-white relative overflow-hidden">
        {/* Scalloped top border */}
        <div className="w-full h-8 bg-white relative">
          <svg viewBox="0 0 1200 40" className="w-full h-full">
            <path d="M0,40 Q300,0 600,20 T1200,10 L1200,40 Z" fill="white" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column - Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-2xl font-bold">Toddly</span>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Pre-School Has Open Door And Also Offer Free Trial Session In Child.
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <FaPhone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Support</p>
                  <p className="font-bold">+1 344 688 955</p>
                </div>
              </div>

              <div>
                <p className="text-gray-400 mb-3">Follow Us:</p>
                <div className="flex gap-3">
                  <FaFacebook size={20} className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                  <FaLinkedin size={20} className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                  <FaYoutube size={20} className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>

            {/* Middle Column - Explore Links */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-4 relative">
                  Explore
                  <div className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500 rounded"></div>
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-orange-500">&gt;&gt;</span> Blog
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-orange-500">&gt;&gt;</span> About Us
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-orange-500">&gt;&gt;</span> Contact Us
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-orange-500">&gt;&gt;</span> Help center
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-orange-500">&gt;&gt;</span> Become A Guide
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-orange-500">&gt;&gt;</span> Join or Renew
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-orange-500">&gt;&gt;</span> Membership
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-orange-500">&gt;&gt;</span> Options
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-orange-500">&gt;&gt;</span> Families
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Instagram */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-4 relative">
                  Instagram
                  <div className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500 rounded"></div>
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1529336953121-ad3d8b4f0f8b?q=80&w=200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1496302664110-128bf4b7c9b7?q=80&w=200&auto=format&fit=crop',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="Instagram" className="w-full aspect-square object-cover rounded border-2 border-white" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer Bar */}
      <div className="bg-purple-800 relative">
        {/* Grass decoration */}
        <div className="absolute bottom-0 left-0 w-32 h-16 bg-green-500 rounded-t-full"></div>

        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 relative">
          {/* School bus emoji */}
          <div className="absolute left-8 top-2 text-2xl">🚌</div>

          <div className="text-center md:text-left">
            <p className="text-white">
              Copyright © 2025 <span className="text-orange-500 font-bold">TODDLY</span>. All Rights Reserved By <span className="text-orange-500 font-bold">VECURO</span>.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white hover:text-orange-500 transition-colors">Terms & Conditions</a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors">Privacy Policy</a>
          </div>

          {/* Progress indicator */}
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">100%</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;