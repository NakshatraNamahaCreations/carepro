import React from 'react'
import './HomeCTA.css'

const HomeCTA = () => {
  return (
    <section className="home-cta">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Transform Your Practice?</h2>
          <p>Let us help you optimize your healthcare operations and improve patient outcomes</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">Get Started</a>
            <a href="/contact" className="btn-secondary">Schedule Consultation</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCTA


