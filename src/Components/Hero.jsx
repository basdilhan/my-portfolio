import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <h1 className={styles.title}>Hi, I'm [Your Name]</h1>
      <p className={styles.description}>
        I'm a full-stack developer passionate about building modern web applications.
      </p>
      <a className={styles.contactBtn} href="mailto:your-email@example.com">
        Get In Touch
      </a>
    </section>
  );
};

export default Hero;