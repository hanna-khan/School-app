import React from 'react';
import { FaCalendarAlt, FaArrowRight, FaShare } from 'react-icons/fa';

const posts = [
  { 
    title: 'Learn And Play', 
    date: '26. September 2025', 
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=900&auto=format&fit=crop',
    shareColor: 'bg-blue-600'
  },
  { 
    title: 'Indoor Class Rooms', 
    date: '26. September 2025', 
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop',
    shareColor: 'bg-blue-600'
  },
  { 
    title: 'Filled Fun & Games', 
    date: '26. September 2025', 
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=900&auto=format&fit=crop',
    shareColor: 'bg-orange-500'
  },
];

function News() {
  return (
    <section id="news" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="uppercase tracking-wider text-gray-400 font-semibold text-sm mb-4">OUR NEW</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800">Our News & Article</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                <button className={`absolute bottom-4 right-4 w-10 h-10 ${post.shareColor} rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}>
                  <FaShare size={16} className="text-white" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <FaCalendarAlt size={14} />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-blue-800 mb-3">{post.title}</h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Pre-School Has Open Door Andosol Offer Free Trial Session In Child.
                </p>
                
                <div className="flex items-center justify-between">
                  <a href="#" className="flex items-center gap-2 text-gray-700 font-semibold hover:text-orange-500 transition-colors">
                    <span>Read More</span>
                    <FaArrowRight size={14} className="text-orange-500" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
        <span className="text-white font-bold">91%</span>
      </div>
    </section>
  );
}

export default News;