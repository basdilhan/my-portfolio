// src/components/Hero.jsx
import React from 'react';
import styles from './HeroClean.module.css';
// Import the icons you need
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <h1 className={styles.title}>Hi, I'm Samudu Dilhan</h1>
      <h3 className={styles.subtitle}>Full Stack Developer | Data Analyst & Statistics Enthusiast</h3>
      <p className={styles.description}>
        I specialize in full-stack web development with Java Spring Boot and React, and I'm equally passionate about data analytics and statistics. I love transforming raw data into actionable insights while building scalable applications.
      </p>
      <div className={styles.buttonContainer}>
        <a className={styles.contactBtn} href="#contact">
          <FaEnvelope />
          Get In Touch
        </a>
        <a className={styles.outlineBtn} href="#cv">
          <FaDownload />
          View Experience
        </a>
      </div>
      <div className={styles.socials}>
        <a 
          href="https://github.com/basdilhan"
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.socialLink}
          aria-label="GitHub Profile"
        >
          <FaGithub size={26} />
        </a>
        <a 
          href="https://www.linkedin.com/in/samudu-dilhan-45907028b/"
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.socialLink}
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={26} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
