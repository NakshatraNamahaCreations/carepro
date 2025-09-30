// import React, { useState } from 'react';
// import MissionVision from '../components/MissionVision';
// import './AboutPage.css';
// import CaseStudySlider from '../components/CaseStudySlider';
// import aboutBanner from '../assets/aboutus/about_banner.jpg';
// import casestudy3 from '../assets/casestudy/casestudy3.jpg';

// const AboutPage = () => {
//   const [openAccordion, setOpenAccordion] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenAccordion(openAccordion === index ? null : index);
//   };
//   return (
//     <div className="about-page">
//       {/* Hero Section */}
//       <section className="about-hero">
//         <div className="about-hero-banner">
//           <div className="about-hero-overlay"></div>
//           <div className="container">
//             <div className="hero-content">
//               <h1>About CarePro</h1>
//               <p>Transforming healthcare delivery through innovative home care solutions</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <MissionVision />

//       {/* Company Overview - Our Story */}
//       <section className="company-overview">
//         <div className="container">
//                 <div className="story-header">
//                   <h2>Our Story</h2>
//                   <p className="story-subtitle">From vision to reality, transforming healthcare one home at a time</p>
//                 </div>
          
//           <div className="overview-content">
//             <div className="overview-text">
//               <div className="story-timeline">
//                 <div className="timeline-item">
//                   <div className="timeline-marker">
//                     <div className="marker-dot"></div>
//                   </div>
//                   <div className="timeline-content">
//                     <h3>2018 - The Beginning</h3>
//                     <p>
//                       CarePro was founded with a simple yet powerful vision: to bring world-class healthcare 
//                       directly to patients' homes. We believe that healing happens best in familiar surroundings, 
//                       surrounded by loved ones and the comfort of home.
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="timeline-item">
//                   <div className="timeline-marker">
//                     <div className="marker-dot"></div>
//                   </div>
//                   <div className="timeline-content">
//                     <h3>2020 - Innovation & Growth</h3>
//                     <p>
//                       We pioneered the integration of cutting-edge medical technology with compassionate care, 
//                       establishing ourselves as leaders in home healthcare innovation and expanding our reach 
//                       to serve thousands of patients across multiple cities.
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="timeline-item">
//                   <div className="timeline-marker">
//                     <div className="marker-dot"></div>
//                   </div>
//                   <div className="timeline-content">
//                     <h3>2024 - Today & Beyond</h3>
//                     <p>
//                       Today, we continue to set new standards in home healthcare delivery, combining advanced 
//                       medical technology with personalized care to ensure exceptional outcomes for every patient 
//                       and family we serve.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="overview-image">
//               <div className="story-visual">
//                 <div className="visual-card main-card">
//                   <div className="card-image">
//                     <img src={aboutBanner} alt="About StellarRCM" />
//                   </div>
//                   <h4>Our Journey</h4>
//                   <p>Transforming healthcare through innovation</p>
//                 </div>
//                 <div className="visual-card secondary-card">
//                   <div className="card-image">
//                     <img src={casestudy3} alt="Healthcare Excellence" />
//                   </div>
//                   <h4>Healthcare Excellence</h4>
//                   <p>Proven track record of success</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <CaseStudySlider />

//       {/* Why Choose Us */}
//       <section className="why-choose-us">
//         <div className="container">
//           <div className="why-choose-header">
//             <h2>Why Choose Our <span className="highlight-text">Healthcare Services</span>?</h2>
//           </div>
          
//           <div className="why-choose-content">
//             <p>
//               Professional healthcare delivered to your doorstep. CarePro brings comprehensive medical services 
//               directly to your home with certified healthcare professionals ensuring safe, comfortable care. 
//               Get results in 12-72 hours via secure portal. All equipment sterilized to highest standards. 
//               24/7 customer support and flexible scheduling available. Trusted by thousands of families for 
//               reliable home healthcare solutions.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="faq-section">
//         <div className="container">
//           <div className="faq-header">
//             <h2>Frequently Asked <span className="highlight-text">Questions</span></h2>
//             <p>Find answers to common questions about our home healthcare services</p>
//           </div>
          
//           <div className="faq-accordion">
//             <div className={`accordion-item ${openAccordion === 0 ? 'active' : ''}`}>
//               <div className="accordion-header" onClick={() => toggleAccordion(0)}>
//                 <h3>What services does CarePro offer?</h3>
//                 <span className="accordion-icon">+</span>
//               </div>
//               <div className="accordion-content">
//                 <p>
//                   CarePro offers comprehensive home healthcare services including medical consultations, 
//                   diagnostic tests, sample collection, nursing care, physiotherapy, and specialized treatments. 
//                   Our certified healthcare professionals provide personalized care tailored to your specific 
//                   medical needs, all in the comfort of your home.
//                 </p>
//               </div>
//             </div>

//             <div className={`accordion-item ${openAccordion === 1 ? 'active' : ''}`}>
//               <div className="accordion-header" onClick={() => toggleAccordion(1)}>
//                 <h3>How quickly can I get my test results?</h3>
//                 <span className="accordion-icon">+</span>
//               </div>
//               <div className="accordion-content">
//                 <p>
//                   Most test results are available within 12-72 hours through our secure online portal or mobile app. 
//                   Critical results are prioritized and delivered even faster. You'll receive notifications via SMS 
//                   and email as soon as your results are ready, ensuring you stay informed about your health status.
//                 </p>
//               </div>
//             </div>

//             <div className={`accordion-item ${openAccordion === 2 ? 'active' : ''}`}>
//               <div className="accordion-header" onClick={() => toggleAccordion(2)}>
//                 <h3>Are your healthcare professionals certified?</h3>
//                 <span className="accordion-icon">+</span>
//               </div>
//               <div className="accordion-content">
//                 <p>
//                   Yes, all our healthcare professionals are fully certified and licensed. Our team includes 
//                   registered nurses, qualified doctors, certified phlebotomists, and specialized therapists. 
//                   We maintain the highest standards of medical practice and ensure all staff undergo regular 
//                   training and background verification.
//                 </p>
//               </div>
//             </div>

//             <div className={`accordion-item ${openAccordion === 3 ? 'active' : ''}`}>
//               <div className="accordion-header" onClick={() => toggleAccordion(3)}>
//                 <h3>How do I schedule an appointment?</h3>
//                 <span className="accordion-icon">+</span>
//               </div>
//               <div className="accordion-content">
//                 <p>
//                   Scheduling is easy and convenient. You can book appointments through our website, mobile app, 
//                   or by calling our 24/7 customer support. Simply select your preferred date and time, and our 
//                   team will confirm the appointment. We offer flexible scheduling including weekends and holidays 
//                   to accommodate your needs.
//                 </p>
//               </div>
//             </div>

//             <div className={`accordion-item ${openAccordion === 4 ? 'active' : ''}`}>
//               <div className="accordion-header" onClick={() => toggleAccordion(4)}>
//                 <h3>What areas do you serve?</h3>
//                 <span className="accordion-icon">+</span>
//               </div>
//               <div className="accordion-content">
//                 <p>
//                   CarePro currently serves over 50 cities across the country, with plans for continuous expansion. 
//                   Our service areas include major metropolitan cities and surrounding suburbs. You can check our 
//                   website or contact our support team to confirm if we serve your specific location.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

     
      
      

//       {/* Team Section */}
      
//     </div>
//   );
// };

// export default AboutPage;


import React, { useState } from "react";
import MissionVision from "../components/MissionVision";
import CaseStudySlider from "../components/CaseStudySlider";
import aboutBanner from "../assets/aboutus/about_banner.jpg";
import casestudy3 from "../assets/casestudy/casestudy3.jpg";
import styles from "./aboutPage.module.css"; // ✅ Import CSS module

const AboutPage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className={styles["about-page"]}>
      {/* Hero Section */}
      <section className={styles["about-hero"]}>
        <div className={styles["about-hero-banner"]}>
          <div className={styles["about-hero-overlay"]}></div>
          <div className="container">
            <div className={styles["hero-content"]}>
              <h1>About CarePro</h1>
              <p>
                Transforming healthcare delivery through innovative patient monitoring
                solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Company Overview - Our Story */}
      <section className={styles["company-overview"]}>
        <div className="container">
          <div className={styles["story-header"]}>
            <h2>Our Story</h2>
            <p className={styles["story-subtitle"]}>
              From vision to reality, transforming healthcare one home at a time
            </p>
          </div>

          <div className={styles["overview-content"]}>
            <div className={styles["overview-text"]}>
              <div className={styles["story-timeline"]}>
                {/* Timeline Item 1 */}
                <div className={styles["timeline-item"]}>
                  <div className={styles["timeline-marker"]}>
                    <div className={styles["marker-dot"]}></div>
                  </div>
                  <div className={styles["timeline-content"]}>
                    <h3>2018 - The Beginning</h3>
                    <p>
                      CarePro was founded with a simple yet powerful vision: to
                      bring world-class healthcare directly to patients' homes.
                      We believe that healing happens best in familiar
                      surroundings, surrounded by loved ones and the comfort of
                      home.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className={styles["timeline-item"]}>
                  <div className={styles["timeline-marker"]}>
                    <div className={styles["marker-dot"]}></div>
                  </div>
                  <div className={styles["timeline-content"]}>
                    <h3>2020 - Innovation & Growth</h3>
                    <p>
                      We pioneered the integration of cutting-edge medical
                      technology with compassionate care, establishing ourselves
                      as leaders in home healthcare innovation and expanding our
                      reach to serve thousands of patients across multiple
                      cities.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className={styles["timeline-item"]}>
                  <div className={styles["timeline-marker"]}>
                    <div className={styles["marker-dot"]}></div>
                  </div>
                  <div className={styles["timeline-content"]}>
                    <h3>2024 - Today & Beyond</h3>
                    <p>
                      Today, we continue to set new standards in home healthcare
                      delivery, combining advanced medical technology with
                      personalized care to ensure exceptional outcomes for every
                      patient and family we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Visual */}
            <div className={styles["overview-image"]}>
              <div className={styles["story-visual"]}>
                <div
                  className={`${styles["visual-card"]} ${styles["main-card"]}`}
                >
                  <div className={styles["card-image"]}>
                    <img src={aboutBanner} alt="About StellarRCM" />
                  </div>
                  <h4>Our Journey</h4>
                  <p>Transforming healthcare through innovation</p>
                </div>
                <div
                  className={`${styles["visual-card"]} ${styles["secondary-card"]}`}
                >
                  <div className={styles["card-image"]}>
                    <img src={casestudy3} alt="Healthcare Excellence" />
                  </div>
                  <h4>Healthcare Excellence</h4>
                  <p>Proven track record of success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudySlider />

      {/* Why Choose Us */}
      <section className={styles["why-choose-us"]}>
        <div className="container">
          <div className={styles["why-choose-header"]}>
            <h2>
              Why Choose {" "}
              <span className={styles["highlight-text"]}>
                CarePro
              </span>
              ?
            </h2>
          </div>
          <div className={styles["why-choose-content"]}>
            <div className={styles["why-choose-single-card"]}>
              <div className={styles["why-choose-points"]}>
                <div className={styles["why-choose-point"]}>
                  <span className={styles["check-icon"]}>✅</span>
                  <div className={styles["point-content"]}>
                    <strong>Certified Devices</strong> – FDA, CE, CDSCO approved; ISO 13485 compliant for medical device quality.
                  </div>
                </div>
                
                <div className={styles["why-choose-point"]}>
                  <span className={styles["check-icon"]}>✅</span>
                  <div className={styles["point-content"]}>
                    <strong>Data Security</strong> – ISO 27001 certified, HIPAA, GDPR, and DPDPA compliant.
                  </div>
                </div>
                
                <div className={styles["why-choose-point"]}>
                  <span className={styles["check-icon"]}>✅</span>
                  <div className={styles["point-content"]}>
                    <strong>Quality Standards</strong> – ISO 9001 ensures reliability and consistent service delivery.
                  </div>
                </div>
                
                <div className={styles["why-choose-point"]}>
                  <span className={styles["check-icon"]}>✅</span>
                  <div className={styles["point-content"]}>
                    <strong>Care Coordinators (nurses)</strong> – Available within seconds to guide patients, families, and providers.
                  </div>
                </div>
                
                <div className={styles["why-choose-point"]}>
                  <span className={styles["check-icon"]}>✅</span>
                  <div className={styles["point-content"]}>
                    <strong>Scalable Monitoring</strong> – 4G/Bluetooth/WiFi devices make CarePro future-ready.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles["faq-section"]}>
        <div className="container">
          <div className={styles["faq-header"]}>
            <h2>
              Frequently Asked{" "}
              <span className={styles["highlight-text"]}>Questions</span>
            </h2>
            <p>
              Find answers to common questions about our home healthcare
              services
            </p>
          </div>

          <div className={styles["faq-accordion"]}>
            {[
              {
                q: "What services does CarePro offer?",
                a: "CarePro offers comprehensive home healthcare services including medical consultations, diagnostic tests, sample collection, nursing care, physiotherapy, and specialized treatments.",
              },
              {
                q: "How quickly can I get my test results?",
                a: "Most test results are available within 12-72 hours through our secure online portal or mobile app. Critical results are prioritized and delivered even faster.",
              },
              {
                q: "Are your healthcare professionals certified?",
                a: "Yes, all our healthcare professionals are fully certified and licensed, including nurses, doctors, phlebotomists, and therapists.",
              },
              {
                q: "How do I schedule an appointment?",
                a: "You can book appointments through our website, mobile app, or by calling our 24/7 support. We offer flexible scheduling including weekends and holidays.",
              },
              {
                q: "What areas do you serve?",
                a: "CarePro currently serves over 50 cities nationwide. Check our website or contact support to confirm if we serve your area.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${styles["accordion-item"]} ${
                  openAccordion === idx ? styles.active : ""
                }`}
              >
                <div
                  className={styles["accordion-header"]}
                  onClick={() => toggleAccordion(idx)}
                >
                  <h3>{item.q}</h3>
                  <span className={styles["accordion-icon"]}>+</span>
                </div>
                <div className={styles["accordion-content"]}>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
