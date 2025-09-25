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
                  <h3>Patient Monitoring </h3>
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
      <section className="how-we-work-section">
        <div className="container">
          <div className="how-we-work-header">
            <h2>How We <span className="highlight-text">Work</span></h2>
            <p>Our streamlined process ensures you receive the best care in the comfort of your home</p>
          </div>
          
          <div className="process-timeline">
            <div className="timeline-line"></div>
            
            <div className="timeline-item">
              <div className="timeline-dot">
                <div className="dot-inner">01</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <h3>Book Your Appointment</h3>
                <p>Schedule your healthcare service through our website, app, or phone call. Choose your preferred date and time.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">
                <div className="dot-inner">02</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3>Healthcare Professional Arrives</h3>
                <p>Our certified healthcare professional arrives at your doorstep with all necessary equipment and supplies.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">
                <div className="dot-inner">03</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4m0-7v7m0-7h10a2 2 0 0 1 2 2v3c0 1.1-.9 2-2 2H9m0-7V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"></path>
                  </svg>
                </div>
                <h3>Receive Quality Care</h3>
                <p>Get professional medical care in the comfort of your home with personalized attention and treatment.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">
                <div className="dot-inner">04</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                </div>
                <h3>Get Your Results</h3>
                <p>Receive your test results and medical reports within 12-72 hours through our secure online portal.</p>
              </div>
            </div>
          </div>

          <div className="process-benefits">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
              </div>
              <span>Quick & Efficient</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <span>Certified Professionals</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <span>Safe & Secure</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      

      {/* Testimonials Section */}
      
      {/* CTA Section */}
      <section className="why-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience CarePro?</h2>
            <p>Transform your healthcare experience with our innovative patient monitoring solutions</p>
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
