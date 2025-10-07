import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Sessions from '../components/Sessions';
import Gallery from '../components/Gallery';
import Grades from '../components/Grades';
import Facilities from '../components/Facilities';
import Teachers from '../components/Teachers';
import Testimonials from '../components/Testimonials';
import News from '../components/News';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Sessions />
      <Gallery />
      <Grades />
      <Facilities />
      <Teachers />
      <Testimonials />
      <News />
    </>
  );
}

export default HomePage;


