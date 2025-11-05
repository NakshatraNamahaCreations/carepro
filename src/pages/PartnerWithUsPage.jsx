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

      {/* Google Maps Section */}
      <section className="partner-map-section">
        <div className="container">
          <div className="map-wrapper">
            <h2>Find Us on Map</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184130894885!2d-73.98542868459384!3d40.75889597932691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Stellar RCM Location"
              ></iframe>
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
