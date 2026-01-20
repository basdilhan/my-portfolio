// src/Components/Contact.jsx
import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://formspree.io/f/mqkqgdng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.container} id="contact">
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.text}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
              rows="6"
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            <FaPaperPlane />
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className={styles.successMessage}>
              <FaCheckCircle />
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className={styles.errorMessage}>
              <FaExclamationCircle />
              Oops! Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
