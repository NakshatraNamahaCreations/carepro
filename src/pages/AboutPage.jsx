import React from 'react';
import MissionVision from '../components/MissionVision';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-banner">
          <div className="about-hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1>About StellarRCM</h1>
              <p>Transforming healthcare delivery through innovative home care solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Our Story</h2>
              <p>
                StellarRCM was founded with a simple yet powerful vision: to bring world-class healthcare 
                directly to patients' homes. We believe that healing happens best in familiar surroundings, 
                surrounded by loved ones and the comfort of home.
              </p>
              <p>
                Since our inception, we've been at the forefront of home healthcare innovation, combining 
                cutting-edge medical technology with compassionate care to deliver exceptional outcomes 
                for thousands of patients and their families.
              </p>
            </div>
            <div className="overview-image">
              <div className="image-placeholder">
                <span>Healthcare Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-page">
        <div className="container">
          <div className="mv-content">
            <div className="mission-card">
              <div className="card-number">01</div>
              <h3>Our Mission</h3>
              <p>
                To revolutionize healthcare delivery by bringing comprehensive medical services 
                directly to patients' homes, ensuring that quality healthcare is accessible, 
                convenient, and personalized for every individual and family we serve.
              </p>
            </div>
            
            <div className="vision-card">
              <div className="card-number">02</div>
              <h3>Our Vision</h3>
              <p>
                To become the leading provider of home healthcare services, setting new standards 
                in patient care through innovative technology, compassionate service, and a 
                commitment to improving the quality of life for patients and their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🏥</div>
              <h3>Patient-Centered Care</h3>
              <p>Every decision we make is guided by what's best for our patients and their families.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🔬</div>
              <h3>Innovation</h3>
              <p>We continuously embrace new technologies and methods to improve care delivery.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>We treat every patient with dignity, respect, and genuine care.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We work closely with families, doctors, and healthcare teams for the best outcomes.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">📊</div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards of care and continuously strive for improvement.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🏠</div>
              <h3>Accessibility</h3>
              <p>We make quality healthcare accessible to everyone, regardless of location or circumstances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Patients Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Healthcare Professionals</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Cities Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">Dr. Sarah Johnson</div>
              </div>
              <h3>Dr. Sarah Johnson</h3>
              <p className="member-role">Chief Medical Officer</p>
              <p className="member-bio">
                Board-certified physician with 15+ years of experience in home healthcare and patient care.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">Michael Chen</div>
              </div>
              <h3>Michael Chen</h3>
              <p className="member-role">Chief Executive Officer</p>
              <p className="member-bio">
                Healthcare technology leader with a passion for improving patient outcomes through innovation.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">Dr. Emily Rodriguez</div>
              </div>
              <h3>Dr. Emily Rodriguez</h3>
              <p className="member-role">Director of Nursing</p>
              <p className="member-bio">
                Registered nurse with specialized training in home care and chronic disease management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
