// src/components/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';

// The Navbar now accepts 'activeSection' as a prop to know which link to highlight
const Navbar = ({ activeSection }) => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Samudu Dilhan</a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? styles.activeLink : ''}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? styles.activeLink : ''}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? styles.activeLink : ''}
            >
              Contact
            </a>
          </li>
        </ul>
       
       
      </div>
    </nav>
  );
};

export default Navbar;
