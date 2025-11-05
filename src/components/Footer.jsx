import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [footerHoursDropdownOpen, setFooterHoursDropdownOpen] = useState(false);
  const [cardHoursDropdownOpen, setCardHoursDropdownOpen] = useState(false);
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info */}
          <div className="footer-section footer-company">
            <div className="footer-logo">
              <h3>CarePro AI Health</h3>
              <div className="logo-line"></div>
            </div>
            <p className="footer-description">
              Delivering exceptional healthcare services directly to your home.
              We provide comprehensive medical care, personalized treatment
              plans, and compassionate support for patients and families.
            </p>
            <div className="footer-contact-info">
              <div className="contact-item">
                <span className="contact-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                <span>#191, Suswani Towers, 3rd floor, B Block, 1st stage, C-Block, JP Nagar, Mysuru, Karnataka 570031</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <span>info@careproaihealth.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.16.37 2.41.57 3.67.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.61.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <span>097438 07271</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </span>
                <span>www.careproaihealth.com</span>
              </div>
              <div className="contact-item hours-item-footer">
                <span className="contact-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <div className="footer-hours-container">
                  <span 
                    className="footer-hours-toggle"
                    onClick={() => setFooterHoursDropdownOpen(!footerHoursDropdownOpen)}
                  >
                    Open 24 hours
                    <svg
                      className={`footer-dropdown-arrow ${footerHoursDropdownOpen ? 'open' : ''}`}
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
                  {footerHoursDropdownOpen && (
                    <div className="footer-hours-dropdown">
                      <div className="footer-hours-row">
                        <span className="footer-hours-day">Monday</span>
                        <span className="footer-hours-time">Open 24 hours</span>
                      </div>
                      <div className="footer-hours-row">
                        <span className="footer-hours-day">Tuesday</span>
                        <span className="footer-hours-time">Open 24 hours</span>
                      </div>
                      <div className="footer-hours-row">
                        <span className="footer-hours-day">Wednesday</span>
                        <span className="footer-hours-time">Open 24 hours</span>
                      </div>
                      <div className="footer-hours-row">
                        <span className="footer-hours-day">Thursday</span>
                        <span className="footer-hours-time">Open 24 hours</span>
                      </div>
                      <div className="footer-hours-row">
                        <span className="footer-hours-day">Friday</span>
                        <span className="footer-hours-time">Open 24 hours</span>
                      </div>
                      <div className="footer-hours-row">
                        <span className="footer-hours-day">Saturday</span>
                        <span className="footer-hours-time">Open 24 hours</span>
                      </div>
                      <div className="footer-hours-row">
                        <span className="footer-hours-day">Sunday</span>
                        <span className="footer-hours-time closed">Closed</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section footer-links">
            <h4>Quick Links</h4>
            <ul className="footer-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/our-services">Our Services</Link>
              </li>
              <li>
                <Link to="/why-carepro">Why CarePro</Link>
              </li>
              <li>
                <Link to="/our-team">Our Team</Link>
              </li>
              <li>
                <Link to="/partner-with-us">Partner with Us</Link>
              </li>
              <li>
                <Link to="/career">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          {/* <div className="footer-section footer-services">
            <h4>Our Services</h4>
            <ul className="footer-menu">
              <li><a href="#revenue-cycle">Revenue Cycle Management</a></li>
              <li><a href="#medical-billing">Medical Billing</a></li>
              <li><a href="#medical-coding">Medical Coding</a></li>
              <li><a href="#payers-solution">Payers Solution</a></li>
            
            </ul>
          </div> */}

          {/* Get in Touch */}
          <div className="footer-section footer-contact">
            <h4>Get in Touch</h4>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect x="4" y="6" width="16" height="14" rx="1" />
                    <rect x="6" y="8" width="2" height="2" />
                    <rect x="10" y="8" width="2" height="2" />
                    <rect x="14" y="8" width="2" height="2" />
                    <rect x="6" y="12" width="2" height="2" />
                    <rect x="10" y="12" width="2" height="2" />
                    <rect x="14" y="12" width="2" height="2" />
                    <rect x="6" y="16" width="2" height="2" />
                    <rect x="10" y="16" width="2" height="2" />
                    <rect x="14" y="16" width="2" height="2" />
                    <rect x="10" y="18" width="4" height="2" />
                    <circle cx="12" cy="19" r="0.5" fill="white" />
                  </svg>
                </div>
                <div className="contact-card-content">
                  <h5>Address</h5>
                  <p>#191, Suswani Towers, 3rd floor, B Block, 1st stage, C-Block, JP Nagar, Mysuru, Karnataka 570031</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.16.37 2.41.57 3.67.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.61.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="contact-card-content">
                  <h5>Phone</h5>
                  <p>097438 07271</p>
                </div>
              </div>

              <div className="contact-card hours-card">
                <div className="contact-card-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </div>
                <div className="contact-card-content">
                  <h5>Working Hours</h5>
                  <div className="card-hours-container">
                    <span 
                      className="card-hours-toggle"
                      onClick={() => setCardHoursDropdownOpen(!cardHoursDropdownOpen)}
                    >
                      Open 24 hours
                      <svg
                        className={`card-dropdown-arrow ${cardHoursDropdownOpen ? 'open' : ''}`}
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
                    {cardHoursDropdownOpen && (
                      <div className="card-hours-dropdown">
                        <div className="card-hours-row">
                          <span className="card-hours-day">Monday</span>
                          <span className="card-hours-time">Open 24 hours</span>
                        </div>
                        <div className="card-hours-row">
                          <span className="card-hours-day">Tuesday</span>
                          <span className="card-hours-time">Open 24 hours</span>
                        </div>
                        <div className="card-hours-row">
                          <span className="card-hours-day">Wednesday</span>
                          <span className="card-hours-time">Open 24 hours</span>
                        </div>
                        <div className="card-hours-row">
                          <span className="card-hours-day">Thursday</span>
                          <span className="card-hours-time">Open 24 hours</span>
                        </div>
                        <div className="card-hours-row">
                          <span className="card-hours-day">Friday</span>
                          <span className="card-hours-time">Open 24 hours</span>
                        </div>
                        <div className="card-hours-row">
                          <span className="card-hours-day">Saturday</span>
                          <span className="card-hours-time">Open 24 hours</span>
                        </div>
                        <div className="card-hours-row">
                          <span className="card-hours-day">Sunday</span>
                          <span className="card-hours-time closed">Closed</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="contact-card-content">
                  <h5>Service Areas</h5>
                  <p>3+ Cities Nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="footer-certifications">
          <div className="certifications-content">
            <h4>Certifications</h4>
            <div className="certifications-list">
              <span className="certification-badge">FDA</span>
              <span className="certification-badge">CE</span>
              <span className="certification-badge">CDSCO</span>
              <span className="certification-badge">ISO 13485</span>
              <span className="certification-badge">ISO 27001</span>
              <span className="certification-badge">ISO 9001</span>
              <span className="certification-badge">DPDPA Compliant</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>Copyright: © 2025 CarePro AI Health. All rights reserved.</p>
            </div>

            {/* Policy Links */}
            <div className="footer-policy-links">
              <a href="#privacy" className="policy-link">
                Privacy Policy
              </a>
              <a href="#terms" className="policy-link">
                Terms of Service
              </a>
            </div>

            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
