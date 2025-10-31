import React from 'react';
import Hero from '../components/Hero';
import IntroAbout from '../components/IntroAbout';
import Curriculum from '../components/Curriculum';
import STEMRobotics from '../components/STEMRobotics';
import AdmissionRequirements from '../components/AdmissionRequirements';
import SchoolFacilities from '../components/SchoolFacilities';
import PreschoolClasses from '../components/PreschoolClasses';
import Gallery from '../components/Gallery';
import News from '../components/News';
import ClosingSection from '../components/ClosingSection';

function HomePage() {
  return (
    <>
      <Hero />
      <IntroAbout />
      <Curriculum />
      <STEMRobotics />
      <AdmissionRequirements />
      <SchoolFacilities />
      <PreschoolClasses />
      <Gallery />
      <News />
      <ClosingSection />
    </>
  );
}

export default HomePage;


