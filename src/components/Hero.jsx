import React from 'react';

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-wider text-pink-600 font-semibold">fun happens!</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            The kids Center Education
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Work and play come together. We are constantly expanding the range of services offered.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#about" className="px-6 py-3 rounded-md bg-pink-600 text-white font-semibold hover:bg-pink-700">Know More</a>
            <a href="#admission" className="px-6 py-3 rounded-md border border-gray-300 text-gray-800 font-semibold hover:border-gray-400">Admission</a>
          </div>
        </div>
        <div className="relative">
          <div className="w-full aspect-square rounded-3xl bg-gradient-to-tr from-pink-100 to-blue-100" />
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-300 rounded-full opacity-70" />
          <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-blue-300 rounded-full opacity-60" />
        </div>
      </div>
    </section>
  );
}

export default Hero;


