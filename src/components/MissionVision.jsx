import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="mission-vision-container">
        <div className="mission-vision-content">
          <div className="mission-section">
            <div className="mission-number">01</div>
            <div className="mission-content">
              <h3>Our Mission</h3>
              <p>
                To make proactive, predictive, and personalized care accessible
                to every individual. We empower every patient—especially in
                underserved communities—with continuous, reliable, and
                compassionate remote care by bridging technology, clinical
                expertise, and human touch. CarePro ensures that chronic
                conditions are monitored in real time, reducing risks and
                enabling healthier, longer lives without unnecessary
                emergencies.
              </p>
            </div>
          </div>

          <div className="vision-section">
            <div className="vision-number">02</div>
            <div className="vision-content">
              <h3>Our Vision</h3>
              <p>
                To become the world's most trusted AI-driven healthcare
                companion—by transforming healthcare accessibility in tier 2, 3,
                and 4 cities where medical resources are scarce, ensuring that
                no patient's health deteriorates unnoticed.
              </p>
            </div>
          </div>
          <div className="vision-section">
            <div className="vision-number">03</div>
            <div className="vision-content">
              <h3>Our Core Values</h3>
              <li
                style={{
                  color: "#64748B",
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: "10px",
                  lineHeight: "1.6",
                }}
              >
                <strong style={{ color: "#0f172a", fontWeight: 600 }}>
                  Compassion First
                </strong>{" "}
                – Every patient is a person, not just a data point. We combine
                technology with empathy to deliver true care.
              </li>
              <li
                style={{
                  color: "#64748B",
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: "10px",
                  lineHeight: "1.6",
                }}
              >
                <strong style={{ color: "#0f172a", fontWeight: 600 }}>
                  Equity in Access
                </strong>{" "}
                – Healthcare is a right, not a privilege. We bring world-class
                monitoring and coordination to communities often left behind.
              </li>
              <li
                style={{
                  color: "#64748B",
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: "10px",
                  lineHeight: "1.6",
                }}
              >
                <strong style={{ color: "#0f172a", fontWeight: 600 }}>
                  Proactive Care
                </strong>{" "}
                – Prevention over crisis. We detect, monitor, and act early to
                avoid emergencies.
              </li>
              <li
                style={{
                  color: "#64748B",
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: "10px",
                  lineHeight: "1.6",
                }}
              >
                <strong style={{ color: "#0f172a", fontWeight: 600 }}>
                  Trust & Transparency
                </strong>{" "}
                – Certified, compliant, and ethical practices that put patient
                safety and data privacy above all.
              </li>
              <li
                style={{
                  color: "#64748B",
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: "10px",
                  lineHeight: "1.6",
                }}
              >
                <strong style={{ color: "#0f172a", fontWeight: 600 }}>
                  Collaboration
                </strong>{" "}
                – Working hand-in-hand with doctors, nurses, caregivers, and
                families to create a seamless support ecosystem.
              </li>
              <li
                style={{
                  color: "#64748B",
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: "10px",
                  lineHeight: "1.6",
                }}
              >
                <strong style={{ color: "#0f172a", fontWeight: 600 }}>
                  Innovation with Purpose
                </strong>{" "}
                – Leveraging technology not for the sake of novelty, but to
                solve real problems in chronic care and save lives.
              </li>
              <li
                style={{
                  color: "#64748B",
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                  marginLeft: "10px",
                  lineHeight: "1.6",
                }}
              >
                <strong style={{ color: "#0f172a", fontWeight: 600 }}>
                  Global Mindset, Local Heart
                </strong>{" "}
                – Starting with India’s underserved cities, scaling to the world
                while respecting cultural and healthcare diversity.
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
