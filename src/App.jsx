import { LanguageProvider } from './contexts/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-slate-900 min-h-screen text-slate-50 selection:bg-primary/30 selection:text-white">
        <LanguageToggle />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
