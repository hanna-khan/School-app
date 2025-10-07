import React from 'react';

const grades = [
  { title: 'Grade 2', age: 'Age 03 - 04' },
  { title: 'Grade 2', age: 'Age 03 - 04' },
  { title: 'Grade 2', age: 'Age 03 - 04' },
  { title: 'Grade 2', age: 'Age 03 - 04' },
];

function Grades() {
  return (
    <section id="grades" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="uppercase tracking-wider text-pink-600 font-semibold">GRADE LEVEL</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Grade Programs</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {grades.map((g, i) => (
            <div key={i} className="rounded-2xl p-6 bg-pink-50 border border-pink-100">
              <img
                src={`https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop&sig=${i}`}
                alt={g.title}
                className="aspect-video w-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900">{g.title}</h3>
              <p className="text-sm text-gray-600">{g.age}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Grades;


