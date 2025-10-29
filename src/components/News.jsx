import React from 'react';
import { FaCalendarAlt, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

const posts = [
  { 
    title: 'Annual Science Fair 2025', 
    date: 'October 28, 2025', 
    type: 'Event',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=900&auto=format&fit=crop',
    description: 'Join us for our exciting Annual Science Fair featuring student projects and experiments.',
    location: 'Main Hall'
  },
  { 
    title: 'Parent-Teacher Conference', 
    date: 'November 5, 2025', 
    type: 'Meeting',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=900&auto=format&fit=crop',
    description: 'Meet with teachers to discuss your child\'s progress and development.',
    location: 'Classrooms'
  },
  { 
    title: 'Winter Sports Day', 
    date: 'December 10, 2025', 
    type: 'Event',
    image: 'https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?q=80&w=900&auto=format&fit=crop',
    description: 'An exciting day of sports activities and competitions for all students.',
    location: 'Sports Field'
  },
];

function News() {
  return (
    <section id="news" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="uppercase tracking-wider text-[#2D6C9B] font-semibold text-sm mb-2">STAY UPDATED</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            News & <span className="text-[#2D6C9B]">Events</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Stay informed about the latest happenings, events, and announcements at our school
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#2D6C9B] text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {post.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt size={14} />
                    <span>{post.location}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2D6C9B] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {post.description}
                </p>
                
                <a href="/news" className="inline-flex items-center gap-2 text-[#2D6C9B] font-semibold hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <FaArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-endeavour-dark to-endeavour-blue text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
            View All News & Events
          </button>
        </div>
      </div>
    </section>
  );
}

export default News;