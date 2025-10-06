import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WhyCareProPage from './pages/WhyCareProPage'
import ContactPage from './pages/ContactPage'
import OurServicesPage from './pages/OurServicesPage'
import OurTeamPage from './pages/OurTeamPage'
import RPMPlatformPage from './pages/RPMPlatformPage'
import TechnologyPage from './pages/TechnologyPage'
import PartnerWithUsPage from './pages/PartnerWithUsPage'
import CareerPage from './pages/CareerPage'


function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-carepro" element={<WhyCareProPage />} />
          <Route path="/our-services" element={<OurServicesPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/rpm-platform" element={<RPMPlatformPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
