import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1519455953755-af066f52f1ea?q=80&w=800&auto=format&fit=crop" alt="Kids painting" className="aspect-[4/5] object-cover rounded-3xl" />
          <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop" alt="Classroom" className="aspect-[4/5] object-cover rounded-3xl mt-10" />
          <img src="https://images.unsplash.com/photo-1596495578068-9f5d87a1f4d2?q=80&w=800&auto=format&fit=crop" alt="Outdoor play" className="aspect-[4/5] object-cover rounded-3xl" />
          <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop" alt="Reading time" className="aspect-[4/5] object-cover rounded-3xl mt-10" />
        </div>
        <div>
          <p className="uppercase tracking-wider text-pink-600 font-semibold">School Facilities</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Learning Opportunity For Kids</h2>
          <p className="mt-4 text-gray-600">
            Pre-school has open door and also offer free trial sessions. Creative learning opportunity for kids.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-pink-600" /> Learning Opportunity For Kids</li>
            <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-pink-600" /> Your Child Will Take</li>
          </ul>
          <div className="mt-6 flex items-center gap-6">
            <div>
              <div className="text-3xl font-extrabold text-gray-900">21+</div>
              <div className="text-gray-600">years of experience</div>
            </div>
            <a href="#contact" className="px-6 py-3 rounded-md bg-pink-600 text-white font-semibold hover:bg-pink-700">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


