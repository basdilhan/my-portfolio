// src/Components/Contact.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// After setting up EmailJS, replace these three values:
const EMAILJS_SERVICE_ID = 'service_258i5mb';   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = 'template_lhkckcl';  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY = 'vPkZcbFgM4fnXkSmJ';    // e.g. "AbCdEfGhIjKlMnOp"
// ─────────────────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = '94769798081'; // +94 769 798 081 (Sri Lanka)
const MY_EMAIL = 'samudu104@gmail.com';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'loading' | 'success' | 'error' | 'not_configured'
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Guard: show helpful message if EmailJS is not yet configured
    if (
      EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      setStatus('not_configured');
      setTimeout(() => setStatus(''), 6000);
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 6000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 6000);
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Samudu! I found your portfolio and would like to connect."
  );

  return (
    <section className={styles.container} id="contact">
      <div className={styles.content}>

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.text}>
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you!
          </p>
        </div>

        {/* Quick-contact pills */}
        <div className={styles.quickContact}>
          <a
            href={`mailto:${MY_EMAIL}`}
            className={styles.quickBtn}
            aria-label="Send Email"
          >
            <FaEnvelope className={styles.quickIcon} />
            <span>{MY_EMAIL}</span>
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.quickBtn} ${styles.whatsappBtn}`}
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className={styles.quickIcon} />
            <span>WhatsApp Me</span>
          </a>
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerText}>or send a message</span>
          <span className={styles.dividerLine} />
        </div>

        {/* Contact Form */}
        <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
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
              Message sent! I&apos;ll get back to you soon. 🎉
            </div>
          )}
          {status === 'error' && (
            <div className={styles.errorMessage}>
              <FaExclamationCircle />
              Oops! Something went wrong. Please try WhatsApp or email directly.
            </div>
          )}
          {status === 'not_configured' && (
            <div className={styles.warningMessage}>
              <FaExclamationCircle />
              Email service not yet configured. Please use WhatsApp or email above.
            </div>
          )}
        </form>
      </div>

      {/* Floating WhatsApp FAB */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappFab}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </section>
  );
};

export default Contact;
