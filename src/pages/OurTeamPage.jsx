import React from 'react';
import './OurTeamPage.css';

const teamMembers = [
  { name: 'Dr. Ananya Rao', role: 'Chief Medical Officer', bio: 'Geriatric specialist with 15+ years leading in‑home elder care programs.', avatar: '/src/assets/team/team1.jpg' },
  { name: 'Rahul Verma', role: 'Head of Nursing', bio: 'Oversees caregiver training, clinical protocols, and patient safety.', avatar: '/src/assets/team/team2.jpg' },
  { name: 'Priya Mehta', role: 'Care Coordinator', bio: 'Coordinates doctor consults, family updates, and care plans.', avatar: '/src/assets/team/team3.jpg' },
  { name: 'Amit Sharma', role: 'Physiotherapist', bio: 'Supports mobility, balance, and fall‑prevention programs at home.', avatar: '/src/assets/team/team4.jpg' },
];

const OurTeamPage = () => {
  return (
    <div className="our-team-page">
      <section className="team-hero">
        <div className="team-hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Our Team</h1>
            <p>Compassionate professionals dedicated to dignified, at‑home elder care</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div className="team-card" key={idx}>
                <div className="avatar" style={{ backgroundImage: `url(${member.avatar})` }} />
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;

import React from 'react';
import './OurTeamPage.css';

const OurTeamPage = () => {
  return (
    <div className="our-team-page">
      <section className="team-hero">
        <div className="team-hero-banner">
          <div className="team-hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Our Team</h1>
              <p>Compassionate professionals dedicated to exceptional in‑home elder care and patient monitoring</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-grid-section">
        <div className="container">
          <div className="team-grid">
            {[1,2,3,4,5,6].map((id) => (
              <div key={id} className="team-card">
                <div className="avatar" aria-hidden="true">{/* placeholder */}</div>
                <h3 className="name">Team Member {id}</h3>
                <p className="role">Registered Nurse</p>
                <p className="bio">Experienced in geriatric care, medication management, vitals monitoring, and family communication.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;


