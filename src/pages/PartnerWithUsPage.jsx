import React, { useState } from 'react';
import './PartnerWithUsPage.css';
import PartnershipPopup from '../components/PartnershipPopup';

const PartnerWithUsPage = () => {
  const [isPartnershipPopupOpen, setIsPartnershipPopupOpen] = useState(false);

  const handleOpenPartnership = () => {
    setIsPartnershipPopupOpen(true);
  };

  const handleClosePartnership = () => {
    setIsPartnershipPopupOpen(false);
  };


  return (
    <div className="partner-with-us-page">
      {/* Hero Section */}
      <section className="partner-hero">
        <div className="partner-hero-banner">
          <div className="partner-hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Only Partners</h1>
              <p>Join Hands to Deliver Smarter Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="partner-main-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="description-section">
              <h2>CarePro AI Health partners with:</h2>
            </div>

            {/* Partners List Section */}
            <div className="partners-list-section">
              <ul className="partners-list">
                <li>Hospitals & Clinics</li>
                <li>Home Health Agencies</li>
                <li>RPM Providers (US / Global)</li>
                <li>Insurance Companies</li>
                <li>Research & Clinical Trials</li>
              </ul>
            </div>

            {/* Why Partner Section */}
            <div className="why-partner-section">
              <h2>Why Partners With Us:</h2>
              <ul className="why-partner-list">
                <li>Global team with US healthcare experience</li>
                <li>Ready-to-deploy RPM kits</li>
                <li>AI-driven analytics that improve outcomes</li>
                <li>Dedicated operations & compliance team</li>
              </ul>
              <div className="why-partner-cta">
                <button className="btn-primary" onClick={handleOpenPartnership}>
                  Become a Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Popup Components */}
      <PartnershipPopup isOpen={isPartnershipPopupOpen} onClose={handleClosePartnership} />
    </div>
  );
};

export default PartnerWithUsPage;
