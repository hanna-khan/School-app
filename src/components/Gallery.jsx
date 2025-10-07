import React from 'react';

function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="uppercase tracking-wider text-pink-600 font-semibold">School Gallery</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Our Gallery For Kids</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=900&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=900&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=900&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1529336953121-ad3d8b4f0f8b?q=80&w=900&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=900&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1496302664110-128bf4b7c9b7?q=80&w=900&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=900&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=900&auto=format&fit=crop',
          ].map((src, i) => (
            <img key={i} src={src} alt="School gallery" className="aspect-[4/3] w-full object-cover rounded-2xl" />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-6 py-3 rounded-md border border-gray-300 text-gray-800 font-semibold hover:border-gray-400">View More</button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;


