import React, { useEffect } from 'react';
import './WhyCareProPage.css';
import ServicesSection from '../components/ServicesSection';
const WhyCareProPage = () => {
  useEffect(() => {
    // Simple animation - add animate class to all feature items after a short delay
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate');
      }, index * 200);
    });
  }, []);

  return (
    <div className="why-carepro-page">
      {/* Hero Section */}
      <section className="why-carepro-hero">
        <div className="why-carepro-banner">
          <div className="why-carepro-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Why Choose CarePro?</h1>
              <p>Discover what makes us the trusted choice for home healthcare services</p>
            </div>
          </div>
        </div>
      </section>


      {/* Why CarePro Stands Out - Animated Section */}
      <section className="stands-out-section">
        <div className="container">
          <div className="stands-out-header">
            <h2>Why CarePro <span className="highlight-text">Stands Out</span></h2>
            <p>Experience the difference with our innovative approach to home healthcare</p>
          </div>
          
          <div className="stands-out-content">
            <div className="feature-list">
              <div className="feature-item" data-delay="0">
                <div className="feature-number">01</div>
                <div className="feature-content">
                  <h3>Revolutionary Home Healthcare</h3>
                  <p>We've transformed traditional healthcare by bringing world-class medical services directly to your doorstep, eliminating the need for hospital visits and long waiting times.</p>
                </div>
                <div className="feature-line"></div>
              </div>

              <div className="feature-item" data-delay="200">
                <div className="feature-number">02</div>
                <div className="feature-content">
                  <h3>Advanced Technology Integration</h3>
                  <p>Our cutting-edge medical technology combined with user-friendly digital platforms ensures accurate diagnostics and seamless communication between patients and healthcare providers.</p>
                </div>
                <div className="feature-line"></div>
              </div>

              <div className="feature-item" data-delay="400">
                <div className="feature-number">03</div>
                <div className="feature-content">
                  <h3>Personalized Care Experience</h3>
                  <p>Every patient receives individualized attention with customized treatment plans that adapt to your specific needs, lifestyle, and medical history for optimal health outcomes.</p>
                </div>
                <div className="feature-line"></div>
              </div>

              <div className="feature-item" data-delay="600">
                <div className="feature-number">04</div>
                <div className="feature-content">
                  <h3>Comprehensive Service Range</h3>
                  <p>From routine check-ups to specialized treatments, we offer a complete spectrum of healthcare services, making us your one-stop solution for all medical needs at home.</p>
                </div>
                <div className="feature-line"></div>
              </div>

              <div className="feature-item" data-delay="800">
                <div className="feature-number">05</div>
                <div className="feature-content">
                  <h3>Trusted by Thousands</h3>
                  <p>With over 10,000 satisfied patients and a 98% satisfaction rate, our proven track record speaks volumes about our commitment to excellence and patient care.</p>
                </div>
                <div className="feature-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Services Information Section */}
      <section className="healthcare-info-section">
        <div className="container">
          <div className="info-header">
            <h2>HEALTHCARE SERVICES INFORMATION</h2>
            <div className="header-underline"></div>
          </div>
          
          <div className="info-cards">
            <div className="info-card">
              <h3>COMPREHENSIVE HEALTHCARE SERVICES</h3>
              <p>
                If you need professional healthcare services for medical conditions and recovery, get it from CarePro. 
                Check our comprehensive healthcare services and book your required treatment online, via email or over a phone call. 
                Our qualified healthcare specialists will visit you at your doorstep.
              </p>
            </div>
            
            <div className="info-card">
              <h3>BENEFITS OF HEALTHCARE AT HOME</h3>
              <p>
                Getting healthcare treatment at your doorstep has never been this convenient. During critical phases of life, 
                you or your loved one might need to rely on professional healthcare to get back to normal life. CarePro offers 
                a wide range of healthcare services making medical care more accessible and affordable for you.
              </p>
            </div>
            
            <div className="info-card">
              <h3>HOW CAN WE HELP</h3>
              <p>
                Our team of certified healthcare professionals provides personalized care tailored to your specific needs. 
                From routine check-ups to specialized treatments, we ensure you receive the highest quality medical care 
                in the comfort of your own home, with 24/7 support and flexible scheduling options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Statistics Section */}
      

      {/* Testimonials Section */}
      
      {/* CTA Section */}
      <section className="why-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience CarePro?</h2>
            <p>Transform your healthcare experience with our innovative home care solutions</p>
            <div className="cta-buttons">
              <button className="btn-primary">Book Appointment</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyCareProPage;
