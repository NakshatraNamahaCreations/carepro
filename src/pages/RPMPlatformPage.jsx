import React, { useState } from 'react';
import './RPMPlatformPage.css';
import DemoPopup from '../components/DemoPopup';

const RPMPlatformPage = () => {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoPopupOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoPopupOpen(false);
  };

  const handleWatchVideo = () => {
    // Add video functionality here
    console.log('Watch Platform Video clicked');
  };

  return (
    <div className="rpm-platform-page">
      {/* Hero Section */}
      <section className="rpm-hero">
        <div className="rpm-hero-banner">
          <div className="rpm-hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1>RPM Platform</h1>
              <p>CarePro Command Center — Your 24/7 Virtual Clinic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="rpm-main-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="description-section">
              <p className="main-description">
                Built for doctors, nurses, and care coordinators, the CarePro AI platform ensures every patient is monitored round the clock.
              </p>
            </div>

            <div className="key-features-section">
              <h2>Key Features</h2>
              <ul className="features-list">
                <li><span>Real-time vitals dashboard</span></li>
                <li><span>AI anomaly alerts</span></li>
                <li><span>Patient engagement via calls/SMS/app notifications</span></li>
                <li><span>Audit-ready reports and billing data</span></li>
                <li><span>Multilingual support for India, US, and global markets</span></li>
              </ul>
            </div>

            <div className="cta-section">
              <button className="btn-primary" onClick={handleOpenDemo}>
                Request a Demo
              </button>
              <button className="btn-secondary" onClick={handleWatchVideo}>
                Watch Platform Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Components */}
      <DemoPopup isOpen={isDemoPopupOpen} onClose={handleCloseDemo} />
    </div>
  );
};

export default RPMPlatformPage;
