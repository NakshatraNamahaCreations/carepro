import React, { useEffect, useState } from 'react';
import './WhyCareProPage.css';
import AppointmentPopup from '../components/AppointmentPopup';

const WhyCareProPage = () => {
  const [isAppointmentPopupOpen, setIsAppointmentPopupOpen] = useState(false);

  useEffect(() => {
    // Simple animation - add animate class to all feature items after a short delay
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate');
      }, index * 200);
    });
  }, []);

  const handleBookAppointment = (e) => {
    e.preventDefault();
    setIsAppointmentPopupOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentPopupOpen(false);
  };

  return (
    <div className="why-carepro-page">
      {/* Hero Section */}
      <section className="why-carepro-hero">
        <div className="why-carepro-banner">
          <div className="why-carepro-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Why Choose CarePro?</h1>
              <p>Discover what makes us the trusted choice for Remote Patient Monitoring (RPM) solutions across all healthcare stakeholders</p>
            </div>
          </div>
        </div>
      </section>


      {/* Why CarePro Stands Out - Animated Section */}
      <section className="stands-out-section">
        <div className="container">
          <div className="stands-out-header">
            <h2>Why CarePro <span className="highlight-text">Stands Out</span></h2>
            <p>Experience the difference with our innovative Remote Patient Monitoring (RPM) ecosystem designed for every healthcare stakeholder</p>
          </div>
          
          <div className="stands-out-content">
            <div className="feature-list">
              <div className="feature-item" data-delay="0">
                <div className="feature-number">01</div>
                <div className="feature-content">
                  <h3>FDA, CE, CDSCO-Certified Devices</h3>
                  <p>Our certified devices, coupled with ISO 13485, ISO 27001, ISO 9001 standards, and DPDPA compliance, ensure safety, accuracy, and trust for every healthcare partner.</p>
                </div>
                <div className="feature-line"></div>
              </div>

              <div className="feature-item" data-delay="200">
                <div className="feature-number">02</div>
                <div className="feature-content">
                  <h3>Multi-Stakeholder Solutions</h3>
                  <p>Every healthcare stakeholder has unique challenges—from reducing hospital readmissions to ensuring last-mile care delivery in rural areas. Our RPM ecosystem fits seamlessly into hospitals, clinics, government programs, insurance systems, and home healthcare agencies.</p>
                </div>
                <div className="feature-line"></div>
              </div>

              <div className="feature-item" data-delay="400">
                <div className="feature-number">03</div>
                <div className="feature-content">
                  <h3>Care Coordinator Support</h3>
                  <p>Our trained Care Coordinators (nurses at our office) are available within seconds to guide patients, families, and providers, providing 24/7 support and immediate response to abnormal readings.</p>
                </div>
                <div className="feature-line"></div>
              </div>

              <div className="feature-item" data-delay="600">
                <div className="feature-number">04</div>
                <div className="feature-content">
                  <h3>Seamless Integration</h3>
                  <p>Our RPM ecosystem integrates seamlessly with existing Hospital Management Systems (HMS), ensuring patient history, next steps, and long-term records are always updated with real-time monitoring data.</p>
                </div>
                <div className="feature-line"></div>
              </div>

              <div className="feature-item" data-delay="800">
                <div className="feature-number">05</div>
                <div className="feature-content">
                  <h3>Rural Healthcare Delivery</h3>
                  <p>Our 4G-enabled devices remove dependence on WiFi or smartphones, enabling last-mile healthcare delivery in underserved rural and remote areas, ensuring no patient's health deteriorates unnoticed.</p>
                </div>
                <div className="feature-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section">
        <div className="container">
          <div className="core-values-header">
            <h2>Our <span className="highlight-text">Core Values</span></h2>
            <p>The principles that guide our Remote Patient Monitoring (RPM) ecosystem at CarePro</p>
          </div>
          
          <div className="core-values-list">
            <div className="core-value-point">
              <div className="value-content">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div className="value-text">
                  <h3>Compassion First</h3>
                  <p>Every patient is a person, not just a data point. We combine technology with empathy to deliver true care.</p>
                </div>
              </div>
            </div>

            <div className="core-value-point">
              <div className="value-content">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <div className="value-text">
                  <h3>Equity in Access</h3>
                  <p>Healthcare is a right, not a privilege. We bring world-class monitoring and coordination to communities often left behind.</p>
                </div>
              </div>
            </div>

            <div className="core-value-point">
              <div className="value-content">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div className="value-text">
                  <h3>Proactive Care</h3>
                  <p>Prevention over crisis. We detect, monitor, and act early to avoid emergencies.</p>
                </div>
              </div>
            </div>

            <div className="core-value-point">
              <div className="value-content">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <circle cx="12" cy="16" r="1"></circle>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <div className="value-text">
                  <h3>Trust & Transparency</h3>
                  <p>Certified, compliant, and ethical practices that put patient safety and data privacy above all.</p>
                </div>
              </div>
            </div>

            <div className="core-value-point">
              <div className="value-content">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="value-text">
                  <h3>Collaboration</h3>
                  <p>Working hand-in-hand with doctors, nurses, caregivers, and families to create a seamless support ecosystem.</p>
                </div>
              </div>
            </div>

            <div className="core-value-point">
              <div className="value-content">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <div className="value-text">
                  <h3>Innovation with Purpose</h3>
                  <p>Leveraging technology not for the sake of novelty, but to solve real problems in chronic care and save lives.</p>
                </div>
              </div>
            </div>

            <div className="core-value-point">
              <div className="value-content">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M2 12h20"></path>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div className="value-text">
                  <h3>Global Mindset, Local Heart</h3>
                  <p>Starting with India's underserved cities, scaling to the world while respecting cultural and healthcare diversity.</p>
                </div>
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
              <h3>REMOTE PATIENT MONITORING ECOSYSTEM</h3>
              <p>
                CarePro's Remote Patient Monitoring (RPM) ecosystem seamlessly integrates with hospitals, clinics, government programs, 
                insurance systems, and home healthcare agencies. Our FDA, CE, CDSCO-certified devices address unique healthcare challenges 
                from reducing hospital readmissions to ensuring last-mile care delivery in rural areas.
              </p>
            </div>
            
            <div className="info-card">
              <h3>CERTIFIED DEVICES & COMPLIANCE</h3>
              <p>
                Our FDA, CE, CDSCO-certified devices, coupled with ISO 13485, ISO 27001, ISO 9001 standards, and DPDPA compliance, 
                ensure safety, accuracy, and trust for every healthcare partner. This comprehensive certification framework guarantees 
                the highest quality standards in remote patient monitoring technology.
              </p>
            </div>
            
            <div className="info-card">
              <h3>CARE COORDINATOR SUPPORT</h3>
              <p>
                Our Care Coordinators (nurses) provide 24/7 support, acting as an extension of your healthcare team. 
                They monitor patient vitals in real-time, respond immediately to abnormal readings, and ensure optimal 
                patient outcomes through continuous monitoring and immediate intervention when needed.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="how-we-work-section">
        <div className="container">
          <div className="how-we-work-header">
            <h2>How <span className="highlight-text">CarePro</span> Works</h2>
            <p>Our advanced healthcare technology ensures continuous monitoring and immediate response to your health needs</p>
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
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3>Device Distribution</h3>
                <p>Patient receives a CarePro-certified device (FDA, CE, CDSCO, ISO 13485).</p>
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
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6"></path>
                  </svg>
                </div>
                <h3>Automatic Monitoring</h3>
                <p>Device automatically records vitals and transmits via 4G/Bluetooth/WiFi.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">
                <div className="dot-inner">03</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3>Secure Processing</h3>
                <p>Data is securely processed and shown on the doctor's portal.</p>
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
                <h3>System Integration</h3>
                <p>Simultaneously, information is stored in the Hospital Management System.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">
                <div className="dot-inner">05</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3>Immediate Response</h3>
                <p>If an abnormal reading occurs, Care Coordinators contact the patient within seconds, while alerting the doctor for medical action.</p>
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
              <button className="btn-primary" onClick={handleBookAppointment}>Book Appointment</button>
            </div>
          </div>
        </div>
      </section>

      <AppointmentPopup 
        isOpen={isAppointmentPopupOpen} 
        onClose={handleCloseAppointment} 
      />
    </div>
  );
};

export default WhyCareProPage;
