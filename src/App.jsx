import React from 'react';
import styles from './App.module.css';
// Import the hook
import useIntersectionObserver from "./hooks/useIntersectionObserver"; 
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const sectionRefs = useIntersectionObserver();

  return (
    <div className={styles.App}>
      <Navbar />
      <main>
        {/* We need to use 'ref' which requires forwarding. 
            For simplicity, we'll wrap sections in divs for now */}
        <div id="hero" ref={(el) => (sectionRefs.current[0] = el)}><Hero /></div>
        <div id="about" ref={(el) => (sectionRefs.current[1] = el)}><About /></div>
        <div id="projects" ref={(el) => (sectionRefs.current[2] = el)}><Projects /></div>
        <div id="contact" ref={(el) => (sectionRefs.current[3] = el)}><Contact /></div>
      </main>
    </div>
  );
}

export default App;