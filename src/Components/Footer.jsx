import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = 'samudu104@gmail.com';
  const location = 'Sri Lanka';
  const githubUrl = 'https://github.com/basdilhan';
  const linkedInUrl = 'https://www.linkedin.com/in/samudu-dilhan-45907028b/';

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className={styles.eyebrow}>Ready to collaborate</span>
            <h3>Samudu Dilhan</h3>
            <p>Full Stack Developer focused on polished interfaces, practical systems, and clear product thinking.</p>
            <div className={styles.credList}>
              <span>Location: {location}</span>
              <a href={`mailto:${email}`}>{email}</a>
              <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            </div>
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
                <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub size={24} />
                </a>
                <a href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
                <a href={`mailto:${email}`} aria-label="Email">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Samudu Dilhan. All rights reserved.</p>
          <p className={styles.credit}>
            Built with React and Vite <FaHeart className={styles.heart} /> for a clean, fast portfolio experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
