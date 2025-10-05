import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Sessions from './components/Sessions';
import Gallery from './components/Gallery';
import Grades from './components/Grades';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Sessions />
        <Gallery />
        <Grades />
        <Facilities />
        <Testimonials />
        <News />
        {/* More sections will be added here: About, Sessions, Gallery, Grades, Facilities, Testimonials, News */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
