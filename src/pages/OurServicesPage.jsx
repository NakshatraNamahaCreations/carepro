import React, { useState } from 'react';
import './OurServicesPage.css';
import casestudy1 from '../assets/casestudy/casestudy1.jpg';
import ServicesSection from '../components/ServicesSection';

const OurServicesPage = () => {
  const [activeTab, setActiveTab] = useState('revenue-cycle');

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
      name: 'Dr. Sarah Johnson',
      role: 'Medical Director',
      practice: 'City Medical Center',
      content: 'Care Pro transformed our revenue cycle management. We\'ve seen a 20% increase in collections and significantly reduced our administrative burden.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Practice Manager',
      practice: 'Family Health Clinic',
      content: 'Their medical coding expertise is outstanding. Our documentation quality improved dramatically, and we\'re getting better reimbursement rates.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Billing Director',
      practice: 'Specialty Medical Group',
      content: 'The team at Care Pro is professional, responsive, and knowledgeable. They\'ve helped us streamline our entire billing process.',
      rating: 5
    },
    {
      name: 'Dr. James Wilson',
      role: 'Chief Medical Officer',
      practice: 'Regional Healthcare System',
      content: 'Outstanding service! Our revenue cycle efficiency improved by 35% within the first quarter. Highly recommend Care Pro.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Finance Director',
      practice: 'Metro Health Network',
      content: 'The analytics and reporting features are exceptional. We now have complete visibility into our financial performance.',
      rating: 5
    },
    {
      name: 'Dr. Robert Martinez',
      role: 'Practice Owner',
      practice: 'Premier Medical Associates',
      content: 'Professional, reliable, and cost-effective. Care Pro has become an integral part of our practice operations.',
      rating: 5
    },
    {
      name: 'Jennifer Lee',
      role: 'Operations Manager',
      practice: 'Advanced Care Clinic',
      content: 'Their support team is incredible. Quick response times and always available when we need assistance.',
      rating: 5
    },
    {
      name: 'Dr. Amanda Foster',
      role: 'Clinical Director',
      practice: 'Wellness Medical Group',
      content: 'The implementation was seamless. Our staff adapted quickly and we saw immediate improvements in our workflow.',
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
            <p>Compassionate, at‑home elder care—from first visit to ongoing support</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Patient Monitoring</h3>
                <p>Our nurse visits your home to understand medical history, mobility, medications, daily routines, and safety needs—keeping elders comfortable and heard.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Personalized Care Plan</h3>
                <p>Together we create a simple, clear plan: medication schedules, vitals tracking, hydration/nutrition, fall‑prevention, and doctor consultation cadence.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Care at Home</h3>
                <p>Our caregivers administer medicines on time, check BP/SpO₂/temperature, coordinate tele‑/in‑person doctor consults, and support daily activities.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Ongoing Monitoring & Updates</h3>
                <p>We track health changes, adjust the plan with your doctor, and keep family informed—prioritizing safety, comfort, and dignity at every step.</p>
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

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Practice?</h2>
            <p>Let us help you optimize your healthcare operations and improve patient outcomes</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServicesPage;
