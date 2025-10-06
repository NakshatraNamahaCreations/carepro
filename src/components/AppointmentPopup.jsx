import React, { useState } from 'react';
import './AppointmentPopup.css';

const AppointmentPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    appointmentType: '',
    preferredTime: '',
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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.appointmentType) {
      newErrors.appointmentType = 'Please select appointment type';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Appointment booking data:', formData);
      alert('Appointment request submitted successfully! We will contact you soon to confirm your appointment.');
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
    <div className={`appointment-popup-overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
      <div className="appointment-popup">
        <div className="appointment-popup-header">
          <h2>Book an Appointment</h2>
          <button className="close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="appointment-popup-content">
          <p className="appointment-description">
            Schedule your appointment with our CarePro team. We'll help you get started with our Remote Patient Monitoring ecosystem.
          </p>

          <form onSubmit={handleSubmit} className="appointment-form">
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

            <div className="form-group">
              <label htmlFor="appointmentType">Appointment Type *</label>
              <select
                id="appointmentType"
                name="appointmentType"
                value={formData.appointmentType}
                onChange={handleInputChange}
                className={errors.appointmentType ? 'error' : ''}
              >
                <option value="">Select appointment type</option>
                <option value="consultation">Initial Consultation</option>
                <option value="demo">Product Demo</option>
                <option value="follow-up">Follow-up Visit</option>
                <option value="emergency">Emergency Consultation</option>
                <option value="other">Other</option>
              </select>
              {errors.appointmentType && <span className="error-message">{errors.appointmentType}</span>}
            </div>

            {/* <div className="form-group">
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
            </div> */}

            <div className="form-group">
              <label htmlFor="additionalInfo">Additional Information</label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows="4"
                placeholder="Any additional information or special requirements"
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-button" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="submit-button">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPopup;
