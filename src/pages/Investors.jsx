import React, { useEffect, useState } from "react";
import invest from "../../public/assets/invest/invest.jpeg"; // ✅ move image to src/assets/invest/ (adjust path if needed)

const INVEST_EMAIL = "abinashroutaray097@gmail.com";

function Investors() {
  const [bgOk, setBgOk] = useState(true);

  // Form state
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [investmentRange, setInvestmentRange] = useState("");
  const [background, setBackground] = useState("");

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
  function validate() {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const phoneOk = /^[0-9+\-\s()]{7,}$/.test(phone.trim());

    if (!fullName.trim()) return "Please enter your full name.";
    if (!organization.trim()) return "Please enter your organization.";
    if (!emailOk) return "Please enter a valid email address.";
    if (!phoneOk) return "Please enter a valid phone number.";
    if (!investmentRange) return "Please select an estimated investment range.";
    if (!background.trim())
      return "Please add a brief background or experience.";

    return null;
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const err = validate();
      if (err) {
        alert(err);
        return;
      }

      const subject = "Investor Inquiry | CarePro";
      const bodyLines = [
        "Investor interest details:",
        "",
        `Full Name: ${fullName}`,
        `Organization: ${organization}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Estimated Investment Range: ${investmentRange}`,
        "",
        "Brief Background / Experience:",
        background,
      ];

      const mailtoLink = `mailto:${INVEST_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      window.location.href = mailtoLink;
    } catch (error) {
      console.error("Submit failed:", error);
      alert("Something went wrong. Please try again.");
    }
  }

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

          <form onSubmit={handleSubmit} noValidate>
            <div style={gridStyle}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  style={inputStyle}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div>
                <label style={labelStyle}>Organization</label>
                <input
                  type="text"
                  placeholder="Company / Fund / Family Office"
                  style={inputStyle}
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  style={inputStyle}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label style={labelStyle}>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98XXXXXX12"
                  style={inputStyle}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label style={labelStyle}>Estimated Investment Range</label>
                <select
                  style={selectStyle}
                  value={investmentRange}
                  onChange={(e) => setInvestmentRange(e.target.value)}
                >
                  <option value="">Select range</option>
                  <option value="Under ₹10L">Under ₹10L</option>
                  <option value="₹10L to ₹50L">₹10L to ₹50L</option>
                  <option value="₹50L to ₹2Cr">₹50L to ₹2Cr</option>
                  <option value="Above ₹2Cr">Above ₹2Cr</option>
                </select>
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle}>Brief Background / Experience</label>
                <textarea
                  placeholder="Share your investing background, focus areas, and any relevant experience."
                  style={textAreaStyle}
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                />
              </div>
            </div>

            <hr style={dividerStyle} />

            <div style={ctaRowStyle}>
              <button type="submit" style={buttonStyle}>
                Reach Out to Invest
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
