// src/Components/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container} id="contact">
      <div className={styles.content}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.text}>
          I'm currently looking for new opportunities, and my inbox is always open.
          Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        <a href="mailto:your-email@example.com" className={styles.emailLink}>
          Say Hello
        </a>
        <div className={styles.socials}>
          <a 
            href="https://github.com/basdilhan" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
          >
            <FaGithub size={30} />
          </a>
          <a 
            href="https://linkedin.com/in/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
      <div className={styles.footerText}>
        <p>&copy; {currentYear} Samudu Dilhan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
