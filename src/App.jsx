import { useState } from 'react'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import AboutUs from './components/AboutUs'
import ServicesSection from './components/ServicesSection'
import MissionVision from './components/MissionVision'
import CaseStudySlider from './components/CaseStudySlider'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSlider />
      <ServicesSection />
      <MissionVision />
      <AboutUs />
      <CaseStudySlider />
      <TestimonialSection />
      <Footer />
    </>
  )
}

export default App





