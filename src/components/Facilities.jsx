import React from 'react';
import { FaPlay, FaTruck, FaCoffee, FaHeart, FaHome } from 'react-icons/fa';

const facilities = [
  { title: 'Online Class', image: 'https://images.unsplash.com/photo-1587613865763-4b8b0b1eeb83?q=80&w=900&auto=format&fit=crop', icon: FaCoffee },
  { title: 'Pick & Drop', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=900&auto=format&fit=crop', icon: FaTruck },
  { title: 'Play Ground', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=900&auto=format&fit=crop', icon: FaPlay },
  { title: 'Healthy Foods', image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=900&auto=format&fit=crop', icon: FaHeart },
  { title: 'Modern School', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop', icon: FaHome },
];

function Facilities() {
  return (
    <section id="facilities" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="uppercase tracking-wider text-pink-600 font-semibold">School Facilities</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Engaging & Spacious School</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {facilities.map((f, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white border border-gray-200">
              <img src={f.image} alt={f.title} className="aspect-video w-full object-cover rounded-xl mb-4" />
              <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-1">Pre-school has open door and also offer free trial session in child.</p>
              <a href="#" className="inline-flex items-center gap-2 mt-3 text-pink-600 font-semibold">
                <f.icon size={16} />
                <span>Class Details</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;


