import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-pink-500" />
            <span className="text-xl font-bold">Toddly</span>
          </div>
          <p className="mt-4 text-gray-400">
            Pre-school has open door and also offer free trial session in child.
          </p>
          <p className="mt-4 text-sm">call support <span className="text-white font-semibold">+1 344 688 955</span></p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="#help" className="hover:text-white">Help center</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li className="flex items-center gap-2"><FaPhone size={16} /> +9 555 224 7849</li>
            <li className="flex items-center gap-2"><FaEnvelope size={16} /> info@toddly.com</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt size={16} /> Munich Expresswa 70 Germany, TX 7859</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Instagram</h4>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1529336953121-ad3d8b4f0f8b?q=80&w=400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1496302664110-128bf4b7c9b7?q=80&w=400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=400&auto=format&fit=crop',
            ].map((src, i) => (
              <img key={i} src={src} alt="Instagram" className="aspect-square w-full object-cover rounded" />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>Copyright © Toddly. All rights reserved By Vecuro.</p>
          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-white">Terms & Conditions</a>
            <span className="opacity-30">|</span>
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


