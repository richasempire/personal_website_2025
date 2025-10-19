import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before fully in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="about-section" ref={sectionRef}>
      <div className="about-container">
        {/* Left side - Stacked "hello" text */}
        <div className={`hello-stack ${isVisible ? 'animate' : ''}`}>
          <div className="hello-text hello-top">hello</div>
          <div className="hello-text hello-middle">hello</div>
          <div className="hello-text hello-bottom">hello</div>
        </div>

        {/* Right side - Main content */}
        <div className="about-content">
          <div className="about-title">
            <span className="title-text">I&apos;m</span>
            <span className="title-name">Richa</span>
          </div>
          <div className="about-subtitle">a Design Technologist</div>
          <div className="about-location">Based in Massachusetts</div>
          <div className="about-description">
            5 years in architecture and tech, and still finding new ways to blend design logic with digital intelligence.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
