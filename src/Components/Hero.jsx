// src/components/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';
// Import the icons you need
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <h1 className={styles.title}>Hi, I'm Samudu Dilhan</h1>
      {/* --- New Subtitle --- */}
      <h3 className={styles.subtitle}>I build things for the web.</h3>
      <p className={styles.description}>
        I'm a full-stack developer passionate about building modern web applications.
      </p>
      <div className={styles.buttonContainer}>
        <a className={styles.contactBtn} href="mailto:your-email@example.com">
          Get In Touch
        </a>
        <a className={styles.outlineBtn} href="/resume.pdf" download>
          View Resume
        </a>
      </div>
      {/* --- New Social Links --- */}
      <div className={styles.socials}>
        <a 
          href="https://github.com/basdilhan" // Replace with your GitHub URL
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.socialLink}
        >
          <FaGithub size={30} />
        </a>
        <a 
          href="https://www.linkedin.com/in/samudu-dilhan-45907028b/" // Replace with your LinkedIn URL
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.socialLink}
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
