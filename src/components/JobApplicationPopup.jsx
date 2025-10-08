import React, { useState } from 'react';
import './JobApplicationPopup.css';

const JobApplicationPopup = ({ isOpen, onClose, jobTitle }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentCompany: '',
    experience: '',
    resume: null,
    coverLetter: '',
    position: jobTitle || '',
    availability: '',
    salary: '',
    location: '',
    noticePeriod: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      alert('Application submitted successfully! We will get back to you soon.');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="job-application-overlay">
      <div className="job-application-popup">
        <div className="popup-header">
          <h2>Apply for {jobTitle}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <form className="job-application-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Personal Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="currentCompany">Current Company</label>
              <input
                type="text"
                id="currentCompany"
                name="currentCompany"
                value={formData.currentCompany}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Professional Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="experience">Years of Experience *</label>
                <div className="select-wrapper">
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={errors.experience ? 'error' : ''}
                  >
                    <option value="">Select Experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                  <svg className="dropdown-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
                {errors.experience && <span className="error-message">{errors.experience}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="location">Preferred Location</label>
                <div className="select-wrapper">
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Location</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="onsite">On-site</option>
                  </select>
                  <svg className="dropdown-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="availability">Availability</label>
                <div className="select-wrapper">
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Availability</option>
                    <option value="immediate">Immediate</option>
                    <option value="2-weeks">2 weeks notice</option>
                    <option value="1-month">1 month notice</option>
                    <option value="2-months">2 months notice</option>
                    <option value="3-months">3+ months notice</option>
                  </select>
                  <svg className="dropdown-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="salary">Expected Salary (Optional)</label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  placeholder="e.g., $50,000 - $70,000"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Application Materials</h3>
            <div className="form-group">
              <label htmlFor="resume">Resume/CV *</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleInputChange}
                accept=".pdf,.doc,.docx"
                className={errors.resume ? 'error' : ''}
              />
              <small>Accepted formats: PDF, DOC, DOCX (Max 5MB)</small>
              {errors.resume && <span className="error-message">{errors.resume}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="coverLetter">Cover Letter *</label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows="5"
                placeholder="Tell us why you're interested in this position and how your experience aligns with our requirements..."
                className={errors.coverLetter ? 'error' : ''}
              />
              {errors.coverLetter && <span className="error-message">{errors.coverLetter}</span>}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationPopup;
