import React from 'react';
import MissionVision from '../components/MissionVision';
import './AboutPage.css';
import CaseStudySlider from '../components/CaseStudySlider'

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-banner">
          <div className="about-hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1>About StellarRCM</h1>
              <p>Transforming healthcare delivery through innovative home care solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Company Overview - Our Story */}
      <section className="company-overview">
        <div className="container">
                <div className="story-header">
                  <h2>Our Story</h2>
                  <p className="story-subtitle">From vision to reality, transforming healthcare one home at a time</p>
                </div>
          
          <div className="overview-content">
            <div className="overview-text">
              <div className="story-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <h3>2018 - The Beginning</h3>
                    <p>
                      CarePro was founded with a simple yet powerful vision: to bring world-class healthcare 
                      directly to patients' homes. We believe that healing happens best in familiar surroundings, 
                      surrounded by loved ones and the comfort of home.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <h3>2020 - Innovation & Growth</h3>
                    <p>
                      We pioneered the integration of cutting-edge medical technology with compassionate care, 
                      establishing ourselves as leaders in home healthcare innovation and expanding our reach 
                      to serve thousands of patients across multiple cities.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <h3>2024 - Today & Beyond</h3>
                    <p>
                      Today, we continue to set new standards in home healthcare delivery, combining advanced 
                      medical technology with personalized care to ensure exceptional outcomes for every patient 
                      and family we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="overview-image">
              <div className="story-visual">
                <div className="visual-card main-card">
                  <div className="card-image">
                    <img src="/src/assets/aboutus/about_banner.jpg" alt="About StellarRCM" />
                  </div>
                  <h4>Our Journey</h4>
                  <p>Transforming healthcare through innovation</p>
                </div>
                <div className="visual-card secondary-card">
                  <div className="card-image">
                    <img src="/src/assets/casestudy/casestudy3.jpg" alt="Healthcare Excellence" />
                  </div>
                  <h4>Healthcare Excellence</h4>
                  <p>Proven track record of success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CaseStudySlider />

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-choose-header">
            <h2>Why Choose Our <span className="highlight-text">Healthcare Services</span>?</h2>
          </div>
          
          <div className="why-choose-content">
            <p>
              Professional healthcare delivered to your doorstep. NABL certified labs ensure accurate results. 
              Certified professionals provide safe, comfortable care. Get results in 12-72 hours via secure portal. 
              All equipment sterilized to highest standards. 24/7 customer support and flexible scheduling available.
            </p>
          </div>
        </div>
      </section>

     
      
      

      {/* Team Section */}
      
    </div>
  );
};

export default AboutPage;
