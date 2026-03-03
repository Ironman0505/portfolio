import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <Certifications /> */}
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
