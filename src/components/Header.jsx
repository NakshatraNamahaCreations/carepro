import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="stellar-header">
      <div className="header-inner primary-header-inner">
        <div className="site-logo-main">
          <Link to="/">
            <img 
              src="/stellar-logo.svg" 
              className="site_logo" 
              loading="eager" 
              alt="Stellar RCM" 
              title="Stellar RCM"
            />
          </Link>
        </div>
        
        <div className="header-nav-section">
          <div className={`site-menu-main ${isMenuOpen ? 'active' : ''}`}>
            <nav id="site-navigation" className="main-navigation">
              <div className="stellar-menu">
                <div className="menu-close" onClick={toggleMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24.65" height="24.647" viewBox="0 0 24.65 24.647">
                    <path d="M227.067,205.054,216.95,215.171l-10.117-10.117a1.281,1.281,0,0,0-1.809,1.809l10.112,10.117L205.021,227.1a1.281,1.281,0,1,0,1.809,1.812l10.12-10.114,10.117,10.117a1.281,1.281,0,0,0,1.809-1.809l-10.117-10.117,10.117-10.12a1.281,1.281,0,1,0-1.809-1.812Z" transform="translate(-204.624 -204.656)" fill="#d60d4c"></path>
                  </svg>
                </div>
                
                <Navigation />
              </div>
            </nav>
          </div>
          
          <div className="header-right-section">
            <div className="header-contact-button">
              <a href="#contact" className="contactus-button btn-contact-us" role="button">
                Contact Us
              </a>
            </div>
            
            <div className="header-toggle-box">
              <button 
                className="menu-toggle" 
                aria-label="Menu" 
                aria-controls="header-primary-menu" 
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28.13" height="22.002" viewBox="0 0 28.13 22.002">
                  <g transform="translate(-1032.002 -204.532)">
                    <g transform="translate(1032.002 206.008)">
                      <g transform="translate(0 18.525)">
                        <rect width="28" height="2" rx="1" transform="translate(0 0)" fill="#fff"></rect>
                      </g>
                      <g transform="translate(0.13 8.524)">
                        <rect width="28" height="2" rx="1" transform="translate(0 0)" fill="#fff"></rect>
                      </g>
                      <g transform="translate(0.13 -1.477)">
                        <rect width="28" height="2" rx="1" transform="translate(0 0)" fill="#fff"></rect>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
