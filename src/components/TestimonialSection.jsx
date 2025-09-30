import React from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-main">
          <div className="testimonial-image">
            <img 
              src="/src/assets/fingerprint-837x961-1.png" 
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
                Every healthcare stakeholder has unique challenges — from reducing hospital readmissions to ensuring last-mile care delivery in rural areas. CarePro’s Remote Patient Monitoring (RPM) ecosystem is designed to fit seamlessly into hospitals, clinics, government programs, insurance systems, and home healthcare agencies.
                </p>
                <p>Our FDA, CE, CDSCO-certified devices, coupled with ISO 13485, ISO 27001, ISO 9001 standards, and DPDPA compliance, ensure safety, accuracy, and trust for every partner.</p>
              </div>
              <div className="testimonial-person-info">
                <span className="name">CarePro -</span>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
