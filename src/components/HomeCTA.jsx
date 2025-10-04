import React from 'react'
import './HomeCTA.css'

const HomeCTA = () => {
  return (
    <section className="home-cta">
      <div className="container">
        <div className="cta-content">
          <h2>Get Started with CarePro</h2>
          <p>CarePro is more than RPM — it's a certified, nurse-led healthcare ecosystem.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">Book a Free Demo</a>
            <a href="/contact" className="btn-secondary">Request Partnership Info</a>
            <a href="/contact" className="btn-tertiary">Talk to a Care Coordinator</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCTA


