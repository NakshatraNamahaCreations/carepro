import React, { useState, useEffect } from 'react';
import './CaseStudySlider.css';

const CaseStudySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const caseStudies = [
    {
      id: 1,
      title: "Transforming Home Healthcare Delivery with Advanced Technology Solutions",
      image: "/src/assets/casestudy/casestudy1.jpg",
      link: "/case-study/home-healthcare-transformation",
      category: "Case Study",
     
    },
    {
      id: 2,
      title: "Achieving 40% Cost Reduction Through Digital Patient Management Systems",
      image: "/src/assets/casestudy/casestudy2.jpg",
      link: "/case-study/digital-patient-management",
      category: "Case Study",
      
    },
    {
      id: 3,
      title: "Delivering 98% Patient Satisfaction Through Personalized Care Programs",
      image: "/src/assets/casestudy/casestudy3.jpg",
      link: "/case-study/personalized-care-programs",
      category: "Case Study",
      
    },
    {
      id: 4,
      title: "Revolutionizing Chronic Disease Management with AI-Powered Care Coordination",
      image: "/src/assets/casestudy/casestudy4.jpg",
      link: "/case-study/ai-chronic-disease-management",
      category: "Case Study",
      
    },
    {
      id: 5,
      title: "Enhancing Post-Surgical Recovery Through Integrated Patient Monitoring Services",
      image: "/src/assets/casestudy/casestudy5.jpg",
      link: "/case-study/post-surgical-recovery",
      category: "Case Study",
      
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, caseStudies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="case-study-slider">
      <div className="case-study-container">
        <div className="casestudy-slider__title-section">
          <h2>Case Studies</h2>
        </div>
        
        <div className="casestudy-slider__slide-main slick-init-loader slick-initialized slick-slider" 
             data-slide-autoplay="true" 
             data-slide-arrows="true" 
             data-slide-dots="false" 
             data-slide-desktop="3" 
             data-slide-tablet="2" 
             data-slide-mobile="1" 
             style={{backgroundColor: '#FFFFFF'}} 
             role="list">
          
          <div className="slick-list draggable" style={{padding: '0px', height: '380px'}}>
            <div className="slick-track" 
                 style={{
                   opacity: 1, 
                   width: `${caseStudies.length * 600}px`, 
                   transform: `translate3d(-${currentSlide * 600}px, 0px, 0px)`
                 }}>
              
              {caseStudies.map((study, index) => (
                <div 
                  key={study.id}
                  className={`casestudy-slider__slide slick-slide ${index === currentSlide ? 'slick-current slick-active slick-center' : ''}`}
                  role="listitem"
                  aria-label={study.title}
                  style={{width: '600px'}}
                  tabIndex={index === currentSlide ? 0 : -1}
                  data-slick-index={index}
                  aria-hidden={index !== currentSlide}
                >
                  <div className="casestudy-slider__content" data-url={study.link}>
                    <img 
                      loading="lazy" 
                      decoding="async" 
                      width="770" 
                      height="446" 
                      src={study.image} 
                      className="attachment-1032 size-1032" 
                      alt={study.title} 
                      title={study.title}
                    />
                    <div className="casestudy-slider__overlay" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}></div>
                    <a href={study.link} className="case-study-item-link" tabIndex={index === currentSlide ? 0 : -1}>
                      <span className="screen-reader-text">{study.title}</span>
                    </a>
                    <div className="casestudy-slider__content-inner">
                      <div className="drawer-text">
                        {study.category}
                      </div>
                      <div className="casestudy-slider__details">
                        <a href={study.link} className="case-study-block-title" tabIndex={index === currentSlide ? 0 : -1}>
                          {study.title}
                        </a>
                        <p className="case-study-description">
                          {study.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            className="slick-prev slick-arrow" 
            type="button" 
            onClick={prevSlide}
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            className="slick-next slick-arrow" 
            type="button" 
            onClick={nextSlide}
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySlider;
