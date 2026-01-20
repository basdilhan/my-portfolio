import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>Samudu Dilhan</h3>
            <p>Full Stack Developer | Building digital experiences</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Quick Links</h4>
              <a href="#hero">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
            </div>

            <div className={styles.linkGroup}>
              <h4>Connect</h4>
              <a href="#cv">Experience</a>
              <a href="#certificates">Certificates</a>
              <a href="#contact">Contact</a>
            </div>

            <div className={styles.linkGroup}>
              <h4>Social</h4>
              <div className={styles.socials}>
                <a href="https://github.com/basdilhan" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/samudu-dilhan" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:samududilhan@gmail.com" aria-label="Email">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Samudu Dilhan. All rights reserved.</p>
          <p className={styles.credit}>
            Made with <FaHeart className={styles.heart} /> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
