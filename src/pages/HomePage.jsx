import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HeroSlider from '../components/HeroSlider'
import ServicesSection from '../components/ServicesSection'
import AboutUs from '../components/AboutUs'
import CaseStudySlider from '../components/CaseStudySlider'
import TestimonialSection from '../components/TestimonialSection'
import HomeCTA from '../components/HomeCTA'
import MissionVision from '../components/MissionVision'


const HomePage = () => {
  return (
    <div className="home-page">
      <HomeBanner />
      <HeroSlider />
      <ServicesSection />
      <MissionVision/>
      <AboutUs />
      <CaseStudySlider/>
      <TestimonialSection />
      <HomeCTA />
    </div>
  )
}

export default HomePage
