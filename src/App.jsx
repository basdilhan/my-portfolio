// src/App.jsx
import React, { useState } from 'react';
import styles from './App.module.css';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Services from './Components/Services';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useIntersectionObserver(setActiveSection);

  return (
    <div className={styles.App}>
      <Navbar activeSection={activeSection} />
      <main>
        <div id="hero" ref={(el) => (sectionRefs.current[0] = el)}><Hero /></div>
        <div id="about" ref={(el) => (sectionRefs.current[1] = el)}><About /></div>
        <div id="projects" ref={(el) => (sectionRefs.current[2] = el)}><Projects /></div>
        <div id="Services" ref={(el) => (sectionRefs.current[3] = el)}><Services /></div>
        <div id="contact" ref={(el) => (sectionRefs.current[4] = el)}><Contact /></div>
      </main>
    </div>
  );
}

export default App;

