import React, { useState, useRef } from 'react';
import './JobApplicationPopup.css';

const JobApplicationPopup = ({ isOpen, onClose, jobTitle }) => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentCompany: '',
    experience: '',
    position: jobTitle || '',
    availability: '',
    salary: '',
    location: '',
    noticePeriod: ''
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResumeFile(file);
    
    // Clear error when user selects a file
    if (errors.resume) {
      setErrors(prev => ({
        ...prev,
        resume: ''
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
    if (!resumeFile) newErrors.resume = 'Resume is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      setStatus('');
      return;
    }

    setStatus('');
    setSubmitting(true);

    try {
      // Create FormData object for multipart/form-data submission
      const formDataToSend = new FormData();
      
      // Map form fields to backend field names (matching Postman format)
      if (formData.firstName) {
        formDataToSend.append('First Name', formData.firstName);
      }
      if (formData.lastName) {
        formDataToSend.append('Last Name', formData.lastName);
      }
      if (formData.email) {
        formDataToSend.append('Email Address', formData.email);
      }
      if (formData.phone) {
        formDataToSend.append('Phone Number', formData.phone);
      }
      if (formData.currentCompany) {
        formDataToSend.append('Current Company', formData.currentCompany);
      }
      if (formData.location) {
        formDataToSend.append('Preferred Location', formData.location);
      }
      if (formData.experience) {
        formDataToSend.append('Yead of Experience', formData.experience);
      }
      if (formData.availability) {
        formDataToSend.append('Availability', formData.availability);
      }
      if (formData.salary) {
        formDataToSend.append('Expected Salary', formData.salary);
      }
      if (formData.position) {
        formDataToSend.append('Position', formData.position);
      }
      if (formData.noticePeriod) {
        formDataToSend.append('Notice Period', formData.noticePeriod);
      }
      
      // Add resume file (matching the Postman format with 'Resume' key)
      if (resumeFile) {
        formDataToSend.append('Resume', resumeFile);
      }

      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        // Don't set Content-Type header - browser will set it automatically with boundary for FormData
        body: formDataToSend,
      });

      // Check if response is ok (status 200-299)
      if (!response.ok) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success) {
        setStatus("submitted");
        // Reset form with correct field names
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          currentCompany: '',
          experience: '',
          position: jobTitle || '',
          availability: '',
          salary: '',
          location: '',
          noticePeriod: ''
        });
        setResumeFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        setErrors({});
        
        // Close popup after 2 seconds
        setTimeout(() => {
          onClose();
          setStatus('');
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="job-application-overlay">
      <div className="job-application-popup">
        <div className="popup-header">
          <h2>Apply for {jobTitle}</h2>
          <button className="close-btn" onClick={onClose} disabled={submitting}>×</button>
        </div>
        
        {status === 'submitted' && (
          <div className="status-message success-message">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Thank you! Your application has been submitted successfully. We will get back to you soon.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="status-message error-message">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>Something went wrong. Please try again later.</span>
          </div>
        )}
        
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
                  disabled={submitting}
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
                  disabled={submitting}
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
                  disabled={submitting}
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
                  disabled={submitting}
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
                disabled={submitting}
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
                    disabled={submitting}
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
                    disabled={submitting}
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
                    disabled={submitting}
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
                  disabled={submitting}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Application Materials</h3>
            <div className="form-group">
              <label htmlFor="resume">Resume/CV *</label>
              <input
                ref={fileInputRef}
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className={errors.resume ? 'error' : ''}
                disabled={submitting}
              />
              <small>Accepted formats: PDF, DOC, DOCX (Max 5MB)</small>
              {errors.resume && <span className="error-message">{errors.resume}</span>}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={onClose} disabled={submitting}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationPopup;
