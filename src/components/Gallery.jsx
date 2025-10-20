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
    <section id="gallery" className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/30 to-pink-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-purple-100/20 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="uppercase tracking-wider text-orange-600 font-semibold text-sm mb-2">PHOTO GALLERY</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Life at <span className="text-orange-600">Our School</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take a glimpse into our vibrant school community and see our students in action
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={src} 
                alt={`School activity ${i + 1}`} 
                className="aspect-[4/3] w-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white font-bold text-lg mb-1">Activity {i + 1}</h3>
                <p className="text-white/90 text-sm">Learning through fun experiences</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105 transform duration-300">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;


