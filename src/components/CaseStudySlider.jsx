import React, { useState, useEffect, useRef } from 'react';
import './CaseStudySlider.css';
import casestudy1 from '../assets/casestudy/casestudy1.jpg';
import casestudy2 from '../assets/casestudy/casestudy2.jpg';
import casestudy3 from '../assets/casestudy/casestudy3.jpg';
import casestudy4 from '../assets/casestudy/casestudy4.jpg';

const CaseStudySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef(null);

  const caseStudies = [
    {
      id: 1,
      title: "Post-Surgical Care",
      description: "Discharged patients are still monitored 24/7; Care Coordinators escalate abnormal readings to surgeons.",
      image: casestudy1,
      link: "/case-study/post-surgical-care",
      category: "Case Scenario",
    },
    {
      id: 2,
      title: "Chronic Care (Diabetes/Hypertension)",
      description: "Vitals are securely logged in HMS for doctors to adjust care remotely.",
      image: casestudy2,
      link: "/case-study/chronic-care-management",
      category: "Case Scenario",
    },
    {
      id: 3,
      title: "Emergency Intervention",
      description: "When oxygen saturation drops, a Care Coordinator reaches out within seconds, and the doctor is simultaneously notified.",
      image: casestudy3,
      link: "/case-study/emergency-intervention",
      category: "Case Scenario",
    },
    {
      id: 4,
      title: "Vital Screening",
      description: "Comprehensive vital signs screening monitors temperature, blood pressure, heart rate, and oxygen saturation in real-time, enabling early detection of health issues.",
      image: casestudy4,
      link: "/case-study/vital-screening",
      category: "Case Scenario",
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          const next = prev + 1;
          return next >= caseStudies.length ? 0 : next;
        });
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, caseStudies.length, isHovered]);

  // Marquee animation effect
  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current;
      if (isHovered) {
        track.style.animationPlayState = 'paused';
      } else {
        track.style.animationPlayState = 'running';
      }
    }
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      return next >= caseStudies.length ? caseStudies.length - 1 : next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevSlide = prev - 1;
      return prevSlide < 0 ? 0 : prevSlide;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="case-study-slider">
      <div className="case-study-container">
        <div className="casestudy-slider__title-section">
          <h2>Case Scenarios</h2>
        </div>
        
        <div className="casestudy-slider__slide-main slick-init-loader slick-initialized slick-slider" 
             data-slide-autoplay="true" 
             data-slide-arrows="true" 
             data-slide-dots="false" 
             data-slide-desktop="3" 
             data-slide-tablet="2" 
             data-slide-mobile="1" 
             style={{backgroundColor: '#FFFFFF'}} 
             role="list"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
          
          <div className="slick-list draggable" style={{padding: '0px', height: '380px'}}>
            <div className="slick-track marquee-track" 
                 ref={trackRef}
                 style={{
                   opacity: 1, 
                   width: `${caseStudies.length * 2 * 600}px`
                 }}>
              
              {/* First set of cards */}
              {caseStudies.map((study, index) => (
                <div 
                  key={`first-${study.id}`}
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

              {/* Duplicate set of cards for seamless marquee */}
              {caseStudies.map((study, index) => (
                <div 
                  key={`second-${study.id}`}
                  className={`casestudy-slider__slide slick-slide`}
                  role="listitem"
                  aria-label={study.title}
                  style={{width: '600px'}}
                  tabIndex={-1}
                  data-slick-index={index + caseStudies.length}
                  aria-hidden="true"
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
                    <a href={study.link} className="case-study-item-link" tabIndex={-1}>
                      <span className="screen-reader-text">{study.title}</span>
                    </a>
                    <div className="casestudy-slider__content-inner">
                      <div className="drawer-text">
                        {study.category}
                      </div>
                      <div className="casestudy-slider__details">
                        <a href={study.link} className="case-study-block-title" tabIndex={-1}>
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
