import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ onLinkClick }) => {
  // Services dropdown removed; keeping the header clean with simple links

  return (
    <div className="menu-header-menu-container">
      <ul id="header-primary-menu" className="menu">
        <li className="menu-item">
          <Link to="/" onClick={onLinkClick}>Home</Link>
        </li>
        
        <li className="menu-item">
          <Link to="/about" onClick={onLinkClick}>About Us</Link>
        </li>
        
        <li className="menu-item">
          <Link to="/why-carepro" onClick={onLinkClick}>Why CarePro</Link>
        </li>
        
        <li className="menu-item">
          <Link to="/our-services" onClick={onLinkClick}>Our Services</Link>
        </li>

        <li className="menu-item">
          <Link to="/our-team" onClick={onLinkClick}>Our Team</Link>
        </li>
        
        {/* Contact Us button - only visible in mobile menu */}
        <li className="menu-item menu-contact-item mobile-only">
          <Link to="/contact" className="menu-contact-button" onClick={onLinkClick}>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
