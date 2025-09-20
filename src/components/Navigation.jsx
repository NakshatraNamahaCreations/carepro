import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState('tabs-services-1');

  const handleMouseEnter = (dropdownId) => {
    setActiveDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="menu-header-menu-container">
      <ul id="header-primary-menu" className="menu">
        <li className="menu-item">
          <a href="/">Home</a>
        </li>
        
        <li className="menu-item">
          <a href="/about-us">About Us</a>
        </li>
        
        <li className="menu-item">
          <a href="/why-stellar-rcm">Why CarePro</a>
        </li>
        
        <li 
          className="services-mega-menu menu-item menu-item-has-children stellar-has-mega-menu"
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/our-services">Our Services</a>
          
          <div className="megamenu-main">
            <div className="megamenu-wrap">
              
              <div className="mega-menu-tabs__body">
                <div className="stellar-mega-menu-tab-item mega-menu-tabs__content active" id="tabs-services-1">
                  <ul className="simple-dropdown">
                    <li className="menu-item">
                      <a href="/services/revenue-cycle-management">
                        Revenue Cycle Management
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/services/medical-billing">
                        Medical Billing
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/services/medical-coding">
                        Medical Coding
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/services/payers-solution">
                        Payers Solution
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
  );
};

export default Navigation;
