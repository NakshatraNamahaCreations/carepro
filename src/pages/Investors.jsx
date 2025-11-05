import React, { useEffect, useState } from "react";
import invest from "../../public/assets/invest/invest.jpeg"; // ✅ move image to src/assets/invest/ (adjust path if needed)

function Investors() {
  const [bgOk, setBgOk] = useState(true);

  // Form state as object
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    investmentRange: "",
    background: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  // Preload image so we can gracefully fall back if it fails
  useEffect(() => {
    try {
      const img = new Image();
      img.onload = () => setBgOk(true);
      img.onerror = () => setBgOk(false);
      img.src = invest; // using imported asset path
    } catch (err) {
      console.error("Failed to load banner image:", err);
      setBgOk(false);
    }
  }, []);

  // ---------- Styles ----------
  const fullBleedStyle = {
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
  };

  const bannerStyle = {
    position: "relative",
    width: "100%",
    height: "60vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: bgOk
      ? `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${invest}) center / cover no-repeat`
      : "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
  };

  const headingStyle = {
    color: "#ffffff",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: "clamp(24px, 5vw, 48px)",
    lineHeight: 1.2,
    textAlign: "center",
    textShadow: "0 2px 10px rgba(0,0,0,0.4)",
    padding: "0 16px",
    margin: 0,
  };

  const containerStyle = {
    maxWidth: "1100px",
    margin: "32px auto",
    padding: "0 16px",
  };

  const helperStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "16px",
    color: "#64748B",
    margin: "0 0 20px 0",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "13px",
    fontWeight: 600,
    color: "#334155",
    marginBottom: "8px",
  };

  const inputStyle = {
    width: "100%",
    height: "44px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    padding: "0 14px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "14px",
    color: "#0f172a",
    outline: "none",
    background: "#ffffff",
  };

  const selectStyle = { ...inputStyle, appearance: "none", cursor: "pointer" };

  const textAreaStyle = {
    width: "100%",
    minHeight: "110px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    padding: "12px 14px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "14px",
    color: "#0f172a",
    outline: "none",
    resize: "vertical",
    background: "#ffffff",
  };

  const ctaRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "22px",
    gap: "12px",
    flexWrap: "wrap",
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "48px",
    padding: "0 22px",
    borderRadius: "9999px",
    border: "none",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "15px",
    fontWeight: 600,
    letterSpacing: "0.3px",
    color: "#ffffff",
    background:
      "linear-gradient(135deg, rgba(35,64,139,1) 0%, rgba(50,152,77,1) 100%)",
    boxShadow: "0 8px 20px rgba(35,64,139,0.25)",
    cursor: "pointer",
  };

  const noteStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "16px",
    color: "#64748B",
    textAlign: "center",
    marginTop: "10px",
    fontWeight: 500,
  };

  const dividerStyle = {
    height: "1px",
    background: "#e5e7eb",
    margin: "24px 0",
    border: "none",
  };

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(2,6,23,0.08)",
    border: "1px solid #e5e7eb",
    padding: "28px",
    marginTop: "28px",
  };

  const cardHeadingStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "20px",
    fontWeight: 600,
    color: "#0f172a",
    margin: "0 0 16px 0",
  };

  const bodyTextStyle = {
    color: "#64748B",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    fontSize: "clamp(14px, 2vw, 18px)",
    lineHeight: 1.7,
    letterSpacing: "0.2px",
    textAlign: "center",
    maxWidth: "820px",
    margin: "24px auto 0",
    padding: "0 16px",
  };

  // ---------- Logic ----------
  const handleChange = (e) => {
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
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
    const phoneOk = /^[0-9+\-\s()]{7,}$/.test(formData.phone.trim());

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.organization.trim()) {
      newErrors.organization = "Please enter your organization.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter an email address.";
    } else if (!emailOk) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter a phone number.";
    } else if (!phoneOk) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.investmentRange) {
      newErrors.investmentRange = "Please select an estimated investment range.";
    }
    if (!formData.background.trim()) {
      newErrors.background = "Please add a brief background or experience.";
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
          fullName: "",
          organization: "",
          email: "",
          phone: "",
          investmentRange: "",
          background: "",
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
    <div>
      {/* Full-width banner */}
      <div style={fullBleedStyle}>
        <div style={bannerStyle}>
          <h1 style={headingStyle}>
            Invest in the Future of Healthcare with CarePro
          </h1>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(145deg, #f8faff, #eef3ff)",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(35, 64, 139, 0.25)",
          margin: "60px 100px",
          padding: "50px 40px",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          color: "#0f172a",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "1.8",
            marginBottom: "25px",
            fontStyle: "italic",
          }}
        >
          “An investor is not just a source of capital, but a believer who fuels
          the fire of innovation and turns dreams into industries. Every
          investor writes the first line of a company’s success story — their
          belief becomes the foundation of every breakthrough.”
        </p>

        <p
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#23408B",
            margin: "0",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          CarePro Leadership
        </p>
      </div>

      {/* Body + Form */}
      <div style={containerStyle}>
        <p style={bodyTextStyle}>
          CarePro is redefining patient care with an advanced Gen AI powered
          chronic care ecosystem, driving rapid growth in India and worldwide.
          Join us to shape the next era of 24/7 remote patient monitoring.
        </p>

        {/* Card: Investor interest form */}
        <div style={cardStyle}>
          <h2 style={cardHeadingStyle}>
            We welcome serious investors ready to explore strategic
            opportunities.{" "}
          </h2>
          <p style={helperStyle}>
            Please provide the following details so we can understand your
            profile and explore collaboration:
          </p>

          {status === 'submitted' && (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "24px",
              backgroundColor: "#d4edda",
              border: "1px solid #c3e6cb",
              color: "#155724",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.95rem",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Thank you! Your inquiry has been submitted successfully. We will get back to you soon.</span>
            </div>
          )}

          {status === 'error' && (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "24px",
              backgroundColor: "#f8d7da",
              border: "1px solid #f5c6cb",
              color: "#721c24",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.95rem",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>Something went wrong. Please try again later.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div style={gridStyle}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  style={{
                    ...inputStyle,
                    borderColor: errors.fullName ? "#dc3545" : "#e5e7eb",
                  }}
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={submitting}
                />
                {errors.fullName && (
                  <span style={{
                    color: "#dc3545",
                    fontSize: "0.85rem",
                    marginTop: "4px",
                    display: "block",
                    fontFamily: "'Poppins', sans-serif",
                  }}>{errors.fullName}</span>
                )}
              </div>

              <div>
                <label style={labelStyle}>Organization</label>
                <input
                  type="text"
                  name="organization"
                  placeholder="Company / Fund / Family Office"
                  style={{
                    ...inputStyle,
                    borderColor: errors.organization ? "#dc3545" : "#e5e7eb",
                  }}
                  value={formData.organization}
                  onChange={handleChange}
                  disabled={submitting}
                />
                {errors.organization && (
                  <span style={{
                    color: "#dc3545",
                    fontSize: "0.85rem",
                    marginTop: "4px",
                    display: "block",
                    fontFamily: "'Poppins', sans-serif",
                  }}>{errors.organization}</span>
                )}
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  style={{
                    ...inputStyle,
                    borderColor: errors.email ? "#dc3545" : "#e5e7eb",
                  }}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={submitting}
                />
                {errors.email && (
                  <span style={{
                    color: "#dc3545",
                    fontSize: "0.85rem",
                    marginTop: "4px",
                    display: "block",
                    fontFamily: "'Poppins', sans-serif",
                  }}>{errors.email}</span>
                )}
              </div>

              <div>
                <label style={labelStyle}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98XXXXXX12"
                  style={{
                    ...inputStyle,
                    borderColor: errors.phone ? "#dc3545" : "#e5e7eb",
                  }}
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={submitting}
                />
                {errors.phone && (
                  <span style={{
                    color: "#dc3545",
                    fontSize: "0.85rem",
                    marginTop: "4px",
                    display: "block",
                    fontFamily: "'Poppins', sans-serif",
                  }}>{errors.phone}</span>
                )}
              </div>

              <div>
                <label style={labelStyle}>Estimated Investment Range</label>
                <select
                  name="investmentRange"
                  style={{
                    ...selectStyle,
                    borderColor: errors.investmentRange ? "#dc3545" : "#e5e7eb",
                    opacity: submitting ? 0.7 : 1,
                    cursor: submitting ? "not-allowed" : "pointer",
                  }}
                  value={formData.investmentRange}
                  onChange={handleChange}
                  disabled={submitting}
                >
                  <option value="">Select range</option>
                  <option value="Under ₹10L">Under ₹10L</option>
                  <option value="₹10L to ₹50L">₹10L to ₹50L</option>
                  <option value="₹50L to ₹2Cr">₹50L to ₹2Cr</option>
                  <option value="Above ₹2Cr">Above ₹2Cr</option>
                </select>
                {errors.investmentRange && (
                  <span style={{
                    color: "#dc3545",
                    fontSize: "0.85rem",
                    marginTop: "4px",
                    display: "block",
                    fontFamily: "'Poppins', sans-serif",
                  }}>{errors.investmentRange}</span>
                )}
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle}>Brief Background / Experience</label>
                <textarea
                  name="background"
                  placeholder="Share your investing background, focus areas, and any relevant experience."
                  style={{
                    ...textAreaStyle,
                    borderColor: errors.background ? "#dc3545" : "#e5e7eb",
                    opacity: submitting ? 0.7 : 1,
                  }}
                  value={formData.background}
                  onChange={handleChange}
                  disabled={submitting}
                />
                {errors.background && (
                  <span style={{
                    color: "#dc3545",
                    fontSize: "0.85rem",
                    marginTop: "4px",
                    display: "block",
                    fontFamily: "'Poppins', sans-serif",
                  }}>{errors.background}</span>
                )}
              </div>
            </div>

            <hr style={dividerStyle} />

            <div style={ctaRowStyle}>
              <button 
                type="submit" 
                style={{
                  ...buttonStyle,
                  opacity: submitting ? 0.6 : 1,
                  cursor: submitting ? "not-allowed" : "pointer",
                }}
                disabled={submitting}
              >
                {submitting ? 'Submitting…' : 'Reach Out to Invest'}
              </button>
            </div>

            <p style={noteStyle}>
              Our team will review your details and reach out to discuss how you
              can be part of our growth journey.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Investors;
