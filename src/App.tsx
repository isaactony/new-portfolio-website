import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import TechnicalArticles from './components/TechnicalArticles';
import Companies from './components/Companies';
import StartupProjects from './components/StartupProjects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="articles">
          <TechnicalArticles />
        </section>
        <section id="companies">
          <Companies />
        </section>
        <section id="startup-projects">
          <StartupProjects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;