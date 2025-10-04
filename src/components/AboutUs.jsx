import React, { useState, useEffect, useRef } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [counts, setCounts] = useState({
    outcome1: 0,
    outcome2: 0,
    outcome3: 0,
    outcome4: 0,
    outcome5: 0,
    outcome6: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const animateCounters = () => {
    const targets = {
      outcome1: 99,  // 99% device accuracy
      outcome2: 75,  // 75% reduction in readmissions
      outcome3: 24,  // 24/7 monitoring coverage
      outcome4: 100, // 100% compliance standards
      outcome5: 60,  // 60% faster response time
      outcome6: 95   // 95% stakeholder satisfaction
    };

    const duration = 2000;
    const steps = 100;
    const stepDuration = duration / steps;
    
    Object.keys(targets).forEach((key) => {
      let current = 0;
      const target = targets[key];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });
  };

  return (
    <section className="about-us-section" ref={sectionRef}>
      <div className="about-us-container">
        <div className="about-content-wrapper">
          <div className="about-left-column">
            <h2>About CarePro</h2>
            <div className="about-text-content">
              <p>
                Every healthcare stakeholder has unique challenges—from reducing hospital readmissions to ensuring last-mile care delivery in rural areas. CarePro's Remote Patient Monitoring (RPM) ecosystem is designed to fit seamlessly into hospitals, clinics, government programs, insurance systems, and home healthcare agencies.
              </p>
              <p>
                Our FDA, CE, CDSCO-certified devices, coupled with ISO 13485, ISO 27001, ISO 9001 standards, and DPDPA compliance, ensure safety, accuracy, and trust for every partner.
              </p>
              <p>
                Our trained Care Coordinators (nurses at our office) ensure patients receive 24/7 assistance, coordinating between families, doctors, and hospitals within seconds.
              </p>
              <p>
                We are DPDPA-compliant, ensuring Indian data privacy laws are strictly followed, along with HIPAA and GDPR frameworks for global partners.
              </p>
            </div>
          </div>
          
          <div className="about-right-column">
            <div className="outcomes-grid">
              <div className="outcome-item">
                <div className="outcome-number">{counts.outcome1}%</div>
                <div className="outcome-description">
                  Device accuracy with FDA, CE, CDSCO-certified RPM technology.
                </div>
              </div>
              
              <div className="outcome-item">
                <div className="outcome-number">{counts.outcome2}%</div>
                <div className="outcome-description">
                  Reduction in hospital readmissions through real-time monitoring.
                </div>
              </div>
              
              <div className="outcome-item">
                <div className="outcome-number">{counts.outcome3}/7</div>
                <div className="outcome-description">
                  Continuous monitoring coverage with Care Coordinator support.
                </div>
              </div>
              
              <div className="outcome-item">
                <div className="outcome-number">{counts.outcome4}%</div>
                <div className="outcome-description">
                  Compliance with ISO 13485, ISO 27001, ISO 9001 standards.
                </div>
              </div>
              
              <div className="outcome-item">
                <div className="outcome-number">{counts.outcome5}%</div>
                <div className="outcome-description">
                  Faster response time with immediate Care Coordinator intervention.
                </div>
              </div>
              
              <div className="outcome-item">
                <div className="outcome-number">{counts.outcome6}%</div>
                <div className="outcome-description">
                  Stakeholder satisfaction across hospitals, clinics, and agencies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;