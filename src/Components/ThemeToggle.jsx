import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;