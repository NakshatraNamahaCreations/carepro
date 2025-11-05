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

    if (!formData.consultationType) {
      newErrors.consultationType = 'Please select consultation type';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

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
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
          organization: '',
          consultationType: '',
          preferredTime: '',
          currentChallenges: '',
          goals: '',
          additionalInfo: ''
        });
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
          <button className="close-button" onClick={onClose} disabled={submitting}>
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

          {status === 'submitted' && (
            <div className="status-message success-message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Thank you! Your consultation request has been submitted successfully. We will contact you soon to schedule your consultation.</span>
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
                  placeholder="Enter your last name"
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
                  placeholder="Enter your email address"
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
                  placeholder="Enter your phone number"
                  disabled={submitting}
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
                <div className="select-wrapper">
                  <select
                    id="consultationType"
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    className={errors.consultationType ? 'error' : ''}
                    disabled={submitting}
                  >
                    <option value="">Select consultation type</option>
                    <option value="initial">Initial Assessment</option>
                    <option value="technical">Technical Integration</option>
                    <option value="strategy">Strategic Planning</option>
                    <option value="training">Staff Training</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                  <svg className="dropdown-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
                {errors.consultationType && <span className="error-message">{errors.consultationType}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time *</label>
                <div className="select-wrapper">
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className={errors.preferredTime ? 'error' : ''}
                    disabled={submitting}
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
                  <svg className="dropdown-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
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
                disabled={submitting}
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-button" onClick={onClose} disabled={submitting}>
                Cancel
              </button>
              <button type="submit" className="submit-button" disabled={submitting}>
                {submitting ? 'Submitting…' : 'Schedule Consultation'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;



