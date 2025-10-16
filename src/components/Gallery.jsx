import React from 'react';

function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=900&auto=format&fit=crop',
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-wider text-pink-600 font-semibold text-sm mb-2">PHOTO GALLERY</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Life at <span className="text-pink-600">Our School</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take a glimpse into our vibrant school community and see our students in action
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <img 
                src={src} 
                alt={`School activity ${i + 1}`} 
                className="aspect-[4/3] w-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;


