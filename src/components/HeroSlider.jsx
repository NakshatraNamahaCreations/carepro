import React, { useState, useEffect } from 'react';
import './HeroSlider.css';
import home1 from '../assets/home_banner/home1.jpg';
import home2 from '../assets/home_banner/home2.jpg';
import home3 from '../assets/home_banner/home3.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  const slides = [
    {
      id: 1,
      type: 'image',
      imageSrc: home1,
      heading:  'Your Health. Connected. 24/7.',
      description: 'CarePro brings hospital-level monitoring to homes and communities with smart 4G, Bluetooth, and WiFi-enabled devices — supported by our trained Care Coordinators (nurses) available within seconds.',
      buttonText: 'Explore Solutions',
      buttonLink: 'Talk to Our Team'
    },
    {
      id: 2,
      type: 'image',
      imageSrc: home2,
      heading: 'FDA, CE, CDSCO-Certified Devices',
      description: 'Our certified devices, coupled with ISO 13485, ISO 27001, ISO 9001 standards, and DPDPA compliance, ensure safety, accuracy, and trust for every partner.',
      buttonText: 'Learn More',
      buttonLink: 'Talk to Our Team'
    },
    {
      id: 3,
      type: 'image',
      imageSrc: home3,
      heading: 'Seamless Integration Across Healthcare Systems',
      description: 'CarePro\'s RPM ecosystem integrates seamlessly with existing healthcare infrastructure, providing real-time monitoring and immediate response capabilities for better patient outcomes.',
      buttonText: 'Get Started',
      buttonLink: 'Talk to Our Team'
    }
  ];

  useEffect(() => {
    setIsInitialized(true);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="homepage-banner-slider">
      <div className="homepage-banner-slider-container">
        <div className="homepage-banner-slider-cards">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`homepage-banner-card ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'prev' : ''} ${index > currentSlide ? 'next' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <div 
                className="homepage-banner-card-image"
                style={{ backgroundImage: `url(${slide.imageSrc})` }}
              />
              
              <div className="homepage-banner-card-content">
                <h1 className="homepage-banner-card-heading">{slide.heading}</h1>
                <p className="homepage-banner-card-description">{slide.description}</p>
                <a 
                  href={slide.buttonLink} 
                  className="btn-main btn-primary"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="homepage-banner-navigation">
          <button 
            className="nav-arrow nav-prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="nav-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <button 
            className="nav-arrow nav-next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
