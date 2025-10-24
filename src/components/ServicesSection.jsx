import React from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Remote Patient Monitoring (RPM)",
      description:
        "24/7 vitals tracking (BP, HR, SpO2, Glucose, Temp, ECG). AI-driven health alerts for clinicians and caregivers. Predictive analytics for early intervention. Integration with EMR/EHR.",
    },
    {
      id: 2,
      title: "Chronic Care Management (CCM)",
      description:
        "Personalized care plans. Regular follow-ups and education. AI reminders for medication and lifestyle tracking. Monthly reports for providers.",
    },
    {
      id: 3,
      title: "AI-Powered Insights",
      description:
        "Predict patient risk with advanced algorithms. Auto-generate reports and care recommendations. Health trend visualization dashboards.",
    },
    {
      id: 4,
      title: "Device & Connectivity Solutions",
      description:
        "Plug-and-play 4G-enabled kits for patients without smartphones. Easy onboarding & setup by our CarePro team. Device calibration and remote troubleshooting. Bluetooth and 4G/5G. ",
    },
    {
      id: 5,
      title: "Revenue Cycle & Compliance",
      description:
        "Automated data capture for reimbursement. Real-time Vitals tracking. Documentation support to ensure 100% audit compliance.",
    },
    {
      id: 6,
      title: "Emergency Response Services",
      description:
        "24/7 emergency medical response and rapid intervention services, providing peace of mind and immediate care when patients need it most.",
    },
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
              Every healthcare stakeholder has unique challenges—from reducing
              hospital readmissions to ensuring last-mile care delivery in rural
              areas. Our FDA, CE, CDSCO-certified devices, coupled with ISO
              13485, ISO 27001, ISO 9001 standards, and DPDPA compliance, ensure
              safety, accuracy, and trust for every partner.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <ul className="service-points">
                  {service.description
                    .split(". ")
                    .map(
                      (point, index) =>
                        point.trim() && (
                          <li key={index}>{point.replace(/\.$/, "")}</li>
                        )
                    )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
