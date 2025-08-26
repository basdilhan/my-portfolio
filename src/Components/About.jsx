import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img 
          src="https://via.placeholder.com/300" // IMPORTANT: Replace with your actual photo URL
          alt="A profile picture of me" 
          className={styles.aboutImage}
        />
        <div className={styles.aboutText}>
          <p>
            Hello! I'm a developer based in Sri Lanka with a passion for creating impactful web experiences. My journey into tech began with a curiosity for how things work, and it has evolved into a career I love.
          </p>
          <p>Here are a few technologies I've been working with:</p>
          <ul className={styles.skillsList}>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>CSS & HTML</li>
            <li>Figma</li>
            <li>Vite</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;