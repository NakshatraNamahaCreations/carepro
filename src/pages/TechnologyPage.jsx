import React, { useState } from 'react';
import './TechnologyPage.css';
import DemoPopup from '../components/DemoPopup';

const TechnologyPage = () => {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoPopupOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoPopupOpen(false);
  };

  return (
    <div className="technology-page">
      {/* Hero Section */}
      <section className="tech-hero">
        <div className="tech-hero-banner">
          <div className="tech-hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Intelligent Platform. Human-Centered Design.</h1>
              <p>Our AI engine analyzes patient data streams in real-time to detect anomalies and predict potential health risks before they become emergencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="tech-main-content">
        <div className="container">
          <div className="content-wrapper">
            {/* <div className="description-section">
              <p className="main-description">
                Our AI engine analyzes patient data streams in real-time to detect anomalies and predict potential health risks before they become emergencies.
              </p>
            </div> */}

            <div className="features-section">
              <h2>Features:</h2>
              <ul className="features-list">
                <li><span>AI-enabled dashboards for physicians</span></li>
                <li><span>Multi-device integration (BP, ECG, Glucometer, Pulse Oximeter, etc.)</span></li>
                <li><span>Secure, cloud-hosted HIPAA-compliant infrastructure</span></li>
                <li><span>Seamless API connectivity with popular EMRs</span></li>
                <li><span>Adaptive alerts based on patient-specific baselines</span></li>
              </ul>
            </div>

            <div className="tagline-section">
              <h2 className="tagline">Smarter tech. Safer patients. Stronger outcomes.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Components */}
      <DemoPopup isOpen={isDemoPopupOpen} onClose={handleCloseDemo} />
    </div>
  );
};

export default TechnologyPage;
