import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-pink-500" />
          <span className="text-xl font-bold text-gray-900">Toddly</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-pink-600">Home</Link>
          <div className="relative group">
            <button className="hover:text-pink-600">About Us</button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md min-w-56 p-2">
              <div className="grid grid-cols-1 gap-1">
                <Link to="/about" className="px-3 py-2 rounded hover:bg-gray-50">About Us</Link>
                <Link to="/about/who-we-are" className="px-3 py-2 rounded hover:bg-gray-50">Who we are?</Link>
                <Link to="/about/teaching-methodology" className="px-3 py-2 rounded hover:bg-gray-50">Teaching Methodology</Link>
                <Link to="/about/british-curriculum" className="px-3 py-2 rounded hover:bg-gray-50">Our British Curriculum</Link>
                <Link to="/about/external-examinations" className="px-3 py-2 rounded hover:bg-gray-50">External Examinations</Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-pink-600">Admissions</button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md min-w-56 p-2">
              <Link to="/admissions" className="block px-3 py-1 rounded hover:bg-gray-50">Admissions</Link>
              <Link to="/admissions/general-info" className="block px-3 py-2 rounded hover:bg-gray-50">General Info</Link>
              <Link to="/admissions/application-form" className="block px-3 py-2 rounded hover:bg-gray-50">Application Form</Link>
              <Link to="/admissions/rules-and-uniform" className="block px-3 py-2 rounded hover:bg-gray-50">Rules and Uniform</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-pink-600">Education</button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md min-w-56 p-2">
              <Link to="/education" className="block px-3 py-2 rounded hover:bg-gray-50">Education</Link>
              <Link to="/education/eyfs" className="block px-3 py-2 rounded hover:bg-gray-50">EYFS</Link>
              <Link to="/education/primary" className="block px-3 py-2 rounded hover:bg-gray-50">Primary</Link>
              <Link to="/education/secondary" className="block px-3 py-2 rounded hover:bg-gray-50">Secondary</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-pink-600">Extra-Curricular</button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md min-w-56 p-2">
              <Link to="/extra-curricular" className="block px-3 py-2 rounded hover:bg-gray-50">Extra-Curricular</Link>
              <Link to="/extra-curricular/field-trips" className="block px-3 py-2 rounded hover:bg-gray-50">Field/Educational Trips</Link>
            </div>
          </div>
          <Link to="/gallery" className="hover:text-pink-600">Gallery</Link>
          <Link to="/careers" className="hover:text-pink-600">Careers</Link>
          <Link to="/contact" className="hover:text-pink-600">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/admissions" className="hidden md:inline-flex px-4 py-2 rounded-md bg-pink-600 text-white hover:bg-pink-700">Admission</Link>
          <button className="md:hidden inline-flex p-2 rounded-md border text-gray-700" aria-label="Open Menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;


