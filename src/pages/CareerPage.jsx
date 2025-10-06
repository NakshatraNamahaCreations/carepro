import React, { useState } from 'react';
import './CareerPage.css';
import DemoPopup from '../components/DemoPopup';
import JobApplicationPopup from '../components/JobApplicationPopup';

const CareerPage = () => {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);
  const [isJobApplicationOpen, setIsJobApplicationOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');

  const handleOpenDemo = () => {
    setIsDemoPopupOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoPopupOpen(false);
  };

  const handleOpenJobApplication = (jobTitle) => {
    setSelectedJobTitle(jobTitle);
    setIsJobApplicationOpen(true);
  };

  const handleCloseJobApplication = () => {
    setIsJobApplicationOpen(false);
    setSelectedJobTitle('');
  };

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-hero-banner">
          <div className="career-hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Career</h1>
              <p>We’re building the next generation of connected healthcare professionals — from engineers to clinicians and AI experts.</p>

            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="career-main-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="description-section">
              <h2>Why Work With Us?</h2>
              <p className="main-description">
                At CarePro AI Health, we're revolutionizing remote patient monitoring through AI-powered solutions. 
                Join our team of passionate professionals who are making healthcare more accessible, efficient, and effective.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="benefits-section">
              <h2>What We Offer</h2>
              <ul className="benefits-list">
                <li><span>Competitive salary and comprehensive benefits package</span></li>
                <li><span>Flexible work arrangements and remote opportunities</span></li>
                <li><span>Professional development and continuous learning</span></li>
                <li><span>Cutting-edge technology and innovative projects</span></li>
                <li><span>Collaborative and inclusive work environment</span></li>
                <li><span>Opportunity to make a real impact on healthcare</span></li>
              </ul>
            </div>

            {/* Open Roles Section */}
            <div className="roles-section">
              <h2>Open Roles:</h2>
              <ul className="roles-list">
                <li>
                  <span className="role-title">Clinical Operations Executive</span>
                  <button className="btn-primary" onClick={() => handleOpenJobApplication('Clinical Operations Executive')}>
                    Apply Now
                  </button>
                </li>
                <li>
                  <span className="role-title">RPM Nurse / Care Manager</span>
                  <button className="btn-primary" onClick={() => handleOpenJobApplication('RPM Nurse / Care Manager')}>
                    Apply Now
                  </button>
                </li>
                <li>
                  <span className="role-title">Business Development (US/India)</span>
                  <button className="btn-primary" onClick={() => handleOpenJobApplication('Business Development (US/India)')}>
                    Apply Now
                  </button>
                </li>
                <li>
                  <span className="role-title">Data Analyst (AI Health)</span>
                  <button className="btn-primary" onClick={() => handleOpenJobApplication('Data Analyst (AI Health)')}>
                    Apply Now
                  </button>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Popup Components */}
      <DemoPopup isOpen={isDemoPopupOpen} onClose={handleCloseDemo} />
      <JobApplicationPopup 
        isOpen={isJobApplicationOpen} 
        onClose={handleCloseJobApplication} 
        jobTitle={selectedJobTitle}
      />
    </div>
  );
};

export default CareerPage;
