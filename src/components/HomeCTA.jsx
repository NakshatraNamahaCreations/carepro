import React, { useState } from 'react'
import './HomeCTA.css'
import DemoPopup from './DemoPopup'
import PartnershipPopup from './PartnershipPopup'
import CareCoordinatorPopup from './CareCoordinatorPopup'

const HomeCTA = () => {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)
  const [isPartnershipPopupOpen, setIsPartnershipPopupOpen] = useState(false)
  const [isCareCoordinatorPopupOpen, setIsCareCoordinatorPopupOpen] = useState(false)

  const handleBookDemo = (e) => {
    e.preventDefault()
    setIsDemoPopupOpen(true)
  }

  const handleCloseDemo = () => {
    setIsDemoPopupOpen(false)
  }

  const handleRequestPartnership = (e) => {
    e.preventDefault()
    setIsPartnershipPopupOpen(true)
  }

  const handleClosePartnership = () => {
    setIsPartnershipPopupOpen(false)
  }

  const handleTalkToCoordinator = (e) => {
    e.preventDefault()
    setIsCareCoordinatorPopupOpen(true)
  }

  const handleCloseCareCoordinator = () => {
    setIsCareCoordinatorPopupOpen(false)
  }

  return (
    <>
      <section className="home-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Get Started with CarePro</h2>
            <p>CarePro is more than RPM — it's a certified, nurse-led healthcare ecosystem.</p>
            <div className="cta-buttons">
              <button onClick={handleBookDemo} className="btn-primary">Book a Free Demo</button>
              <button onClick={handleRequestPartnership} className="btn-secondary">Request Partnership Info</button>
              <button onClick={handleTalkToCoordinator} className="btn-tertiary">Talk to a Care Coordinator</button>
            </div>
          </div>
        </div>
      </section>

      <DemoPopup isOpen={isDemoPopupOpen} onClose={handleCloseDemo} />
      <PartnershipPopup isOpen={isPartnershipPopupOpen} onClose={handleClosePartnership} />
      <CareCoordinatorPopup isOpen={isCareCoordinatorPopupOpen} onClose={handleCloseCareCoordinator} />
    </>
  )
}

export default HomeCTA


