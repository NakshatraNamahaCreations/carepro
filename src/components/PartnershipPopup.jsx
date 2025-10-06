import React, { useState } from 'react';
import './PartnershipPopup.css';

const PartnershipPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    partnershipType: '',
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

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.partnershipType.trim()) {
      newErrors.partnershipType = 'Partnership type is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Partnership form submitted:', formData);
      alert('Thank you for your interest in partnering with CarePro! We will contact you soon to discuss partnership opportunities.');
      onClose();
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        partnershipType: '',
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
    <div className="partnership-popup-overlay" onClick={handleOverlayClick}>
      <div className="partnership-popup">
        <div className="partnership-popup-header">
          <h2>Request Partnership Info</h2>
          <button className="close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="partnership-popup-content">
          <p className="partnership-description">
            Join CarePro's ecosystem and expand your healthcare reach. 
            Learn about our partnership opportunities and how we can work together to improve patient care.
          </p>

          <form onSubmit={handleSubmit} className="partnership-form">
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
                  placeholder="Enter your first name"
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

            <div className="form-group">
              <label htmlFor="company">Company Name *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className={errors.company ? 'error' : ''}
                placeholder="Enter your company name"
              />
              {errors.company && <span className="error-message">{errors.company}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="partnershipType">Partnership Type *</label>
              <select
                id="partnershipType"
                name="partnershipType"
                value={formData.partnershipType}
                onChange={handleInputChange}
                className={errors.partnershipType ? 'error' : ''}
              >
                <option value="">Select partnership type</option>
                <option value="technology">Technology Integration</option>
                <option value="distribution">Distribution Partner</option>
                <option value="reseller">Reseller Partner</option>
                <option value="strategic">Strategic Alliance</option>
                <option value="referral">Referral Partner</option>
                <option value="other">Other</option>
              </select>
              {errors.partnershipType && <span className="error-message">{errors.partnershipType}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell Us About Your Partnership Goals</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your partnership objectives and how we can work together..."
                rows="4"
              />
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-submit">
                Request Partnership Info
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPopup;

