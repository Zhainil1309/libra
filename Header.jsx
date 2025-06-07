// Header.jsx
import React, { useState } from 'react';
import '../CSS/Header.css';
import libra_logo from "../assets/libra_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="logo">
        <img src={libra_logo} alt="Libra Logo" />
      </div>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/AboutUs">About Us</a></li>
    <li><a href="/events">Events</a></li>
    <li><a href="/venues">Venues</a></li>
    <li><a href="/gallery">Gallery</a></li>
    <li className="contact-button"><a href="/contactus">Contact</a></li>
  </ul>
</nav>


      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
