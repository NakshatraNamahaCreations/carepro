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
      outcome1: 85,  // 85% faster recovery rates
      outcome2: 70,  // 70% reduction in readmissions
      outcome3: 35,  // 35% improvement in medication adherence
      outcome4: 98,  // 98% patient satisfaction rate
      outcome5: 25,  // 25% cost savings for families
      outcome6: 40   // 40% improvement in quality of life
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
            <h2>About Care Pro</h2>
            <div className="about-text-content">
              <p>
                Home Healthcare. Medical Technology. Patient Care. Advanced Analytics. For patients and families, these are key factors of healing. For us, they're our core expertise.
              </p>
              <p>
                We work with healthcare professionals and deliver comprehensive home healthcare services for rapid recovery and improved quality of life.
              </p>
              <p>
                We've served thousands of patients with personalized care plans, utilizing cutting-edge medical technology and evidence-based practices. We drive healthcare innovation, optimize patient outcomes, transform care delivery, and pioneer new solutions through our "at-home healthcare" model.
              </p>
              <p>
                For each patient, we provide comprehensive care for their health, the families they love, and the communities they serve. With proven medical strategies and compassionate execution, we don't just treat conditions – we heal lives.
              </p>
            </div>
          </div>
          
          <div className="about-right-column">
            <div className="outcomes-grid">
              <div className="outcome-item">
                <div className="outcome-number">{counts.outcome1}%</div>
                <div className="outcome-description">
                  Faster recovery rates for patients receiving our home healthcare services.
                </div>
              </div>
              
              <div className="outcome-item">
                <div className="outcome-number">{counts.outcome2}%</div>
                <div className="outcome-description">
                  Reduction in hospital readmissions through our preventive care programs.
                </div>
              </div>
              
              <div className="outcome-item">
                <div className="outcome-number">{counts.outcome3}%</div>
                <div className="outcome-description">
                  Improvement in medication adherence with our medication management.
                </div>
              </div>
              
              <div className="outcome-item">
                <div className="outcome-number">{counts.outcome4}%</div>
                <div className="outcome-description">
                  Patient satisfaction rate with our personalized care approach.
                </div>
              </div>
              
              <div className="outcome-item">
                <div className="outcome-number">{counts.outcome5}%</div>
                <div className="outcome-description">
                  Cost savings for families through our comprehensive home care.
                </div>
              </div>
              
              <div className="outcome-item">
                <div className="outcome-number">{counts.outcome6}%</div>
                <div className="outcome-description">
                  Improvement in quality of life for our chronic disease patients.
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