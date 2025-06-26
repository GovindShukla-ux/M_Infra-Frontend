import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-top">
        <div className="footer-logo">Madhav Infra</div>

        <nav className="footer-nav">
          <Link to="/about">Our Company</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-socials">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© {new Date().getFullYear()} Madhav Infra Construction. All rights reserved.</p>
          <p>
            Madhav Infra is an Equal Opportunity Employer – committed to diversity and inclusion.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
