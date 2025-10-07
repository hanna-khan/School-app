import React from 'react';
import { FaBook, FaTv, FaRunning, FaSmile } from 'react-icons/fa';

const items = [
  { title: 'Learn and Play', color: 'bg-pink-100', icon: FaSmile },
  { title: 'Online Class', color: 'bg-yellow-100', icon: FaTv },
  { title: 'Formal Tuition', color: 'bg-blue-100', icon: FaBook },
  { title: 'Own Playground', color: 'bg-green-100', icon: FaRunning },
];

function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="uppercase tracking-wider text-pink-600 font-semibold">Choose Us</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Education For Kids</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className={`rounded-2xl p-6 ${item.color} hover:shadow-lg transition-shadow`}>
              <div className="w-12 h-12 rounded-lg bg-white text-pink-600 flex items-center justify-center mb-4">
                <item.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">Pre-school has open door and also offer free trial session.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;


