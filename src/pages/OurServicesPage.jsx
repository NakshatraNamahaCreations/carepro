import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OurServicesPage.css';
import casestudy1 from '../assets/casestudy/casestudy1.jpg';
import ServicesSection from '../components/ServicesSection';
import ConsultationPopup from '../components/ConsultationPopup';

const OurServicesPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('revenue-cycle');
  const [currentStakeholder, setCurrentStakeholder] = useState(0);
  const [isConsultationPopupOpen, setIsConsultationPopupOpen] = useState(false);

  const stakeholders = [
    {
      id: 'hospitals',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18"/>
          <path d="M5 21V7l8-4v18"/>
          <path d="M19 21V11l-6-4"/>
          <path d="M9 9v.01"/>
          <path d="M9 12v.01"/>
          <path d="M9 15v.01"/>
          <path d="M9 18v.01"/>
        </svg>
      ),
      title: 'Hospitals & Clinics',
      challenges: [
        'High readmission rates',
        'Limited staff capacity to monitor discharged patients',
        'Difficulty integrating new devices with existing systems'
      ],
      solutions: [
        'Real-time patient vitals displayed directly in the doctor\'s portal',
        'HMS integration ensures patient history, next steps, and long-term records are always updated',
        'Care Coordinators (nurses at our office) act as an extension of the hospital team, contacting patients immediately on abnormal readings',
        'Certified devices (FDA, CE, CDSCO) guarantee clinical accuracy'
      ],
      benefits: [
        'Lower readmissions',
        'Smarter discharge planning',
        'Increased doctor efficiency',
        'Improved patient outcomes'
      ]
    },
    {
      id: 'homecare',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      ),
      title: 'Home Healthcare Agencies',
      challenges: [
        'Scaling care without adding staff',
        'Limited oversight between physical visits',
        'Families want continuous updates'
      ],
      solutions: [
        'Continuous monitoring with 4G/Bluetooth/WiFi devices that don\'t require patient training',
        'Families get peace of mind knowing a Care Coordinator nurse is always watching',
        'Real-time vitals help agencies respond faster, even outside normal visit schedules'
      ],
      benefits: [
        '24/7 nurse-led support',
        'Confidence for families',
        'Extended care coverage without additional staff burden'
      ]
    },
    {
      id: 'government',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18"/>
          <path d="M5 21V7l8-4v18"/>
          <path d="M19 21V11l-6-4"/>
          <path d="M9 9v.01"/>
          <path d="M9 12v.01"/>
          <path d="M9 15v.01"/>
          <path d="M9 18v.01"/>
        </svg>
      ),
      title: 'Government & Public Health Programs',
      challenges: [
        'Last-mile healthcare delivery in rural areas',
        'Ensuring devices are certified and compliant',
        'Building large-scale telehealth ecosystems'
      ],
      solutions: [
        '4G-enabled devices remove dependence on WiFi or smartphones',
        'Fully compliant with DPDPA (India), CDSCO, and ISO certifications',
        'Seamless integration with eSanjeevani and National Digital Health Mission (NDHM)',
        'Care Coordinators (nurses) provide real-time patient engagement at scale'
      ],
      benefits: [
        'Extend care to underserved communities',
        'Reduce healthcare inequality',
        'Build sustainable public health infrastructure'
      ]
    },
    {
      id: 'insurance',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
          <path d="M12 11h4"/>
          <path d="M12 16h4"/>
          <path d="M8 11h.01"/>
          <path d="M8 16h.01"/>
        </svg>
      ),
      title: 'Insurance & Payors',
      challenges: [
        'Rising claim costs due to preventable hospitalizations',
        'Limited access to real-time patient health data',
        'Difficulty validating long-term patient history'
      ],
      solutions: [
        'Historical vitals securely stored in Hospital Management Software for easy audits',
        'Early detection via CarePro reduces hospitalizations and claim costs',
        'Globally recognized certifications (FDA, CE, CDSCO, ISO) assure quality data for claims management'
      ],
      benefits: [
        'Preventive care lowers payouts',
        'Accurate records simplify claims validation',
        'Supports value-based healthcare models'
      ]
    },
    {
      id: 'physicians',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
          <path d="M12 14l3-3 3 3-3 3-3-3z"/>
        </svg>
      ),
      title: 'Physicians & Specialists',
      challenges: [
        'Managing multiple chronic patients remotely',
        'Limited visibility between clinic visits',
        'Need for accurate, secure data'
      ],
      solutions: [
        'Doctor Portal provides real-time vitals for every patient',
        'Integrated with HMS for historical comparisons',
        'Abnormal readings trigger Care Coordinator support, saving doctors time'
      ],
      benefits: [
        'Continuous patient visibility',
        'Faster, data-driven decisions',
        'Better patient satisfaction'
      ]
    }
  ];

  const nextStakeholder = () => {
    setCurrentStakeholder((prev) => (prev + 1) % stakeholders.length);
  };

  const prevStakeholder = () => {
    setCurrentStakeholder((prev) => (prev - 1 + stakeholders.length) % stakeholders.length);
  };

  const goToStakeholder = (index) => {
    setCurrentStakeholder(index);
  };

  const handleScheduleConsultation = (e) => {
    e.preventDefault();
    setIsConsultationPopupOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationPopupOpen(false);
  };

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const services = {
    'revenue-cycle': {
      title: 'Revenue Cycle Management',
      description: 'Comprehensive end-to-end revenue cycle management solutions to optimize your healthcare practice\'s financial performance.',
      features: [
        'Patient Registration & Eligibility Verification',
        'Insurance Authorization & Pre-certification',
        'Claims Submission & Follow-up',
        'Payment Posting & Reconciliation',
        'Denial Management & Appeals',
        'Patient Billing & Collections',
        'Financial Reporting & Analytics',
        'Compliance & Audit Support'
      ],
      benefits: [
        'Increase revenue by up to 15%',
        'Reduce claim denials by 40%',
        'Improve cash flow significantly',
        'Ensure compliance with regulations'
      ]
    },
    'medical-billing': {
      title: 'Medical Billing Services',
      description: 'Professional medical billing services that ensure accurate, timely, and compliant billing processes for your practice.',
      features: [
        'CPT & ICD-10 Coding',
        'Electronic Claims Submission',
        'Insurance Verification',
        'Payment Processing',
        'Patient Statements',
        'Aging Report Management',
        'Insurance Follow-up',
        'Refund Processing'
      ],
      benefits: [
        '99.5% accuracy rate',
        'Faster payment processing',
        'Reduced administrative burden',
        'Expert coding compliance'
      ]
    },
    'medical-coding': {
      title: 'Medical Coding Services',
      description: 'Expert medical coding services with certified coders ensuring accurate documentation and maximum reimbursement.',
      features: [
        'ICD-10-CM Diagnosis Coding',
        'CPT Procedure Coding',
        'HCPCS Level II Coding',
        'Modifier Application',
        'Coding Audits & Reviews',
        'Documentation Improvement',
        'Compliance Training',
        'Quality Assurance'
      ],
      benefits: [
        'Certified professional coders',
        'Reduced coding errors',
        'Improved documentation quality',
        'Enhanced reimbursement rates'
      ]
    },
    'payers-solution': {
      title: 'Payers Solution',
      description: 'Specialized solutions for healthcare payers to streamline operations, improve efficiency, and enhance member satisfaction.',
      features: [
        'Claims Processing & Adjudication',
        'Provider Network Management',
        'Member Services & Support',
        'Utilization Management',
        'Quality Assurance Programs',
        'Fraud Detection & Prevention',
        'Regulatory Compliance',
        'Data Analytics & Reporting'
      ],
      benefits: [
        'Streamlined operations',
        'Improved member satisfaction',
        'Enhanced fraud detection',
        'Better cost management'
      ]
    }
  };

  const stats = [
    { number: '500+', label: 'Healthcare Providers Served' },
    { number: '99.5%', label: 'Claims Accuracy Rate' },
    { number: '15%', label: 'Average Revenue Increase' },
    { number: '24/7', label: 'Support Availability' }
  ];

  const testimonials = [
    {
      name: 'Family Member',
      role: 'Patient Family',
      practice: 'Home Care Patient',
      content: 'The Care Coordinator team gave us confidence. My father got immediate support when his BP spiked.',
      rating: 5
    },
    {
      name: 'Hospital Director',
      role: 'Hospital Director',
      practice: 'Metro General Hospital',
      content: 'Our hospital trusts CarePro\'s certified devices because they\'re FDA, CE, and CDSCO approved. Integration with our HMS has been seamless.',
      rating: 5
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Cardiologist',
      practice: 'Heart Care Specialists',
      content: 'The real-time monitoring alerts help me intervene quickly. My patients feel safer knowing they\'re being watched 24/7.',
      rating: 5
    },
    {
      name: 'Nurse Manager',
      role: 'Nursing Supervisor',
      practice: 'Community Health Center',
      content: 'CarePro\'s devices are so easy to use. Our elderly patients can operate them independently, and we get accurate readings every time.',
      rating: 5
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Family Physician',
      practice: 'Primary Care Clinic',
      content: 'The Care Coordinators are like having a dedicated nursing team. They catch issues before they become emergencies.',
      rating: 5
    },
    {
      name: 'Patient Caregiver',
      role: 'Family Caregiver',
      practice: 'Home Care Setting',
      content: 'Knowing that professionals are monitoring my mother\'s vitals gives me peace of mind. The response time is incredible.',
      rating: 5
    },
    {
      name: 'Dr. Maria Santos',
      role: 'Emergency Physician',
      practice: 'City Emergency Hospital',
      content: 'The early warning system has prevented multiple cardiac events. CarePro\'s technology saves lives every day.',
      rating: 5
    },
    {
      name: 'Healthcare Administrator',
      role: 'Quality Assurance Manager',
      practice: 'Regional Medical Center',
      content: 'Compliance with healthcare standards has never been easier. CarePro ensures we meet all regulatory requirements.',
      rating: 5
    }
  ];

  return (
    <div className="our-services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-banner">
          <div className="services-hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Our Services</h1>
              <p>Comprehensive healthcare solutions designed to optimize your practice's performance and patient care</p>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection/>
      
      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-header">
            <h2>Our Process</h2>
            <p>Seamless integration of our Remote Patient Monitoring ecosystem across all healthcare stakeholders</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Ecosystem Integration</h3>
                <p>CarePro's Remote Patient Monitoring (RPM) ecosystem seamlessly integrates with hospitals, clinics, government programs, insurance systems, and home healthcare agencies to address unique healthcare challenges.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Certified Device Deployment</h3>
                <p>Our FDA, CE, CDSCO-certified devices, coupled with ISO 13485, ISO 27001, ISO 9001 standards, and DPDPA compliance, ensure safety, accuracy, and trust for every partner.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Real-time Monitoring</h3>
                <p>Continuous patient monitoring with 4G/Bluetooth/WiFi connectivity enables real-time vitals tracking, reducing hospital readmissions and ensuring last-mile care delivery in rural areas.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Care Coordinator Support</h3>
                <p>Our Care Coordinators (nurses) provide 24/7 support, acting as an extension of your healthcare team to ensure immediate response to abnormal readings and optimal patient outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="services-testimonials">
        <div className="container">
          <div className="testimonials-header">
            <h2>What Our Clients Say</h2>
            <p>Success stories from healthcare providers who trust us</p>
          </div>
          
          <div className="testimonials-marquee">
            <div className="marquee-track">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="quote-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                      </svg>
                    </div>
                    <p>"{testimonial.content}"</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                      <span className="practice">{testimonial.practice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Solutions Section */}
      <section className="stakeholder-solutions">
        <div className="container">
          <div className="stakeholder-header">
            <h2>Solutions for Every Healthcare Stakeholder</h2>
            <p>Comprehensive CarePro solutions tailored to meet the unique needs of different healthcare organizations</p>
          </div>

          <div className="stakeholder-carousel">
            <div className="carousel-container">
              <button className="carousel-arrow carousel-prev" onClick={prevStakeholder}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="carousel-track">
                <div className="carousel-slide" style={{ transform: `translateX(-${currentStakeholder * 100}%)` }}>
                  {stakeholders.map((stakeholder, index) => (
                    <div key={stakeholder.id} className="stakeholder-card">
                      <div className="stakeholder-icon">
                        <div className="icon-wrapper">
                          {stakeholder.icon}
                        </div>
                      </div>
                      <h3>{stakeholder.title}</h3>
                      
                      <div className="challenges-section">
                        <h4>Challenges {stakeholder.title.split(' ')[0]} Face:</h4>
                        <ul>
                          {stakeholder.challenges.map((challenge, idx) => (
                            <li key={idx}>{challenge}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="solution-section">
                        <h4>CarePro Solution:</h4>
                        <ul>
                          {stakeholder.solutions.map((solution, idx) => (
                            <li key={idx}>{solution}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="benefits-section">
                        <h4>Key Benefits:</h4>
                        <div className="benefits-list">
                          {stakeholder.benefits.map((benefit, idx) => (
                            <span key={idx} className="benefit">✅ {benefit}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="carousel-arrow carousel-next" onClick={nextStakeholder}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="carousel-dots">
              {stakeholders.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentStakeholder ? 'active' : ''}`}
                  onClick={() => goToStakeholder(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Practice?</h2>
            <p>Let us help you optimize your healthcare operations and improve patient outcomes</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={handleGetStarted}>Get Started</button>
              <button className="btn-secondary" onClick={handleScheduleConsultation}>Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationPopup 
        isOpen={isConsultationPopupOpen} 
        onClose={handleCloseConsultation} 
      />
    </div>
  );
};

export default OurServicesPage;
