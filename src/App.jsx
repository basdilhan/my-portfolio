// src/App.jsx
import React, { useState } from 'react'; // Import useState
import styles from './App.module.css';
import useIntersectionObserver from './hooks/useIntersectionObserver'; 
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Blog from './Components/Blog';

function App() {
  // --- New state to track the active section ---
  const [activeSection, setActiveSection] = useState('');
  // Pass the setter function to the hook
  const sectionRefs = useIntersectionObserver(setActiveSection);

  return (
    <div className={styles.App}>
      {/* --- Pass the active section state to the Navbar --- */}
      <Navbar activeSection={activeSection} />
      <main>
        {/* The hook uses these divs and their IDs to update the state */}
        <div id="hero" ref={(el) => (sectionRefs.current[0] = el)}><Hero /></div>
        <div id="about" ref={(el) => (sectionRefs.current[1] = el)}><About /></div>
        <div id="projects" ref={(el) => (sectionRefs.current[2] = el)}><Projects /></div>
        <div id="contact" ref={(el) => (sectionRefs.current[3] = el)}><Contact /></div>
      </main>
      <div className={styles.container}>
        <Blog />
      </div>
    </div>
  );
}

export default App;

