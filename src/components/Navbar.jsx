import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleMouseEnter = () => {
    gsap.to(navbarRef.current, {
      backgroundColor: 'rgba(15, 15, 15, 0.95)', // solid dark
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(navbarRef.current, {
      backgroundColor: 'rgba(15, 15, 15, 0)', // fully transparent
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  return (
    <header
      className="navbar"
      ref={navbarRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>Madhav Infra</Link>
      </div>

      <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/ceo-founders" onClick={closeMenu}>Founders</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/testimonials" onClick={closeMenu}>Testimonials</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
      </div>
    </header>
  );
}

export default Navbar;