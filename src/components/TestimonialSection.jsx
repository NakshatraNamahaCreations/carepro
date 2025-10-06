import React from 'react';
import './TestimonialSection.css';
import fingerprint from '../assets/fingerprint-837x961-1.png';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-main">
          <div className="testimonial-image">
            <img 
              src={fingerprint} 
              alt="fingerprint" 
              width="540" 
              height="620" 
              loading="lazy"
            />
          </div>
          <div className="testimonial-content">
            <div className="testimonial-content-inner">
              <div className="testimonial-details">
                <p>
                Every healthcare stakeholder has unique challenges — from reducing hospital readmissions to ensuring last-mile care delivery in rural areas. CarePro's Remote Patient Monitoring (RPM) ecosystem is designed to fit seamlessly into hospitals, clinics, government programs, insurance systems, and home healthcare agencies.
                </p>
                <p>Our FDA, CE, CDSCO-certified devices, coupled with ISO 13485, ISO 27001, ISO 9001 standards, and DPDPA compliance, ensure safety, accuracy, and trust for every partner.</p>
              </div>
              <div className="testimonial-person-info">
                <span className="name">CarePro -</span>
               
              </div>
            </div>
            
            <div className="quick-stats">
              <h3>Quick Stats / Highlights</h3>
              <ul className="stats-list">
                <li>24/7 Remote Monitoring Support</li>
                <li>99.9% Response Accuracy</li>
                <li>HIPAA & GDPR Compliant</li>
                <li>4G-Enabled Devices for Rural Reach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
