// src/Components/About.jsx
import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
// Icons for principles and technologies
import { FaCode, FaPaintBrush, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFigma, FaPhp, FaLeaf } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiSpringboot, SiArduino, SiFlutter } from 'react-icons/si';



const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Add your photos here
  const photos = [
    '/samudu.jpg',
    '/My1.jpg',
    '/My2.jpg',
    '/My3.jpg'
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>WHO AM I?</h2>
      <div className={styles.content}>
        <div className={styles.aboutText}>
          <h3>Hey there! 👋 I'm Samudu Dilhan, a passionate developer from Sri Lanka.</h3>
          <p>
            I love crafting modern web and mobile applications, with a huge enthusiasm for building impactful solutions for the future. Beyond development, I'm passionate about data analytics and statistics—uncovering patterns, telling data stories, and making data-driven decisions. I often dive deep into areas like Machine Learning (ML), Artificial Intelligence (AI), and data visualization.
          </p>
          <p>
            Beyond the screen, I'm passionate about exploring new places and capturing moments through photography 📸. I believe that creativity fuels innovation, and I'm always looking for new experiences to draw inspiration from. When I'm not coding, you can find me listening to music 🎧, planning my next adventure, or simply enjoying the vibrant culture of Sri Lanka.
          </p>
          <p>
            Currently, I'm pursuing my studies in Software Engineering. Always hungry to learn, I'm on a journey to push boundaries and build amazing things. Let's connect and explore the world of innovation together! ✨
          </p>
        </div>
        
        <div className={styles.mediaSection}>
          <div className={styles.photoSlideshow}>
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Slideshow image ${index + 1}`}
                className={`${styles.slideshowImage} ${currentImage === index ? styles.active : ''}`}
              />
            ))}
          </div>
          
          {/* Principles cards moved to right */}
          <div className={styles.principles}>
            <div className={styles.principleCard}>
              <FaCode size={40} className={styles.icon} />
              <h4>Clean Code</h4>
              <p>I believe in writing efficient, scalable, and clean code.</p>
            </div>
            <div className={styles.principleCard}>
              <FaPaintBrush size={40} className={styles.icon} />
              <h4>Modern Design</h4>
              <p>I create sleek, responsive, and modern designs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Updated Technologies Section --- */}
      <div className={styles.techSection}>
        <h3 className={styles.techTitle}>Technologies I Use</h3>
        <div className={styles.techGrid}>
          <div className={styles.techItem}>
            <FaReact size={50} />
            <p>React</p>
          </div>
          <div className={styles.techItem}>
            <FaNodeJs size={50} />
            <p>Node.js</p>
          </div>
          <div className={styles.techItem}>
            <IoLogoJavascript size={50} />
            <p>JavaScript</p>
          </div>
          <div className={styles.techItem}>
            <FaPhp size={50} />
            <p>PHP</p>
          </div>
          <div className={styles.techItem}>
            <SiSpringboot size={50} />
            <p>Spring Boot</p>
          </div>
          <div className={styles.techItem}>
            <FaLeaf size={50} />
            <p>Thymeleaf</p>
          </div>
          <div className={styles.techItem}>
            <SiFlutter size={50} />
            <p>Flutter</p>
          </div>
         
          <div className={styles.techItem}>
            <SiArduino size={50} />
            <p>Arduino</p>
          </div>
          <div className={styles.techItem}>
            <FaHtml5 size={50} />
            <p>HTML5</p>
          </div>
          <div className={styles.techItem}>
            <FaCss3Alt size={50} />
            <p>CSS3</p>
          </div>
          <div className={styles.techItem}>
            <FaFigma size={50} />
            <p>Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
