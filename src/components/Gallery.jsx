import React from 'react';

function Gallery() {
  const images = [
    // PNG files
    './images/1.png',
    './images/2.png',
    './images/3.png',
    './images/4.png',
    // DSC files
    './images/DSC_2742.jpg',
    './images/DSC_2745.jpg',
    './images/DSC_2753.jpg',
    './images/DSC_2766.jpg',
    './images/DSC_2776.jpg',
    './images/DSC_2784.jpg',
    './images/DSC_2818.jpg',
    './images/DSC_2821.jpg',
    './images/DSC_2832.jpg',
    './images/DSC_2846.jpg',
    './images/DSC_2847.jpg',
    // IMG_4480 series
    './images/IMG_4480.jpg',
    './images/IMG_4481.jpg',
    './images/IMG_4482.jpg',
    './images/IMG_4483.jpg',
    './images/IMG_4484.jpg',
    './images/IMG_4485.jpg',
    './images/IMG_4486.jpg',
    './images/IMG_4487.jpg',
    './images/IMG_4488.jpg',
    './images/IMG_4489.jpg',
    './images/IMG_4490.jpg',
    './images/IMG_4491.jpg',
    './images/IMG_4492.jpg',
    './images/IMG_4493.jpg',
    './images/IMG_4494.jpg',
    './images/IMG_4495.jpg',
    './images/IMG_4496.jpg',
    './images/IMG_4497.jpg',
    './images/IMG_4498.jpg',
    './images/IMG_4499.jpg',
    './images/IMG_4500.jpg',
    './images/IMG_4501.jpg',
    './images/IMG_4502.jpg',
    './images/IMG_4503.jpg',
    './images/IMG_4504.jpg',
    './images/IMG_4505.jpg',
    './images/IMG_4506.jpg',
    './images/IMG_4507.jpg',
    './images/IMG_4508.jpg',
    // IMG_4517 series
    './images/IMG_4517.jpg',
    './images/IMG_4518.jpg',
    './images/IMG_4519.jpg',
    './images/IMG_4520.jpg',
    './images/IMG_4521.jpg',
    './images/IMG_4522.jpg',
    './images/IMG_4523.jpg',
    './images/IMG_4524.jpg',
    './images/IMG_4525.jpg',
    './images/IMG_4526.jpg',
    './images/IMG_4527.jpg',
    './images/IMG_4528.jpg',
    './images/IMG_4529.jpg',
    './images/IMG_4530.jpg',
    './images/IMG_4531.jpg',
    './images/IMG_4532.jpg',
    './images/IMG_4533.jpg',
    './images/IMG_4534.jpg',
    './images/IMG_4535.jpg',
    './images/IMG_4536.jpg',
    './images/IMG_4537.jpg',
    './images/IMG_4538.jpg',
    './images/IMG_4539.jpg',
    './images/IMG_4540.jpg',
    './images/IMG_4541.jpg',
    './images/IMG_4542.jpg',
    './images/IMG_4543.jpg',
    './images/IMG_4544.jpg',
    './images/IMG_4545.jpg',
    './images/IMG_4546.jpg',
    './images/IMG_4547.jpg',
    './images/IMG_4548.jpg',
    './images/IMG_4549.jpg',
    './images/IMG_4550.jpg',
    './images/IMG_4551.jpg',
    './images/IMG_4552.jpg',
    './images/IMG_4553.jpg',
    './images/IMG_4554.jpg',
    './images/IMG_4555.jpg',
    './images/IMG_4556.jpg',
    './images/IMG_4557.jpg',
    './images/IMG_4558.jpg',
    './images/IMG_4559.jpg',
    './images/IMG_4560.jpg',
    // IMG_4569 series
    './images/IMG_4569.jpg',
    './images/IMG_4570.jpg',
    './images/IMG_4571.jpg',
    // PG folder images
    './images/PG/IMG_4200.JPG',
    './images/PG/IMG_4201.JPG',
    './images/PG/IMG_4202.JPG',
    './images/PG/IMG_4203.JPG',
    './images/PG/IMG_4204.JPG',
    './images/PG/IMG_4205.JPG',
    './images/PG/IMG_4206.JPG',
    './images/PG/IMG_4207.JPG',
    './images/PG/IMG_4208.JPG',
    './images/PG/IMG_4209.JPG',
    './images/PG/IMG_4210.JPG',
    './images/PG/IMG_4211.JPG',
    './images/PG/IMG_4212.JPG',
    './images/PG/IMG_4213.JPG',
    './images/PG/IMG_4214.JPG',
    './images/PG/IMG_4215.JPG',
    './images/PG/IMG_4216.JPG',
    './images/PG/IMG_4217.JPG',
    './images/PG/IMG_4218.JPG',
    './images/PG/IMG_4219.JPG',
    './images/PG/IMG_4220.JPG',
    './images/PG/IMG_4221.JPG',
    './images/PG/IMG_4222.JPG',
    './images/PG/IMG_4223.JPG',
    './images/PG/IMG_4224.JPG',
    './images/PG/IMG_4225.JPG',
    './images/PG/IMG_4226.JPG',
    './images/PG/IMG_4227.JPG',
    './images/PG/IMG_4228.JPG',
    './images/PG/IMG_4229.JPG',
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-slate-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-slate-100/30 to-blue-100/20 rounded-full blur-2xl"></div>
      
      {/* Floating bubbles */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-blue-200/60 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-slate-200/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-60 left-1/4 w-6 h-6 bg-blue-300/70 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-80 right-1/3 w-10 h-10 bg-slate-300/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-40 left-20 w-7 h-7 bg-blue-200/50 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-60 right-10 w-9 h-9 bg-slate-200/70 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
      <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-blue-300/60 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-11 h-11 bg-slate-300/50 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
      <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-blue-200/70 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="uppercase tracking-wider text-[#2D6C9B] font-semibold text-sm mb-2">PHOTO GALLERY</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Life at <span className="text-[#2D6C9B]">Endeavour School</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
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
          <button className="bg-gradient-to-r from-endeavour-dark to-endeavour-blue text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105 transform duration-300">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;


