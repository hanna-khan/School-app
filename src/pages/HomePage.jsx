import React from 'react';
import Hero from '../components/Hero';
import IntroAbout from '../components/IntroAbout';
import Curriculum from '../components/Curriculum';
import KeyStages from '../components/KeyStages';
import AdmissionRequirements from '../components/AdmissionRequirements';
import Gallery from '../components/Gallery';
import News from '../components/News';

function HomePage() {
  return (
    <>
      <Hero />
      <IntroAbout />
      <Curriculum />
      <KeyStages />
      <AdmissionRequirements />
      <Gallery />
      <News />
    </>
  );
}

export default HomePage;


