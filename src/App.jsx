import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import LanguageToggle from './components/LanguageToggle';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-slate-50 selection:bg-primary/30 selection:text-black dark:selection:text-white transition-colors duration-300">
          <ThemeToggle />
          <LanguageToggle />
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
