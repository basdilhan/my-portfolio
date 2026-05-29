// src/App.jsx
import React from "react";
import styles from "./App.module.css";
import "./animations.css";
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
import PageIntro from "./Components/PageIntro";
import { SectionDivider } from "./Components/ScrollReveal";

function App() {
  return (
    <div className={styles.App}>
      {/* Intro splash screen */}
      <PageIntro />

      {/* Premium ambient glows - fixed positioning */}
      <div className={styles.ambientGlowPrimary} />
      <div className={styles.ambientGlowSecondary} />
      <div className={styles.ambientGlowTertiary} />
      
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <SectionDivider />
        <section id="about"><About /></section>
        <SectionDivider />
        <section id="services"><Services /></section>
        <SectionDivider />
        <section id="skills"><Skills /></section>
        <SectionDivider />
        <section id="projects"><Projects /></section>
        <SectionDivider />
        <section id="demos"><DeviceShowcase /></section>
        <SectionDivider />
        <section id="cv"><CVSection /></section>
        <SectionDivider />
        <section id="certificates"><CertificatesGallery /></section>
        <SectionDivider />
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

