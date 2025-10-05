import React from 'react';

const sessions = [
  { title: 'Brain Train', time: '8.00am - 10.00am' },
  { title: 'Drawing & Paintings', time: '8.00am - 10.00am' },
  { title: 'Alphabet Matching', time: '8.00am - 10.00am' },
  { title: 'Playland & Caffe', time: '8.00am - 10.00am' },
];

function Sessions() {
  return (
    <section id="sessions" className="relative py-16 bg-gradient-to-r from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="uppercase tracking-wider text-pink-600 font-semibold">Session Times</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Your kids Are 100% Safe at Our Care.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-pink-500 mb-4" />
              <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sessions;


