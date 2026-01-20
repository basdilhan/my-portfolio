// src/components/Navbar.jsx
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a href="#hero" className={styles.title}>Samudu Dilhan</a>
      
      <button className={styles.menuBtn} onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div className={`${styles.navRight} ${menuOpen ? styles.menuOpen : ''}`}>
        <ul className={styles.menuItems}>
          <li><a href="#hero" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#cv" onClick={closeMenu}>CV</a></li>
          <li><a href="#certificates" onClick={closeMenu}>Certificates</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
