import React, { useState } from 'react';
import MissionVision from '../components/MissionVision';
import './AboutPage.css';
import CaseStudySlider from '../components/CaseStudySlider'

const AboutPage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
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
              Professional healthcare delivered to your doorstep. CarePro brings comprehensive medical services 
              directly to your home with certified healthcare professionals ensuring safe, comfortable care. 
              Get results in 12-72 hours via secure portal. All equipment sterilized to highest standards. 
              24/7 customer support and flexible scheduling available. Trusted by thousands of families for 
              reliable home healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked <span className="highlight-text">Questions</span></h2>
            <p>Find answers to common questions about our home healthcare services</p>
          </div>
          
          <div className="faq-accordion">
            <div className={`accordion-item ${openAccordion === 0 ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(0)}>
                <h3>What services does CarePro offer?</h3>
                <span className="accordion-icon">+</span>
              </div>
              <div className="accordion-content">
                <p>
                  CarePro offers comprehensive home healthcare services including medical consultations, 
                  diagnostic tests, sample collection, nursing care, physiotherapy, and specialized treatments. 
                  Our certified healthcare professionals provide personalized care tailored to your specific 
                  medical needs, all in the comfort of your home.
                </p>
              </div>
            </div>

            <div className={`accordion-item ${openAccordion === 1 ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(1)}>
                <h3>How quickly can I get my test results?</h3>
                <span className="accordion-icon">+</span>
              </div>
              <div className="accordion-content">
                <p>
                  Most test results are available within 12-72 hours through our secure online portal or mobile app. 
                  Critical results are prioritized and delivered even faster. You'll receive notifications via SMS 
                  and email as soon as your results are ready, ensuring you stay informed about your health status.
                </p>
              </div>
            </div>

            <div className={`accordion-item ${openAccordion === 2 ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(2)}>
                <h3>Are your healthcare professionals certified?</h3>
                <span className="accordion-icon">+</span>
              </div>
              <div className="accordion-content">
                <p>
                  Yes, all our healthcare professionals are fully certified and licensed. Our team includes 
                  registered nurses, qualified doctors, certified phlebotomists, and specialized therapists. 
                  We maintain the highest standards of medical practice and ensure all staff undergo regular 
                  training and background verification.
                </p>
              </div>
            </div>

            <div className={`accordion-item ${openAccordion === 3 ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(3)}>
                <h3>How do I schedule an appointment?</h3>
                <span className="accordion-icon">+</span>
              </div>
              <div className="accordion-content">
                <p>
                  Scheduling is easy and convenient. You can book appointments through our website, mobile app, 
                  or by calling our 24/7 customer support. Simply select your preferred date and time, and our 
                  team will confirm the appointment. We offer flexible scheduling including weekends and holidays 
                  to accommodate your needs.
                </p>
              </div>
            </div>

            <div className={`accordion-item ${openAccordion === 4 ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(4)}>
                <h3>What areas do you serve?</h3>
                <span className="accordion-icon">+</span>
              </div>
              <div className="accordion-content">
                <p>
                  CarePro currently serves over 50 cities across the country, with plans for continuous expansion. 
                  Our service areas include major metropolitan cities and surrounding suburbs. You can check our 
                  website or contact our support team to confirm if we serve your specific location.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

     
      
      

      {/* Team Section */}
      
    </div>
  );
};

export default AboutPage;
