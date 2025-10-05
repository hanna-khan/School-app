import React from 'react';

const facilities = [
  { title: 'Online Class' },
  { title: 'pick & drop' },
  { title: 'play ground' },
  { title: 'Healthy Foods' },
  { title: 'Modern School' },
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
              <div className="aspect-video rounded-xl bg-gray-100 mb-4" />
              <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-1">Pre-school has open door and also offer free trial session in child.</p>
              <a href="#" className="inline-block mt-3 text-pink-600 font-semibold">Class Details</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;


