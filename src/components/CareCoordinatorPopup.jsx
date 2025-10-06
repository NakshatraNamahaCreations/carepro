import React, { useState } from 'react';
import './CareCoordinatorPopup.css';

const CareCoordinatorPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    patientName: '',
    patientAge: '',
    medicalCondition: '',
    urgency: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
    }

    if (!formData.patientAge.trim()) {
      newErrors.patientAge = 'Patient age is required';
    }

    if (!formData.medicalCondition.trim()) {
      newErrors.medicalCondition = 'Medical condition is required';
    }

    if (!formData.urgency.trim()) {
      newErrors.urgency = 'Urgency level is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Care Coordinator form submitted:', formData);
      alert('Thank you for reaching out! A Care Coordinator will contact you within 2 hours to discuss your needs.');
      onClose();
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        patientName: '',
        patientAge: '',
        medicalCondition: '',
        urgency: '',
        message: ''
      });
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="care-coordinator-popup-overlay" onClick={handleOverlayClick}>
      <div className="care-coordinator-popup">
        <div className="care-coordinator-popup-header">
          <h2>Talk to a Care Coordinator</h2>
          <button className="close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="care-coordinator-popup-content">
          <p className="care-coordinator-description">
            Our trained Care Coordinators (nurses) are available 24/7 to discuss your healthcare needs. 
            Get personalized guidance and support for your patient monitoring requirements.
          </p>

          <form onSubmit={handleSubmit} className="care-coordinator-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Your First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={errors.firstName ? 'error' : ''}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Your Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={errors.lastName ? 'error' : ''}
                  placeholder="Enter your last name"
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
                  placeholder="Enter your email address"
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
                  placeholder="Enter your phone number"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="patientName">Patient Name *</label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  className={errors.patientName ? 'error' : ''}
                  placeholder="Enter patient's name"
                />
                {errors.patientName && <span className="error-message">{errors.patientName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="patientAge">Patient Age *</label>
                <input
                  type="number"
                  id="patientAge"
                  name="patientAge"
                  value={formData.patientAge}
                  onChange={handleInputChange}
                  className={errors.patientAge ? 'error' : ''}
                  placeholder="Enter patient's age"
                  min="0"
                  max="120"
                />
                {errors.patientAge && <span className="error-message">{errors.patientAge}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="medicalCondition">Medical Condition *</label>
              <input
                type="text"
                id="medicalCondition"
                name="medicalCondition"
                value={formData.medicalCondition}
                onChange={handleInputChange}
                className={errors.medicalCondition ? 'error' : ''}
                placeholder="e.g., Diabetes, Hypertension, Heart Disease, etc."
              />
              {errors.medicalCondition && <span className="error-message">{errors.medicalCondition}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="urgency">Urgency Level *</label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                className={errors.urgency ? 'error' : ''}
              >
                <option value="">Select urgency level</option>
                <option value="emergency">Emergency - Immediate attention needed</option>
                <option value="urgent">Urgent - Within 2 hours</option>
                <option value="moderate">Moderate - Within 24 hours</option>
                <option value="routine">Routine - Within 48 hours</option>
              </select>
              {errors.urgency && <span className="error-message">{errors.urgency}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please provide any additional details about the patient's condition, current medications, or specific monitoring needs..."
                rows="4"
              />
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-submit">
                Contact Care Coordinator
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareCoordinatorPopup;

