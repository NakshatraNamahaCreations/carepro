import React from 'react'
import HeroSlider from '../components/HeroSlider'
import ServicesSection from '../components/ServicesSection'
import AboutUs from '../components/AboutUs'
import CaseStudySlider from '../components/CaseStudySlider'
import TestimonialSection from '../components/TestimonialSection'
import MissionVision from '../components/MissionVision'


const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSlider />
      <ServicesSection />
      <MissionVision/>
      <AboutUs />
      <CaseStudySlider/>
      <TestimonialSection />
    
    </div>
  )
}

export default HomePage
