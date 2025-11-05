import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [hoursDropdownOpen, setHoursDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => ({
        ...prev,
        [e.target.name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
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

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-banner">
          <div className="contact-hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Contact Us</h1>
              <p>Let’s Build a Healthier Future Together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section (Form + Info Sidebar) */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main">
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2>Send us a message</h2>
                <p>
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>
              </div>

              {status === 'submitted' && (
                <div className="status-message success-message">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Thank you for your message! We will get back to you soon.</span>
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

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className={errors.name ? 'error' : ''}
                      disabled={submitting}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className={errors.email ? 'error' : ''}
                      disabled={submitting}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      disabled={submitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this about?"
                      className={errors.subject ? 'error' : ''}
                      disabled={submitting}
                    />
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                    className={errors.message ? 'error' : ''}
                    disabled={submitting}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-btn" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>

            <aside className="contact-sidebar">
              <div className="sidebar-card">
                <h3 className="section-title">Contact Information</h3>
                <ul className="info-list">
                  <li className="info-item">
                    <div className="info-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="info-content">
                      <span className="label">Address</span>
                      <div className="values">
                        <span>#191, Suswani Towers, 3rd floor, B Block, 1st stage, C-Block, JP Nagar, Mysuru, Karnataka 570031</span>
                      </div>
                    </div>
                  </li>
                  <li className="info-item">
                    <div className="info-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="info-content">
                      <span className="label">Email</span>
                      <div className="values">
                        <a href="mailto:info@careproaihealth.com">
                          info@careproaihealth.com
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="info-item">
                    <div className="info-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="info-content">
                      <span className="label">Phone</span>
                      <div className="values">
                        <a href="tel:09743807271">097438 07271</a>
                      </div>
                    </div>
                  </li>
                  <li className="info-item hours-item">
                    <div className="info-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div className="info-content">
                      <span className="label">Hours</span>
                      <div className="values hours-dropdown-container">
                        <span 
                          className="hours-toggle"
                          onClick={() => setHoursDropdownOpen(!hoursDropdownOpen)}
                        >
                          Open 24 hours
                          <svg
                            className={`dropdown-arrow ${hoursDropdownOpen ? 'open' : ''}`}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                        {hoursDropdownOpen && (
                          <div className="hours-dropdown">
                            <div className="hours-row">
                              <span className="hours-day">Monday</span>
                              <span className="hours-time">Open 24 hours</span>
                            </div>
                            <div className="hours-row">
                              <span className="hours-day">Tuesday</span>
                              <span className="hours-time">Open 24 hours</span>
                            </div>
                            <div className="hours-row">
                              <span className="hours-day">Wednesday</span>
                              <span className="hours-time">Open 24 hours</span>
                            </div>
                            <div className="hours-row">
                              <span className="hours-day">Thursday</span>
                              <span className="hours-time">Open 24 hours</span>
                            </div>
                            <div className="hours-row">
                              <span className="hours-day">Friday</span>
                              <span className="hours-time">Open 24 hours</span>
                            </div>
                            <div className="hours-row">
                              <span className="hours-day">Saturday</span>
                              <span className="hours-time">Open 24 hours</span>
                            </div>
                            <div className="hours-row">
                              <span className="hours-day">Sunday</span>
                              <span className="hours-time closed">Closed</span>
                            </div>
                          </div>
                        )}
                      </div>
                      </div>
                  </li>
                  <li className="info-item">
                    <div className="info-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </div>
                    <div className="info-content">
                      <span className="label">Website</span>
                      <div className="values">
                        <a
                          href="https://www.careproaihealth.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          www.careproaihealth.com
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3 className="section-title">Locate Us</h3>
                <div className="location-block">
                  <h4>Address</h4>
                  <p>#191, Suswani Towers, 3rd floor, B Block, 1st stage, C-Block, JP Nagar, Mysuru, Karnataka 570031</p>
                </div>
                <div className="location-block">
                  <h4>Contact</h4>
                  <p>info@careproaihealth.com</p>
                  <p>097438 07271</p>
                </div>
              </div>

              <div className="sidebar-card">
                <h3 className="section-title">Follow us</h3>
                <div className="socials">
                  <a href="#" aria-label="Facebook" className="social-pill">
                    Facebook
                  </a>
                  <a href="#" aria-label="LinkedIn" className="social-pill">
                    LinkedIn
                  </a>
                  <a href="#" aria-label="Twitter" className="social-pill">
                    Twitter
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=191+Suswani+Towers,+3rd+floor,+B+Block,+1st+stage,+C-Block,+JP+Nagar,+Mysuru,+Karnataka+570031&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CarePro AI Health Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
