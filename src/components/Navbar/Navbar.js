import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="Movies/">
        Filmoteka
      </Link>
      <ul className={styles.navUl}>
        <li className={styles.navLi}>
          <Link className={styles.navLink} to="Movies/">
            Homepage
          </Link>
        </li>
        <li className={styles.navLi}>
          <Link className={styles.navLink} to="Movies/movies">
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
