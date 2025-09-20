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
                  "At Care Pro, we have revolutionized healthcare delivery by bringing comprehensive medical services directly to patients' homes. Our commitment to excellence, innovative technology solutions, and compassionate care have made us a trusted partner in transforming how healthcare is delivered. We believe that quality medical care should be accessible, convenient, and personalized for every individual and family we serve."
                </p>
              </div>
              <div className="testimonial-person-info">
                <span className="name">Care Pro</span>
                <span className="designation">Leading Home Healthcare Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
