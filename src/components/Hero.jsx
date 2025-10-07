import React from 'react';
import { FaStar } from 'react-icons/fa';

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
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop"
            alt="Kids learning"
            className="w-full aspect-square object-cover rounded-3xl"
          />
          <div className="absolute -top-6 -left-6 w-14 h-14 bg-yellow-300 rounded-full opacity-90 flex items-center justify-center text-white">
            <FaStar size={22} />
          </div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500/80 rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;


