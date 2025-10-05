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
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl bg-gray-200" />
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


