import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="logo">
        Filmoteka
      </a>
      <ul className="nav_ul">
        <li className="nav_li">
          <a href="/">Homepage</a>
        </li>
        <li className="nav_li">
          <a href="/movies">Movies</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
