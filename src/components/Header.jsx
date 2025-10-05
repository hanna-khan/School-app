import React from 'react';

function Header() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-pink-500" />
          <span className="text-xl font-bold text-gray-900">Toddly</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-pink-600">Home</a>
          <a href="#about" className="hover:text-pink-600">About</a>
          <a href="#features" className="hover:text-pink-600">Pages</a>
          <a href="#shop" className="hover:text-pink-600">Shop</a>
          <a href="#blog" className="hover:text-pink-600">Blog</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex px-4 py-2 rounded-md bg-pink-600 text-white hover:bg-pink-700">Admission</button>
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


