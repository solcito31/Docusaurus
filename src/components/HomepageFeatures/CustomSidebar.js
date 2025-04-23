import React from 'react';
import styles from './CustomSidebar.module.css';
import { FaBook, FaGithub, FaMoon, FaSun } from 'react-icons/fa';

export default function CustomSidebar() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('docusaurus-theme-dark');
  };

  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <FaBook className={styles.icon} />
          <a href="/manual-inspector">Tutorial</a>
        </li>
        <li>
          <FaGithub className={styles.icon} />
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li onClick={toggleTheme} className={styles.toggle}>
          <FaMoon className={styles.icon} />
          <span>Cambiar tema</span>
        </li>
      </ul>
    </div>
  );
}