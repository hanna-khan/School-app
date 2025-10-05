import React from 'react';

const posts = [
  { title: 'Learn and Play', date: '26. September 2025' },
  { title: 'Indoor Class Rooms', date: '26. September 2025' },
  { title: 'Filled Fun & Games', date: '26. September 2025' },
];

function News() {
  return (
    <section id="news" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="uppercase tracking-wider text-pink-600 font-semibold">our news</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">our News & Article</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="rounded-2xl overflow-hidden bg-white border border-gray-200">
              <div className="aspect-video bg-gray-100" />
              <div className="p-5">
                <div className="text-sm text-gray-500">{p.date}</div>
                <h3 className="mt-1 text-lg font-bold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-gray-600 text-sm">Pre-school has open door and offer free trial session.</p>
                <a href="#" className="inline-block mt-3 text-pink-600 font-semibold">Read more</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;


