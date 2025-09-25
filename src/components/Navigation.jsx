import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  // Services dropdown removed; keeping the header clean with simple links

  return (
    <div className="menu-header-menu-container">
      <ul id="header-primary-menu" className="menu">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        
        <li className="menu-item">
          <Link to="/about">About Us</Link>
        </li>
        
        <li className="menu-item">
          <Link to="/why-carepro">Why CarePro</Link>
        </li>
        
        <li className="menu-item">
          <Link to="/our-services">Our Services</Link>
        </li>

        <li className="menu-item">
          <Link to="/our-team">Our Team</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Navigation;
