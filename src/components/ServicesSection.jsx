import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Patient Monitoring",
      description: "Comprehensive medical care delivered directly to your doorstep, ensuring comfort and convenience for patients who cannot travel to medical facilities."
    },
    {
      id: 2,
      title: "Skilled Nursing Care",
      description: "Professional nursing services including wound care, medication management, and post-surgical care provided by licensed healthcare professionals."
    },
    {
      id: 3,
      title: "Physical Therapy",
      description: "Personalized rehabilitation and physical therapy services to help patients recover mobility and improve their quality of life in the comfort of their homes."
    },
    {
      id: 4,
      title: "Chronic Disease Management",
      description: "Specialized care for patients with ongoing health conditions, including diabetes management, heart disease monitoring, and medication adherence support."
    },
    {
      id: 5,
      title: "Medical Equipment Management",
      description: "Complete setup, maintenance, and training for medical equipment, ensuring patients have access to the tools they need for optimal health outcomes."
    },
    {
      id: 6,
      title: "Emergency Response Services",
      description: "24/7 emergency medical response and rapid intervention services, providing peace of mind and immediate care when patients need it most."
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div className="services-title-section">
            <h2>
              <span className="title-line-1">How We Deliver</span>
              <span className="title-line-2">Healthcare</span>
              <span className="title-line-3">Excellence</span>
            </h2>
            <p>
              With deep expertise in home healthcare, medical technology, and patient care—along with our comprehensive service platform—we help patients recover faster, maintain independence, and achieve better health outcomes. And we deliver it all through a seamless at-home service model.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={`/services/${service.id}`} className="learn-more-link">
                  Learn More <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default ServicesSection;
