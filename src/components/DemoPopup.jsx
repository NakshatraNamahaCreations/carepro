// import React, { useState } from 'react';
// import './DemoPopup.css';

// const DemoPopup = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     healthcareType: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//     }


//     if (!formData.healthcareType.trim()) {
//       newErrors.healthcareType = 'Healthcare type is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Here you would typically send the data to your backend
//       console.log('Form submitted:', formData);
//       alert('Thank you for your interest! We will contact you soon to schedule your demo.');
//       onClose();

//       // Reset form
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         healthcareType: '',
//         message: ''
//       });
//     }
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="demo-popup-overlay" onClick={handleOverlayClick}>
//       <div className="demo-popup">
//         <div className="demo-popup-header">
//           <h2>Book a Free Demo</h2>
//           <button className="close-button" onClick={onClose}>
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//               <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//         </div>

//         <div className="demo-popup-content">
//           <p className="demo-description">
//             Experience CarePro's Remote Patient Monitoring ecosystem firsthand. 
//             Schedule a personalized demo to see how our solutions can transform your healthcare practice.
//           </p>

//           <form onSubmit={handleSubmit} className="demo-form">
//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="firstName">First Name *</label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   className={errors.firstName ? 'error' : ''}
//                   placeholder="Enter your first name"
//                 />
//                 {errors.firstName && <span className="error-message">{errors.firstName}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="lastName">Last Name *</label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   className={errors.lastName ? 'error' : ''}
//                   placeholder="Enter your last name"
//                 />
//                 {errors.lastName && <span className="error-message">{errors.lastName}</span>}
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="email">Email Address *</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className={errors.email ? 'error' : ''}
//                   placeholder="Enter your email address"
//                 />
//                 {errors.email && <span className="error-message">{errors.email}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="phone">Phone Number *</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className={errors.phone ? 'error' : ''}
//                   placeholder="Enter your phone number"
//                 />
//                 {errors.phone && <span className="error-message">{errors.phone}</span>}
//               </div>
//             </div>


//             <div className="form-group">
//               <label htmlFor="healthcareType">Type of Healthcare Practice *</label>
//               <div className="select-wrapper">
//                 <select
//                   id="healthcareType"
//                   name="healthcareType"
//                   value={formData.healthcareType}
//                   onChange={handleInputChange}
//                   className={errors.healthcareType ? 'error' : ''}
//                 >
//                   <option value="">Select healthcare type</option>
//                   <option value="hospital">Hospital</option>
//                   <option value="clinic">Clinic</option>
//                   <option value="home-healthcare">Home Healthcare Agency</option>
//                   <option value="government">Government Program</option>
//                   <option value="insurance">Insurance/Payor</option>
//                   <option value="other">Other</option>
//                 </select>
//                 <svg className="dropdown-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <polyline points="6,9 12,15 18,9"></polyline>
//                 </svg>
//               </div>
//               {errors.healthcareType && <span className="error-message">{errors.healthcareType}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Additional Information</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 placeholder="Tell us about your specific needs or questions..."
//                 rows="4"
//               />
//             </div>

//             <div className="form-actions">
//               <button type="button" className="btn-cancel" onClick={onClose}>
//                 Cancel
//               </button>
//               <button type="submit" className="btn-submit">
//                 Schedule Demo
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DemoPopup;


import React, { useState } from 'react';
import './DemoPopup.css';

// ✅ Remove leading space & use your Zoho inbox
const RECEIVER_EMAIL = 'ops.nnc@gmail.com';

const api_key = import.meta.VITE_BREVO_API_KEY

const DemoPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    healthcareType: '',
    message: ''
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
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.healthcareType.trim()) newErrors.healthcareType = 'Healthcare type is required';

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
          healthcareType: '',
          message: ''
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
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="demo-popup-overlay" onClick={handleOverlayClick}>
      <div className="demo-popup">
        <div className="demo-popup-header">
          <h2>Book a Free Demo</h2>
          <button className="close-button" onClick={onClose} disabled={submitting}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="demo-popup-content">
          <p className="demo-description">
            Experience CarePro's Remote Patient Monitoring ecosystem firsthand.
            Schedule a personalized demo to see how our solutions can transform your healthcare practice.
          </p>

          {status === 'submitted' && (
            <div className="status-message success-message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Thank you! Your demo request has been submitted successfully. We will contact you soon.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="status-message error-message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>Unable to connect to the server. Please check your connection or contact us directly at {RECEIVER_EMAIL}.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="demo-form">
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

            <div className="form-group">
              <label htmlFor="healthcareType">Type of Healthcare Practice *</label>
              <div className="select-wrapper">
                <select
                  id="healthcareType"
                  name="healthcareType"
                  value={formData.healthcareType}
                  onChange={handleInputChange}
                  className={errors.healthcareType ? 'error' : ''}
                  disabled={submitting}
                >
                  <option value="">Select healthcare type</option>
                  <option value="hospital">Hospital</option>
                  <option value="clinic">Clinic</option>
                  <option value="home-healthcare">Home Healthcare Agency</option>
                  <option value="government">Government Program</option>
                  <option value="insurance">Insurance/Payor</option>
                  <option value="other">Other</option>
                </select>
                <svg className="dropdown-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              {errors.healthcareType && <span className="error-message">{errors.healthcareType}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your specific needs or questions..."
                rows="4"
                disabled={submitting}
              />
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={onClose} disabled={submitting}>
                Cancel
              </button>
              <button type="submit" className="btn-submit" disabled={submitting}>
                {submitting ? 'Submitting…' : 'Schedule Demo'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Escape HTML for the email body
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default DemoPopup;
