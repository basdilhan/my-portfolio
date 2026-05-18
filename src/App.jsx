// src/App.jsx
import React from "react";
import styles from "./App.module.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import CVSection from "./Components/CVSection";
import CertificatesGallery from "./Components/CertificatesGallery";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollProgress from "./Components/ScrollProgress";
import ScrollToTop from "./Components/ScrollToTop";

import CustomCursor from "./Components/CustomCursor";
import DeviceShowcase from "./Components/DeviceShowcase";

function App() {
  return (
    <div className={styles.App}>
      {/* Premium ambient glows - fixed positioning */}
      <div className={styles.ambientGlowPrimary} />
      <div className={styles.ambientGlowSecondary} />
      
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="demos"><DeviceShowcase /></section>
        <section id="cv"><CVSection /></section>
        <section id="certificates"><CertificatesGallery /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

