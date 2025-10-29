import React from 'react';
import Gallery from '../components/Gallery';
import { FaImages } from 'react-icons/fa';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-endeavour-dark via-endeavour-blue to-endeavour-dark text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <FaImages size={16} />
            Photo Gallery
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            School <span className="text-blue-200">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Take a glimpse into our vibrant school community and see our students in action
          </p>
        </div>
      </section>
      
      <Gallery />
    </div>
  );
}


