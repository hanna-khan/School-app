import React from 'react';

const reviews = [
  { name: 'Rodja Hartmann', role: 'Vecuro, CEO' },
  { name: 'parker jonson', role: 'google CEO' },
  { name: 'Mehadi Hassan', role: 'InsightTheme CEO' },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="uppercase tracking-wider text-pink-600 font-semibold">faq feedback</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Customer Feedback For school</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-4" />
              <h4 className="font-bold text-gray-900">{r.name}</h4>
              <div className="text-sm text-gray-500">{r.role}</div>
              <p className="mt-3 text-gray-600">
                We look forward to developing the long-term relationship with children and parents and will welcome children into our after-school service.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;


