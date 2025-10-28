import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaClock, FaFacebook, FaLinkedin, FaYoutube, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Memoized function to check if a route is active
  const isActive = useCallback((path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  // Handle navigation with smooth transition
  const handleNavigation = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 md:gap-6">
            <div className="flex items-center gap-2">
              <FaPhone size={12} className="text-slate-300" />
              <span className="hidden sm:inline">Phone: 021-33393395</span>
              <span className="sm:hidden">021-33393395</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock size={12} className="text-slate-300" />
              <span className="hidden md:inline">Opening Time: 8:00am-3:00pm</span>
              <span className="md:hidden">8:00am-3:00pm</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Follow Us:</span>
            <div className="flex gap-2">
              <FaFacebook size={28} className="bg-slate-600 rounded-full p-2 hover:bg-blue-600 transition-colors cursor-pointer" />
              <FaLinkedin size={28} className="bg-slate-600 rounded-full p-2 hover:bg-blue-700 transition-colors cursor-pointer" />
              <FaYoutube size={28} className="bg-slate-600 rounded-full p-2 hover:bg-red-600 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full bg-white sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img 
              src="/Logo-3.png" 
              alt="Endeavour School Logo" 
              className="w-10 h-10 md:w-16 md:h-16 object-contain"
            />
            {/* <span className="text-xl md:text-2xl font-bold text-slate-800">Endeavour</span> */}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <Link 
              to="/" 
              className={`px-6 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-md' 
                  : 'hover:text-slate-800 hover:font-bold hover:bg-slate-50'
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={`px-6 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
                isActive('/about') 
                  ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-md' 
                  : 'hover:text-slate-800 hover:font-bold hover:bg-slate-50'
              }`}
            >
              ABOUT
            </Link>
            <Link 
              to="/courses" 
              className={`px-6 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
                isActive('/courses') 
                  ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-md' 
                  : 'hover:text-slate-800 hover:font-bold hover:bg-slate-50'
              }`}
            >
              OUR PROGRAMS
            </Link>
            <Link 
              to="/gallery" 
              className={`px-6 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
                isActive('/gallery') 
                  ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-md' 
                  : 'hover:text-slate-800 hover:font-bold hover:bg-slate-50'
              }`}
            >
              GALLERY
            </Link>
            <Link 
              to="/contact" 
              className={`px-6 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
                isActive('/contact') 
                  ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-md' 
                  : 'hover:text-slate-800 hover:font-bold hover:bg-slate-50'
              }`}
            >
              CONTACT
            </Link>
          </nav>
          
          <div className="flex items-center gap-2 md:gap-3">
        
            <Link to="/admissions" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 md:px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-[transform,box-shadow] duration-200 ease-in-out text-sm md:text-base">
              <span className="">ADMISSION</span>
              {/* <span className="sm:hidden">ADMIT</span> */}
            </Link>
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <FaTimes size={20} className="text-slate-700" />
              ) : (
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden transition-[max-height,opacity] duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="bg-white border-t border-slate-200 shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              <Link 
                to="/" 
                className={`block w-full px-6 py-3 rounded-lg text-center font-semibold transition-colors duration-300 ease-in-out ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-md' 
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-800'
                }`}
                onClick={handleNavigation}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className={`block w-full px-6 py-3 rounded-lg text-center font-semibold transition-colors duration-300 ease-in-out ${
                  isActive('/about') 
                    ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-md' 
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-800'
                }`}
                onClick={handleNavigation}
              >
                ABOUT
              </Link>
              <Link 
                to="/courses" 
                className={`block w-full px-6 py-3 rounded-lg text-center font-semibold transition-colors duration-300 ease-in-out ${
                  isActive('/courses') 
                    ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-md' 
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-800'
                }`}
                onClick={handleNavigation}
              >
                OUR PROGRAMS
              </Link>
              <Link 
                to="/gallery" 
                className={`block w-full px-6 py-3 rounded-lg text-center font-semibold transition-colors duration-300 ease-in-out ${
                  isActive('/gallery') 
                    ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-md' 
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-800'
                }`}
                onClick={handleNavigation}
              >
                GALLERY
              </Link>
              <Link 
                to="/contact" 
                className={`block w-full px-6 py-3 rounded-lg text-center font-semibold transition-colors duration-300 ease-in-out ${
                  isActive('/contact') 
                    ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-md' 
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-800'
                }`}
                onClick={handleNavigation}
              >
                CONTACT
              </Link>
            </nav>
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


