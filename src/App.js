import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/about/AboutUs';
import AboutWhoWeAre from './pages/about/WhoWeAre';
import AboutTeachingMethodology from './pages/about/TeachingMethodology';
import AboutCurriculum from './pages/about/BritishCurriculum';
import AboutExams from './pages/about/ExternalExaminations';
import Admissions from './pages/admissions/Admissions';
import AdmissionsGeneral from './pages/admissions/GeneralInfo';
import AdmissionsApplication from './pages/admissions/ApplicationForm';
import AdmissionsRules from './pages/admissions/RulesAndUniform';
import Education from './pages/education/Education';
import EYFS from './pages/education/EYFS';
import Primary from './pages/education/Primary';
import Secondary from './pages/education/Secondary';
import ExtraCurricular from './pages/extra/ExtraCurricular';
import Trips from './pages/extra/FieldTrips';
import GalleryPage from './pages/GalleryPage';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/who-we-are" element={<AboutWhoWeAre />} />
          <Route path="/about/teaching-methodology" element={<AboutTeachingMethodology />} />
          <Route path="/about/british-curriculum" element={<AboutCurriculum />} />
          <Route path="/about/external-examinations" element={<AboutExams />} />

          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/general-info" element={<AdmissionsGeneral />} />
          <Route path="/admissions/application-form" element={<AdmissionsApplication />} />
          <Route path="/admissions/rules-and-uniform" element={<AdmissionsRules />} />

          <Route path="/education" element={<Education />} />
          <Route path="/education/eyfs" element={<EYFS />} />
          <Route path="/education/primary" element={<Primary />} />
          <Route path="/education/secondary" element={<Secondary />} />

          <Route path="/extra-curricular" element={<ExtraCurricular />} />
          <Route path="/extra-curricular/field-trips" element={<Trips />} />

          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
