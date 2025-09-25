import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
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
              <p>Get in touch with our team for any questions or support</p>
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
                <p>Fill out the form below and we'll get back to you as soon as possible</p>
              </div>

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
                    />
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
                    />
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
                    />
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
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            <aside className="contact-sidebar">
              <div className="sidebar-card">
                <h3 className="section-title">Contact Information</h3>
                <ul className="info-list">
                  <li className="info-item">
                    <span className="label">Mobile</span>
                    <div className="values">
                      <a href="tel:+15551234567">+1 (555) 123-4567</a>
                      <a href="tel:+15559876543">+1 (555) 987-6543</a>
                    </div>
                  </li>
                  <li className="info-item">
                    <span className="label">Phone</span>
                    <div className="values">
                      <a href="tel:+15551234567">+1 (555) 123-4567</a>
                    </div>
                  </li>
                  <li className="info-item">
                    <span className="label">Landline</span>
                    <div className="values">
                      <a href="tel:+15550000000">+1 (555) 000-0000</a>
                    </div>
                  </li>
                  <li className="info-item">
                    <span className="label">Email</span>
                    <div className="values">
                      <a href="mailto:info@carepro.com">info@carepro.com</a>
                      <a href="mailto:support@carepro.com">support@carepro.com</a>
                    </div>
                  </li>
                  <li className="info-item">
                    <span className="label">Website</span>
                    <div className="values">
                      <a href="/">www.carepro.com</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3 className="section-title">Locate Us</h3>
                <div className="location-block">
                  <h4>Corporate Address</h4>
                  <p>123 Healthcare Street, Medical City, MC 12345</p>
                </div>
                <div className="location-block">
                  <h4>Registered Address</h4>
                  <p>Suite 500, 456 Wellness Ave, Medical City, MC 67890</p>
                </div>
              </div>

              <div className="sidebar-card">
                <h3 className="section-title">Follow us</h3>
                <div className="socials">
                  <a href="#" aria-label="Facebook" className="social-pill">Facebook</a>
                  <a href="#" aria-label="LinkedIn" className="social-pill">LinkedIn</a>
                  <a href="#" aria-label="Twitter" className="social-pill">Twitter</a>
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
          <div className="map-placeholder">
            <div className="map-content">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <h3>Interactive Map</h3>
              <p>123 Healthcare Street, Medical City, MC 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
