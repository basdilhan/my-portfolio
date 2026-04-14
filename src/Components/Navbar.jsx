// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const SECTIONS = ['hero', 'about', 'services', 'skills', 'projects', 'cv', 'certificates', 'contact'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll-shrink effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const observers = [];
    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const toggleMenu = () => setMenuOpen(p => !p);
  const closeMenu  = () => setMenuOpen(false);

  const navLinks = [
    { href: '#hero',         label: 'Home' },
    { href: '#about',        label: 'About' },
    { href: '#services',     label: 'Services' },
    { href: '#skills',       label: 'Skills' },
    { href: '#projects',     label: 'Projects' },
    { href: '#cv',           label: 'CV' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact',      label: 'Contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.title}>Samudu Dilhan</a>

      <button className={styles.menuBtn} onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div className={`${styles.navRight} ${menuOpen ? styles.menuOpen : ''}`}>
        <ul className={styles.menuItems}>
          {navLinks.map(({ href, label }) => {
            const id = href.replace('#', '');
            return (
              <li key={id}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={activeSection === id ? styles.active : ''}
                  style={{ position: 'relative' }}
                >
                  {activeSection === id && (
                    <motion.div
                      layoutId="navIndicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--accent-primary)',
                        borderRadius: '2px'
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
