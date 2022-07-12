import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/">
        Filmoteka
      </Link>
      <ul className={styles.navUl}>
        <li className={styles.navLi}>
          <Link className={styles.navLink} to="/">
            Homepage
          </Link>
        </li>
        <li className={styles.navLi}>
          <Link className={styles.navLink} to="/movies">
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
