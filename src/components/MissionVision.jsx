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
              To make proactive, predictive, and personalized care accessible to every individual. We empower every patient—especially in underserved communities—with continuous, reliable, and compassionate remote care by bridging technology, clinical expertise, and human touch. CarePro ensures that chronic conditions are monitored in real time, reducing risks and enabling healthier, longer lives without unnecessary emergencies.
              </p>
            </div>
          </div>
          
          <div className="vision-section">
            <div className="vision-number">02</div>
            <div className="vision-content">
              <h3>Our Vision</h3>
              <p>
              To become the world's most trusted AI-driven healthcare companion—by transforming healthcare accessibility in tier 2, 3, and 4 cities where medical resources are scarce, ensuring that no patient's health deteriorates unnoticed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
