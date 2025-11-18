import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import useWindowSize from '../useWindowSize';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sectionRef = useRef(null);
  const dropdownRef = useRef(null);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 768;

  const projects = [
    {
      id: 1,
      name: "Shore.ai",
      category: "Product",
      image: "/images/Shore AI.jpg",
      link: "/shoreai",
      external: false
    },
    {
      id: 2,
      name: "Vision Adapters",
      category: "AI & ML",
      image: "/images/Vision Adapters.jpg",
      link: "https://letschec.my.canva.site/corbu-inc",
      external: true
    },
    {
      id: 3,
      name: "Text to Robotic Assembly",
      category: "AI & ML, Research",
      image: "/images/Text to Robotic.jpg",
      link: "https://letschec.my.canva.site/text-to-roboticassembly",
      external: true
    },
    {
      id: 4,
      name: "Sketch-to-BIM",
      category: "Product, AI & ML",
      image: "/images/Sketch to BIM.jpg",
      link: "https://letschec.my.canva.site/sketchtobimm",
      external: true
    },
    {
      id: 5,
      name: "ArchiDAO",
      category: "Entrepreneurship, Web3",
      image: "/images/ArchiDAO.jpg",
      link: "https://example.com/archidao",
      external: true
    },
    {
      id: 6,
      name: "Curator AI",
      category: "Product, AI & ML",
      image: "/images/Curator.jpg",
      link: "https://letschec.my.canva.site/curatorai",
      external: true
    },
    {
      id: 7,
      name: "PLUS",
      category: "Product, Entrepreneurship",
      image: "/images/Plus.jpg",
      link: "/plus",
      external: false
    },
    {
      id: 9,
      name: "Bike Design Completion",
      category: "AI & ML",
      image: "/images/Bike Design Completion.jpg",
      link: "https://letschec.my.canva.site/bike-design-inpainting",
      external: true
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category.split(',')[0].trim()))];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const checkVisibility = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Check if section is in viewport or close to it
        const isInView = rect.top < window.innerHeight * 1.5 && rect.bottom > -100;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };

    // Wait for preloader to finish, then check visibility
    const checkAfterPreloader = () => {
      const preloader = document.querySelector('.preloader');
      if (!preloader || preloader.style.display === 'none') {
        // Small delay to ensure DOM is ready
        setTimeout(checkVisibility, 200);
        return true;
      }
      return false;
    };

    // Check immediately
    if (!checkAfterPreloader()) {
      // If preloader is still there, check periodically
      const preloaderCheck = setInterval(() => {
        if (checkAfterPreloader()) {
          clearInterval(preloaderCheck);
        }
      }, 100);
      
      // Cleanup after 5 seconds max
      setTimeout(() => clearInterval(preloaderCheck), 5000);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Lower threshold to trigger earlier
        rootMargin: '200px 0px 0px 0px' // Trigger when section is 200px above viewport
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

  // Also trigger visibility when filter changes (in case projects were hidden)
  useEffect(() => {
    const checkVisibility = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Check if section is in viewport or close to it
        const isInView = rect.top < window.innerHeight * 1.5 && rect.bottom > -100;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };
    
    // Small delay to ensure DOM has updated after filter change
    const timeoutId = setTimeout(checkVisibility, 50);
    return () => clearTimeout(timeoutId);
  }, [activeFilter]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setIsDropdownOpen(false);
  };

  return (
    <section className="projects-section" ref={sectionRef}>
      <div className="projects-section-content">
      <p>
  {"Starting in architecture meant learning to read context and clients - understanding what they needed, then designing innovative spaces that made those needs real. Frustration with the communication gap between designers and clients led to using AR, VR and other technologies to let people walk through designs before building them. That innovation created a new role - the firm's first design technologist - building tools that connected designers, engineers and clients. At MIT, the focus shifted deeper into AI. Not just building with these models, but understanding how to build them responsibly. Studies in red-teaming, pluralistic alignment, and real cases where AI amplified biases shaped a research position at CSAIL working on human-AI interaction, focused on one question: how do we build systems that expand human agency rather than restrict it? The approach is unconventional - speaking both technology and design, driven by creating tools and technologies that empower people to achieve things they could not before."}
</p>
      </div>
      
      <div className="projects-section-image">
        {isMobile ? (
          <img src="/images/Richa Design Mobile.png" alt="Richa Gupta - Design Technologist" />
        ) : (
          <img src="/images/richa_design_tech.jpg" alt="Richa Gupta - Design Technologist" />
        )}
      </div>
      <div className="projects-container">
        {/* Section Title */}
        <div className="projects-title">
          <h2>The <span className="ideas">Interface</span> of Ideas</h2>
        </div>
        
        {/* Category Filter - Desktop */}
        <div className="projects-filter projects-filter-desktop">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Category Filter - Mobile Dropdown */}
        <div className="projects-filter-mobile" ref={dropdownRef}>
          <div className="custom-dropdown">
            <button
              className="custom-dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="custom-dropdown-selected">{activeFilter}</span>
              <span className={`custom-dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            {isDropdownOpen && (
              <div className="custom-dropdown-menu">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`custom-dropdown-item ${activeFilter === category ? 'active' : ''}`}
                    onClick={() => handleFilterChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`projects-grid ${isVisible ? 'animate' : ''}`}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {project.link && project.external ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link-wrapper"
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-category">{project.category}</p>
                  </div>
                </a>
              ) : project.link ? (
                <Link href={project.link}>
                  <div className="project-link-wrapper">
                    <div className="project-image">
                      <img src={project.image} alt={project.name} />
                    </div>
                    <div className="project-info">
                      <h3 className="project-name">{project.name}</h3>
                      <p className="project-category">{project.category}</p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div>
                  <div className="project-image">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-category">{project.category}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
