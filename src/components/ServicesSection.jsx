import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Remote Patient Monitoring (RPM)",
      description: "FDA, CE, CDSCO-certified devices with 4G/Bluetooth/WiFi connectivity for continuous vital monitoring, seamlessly integrating with hospitals, clinics, and home healthcare agencies."
    },
    {
      id: 2,
      title: "Care Coordinator Support",
      description: "Trained nurses available within seconds to guide patients, families, and providers, providing 24/7 support and immediate response to abnormal readings."
    },
    {
      id: 3,
      title: "Hospital Management System Integration",
      description: "Seamless integration with existing HMS to ensure patient history, next steps, and long-term records are always updated with real-time monitoring data."
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
              <span className="title-line-1">CarePro's Remote Patient</span>
              <span className="title-line-2">Monitoring (RPM)</span>
              <span className="title-line-3">Ecosystem</span>
            </h2>
            <p>
              Every healthcare stakeholder has unique challenges—from reducing hospital readmissions to ensuring last-mile care delivery in rural areas. Our FDA, CE, CDSCO-certified devices, coupled with ISO 13485, ISO 27001, ISO 9001 standards, and DPDPA compliance, ensure safety, accuracy, and trust for every partner.
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
