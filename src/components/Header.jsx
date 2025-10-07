import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaClock, FaFacebook, FaLinkedin, FaYoutube, FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhone size={12} className="text-gray-300" />
              <span>Phone: +1 333 456 888</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock size={12} className="text-gray-300" />
              <span>Opening Time: 9:30am-5:30pm</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>Follow Us:</span>
            <div className="flex gap-2">
              <FaFacebook size={14} className="bg-purple-700 rounded-full p-1" />
              <FaLinkedin size={14} className="bg-purple-700 rounded-full p-1" />
              <FaYoutube size={14} className="bg-purple-700 rounded-full p-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full bg-white sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold text-purple-800">Toddly</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
            <Link to="/" className="bg-purple-600 text-white px-4 py-2 rounded-full">HOME</Link>
            <Link to="/about" className="hover:text-purple-600">ABOUT</Link>
            <Link to="/pages" className="hover:text-purple-600">PAGES</Link>
            <Link to="/shop" className="hover:text-purple-600">SHOP</Link>
            <Link to="/blog" className="hover:text-purple-600">BLOG</Link>
            <Link to="/contact" className="hover:text-purple-600">CONTACT</Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center">
              <FaSearch size={16} className="text-gray-600" />
            </button>
            <Link to="/admissions" className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold border-2 border-dashed border-orange-600">
              ADMISSION
            </Link>
            <button className="lg:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Scalloped border */}
        <div className="w-full h-4 bg-white relative">
          <svg viewBox="0 0 1200 40" className="w-full h-full">
            <path d="M0,40 Q300,0 600,20 T1200,10 L1200,40 Z" fill="white" />
          </svg>
        </div>
      </header>
    </>
  );
}

export default Header;


