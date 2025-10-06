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
                <Link to="/technology" className="tab-content-link" onClick={onLinkClick}>
                  Technology 
                </Link>
                <p className="description">
                  Advanced technology infrastructure powering our healthcare solutions
                </p>
                {/* <ul>
                  <li className="menu-item">
                    <Link to="/our-services" onClick={onLinkClick}>
                      <strong>Remote Patient Monitoring</strong>
                      <span className="menu-item-description">4G/Bluetooth/WiFi enabled devices for continuous monitoring</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/our-services" onClick={onLinkClick}>
                      <strong>AI-Powered Analytics</strong>
                      <span className="menu-item-description">Predictive analytics and real-time insights</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/our-services" onClick={onLinkClick}>
                      <strong>HMS Integration</strong>
                      <span className="menu-item-description">Seamless integration with existing healthcare systems</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/our-services" onClick={onLinkClick}>
                      <strong>Certified Devices</strong>
                      <span className="menu-item-description">FDA, CE, CDSCO certified medical devices</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/our-services" onClick={onLinkClick}>
                      <strong>Care Coordinator Platform</strong>
                      <span className="menu-item-description">24/7 nurse-led support and monitoring</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/our-services" onClick={onLinkClick}>
                      <strong>Compliance & Security</strong>
                      <span className="menu-item-description">DPDPA, ISO 27001, ISO 9001 compliance</span>
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </li>

        <li className="menu-item">
          <Link to="/our-team" onClick={onLinkClick}>Our Team</Link>
        </li>
        
        <li className="menu-item">
          <Link to="/partner-with-us" onClick={onLinkClick}>Partner with Us</Link>
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
