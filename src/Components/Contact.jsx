import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.text}>
        I'm currently open to new opportunities. Feel free to send me an email.
        Whether you have a question or just want to say hi, I'll get back to you!
      </p>
      <a href="mailto:your-email@example.com" className={styles.emailLink}>
        Say Hello
      </a>
      <div className={styles.socialLinks}>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;