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
                To revolutionize healthcare delivery by bringing comprehensive medical services directly to patients' homes, ensuring that quality healthcare is accessible, convenient, and personalized for every individual and family we serve.
              </p>
            </div>
          </div>
          
          <div className="vision-section">
            <div className="vision-number">02</div>
            <div className="vision-content">
              <h3>Our Vision</h3>
              <p>
                To become the leading provider of home healthcare services, setting new standards in patient care through innovative technology, compassionate service, and a commitment to improving the quality of life for patients and their families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
