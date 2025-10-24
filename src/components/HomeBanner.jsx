import React, { useState } from "react";
import "./HomeBanner.css";
import home1 from "../assets/home_banner/home1.jpg";
import DemoPopup from "./DemoPopup";
import PartnershipPopup from "./PartnershipPopup";

const HomeBanner = () => {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);
  const [isPartnershipPopupOpen, setIsPartnershipPopupOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoPopupOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoPopupOpen(false);
  };

  const handleOpenPartnership = () => {
    setIsPartnershipPopupOpen(true);
  };

  const handleClosePartnership = () => {
    setIsPartnershipPopupOpen(false);
  };

  return (
    <div className="home-banner">
      <div
        className="home-banner-background"
        style={{ backgroundImage: `url(${home1})` }}
      />
      <div className="home-banner-overlay" />
      <div className="home-banner-content">
        <div className="home-banner-container">
          <h1 className="home-banner-heading">
            Revolutionizing Remote Patient Monitoring with AI Precision
          </h1>
          <p className="home-banner-description">
            Empowering care teams with real-time insights, predictive analytics,
            and proactive health management — anywhere, anytime.
          </p>
          <div className="home-banner-cta-buttons">
            <button onClick={handleOpenDemo} className="btn-main btn-primary">
              Book a Demo
            </button>
            <button
              onClick={handleOpenPartnership}
              className="btn-main btn-secondary"
            >
              Partner with Us
            </button>
          </div>
        </div>
      </div>

      {/* Popup Components */}
      <DemoPopup isOpen={isDemoPopupOpen} onClose={handleCloseDemo} />
      <PartnershipPopup
        isOpen={isPartnershipPopupOpen}
        onClose={handleClosePartnership}
      />
    </div>
  );
};

export default HomeBanner;
