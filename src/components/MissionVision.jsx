import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="mission-vision-container">
        <div className="mission-vision-content">
          <div className="mission-section">
            <div className="mission-number">01</div>
            <div className="mission-content">
              <h3>Our Mission</h3>
              <p>
              To empower every healthcare stakeholder—from hospitals to rural clinics—with seamless Remote Patient Monitoring (RPM) solutions that address unique challenges. We bridge technology, clinical expertise, and human touch to ensure every patient receives continuous, reliable care regardless of location or circumstance.
              </p>
            </div>
          </div>
          
          <div className="vision-section">
            <div className="vision-number">02</div>
            <div className="vision-content">
              <h3>Our Vision</h3>
              <p>
              To become the world's most trusted Remote Patient Monitoring (RPM) ecosystem—starting in India and expanding globally—by transforming healthcare accessibility through FDA, CE, CDSCO-certified devices and ISO-compliant solutions that ensure no patient's health deteriorates unnoticed, regardless of their location or healthcare infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
