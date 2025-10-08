import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ onLinkClick }) => {
  return (
    <div className="menu-header-menu-container">
      <ul id="header-primary-menu" className="menu">
        <li className="menu-item">
          <Link to="/" onClick={onLinkClick}>Home</Link>
        </li>
        
        <li className="menu-item">
          <Link to="/about" onClick={onLinkClick}>About Us</Link>
        </li>
        
        <li className="menu-item why-carepro-mega-menu">
          <Link to="/why-carepro" onClick={onLinkClick}>
            Why CarePro
            <span className="menu-dropdown-arrow"></span>
          </Link>
          
          <div className="megamenu-main">
            <div className="megamenu-wrap">
              <div className="tab-content-head">
                <Link to="/rpm-platform" className="tab-content-link" onClick={onLinkClick}>
                  RPM Platform
                </Link>
                <p className="description">
                  Advanced Remote Patient Monitoring platform designed for comprehensive healthcare delivery
                </p>
              </div>
              
              <div className="tab-content-head">
                <Link to="/investors" className="tab-content-link" onClick={onLinkClick}>
                  Investors
                </Link>
                <p className="description">
                  Investment opportunities and partnership information for healthcare technology investors
                </p>
              </div>
              
              <div className="tab-content-head">
                <Link to="/rtm-platform" className="tab-content-link" onClick={onLinkClick}>
                  RTM Platform
                  <span className="work-in-progress">(Work in progress)</span>
                </Link>
                <p className="description">
                  Real-Time Monitoring platform for continuous patient care and immediate response systems
                </p>
              </div>
              
              <div className="tab-content-head">
                <Link to="/ccm-platform" className="tab-content-link" onClick={onLinkClick}>
                  CCM Platform
                  <span className="work-in-progress">(Work in progress)</span>
                </Link>
                <p className="description">
                  Chronic Care Management platform for long-term patient monitoring and care coordination
                </p>
              </div>
            </div>
          </div>
        </li>
        
        <li className="menu-item services-mega-menu">
          <Link to="/our-services" onClick={onLinkClick}>
            Our Services
            <span className="menu-dropdown-arrow"></span>
          </Link>
          
          <div className="megamenu-main">
            <div className="megamenu-wrap">
              <div className="tab-content-head">
                <Link to="/solutions" className="tab-content-link" onClick={onLinkClick}>
                  Solutions
                </Link>
                <p className="description">
                  Comprehensive healthcare technology solutions for modern care delivery
                </p>
              </div>
              
              <div className="tab-content-head">
                <Link to="/technology" className="tab-content-link" onClick={onLinkClick}>
                  Technology 
                </Link>
                <p className="description">
                  Advanced technology infrastructure powering our healthcare solutions
                </p>
              </div>
            </div>
          </div>
        </li>

        <li className="menu-item">
          <Link to="/our-team" onClick={onLinkClick}>Our Team</Link>
        </li>
        
        <li className="menu-item">
          <Link to="/partner-with-us" onClick={onLinkClick}>Partners with Us</Link>
        </li>
        
        <li className="menu-item">
          <Link to="/career" onClick={onLinkClick}>Career</Link>
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
