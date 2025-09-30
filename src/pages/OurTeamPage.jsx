import React from 'react';
import './OurTeamPage.css';

const managementTeam = [
  { 
    name: 'Jayanth Kumar G', 
    role: 'Founder-CEO', 
    bio: 'Jayanth brings over 19 years of experience in the BPO/KPO/ITES sector, with 16 years dedicated to Revenue Cycle Management. He has demonstrated strong operational leadership by managing large-scale teams and ensuring process excellence. His professional journey spans organizations such as Sutherland Healthcare, Inventurus Knowledge Solutions, and Omega Healthcare. He holds certifications including Six Sigma Black Belt, HIPAA, and ISO 9001 Auditor.',
    avatar: '/src/assets/ceo.png'
  },
  { 
    name: 'Sreenidhi G S D', 
    role: 'Co-Founder - CTO', 
    bio: 'Sreenidhi G S D is an entrepreneur and changemaker with 18+ years of industry experience. He is passionate about creating positive community impact and mentors start-ups across sectors. As a TiE Mysuru member, he supports budding entrepreneurs. With global experience at firms like Mercedes-Benz, IBM, CGI, Citi Bank, and the US Department of Family and Child Services. Skilled in IT strategy, business transformation, and operations, Sreenidhi brings strong leadership and ambition to every venture.',
    avatar: '/src/assets/co-founder.png'
  },
  { 
    name: 'Kresshna Kumar R', 
    role: 'Chief Compliance Officer', 
    bio: 'Kresshna Kumar R brings over 25 years of diverse experience in IT and business process management. He holds dual postgraduate degrees — MCA and MBA (Marketing) — along with industry-recognized credentials such as PMP, ACP, and Lead Auditor certifications in QMS, IT Service, Business Continuity, PIMS, and ISMS. His expertise covers a wide range of global standards and compliance frameworks, including HIPAA, GDPR, CMMI Dev 3.0, SOC 2 (Type 1 & 2), NABH, NABL, PCI DSS, and SOX, making him a trusted authority in audits and certifications.',
    avatar: '/src/assets/chief.png'
  },
];

const advisoryBoard = [
  { 
    name: 'Dr. T J Pradeep Kumar', 
    role: 'MD – Brookefield Hospital', 
    bio: 'Dr. T J Pradeep Kumar, Senior Consultant Physician and Cardio-Diabetologist with 28+ years of experience, is Medical Director of Brookefield Hospital, Bangalore. He founded BEAST – India\'s first 2-Wheeler ICU Emergency Response System – to save lives during the golden hour. His expertise spans diabetes reversal, preventive cardiology, geriatrics, emergency medicine, and multimorbidity care. A national speaker and mentor, he champions holistic, technology-driven healthcare, integrating AI and digital health innovations to transform patient outcomes.',
    avatar: '/src/assets/md.png'
  },
  { 
    name: 'Dr. R Ravikumar', 
    role: 'Director IPC - SIF', 
    bio: 'Dr R Ravikumar has 40 years of rich experience in Healthcare as senior medical microbiologist and infection control expert in clinical research, teaching, and healthcare quality management. He has served as Professor and Head of Neuromicrobiology at NIMHANS, Director of Infection Prevention & Control at BMJH-Sankalp, and Chief NABH Coordinator at Kidwai Memorial Institute of Oncology. His research spans HIV/AIDS, tuberculosis, meningitis, CNS infections, and antimicrobial resistance, with 60+ publications. He has guided MD/PhD scholars, led national and international projects, and serves as an assessor and trainer in NABH/NABL quality standards.',
    avatar: '/src/assets/direct.png'
  },
  { 
    name: 'Mr. Kiran Hegde', 
    role: 'Software Architect', 
    bio: 'Mr Kiran Hegde is a Software Architect with 24+ years of experience in IT, specializing in Full Stack Development across web and mobile platforms. Proven expertise in system integrations, ERP and CRM implementations (including Dynamics 365 CE), and delivering scalable solutions for retail, B2B, and diverse industry sectors. Adept in technical consulting, cloud integration strategies, DevOps practices, cross-functional team leadership, and data analysis. Proficient in modern development frameworks and technologies including .NET, Angular, Python, and Flutter.',
    avatar: '/src/assets/software_archi.png'
  },
  { 
    name: 'Varun KM', 
    role: 'CFO (Finance, Corporate Affairs)', 
    bio: 'CA Varun K M is a seasoned finance professional adept at delivering strategic financial guidance and operational excellence. His expertise spans across diverse industries, providing invaluable insights into optimizing financial processes and ensuring regulatory compliance.',
    avatar: '/src/assets/cfo.png'
  },
  { 
    name: 'Srinivasa R Rajagopal', 
    role: 'Advisor - Strategy & Management', 
    bio: 'Rajagopal is a Mechanical Engineer, who had worked with L&T for 20 years. He later became a consultant and is a partner in an e-vehicles company. Rajagopal has rich experience in managing corporate functions. Based in Mysuru, Rajagopal is CarePro\'s Advisory Chief Management Officer, maintaining oversight on Corporate functions such as Operations, Human Resources, Finance, and Legal.',
    avatar: '/src/assets/advisor.png'
  },
];

const OurTeamPage = () => {
  return (
    <div className="our-team-page">
      <section className="team-hero">
        <div className="team-hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Our Team</h1>
            <p>Experienced leaders driving innovation in healthcare technology and revenue cycle management</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="management-team-header">
            <h2>Management Team</h2>
          </div>
          <div className="team-grid">
            {managementTeam.map((member, idx) => (
              <div className="team-card" key={idx}>
                <div className="team-card-left">
                <div className="avatar" style={{ backgroundImage: `url(${member.avatar})` }} />
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                </div>
                <div className="team-card-right">
                <p className="bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="advisory-section">
        <div className="container">
          <div className="advisory-header">
            <h2>Advisory Board</h2>
          </div>
          <div className="advisory-grid">
            {advisoryBoard.map((member, idx) => (
              <div className="advisory-card" key={idx}>
                <div className="advisory-card-left">
                  <div className="advisory-avatar" style={{ backgroundImage: `url(${member.avatar})` }} />
                  <h3>{member.name}</h3>
                  <span className="advisory-role">{member.role}</span>
                </div>
                <div className="advisory-card-right">
                  <p className="advisory-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;
