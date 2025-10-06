import React, { useState } from 'react';
import './ConsultationPopup.css';

const ConsultationPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    consultationType: '',
    preferredTime: '',
    currentChallenges: '',
    goals: '',
    additionalInfo: ''
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
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization is required';
    }

    if (!formData.consultationType) {
      newErrors.consultationType = 'Please select consultation type';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    if (!formData.currentChallenges.trim()) {
      newErrors.currentChallenges = 'Current challenges description is required';
    }

    if (!formData.goals.trim()) {
      newErrors.goals = 'Goals description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Consultation booking data:', formData);
      alert('Consultation request submitted successfully! We will contact you soon to schedule your consultation.');
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`consultation-popup-overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
      <div className="consultation-popup">
        <div className="consultation-popup-header">
          <h2>Schedule a Consultation</h2>
          <button className="close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="consultation-popup-content">
          <p className="consultation-description">
            Let's discuss how CarePro's Remote Patient Monitoring ecosystem can transform your healthcare practice. Schedule a personalized consultation with our experts.
          </p>

          <form onSubmit={handleSubmit} className="consultation-form">
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

            {/* <div className="form-group">
              <label htmlFor="organization">Organization *</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                className={errors.organization ? 'error' : ''}
                placeholder="Enter your organization name"
              />
              {errors.organization && <span className="error-message">{errors.organization}</span>}
            </div> */}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="consultationType">Consultation Type *</label>
                <select
                  id="consultationType"
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleInputChange}
                  className={errors.consultationType ? 'error' : ''}
                >
                  <option value="">Select consultation type</option>
                  <option value="initial">Initial Assessment</option>
                  <option value="technical">Technical Integration</option>
                  <option value="strategy">Strategic Planning</option>
                  <option value="training">Staff Training</option>
                  <option value="custom">Custom Solution</option>
                </select>
                {errors.consultationType && <span className="error-message">{errors.consultationType}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time *</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className={errors.preferredTime ? 'error' : ''}
                >
                  <option value="">Select preferred time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
                {errors.preferredTime && <span className="error-message">{errors.preferredTime}</span>}
              </div>
            </div>

            {/* <div className="form-group">
              <label htmlFor="currentChallenges">Current Challenges *</label>
              <textarea
                id="currentChallenges"
                name="currentChallenges"
                value={formData.currentChallenges}
                onChange={handleInputChange}
                className={errors.currentChallenges ? 'error' : ''}
                rows="3"
                placeholder="Describe your current healthcare challenges and pain points"
              />
              {errors.currentChallenges && <span className="error-message">{errors.currentChallenges}</span>}
            </div> */}

            {/* <div className="form-group">
              <label htmlFor="goals">Goals & Objectives *</label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                className={errors.goals ? 'error' : ''}
                rows="3"
                placeholder="What do you hope to achieve with CarePro's RPM solution?"
              />
              {errors.goals && <span className="error-message">{errors.goals}</span>}
            </div> */}

            <div className="form-group">
              <label htmlFor="additionalInfo">Additional Information</label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows="3"
                placeholder="Any additional information or specific requirements"
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-button" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="submit-button">
                Schedule Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;

