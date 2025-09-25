import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WhyCareProPage from './pages/WhyCareProPage'
import ContactPage from './pages/ContactPage'
import OurServicesPage from './pages/OurServicesPage'
import OurTeamPage from './pages/OurTeamPage'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-carepro" element={<WhyCareProPage />} />
          <Route path="/our-services" element={<OurServicesPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
